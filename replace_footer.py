import os
import re

DIR = r"d:\antig 04.04 sicure box\progekt-main\cctv_redesign"

NEW_CSS = """/* ============================================================
   FOOTER
   ============================================================ */
:root {
    --apple-bg: #f5f5f7;
    --apple-text-primary: #1d1d1f;
    --apple-text-secondary: #86868b;
    --apple-border: rgba(0, 0, 0, 0.1);
    --apple-glass: rgba(255, 255, 255, 0.7);
}

.site-footer {
    background: var(--apple-glass);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-top: 1px solid var(--apple-border);
    margin-top: 5rem;
    padding: 4rem 1.5rem 3rem 1.5rem;
    color: var(--apple-text-primary);
}

.site-footer .container {
    max-width: 1280px;
    margin: 0 auto;
}

.footer-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;
    margin-bottom: 4rem;
}

@media (min-width: 768px) {
    .footer-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 1024px) {
    .footer-grid { grid-template-columns: repeat(4, 1fr); }
}

.footer-links h4 {
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--apple-text-primary);
    margin-bottom: 1.25rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.footer-links ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
}

.footer-links a {
    font-size: 0.875rem;
    color: var(--apple-text-secondary);
    transition: color 0.2s ease;
    text-decoration: none;
}

.footer-links a:hover {
    color: var(--apple-text-primary);
    text-decoration: underline;
}

.footer-schedule {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    font-size: 0.875rem;
    color: var(--apple-text-secondary);
}

.footer-schedule-row {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.footer-schedule-row .text-icon {
    font-size: 1rem;
    color: var(--color-primary);
}

.footer-schedule-row .text-primary {
    color: var(--apple-text-primary);
    font-weight: 500;
}

.socials-title {
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--apple-text-primary);
    margin-bottom: 1rem;
    display: block;
}

.footer-socials {
    display: flex;
    gap: 0.75rem;
    align-items: center;
    flex-wrap: wrap;
}

.social-icon {
    width: 2.25rem;
    height: 2.25rem;
    border-radius: 50%;
    background: rgba(0,0,0,0.05);
    display: flex !important;
    align-items: center;
    justify-content: center;
    color: var(--color-text-secondary);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    text-decoration: none;
    position: relative;
}
.social-icon iconify-icon {
    font-size: 1.1rem;
}

.social-icon:hover {
    background: rgba(0,0,0,0.1);
    transform: translateY(-2px);
    color: var(--apple-text-primary);
}

.contact-phone {
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: -0.025em;
    color: var(--apple-text-primary);
    display: block;
    margin-bottom: 0.5rem;
}

.contact-email {
    font-size: 0.875rem;
    color: #0066cc;
    text-decoration: none;
    transition: all 0.2s ease;
    display: block;
    margin-bottom: 0.5rem;
}

.contact-email:hover {
    text-decoration: underline;
}

.contact-address {
    font-size: 0.875rem;
    color: var(--apple-text-secondary);
    line-height: 1.625;
}

.footer-bottom {
    padding-top: 2rem;
    border-top: 1px solid var(--apple-border);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 1.5rem;
}

@media (min-width: 768px) {
    .footer-bottom {
        flex-direction: row;
    }
}

.copyright-text {
    font-size: 0.75rem;
    color: var(--apple-text-secondary);
    font-weight: 300;
    text-align: center;
}

@media (min-width: 768px) {
    .copyright-text { text-align: left; }
}

.footer-payment-methods {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    filter: grayscale(100%);
    opacity: 0.6;
    transition: all 0.5s ease;
    font-size: 1.8rem;
}

.footer-payment-methods:hover {
    filter: grayscale(0%);
    opacity: 1;
}

/* Mobile Accordion */
.footer-links-collapsible h4 {
    cursor: pointer;
}

.footer-chevron {
    transition: transform 0.3s ease;
}

.footer-links-collapsible.active .footer-chevron {
    transform: rotate(180deg);
}

@media (min-width: 768px) {
    .footer-links-collapsible h4 { cursor: default; }
    .footer-chevron { display: none; }
    
    .footer-links-collapsible .acc-content {
        display: flex !important;
        flex-direction: column;
    }
    .footer-links-collapsible .acc-content-block {
        display: block !important;
    }
}

@media (max-width: 767px) {
    .footer-links-collapsible .acc-content { display: none; }
    .footer-links-collapsible.active .acc-content { display: flex; flex-direction: column; padding-top: 10px; }
    
    .footer-links-collapsible .acc-content-block { display: none; }
    .footer-links-collapsible.active .acc-content-block { display: block; padding-top: 10px; }
}
"""

