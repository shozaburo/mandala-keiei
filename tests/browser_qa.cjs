const fs=require('fs'),path=require('path'),assert=require('assert');
const {chromium}=require('C:/Users/matsu/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const root=path.resolve(__dirname,'..');
(async()=>{
 const browser=await chromium.launch({headless:true,executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe'});
 const results=[];fs.mkdirSync(path.join(root,'qa'),{recursive:true});
 for(const width of [320,390,768,1440]){
  const page=await browser.newPage({viewport:{width,height:1000}});
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.route('**/_cv/**',r=>r.fulfill({body:''}));
  await page.route('https://myhou.co.jp/keiei/',r=>r.fulfill({contentType:'text/html; charset=utf-8',body:fs.readFileSync(path.join(root,'live/keiei_new.html'),'utf8')}));
  await page.goto('https://myhou.co.jp/keiei/',{waitUntil:'networkidle'});
  assert.equal(await page.locator('#weekly .weekly-program .tt-row').count(),2);
  assert.equal(await page.locator('.weekly-prep li').count(),3);
  assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false,'overflow '+width);
  await page.locator('a[href="#weekly"]').click();
  await page.waitForTimeout(600);
  assert(await page.locator('#weekly').isVisible());
  await page.screenshot({path:path.join(root,'qa', 'weekly-'+width+'.png')});
  await page.locator('.weekly-program').screenshot({path:path.join(root,'qa','program-'+width+'.png')});
  await page.locator('.weekly-prep').screenshot({path:path.join(root,'qa','prep-'+width+'.png')});
  for(const label of ['みんなのボードを開く','経営塾の道場を開く']){
   const a=page.getByRole('link',{name:new RegExp(label)});assert(await a.isVisible());
   const box=await a.boundingBox();assert(box.width>=44 && box.height>=44);
   await a.focus();assert(await a.evaluate(e=>e===document.activeElement));
  }
  assert.deepEqual(errors,[]);
  results.push({width,overflow:false,errors,linksAndFocus:'PASS',note:'Candidate HTML intercepted locally; images fetched from existing public site; analytics blocked'});
  await page.close();
 }
 fs.writeFileSync(path.join(root,'qa/results.json'),JSON.stringify(results,null,2));
 await browser.close();console.log(JSON.stringify(results));
})().catch(e=>{console.error(e);process.exitCode=1});
