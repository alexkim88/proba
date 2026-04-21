import os
import glob
import re

html_files = glob.glob('*.html')
files_to_skip = ['admin.html', 'code.html']

for fpath in html_files:
    if fpath in files_to_skip:
        continue
        
    with open(fpath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 1. Remove Home link
    content = re.sub(r'<a href="[^"]*index\.html[^"]*"[^>]*data-i18n="nav_home"[^>]*>.*?</a>\s*', '', content)
    content = re.sub(r'<a href="#hero"[^>]*data-i18n="nav_home"[^>]*>.*?</a>\s*', '', content)
    
    # 2. Remove Categories link
    content = re.sub(r'<a href="[^"]*index\.html#categories[^"]*"[^>]*data-i18n="nav_categories"[^>]*>.*?</a>\s*', '', content)
    content = re.sub(r'<a href="#categories"[^>]*data-i18n="nav_categories"[^>]*>.*?</a>\s*', '', content)
    
    # 3. Rename Products link
    content = re.sub(r'(<a href="[^"]*#products"[^>]*data-i18n="nav_products"[^>]*>)(.*?)(</a>)', r'\1Популярні товари\3', content)
    
    with open(fpath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Updated {fpath}")
