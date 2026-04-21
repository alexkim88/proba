import os
import glob
import re

html_files = glob.glob('*.html')
files_to_skip = ['index.html', 'admin.html', 'code.html']

for fpath in html_files:
    if fpath in files_to_skip:
        continue
        
    with open(fpath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Check if we already added them to avoid duplicates
    if 'data-i18n="nav_home"' in content and '<nav class="main-nav"' in content:
        # Wait, the mobile-bottom-nav also has nav_home. So check if it's inside mainNav.
        # Let's search inside mainNav.
        pass
    
    # Regex to find the <nav class="main-nav" id="mainNav"> and add links inside
    # We will replace <nav class="main-nav" id="mainNav"> with the tags.
    replacement = r'''<nav class="main-nav" id="mainNav">
                <a href="index.html" data-i18n="nav_home">Головна</a>
                <a href="index.html#categories" data-i18n="nav_categories">Категорії</a>'''
                
    new_content, count = re.subn(r'<nav class="main-nav"\s+id="mainNav">', replacement, content, count=1)
    
    if count > 0:
        with open(fpath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {fpath}")
    else:
        print(f"Skipped {fpath} (mainNav not found)")
