import os
import glob

html_files = glob.glob('*.html')
files_to_skip = ['admin.html', 'code.html']

header_html = """                        <div class="hero-cat-header">
                            <i class="ph ph-list"></i>
                            <span data-i18n="hero_cat_title">Все категорії</span>
                            <i class="ph ph-caret-down"></i>
                        </div>
"""

for fpath in html_files:
    if fpath in files_to_skip:
        continue
    with open(fpath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if '<div class="hero-cat-header">' in content:
        print(f"Skipping {fpath}, header already exists.")
        continue

    target_str = '<div class="hero-categories-sidebar">'
    if target_str in content:
        content = content.replace(target_str, target_str + "\n" + header_html)
        with open(fpath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {fpath}")
    else:
        print(f"Target sidebar not found in {fpath}")