NEW_HTML = """<footer class="site-footer custom-apple-footer">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-links footer-links-collapsible">
                    <h4><span data-i18n="footer_info">Інформація</span> <span class="footer-chevron"><iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon></span></h4>
                    <ul class="acc-content">
                        <li><a href="about.html" class="footer-link" data-i18n="footer_about">Про нас</a></li>
                        <li><a href="#" class="footer-link" data-i18n="footer_wholesale">Оптовим клієнтам</a></li>
                        <li><a href="#" class="footer-link" data-i18n="footer_offer">Публічна оферта</a></li>
                        <li><a href="returns.html" class="footer-link" data-i18n="footer_return_policy">Політика повернення товару</a></li>
                    </ul>
                </div>
                <div class="footer-links footer-links-collapsible">
                    <h4><span data-i18n="footer_categories">Категорії</span> <span class="footer-chevron"><iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon></span></h4>
                    <ul class="acc-content" id="dynamic-footer-pages">
                        <li><a href="category.html?id=cat_cameras" class="footer-link" data-i18n="cat_cameras">Камери відеоспостереження</a></li>
                        <li><a href="category.html?id=cat_lighting" class="footer-link" data-i18n="cat_lighting">Розумне освітлення</a></li>
                        <li><a href="category.html?id=cat_health" class="footer-link" data-i18n="cat_health">Краса та здоров'я</a></li>
                        <li><a href="category.html?id=cat_accessories" class="footer-link" data-i18n="cat_accessories">Аксесуари та гаджети</a></li>
                        <li><a href="category.html?id=cat_other" class="footer-link" data-i18n="cat_other">Інше</a></li>
                    </ul>
                </div>
                <div class="footer-links footer-links-collapsible">
                    <h4><span data-i18n="footer_working_hours">Час роботи</span> <span class="footer-chevron"><iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon></span></h4>
                    <div class="acc-content">
                        <div class="footer-schedule">
                            <div class="footer-schedule-row">
                                <iconify-icon icon="solar:clock-circle-bold-duotone" class="text-icon"></iconify-icon>
                                <div class="text-primary" data-i18n="footer_time_weekdays">ПН-ПТ: 09:00 - 18:00</div>
                            </div>
                            <div class="footer-schedule-row">
                                <iconify-icon icon="solar:calendar-minimalistic-bold-duotone" class="text-icon"></iconify-icon>
                                <div class="text-muted" data-i18n="footer_time_weekend">СБ-ВС: вихідний</div>
                            </div>
                        </div>
                        <div style="margin-top: 32px">
                            <span data-i18n="footer_social_text" class="socials-title">Ми в соціальних мережах</span>
                            <div class="footer-socials">
                                <a href="#" aria-label="facebook" class="social-icon"><iconify-icon icon="mdi:facebook"></iconify-icon></a>
                                <a href="#" aria-label="instagram" class="social-icon"><iconify-icon icon="mdi:instagram"></iconify-icon></a>
                                <a href="#" aria-label="youtube" class="social-icon"><iconify-icon icon="mdi:youtube"></iconify-icon></a>
                                <a href="#" aria-label="tiktok" class="social-icon"><iconify-icon icon="ic:baseline-tiktok"></iconify-icon></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer-links footer-links-collapsible">
                    <h4><span data-i18n="footer_contacts_title">Наші контакти</span> <span class="footer-chevron"><iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon></span></h4>
                    <div class="acc-content-block">
                        <a href="tel:+380663842433" class="contact-phone">+38 (066) 384-24-33</a>
                        <a href="mailto:zakaz@magnitek.ua" class="contact-email">zakaz@magnitek.ua</a>
                        <div class="contact-address" data-i18n="footer_address">м. Харків, вул. Василя Стуса, 4а,<br>61154</div>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p class="copyright-text" data-i18n="footer_rights">© 2026 SECURBOX. Усі права захищені.</p>
                <div class="footer-payment-methods">
                    <iconify-icon icon="logos:visa"></iconify-icon>
                    <iconify-icon icon="logos:mastercard"></iconify-icon>
                    <iconify-icon icon="logos:apple-pay"></iconify-icon>
                    <iconify-icon icon="logos:google-pay"></iconify-icon>
                </div>
            </div>
        </div>
    </footer>"""

