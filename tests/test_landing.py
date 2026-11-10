from pathlib import Path
import unittest,re,difflib,hashlib
P=Path(__file__).resolve().parents[1]
OLD=(P/'tests/fixtures/keiei-server-20261110.html').read_text(encoding='utf-8')
NEW=(P/'live/keiei_new.html').read_text(encoding='utf-8')
class LandingTests(unittest.TestCase):
 def test_program_and_preparation(self):
  for term in ['12:00〜13:00','13:00〜14:00','64の経営者のAIスキル','最近試したこと','メールの本人リンクで確認する','申込時と同じメールアドレス','もう一度','日本時間']:
   self.assertIn(term,NEW)
 def test_no_old_time_or_private_meet(self):
  for term in ['12:30','13:50','80分','https://meet.google.com/']:
   self.assertNotIn(term,NEW)
 def test_links_preserved_and_two_added(self):
  from collections import Counter
  links=lambda s:Counter(re.findall(r'href="([^"]+)"',s))
  before,after=links(OLD),links(NEW)
  self.assertFalse(before-after)
  self.assertEqual(after-before,{'#weekly':1,'https://myhou.co.jp/keiei/today/':1,'https://ca.mandalachart.jp/dojo':1})
 def test_pricing_unchanged_except_time(self):
  def section(s): return s[s.index('<section class="sec alt" id="price">'):s.index('<!-- ═══ FAQ')]
  self.assertEqual(section(OLD).replace('12:30〜13:50','12:00〜14:00'),section(NEW))
 def test_schedule_history_preserved(self):
  for date in ['10/6','10/13','10/20','10/27','11/3','11/10','11/17','11/24','12/1']:
   self.assertIn('>'+date+'</div>',NEW)
  self.assertIn('文化の日のため休講です',NEW)
  self.assertNotIn('次回はE4',NEW)
 def test_unrelated_sections_identical(self):
  def sec(s): return re.findall(r'<section\b.*?</section>',s,re.S)
  old,new=sec(OLD),sec(NEW)
  self.assertEqual(len(old),len(new))
  for a,b in zip(old,new):
   if any(x in a for x in ['class="hero"','STEP 1 ／ 見る','毎週やること','id="price"','class="wrap final"']): continue
   self.assertEqual(a,b)
 def test_scripts_and_images_preserved(self):
  for pat in [r'<script.*?</script>',r'<img\b[^>]*>']:
   self.assertEqual(re.findall(pat,OLD,re.S),re.findall(pat,NEW,re.S))
if __name__=='__main__': unittest.main()
