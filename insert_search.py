import os
import glob

html_files = glob.glob('*.html')
files_to_skip = ['admin.html', 'code.html'] # if code.html exists

search_html = """            <div class="header-search">
                <div class="search-category-dd">
                    <span data-i18n="search_all">Все</span>
                    <i class="ph ph-caret-down"></i>
                </div>
                <div class="header-search-input-wrapper">
                    <i class="ph ph-magnifying-glass"></i>
                    <input type="text" placeholder="Найдите свой любимый товар..." data-i18n-placeholder="search_placeholder">
                </div>
                <button class="search-btn" data-i18n="search_button">Поиск</button>
            </div>
"""

for fpath in html_files:
    if fpath in files_to_skip:
        continue
    with open(fpath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if '<div class="header-search">' in content:
        print(f"Skipping {fpath}, search already exists.")
        continue

    # Find the insertion point: right before <div class="header-actions">
    # Typically it looks like:
    # </nav>
    # <div class="header-actions">
    
    target_str = '<div class="header-actions">'
    if target_str in content:
        content = content.replace(target_str, search_html + " " * 12 + target_str)
        with open(fpath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {fpath}")
    else:
        print(f"Target not found in {fpath}")