def update_css():
    css_path = os.path.join(DIR, "style.css")
    with open(css_path, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Replace old footer styles up to SCROLL REVEAL ANIMATION
    pattern = re.compile(r"/\* ============================================================\s*FOOTER(.*?)s*============================================================ \*/\s*:root \{(.*?)/\*\s*============================================================\s*SCROLL REVEAL ANIMATION", flags=re.DOTALL)
    # Actually wait! The original style didn't have :root inside FOOTER. It was:
    # /* ============================================================  FOOTER ============================================================ */
    # .site-footer { ...
    # Let's write a robust regex.
    pattern = re.compile(r"/\* ============================================================\s*FOOTER\s*============================================================ \*/(.*?)/\* ============================================================\s*SCROLL REVEAL ANIMATION", flags=re.DOTALL)
    
    match = pattern.search(content)
    if match:
       print("Found main footer css.")
       content = content[:match.start()] + NEW_CSS + "\n" + "/* ============================================================\n   SCROLL REVEAL ANIMATION" + content[match.end():]
    else:
       print("Could not find main footer CSS block.")
    
    # Remove responsive footer styling block
    responsive_pattern = re.compile(r"\.site-footer\s*\{\s*padding:\s*40px\s*0\s*20px;\s*\}\s*\.footer-brand\s*p\s*\{\s*font-size:\s*0\.85rem;\s*\}\s*\.footer-links\s*h4\s*\{\s*margin-bottom:\s*12px;\s*\}", flags=re.DOTALL)
    content = responsive_pattern.sub(r"", content)
    
    with open(css_path, "w", encoding="utf-8") as f:
        f.write(content)
    print("Updated style.css")

def update_html_files():
    for fn in os.listdir(DIR):
        if fn.endswith("-kopiya.html") or fn == "code.html":
            continue
        if fn.endswith(".html"):
            path = os.path.join(DIR, fn)
            with open(path, "r", encoding="utf-8") as f:
                content = f.read()
            
            # Use non-greedy match to replace footer
            pattern = re.compile(r"<footer class=\"site-footer[^>]*>.*?</footer>", flags=re.DOTALL)
            match = pattern.search(content)
            if match:
               content = content[:match.start()] + NEW_HTML + content[match.end():]
               with open(path, "w", encoding="utf-8") as f:
                   f.write(content)
               print(f"Updated footer in {fn}")
            else:
               # Try looking for just <footer...
               pattern = re.compile(r"<footer[^>]*>.*?</footer>", flags=re.DOTALL)
               match = pattern.search(content)
               if match:
                   content = content[:match.start()] + NEW_HTML + content[match.end():]
                   with open(path, "w", encoding="utf-8") as f:
                       f.write(content)
                   print(f"Updated generic footer in {fn}")

if __name__ == "__main__":
    update_css()
    update_html_files()
