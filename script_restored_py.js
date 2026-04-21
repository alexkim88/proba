document.addEventListener('DOMContentLoaded', () => {

    function initMobileSidebar() {
        if (document.getElementById('mobileSidebar')) return;

        const sidebarHTML = `
    <div class="sidebar-overlay" id="sidebarOverlay"></div>
    <aside class="mobile-sidebar" id="mobileSidebar">
        <!-- Header -->
        <div class="ms-header">
            <a href="index.html" class="logo">
                <i class="ph-fill ph-shield-check logo-icon"></i>
                <span>SECUR</span>
            </a>
            <button class="ms-close" id="msCloseBtn" aria-label="Close Menu">
                <i class="ph-fill ph-x"></i>
            </button>
        </div>
        
        <!-- User Auth -->
        <div class="ms-auth">
            <i class="ph ph-user ms-auth-icon"></i>
            <div class="ms-auth-links">
                <div class="ms-auth-top">
                    <a href="#" data-i18n="auth_login">Вхід</a>
                    <a href="#" data-i18n="auth_register" class="ms-reg">Реєстрація</a>
                </div>
                <p data-i18n="auth_desc">Авторизуйтесь для отримання розширених можливостей</p>
            </div>
        </div>

        <!-- Action Buttons -->
        <div class="ms-actions">
            <a href="index.html#categories" class="ms-btn ms-btn-primary" data-i18n="ms_catalog">Каталог</a>
            <a href="cart.html" class="ms-btn ms-btn-outline" data-i18n="ms_cart">Кошик</a>
        </div>

        <!-- Settings (Lang) -->
        <div class="ms-settings">
            <div class="ms-setting-group">
                <span class="ms-label" data-i18n="ms_lang">Мова:</span>
                <div class="ms-lang-switch">
                    <button class="ms-lang-btn active" data-lang="ua">UA</button>
                    <button class="ms-lang-btn" data-lang="ru">RU</button>
                </div>
            </div>
        </div>

        <!-- Dynamic Admin Nav Links -->
        <div class="ms-section ms-dynamic-nav" style="border-top: none; padding-top: 10px;">
             <div class="ms-group-title" data-i18n="ms_navigation">НАВІГАЦІЯ</div>
             <ul class="ms-link-list" id="msDynamicNavLinks"></ul>
        </div>

        <!-- Contact Info -->
        <div class="ms-section">
            <div class="ms-phone-item" data-contact-wrapper="schedule">
                <strong data-i18n="ms_work_hours_title">Час роботи:</strong>
                <span data-contact="schedule">ПН-ПТ: 09:00 - 18:00</span>
            </div>
            
            <div class="ms-phone-item" data-contact-wrapper="phone">
                <strong data-i18n="ms_phones_title">Телефони:</strong>
                <a href="tel:+380663842433" data-contact="phone">+38 (066) 384-24-33</a>
            </div>
            
            <div class="ms-phone-item" data-contact-wrapper="email">
                <strong data-i18n="ms_email_title">Пошта:</strong>
                <a href="mailto:zakaz@magnitek.ua" data-contact="email">zakaz@magnitek.ua</a>
            </div>
        </div>

        <!-- Address -->
        <div class="ms-section" data-contact-wrapper="address">
            <div class="ms-group-title" data-i18n="ms_address_title">Наша адреса:</div>
            <div class="ms-address-text" data-contact="address">м. Харків, вул. Василя Стуса, 4а, 61154</div>
        </div>
    </aside>
    `;
        document.body.insertAdjacentHTML('beforeend', sidebarHTML);
    }

    initMobileSidebar();

    function initFooterAccordion() {
        const headers = document.querySelectorAll('.footer-links-collapsible h4');
        headers.forEach(header => {
            header.addEventListener('click', () => {
                if (window.innerWidth > 768) return;
                
                const parent = header.parentElement;
                const isActive = parent.classList.contains('active');
                
                // Optional: close other open accordions
                // document.querySelectorAll('.footer-links-collapsible').forEach(el => el.classList.remove('active'));
                
                if (isActive) {
                    parent.classList.remove('active');
                } else {
                    parent.classList.add('active');
                }
            });
        });
    }

    initFooterAccordion();

    const DEFAULT_NAVIGATION = [
        { id: 1, ua: 'Головна', ru: 'Главная', url: 'index.html', active: true, isMobileOnly: false },
        { id: 2, ua: 'Категорії', ru: 'Категории', url: 'index.html#categories', active: true, isMobileOnly: false },
        { id: 3, ua: 'Продукти', ru: 'Продукты', url: 'index.html#products', active: true, isMobileOnly: false },
        { id: 4, ua: 'Відгуки', ru: 'Отзывы', url: 'reviews.html', active: true, isMobileOnly: false },
        { id: 5, ua: 'Контакти', ru: 'Контакты', url: 'contacts.html', active: true, isMobileOnly: false },
        { id: 6, ua: 'Доставка та оплата', ru: 'Доставка и оплата', url: 'delivery-payment.html', active: true, isMobileOnly: true },
        { id: 7, ua: 'Повернення та обмін', ru: 'Возврат и обмен', url: 'returns.html', active: true, isMobileOnly: true }
    ];

    const DEFAULT_SECTIONS_DATA = {
        newsletter: {
            ua: { title: 'Будьте в курсі подій!', desc: 'Отримуйте поради з безпеки, оновлення товарів та ексклюзивні пропозиції на вашу пошту.', placeholder: 'Введіть вашу email адресу', button: 'Підписатись' },
            ru: { title: 'Будьте в курсе событий!', desc: 'Получайте советы по безопасности, обновления товаров и эксклюзивные предложения на вашу почту.', placeholder: 'Введите ваш email адрес', button: 'Подписаться' }
        },
        testimonials: [
            {
                ua: { name: 'Андрій К.', role: 'Домашня безпека', text: '"Широкий вибір IP-камер для відеоспостереження, всі прості у використанні та надійні."' },
                ru: { name: 'Андрей К.', role: 'Домашняя безопасность', text: '"Широкий выбор IP-камер для видеонаблюдения, все просты в использовании и надежны."' }
            },
            {
                ua: { name: 'Олена М.', role: 'Власник бізнесу', text: '"Чудові WiFi-камери у поєднанні з підтримкою 24/7. Тепер я впевнена, що мій бізнес під захистом з усіх боків."' },
                ru: { name: 'Елена М.', role: 'Владелец бизнеса', text: '"Отличные WiFi-камеры в сочетании с поддержкой 24/7. Теперь я уверена, что мой бизнес под защитой со всех сторон."' }
            },
            {
                ua: { name: 'Дмитро С.', role: 'Офіс-менеджер', text: '"Професійне встановлення та швидка доставка. Якість камер перевершила мої очікування."' },
                ru: { name: 'Дмитрий С.', role: 'Офис-менеджер', text: '"Профессиональная установка и быстрая доставка. Качество камер превзошло мои ожидания."' }
            }
        ],
        articles: [
            {
                image: 'assets/cam2.png', dateua: '20 лют 2026', dateru: '20 фев 2026',
                ua: { title: 'Розумні замки та безпека: майбутнє захисту' },
                ru: { title: 'Умные замки и безопасность: будущее защиты' }
            },
            {
                image: 'assets/cam3.png', dateua: '15 лют 2026', dateru: '15 фев 2026',
                ua: { title: 'Зовнішні системи безпеки: повний гід покупця' },
                ru: { title: 'Внешние системы безопасности: полный гид покупателя' }
            },
            {
                image: 'assets/cam4.png', dateua: '10 лют 2026', dateru: '10 фев 2026',
                ua: { title: 'DVR, NVR чи XVR: розбираємось у відеореєстраторах' },
                ru: { title: 'DVR, NVR или XVR: разбираемся в видеорегистраторах' }
            }
        ]
    };

    // =============================================
    // TRANSLATIONS (UA / RU)
    // =============================================
    const translations = {
        ua: {
            nav_home: 'Головна', nav_categories: 'Категорії', nav_products: 'Продукти',
            nav_reviews: 'Відгуки', nav_contact: 'Контакти', nav_cart: 'Кошик',
            nav_delivery: 'Доставка та оплата', nav_returns: 'Повернення та обмін',
            nav_callback: 'Передзвоніть мені',
            hero_spring_sale: 'ВЕСНЯНІ<br>ЗНИЖКИ',
            hero_title: 'Цілодобовий<br>Захист',
            hero_desc: 'Забезпечте безпеку вашого дому цілодобово завдяки сучасному відеоспостереженню та моніторингу в реальному часі.',
            hero_title_2: 'Інноваційні<br>Системи',
            hero_desc_2: 'Відкрийте для себе нове покоління безпеки з інтелектуальним розпізнаванням об\'єктів.',
            hero_title_3: 'Надійність<br>та Якість',
            hero_desc_3: 'Професійне обладнання для захисту вашого бізнесу та приватної власності.',
            hero_cta: 'Купити зараз', btn_buy: 'В кошик',
            hero_float_title: 'Безпровідна CCTV камера<br>для вулиці',
            hero_float_sub: 'Розумний вибір для безпеки',
            trust_replace: 'Обмін протягом 7 днів', trust_replace_sub: 'Без зайвих складнощів',
            trust_shipping: 'Доставка Новою Поштою', trust_shipping_sub: 'По всій Україні',
            trust_support: 'Підтримка 24/7', trust_support_sub: "Ми завжди на зв'язку",
            cat_title: 'Категорії',
            cat_night: 'НІЧНЕ БАЧЕННЯ<br>КАМЕРА', cat_wifi: 'ПОРТАТИВНА WIFI<br>КАМЕРА',
            cat_dome: 'КУПОЛЬНА<br>КАМЕРА', cat_360: '360°<br>КАМЕРА',
            cat_doorbell: 'РОЗУМНИЙ<br>ДЗВІНОК', cat_locker: 'ЦИФРОВИЙ СЕЙФ<br>ТА ІНШЕ',
            cat_light: 'СВІТЛО', cat_beauty: 'КРАСА ТА<br>ЗДОРОВ\'Я', cat_other: 'ІНШЕ',
            p1_title: 'Улічна поворотна IP камера 20 МП Wi-Fi c зумом 20x (ZA-839P-4-W)',
            p1_spec1: 'Оптичне збільшення: 20x',
            p1_spec2: 'Роздільна здатність: 20 МП',
            p1_spec3: 'Оптичне збільшення: 20x',
            p1_spec4: 'Двостороння аудіо: мікрофон та динамік',
            p2_title: 'Розумна Wi-Fi камера 4 МП (ZA-X1-4-W)',
            p2_spec1: 'Роздільна здатність: 4 МП',
            p2_spec2: 'Кут огляду: 360°',
            p2_spec3: 'Нічне бачення: до 10 м',
            p2_spec4: 'Двостороннє аудіо: Так',
            p3_spec2: 'Водо- та пилозахист: IP67', p3_spec3: 'Роздільна здатність: 2 MP, 1920 × 1080p',
            p3_spec4: 'EXIR 2.0 Smart IR, до 20 м',
            p4_spec2: 'Пароль, панель керування inBIO', p4_spec3: 'Вбудований зчитувач 125 кГц EM',
            p4_spec4: 'Вбудований RFID зчитувач',
            p5_spec1: 'ШІ детекція людей', p5_spec2: '4K Ultra HD роздільна здатність',
            p5_spec3: 'Кольорове нічне бачення',
            test_title: 'Відгуки наших клієнтів',
            test1_text: '"Широкий вибір IP-камер для відеоспостереження, всі прості у використанні та надійні."',
            test1_role: 'Домашня безпека',
            test2_text: '"Чудові WiFi-камери у поєднанні з підтримкою 24/7. Тепер я впевнена, що мій бізнес під захистом з усіх боків."',
            test2_role: 'Власник бізнесу',
            test3_text: '"Професійне встановлення та швидка доставка. Якість камер перевершила мої очікування."',
            test3_role: 'Офіс-менеджер',
            art_title: 'Останні статті', art_view_all: 'Дивитись все →',
            art1_title: 'Розумні замки та безпека: майбутнє захисту',
            art2_title: 'Зовнішні системи безпеки: повний гід покупця',
            art3_title: 'DVR, NVR чи XVR: розбираємось у відеореєстраторах',
            news_title: 'Будьте в курсі подій!',
            news_desc: 'Отримуйте поради з безпеки, оновлення товарів та ексклюзивні пропозиції на вашу пошту.',
            news_placeholder: 'Введіть вашу email адресу', news_btn: 'Підписатись',
            news_subscribed: 'Підписано! ✓',
            footer_desc: 'Преміальні рішення безпеки для максимальної надійності та сучасних умов.',
            footer_company: 'Компанія', footer_about: 'Про нас', footer_careers: "Кар'єра",
            footer_press: 'Преса', footer_contact: 'Контакти',
            footer_support: 'Підтримка', footer_help: 'Центр допомоги', footer_warranty: 'Гарантія',
            footer_delivery: 'Доставка та оплата', footer_install: 'Інструкція встановлення',
            footer_legal: 'Правова інформація', footer_privacy: 'Політика конфіденційності',
            footer_terms: 'Умови використання', footer_cookie: 'Cookie повідомлення',
            footer_copyright: 'Авторські права', footer_rights: '© 2026 SECURBOX. Усі права захищені.',
            footer_links: 'Навігація',
            reviews_desc: 'Читайте реальні відгуки наших покупців про продукцію та якість обслуговування SECURBOX.',
            // Callback
            callback_title: 'Передзвоніть мені', callback_desc: 'Залиште ваш номер, і наш менеджер зв’яжеться з вами найближчим часом.',
            callback_btn: 'Чекаю на дзвінок',
            // Cart page
            cart_page_title: 'Кошик', cart_empty: 'Ваш кошик порожній',
            cart_continue: 'Продовжити покупки',
            cart_product: 'Товар', cart_price: 'Ціна', cart_qty: 'Кількість',
            cart_total: 'Сума', cart_summary: 'Підсумок замовлення',
            cart_subtotal: 'Підсумок', cart_delivery: 'Доставка', cart_free: 'За тарифами перевізника',
            cart_grand_total: 'Загалом', cart_checkout: 'Оформити замовлення',
            cart_continue_shopping: '← Продовжити покупки',
            cart_order_success: 'Замовлення оформлено! ✓',
            // Product detail page
            pdp_bc_cameras: 'Камери відеоспостереження',
            pdp_badge_top: 'ТОП ПРОДАЖІВ',
            pdp_code: 'Код: 21230',
            pdp_title: "Улічна поворотна IP камера 20 МП Wi-Fi c зумом 20x (ZA-839P-4-W)",
            pdp_short_desc: "20 МП, Оптичне збільшення 20x, нахил 90° та поворот 355°, двостороннє аудіо, датчик руху.",
            p1_desc_text: "<strong>Оптичне збільшення в 20 раз:</strong> забезпечує чітке зображення віддалених об'єктів.<br><strong>Широкий кут огляду:</strong> нахил на 90° та поворот на 355°.<br><strong>Двостороннє аудіо:</strong> вбудовані мікрофони та динамік.<br><strong>Датчик руху:</strong> сповіщення на телефон.",
            p2_short_desc: "4 МП, кут огляду 360°, нічне бачення до 10 м, двостороннє аудіо, Wi-Fi.",
            pdp_in_stock: 'Є в наявності', pdp_color: 'Колір:',
            pdp_rating_label: 'Рейтинг', pdp_reviews: 'відгуків',
            pdp_qty_label: 'Кількість:',
            pdp_add_cart: 'В КОШИК', pdp_buy_click: 'КУПИТИ В ОДИН КЛИК',
            pdp_tab_desc: 'Опис', pdp_tab_specs: 'Характеристики', pdp_tab_reviews: 'Відгуки (14)',
            pdp_leave_review_title: 'Залишити відгук',
            // Mobile Sidebar
            auth_login: 'Вхід', auth_register: 'Реєстрація', ms_reg: 'Реєстрація',
            auth_desc: 'Авторизуйтесь для отримання розширених можливостей',
            ms_catalog: 'Каталог', ms_cart: 'Кошик',
            ms_lang: 'Мова:',
            ms_work_hours_title: 'Час роботи:',
            ms_phones_title: 'Телефони:',
            ms_email_title: 'Пошта:',
            ms_messengers_title: 'Месенджери:',
            ms_address_title: 'Наша адреса:',
            ms_buyers: 'ПОКУПЦЯМ',
            ms_delivery: 'Доставка', ms_payment: 'Оплата', ms_guarantee: 'Гарантії',
            ms_services: 'ПОСЛУГИ', ms_installation: 'Монтаж обладнання',
            ms_subscribe_title: 'Підпишіться на розсилку',
            ms_email_placeholder: 'Ваш email', ms_subscribe_btn: 'Підписатися',
            ms_socials: 'Наші соціальні мережі',
            pdp_review_name: "Ваше ім'я",
            pdp_review_rating_label: 'Оцінка',
            pdp_review_text_label: 'Ваш відгук',
            pdp_review_submit: 'Відправити відгук',
            pdp_no_reviews: 'Відгуків поки немає.', pdp_anonymous: 'Анонім',
            pdp_review_name: "Ваше ім'я",
            pdp_review_rating_label: 'Оцінка',
            pdp_review_text_label: 'Ваш відгук',
            pdp_review_submit: 'Відправити відгук',
            pdp_desc_text: "<strong>Оптичне збільшення в 20 раз:</strong> забезпечує чітке зображення віддалених об'єктів.<br><strong>Широкий кут огляду:</strong> нахил на 90° та поворот на 355°.<br><strong>Двостороннє аудіо:</strong> вбудовані мікрофони та динамік дозволяють чути та спілкуватися через камеру.<br><strong>Датчик руху:</strong> надсилає сповіщення на телефон при виявленні активності.<br><br><strong>Комплектація:</strong><br>1 х Камера ZA-839P-4-W<br>1 х Блок живлення<br>1 х Інструкція<br>1 х Монтажний набір<br>1 х Коробка",
            p2_desc_text: '<strong>Огляд 360°:</strong> забезпечує повний контроль приміщення без сліпих зон.<br><strong>Розумне відстеження:</strong> камера автоматично стежить за рухомими об\'єктами.<br><strong>Двостороннє аудіо:</strong> вбудовані мікрофони та динамік дозволяють спілкуватися через камеру.<br><strong>Нічне бачення:</strong> чітке зображення навіть у повній темряві до 10 метрів.',
            spec_model: 'Модель', spec_resolution: 'Роздільна здатність', spec_lens: "Оптичне збільшення",
            spec_angle_360: '360°', spec_night_v2: 'до 10 м',
            spec_angle: 'Кут нахилу/повороту', spec_night: 'Макс. дальність зйомки', spec_night_val: 'до 50 м',
            spec_night_max: 'Максимальна дальність зйомки',
            spec_mic_detail: 'Двостороннє аудіо', spec_mic_val: 'вбудовані мікрофон та динамік',
            spec_motion_detail: 'Датчик руху', spec_motion_val: 'відправляє сповіщення на телефон',
            spec_multi_user: 'Підтримка багатокористувацького доступу', spec_multi_user_val: 'до 5 користувачів',
            spec_tilt_v: 'Нахил повороту по вертикалі', spec_tilt_h: 'Нахил повороту по горизонталі',
            spec_shooting_mode: 'Режим зйомки', spec_day_night: 'день / ніч',
            spec_lighting: 'Підсвітка', spec_ir_led: 'Інфрачервона підсвітка / LED',
            spec_mount: 'Кріплення', spec_mount_val: 'стельове / настінне',
            spec_plastic: 'пластик', spec_cloud: 'Підтримка хмарного сховища',
            spec_yes_sub: 'так (за підпискою)', spec_os: 'Сумісність з ОС',
            spec_app: 'Мобільний додаток', spec_wifi_cable: 'Wi-Fi: 2.4 ГГц, Кабель: RJ-45',
            spec_power: 'Живлення',
            spec_codec: 'Формат стиснення', spec_connect: 'Підключення', spec_storage: "Карти пам'яті",
            spec_protect: 'Матеріал корпусу', spec_temp: 'Мобільний додаток',
            spec_mic: 'Двостороннє аудіо', spec_spotlight: 'Датчик руху', spec_yes: 'Так',
            pdp_review1: '"Чудова камера за свою ціну. Якість зображення вражає, нічне бачення працює відмінно. Встановлення зайняло 15 хвилин."',
            pdp_review2: '"Прожектор прекрасно працює вночі — кольорове зображення навіть у повній темряві. Wi-Fi тримає стабільно."',
            pdp_service_title: 'Сервіс та послуги',
            pdp_serv_delivery: 'Доставка Новою Поштою', pdp_serv_delivery_sub: 'По всій Україні',
            pdp_serv_support: 'Технічна підтримка', pdp_serv_support_sub: '24/7 консультація',
            pdp_serv_warranty: 'Гарантія 12 місяців', pdp_serv_warranty_sub: 'Офіційна гарантія виробника',
            pdp_serv_discount: 'ЗНИЖКА 20%', pdp_serv_discount_sub: 'на заміну або ремонт',
            // Checkout Form
            checkout_contact_title: 'Контактні дані',
            checkout_first_name: "Ім'я", checkout_first_name_ph: 'Іван',
            checkout_last_name: 'Прізвище', checkout_last_name_ph: 'Іванов',
            checkout_phone: 'Телефон', checkout_phone_ph: '+380',
            checkout_email: 'Email', checkout_email_ph: 'email@example.com',
            checkout_delivery_title: 'Доставка', 
            checkout_region: 'Область', checkout_region_ph: 'Київська область',
            checkout_city: 'Місто', checkout_city_ph: 'Київ',
            deliv_np: 'Нова Пошта', deliv_up: 'Укрпошта', deliv_courier: "Кур'єр", deliv_pickup: 'Самовивіз',
            checkout_address: 'Адреса або відділення', checkout_address_ph: 'Оберіть відділення...',
            checkout_locker_ph: 'Оберіть поштомат...',
            checkout_street_ph: 'Вулиця, буд, кв...',
            np_dept: 'Відділення', np_locker: 'Поштомат',
            checkout_payment_title: 'Оплата', pay_card: 'Картою на сайті', pay_cash: 'При отриманні',
            // Quick Buy Modal
            modal_title: 'Купити в один клік',
            modal_desc: 'Залиште ваші дані, і ми перетелефонуємо для уточнення замовлення.',
            modal_name: "Ваше ім'я", modal_phone: 'Ваш телефон',
            modal_btn: 'Оформити замовлення',
            modal_success_title: 'Дякуємо!',
            modal_success_desc: 'Ми отримали ваше замовлення та скоро зв’яжемося з вами.',
            // Returns page
            returns_title: 'Повернення та обмін',
            returns_period_h: 'Термін повернення',
            returns_period_p: 'Відповідно до Закону України «Про захист прав споживачів», ви можете повернути або обміняти товар протягом 14 днів після покупки.',
            returns_conditions_h: 'Умови для повернення',
            returns_cond1: 'Товар не був у вжитку і не має слідів використання (подряпин, сколів, потертостей).',
            returns_cond2: 'Товар повністю укомплектований і збережена цілісність упаковки.',
            returns_cond3: 'Збережені всі ярлики та заводське маркування.',
            returns_cond4: 'Наявність розрахункового документа (чека або накладної).',
            returns_process_h: 'Як оформити повернення',
            returns_step1: "Зв'яжіться з нашою службою підтримки за телефоном або через форму контактів.",
            returns_step2: 'Надішліть товар через «Нову Пошту» за адресою, яку вкаже менеджер.',
            returns_step3: 'Після перевірки товару сервісним центром ми повернемо гроші протягом 7 днів.',
            returns_refund_h: 'Повернення коштів',
            returns_refund_p: 'Гроші повертаються на банківську карту, з якої було здійснено оплату, або за реквізитами, наданими покупцем.',
            // Delivery & Payment page
            deliv_title: 'Доставка та оплата',
            deliv_methods_h: 'Способи доставки',
            deliv_np_p: 'Доставка у відділення або поштомат по всій Україні. Термін: 1-3 дні. Безкоштовна доставка.',
            deliv_up_p: 'Доставка у відділення по всій Україні. Економно та надійно. Термін: 3-5 днів.',
            deliv_courier_p: "Кур'єрська доставка до дверей. Доступно у великих містах. Зручний час узгоджується з менеджером.",
            deliv_pickup_p: 'Ви можете забрати товар самостійно з наших точок видачі в Києві. Попередньо узгодьте наявність.',
            pay_methods_h: 'Способи оплати',
            pay_online: '<strong>Онлайн-оплата:</strong> Карткою Visa/Mastercard, Apple Pay або Google Pay прямо на сайті.',
            pay_cash_info: '<strong>Післяплата:</strong> Оплата готівкою або картою при отриманні у відділенні «Нової Пошти».',
            pay_bank: '<strong>Безготівковий розрахунок:</strong> Оплата на розрахунковий рахунок компанії (для юр. та фіз. осіб).',
            deliv_terms_h: 'Важлива інформація',
            deliv_terms_p: 'Всі замовлення, оформлені до 16:00, відправляються в той же день. Після відправки ви отримаєте SMS з номером ТТН для відстеження посилки. Ретельно перевіряйте товар при отриманні.',
            filters_btn: 'Фільтри',
            sort_popularity: 'популярністю',
            sort_cheap: 'від дешевих до дорогих',
            sort_expensive: 'від дорогих до дешевих',
            sort_name: 'назвою',
            cat_cameras: 'Камери відеоспостереження',
            cat_lighting: 'Розумне освітлення',
            cat_health: 'Краса та здоров\'я',
            cat_accessories: 'Аксесуари та гаджети',
            cat_other: 'Інше',
            error_phone: 'Неправильний формат запису',
            error_phone_hint: 'Вірний формат телефону: +380 00 000 00 00',
            modal_ok: 'ОК',
            loading: 'Завантаження...',
            btn_added: 'Додано! ✓'
        },
        ru: {
            nav_home: 'Главная', nav_categories: 'Категории', nav_products: 'Продукты',
            nav_reviews: 'Отзывы', nav_contact: 'Контакты', nav_cart: 'Корзина',
            nav_delivery: 'Доставка и оплата', nav_returns: 'Возврат и обмен',
            nav_callback: 'Перезвоните мне',
            hero_spring_sale: 'ВЕСЕННИЕ<br>СКИДКИ',
            hero_title: 'Круглосуточная<br>Защита',
            hero_desc: 'Обеспечьте безопасность вашего дома круглосуточно с помощью современного видеонаблюдения и мониторинга в реальном времени.',
            hero_title_2: 'Инновационные<br>Системы',
            hero_desc_2: 'Откройте для себя новое поколение безопасности с интеллектуальным распознаванием объектов.',
            hero_title_3: 'Надежность<br>и Качество',
            hero_desc_3: 'Профессиональное оборудование для защиты вашего бизнеса и частной собственности.',
            hero_cta: 'Купить сейчас', btn_buy: 'В корзину',
            hero_float_title: 'Беспроводная CCTV камера<br>для улицы',
            hero_float_sub: 'Умный выбор для безопасности',
            trust_replace: 'Обмен в течение 7 дней', trust_replace_sub: 'Без лишних сложностей',
            trust_shipping: 'Доставка Новой Почтой', trust_shipping_sub: 'По всей Украине',
            trust_support: 'Поддержка 24/7', trust_support_sub: 'Мы всегда на связи',
            cat_title: 'Категории',
            cat_cameras: 'Камеры видеонаблюдения',
            cat_lighting: 'Умное освещение',
            cat_health: 'Красота и здоровье',
            cat_accessories: 'Аксессуары и гаджеты',
            cat_other: 'Прочее',
            cat_night: 'НОЧНОЕ ВИДЕНИЕ<br>КАМЕРА', cat_wifi: 'ПОРТАТИВНАЯ WIFI<br>КАМЕРА',
            cat_dome: 'КУПОЛЬНАЯ<br>КАМЕРА', cat_360: '360°<br>КАМЕРА',
            cat_doorbell: 'УМНЫЙ<br>ЗВОНОК', cat_locker: 'ЦИФРОВОЙ СЕЙФ<br>И ДРУГОЕ',
            cat_light: 'СВЕТ', cat_beauty: 'КРАСОТА И<br>ЗДОРОВЬЕ',
            p1_title: 'Уличная поворотная IP камера 20 МП Wi-Fi c зумом 20x (ZA-839P-4-W)',
            p1_spec1: 'Оптическое увеличение: 20x',
            p1_spec2: 'Разрешение камеры: 20 МП',
            p1_spec3: 'Оптическое увеличение: 20x',
            p1_spec4: 'Двустороннее аудио: микрофон и динамик',
            p2_title: 'Умная Wi-Fi камера 4 МП (ZA-X1-4-W)',
            p2_spec1: 'Разрешение: 4 МП',
            p2_spec2: 'Угол обзора: 360°',
            p2_spec3: 'Ночное видение: до 10 м',
            p2_spec4: 'Двустороннее аудио: Да',
            p3_spec2: 'Водо- и пылезащита: IP67', p3_spec3: 'Разрешение: 2 MP, 1920 × 1080p',
            p3_spec4: 'EXIR 2.0 Smart IR, до 20 м',
            p4_spec2: 'Пароль, панель управления inBIO', p4_spec3: 'Встроенный считыватель 125 кГц EM',
            p4_spec4: 'Встроенный RFID считыватель',
            p5_spec1: 'ИИ детекция людей', p5_spec2: '4K Ultra HD разрешение',
            p5_spec3: 'Цветное ночное видение',
            test_title: 'Отзывы наших клиентов',
            test1_text: '"Широкий выбор IP-камер для видеонаблюдения, все простые в использовании и надёжные."',
            test1_role: 'Домашняя безопасность',
            test2_text: '"Отличные WiFi-камеры в сочетании с поддержкой 24/7. Теперь я уверена, что мой бизнес защищён со всех сторон."',
            test2_role: 'Владелец бизнеса',
            test3_text: '"Профессиональная установка и быстрая доставка. Качество камер превзошло мои ожидания."',
            test3_role: 'Офис-менеджер',
            art_title: 'Последние статьи', art_view_all: 'Смотреть все →',
            art1_title: 'Умные замки и безопасность: будущее защиты',
            art2_title: 'Внешние системы безопасности: полный гид покупателя',
            art3_title: 'DVR, NVR или XVR: разбираемся в видеорегистраторах',
            news_title: 'Будьте в курсе событий!',
            news_desc: 'Получайте советы по безопасности, обновления товаров и эксклюзивные предложения на вашу почту.',
            news_placeholder: 'Введите ваш email адрес', news_btn: 'Подписаться',
            news_subscribed: 'Подписано! ✓',
            footer_desc: 'Премиальные решения безопасности для максимальной надёжности и современных условий.',
            footer_company: 'Компания', footer_about: 'О нас', footer_careers: 'Карьера',
            footer_press: 'Пресса', footer_contact: 'Контакты',
            footer_support: 'Поддержка', footer_help: 'Центр помощи', footer_warranty: 'Гарантия',
            footer_delivery: 'Доставка и оплата', footer_install: 'Руководство по установке',
            footer_legal: 'Правовая информация', footer_privacy: 'Политика конфиденциальности',
            footer_terms: 'Условия использования', footer_cookie: 'Сообщение Cookie',
            footer_copyright: 'Авторские права', footer_rights: '© 2026 SECURBOX. Все права защищены.',
            footer_links: 'Навигация',
            reviews_desc: 'Читайте реальные отзывы наших покупателей о продукции и качестве обслуживания SECURBOX.',
            // Callback
            callback_title: 'Перезвоните мне', callback_desc: 'Оставьте ваш номер, и наш менеджер свяжется с вами в ближайшее время.',
            callback_btn: 'Жду звонка',
            // Cart page
            cart_page_title: 'Корзина', cart_empty: 'Ваша корзина пуста',
            cart_continue: 'Продолжить покупки',
            cart_product: 'Товар', cart_price: 'Цена', cart_qty: 'Количество',
            cart_total: 'Сумма', cart_summary: 'Итого по заказу',
            cart_subtotal: 'Итого', cart_delivery: 'Доставка', cart_free: 'По тарифам перевозчика',
            cart_grand_total: 'Всего', cart_checkout: 'Оформить заказ',
            cart_continue_shopping: '← Продолжить покупки',
            cart_order_success: 'Заказ оформлен! ✓',
            // Product detail page
            pdp_bc_cameras: 'Камеры видеонаблюдения',
            pdp_badge_top: 'ТОП ПРОДАЖ',
            pdp_code: 'Код: 21230',
            pdp_title: 'Уличная поворотная IP камера 20 МП Wi-Fi c зумом 20x (ZA-839P-4-W)',
            pdp_short_desc: '20 МП, Оптическое увеличение 20x, наклон 90°, поворот 355°, двухстороннее аудио, датчик движения.',
            p1_desc_text: '<strong>Оптическое увеличение в 20 раз:</strong> обеспечивает четкое изображение удаленных объектов.<br><strong>Широкий угол обзора:</strong> наклон на 90° и поворот на 355°.<br><strong>Двустороннее аудио:</strong> встроенные микрофон и динамик.<br><strong>Датчик движения:</strong> уведомления на телефон.',
            p2_short_desc: '4 МП, угол обзора 360°, ночное видение до 10 м, двухстороннее аудио, Wi-Fi.',
            pdp_in_stock: 'Есть в наличии', pdp_color: 'Цвет:',
            pdp_rating_label: 'Рейтинг', pdp_reviews: 'отзывов',
            pdp_qty_label: 'Количество:',
            pdp_add_cart: 'В КОРЗИНУ', pdp_buy_click: 'КУПИТЬ В ОДИН КЛИК',
            pdp_tab_desc: 'Описание', pdp_tab_specs: 'Характеристики', pdp_tab_reviews: 'Отзывы (14)',
            pdp_leave_review_title: 'Оставить отзыв',
            pdp_review_name: 'Ваше имя',
            pdp_review_rating_label: 'Оценка',
            pdp_review_text_label: 'Ваш отзыв',
            pdp_review_submit: 'Отправить отзыв',
            pdp_no_reviews: 'Отзывов пока нет.', pdp_anonymous: 'Аноним',
            pdp_review_name: 'Ваше имя',
            pdp_review_rating_label: 'Оценка',
            pdp_review_text_label: 'Ваш отзыв',
            pdp_review_submit: 'Отправить отзыв',
            pdp_desc_text: "<strong>Оптическое увеличение в 20 раз:</strong> обеспечивает четкое изображение удаленных объектов.<br><strong>Широкий угол обзора:</strong> наклон на 90° и поворот на 355°.<br><strong>Двустороннее аудио:</strong> встроеные микрофон и динамик позволяют слышать и общаться через камеру.<br><strong>Датчик движения:</strong> отправляет уведомления на телефон при обнаружении активности.<br><br><strong>Комплектация:</strong><br>1 х Камера ZA-839P-4-W<br>1 х Блок питания<br>1 х Инструкция<br>1 х Монтажный набор<br>1 х Коробка",
            p2_desc_text: '<strong>Обзор 360°:</strong> обеспечивает полный контроль помещения без слепых зон.<br><strong>Умное отслеживание:</strong> камера автоматически следит за движущимися объектами.<br><strong>Двустороннее аудио:</strong> встроенные микрофоны и динамик позволяют общаться через камеру.<br><strong>Ночное видение:</strong> четкое изображение даже в полной темноте до 10 метров.',
            spec_model: 'Модель', spec_resolution: 'Разрешение', spec_lens: 'Оптическое увеличение',
            spec_angle_360: '360°', spec_night_v2: 'до 10 м',
            spec_angle: 'Угол наклона/поворота', spec_night: 'Макс. дальность съемки', spec_night_val: 'до 50 м',
            spec_night_max: 'Максимальная дальность съемки',
            spec_mic_detail: 'Двустороннее аудио', spec_mic_val: 'встроенные микрофон и динамик',
            spec_motion_detail: 'Датчик движения', spec_motion_val: 'отправляет уведомления на телефон',
            spec_multi_user: 'Поддержка многопользовательского доступа', spec_multi_user_val: 'до 5 пользователей',
            spec_tilt_v: 'Наклон поворота по вертикали', spec_tilt_h: 'Наклон поворота по горизонтали',
            spec_shooting_mode: 'Режим съемки', spec_day_night: 'день / ночь',
            spec_lighting: 'Подсветка', spec_ir_led: 'Инфракрасная подсветка / LED',
            spec_mount: 'Крепление', spec_mount_val: 'потолочное / настенное',
            spec_plastic: 'пластик', spec_cloud: 'Поддержка облачного хранилища',
            spec_yes_sub: 'да (по подписке)', spec_os: 'Совместимость с ОС',
            spec_app: 'Мобильное приложение', spec_wifi_cable: 'Wi-Fi: 2.4 ГГц, Кабель: RJ-45',
            spec_power: 'Питание',
            spec_codec: 'Формат сжатия', spec_connect: 'Подключение', spec_storage: 'Карты памяти',
            spec_protect: 'Материал корпуса', spec_temp: 'Мобильное приложение',
            spec_mic: 'Двустороннее аудио', spec_spotlight: 'Датчик движения', spec_yes: 'Да',
            pdp_review1: '"Отличная камера за свою цену. Качество изображения впечатляет, ночное видение работает отлично. Установка заняла 15 минут."',
            pdp_review2: '"Прожектор прекрасно работает ночью — цветное изображение даже в полной темноте. Wi-Fi держит стабильно."',
            pdp_service_title: 'Сервис и услуги',
            pdp_serv_delivery: 'Доставка Новой Почтой', pdp_serv_delivery_sub: 'По всей Украине',
            pdp_serv_support: 'Техническая поддержка', pdp_serv_support_sub: '24/7 консультация',
            pdp_serv_warranty: 'Гарантия 12 месяцев', pdp_serv_warranty_sub: 'Официальная гарантия производителя',
            pdp_serv_discount: 'СКИДКА 20%', pdp_serv_discount_sub: 'на замену или ремонт',
            // Checkout Form
            checkout_contact_title: 'Контактные данные',
            checkout_first_name: 'Имя', checkout_first_name_ph: 'Иван',
            checkout_last_name: 'Фамилия', checkout_last_name_ph: 'Иванов',
            checkout_phone: 'Телефон', checkout_phone_ph: '+380',
            checkout_email: 'Email', checkout_email_ph: 'email@example.com',
            checkout_delivery_title: 'Доставка', 
            checkout_region: 'Область', checkout_region_ph: 'Киевская область',
            checkout_city: 'Город', checkout_city_ph: 'Киев',
            deliv_np: 'Новая Почта', deliv_up: 'Укрпочта', deliv_courier: 'Курьер', deliv_pickup: 'Самовывоз',
            checkout_address: 'Адрес или отделение', checkout_address_ph: 'Выберите отделение...',
            checkout_locker_ph: 'Выберите почтомат...',
            checkout_street_ph: 'Улица, дом, кв...',
            np_dept: 'Отделение', np_locker: 'Почтомат',
            checkout_payment_title: 'Оплата', pay_card: 'Картой на сайте', pay_cash: 'При получении',
            // Quick Buy Modal
            modal_title: 'Купить в один клик',
            modal_desc: 'Оставьте ваши данные, и мы перезвоним для уточнения заказа.',
            modal_name: 'Ваше имя', modal_phone: 'Ваш телефон',
            modal_btn: 'Оформить заказ',
            modal_success_title: 'Спасибо!',
            modal_success_desc: 'Мы получили ваш заказ и скоро свяжемся с вами.',
            // Returns page
            returns_title: 'Возврат и обмен',
            returns_period_h: 'Срок возврата',
            returns_period_p: 'В соответствии с Законом Украины «О защите прав потребителей», вы можете вернуть или обменять товар в течение 14 дней после покупки.',
            returns_conditions_h: 'Условия для возврата',
            returns_cond1: 'Товар не был в употреблении и не имеет следов использования (царапин, сколов, потертостей).',
            returns_cond2: 'Товар полностью укомплектован и сохранена целостность упаковки.',
            returns_cond3: 'Сохранены все ярлыки и заводская маркировка.',
            returns_cond4: 'Наличие расчетного документа (чека или накладной).',
            returns_process_h: 'Как оформить возврат',
            returns_step1: 'Свяжитесь с нашей службой поддержки по телефону для начала процесса возврата.',
            // Mobile Sidebar
            auth_login: 'Вход', auth_register: 'Регистрация', ms_reg: 'Регистрация',
            auth_desc: 'Авторизуйтесь для получения расширенных возможностей',
            ms_catalog: 'Каталог', ms_cart: 'Корзина',
            ms_lang: 'Язык:',
            ms_work_hours_title: 'Время работы:',
            ms_phones_title: 'Телефоны:',
            ms_email_title: 'Почта:',
            ms_messengers_title: 'Мессенджеры:',
            ms_address_title: 'Наш адрес:',
            ms_buyers: 'ПОКУПАТЕЛЯМ',
            ms_delivery: 'Доставка', ms_payment: 'Оплата', ms_guarantee: 'Гарантии',
            ms_services: 'УСЛУГИ', ms_installation: 'Монтаж оборудования',
            ms_subscribe_title: 'Подпишитесь на рассылку',
            ms_email_placeholder: 'Ваш email', ms_subscribe_btn: 'Подписаться',
            ms_socials: 'Наши социальные сети',
            modal_ok: 'ОК',
            loading: 'Загрузка...',
            btn_added: 'Добавлено! ✓'
        }
    };

    const REGION_DATA = {
        "Херсонская область": { ua: ["Херсон", "Нова Каховка", "Каховка", "Олешки", "Генічеськ", "Скадовськ"], ru: ["Херсон", "Новая Каховка", "Каховка", "Алёшки", "Геническ", "Скадовск"] },
        "Хмельницька область": { ua: ["Хмельницький", "Кам'янець-Подільський", "Шепетівка", "Нетішин", "Славута"], ru: ["Хмельницкий", "Каменец-Подольский", "Шепетовка", "Нетешин", "Славута"] },
        "Хмельницкая область": { ua: ["Хмельницький", "Кам'янець-Подільський", "Шепетівка", "Нетішин", "Славута"], ru: ["Хмельницкий", "Каменец-Подольский", "Шепетовка", "Нетешин", "Славута"] },
        "Черкаська область": { ua: ["Черкаси", "Умань", "Сміла", "Золотоноша", "Канів", "Ватутіне"], ru: ["Черкассы", "Умань", "Смела", "Золотоноша", "Канев", "Ватутино"] },
        "Черкасская область": { ua: ["Черкаси", "Умань", "Сміла", "Золотоноша", "Канів", "Ватутіне"], ru: ["Черкассы", "Умань", "Смела", "Золотоноша", "Канев", "Ватутино"] },
        "Чернівецька область": { ua: ["Чернівці", "Новодністровськ", "Сторожинець", "Хотин", "Кіцмань"], ru: ["Черновцы", "Новоднестровск", "Сторожинец", "Хотин", "Кицмань"] },
        "Черновицкая область": { ua: ["Чернівці", "Новодністровськ", "Сторожинець", "Хотин", "Кіцмань"], ru: ["Черновцы", "Новоднестровск", "Сторожинец", "Хотин", "Кицмань"] },
        "Чернігівська область": { ua: ["Чернігів", "Ніжин", "Прилуки", "Бахмач", "Городня"], ru: ["Чернигов", "Нежин", "Прилуки", "Бахмач", "Городня"] },
        "Черниговская область": { ua: ["Чернігів", "Ніжин", "Прилуки", "Бахмач", "Городня"], ru: ["Чернигов", "Нежин", "Прилуки", "Бахмач", "Городня"] },
        "АР Крим": { ua: ["Сімферополь", "Севастополь", "Євпаторія", "Керч", "Ялта", "Феодосія"], ru: ["Симферополь", "Севастополь", "Евпатория", "Керчь", "Ялта", "Феодосия"] }
    };

    function getNPDepartments(city) {
        // Specific data for major cities
        const specificData = {
            "Київ": [
                "Відділення №1 (до 1100 кг): вул. Пирогівський шлях, 135",
                "Відділення №2 (до 30 кг): вул. Богатирська, 11",
                "Відділення №3 (до 30 кг): вул. Калачівська, 13",
                "Відділення №10 (до 30 кг): вул. Незалежності, 166",
                "Відділення №11 (до 30 кг): просп. Шахтобудівників, 13",
                "Відділення №12 (до 30 кг): вул. Водопровідна, 13",
                "Відділення №13 (до 200 кг): вул. Харківська, 88а",
                "Пункт №959 (до 30 кг): вул. Шевченка, 128 (маг. MOYO)"
            ],
            "Киев": [
                "Отделение №1 (до 1100 кг): ул. Пироговский шлях, 135",
                "Отделение №2 (до 30 кг): ул. Богатырская, 11",
                "Отделение №3 (до 30 кг): ул. Калачевская, 13",
                "Отделение №10 (до 30 кг): ул. Независимости, 166",
                "Отделение №11 (до 30 кг): просп. Шахтостроителей, 13",
                "Отделение №12 (до 30 кг): ул. Водопроводная, 13",
                "Отделение №13 (до 200 кг): ул. Харьковская, 88а",
                "Пункт №959 (до 30 кг): ул. Шевченко, 128 (маг. MOYO)"
            ],
            "Харків": [
                "Відділення №1 (до 1100 кг): вул. Польова, 67",
                "Відділення №2 (до 30 кг): просп. Гагаріна, 43",
                "Відділення №5 (до 30 кг): вул. Академіка Павлова, 120",
                "Відділення №11 (до 30 кг): вул. Людвіга Свободи, 35",
                "Відділення №20 (до 30 кг): вул. Сумська, 10"
            ],
            "Харьков": [
                "Отделение №1 (до 1100 кг): ул. Полевая, 67",
                "Отделение №2 (до 30 кг): просп. Гагарина, 43",
                "Отделение №5 (до 30 кг): ул. Академика Павлова, 120",
                "Отделение №11 (до 30 кг): ул. Людвига Свободы, 35",
                "Отделение №20 (до 30 кг): ул. Сумская, 10"
            ],
            "Одеса": [
                "Відділення №1 (до 30 кг): вул. Космонавтів, 32",
                "Відділення №2 (до 30 кг): вул. Балківська, 50",
                "Відділення №5 (до 30 кг): вул. Генерала Петрова, 24",
                "Відділення №8 (до 200 кг): Люстдорфська дорога, 140/1",
                "Відділення №15 (до 30 кг): просп. Академіка Глушка, 11/2"
            ],
            "Одесса": [
                "Отделение №1 (до 30 кг): ул. Космонавтов, 32",
                "Отделение №2 (до 30 кг): ул. Балковская, 50",
                "Отделение №5 (до 30 кг): ул. Генерала Петрова, 24",
                "Отделение №8 (до 200 кг): Люстдорфская дорога, 140/1",
                "Отделение №15 (до 30 кг): просп. Академика Глушко, 11/2"
            ],
            "Дніпро": [
                "Відділення №1 (до 30 кг): вул. Робоча, 23",
                "Відділення №3 (до 30 кг): просп. Олександра Поля, 29",
                "Відділення №7 (до 200 кг): вул. Калинова, 64",
                "Відділення №12 (до 30 кг): просп. Гагаріна, 101",
                "Відділення №18 (до 30 кг): вул. Титова, 18"
            ],
            "Днепр": [
                "Отделение №1 (до 30 кг): ул. Рабочая, 23",
                "Отделение №3 (до 30 кг): просп. Александра Поля, 29",
                "Отделение №7 (до 200 кг): ул. Калиновая, 64",
                "Отделение №12 (до 30 кг): просп. Гагарина, 101",
                "Отделение №18 (до 30 кг): ул. Титова, 18"
            ],
            "Львів": [
                "Відділення №1 (до 30 кг): вул. Городоцька, 137а",
                "Відділення №3 (до 30 кг): вул. Наукова, 7а",
                "Відділення №6 (до 200 кг): вул. Зелена, 301",
                "Відділення №10 (до 30 кг): вул. Стрийська, 45",
                "Відділення №15 (до 30 кг): просп. Червоної Калини, 62"
            ],
            "Львов": [
                "Отделение №1 (до 30 кг): ул. Городоцкая, 137а",
                "Отделение №3 (до 30 кг): ул. Научная, 7а",
                "Отделение №6 (до 200 кг): ул. Зелёная, 301",
                "Отделение №10 (до 30 кг): ул. Стрыйская, 45",
                "Отделение №15 (до 30 кг): просп. Красной Калины, 62"
            ],
            "Запоріжжя": [
                "Відділення №1 (до 30 кг): вул. Перемоги, 30",
                "Відділення №4 (до 200 кг): просп. Соборний, 152",
                "Відділення №7 (до 30 кг): вул. Незалежної України, 57",
                "Відділення №11 (до 30 кг): вул. Космічна, 110а"
            ],
            "Запорожье": [
                "Отделение №1 (до 30 кг): ул. Победы, 30",
                "Отделение №4 (до 200 кг): просп. Соборный, 152",
                "Отделение №7 (до 30 кг): ул. Независимой Украины, 57",
                "Отделение №11 (до 30 кг): ул. Космическая, 110а"
            ],
            "Вінниця": [
                "Відділення №1 (до 30 кг): вул. Київська, 37",
                "Відділення №3 (до 200 кг): вул. Немирівське шосе, 47",
                "Відділення №5 (до 30 кг): вул. Пирогова, 59",
                "Відділення №8 (до 30 кг): вул. 600-річчя, 17"
            ],
            "Винница": [
                "Отделение №1 (до 30 кг): ул. Киевская, 37",
                "Отделение №3 (до 200 кг): ул. Немировское шоссе, 47",
                "Отделение №5 (до 30 кг): ул. Пирогова, 59",
                "Отделение №8 (до 30 кг): ул. 600-летия, 17"
            ],
            "Полтава": [
                "Відділення №1 (до 30 кг): вул. Європейська, 82",
                "Відділення №3 (до 200 кг): вул. Головка, 14",
                "Відділення №6 (до 30 кг): вул. Ватутіна, 2",
                "Відділення №9 (до 30 кг): просп. Миру, 8"
            ],
            "Кропивницький": [
                "Відділення №1 (до 30 кг): вул. Дворцова, 29",
                "Відділення №3 (до 200 кг): вул. Полтавська, 73",
                "Відділення №5 (до 30 кг): вул. Шевченка, 5"
            ],
            "Кропивницкий": [
                "Отделение №1 (до 30 кг): ул. Дворцовая, 29",
                "Отделение №3 (до 200 кг): ул. Полтавская, 73",
                "Отделение №5 (до 30 кг): ул. Шевченко, 5"
            ],
            "Миколаїв": [
                "Відділення №1 (до 30 кг): просп. Центральний, 71",
                "Відділення №4 (до 200 кг): вул. Космонавтів, 83а",
                "Відділення №7 (до 30 кг): вул. Садова, 3"
            ],
            "Николаев": [
                "Отделение №1 (до 30 кг): просп. Центральный, 71",
                "Отделение №4 (до 200 кг): ул. Космонавтов, 83а",
                "Отделение №7 (до 30 кг): ул. Садовая, 3"
            ],
            "Херсон": [
                "Відділення №1 (до 30 кг): вул. Небесної Сотні, 8",
                "Відділення №3 (до 200 кг): просп. Ушакова, 51",
                "Відділення №5 (до 30 кг): вул. 49-ї Гвардійської дивізії, 14"
            ],
            "Чернігів": [
                "Відділення №1 (до 30 кг): вул. Рокосовського, 25",
                "Відділення №3 (до 200 кг): просп. Миру, 30",
                "Відділення №5 (до 30 кг): вул. Шевченка, 91"
            ],
            "Чернигов": [
                "Отделение №1 (до 30 кг): ул. Рокоссовского, 25",
                "Отделение №3 (до 200 кг): просп. Мира, 30",
                "Отделение №5 (до 30 кг): ул. Шевченко, 91"
            ],
            "Суми": [
                "Відділення №1 (до 30 кг): вул. Харківська, 14",
                "Відділення №4 (до 200 кг): вул. Іллінська, 44",
                "Відділення №6 (до 30 кг): вул. Кондратьєва, 25"
            ],
            "Сумы": [
                "Отделение №1 (до 30 кг): ул. Харьковская, 14",
                "Отделение №4 (до 200 кг): ул. Ильинская, 44",
                "Отделение №6 (до 30 кг): ул. Кондратьева, 25"
            ],
            "Чернівці": [
                "Відділення №1 (до 30 кг): вул. Головна, 127",
                "Відділення №3 (до 200 кг): вул. Калинівська, 20",
                "Відділення №5 (до 30 кг): просп. Незалежності, 114"
            ],
            "Черновцы": [
                "Отделение №1 (до 30 кг): ул. Главная, 127",
                "Отделение №3 (до 200 кг): ул. Калиновская, 20",
                "Отделение №5 (до 30 кг): просп. Независимости, 114"
            ],
            "Рівне": [
                "Відділення №1 (до 30 кг): вул. Гагаріна, 39",
                "Відділення №3 (до 200 кг): вул. Костромська, 25",
                "Відділення №5 (до 30 кг): вул. Соборна, 370"
            ],
            "Ровно": [
                "Отделение №1 (до 30 кг): ул. Гагарина, 39",
                "Отделение №3 (до 200 кг): ул. Костромская, 25",
                "Отделение №5 (до 30 кг): ул. Соборная, 370"
            ],
            "Тернопіль": [
                "Відділення №1 (до 30 кг): вул. Шевченка, 18",
                "Відділення №4 (до 200 кг): вул. Львівська, 5",
                "Відділення №6 (до 30 кг): вул. Бродівська, 34"
            ],
            "Тернополь": [
                "Отделение №1 (до 30 кг): ул. Шевченко, 18",
                "Отделение №4 (до 200 кг): ул. Львовская, 5",
                "Отделение №6 (до 30 кг): ул. Бродовская, 34"
            ],
            "Хмельницький": [
                "Відділення №1 (до 30 кг): вул. Подільська, 109",
                "Відділення №3 (до 200 кг): вул. Героїв Майдану, 8",
                "Відділення №7 (до 30 кг): вул. Свободи, 51"
            ],
            "Хмельницкий": [
                "Отделение №1 (до 30 кг): ул. Подольская, 109",
                "Отделение №3 (до 200 кг): ул. Героев Майдана, 8",
                "Отделение №7 (до 30 кг): ул. Свободы, 51"
            ],
            "Івано-Франківськ": [
                "Відділення №1 (до 30 кг): вул. Галицька, 69",
                "Відділення №3 (до 200 кг): вул. Бандери, 40",
                "Відділення №5 (до 30 кг): вул. Незалежності, 72"
            ],
            "Ивано-Франковск": [
                "Отделение №1 (до 30 кг): ул. Галицкая, 69",
                "Отделение №3 (до 200 кг): ул. Бандеры, 40",
                "Отделение №5 (до 30 кг): ул. Независимости, 72"
            ],
            "Луцьк": [
                "Відділення №1 (до 30 кг): вул. Конякіна, 24",
                "Відділення №3 (до 200 кг): просп. Волі, 50",
                "Відділення №6 (до 30 кг): вул. Кривий Вал, 35"
            ],
            "Луцк": [
                "Отделение №1 (до 30 кг): ул. Конякина, 24",
                "Отделение №3 (до 200 кг): просп. Воли, 50",
                "Отделение №6 (до 30 кг): ул. Кривой Вал, 35"
            ],
            "Ужгород": [
                "Відділення №1 (до 30 кг): вул. Легоцького, 62",
                "Відділення №3 (до 200 кг): вул. Можайського, 1",
                "Відділення №5 (до 30 кг): вул. Собранецька, 89"
            ],
            "Житомир": [
                "Відділення №1 (до 30 кг): вул. Перемоги, 2",
                "Відділення №3 (до 200 кг): вул. Київська, 95",
                "Відділення №6 (до 30 кг): Старий бульвар, 9"
            ],
            "Черкаси": [
                "Відділення №1 (до 30 кг): бульв. Шевченка, 244",
                "Відділення №4 (до 200 кг): вул. Сумгаїтська, 3",
                "Відділення №7 (до 30 кг): вул. Хрещатик, 185"
            ],
            "Черкассы": [
                "Отделение №1 (до 30 кг): бульв. Шевченко, 244",
                "Отделение №4 (до 200 кг): ул. Сумгаитская, 3",
                "Отделение №7 (до 30 кг): ул. Крещатик, 185"
            ],
            "Кривий Ріг": [
                "Відділення №1 (до 30 кг): вул. Героїв АТО, 76",
                "Відділення №5 (до 200 кг): просп. Металургів, 28",
                "Відділення №9 (до 30 кг): просп. Миру, 13"
            ],
            "Кривой Рог": [
                "Отделение №1 (до 30 кг): ул. Героев АТО, 76",
                "Отделение №5 (до 200 кг): просп. Металлургов, 28",
                "Отделение №9 (до 30 кг): просп. Мира, 13"
            ]
        };

        if (specificData[city]) return specificData[city];

        // Generate fallback for cities not explicitly listed
        const isUa = /[іїєґ]/i.test(city);
        const prefix = isUa ? "Відділення" : "Отделение";
        const street = isUa ? "вул. Центральна" : "ул. Центральная";
        return [
            `${prefix} №1 (до 30 кг): ${street}, 1`,
            `${prefix} №2 (до 30 кг): ${street}, 25`,
            `${prefix} №3 (до 200 кг): ${street}, 50`
        ];
    }

    // Generate NP lockers dynamically for any city
    function getNPLockers(city) {
        const specificData = {
            "Київ": [
                "Поштомат №1000: просп. Степана Бандери, 36",
                "Поштомат №1050: вул. Хрещатик, 22",
                "Поштомат №2040: просп. Перемоги, 45",
                "Поштомат №3012: вул. Саксаганського, 101"
            ],
            "Киев": [
                "Почтомат №1000: просп. Степана Бандеры, 36",
                "Почтомат №1050: ул. Крещатик, 22",
                "Почтомат №2040: просп. Победы, 45",
                "Почтомат №3012: ул. Саксаганского, 101"
            ],
            "Харків": [
                "Поштомат №4010: просп. Гагаріна, 20",
                "Поштомат №4020: вул. Сумська, 45",
                "Поштомат №4030: вул. Героїв Праці, 10"
            ],
            "Харьков": [
                "Почтомат №4010: просп. Гагарина, 20",
                "Почтомат №4020: ул. Сумская, 45",
                "Почтомат №4030: ул. Героев Труда, 10"
            ],
            "Одеса": [
                "Поштомат №5010: вул. Дерибасівська, 12",
                "Поштомат №5020: вул. Космонавтів, 36"
            ],
            "Одесса": [
                "Почтомат №5010: ул. Дерибасовская, 12",
                "Почтомат №5020: ул. Космонавтов, 36"
            ],
            "Дніпро": [
                "Поштомат №6010: просп. Дмитра Яворницького, 55",
                "Поштомат №6020: вул. Робоча, 10"
            ],
            "Днепр": [
                "Почтомат №6010: просп. Дмитрия Яворницкого, 55",
                "Почтомат №6020: ул. Рабочая, 10"
            ],
            "Львів": [
                "Поштомат №7010: просп. Свободи, 35",
                "Поштомат №7020: вул. Городоцька, 22"
            ],
            "Львов": [
                "Почтомат №7010: просп. Свободы, 35",
                "Почтомат №7020: ул. Городоцкая, 22"
            ]
        };

        if (specificData[city]) return specificData[city];

        const isUa = /[іїєґ]/i.test(city);
        const prefix = isUa ? "Поштомат" : "Почтомат";
        const street = isUa ? "вул. Центральна" : "ул. Центральная";
        return [
            `${prefix} №1: ${street}, 5`,
            `${prefix} №2: ${street}, 30`
        ];
    }

    function initRegionDropdown() {
        const regionInput = document.getElementById('checkoutRegion');
        const cityInput = document.getElementById('checkoutCity');
        const addrInput = document.getElementById('checkoutAddress');
        if (!regionInput) return;

        let wrapper = regionInput.closest('.city-input-wrapper');
        if (!wrapper) {
            wrapper = document.createElement('div');
            wrapper.className = 'city-input-wrapper';
            regionInput.parentNode.insertBefore(wrapper, regionInput);
            wrapper.appendChild(regionInput);
        }

        let dropdown = wrapper.querySelector('.city-dropdown');
        if (!dropdown) {
            dropdown = document.createElement('div');
            dropdown.className = 'city-dropdown';
            wrapper.appendChild(dropdown);
        }

        regionInput.setAttribute('autocomplete', 'off');

        // Store fetched areas to avoid repeated API calls
        let cachedAreas = null;

        const showDropdown = async (filter = '') => {
                if (!cachedAreas) {
                    dropdown.innerHTML = `<div class="city-item loading">${translations[currentLang].loading || 'Завантаження...'}</div>`;
                    dropdown.classList.add('active');
                    cachedAreas = await callNovaPoshtaAPI('Address', 'getAreas');
                }

                if (!cachedAreas || cachedAreas.length === 0) {
                    dropdown.classList.remove('active');
                    return;
                }

                const filtered = filter 
                    ? cachedAreas.filter(a => a.Description.toLowerCase().includes(filter.toLowerCase()))
                    : cachedAreas;

                if (filtered.length === 0) {
                    dropdown.classList.remove('active');
                    return;
                }

                dropdown.innerHTML = filtered.map(area => `
                    <div class="city-item" data-value="${area.Description.replace(/"/g, '&quot;')}" data-ref="${area.Ref}">${area.Description}</div>
                `).join('');
                dropdown.classList.add('active');
        };

        regionInput.addEventListener('focus', () => {
            if (!regionInput._justSelected) showDropdown(regionInput.value);
        });
        regionInput.addEventListener('input', (e) => {
            if (!regionInput._justSelected && e.isTrusted) showDropdown(regionInput.value);
        });

        dropdown.addEventListener('click', (e) => {
            const item = e.target.closest('.city-item');
            if (item) {
                regionInput._justSelected = true;
                regionInput.value = item.dataset.value;
                if (item.dataset.ref) {
                    regionInput.dataset.ref = item.dataset.ref; // Save AreaRef for city filtering
                }
                dropdown.classList.remove('active');
                regionInput.dispatchEvent(new Event('input', { bubbles: true }));
                regionInput.dispatchEvent(new Event('change', { bubbles: true }));
                setTimeout(() => { regionInput._justSelected = false; }, 300);
                
                // Clear dependent fields
                if (cityInput) {
                    cityInput.value = '';
                    delete cityInput.dataset.ref;
                    cityInput.dispatchEvent(new Event('change', { bubbles: true }));
                }
                if (addrInput) {
                    addrInput.value = '';
                    addrInput.dispatchEvent(new Event('change', { bubbles: true }));
                }
            }
        });

        document.addEventListener('click', (e) => {
            if (!wrapper.contains(e.target)) {
                dropdown.classList.remove('active');
            }
        });
    }

    function initCityDropdown() {
        const cityInput = document.getElementById('checkoutCity');
        const regionInput = document.getElementById('checkoutRegion');
        const addrInput = document.getElementById('checkoutAddress');
        if (!cityInput) return;

        let wrapper = cityInput.closest('.city-input-wrapper');
        if (!wrapper) {
            wrapper = document.createElement('div');
            wrapper.className = 'city-input-wrapper';
            cityInput.parentNode.insertBefore(wrapper, cityInput);
            wrapper.appendChild(cityInput);
        }

        let dropdown = wrapper.querySelector('.city-dropdown');
        if (!dropdown) {
            dropdown = document.createElement('div');
            dropdown.className = 'city-dropdown';
            wrapper.appendChild(dropdown);
        }

        cityInput.setAttribute('autocomplete', 'off');

        const showDropdown = async (filter = '') => {
                const areaRef = regionInput ? regionInput.dataset.ref : null;
                
                // Allow search without region if user starts typing a lot, but prefer region filter
                if (!areaRef && filter.length < 3) {
                    dropdown.innerHTML = `<div class="city-item error" style="padding:10px;color:#999;font-size:14px;">Оберіть область / Введіть мін. 3 літери</div>`;
                    dropdown.classList.add('active');
                    return;
                }

                dropdown.innerHTML = `<div class="city-item loading">${translations[currentLang].loading || 'Завантаження...'}</div>`;
                dropdown.classList.add('active');

                const params = {
                    FindByString: filter,
                    Limit: 50
                };
                if (areaRef) params.AreaRef = areaRef;

                const cities = await callNovaPoshtaAPI('Address', 'getCities', params);

                if (!cities || cities.length === 0) {
                    dropdown.classList.remove('active');
                    return;
                }

                dropdown.innerHTML = cities.map(city => `
                    <div class="city-item" data-value="${city.Description.replace(/"/g, '&quot;')}" data-ref="${city.Ref}">${city.Description}</div>
                `).join('');
                dropdown.classList.add('active');
        };

        // Debounce API calls slightly for city input
        let timeout = null;
        cityInput.addEventListener('input', (e) => {
            if (!cityInput._justSelected && e.isTrusted) {
                clearTimeout(timeout);
                timeout = setTimeout(() => showDropdown(cityInput.value), 300);
            }
        });
        cityInput.addEventListener('focus', () => {
            if (!cityInput._justSelected) showDropdown(cityInput.value);
        });

        dropdown.addEventListener('click', (e) => {
            const item = e.target.closest('.city-item');
            if (item) {
                cityInput._justSelected = true;
                cityInput.value = item.dataset.value;
                if (item.dataset.ref) {
                    cityInput.dataset.ref = item.dataset.ref; // Save CityRef for warehouse filtering
                }
                dropdown.classList.remove('active');
                cityInput.dispatchEvent(new Event('input', { bubbles: true }));
                cityInput.dispatchEvent(new Event('change', { bubbles: true }));
                setTimeout(() => { cityInput._justSelected = false; }, 300);
                
                // Clear address field when city changes
                if (addrInput) {
                    addrInput.value = '';
                    addrInput.dispatchEvent(new Event('change', { bubbles: true }));
                }
            }
        });

        document.addEventListener('click', (e) => {
            if (!wrapper.contains(e.target)) {
                dropdown.classList.remove('active');
            }
        });
    }

    async function callNovaPoshtaAPI(model, method, params = {}) {
        try {
            const response = await fetch('/api/nova-poshta', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    modelName: model,
                    calledMethod: method,
                    methodProperties: params
                })
            });
            const data = await response.json();
            return data.success ? data.data : null;
        } catch (e) {
            console.error('Nova Poshta API Error:', e);
            return null;
        }
    }

    function initDeliverySelection() {
        const addrInput = document.getElementById('checkoutAddress');
        const cityInput = document.getElementById('checkoutCity');
        const addrDropdown = document.getElementById('addressDropdown');
        const addrLoader = document.getElementById('addressLoader');
        const addrLabel = document.getElementById('addressLabel');
        const deliveryRadios = document.querySelectorAll('input[name="deliveryMethod"]');
        const npToggleGroup = document.getElementById('npToggleGroup');
        const upToggleGroup = document.getElementById('upToggleGroup');

        if (!addrInput || !cityInput) return;

        const getSelectedCarrier = () => document.querySelector('input[name="deliveryMethod"]:checked')?.value;
        const getNPType = () => document.querySelector('input[name="npDeliveryType"]:checked')?.value || 'dept';
        const getUPType = () => document.querySelector('input[name="upDeliveryType"]:checked')?.value || 'dept';

        const updateUIStrings = () => {
            const carrier = getSelectedCarrier();
            const dict = translations[currentLang] || translations.ua;
            
            if (carrier === 'nova_poshta') {
                const type = getNPType();
                if (type === 'courier') {
                    addrLabel.textContent = dict.checkout_address || 'Адреса';
                    addrInput.placeholder = dict.checkout_street_ph || 'Вулиця, буд, кв...';
                } else {
                    addrLabel.textContent = dict.checkout_address || 'Відділення/Поштомат';
                    addrInput.placeholder = type === 'locker' 
                        ? (dict.checkout_locker_ph || 'Оберіть поштомат...') 
                        : (dict.checkout_address_ph || 'Оберіть відділення...');
                }
            } else if (carrier === 'ukrposhta') {
                const type = getUPType();
                addrLabel.textContent = type === 'courier' ? (dict.checkout_address || 'Адреса') : (dict.checkout_address || 'Відділення');
                addrInput.placeholder = type === 'courier' 
                    ? (dict.checkout_street_ph || 'Вулиця, буд, кв...') 
                    : (dict.checkout_address_ph || 'Оберіть відділення...');
            } else {
                addrLabel.textContent = dict.checkout_address || 'Адреса';
                addrInput.placeholder = dict.checkout_street_ph || 'Вулиця, буд, кв...';
            }
        };

        const showAddressDropdown = async (filter = '') => {
            const carrier = getSelectedCarrier();
            const city = cityInput.value.trim();
            const cityRef = cityInput.dataset.ref; // Use CityRef if available
            
            if (!city || carrier !== 'nova_poshta' || getNPType() === 'courier') {
                addrDropdown.classList.remove('active');
                return;
            }

            addrDropdown.innerHTML = `<div class="city-item loading">${translations[currentLang].loading || 'Завантаження...'}</div>`;
            addrDropdown.classList.add('active');

            let warehouses = [];
            if (true) { // Enabled via backend proxy
                const type = getNPType();
                const params = {
                    FindByString: filter,
                    Limit: 500
                };
                
                if (cityRef) {
                    params.CityRef = cityRef;
                } else {
                    params.CityName = city;
                }

                const results = await callNovaPoshtaAPI('Address', 'getWarehouses', params);
                if (results) {
                    // Warehouse Type IDs: 
                    // - 841339c7-591a-42e0-b63d-47a4af72f518 (Department)
                    // - 9a3f2072-44b5-11e3-a7d8-0050568002cf (Cargo)
                    // - 6f8392d7-7dca-11e3-bbc1-005056801329 (Mini-office)
                    // Locker Type IDs:
                    // - f931c580-5f19-11e0-ad57-002511eee345 (Standard Postomat)
                    // - 95dc2124-0670-11e5-a23f-005056801329 (Postomat)
                    // - 3e620573-04eb-11e7-aad6-005056881c6b (PrivatBank Postomat)
                    // - f9316480-5f2d-425d-bc2c-ac7cd29decf0 (New Postomat ID)
                    const lockerTypeRefs = [
                        'f931c580-5f19-11e0-ad57-002511eee345',
                        '95dc2124-0670-11e5-a23f-005056801329',
                        '3e620573-04eb-11e7-aad6-005056881c6b',
                        'f9316480-5f2d-425d-bc2c-ac7cd29decf0'
                    ];
                    
                    const filteredResults = results.filter(w => {
                        const wType = w.TypeOfWarehouse || w.TypeOfWarehouseRef || '';
                        const desc = (w.Description || '').toLowerCase();
                        const descRu = (w.DescriptionRu || '').toLowerCase();
                        
                        const isLocker = lockerTypeRefs.includes(wType) || 
                                        desc.includes('поштомат') || 
                                        descRu.includes('поштомат');
                        
                        return type === 'locker' ? isLocker : !isLocker;
                    });
                    
                    console.log(`DEBUG NP: Found ${filteredResults.length} items of type ${type} out of ${results.length} total.`);
                    
                    const descProp = currentLang === 'ru' ? 'DescriptionRu' : 'Description';
                    warehouses = filteredResults.map(w => w[descProp] || w.Description).filter(Boolean);
                }
            } else {
                // Fallback to local data
                const depts = getNPType() === 'locker' ? getNPLockers(city) : getNPDepartments(city);
                warehouses = filter ? depts.filter(d => d.toLowerCase().includes(filter.toLowerCase())) : depts;
            }

            if (warehouses.length === 0) {
                addrDropdown.innerHTML = `<div class="city-item error" style="padding:10px;color:#999;font-size:14px;">Нічого не знайдено</div>`;
                // Intentionally keeping it active to show the "Not found" message
                return;
            }

            addrDropdown.innerHTML = warehouses.map(w => `
                <div class="city-item" data-value="${w.replace(/"/g, '&quot;')}">${w}</div>
            `).join('');
            addrDropdown.classList.add('active');
        };

        const handleCarrierChange = () => {
            const carrier = getSelectedCarrier();
            if (npToggleGroup) npToggleGroup.style.display = carrier === 'nova_poshta' ? 'flex' : 'none';
            if (upToggleGroup) upToggleGroup.style.display = carrier === 'ukrposhta' ? 'flex' : 'none';
            
            addrInput.value = '';
            addrDropdown.classList.remove('active');
            updateUIStrings();
        };

        deliveryRadios.forEach(r => r.addEventListener('change', handleCarrierChange));

        document.addEventListener('change', (e) => {
            if (e.target.name === 'npDeliveryType' || e.target.name === 'upDeliveryType') {
                addrInput.value = '';
                addrDropdown.classList.remove('active');
                updateUIStrings();
            }
        });

        addrInput.addEventListener('focus', () => {
            if (!addrInput._justSelected) showAddressDropdown(addrInput.value);
        });
        addrInput.addEventListener('input', (e) => {
            if (!addrInput._justSelected && e.isTrusted && getSelectedCarrier() === 'nova_poshta' && getNPType() !== 'courier') {
                showAddressDropdown(addrInput.value);
            }
        });

        addrDropdown.addEventListener('click', (e) => {
            const item = e.target.closest('.city-item');
            if (item) {
                addrInput._justSelected = true;
                addrInput.value = item.dataset.value;
                addrDropdown.classList.remove('active');
                addrInput.dispatchEvent(new Event('input', { bubbles: true }));
                setTimeout(() => { addrInput._justSelected = false; }, 300);
            }
        });

        document.addEventListener('click', (e) => {
            if (!addrInput.contains(e.target) && !addrDropdown.contains(e.target)) {
                addrDropdown.classList.remove('active');
            }
        });

        cityInput.addEventListener('change', () => {
            addrInput.value = '';
            addrDropdown.classList.remove('active');
        });

        // Initialize state
        handleCarrierChange();
    }

    // =============================================
    // LANGUAGE SWITCHER
    // =============================================
    let currentLang = localStorage.getItem('securbox_lang') || 'ua';
    window.currentLang = currentLang; // Expose for other scripts (e.g. reviews.html)

    function renderTrustBar() {
        const trustGrid = document.querySelector('.trust-grid');
        if (!trustGrid) return;

        const defaultBenefits = [
            {
                id: 'replace',
                icon: "ph-fill ph-package",
                ua: { title: 'Обмін протягом 7 днів', sub: 'Без зайвих складнощів' },
                ru: { title: 'Обмен в течение 7 дней', sub: 'Без лишних сложностей' }
            },
            {
                id: 'shipping',
                icon: "ph-fill ph-truck",
                ua: { title: 'Доставка Новою Поштою', sub: 'По всій Україні' },
                ru: { title: 'Доставка Новой Почтой', sub: 'По всей Украине' }
            },
            {
                id: 'support',
                icon: "ph-fill ph-headphones",
                ua: { title: 'Підтримка 24/7', sub: "Ми завжди на зв'язку" },
                ru: { title: 'Поддержка 24/7', sub: 'Мы всегда на связи' }
            }
        ];

        let benefits = defaultBenefits;
        const saved = localStorage.getItem('admin_benefits');
        if (saved) {
            try { benefits = JSON.parse(saved); } catch (e) { }
        }

        const fragment = document.createDocumentFragment();
        benefits.forEach(b => {
            const item = document.createElement('div');
            item.className = 'trust-item';
            item.innerHTML = `
                <i class="${b.icon}"></i>
                <div>
                    <strong>${b[currentLang]?.title || ''}</strong>
                    <span>${b[currentLang]?.sub || ''}</span>
                </div>
            `;
            fragment.appendChild(item);
        });

        trustGrid.innerHTML = '';
        trustGrid.appendChild(fragment);
    }

    let cachedModuleSettings = null;
    function getModuleSettings() {
        if (!cachedModuleSettings) {
            const saved = localStorage.getItem('admin_modules_settings');
            if (saved) {
                try { cachedModuleSettings = JSON.parse(saved); } catch (e) { }
            }
        }
        return cachedModuleSettings;
    }

    function applyModuleSettings() {
        const settings = getModuleSettings();
        if (!settings) return;

        try {
            const modules = [
                { id: 'hero', selector: '#hero', type: 'visibility' },
                { id: 'trust', selector: '#trust-section', type: 'visibility' },
                { id: 'categories', selector: '#categories', type: 'both' },
                { id: 'products', selector: '#products', type: 'both' },
                { id: 'testimonials', selector: '#testimonials', type: 'both' },
                { id: 'articles', selector: '#articles-section', type: 'both' },
                { id: 'newsletter', selector: '#contact', type: 'both', titleSelector: '.newsletter-text h2' }
            ];

            modules.forEach(mod => {
                const section = document.querySelector(mod.selector);
                const modSettings = settings[mod.id];
                if (!section || !modSettings) return;

                // Visibility
                section.style.display = modSettings.visible ? '' : 'none';

                // Title (if applicable)
                if (mod.type === 'both' && modSettings[currentLang]?.title) {
                    const titleEl = section.querySelector(mod.titleSelector || '.section-title');
                    if (titleEl) {
                        titleEl.textContent = modSettings[currentLang].title;
                    }
                }
            });
        } catch (e) {
            console.error('Error applying module settings:', e);
        }
    }

    let i18nElements = null;
    let i18nPlaceholders = null;

    function applyTranslations(lang) {
        currentLang = lang;
        window.currentLang = lang;
        localStorage.setItem('securbox_lang', lang);
        const dict = translations[lang];
        if (!dict) return;

        // Cache elements on first run
        if (!i18nElements) {
            i18nElements = [];
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                const hasIcon = el.querySelector('iconify-icon') || el.querySelector('svg') || el.querySelector('img');
                i18nElements.push({ el, key, hasIcon: !!hasIcon });
            });
        }

        if (!i18nPlaceholders) {
            i18nPlaceholders = [];
            document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
                const key = el.getAttribute('data-i18n-placeholder');
                i18nPlaceholders.push({ el, key });
            });
        }

        // Fast translation loop
        for (let i = 0; i < i18nElements.length; i++) {
            const item = i18nElements[i];
            if (dict[item.key] && !item.hasIcon) {
                item.el.innerHTML = dict[item.key];
            }
        }

        for (let i = 0; i < i18nPlaceholders.length; i++) {
            const item = i18nPlaceholders[i];
            if (dict[item.key]) {
                item.el.placeholder = dict[item.key];
            }
        }

        document.documentElement.lang = lang === 'ua' ? 'uk' : 'ru';
        
        // Optimize language buttons
        if (!window.langButtons) window.langButtons = document.querySelectorAll('.lang-btn, .ms-lang-btn');
        window.langButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });

        renderTrustBar();
        applyModuleSettings();
        applyHeaderSettings();
        applyContactSettings();
        applyNavigationSettings();
        renderCustomPagesLinks();
        loadLocalizedPageContent(lang);
        applySeoSettings(lang);

        // Re-render dynamic content with the new language
        if (window.appIsInitialized) {
            if (typeof renderProducts === 'function') renderProducts();
            if (typeof renderCategories === 'function') renderCategories();
            if (typeof populatePDP === 'function') populatePDP();
            if (typeof renderApprovedReviews === 'function') renderApprovedReviews();
            if (typeof loadAllReviews === 'function') loadAllReviews();
        }
    }

    function applySeoSettings(lang) {
        const saved = localStorage.getItem('admin_seo_settings');
        if (!saved) return;

        let seoData = {};
        try { seoData = JSON.parse(saved); } catch(e) { return; }

        const path = window.location.pathname;
        const pageName = path.split('/').pop() || 'index.html';
        
        let pageId = 'home';
        if (pageName === 'about.html') pageId = 'about';
        else if (pageName === 'delivery-payment.html') pageId = 'delivery';
        else if (pageName === 'returns.html') pageId = 'returns';
        else if (pageName === 'contacts.html') pageId = 'contacts';
        else if (pageName === 'catalog.html') pageId = 'products';
        else if (pageName === 'category.html') pageId = 'category';
        else if (pageName === 'product-detailed.html') pageId = 'product';
        else if (pageName === 'index.html' || pageName === '') pageId = 'home';

        const pageSeo = (seoData[pageId] && seoData[pageId][lang]) ? seoData[pageId][lang] : null;

        if (pageSeo) {
            if (pageSeo.title) {
                document.title = pageSeo.title;
            }
            if (pageSeo.description) {
                let metaDesc = document.querySelector('meta[name="description"]');
                if (!metaDesc) {
                    metaDesc = document.createElement('meta');
                    metaDesc.setAttribute('name', 'description');
                    document.head.appendChild(metaDesc);
                }
                metaDesc.setAttribute('content', pageSeo.description);
            }
            if (pageSeo.keywords) {
                let metaKeywords = document.querySelector('meta[name="keywords"]');
                if (!metaKeywords) {
                    metaKeywords = document.createElement('meta');
                    metaKeywords.setAttribute('name', 'keywords');
                    document.head.appendChild(metaKeywords);
                }
                metaKeywords.setAttribute('content', pageSeo.keywords);
            }
        }
    }

    function applyContactSettings() {
        const saved = localStorage.getItem('admin_site_settings');
        if (!saved) return;

        try {
            const data = JSON.parse(saved);
            const contacts = data.contacts;
            if (!contacts) return;

            const lang = typeof currentLang !== 'undefined' ? currentLang : 'ua';
            const c = contacts[lang] || contacts['ua'];
            if (!c) return;

            // 1. Update all phone links and text
            const phoneEls = document.querySelectorAll('[href^="tel:"], .contact-phone, [data-contact="phone"]');
            phoneEls.forEach(el => {
                if (el.tagName === 'A') el.href = `tel:${c.phone.replace(/\D/g, '')}`;
                const icon = el.querySelector('iconify-icon');
                if (icon) {
                    const textNode = Array.from(el.childNodes).find(n => n.nodeType === 3 && n.textContent.trim().length > 0);
                    if (textNode) textNode.textContent = ' ' + c.phone;
                    else el.appendChild(document.createTextNode(' ' + c.phone));
                } else {
                    el.textContent = c.phone;
                }
            });

            // 2. Update all email links and text
            const emailEls = document.querySelectorAll('[href^="mailto:"], .contact-email, [data-contact="email"]');
            emailEls.forEach(el => {
                if (el.tagName === 'A') el.href = `mailto:${c.email}`;
                const icon = el.querySelector('iconify-icon');
                if (icon) {
                    const textNode = Array.from(el.childNodes).find(n => n.nodeType === 3 && n.textContent.trim().length > 0);
                    if (textNode) textNode.textContent = ' ' + c.email;
                    else el.appendChild(document.createTextNode(' ' + c.email));
                } else {
                    el.textContent = c.email;
                }
            });

            // 3. Update all address elements
            const addressEls = document.querySelectorAll('.contact-address, [data-contact="address"]');
            addressEls.forEach(el => {
                const icon = el.querySelector('iconify-icon');
                if (icon) {
                    const textNode = Array.from(el.childNodes).find(n => n.nodeType === 3 && n.textContent.trim().length > 0);
                    if (textNode) textNode.textContent = ' ' + c.address;
                    else el.appendChild(document.createTextNode(' ' + c.address));
                } else {
                    el.textContent = c.address;
                }
            });

            // 4. Update all schedule elements
            const scheduleEls = document.querySelectorAll('.contact-schedule, [data-contact="schedule"]');
            scheduleEls.forEach(el => {
                const icon = el.querySelector('iconify-icon');
                if (icon) {
                    const textNode = Array.from(el.childNodes).find(n => n.nodeType === 3 && n.textContent.trim().length > 0);
                    if (textNode) textNode.textContent = ' ' + c.schedule;
                    else el.appendChild(document.createTextNode(' ' + c.schedule));
                } else {
                    el.textContent = c.schedule;
                }
            });

            // 6. Global Visibility
            const vis = data.contactVisibility || {};
            
            // Hide/Show containers
            const phoneContainers = document.querySelectorAll('.contact-phone-container, [data-contact-wrapper="phone"]');
            phoneContainers.forEach(el => el.style.display = vis.showPhone !== false ? '' : 'none');
            
            const emailContainers = document.querySelectorAll('.contact-email-container, [data-contact-wrapper="email"]');
            emailContainers.forEach(el => el.style.display = vis.showEmail !== false ? '' : 'none');
            
            const addressContainers = document.querySelectorAll('.contact-address-container, [data-contact-wrapper="address"]');
            addressContainers.forEach(el => el.style.display = vis.showAddress !== false ? '' : 'none');
            
            const scheduleContainers = document.querySelectorAll('.contact-schedule-container, [data-contact-wrapper="schedule"]');
            scheduleContainers.forEach(el => el.style.display = vis.showSchedule !== false ? '' : 'none');

        } catch (e) {
            console.error('Error applying contact settings:', e);
        }
    }

    function applyHeaderSettings() {
        const saved = localStorage.getItem('admin_site_settings');
        if (!saved) return;

        try {
            const data = JSON.parse(saved);
            
            // Update Global SEO
            if (data.title) {
                // Only update if it's the main index page or if title is generic
                if (document.title.includes('SECURBOX')) {
                    document.title = document.title.replace('SECURBOX', data.title);
                }
            }
            if (data.metaDesc) {
                const meta = document.querySelector('meta[name="description"]');
                if (meta) meta.setAttribute('content', data.metaDesc);
            }

            const logoLinks = document.querySelectorAll('.logo');
            logoLinks.forEach(logoLink => {
                // Global Logo Visibility
                logoLink.style.display = data.header?.showLogo !== false ? '' : 'none';

                // Update Title
                const titleEl = logoLink.querySelector('span');
                if (titleEl && data.title) {
                    titleEl.textContent = data.title;
                }
                
                // ... rest of logo logic same ...
                const iconEl = logoLink.querySelector('iconify-icon.logo-icon');
                if (data.logoImg) {
                    if (iconEl) iconEl.style.display = 'none';
                    let imgEl = logoLink.querySelector('img.logo-img');
                    if (!imgEl) {
                        imgEl = document.createElement('img');
                        imgEl.className = 'logo-img';
                        imgEl.style.maxHeight = '40px';
                        imgEl.style.objectFit = 'contain';
                        logoLink.prepend(imgEl);
                    }
                    imgEl.src = data.logoImg;
                    imgEl.style.display = '';
                } else if (data.logoIcon) {
                    const imgEl = logoLink.querySelector('img.logo-img');
                    if (imgEl) imgEl.style.display = 'none';
                    
                    if (iconEl) {
                        iconEl.icon = data.logoIcon;
                        iconEl.style.display = '';
                    }
                }
            });

            // Header elements visibility
            const callbackBtn = document.getElementById('headerCallbackTrigger');
            if (callbackBtn && data.header) {
                callbackBtn.style.display = data.header.showCallback ? '' : 'none';
                const callbackText = callbackBtn.querySelector('span[data-i18n="nav_callback"]');
                if (callbackText && data.header.callbackText) {
                    callbackText.textContent = data.header.callbackText;
                    callbackText.removeAttribute('data-i18n'); // Disable i18n for this element to prevent override
                }
            }

            const hamburgerBtn = document.getElementById('hamburgerBtn');
            if (hamburgerBtn && data.header) {
                hamburgerBtn.style.display = data.header.showHamburger === false ? 'none' : '';
            }
        } catch (e) {
            console.error('Error applying header settings:', e);
        }
    }

    function applyNavigationSettings() {
        const nav = document.getElementById('mainNav');
        const msNav = document.getElementById('msDynamicNavLinks');

        const saved = localStorage.getItem('admin_navigation');
        let data;
        
        if (saved) {
            try {
                data = JSON.parse(saved);
            } catch (e) {
                console.error('Error parsing navigation settings:', e);
                data = DEFAULT_NAVIGATION;
            }
        }

        if (!Array.isArray(data)) {
            data = DEFAULT_NAVIGATION;
        }

        const activeItems = data.filter(item => item.active);
        
        try {
            // Separate items
            const mainItems = activeItems.filter(item => !item.isMobileOnly);
            const mobileOnlyItems = activeItems.filter(item => item.isMobileOnly);
            
            // ---------------------------------
            // DESKTOP: mainNav
            // ---------------------------------
            if (nav) {
                const callbackLink = nav.querySelector('#mobileCallbackLink');
                nav.innerHTML = '';
                
                mainItems.forEach(item => {
                    const a = document.createElement('a');
                    let url = item.url;
                    // Fix relative hashes on non-index pages
                    if (url.startsWith('#') && !window.location.pathname.endsWith('index.html') && window.location.pathname !== '/' && !window.location.pathname.endsWith('/')) {
                        url = 'index.html' + url;
                    }
                    a.href = url;
                    a.textContent = item[currentLang] || item.ua;
                    nav.appendChild(a);
                });

                if (mobileOnlyItems.length > 0 || callbackLink) {
                    const bottomContainer = document.createElement('div');
                    bottomContainer.className = 'mobile-nav-bottom';
                    mobileOnlyItems.forEach(item => {
                        const a = document.createElement('a');
                        let url = item.url;
                        if (url.startsWith('#') && !window.location.pathname.endsWith('index.html') && window.location.pathname !== '/' && !window.location.pathname.endsWith('/')) {
                            url = 'index.html' + url;
                        }
                        a.href = url;
                        a.className = 'mobile-only-nav';
                        a.textContent = item[currentLang] || item.ua;
                        bottomContainer.appendChild(a);
                    });
                    if (callbackLink) bottomContainer.appendChild(callbackLink);
                    nav.appendChild(bottomContainer);
                }
            }

            // ---------------------------------
            // MOBILE: msDynamicNavLinks
            // ---------------------------------
            if (msNav) {
                msNav.innerHTML = '';
                // Render all active items for mobile
                activeItems.forEach(item => {
                    const li = document.createElement('li');
                    const a = document.createElement('a');
                    let url = item.url;
                    if (url.startsWith('#') && !window.location.pathname.endsWith('index.html') && window.location.pathname !== '/' && !window.location.pathname.endsWith('/')) {
                        url = 'index.html' + url;
                    }
                    a.href = url;
                    a.textContent = item[currentLang] || item.ua;
                    li.appendChild(a);
                    msNav.appendChild(li);
                });
            }
        } catch (e) {
            console.error('Error applying navigation settings:', e);
        }
    }

    function loadLocalizedPageContent(lang) {
        const contentArea = document.getElementById('page-content-area');
        if (!contentArea) return;

        const pageId = contentArea.getAttribute('data-page-id');
        if (!pageId) return;

        const data = localStorage.getItem(`page_content_${pageId}`);
        if (data) {
            try {
                const parsed = JSON.parse(data);
                if (parsed && typeof parsed === 'object' && parsed[lang]) {
                    contentArea.innerHTML = parsed[lang];
                    return;
                }
            } catch (e) {}

            // Fallback for old string format or if current lang missing in object
            if (typeof data === 'string' && !data.startsWith('{')) {
                contentArea.innerHTML = data;
            }
        }
    }

    const langSwitch = document.getElementById('langSwitch');
    if (langSwitch) {
        langSwitch.addEventListener('click', (e) => {
            const btn = e.target.closest('.lang-btn');
            if (!btn) return;
            applyTranslations(btn.dataset.lang);
        });
    }

    const msLangSwitch = document.querySelector('.ms-lang-switch');
    if (msLangSwitch) {
        msLangSwitch.addEventListener('click', (e) => {
            const btn = e.target.closest('.ms-lang-btn');
            if (!btn) return;
            applyTranslations(btn.dataset.lang);
        });
    }

    applyTranslations(currentLang);

    // =============================================
    // PRODUCT DATA & RENDERING
    // =============================================
    const initialProducts = [
        {
            "id": "PRD-1",
            "name_ua": "Камера відеоспостереження вулична поворотна 20 МП із зумом 20x (ZA-839P-4-W)",
            "name_ru": "Камера видеонаблюдения уличная поворотная 20 МП с зумом 20x (ZA-839P-4-W)",
            "price": 3990,
            "oldPrice": null,
            "image": "assets/cam20/1 без фона без лого.png",
            "images": [
                "assets/cam20/1 без фона без лого.png",
                "assets/cam20/3.jpg",
                "assets/cam20/IMG_20240213_000830.jpg",
                "assets/cam20/IMG_20240213_001607.jpg",
                "assets/cam20/IMG_20240213_002148.jpg",
                "assets/cam20/IMG_20240213_002332.jpg",
                "assets/cam20/IMG_20240213_002540.jpg"
            ],
            "specs_ua": [
                "Роздільна здатність: 20 МП",
                "Оптичне збільшення: 20x",
                "Двостороннє аудіо",
                "Датчик руху"
            ],
            "specs_ru": [
                "Разрешение: 20 МП",
                "Оптическое увеличение: 20x",
                "Двустороннее аудио",
                "Датчик движения"
            ],
            "description_ua": "<strong>Оптичне збільшення у 20 разів:</strong> забезпечує чітке зображення віддалених об'єктів.<br><strong>Широкий кут огляду:</strong> нахил на 90 ° і поворот на 355 °.<br><strong>Двостороннє аудіо:</strong> Вбудовані мікрофон та динамік дозволяють чути та спілкуватися через камеру.<br><strong>Датчик руху:</strong> надсилає повідомлення на телефон при виявленні активності.<br><br><strong>Комплектація:</strong><br>1 х Камера ZA-839P-4-W<br>1 х Блок живлення<br>1 х Інструкція<br>1 х Монтажний набір<br>1 х Коробка",
            "description_ru": "<strong>Оптическое увеличение в 20 раз:</strong> обеспечивает четкое изображение удаленных объектов.<br><strong>Широкий угол обзора:</strong> наклон на 90° и поворот на 355°.<br><strong>Двустороннее аудио:</strong> Встроенные микрофон и динамик позволяют слышать и общаться через камеру.<br><strong>Датчик движения:</strong> отправляет уведомления на телефон при обнаружении активности.<br><br><strong>Комплектация:</strong><br>1 х Камера ZA-839P-4-W<br>1 х Блок питания<br>1 х Инструкция<br>1 х Монтажный набор<br>1 х Коробка",
            "fullSpecs_ua": {
                "Модель": "ZA-839P-4-W",
                "Оптичне збільшення": "20x",
                "Роздільна здатність камери": "20 МП",
                "Максимальна дальність зйомки": "50 м",
                "Двостороннє аудіо": "вбудовані мікрофон та динамік",
                "Датчик руху": "надсилає повідомлення на телефон",
                "Нахил повороту по вертикалі": "90 °",
                "Нахил повороту по горизонталі": "355 °",
                "Режим зйомки": "день/ніч"
            },
            "fullSpecs_ru": {
                "Модель": "ZA-839P-4-W",
                "Оптическое увеличение": "20x",
                "Разрешение камеры": "20 МП",
                "Максимальная дальность съемки": "50 м",
                "Двустороннее аудио": "встроенные микрофон и динамик",
                "Датчик движения": "отправляет уведомления на телефон",
                "Наклон поворота по вертикали": "90 °",
                "Наклон поворота по горизонтали": "355 °",
                "Режим съемки": "день/ночь"
            },
            "category": "cat_cameras",
            "link": "product.html?id=PRD-1"
        },
        {
            "id": "PRD-2",
            "name_ua": "Камера відеоспостереження вулична 6 МП Wi-Fi IP PTZ із зумом 10x",
            "name_ru": "Камера видеонаблюдения уличная 6 МП Wi-Fi IP PTZ с зумом 10x",
            "price": 1890,
            "oldPrice": 2199,
            "image": "assets/cam6/12456 без фона без кольца.png",
            "images": [
                "assets/cam6/12456 без фона без кольца.png",
                "assets/cam6/I6.jpg",
                "assets/cam6/IMG_20240216_143343.jpg",
                "assets/cam6/IMG_20240216_143453.jpg",
                "assets/cam6/IMG_20240216_143630.jpg",
                "assets/cam6/IMG_20240216_143656.jpg"
            ],
            "specs_ua": [
                "Роздільна здатність: 6 МП",
                "Оптичне збільшення: 10x",
                "Датчик руху"
            ],
            "specs_ru": [
                "Разрешение: 6 МП",
                "Оптическое увеличение: 10x",
                "Датчик движения"
            ],
            "description_ua": "Ця вулична Wi-Fi IP камера поворотна оснащена датчиком руху, який надсилає повідомлення на ваш телефон, а двосторонній аудіозв'язок дозволяє чути та говорити через камеру.<br><br><strong>Комплектація:</strong><br>1 х Камера<br>1 х Блок живлення<br>1 х Інструкція<br>1 х Монтажний набір<br>1 х Коробка",
            "description_ru": "Эта уличная Wi-Fi IP камера поворотная оснащена датчиком движения, который отправляет уведомления на ваш телефон, а двусторонняя аудиосвязь позволяет слышать и говорить через камеру.<br><br><strong>Комплектация:</strong><br>1 х Камера<br>1 х Блок питания<br>1 х Инструкция<br>1 х Монтажный набор<br>1 х Коробка",
            "fullSpecs_ua": {
                "Роздільна здатність камери": "6 МП",
                "Фокусна відстань об'єктива": "4.0 мм + 8 мм",
                "Оптичне збільшення": "10x",
                "Датчик руху": "надсилає повідомлення на телефон",
                "Нахил повороту по вертикалі": "90 °",
                "Нахил повороту по горизонталі": "355 °",
                "Кріплення": "стельове, настінне",
                "Матеріал": "пластик",
                "Режим зйомки": "день / ніч",
                "Підсвічування": "Інфрачервоне підсвічування / LED",
                "Підключення": "Wi-Fi: 2.4 ГГц, кабель: RJ-45",
                "Живлення": "220В"
            },
            "fullSpecs_ru": {
                "Разрешение камеры": "6 МП",
                "Фокусное расстояние объектива": "4.0 мм + 8 мм",
                "Оптическое увеличение": "10x",
                "Датчик движения": "отправляет уведомления на телефон",
                "Наклон поворота по вертикали": "90 °",
                "Наклон поворота по горизонтали": "355 °",
                "Крепление": "потолочное, настенное",
                "Материал": "пластик",
                "Режим съемки": "день / ночь",
                "Подсветка": "Инфракрасная подсветка / LED",
                "Подключение": "Wi-Fi: 2.4 ГГц, кабель: RJ-45",
                "Питание": "220В"
            },
            "category": "cat_cameras",
            "link": "product.html?id=PRD-2"
        },
        {
            "id": "PRD-3",
            "name_ua": "Камера відеоспостереження вулична поворотна Wi-Fi PTZ 12 МП із зумом 10x (ZA-816S-4-W)",
            "name_ru": "Камера видеонаблюдения уличная поворотная Wi-Fi PTZ 12 МП с зумом 10x (ZA-816S-4-W)",
            "price": 2890,
            "oldPrice": 3050,
            "image": "assets/camer/cam4.png",
            "images": [
                "assets/camer/cam4.png",
                "assets/camer/33.jpg",
                "assets/camer/IMG_20240222_154156.jpg",
                "assets/camer/IMG_20240222_154450.jpg",
                "assets/camer/IMG_20240222_154648.jpg",
                "assets/camer/IMG_20240222_154816.jpg",
                "assets/camer/IMG_20240222_155233.jpg"
            ],
            "specs_ua": [
                "Роздільна здатність: 12 МП",
                "Оптичне збільшення: 10x",
                "Максимальна дальність зйомки: 40 м"
            ],
            "specs_ru": [
                "Разрешение: 12 МП",
                "Оптическое увеличение: 10x",
                "Максимальная дальность съемки: 40 м"
            ],
            "description_ua": "<strong>Оптичне збільшення у 10 разів:</strong> забезпечує чітке зображення віддалених об'єктів.<br><strong>Широкий угол огляду:</strong> нахил на 90° та поворот на 355°.<br><strong>Двостороннє аудіо:</strong> Вбудовані мікрофон та динамік дозволяють чути та спілкуватися через камеру.<br><strong>Датчик руху:</strong> надсилає повідомлення на телефон при виявленні активності.<br><br><strong>Комплектація:</strong><br>1 х Камера<br>1 х Блок живлення<br>1 х Інструкція<br>1 х Монтажний набір<br>1 х Коробка",
            "description_ru": "<strong>Оптическое увеличение в 10 раз:</strong> обеспечивает четкое изображение удаленных объектов.<br><strong>Широкий угол обзора:</strong> наклон на 90° и поворот на 355°.<br><strong>Двустороннее аудио:</strong> Встроенные микрофон и динамик позволяют слышать и общаться через камеру.<br><strong>Датчик движения:</strong> отправляет уведомления на телефон при обнаружении активности.<br><br><strong>Комплектация:</strong><br>1 х Камера<br>1 х Блок питания<br>1 х Инструкция<br>1 х Монтажный набор<br>1 х Коробка",
            "fullSpecs_ua": {
                "Модель": "ZA-816S-4-W",
                "Оптичне збільшення": "10x",
                "Роздільна здатність камери": "12 МП",
                "Максимальна дальність зйомки": "40 м",
                "Двостороннє аудіо": "вбудовані мікрофон та динамік",
                "Датчик руху": "надсилає повідомлення на телефон",
                "Нахил повороту по вертикалі": "90 °",
                "Нахил повороту по горизонталі": "355 °",
                "Підключення": "Wi-Fi: 2.4 ГГц, кабель: RJ-45"
            },
            "fullSpecs_ru": {
                "Модель": "ZA-816S-4-W",
                "Оптическое увеличение": "10x",
                "Разрешение камеры": "12 МП",
                "Максимальная дальность съемки": "40 м",
                "Двустороннее аудио": "встроенные микрофон и динамик",
                "Датчик движения": "отправляет уведомления на телефон",
                "Наклон поворота по вертикали": "90 °",
                "Наклон поворота по горизонтали": "355 °",
                "Подключение": "Wi-Fi: 2.4 ГГц, кабель: RJ-45"
            },
            "category": "cat_cameras",
            "link": "product.html?id=PRD-3"
        },
        {
            "id": "PRD-4",
            "name_ua": "Камера відеоспостереження вулична поворотна Wi-Fi 16 МП із зумом 10x (ZA-839S-4-W)",
            "name_ru": "Камера видеонаблюдения уличная поворотная Wi-Fi 16 МП с зумом 10x (ZA-839S-4-W)",
            "price": 3250,
            "oldPrice": 3550,
            "image": "assets/camer16/1234 без фона.png",
            "images": [
                "assets/camer16/1234 без фона.png",
                "assets/camer16/IMG_20240216_150717.jpg",
                "assets/camer16/IMG_20240216_150734.jpg",
                "assets/camer16/IMG_20240216_150820.jpg",
                "assets/camer16/IMG_20240216_151301.jpg"
            ],
            "specs_ua": [
                "Роздільна здатність: 16 МП",
                "Оптичне збільшення: 10x",
                "Захист від пилу і вологи (IP66)"
            ],
            "specs_ru": [
                "Разрешение: 16 МП",
                "Оптическое увеличение: 10x",
                "Защита от пыли и влаги (IP66)"
            ],
            "description_ua": "Камера відеоспостереження поворотна (ZA-839S-4-W), має широкий кут огляду, десятикратний зум, датчик руху, двостороннє аудіо і корпус із захистом від пилу і вологи (IP66).<br><br><strong>Комплектація:</strong><br>1 х Камера ZA-839S-4-W<br>1 х Блок живлення<br>1 х Інструкця<br>1 х Монтажний набір<br>1 х Коробка",
            "description_ru": "Камера видеонаблюдения поворотная (ZA-839S-4-W), имеет широкий угол обзора, десятикратный зум, датчик движения, двустороннее аудио и корпус с защитой от пыли и влаги (IP66).<br><br><strong>Комплектация:</strong><br>1 х Камера ZA-839S-4-W<br>1 х Блок питания<br>1 х Инструкция<br>1 х Монтажный набор<br>1 х Коробка",
            "fullSpecs_ua": {
                "Модель": "ZA-839S-4-W",
                "Оптичне збільшення": "10x",
                "Роздільна здатність камери": "16 МП",
                "Максимальна дальність зйомки": "40 м",
                "Двостороннє аудіо": "вбудовані мікрофон та динамік",
                "Датчик руху": "надсилає повідомлення на телефон",
                "Підключення": "Wi-Fi: 2.4 ГГц, кабель: RJ-45"
            },
            "fullSpecs_ru": {
                "Модель": "ZA-839S-4-W",
                "Оптическое увеличение": "10x",
                "Разрешение камеры": "16 МП",
                "Максимальная дальность съемки": "40 м",
                "Двустороннее аудио": "встроенные микрофон и динамик",
                "Датчик движения": "отправляет уведомления на телефон",
                "Подключение": "Wi-Fi: 2.4 ГГц, кабель: RJ-45"
            },
            "category": "cat_cameras",
            "link": "product.html?id=PRD-4"
        },
        {
            "id": "PRD-5",
            "name_ua": "Камера відеоспостереження поворотна IP Wi-Fi вулична 6 МП із зумом 36x ICSEE",
            "name_ru": "Камера видеонаблюдения поворотная IP Wi-Fi уличная 6 МП с зумом 36x ICSEE",
            "price": 4750,
            "oldPrice": 5250,
            "image": "assets/camer50/50.png",
            "images": [
                "assets/camer50/50.png",
                "assets/camer50/9872.jpg",
                "assets/camer50/IMG_20240410_140309.jpg",
                "assets/camer50/IMG_20240410_140807.jpg",
                "assets/camer50/Screenshot_6.jpg",
                "assets/camer50/Screenshot_77.jpg",
                "assets/camer50/банер7555 без фона.png"
            ],
            "specs_ua": [
                "Роздільна здатність: 6 МП",
                "Оптичне збільшення: 36x",
                "Ступінь захисту: IP66"
            ],
            "specs_ru": [
                "Разрешение: 6 МП",
                "Оптическое увеличение: 36x",
                "Степень защиты: IP66"
            ],
            "description_ua": "Відмінна камера спостереження з 36-кратним оптичним збільшенням та підтримкою протоколів Onvif. Ідеально підходит для зовнішнього використання завдяки металевому корпусу та рівню захисту IP66.<br><br><strong>Комплектація:</strong><br>1 х Камера ICSEE-6K-36X<br>1 х Блок живлення<br>1 х Інструкція<br>1 х Монтажний набір<br>1 х Коробка",
            "description_ru": "Отличная камера наблюдения с 36-кратным оптическим увеличением и поддержкой протоколов Onvif. Идеально подходит для наружного использования благодаря металлическому корпусу и уровню защиты IP66.<br><br><strong>Комплектация:</strong><br>1 х Камера ICSEE-6K-36X<br>1 х Блок питания<br>1 х Инструкция<br>1 х Монтажный набор<br>1 х Коробка",
            "fullSpecs_ua": {
                "Модель": "ICSEE-6K-36X",
                "Роздільна здатність камери": "6 МП",
                "Оптичний зум": "4.7-94 мм",
                "Оптичне збільшення": "36x",
                "Нахил повороту по вертикалі": "90 °",
                "Нахил повороту по горизонталі": "355 °",
                "Матеріал корпусу": "метал, пластик",
                "Підсвічування": "Інфрачервоне підсвічування / LED",
                "Ступінь захисту": "IP66",
                "Підключення": "Wi-Fi: 2.4 ГГц, кабель: RJ-45"
            },
            "fullSpecs_ru": {
                "Модель": "ICSEE-6K-36X",
                "Разрешение камеры": "6 МП",
                "Оптический зум": "4.7-94 мм",
                "Оптическое увеличение": "36x",
                "Наклон поворота по вертикали": "90 °",
                "Наклон поворота по горизонтали": "355 °",
                "Материал корпуса": "металл, пластик",
                "Подсветка": "Инфракрасная подсветка / LED",
                "Степень защиты": "IP66",
                "Подключение": "Wi-Fi: 2.4 ГГц, кабель: RJ-45"
            },
            "category": "cat_cameras",
            "link": "product.html?id=PRD-5"
        },
        {
            "id": "PRD-6",
            "name_ua": "Камера відеоспостереження Tuya 4mp Wi-Fi поворотная",
            "name_ru": "Камера видеонаблюдения Tuya 4mp Wi-Fi поворотная",
            "price": 980,
            "oldPrice": 1200,
            "image": "assets/camer16/1234 без фона.png",
            "images": [
                "assets/camer16/1234 без фона.png"
            ],
            "specs_ua": [
                "Роздільна здатність: 4мп",
                "Додаток: Tuya",
                "Двостороннє аудіо"
            ],
            "specs_ru": [
                "Разрешение: 4МП",
                "Приложение: Tuya",
                "Двустороннее аудио"
            ],
            "description_ua": "Поворотна домашня Wi-Fi камера з роздільною здатністю 4мп, що підтримує додаток Tuya для iOS та Android. Забезпечує легкий контроль та спостереження.<br><br><strong>Комплектація:</strong><br>1 х Камера<br>1 х Блок живлення<br>1 х Інструкція<br>1 х Монтажний набір<br>1 х Коробка",
            "description_ru": "Поворотная домашняя Wi-Fi камера с разрешением 4МП, поддерживающая приложение Tuya для iOS и Android. Обеспечивает легкий контроль и наблюдение.<br><br><strong>Комплектация:</strong><br>1 х Камера<br>1 х Блок питания<br>1 х Инструкция<br>1 х Монтажный набор<br>1 х Коробка",
            "fullSpecs_ua": {
                "Тип": "Поворотна домашня Wi-Fi камера",
                "Роздільна здатність": "4мп",
                "Двостороннє аудіо": "вбудовані мікрофон та динамік",
                "Додаток": "Tuya",
                "Підтримка": "micro SD"
            },
            "fullSpecs_ru": {
                "Тип": "Поворотная домашняя Wi-Fi камера",
                "Разрешение": "4мп",
                "Двустороннее аудио": "встроенные микрофон и динамик",
                "Приложение": "Tuya",
                "Поддержка": "micro SD"
            },
            "category": "cat_cameras",
            "link": "product.html?id=PRD-6"
        },
        {
            "id": "PRD-7",
            "name_ua": "Світильник сенсорний на акумуляторі 600 mAh",
            "name_ru": "Светильник сенсорный на аккумуляторе 600 mAh",
            "price": 750,
            "oldPrice": null,
            "image": "assets/cam3.png",
            "images": [
                "assets/cam3.png"
            ],
            "specs_ua": [
                "Сенсор руху: 3м",
                "Акумулятор: 600 mAh",
                "60 світлодіодів"
            ],
            "specs_ru": [
                "Сенсор движения: 3м",
                "Аккумулятор: 600 mAh",
                "60 светодиодов"
            ],
            "description_ua": "Сенсорний світильник має біле світло та 60 світлодіодів для яскравого та рівномірного освітлення, та сенсор який реагує на рух на відстані 3 метрів.<br><br><strong>Комплектація:</strong><br>1 х USB кабель<br>1 х Інструкція<br>1 х Кріплення<br>1 х Коробка",
            "description_ru": "Сенсорный светильник имеет белый свет и 60 светодиодов для яркого и равномерного освещения, и сенсор, который реагирует на движение на расстоянии 3 метров.<br><br><strong>Комплектация:</strong><br>1 х USB кабель<br>1 х Инструкция<br>1 х Крепление<br>1 х Коробка",
            "fullSpecs_ua": {
                "Потужність": "1,5 Вт",
                "Люмен потік": "150 LM",
                "Акумулятор": "600 mAh",
                "Довжина": "24 см",
                "Колірна температура": "6000К"
            },
            "fullSpecs_ru": {
                "Мощность": "1,5 Вт",
                "Световой поток": "150 LM",
                "Аккумулятор": "600 mAh",
                "Длина": "24 см",
                "Цветовая температура": "6000К"
            },
            "category": "cat_lighting",
            "link": "product.html?id=PRD-7"
        },
        {
            "id": "PRD-8",
            "name_ua": "LED світильник з акумулятором Sensor Light 1800 mAh",
            "name_ru": "LED светильник с аккумулятором Sensor Light 1800 mAh",
            "price": 850,
            "oldPrice": null,
            "image": "assets/cam4.png",
            "images": [
                "assets/cam4.png"
            ],
            "specs_ua": [
                "Регульована яскравість",
                "Акумулятор: 1800 mAh",
                "Колірна температура: 3000К-6500К"
            ],
            "specs_ru": [
                "Регулируемая яркость",
                "Аккумулятор: 1800 mAh",
                "Цветовая температура: 3000К-6500К"
            ],
            "description_ua": "Це компактний світлодіодний нічник з м'яким світлом та регульованою яскравістю. Можливість регулювати відтінок світіння, роблячи його теплішим або холоднішим.<br><br><strong>Комплектація:</strong><br>1 x Світильник.<br>1 x USB Type-C.<br>1 x Кріплення.<br>1 x Коробка.",
            "description_ru": "Это компактный светодиодный ночник с мягким светом и регулируемой яркостью. Возможность регулировать оттенок свечения, делая его теплее или холоднее.<br><br><strong>Комплектация:</strong><br>1 x Светильник.<br>1 x USB Type-C.<br>1 x Крепление.<br>1 x Коробка.",
            "fullSpecs_ua": {
                "Тип": "Нічник",
                "Матеріал корпуса": "пластик",
                "Колір": "білий",
                "Довжина": "15 см",
                "Колір освітлення": "теплий, холодний, нейтральний (3000К-6500К)",
                "Акумулятор": "1800 mAh"
            },
            "fullSpecs_ru": {
                "Тип": "Ночник",
                "Материал корпуса": "пластик",
                "Цвет": "белый",
                "Длина": "15 см",
                "Цвет освещения": "теплый, холодный, нейтральный (3000К-6500К)",
                "Аккумулятор": "1800 mAh"
            },
            "category": "cat_lighting",
            "link": "product.html?id=PRD-8"
        },
        {
            "id": "PRD-9",
            "name_ua": "Налобний ліхтар Bailong BL-2188b-T6 50000W",
            "name_ru": "Налобный фонарь Bailong BL-2188b-T6 50000W",
            "price": 450,
            "oldPrice": null,
            "image": "assets/cam2.png",
            "images": [
                "assets/cam2.png"
            ],
            "specs_ua": [
                "Потужність: 50 000 Вт",
                "Дальність променя: до 500 м",
                "Вологостійкий"
            ],
            "specs_ru": [
                "Мощность: 50 000 Вт",
                "Дальность луча: до 500 м",
                "Влагостойкий"
            ],
            "description_ua": "Світловий промінь із фокусуванням – дальність променя в польових умовах до 500 м. Ідеально підходить для походів, рибалки, полювання.<br><br><strong>Комплектація:</strong><br>Налобний ліхтарик Bailong BL-2188B T6 50000W;<br>Два акумулятори Bailong Li-ion 18650 5800mAh 3.7V;<br>Заряджання від мережі 220 В;<br>Заряджання від прикурювача;<br>Фірмова упаковка.",
            "description_ru": "Световой луч с фокусировкой – дальность луча в полевых условиях до 500 м. Идеально подходит для походов, рыбалки, охоты.<br><br><strong>Комплектация:</strong><br>Налобный фонарик Bailong BL-2188B T6 50000W;<br>Два аккумулятора Bailong Li-ion 18650 5800mAh 3.7V;<br>Зарядка от сети 220 В;<br>Зарядка от прикуривателя;<br>Фирменная упаковка.",
            "fullSpecs_ua": {
                "Потужність лампи": "50 000 Вт",
                "Дальність світлового променя": "100 м",
                "Оптичний зум": "Є",
                "Корпус": "вологостійкий",
                "Заряджання": "від мережі 220 Вт",
                "Кількість режимів роботи": "3"
            },
            "fullSpecs_ru": {
                "Мощность лампы": "50 000 Вт",
                "Дальность светового луча": "100 м",
                "Оптический зум": "Есть",
                "Корпус": "влагостойкий",
                "Зарядка": "от сети 220 Вт",
                "Количество режимов работы": "3"
            },
            "category": "cat_lighting",
            "link": "product.html?id=PRD-9"
        },
        {
            "id": "PRD-10",
            "name_ua": "Електрична зубна щітка Shuke SK-601 (Чорна)",
            "name_ru": "Электрическая зубная щетка Shuke SK-601 (Черная)",
            "price": 399,
            "oldPrice": null,
            "image": "assets/cam3.png",
            "images": [
                "assets/cam3.png"
            ],
            "specs_ua": [
                "4 насадки",
                "Акумуляторна",
                "5 режимів роботи"
            ],
            "specs_ru": [
                "4 насадки",
                "Аккумуляторная",
                "5 режимов работы"
            ],
            "description_ua": "Акумуляторна електрична зубна щітка з вібруючою головкою та функцією масажу. Поставляється з додатковими насадками.<br><br><strong>Комплектація:</strong><br>USB-кабель;<br>3 додаткові насадки;<br>Електрична щітка з насадкою;<br>Ковпачок.",
            "description_ru": "Аккумуляторная электрическая зубная щетка с вибрирующей головкой и функцией массажа. Поставляется с дополнительными насадками.<br><br><strong>Комплектация:</strong><br>USB-кабель;<br>3 дополнительные насадки;<br>Электрическая щетка с насадкой;<br>Колпачок.",
            "fullSpecs_ua": {
                "Тип зубної щітки": "звичайна",
                "Рух головки": "вібруючі",
                "Дод. опції": "масаж",
                "Вага товару з упаковкою": "180 г",
                "Висота": "21 см"
            },
            "fullSpecs_ru": {
                "Тип зубной щетки": "обычная",
                "Движение головки": "вибрирующие",
                "Доп. опции": "массаж",
                "Вес товара с упаковкой": "180 г",
                "Высота": "21 см"
            },
            "category": "cat_health",
            "link": "product.html?id=PRD-10"
        },
        {
            "id": "PRD-11",
            "name_ua": "Спортивний бандаж колінного суглоба Knee Bands",
            "name_ru": "Спортивный бандаж коленного сустава Knee Bands",
            "price": 299,
            "oldPrice": null,
            "image": "assets/cam4.png",
            "images": [
                "assets/cam4.png"
            ],
            "specs_ua": [
                "Еластична фіксація",
                "На липучках",
                "Для занять спортом"
            ],
            "specs_ru": [
                "Эластичная фиксация",
                "На липучках",
                "Для занятий спортом"
            ],
            "description_ua": "Спортивний бандаж для коліна з нейлону та спандексу. Еластична фіксація на липучках, ідеально підходить для дорослих.",
            "description_ru": "Спортивный бандаж для колена из нейлона и спандекса. Эластичная фиксация на липучках, идеально подходит для взрослых.",
            "fullSpecs_ua": {
                "Тип": "бандаж для коліна / спортивний наколінник",
                "Колір": "чорний",
                "Матеріал": "нейлон, спандекс",
                "Призначення": "для занять спортом",
                "Ступінь фіксації": "еластична"
            },
            "fullSpecs_ru": {
                "Тип": "бандаж для колена / спортивный наколенник",
                "Цвет": "черный",
                "Материал": "нейлон, спандекс",
                "Назначение": "для занятий спортом",
                "Степень фиксации": "эластичная"
            },
            "category": "cat_health",
            "link": "product.html?id=PRD-11"
        },
        {
            "id": "PRD-12",
            "name_ua": "Мікрофон направлений зовнішній Sawetek M100",
            "name_ru": "Микрофон направленный внешний Sawetek M100",
            "price": 1200,
            "oldPrice": null,
            "image": "assets/cam2.png",
            "images": [
                "assets/cam2.png"
            ],
            "specs_ua": [
                "Алюмінієвий корпус",
                "Для смартфона, камер, ПК",
                "Повний комплект"
            ],
            "specs_ru": [
                "Алюминиевый корпус",
                "Для смартфона, камер, ПК",
                "Полный комплект"
            ],
            "description_ua": "Мікрофон направлений зовнішній для смартфона, камер, ПК Sawetek M100, алюмінієвий корпус, повний комплект.<br><br><strong>Комплектація:</strong> Мікрофон направлений Savetek M100 - 1 шт.",
            "description_ru": "Микрофон направленный внешний для смартфона, камер, ПК Sawetek M100, алюминиевый корпус, полный комплект.<br><br><strong>Комплектация:</strong> Микрофон направленный Savetek M100 - 1 шт.",
            "fullSpecs_ua": {
                "Частотний діапазон": "20 Гц – 20 кГц",
                "Чутливість": "-40dB±1,5dB",
                "Співвідношення сигнал/шум": "≥64 dB",
                "Штекер": "3,5 мм (stereo 3-pin)",
                "Матеріал корпусу": "анодований алюміній",
                "Довжина кабелю": "близько 35 см",
                "Розмір": "80 х 22 мм"
            },
            "fullSpecs_ru": {
                "Частотный диапазон": "20 Гц – 20 кГц",
                "Чувствительность": "-40dB±1,5dB",
                "Соотношение сигнал/шум": "≥64 dB",
                "Штекер": "3,5 мм (stereo 3-pin)",
                "Материал корпуса": "анодированный алюминий",
                "Длина кабеля": "около 35 см",
                "Размер": "80 х 22 мм"
            },
            "category": "cat_accessories",
            "link": "product.html?id=PRD-12"
        },
        {
            "id": "PRD-13",
            "name_ua": "Універсальний тримач для телефону, затискач для ліжка",
            "name_ru": "Универсальный держатель для телефона, зажим для кровати",
            "price": 430,
            "oldPrice": null,
            "image": "assets/cam3.png",
            "images": [
                "assets/cam3.png"
            ],
            "specs_ua": [
                "Кріпиться на any стол",
                "Для спальні, офісу",
                "Гнучкий кронштейн"
            ],
            "specs_ru": [
                "Крепится на любой стол",
                "Для спальни, офиса",
                "Гибкий кронштейн"
            ],
            "description_ua": "Тримач для мобільного телефону, лінивий кронштейн, тримач-кліпса кріпиться на будь-який стіл, мобільна підставка для спальні, офісу, ванної кімнати та кухні.",
            "description_ru": "Держатель для мобильного телефона, ленивый кронштейн, держатель-клипса крепится на любой стол, мобильная подставка для спальни, офиса, ванной комнаты и кухни.",
            "fullSpecs_ua": {
                "Тип": "Тримач",
                "Призначення": "для телефону",
                "Місце встановлення": "Стіл, ліжко"
            },
            "fullSpecs_ru": {
                "Тип": "Держатель",
                "Назначение": "для телефона",
                "Место установки": "Стол, кровать"
            },
            "category": "cat_accessories",
            "link": "product.html?id=PRD-13"
        },
        {
            "id": "PRD-14",
            "name_ua": "Чапка Муха 12 МЛ",
            "name_ru": "Рюмка Муха 12 МЛ",
            "price": 200,
            "oldPrice": null,
            "image": "assets/cam4.png",
            "images": [
                "assets/cam4.png"
            ],
            "specs_ua": [
                "Матеріал: Скло",
                "Об'єм: 12 МЛ"
            ],
            "specs_ru": [
                "Материал: Стекло",
                "Объем: 12 МЛ"
            ],
            "description_ua": "Скляна чапка лафітник Муха. Ціна за 1 шт.",
            "description_ru": "Стеклянная рюмка лафитник Муха. Цена за 1 шт.",
            "fullSpecs_ua": {
                "Матеріал": "Скло",
                "Об'єм": "12 МЛ",
                "Вага": "28 грам"
            },
            "fullSpecs_ru": {
                "Материал": "Стекло",
                "Объем": "12 МЛ",
                "Вес": "28 грамм"
            },
            "category": "cat_other",
            "link": "product.html?id=PRD-14"
        },
        {
            "id": "PRD-15",
            "name_ua": "Чапка Муха 10 МЛ",
            "name_ru": "Рюмка Муха 10 МЛ",
            "price": 200,
            "oldPrice": 220,
            "image": "assets/cam2.png",
            "images": [
                "assets/cam2.png"
            ],
            "specs_ua": [
                "Матеріал: Скло",
                "Об'єм: 10 МЛ"
            ],
            "specs_ru": [
                "Материал: Стекло",
                "Объем: 10 МЛ"
            ],
            "description_ua": "Скляна чапка лафітник Муха. Ціна за 1 шт.",
            "description_ru": "Стеклянная рюмка лафитник Муха. Цена за 1 шт.",
            "fullSpecs_ua": {
                "Матеріал": "Скло",
                "Об'єм": "10 МЛ",
                "Висота": "6 см",
                "Вага": "24 грам"
            },
            "fullSpecs_ru": {
                "Материал": "Стекло",
                "Объем": "10 МЛ",
                "Высота": "6 см",
                "Вес": "24 грамм"
            },
            "category": "cat_other",
            "link": "product.html?id=PRD-15"
        },
        {
            "id": "PRD-16",
            "name_ua": "Чапка Муха 8 МЛ",
            "name_ru": "Рюмка Муха 8 МЛ",
            "price": 180,
            "oldPrice": null,
            "image": "assets/cam3.png",
            "images": [
                "assets/cam3.png"
            ],
            "specs_ua": [
                "Матеріал: Скло",
                "Об'єм: 8 МЛ"
            ],
            "specs_ru": [
                "Материал: Стекло",
                "Объем: 8 МЛ"
            ],
            "description_ua": "Скляна чапка лафітник Муха. Ціна за 1 шт.",
            "description_ru": "Стеклянная рюмка лафитник Муха. Цена за 1 шт.",
            "fullSpecs_ua": {
                "Матеріал": "Скло",
                "Об'єм": "8 МЛ",
                "Висота": "6 см",
                "Вага": "22 грам"
            },
            "fullSpecs_ru": {
                "Материал": "Стекло",
                "Объем": "8 МЛ",
                "Высота": "6 см",
                "Вес": "22 грамм"
            },
            "category": "cat_other",
            "link": "product.html?id=PRD-16"
        }
    ];

    // Bump db_version to refresh missing UA/RU description fields
    if (localStorage.getItem('db_version') !== '1772807400001') {
        localStorage.setItem('products', JSON.stringify(initialProducts));
        localStorage.setItem('db_version', '1772807400001');
    }

    let currentSort = 'popularity';
    let currentPage = 1;
    const itemsPerPage = 12;
    let currentCategory = 'all';

    // Filters State
    let currentSearchQuery = '';
    let currentMinPrice = null;
    let currentMaxPrice = null;


    // category.html specific logic
    const isCategoryPage = window.location.pathname.includes('category.html');
    const urlParams = new URLSearchParams(window.location.search);
    const catId = urlParams.get('id');

    if (isCategoryPage && catId) {
        currentCategory = catId;
        
        let adminCategories = JSON.parse(localStorage.getItem('admin_categories') || 'null');
        if (!adminCategories) {
            adminCategories = [
                { key: 'cat_cameras', name: 'Камеры видеонаблюдения', icon: "ph-fill ph-video-camera" },
                { key: 'cat_lighting', name: 'Умное освещение', icon: "ph-fill ph-lightbulb" },
                { key: 'cat_health', name: 'Красота и здоровье', icon: "ph-fill ph-heart" },
                { key: 'cat_accessories', name: 'Аксессуары и гаджеты', icon: "ph-fill ph-plug" },
                { key: 'cat_other', name: 'Прочее', icon: "ph-fill ph-package" }
            ];
        }
        
        const catInfo = adminCategories.find(c => c.key === catId);
        if (catInfo) {
            setTimeout(() => {
                const displayName = translations[currentLang]?.[catInfo.key] || catInfo.name;
                
                // SEO Metadata
                if (catInfo.seoTitle) {
                    document.title = catInfo.seoTitle;
                } else {
                    document.title = `${displayName} — SECURBOX`;
                }

                if (catInfo.seoDesc) {
                    const metaDescEl = document.querySelector('meta[name="description"]');
                    if (metaDescEl) metaDescEl.setAttribute('content', catInfo.seoDesc);
                }
                
                const catTitleEl = document.getElementById('categoryPageTitle');
                if (catTitleEl) {
                    catTitleEl.textContent = displayName.toUpperCase();
                    if (translations[currentLang]?.[catInfo.key]) catTitleEl.setAttribute('data-i18n', catInfo.key);
                }
                
                const breadcrumbEl = document.getElementById('breadcrumbCategoryName');
                if (breadcrumbEl) {
                    breadcrumbEl.textContent = displayName;
                    if (translations[currentLang]?.[catInfo.key]) breadcrumbEl.setAttribute('data-i18n', catInfo.key);
                }
                
                const iconEl = document.getElementById('categoryPageIcon');
                if (iconEl && catInfo.icon) {
                    iconEl.setAttribute('icon', catInfo.icon);
                }
            }, 50);
        }
    }

    let cachedProducts = null;
    function getProducts() {
        if (!cachedProducts) {
            cachedProducts = JSON.parse(localStorage.getItem('products') || '[]').filter(p => !p.hidden);
        }
        return cachedProducts;
    }

    function renderProducts() {
        const productsCarousel = document.getElementById('productsCarousel');
        if (!productsCarousel) return;

        // Apply grid layout on category page
        if (isCategoryPage) {
            productsCarousel.classList.add('category-page-grid');
            const prodPrev = document.getElementById('carouselPrev');
            const prodNext = document.getElementById('carouselNext');
            if (prodPrev) prodPrev.style.display = 'none';
            if (prodNext) prodNext.style.display = 'none';
        }

        let products = getProducts();

        // Category Filter
        if (currentCategory !== 'all') {
            products = products.filter(p => p.category === currentCategory);
        }

        // Search Filter
        if (currentSearchQuery) {
            const query = currentSearchQuery.toLowerCase().trim();
            products = products.filter(p => {
                const searchName = p['name_' + currentLang] || p.name || '';
                return searchName.toLowerCase().includes(query);
            });
        }

        // Price Filter
        const getNumPrice = p => Number(String(p.price).replace(/[^0-9.]/g, '')) || 0;
        if (currentMinPrice !== null) products = products.filter(p => getNumPrice(p) >= currentMinPrice);
        if (currentMaxPrice !== null) products = products.filter(p => getNumPrice(p) <= currentMaxPrice);

        // Sorting logic
        if (currentSort === 'cheap') {
            products.sort((a, b) => getNumPrice(a) - getNumPrice(b));
        } else if (currentSort === 'expensive') {
            products.sort((a, b) => getNumPrice(b) - getNumPrice(a));
        } else if (currentSort === 'name') {
            products.sort((a, b) => {
                const nameA = a['name_' + currentLang] || a.name || '';
                const nameB = b['name_' + currentLang] || b.name || '';
                return nameA.localeCompare(nameB, currentLang);
            });
        }

        // Pagination
        const paginationContainer = document.getElementById('pagination');
        const totalProducts = products.length;
        let productsToRender = products;

        if (paginationContainer) {
            const startIndex = (currentPage - 1) * itemsPerPage;
            productsToRender = products.slice(startIndex, startIndex + itemsPerPage);
        }

        // Use DocumentFragment for performance
        const fragment = document.createDocumentFragment();
        const dict = translations[currentLang] || {};

        productsToRender.forEach(p => {
            const article = document.createElement('article');
            article.className = 'product-card';
            const name = p['name_' + currentLang] || p.name;
            const specs = p['specs_' + currentLang] || p.specs || [];
            const specsHtml = specs.map(s => `<li>${s}</li>`).join('');
            const finalLink = (p.link && !p.link.includes('?')) ? `${p.link}?id=${p.id}` : (p.link || `product.html?id=${p.id}`);

            const btnBuyText = dict['btn_buy'] || 'В кошик';
            const btnOneClickText = dict['pdp_buy_click'] || 'Купити в 1 клік';

            article.innerHTML = `
                <div class="card-image">
                    <a href="${finalLink}">
                        <img src="${p.image}" alt="${name}">
                    </a>
                </div>
                <div class="card-content">
                    <a href="${finalLink}">
                        <h3 class="product-title">${name}</h3>
                    </a>
                    <ul class="product-specs">${specsHtml}</ul>
                    <div class="card-footer">
                        <div class="price-block">
                            <span class="price-new">${Number(p.price).toLocaleString('uk-UA')}₴</span>
                        </div>
                    </div>
                    <div class="card-buy-buttons">
                        <button class="btn btn-add-cart add-to-cart" data-name="${name}" data-price="${p.price}" data-image="${p.image}">
                            <i class="ph-fill ph-shopping-cart"></i>
                            <span>${btnBuyText}</span>
                        </button>
                        <button class="btn btn-outline btn-buy-now-quick" data-product="${name}" data-price="${p.price}" data-image="${p.image}">
                            <i class="ph-fill ph-tote"></i>
                            <span>${btnOneClickText}</span>
                        </button>
                    </div>
                </div>`;
            fragment.appendChild(article);
        });

        productsCarousel.innerHTML = '';
        productsCarousel.appendChild(fragment);

        // Update Found Count
        const foundCountEl = document.getElementById('productsFoundCount');
        if (foundCountEl) {
            foundCountEl.textContent = (currentLang === 'ua') ? `Знайдено: ${totalProducts} товарів` : `Найдено: ${totalProducts} товаров`;
        }

        if (paginationContainer) {
            renderPagination(totalProducts);
        }
    }

    function renderPagination(total) {
        const container = document.getElementById('pagination');
        if (!container) return;

        const totalPages = Math.ceil(total / itemsPerPage);
        container.innerHTML = '';

        if (totalPages <= 1) return;

        // Previous Button
        const prevBtn = document.createElement('button');
        prevBtn.className = 'page-btn';
        prevBtn.innerHTML = '<i class="ph-fill ph-caret-left"></i>';
        prevBtn.disabled = currentPage === 1;
        prevBtn.addEventListener('click', () => {
            currentPage--;
            renderProducts();
            window.scrollTo({ top: productsCarousel.offsetTop - 100, behavior: 'smooth' });
        });
        container.appendChild(prevBtn);

        // Page Numbers
        for (let i = 1; i <= totalPages; i++) {
            const btn = document.createElement('button');
            btn.className = `page-btn ${i === currentPage ? 'active' : ''}`;
            btn.textContent = i;
            btn.addEventListener('click', () => {
                currentPage = i;
                renderProducts();
                window.scrollTo({ top: productsCarousel.offsetTop - 100, behavior: 'smooth' });
            });
            container.appendChild(btn);
        }

        // Next Button
        const nextBtn = document.createElement('button');
        nextBtn.className = 'page-btn';
        nextBtn.innerHTML = '<i class="ph-fill ph-caret-right"></i>';
        nextBtn.disabled = currentPage === totalPages;
        nextBtn.addEventListener('click', () => {
            currentPage++;
            renderProducts();
            window.scrollTo({ top: productsCarousel.offsetTop - 100, behavior: 'smooth' });
        });
        container.appendChild(nextBtn);
    }

    // =============================================
    // DYNAMIC CATEGORY RENDERING
    // =============================================
    let cachedAdminCategories = null;
    function getAdminCategories() {
        if (!cachedAdminCategories) {
            cachedAdminCategories = JSON.parse(localStorage.getItem('admin_categories') || 'null');
            if (!cachedAdminCategories) {
                cachedAdminCategories = [
                    { key: 'cat_cameras', name: 'Камеры видеонаблюдения', icon: "ph-fill ph-video-camera" },
                    { key: 'cat_lighting', name: 'Умное освещение', icon: "ph-fill ph-lightbulb" },
                    { key: 'cat_health', name: 'Красота и здоровье', icon: "ph-fill ph-heart" },
                    { key: 'cat_accessories', name: 'Аксессуары и гаджеты', icon: "ph-fill ph-plug" },
                    { key: 'cat_other', name: 'Прочее', icon: "ph-fill ph-package" }
                ];
            }
        }
        return cachedAdminCategories;
    }

    function renderCategories() {
        const categoriesGrid = document.getElementById('mainCategoriesGrid');
        if (!categoriesGrid) return;

        const adminCategories = getAdminCategories();
        const allActiveProducts = getProducts();
        const categoriesWithProducts = [...new Set(allActiveProducts.map(p => p.category))];

        const fragment = document.createDocumentFragment();
        const dict = translations[currentLang] || {};

        let visibleCount = 0;
        adminCategories.forEach((cat) => {
            if (!categoriesWithProducts.includes(cat.key)) return;

            let imgUrl = cat.image;
            if (!imgUrl) {
                const catProducts = allActiveProducts.filter(p => p.category === cat.key);
                if (catProducts.length > 0) {
                    imgUrl = (catProducts[0].images && catProducts[0].images[0]) || catProducts[0].image;
                }
            }
            if (!imgUrl) imgUrl = 'assets/cam1.png';

            const isFeatured = visibleCount === 0;
            const a = document.createElement('a');
            a.href = `category.html?id=${cat.key}`;
            a.className = `category-card ${isFeatured ? 'category-featured' : ''}`;
            if (currentCategory === cat.key) a.classList.add('active');
            a.dataset.category = cat.key;

            const displayName = dict[cat.key] || cat.name;
            const transAttr = dict[cat.key] ? `data-i18n="${cat.key}"` : '';

            a.innerHTML = `
                <div class="category-card-decorator"></div>
                <img src="${imgUrl}" alt="${cat.name}">
                <span class="category-label" ${transAttr}>${displayName.toUpperCase()}</span>
                <div class="category-card-glow"></div>
            `;

            fragment.appendChild(a);
            visibleCount++;
        });

        categoriesGrid.innerHTML = '';
        categoriesGrid.appendChild(fragment);
    }

    renderCategories();
    renderProducts();

    // =============================================
    // PRODUCTS SORTING
    // =============================================
    const sortHeader = document.getElementById('sortHeader');
    const sortList = document.getElementById('sortList');
    const sortItems = document.querySelectorAll('.sort-list li');
    const currentSortLabel = document.getElementById('currentSort');

    if (sortHeader && sortList) {
        sortHeader.addEventListener('click', (e) => {
            e.stopPropagation();
            sortList.classList.toggle('active');
        });

        document.addEventListener('click', () => {
            sortList.classList.remove('active');
        });

        sortItems.forEach(item => {
            item.addEventListener('click', () => {
                currentSort = item.dataset.sort;
                if (currentSortLabel) {
                    currentSortLabel.textContent = item.textContent;
                    if (item.hasAttribute('data-i18n')) {
                        currentSortLabel.setAttribute('data-i18n', item.getAttribute('data-i18n'));
                    } else {
                        currentSortLabel.removeAttribute('data-i18n');
                    }
                }
                renderProducts();
                sortList.classList.remove('active');
            });
        });
    }

    // =============================================
    // PRODUCTS SLIDER
    // =============================================
    const prodPrev = document.getElementById('carouselPrev');
    const prodNext = document.getElementById('carouselNext');
    const prodList = document.getElementById('productsCarousel');

    if (prodPrev && prodNext && prodList) {
        prodNext.addEventListener('click', () => {
            const scrollAmount = prodList.clientWidth * 0.8;
            prodList.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });
        prodPrev.addEventListener('click', () => {
            const scrollAmount = prodList.clientWidth * 0.8;
            prodList.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });
    }

    // =============================================
    // INLINE FILTERS
    // =============================================
    const toggleInlineFilter = document.getElementById('toggleInlineFilter');
    const inlinePriceFilter = document.getElementById('inlinePriceFilter');
    const productsFoundCount = document.getElementById('productsFoundCount');
    
    const searchInput = document.getElementById('catalogSearch');
    const priceMinSlider = document.getElementById('priceMinSlider');
    const priceMaxSlider = document.getElementById('priceMaxSlider');
    const rangeTrack = document.getElementById('rangeTrack');
    const priceMinInput = document.getElementById('priceMinInput');
    const priceMaxInput = document.getElementById('priceMaxInput');
    
    const priceMinLabel = document.getElementById('priceMinLabel');
    const priceMaxLabel = document.getElementById('priceMaxLabel');

    if (inlinePriceFilter || searchInput) {
        // Find absolute min/max prices from DB
        const allProducts = JSON.parse(localStorage.getItem('products') || '[]').filter(p => !p.hidden);
        let absoluteMin = 0;
        let absoluteMax = 10000;
        if (allProducts.length > 0) {
            const prices = allProducts.map(p => p.price);
            absoluteMin = Math.floor(Math.min(...prices) / 100) * 100;
            absoluteMax = Math.ceil(Math.max(...prices) / 100) * 100;
        }

        // Init Sliders limits
        if (priceMinSlider) {
            priceMinSlider.min = absoluteMin; priceMinSlider.max = absoluteMax;
            priceMinInput.min = absoluteMin; priceMinInput.max = absoluteMax;
            priceMaxSlider.min = absoluteMin; priceMaxSlider.max = absoluteMax;
            priceMaxInput.min = absoluteMin; priceMaxInput.max = absoluteMax;
            
            priceMinSlider.value = absoluteMin;
            priceMinInput.value = absoluteMin;
            priceMaxSlider.value = absoluteMax;
            priceMaxInput.value = absoluteMax;
            
            updateSliderTrack();
            updatePriceLabels();
        }

        function toggleFiltersPanel() {
            if (toggleInlineFilter) toggleInlineFilter.classList.toggle('active');
            if (inlinePriceFilter) inlinePriceFilter.classList.toggle('active');
        }

        if(toggleInlineFilter) toggleInlineFilter.addEventListener('click', toggleFiltersPanel);

        // Slider Logic
        function updateSliderTrack() {
            if (!priceMinSlider || !priceMaxSlider || !rangeTrack) return;
            const min = parseInt(priceMinSlider.value);
            const max = parseInt(priceMaxSlider.value);
            
            const range = absoluteMax - absoluteMin;
            const leftPerc = ((min - absoluteMin) / range) * 100;
            const rightPerc = 100 - ((max - absoluteMin) / range) * 100;
            
            rangeTrack.style.left = `${leftPerc}%`;
            rangeTrack.style.right = `${rightPerc}%`;
        }

        function formatPrice(price) {
            return Number(price).toLocaleString('uk-UA') + ' ₴';
        }

        function updatePriceLabels() {
            if (priceMinLabel) priceMinLabel.textContent = formatPrice(priceMinSlider.value);
            if (priceMaxLabel) priceMaxLabel.textContent = formatPrice(priceMaxSlider.value);
        }

        if (priceMinSlider) {
            priceMinSlider.addEventListener('input', (e) => {
                let val = parseInt(e.target.value);
                let maxVal = parseInt(priceMaxSlider.value);
                if(val > maxVal - 10) { priceMinSlider.value = maxVal - 10; val = maxVal - 10; }
                priceMinInput.value = val;
                currentMinPrice = val;
                currentPage = 1; // Reset to first page on filter
                updateSliderTrack();
                updatePriceLabels();
                renderProducts(); // Instant filter
            });
            priceMaxSlider.addEventListener('input', (e) => {
                let val = parseInt(e.target.value);
                let minVal = parseInt(priceMinSlider.value);
                if(val < minVal + 10) { priceMaxSlider.value = minVal + 10; val = minVal + 10; }
                priceMaxInput.value = val;
                currentMaxPrice = val;
                currentPage = 1; // Reset to first page on filter
                updateSliderTrack();
                updatePriceLabels();
                renderProducts(); // Instant filter
            });
        }

        if (searchInput) {
            searchInput.addEventListener('input', () => {
                currentSearchQuery = searchInput.value;
                currentPage = 1; // Reset to first page on search
                renderProducts();
            });
        }
    }

    // =============================================
    // CART — localStorage

    // =============================================
    function getCart() {
        try { return JSON.parse(localStorage.getItem('securbox_cart') || '[]'); }
        catch { return []; }
    }

    function saveCart(cart) {
        localStorage.setItem('securbox_cart', JSON.stringify(cart));
        updateCartBadge();
    }

    function updateCartBadge() {
        const badges = document.querySelectorAll('.cart-badge');
        if (badges.length === 0) return;
        const cart = getCart();
        const total = cart.reduce((sum, item) => sum + item.qty, 0);
        badges.forEach(badge => {
            badge.textContent = total;
            // On mobile, if total is 0, we might want to hide it, but let's keep consistency for now
        });
    }

    function addToCart(name, price, image) {
        const cart = getCart();
        const existing = cart.find(item => item.name === name);
        if (existing) {
            existing.qty++;
        } else {
            cart.push({ name, price: Number(price), image, qty: 1 });
        }
        saveCart(cart);
    }

    // Global listener for dynamic add-to-cart and quick-buy
    document.addEventListener('click', (e) => {
        const addBtn = e.target.closest('.add-to-cart');
        if (addBtn) {
            e.preventDefault();
            let { name, price, image } = addBtn.dataset;

            // If name is missing or we want to ensure consistency with the index cards
            const card = addBtn.closest('.product-card');
            if (card) {
                name = card.querySelector('.product-title')?.textContent?.trim() || name;
                image = card.querySelector('.card-image img')?.getAttribute('src') || image;
                price = addBtn.dataset.price || price || '0';
            }

            if (name) {
                addToCart(name, price, image);

                // Button feedback
                if (!addBtn.classList.contains('added')) {
                    const addedText = translations[currentLang]?.btn_added || 'Додано! ✓';
                    const originalHTML = addBtn.innerHTML;
                    addBtn.innerHTML = `<i class="ph-fill ph-check-circle"></i> ${addedText}`;
                    addBtn.classList.add('added');

                    setTimeout(() => {
                        addBtn.innerHTML = originalHTML;
                        addBtn.classList.remove('added');
                        const span = addBtn.querySelector('[data-i18n]');
                        if (span) {
                            const key = span.getAttribute('data-i18n');
                            if (translations[currentLang]?.[key]) {
                                span.innerHTML = translations[currentLang][key];
                            }
                        }
                    }, 1500);
                }
            }
            return;
        }

        const quickBtn = e.target.closest('.btn-buy-now-quick');
        if (quickBtn) {
            e.preventDefault();
            let name = quickBtn.dataset.product || quickBtn.dataset.name;
            let price = quickBtn.dataset.price;
            let image = quickBtn.dataset.image || quickBtn.dataset.img;

            // If attributes are missing (e.g. PDP button), try to pull from DOM
            if (!name) {
                name = document.querySelector('.pdp-title')?.textContent?.trim() || 'Товар';
                price = (document.querySelector('.pdp-price')?.textContent || '0').replace(/[^0-9]/g, '');
                image = document.getElementById('mainProductImg')?.getAttribute('src') || '';
            }

            if (name) {
                openQuickBuy({
                    name: name,
                    price: Number(price) || 0,
                    img: image || ''
                });
            }
        }
    });

    // Init badge on load
    updateCartBadge();



    // =============================================
    // CARD MINI-GALLERY LOGIC
    // =============================================
    document.querySelectorAll('.mini-thumb').forEach(thumb => {
        const swapImg = () => {
            const card = thumb.closest('.product-card');
            const mainImg = card.querySelector('.card-image img');
            if (mainImg) {
                mainImg.src = thumb.dataset.img;
                card.querySelectorAll('.mini-thumb').forEach(t => t.classList.remove('active'));
                thumb.classList.add('active');
            }
        };
        thumb.addEventListener('mouseenter', swapImg);
        thumb.addEventListener('click', swapImg);
    });

    // =============================================
    // CART PAGE — Render
    // =============================================
    const cartItemsList = document.getElementById('cartItemsList');
    const cartEmpty = document.getElementById('cartEmpty');
    const cartContent = document.getElementById('cartContent');

    function formatPrice(num) {
        return num.toLocaleString('uk-UA') + '₴';
    }

    function renderCart() {
        if (!cartItemsList) return;

        const cart = getCart();
        const dict = translations[currentLang] || translations.ua;

        if (cart.length === 0) {
            cartEmpty.style.display = 'flex';
            cartContent.style.display = 'none';
            return;
        }

        cartEmpty.style.display = 'none';
        cartContent.style.display = 'block';

        const checkoutSection = document.querySelector('.checkout-section');
        if (checkoutSection) {
            checkoutSection.style.display = cart.length > 0 ? 'block' : 'none';
        }

        cartItemsList.innerHTML = cart.map((item, index) => `
            <div class="cart-item" data-index="${index}">
                <div class="cart-col-product cart-item-product">
                    <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                    <div class="cart-item-info">
                        <span class="cart-item-name">${item.name}</span>
                    </div>
                </div>
                <div class="cart-col-price">
                    <span class="cart-item-price">${formatPrice(item.price)}</span>
                </div>
                <div class="cart-col-qty">
                    <div class="qty-controls">
                        <button class="qty-btn qty-minus" data-index="${index}">−</button>
                        <span class="qty-value">${item.qty}</span>
                        <button class="qty-btn qty-plus" data-index="${index}">+</button>
                    </div>
                </div>
                <div class="cart-col-total">
                    <span class="cart-item-total">${formatPrice(item.price * item.qty)}</span>
                </div>
                <div class="cart-col-remove">
                    <button class="cart-remove-btn" data-index="${index}" title="Remove">
                        <i class="ph-fill ph-trash"></i>
                    </button>
                </div>
            </div>
        `).join('');

        // Subtotal
        const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
        const deliveryFree = true;
        const deliveryCost = 0;
        const grandTotal = subtotal + deliveryCost;

        document.getElementById('cartSubtotal').textContent = formatPrice(subtotal);
        const deliveryEl = document.getElementById('cartDelivery');
        deliveryEl.textContent = deliveryFree ? (dict.cart_free || 'Безкоштовно') : formatPrice(deliveryCost);
        deliveryEl.removeAttribute('data-i18n');
        document.getElementById('cartGrandTotal').textContent = formatPrice(grandTotal);

        // Event listeners
        cartItemsList.querySelectorAll('.qty-minus').forEach(btn => {
            btn.addEventListener('click', () => {
                const cart = getCart();
                const i = Number(btn.dataset.index);
                if (cart[i].qty > 1) {
                    cart[i].qty--;
                } else {
                    cart.splice(i, 1);
                }
                saveCart(cart);
                renderCart();
            });
        });

        cartItemsList.querySelectorAll('.qty-plus').forEach(btn => {
            btn.addEventListener('click', () => {
                const cart = getCart();
                const i = Number(btn.dataset.index);
                cart[i].qty++;
                saveCart(cart);
                renderCart();
            });
        });

        cartItemsList.querySelectorAll('.cart-remove-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const cart = getCart();
                const i = Number(btn.dataset.index);
                cart.splice(i, 1);
                saveCart(cart);
                renderCart();
            });
        });
    }

    // Render cart page if we're on it
    if (cartItemsList) {
        renderCart();
    }

    // Checkout
    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            const form = document.getElementById('checkoutForm');
            const phoneInput = document.getElementById('checkoutPhone');
            const iti = window.iti_checkout;

            let isPhoneValid = true;
            if (iti) {
                const container = phoneInput.closest('.form-group') || phoneInput.parentElement;
                const errorMsg = container.querySelector('.phone-error-msg');
                if (!iti.isValidNumber()) {
                    isPhoneValid = false;
                    if (errorMsg) errorMsg.classList.add('active');

                    const itiContainer = phoneInput.closest('.iti');
                    if (itiContainer) {
                        itiContainer.classList.add('input-error');
                    } else {
                        phoneInput.classList.add('input-error');
                    }

                    phoneInput.focus();
                } else {
                    if (errorMsg) errorMsg.classList.remove('active');
                    const itiContainer = phoneInput.closest('.iti');
                    if (itiContainer) itiContainer.classList.remove('input-error');
                    phoneInput.classList.remove('input-error');
                }
            }

            if (form.checkValidity() && isPhoneValid) {
                const cart = getCart();

                // Get values directly for maximum reliability
                const getValue = (id) => document.getElementById(id)?.value?.trim() || '';
                const getRadio = (name) => document.querySelector(`input[name="${name}"]:checked`)?.value || '';

                const orderData = {
                    id: 'ORD-' + Date.now(),
                    date: new Date().toLocaleString(),
                    customer: `${getValue('checkoutFirstName')} ${getValue('checkoutLastName')}`,
                    phone: getValue('checkoutPhone'),
                    email: getValue('checkoutEmail'),
                    city: getValue('checkoutCity'),
                    address: getValue('checkoutAddress'),
                    delivery: getRadio('deliveryMethod'),
                    payment: getRadio('paymentMethod'),
                    items: cart,
                    total: cart.reduce((sum, item) => sum + item.price * item.qty, 0),
                    status: 'pending',
                    type: 'regular'
                };

                console.log('Saving order:', orderData);

                // Save order to localStorage
                const orders = JSON.parse(localStorage.getItem('orders') || '[]');
                orders.push(orderData);
                localStorage.setItem('orders', JSON.stringify(orders));

                // Clear cart and show notification
                localStorage.removeItem('securbox_cart');
                updateCartBadge();

                const dict = translations[currentLang] || translations.ua;
                showSuccessResponse(
                    dict.cart_order_success || 'Замовлення оформлено! ✓',
                    dict.modal_success_desc || 'Ми отримали ваше замовлення та скоро зв’яжемося з вами.'
                );

                // Redirect after some time
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 4000);
            } else {
                form.reportValidity();
            }
        });
    }

    // =============================================
    // PRODUCT DETAIL PAGE (PDP) LOGIC
    // =============================================
    const pdpQtyValue = document.getElementById('pdpQtyValue');
    const pdpQtyMinus = document.getElementById('pdpQtyMinus');
    const pdpQtyPlus = document.getElementById('pdpQtyPlus');

    if (pdpQtyValue && pdpQtyMinus && pdpQtyPlus) {
        pdpQtyMinus.addEventListener('click', () => {
            let val = parseInt(pdpQtyValue.textContent);
            if (val > 1) pdpQtyValue.textContent = --val;
        });
        pdpQtyPlus.addEventListener('click', () => {
            let val = parseInt(pdpQtyValue.textContent);
            pdpQtyValue.textContent = ++val;
        });
    }

    const pdpAddCart = document.getElementById('pdpAddCart');
    if (pdpAddCart) {
        pdpAddCart.addEventListener('click', () => {
            const name = pdpAddCart.dataset.name || document.querySelector('.pdp-title')?.textContent?.trim() || 'Product';
            const price = pdpAddCart.dataset.price ? Number(pdpAddCart.dataset.price) : (Number((document.querySelector('.price-new')?.textContent || '0').replace(/[^0-9]/g, '')) || 3990);
            const img = document.getElementById('mainProductImg')?.getAttribute('src') || '';
            const qty = parseInt(pdpQtyValue?.textContent || '1');

            const cart = getCart();
            const existing = cart.find(item => item.name === name);
            if (existing) {
                existing.qty += qty;
            } else {
                cart.push({ name, price, image: img, qty });
            }
            saveCart(cart);

            // Feedback
            const addedText = translations[currentLang]?.btn_added || 'Додано! ✓';
            const originalHTML = pdpAddCart.innerHTML;
            pdpAddCart.innerHTML = `<i class="ph-fill ph-check-circle"></i> ${addedText}`;
            pdpAddCart.classList.add('added');
            setTimeout(() => {
                pdpAddCart.innerHTML = originalHTML;
                pdpAddCart.classList.remove('added');
            }, 2000);
        });
    }

    // Thumbnail switching
    const thumbnails = document.querySelectorAll('.pdp-thumb');
    const mainImg = document.getElementById('mainProductImg');
    if (thumbnails.length > 0 && mainImg) {
        thumbnails.forEach(thumb => {
            thumb.addEventListener('click', () => {
                const newSrc = thumb.dataset.img;
                mainImg.src = newSrc;
                thumbnails.forEach(t => t.classList.remove('active'));
                thumb.classList.add('active');
            });
        });
    }

    // Tab switching
    const tabBtns = document.querySelectorAll('.pdp-tab-btn');
    const tabContents = document.querySelectorAll('.pdp-tab-content');
    if (tabBtns.length > 0) {
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const target = btn.dataset.tab;
                tabBtns.forEach(b => b.classList.remove('active'));
                tabContents.forEach(c => c.classList.remove('active'));
                btn.classList.add('active');
                document.getElementById('tab-' + target)?.classList.add('active');
            });
        });
    }

    // =============================================
    // QUICK BUY MODAL
    // =============================================
    const quickBuyModal = document.getElementById('quickBuyModal');
    const quickBuyForm = document.getElementById('quickBuyForm');
    const quickBuyBtn = document.getElementById('pdpBuyNow'); // On PDP
    const quickBuyClose = document.getElementById('closeQuickBuy');

    let currentQuickBuyProduct = null;

    function openQuickBuy(product) {
        if (quickBuyModal) {
            currentQuickBuyProduct = product;
            const nameEl = document.getElementById('qbProductName');
            if (nameEl) nameEl.textContent = product.name;
            quickBuyModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeQuickBuy() {
        if (quickBuyModal) {
            quickBuyModal.classList.remove('active');
            document.body.style.overflow = '';
            // Reset form if success was shown
            setTimeout(() => {
                const content = quickBuyModal.querySelector('.modal-content');
                if (content.querySelector('.modal-success-msg')) {
                    // Refresh original form content is complex with translations, easier to just hide success
                }
            }, 500);
        }
    }

    // PDP Button is now handled by the global listener for consistency
    // No redundant listener needed here

    if (quickBuyClose) {
        quickBuyClose.addEventListener('click', closeQuickBuy);
    }

    // Close on overlay click
    if (quickBuyModal) {
        quickBuyModal.addEventListener('click', (e) => {
            if (e.target === quickBuyModal) closeQuickBuy();
        });
    }

    if (quickBuyForm) {
        quickBuyForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const formData = new FormData(quickBuyForm);
            const phoneInput = document.getElementById('qbPhone');
            const iti = window.iti_qb;

            if (iti && !iti.isValidNumber()) {
                const errorContainer = phoneInput.closest('.form-group') || phoneInput.parentElement;
                const errorMsg = errorContainer.querySelector('.phone-error-msg');
                const itiContainer = phoneInput.closest('.iti');

                if (errorMsg) errorMsg.classList.add('active');
                if (itiContainer) {
                    itiContainer.classList.add('input-error');
                } else {
                    phoneInput.classList.add('input-error');
                }
                phoneInput.focus();
                return;
            }

            const orderData = {
                id: '1-CLICK-' + Date.now(),
                date: new Date().toLocaleString(),
                customer: formData.get('name'),
                phone: iti ? iti.getNumber() : formData.get('phone'),
                product: currentQuickBuyProduct ? currentQuickBuyProduct.name : 'Unknown Product',
                price: currentQuickBuyProduct ? currentQuickBuyProduct.price : 0,
                status: 'pending',
                type: 'one-click'
            };

            // Save order to localStorage
            const orders = JSON.parse(localStorage.getItem('orders') || '[]');
            orders.push(orderData);
            localStorage.setItem('orders', JSON.stringify(orders));

            // Show success result using new modal
            const dict = translations[currentLang] || translations.ua;
            
            // Close the current modal first
            closeQuickBuy();
            
            // Add a small delay for smoother transition and to avoid race conditions
            setTimeout(() => {
                showSuccessResponse(
                    dict.modal_success_title || 'Дякуємо!',
                    dict.modal_success_desc || 'Ми отримали ваше замовлення та скоро зв’яжемося з вами.'
                );
            }, 100);
        });
    }

    // Handled by global listener
    /*
    document.querySelectorAll('.btn-buy-now-quick').forEach(btn => {
        ...
    });
    */

    // =============================================
    // CALLBACK MODAL LOGIC
    // =============================================
    const callbackModal = document.getElementById('callbackModal');
    const openCallbackBtn = document.getElementById('openCallbackBtn');
    const closeCallbackBtn = document.getElementById('closeCallbackModal');
    const callbackForm = document.getElementById('callbackForm');

    if (openCallbackBtn && callbackModal) {
        openCallbackBtn.addEventListener('click', () => {
            callbackModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    const mobileCallbackLink = document.getElementById('mobileCallbackLink');
    if (mobileCallbackLink && callbackModal) {
        mobileCallbackLink.addEventListener('click', (e) => {
            e.preventDefault();
            // Close menu
            if (hamburger && mainNav) {
                hamburger.classList.remove('active');
                mainNav.classList.remove('open');
            }
            callbackModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    const closeCallback = () => {
        if (callbackModal) {
            callbackModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    };

    if (closeCallbackBtn) closeCallbackBtn.addEventListener('click', closeCallback);
    if (callbackModal) {
        callbackModal.addEventListener('click', (e) => {
            if (e.target === callbackModal) closeCallback();
        });
    }

    // Header Dropdown logic
    const headerCallbackTrigger = document.getElementById('headerCallbackTrigger');
    const headerCallbackDropdown = document.getElementById('headerCallbackDropdown');
    const headerCallbackForm = document.getElementById('headerCallbackForm');

    if (headerCallbackTrigger && headerCallbackDropdown) {
        headerCallbackTrigger.addEventListener('click', (e) => {
            e.stopPropagation();
            headerCallbackDropdown.classList.toggle('active');
        });

        document.addEventListener('click', (e) => {
            if (!headerCallbackDropdown.contains(e.target) && e.target !== headerCallbackTrigger) {
                headerCallbackDropdown.classList.remove('active');
            }
        });
    }

    if (headerCallbackForm) {
        headerCallbackForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('hcbName')?.value?.trim() || '';
            const phoneInput = document.getElementById('hcbPhone');
            const iti = window.iti_hcb;

            if (iti && !iti.isValidNumber()) {
                const errorContainer = phoneInput.closest('.form-group') || phoneInput.parentElement;
                const errorMsg = errorContainer.querySelector('.phone-error-msg');
                const itiContainer = phoneInput.closest('.iti');

                if (errorMsg) errorMsg.classList.add('active');
                if (itiContainer) {
                    itiContainer.classList.add('input-error');
                } else {
                    phoneInput.classList.add('input-error');
                }
                phoneInput.focus();
                return;
            }

            const orderData = {
                id: 'H-CALL-' + Date.now(),
                date: new Date().toLocaleString(),
                customer: name,
                phone: iti ? iti.getNumber() : (document.getElementById('hcbPhone')?.value?.trim() || ''),
                status: 'pending',
                type: 'callback'
            };

            const orders = JSON.parse(localStorage.getItem('orders') || '[]');
            orders.push(orderData);
            localStorage.setItem('orders', JSON.stringify(orders));

            // Success feedback
            const btn = headerCallbackForm.querySelector('button');
            const originalText = btn.innerHTML;
            const dict = translations[currentLang] || translations.ua;
            showSuccessResponse(
                dict.modal_success_title || 'Дякуємо!',
                dict.modal_success_desc || 'Ми отримали ваше замовлення та скоро зв’яжемося з вами.'
            );

            setTimeout(() => {
                headerCallbackDropdown.classList.remove('active');
                setTimeout(() => {
                    btn.innerHTML = originalText;
                    btn.style.background = '';
                    headerCallbackForm.reset();
                }, 300);
            }, 2000);
        });
    }

    if (callbackForm) {
        callbackForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const getValue = (id) => document.getElementById(id)?.value?.trim() || '';
            const phoneInput = document.getElementById('cbPhone');
            const iti = window.iti_cb;

            if (iti && !iti.isValidNumber()) {
                const errorContainer = phoneInput.closest('.form-group') || phoneInput.parentElement;
                const errorMsg = errorContainer.querySelector('.phone-error-msg');
                const itiContainer = phoneInput.closest('.iti');

                if (errorMsg) errorMsg.classList.add('active');
                if (itiContainer) {
                    itiContainer.classList.add('input-error');
                } else {
                    phoneInput.classList.add('input-error');
                }
                phoneInput.focus();
                return;
            }

            const orderData = {
                id: 'CALL-' + Date.now(),
                date: new Date().toLocaleString(),
                customer: getValue('cbName'),
                phone: iti ? iti.getNumber() : getValue('cbPhone'),
                status: 'pending',
                type: 'callback'
            };

            const orders = JSON.parse(localStorage.getItem('orders') || '[]');
            orders.push(orderData);
            localStorage.setItem('orders', JSON.stringify(orders));

            const dict = translations[currentLang] || translations.ua;
            closeCallback();
            showSuccessResponse(
                dict.modal_success_title || 'Дякуємо!',
                dict.modal_success_desc || 'Ми отримали ваше замовлення та скоро зв’яжемося з вами.'
            );
        });
    }

    // =============================================
    // =============================================
    // HAMBURGER MENU & MOBILE SIDEBAR
    // =============================================
    const hamburger = document.getElementById('hamburgerBtn');
    const mobileSidebar = document.getElementById('mobileSidebar');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    const msCloseBtn = document.getElementById('msCloseBtn');

    function openMobileSidebar() {
        if (!mobileSidebar) return;
        mobileSidebar.classList.add('open');
        if (sidebarOverlay) sidebarOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeMobileSidebar() {
        if (!mobileSidebar) return;
        mobileSidebar.classList.remove('open');
        if (sidebarOverlay) sidebarOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (hamburger) {
        hamburger.addEventListener('click', openMobileSidebar);
    }
    if (msCloseBtn) {
        msCloseBtn.addEventListener('click', closeMobileSidebar);
    }
    if (sidebarOverlay) {
        sidebarOverlay.addEventListener('click', closeMobileSidebar);
    }
    
    // Close sidebar on any internal link click
    if (mobileSidebar) {
        mobileSidebar.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', closeMobileSidebar);
        });
    }

    // =============================================
    // PRODUCTS CAROUSEL
    // =============================================
    const carousel = document.getElementById('productsCarousel');
    const prevBtn = document.getElementById('carouselPrev');
    const nextBtn = document.getElementById('carouselNext');

    if (carousel && prevBtn && nextBtn) {
        const getScrollAmount = () => {
            const card = carousel.querySelector('.product-card');
            return card ? card.offsetWidth + 20 : 300;
        };
        prevBtn.addEventListener('click', () => carousel.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' }));
        nextBtn.addEventListener('click', () => carousel.scrollBy({ left: getScrollAmount(), behavior: 'smooth' }));
    }

    // =============================================
    // SCROLL REVEAL
    // =============================================
    const revealSections = document.querySelectorAll(
        '.categories, .featured-products, .testimonials, .articles, .newsletter'
    );
    revealSections.forEach(s => s.classList.add('reveal'));
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });
    revealSections.forEach(s => revealObserver.observe(s));

    // =============================================
    // NEWSLETTER
    // =============================================
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const input = newsletterForm.querySelector('input');
            const email = input.value.trim();
            if (!email) return;

            // Save to localStorage
            const subscribers = JSON.parse(localStorage.getItem('newsletter_subscribers') || '[]');
            if (!subscribers.find(s => s.email === email)) {
                subscribers.push({
                    email,
                    date: new Date().toLocaleString('uk-UA')
                });
                localStorage.setItem('newsletter_subscribers', JSON.stringify(subscribers));
            }

            const btn = newsletterForm.querySelector('button');
            const dict = translations[currentLang] || translations.ua;

            // Show success modal
            showSuccessResponse(
                dict.modal_success_title || 'Дякуємо!',
                dict.news_subscribed || 'Підписано! ✓'
            );

            input.value = '';
        });
    }


    // =============================================
    // HEADER SCROLL SHADOW
    // =============================================
    const header = document.querySelector('.site-header');
    if (header) {
        window.addEventListener('scroll', () => {
            header.style.boxShadow = window.scrollY > 10
                ? '0 2px 20px rgba(26, 43, 74, 0.08)'
                : '0 1px 0 rgba(0,0,0,0.06)';
        }, { passive: true });
    }

    // =============================================
    // DYNAMIC REVIEWS RENDERING
    // =============================================
    let cachedReviews = null;
    function getReviews() {
        if (!cachedReviews) {
            cachedReviews = JSON.parse(localStorage.getItem('reviews') || '[]');
        }
        return cachedReviews;
    }

    function renderApprovedReviews() {
        const dynamicReviewsList = document.getElementById('dynamicReviewsList');
        if (!dynamicReviewsList) return;

        const reviews = getReviews();

        const urlParams = new URLSearchParams(window.location.search);
        const currentProductId = urlParams.get('id');

        let approvedReviews = reviews.filter(r => r.status === 'approved');

        if (currentProductId) {
            // Only show reviews for this exact product OR general reviews (no productId)
            approvedReviews = approvedReviews.filter(r => !r.productId || r.productId === currentProductId);
        }

        // Update counts in UI
        const reviewCount = approvedReviews.length;

        // Update the tab title (e.g. "Відгуки (14)")
        const reviewsTabBtn = document.querySelector('.pdp-tab-btn[data-tab="reviews"]');
        if (reviewsTabBtn) {
            const baseTabText = translations[currentLang]?.nav_reviews || 'Відгуки';
            reviewsTabBtn.textContent = `${baseTabText} (${reviewCount})`;
            reviewsTabBtn.removeAttribute('data-i18n'); // Prevent translation overwrite
        }

        // Update the rating count
        const ratingCountEl = document.querySelector('.pdp-review-count');
        if (ratingCountEl) {
            const reviewText = translations[currentLang]?.pdp_reviews || 'відгуків';
            ratingCountEl.innerHTML = `(${reviewCount} <span>${reviewText}</span>)`;
        }

        if (approvedReviews.length === 0) {
            const noRevText = translations[currentLang]?.pdp_no_reviews || 'Відгуків поки немає.';
            dynamicReviewsList.innerHTML = `<p style="padding: 20px; color: var(--color-text-muted);">${noRevText}</p>`;
            return;
        }

        // Sort newest first
        approvedReviews.sort((a, b) => {
            const parseDate = (d) => {
                if (!d) return 0;
                let parts = d.split(', ');
                if (parts.length === 2) {
                    let dateParts = parts[0].split('.');
                    return new Date(`${dateParts[2]}-${dateParts[1]}-${dateParts[0]}T${parts[1]}`).getTime();
                } else {
                    let dateParts = d.split('.');
                    if (dateParts.length === 3) {
                        return new Date(`${dateParts[2]}-${dateParts[1]}-${dateParts[0]}T00:00:00`).getTime();
                    }
                }
                return new Date(d).getTime() || 0;
            };
            return parseDate(b.date) - parseDate(a.date);
        });

        const fragment = document.createDocumentFragment();
        const dict = translations[currentLang] || {};

        approvedReviews.forEach(review => {
            const rating = Number(review.rating) || 5;
            let starsHtml = '';
            for (let i = 0; i < 5; i++) {
                if (i < rating) {
                    starsHtml += '<i class="ph-fill ph-star" style="color:var(--color-star)"></i>';
                } else {
                    starsHtml += '<i class="ph ph-star" style="color:var(--color-text-muted)"></i>';
                }
            }

            const item = document.createElement('div');
            item.className = 'pdp-review-item';
            const author = review.author || dict['pdp_anonymous'] || 'Анонім';
            const dateStr = review.date ? review.date.split(',')[0] : '';
            
            item.innerHTML = `
                <div class="pdp-review-header">
                    <strong>${author}</strong>
                    <div class="pdp-stars">
                        ${starsHtml}
                    </div>
                    <span class="pdp-review-date">${dateStr}</span>
                </div>
                <p>${review.text || ''}</p>
            `;
            fragment.appendChild(item);
        });

        dynamicReviewsList.innerHTML = '';
        dynamicReviewsList.appendChild(fragment);
    }

    // =============================================
    // PDP RATING FORM (product.html)
    // =============================================
    function initReviewForm() {
        const ratingSelectStars = document.querySelectorAll('#reviewRatingSelect iconify-icon');
        const ratingInput = document.getElementById('reviewRatingInput');

        if (ratingSelectStars.length > 0 && ratingInput) {
            // Init default 5 stars
            ratingSelectStars.forEach((star, index) => {
                if (index < 5) star.classList.add('active');
            });

            ratingSelectStars.forEach(star => {
                star.addEventListener('click', () => {
                    const val = parseInt(star.getAttribute('data-val'), 10);
                    ratingInput.value = val;

                    ratingSelectStars.forEach((s) => {
                        const iconVal = parseInt(s.getAttribute('data-val'), 10);
                        if (iconVal <= val) {
                            s.classList.add('active');
                            s.setAttribute('icon', "ph-fill ph-star");
                        } else {
                            s.classList.remove('active');
                            s.setAttribute('icon', "ph ph-star");
                        }
                    });
                });
            });
        }

        const reviewForm = document.getElementById('pdpReviewForm');
        if (reviewForm) {
            reviewForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const btn = document.getElementById('submitReviewBtn');
                const originalText = btn.innerHTML;
                const authorInput = document.getElementById('reviewerName');
                const textInput = document.getElementById('reviewerText');
                const ratingInput = document.getElementById('reviewRatingInput');

                const urlParams = new URLSearchParams(window.location.search);
                const productId = urlParams.get('id');
                const productName = document.querySelector('.pdp-title')?.textContent?.trim() || '';

                const reviewData = {
                    id: 'REV-' + Date.now(),
                    date: new Date().toLocaleString('uk-UA'),
                    author: authorInput ? (authorInput.value || 'Анонім') : 'Анонім',
                    text: textInput ? textInput.value : '',
                    rating: ratingInput ? ratingInput.value : 5,
                    productId: productId || null,
                    productName: productName || null,
                    status: 'pending'
                };

                // Save to localStorage
                const reviews = JSON.parse(localStorage.getItem('reviews') || '[]');
                reviews.push(reviewData);
                localStorage.setItem('reviews', JSON.stringify(reviews));

                btn.innerHTML = `<i class="ph-fill ph-check-circle"></i> Відправлено! Очікуйте на модерацію.`;
                btn.style.background = 'var(--color-success)';
                btn.style.borderColor = 'var(--color-success)';
                btn.style.color = '#fff';

                setTimeout(() => {
                    reviewForm.reset();
                    btn.innerHTML = originalText;
                    btn.style = '';
                    if (ratingInput) ratingInput.value = 5;
                    const stars = document.querySelectorAll('#reviewRatingSelect iconify-icon');
                    stars.forEach(s => {
                        s.classList.add('active');
                        s.setAttribute('icon', "ph-fill ph-star");
                    });
                }, 3000);
            });
        }
    }

    // =============================================
    // HERO SLIDER
    // =============================================
    function initHeroSlider() {
        const sliderWrapper = document.getElementById('heroSlider');
        const slides = document.querySelectorAll('.slide');
        const prevBtn = document.getElementById('sliderPrev');
        const nextBtn = document.getElementById('sliderNext');
        const progressBar = document.getElementById('sliderProgressBar');

        if (!sliderWrapper || slides.length === 0) return;

        let currentIndex = 0;
        let slideInterval;
        let progressInterval;
        let currentProgress = 0;
        const intervalTime = 6000;
        const stepTime = 50; // Update progress every 50ms

        function updateSlider() {
            sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
            slides.forEach((slide, i) => {
                slide.classList.toggle('active', i === currentIndex);
            });
            resetProgress();
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % slides.length;
            updateSlider();
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            updateSlider();
        }

        function resetProgress() {
            currentProgress = 0;
            if (progressBar) progressBar.style.width = '0%';
        }

        function startIntervals() {
            clearInterval(slideInterval);
            clearInterval(progressInterval);

            slideInterval = setInterval(nextSlide, intervalTime);

            progressInterval = setInterval(() => {
                currentProgress += (stepTime / intervalTime) * 100;
                if (progressBar) progressBar.style.width = Math.min(currentProgress, 100) + '%';
            }, stepTime);
        }

        if (prevBtn) prevBtn.addEventListener('click', () => {
            prevSlide();
            startIntervals();
        });

        if (nextBtn) nextBtn.addEventListener('click', () => {
            nextSlide();
            startIntervals();
        });

        startIntervals();

        // Touch support
        let touchStartX = 0;
        let touchEndX = 0;

        sliderWrapper.addEventListener('touchstart', e => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        sliderWrapper.addEventListener('touchend', e => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, { passive: true });

        function handleSwipe() {
            if (touchEndX < touchStartX - 50) nextSlide();
            if (touchEndX > touchStartX + 50) prevSlide();
            resetInterval();
        }
    }

    // =============================================
    // DYNAMIC PDP POPULATION
    // =============================================
    function populatePDP() {
        // Only run on product detail page
        if (!window.location.pathname.includes('product.html')) return;

        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('id');
        if (!productId) return;

        const products = getProducts();
        const product = products.find(p => p.id === productId && !p.hidden);
        if (!product) {
            document.body.innerHTML = '<h2 style="text-align:center; margin-top:50px;">Товар не найден или скрыт</h2>';
            return;
        }

        // Update title and breadcrumbs
        const titleEl = document.querySelector('.pdp-title');
        if (titleEl) {
            titleEl.removeAttribute('data-i18n');
            titleEl.textContent = product['name_' + currentLang] || product.name;
        }
        const breadcrumbs = document.querySelectorAll('.cart-breadcrumbs a, .cart-breadcrumbs span');
        if (breadcrumbs.length > 0) {
            breadcrumbs[breadcrumbs.length - 1].textContent = product['name_' + currentLang] || product.name;
        }

        // Apply SEO
        if (product.seoTitle) {
            document.title = product.seoTitle;
        } else {
            document.title = 'SECURBOX — ' + (product['name_' + currentLang] || product.name);
        }

        const metaDescEl = document.querySelector('meta[name="description"]');
        if (metaDescEl && product.seoDesc) {
            metaDescEl.setAttribute('content', product.seoDesc);
        }

        // Update short description
        const shortDesc = document.querySelector('.pdp-short-desc');
        const specs = product['specs_' + currentLang] || product.specs;
        if (shortDesc && specs) {
            shortDesc.removeAttribute('data-i18n');
            shortDesc.innerHTML = specs.join(', ');
        }

        // Update price
        const priceEl = document.querySelector('.pdp-price');
        if (priceEl && product.price) {
            // Add .price-new class so Add To Cart script picks it up properly
            priceEl.classList.add('price-new');
            priceEl.innerHTML = Number(product.price).toLocaleString('uk-UA') + '₴';
            if (product.oldPrice) {
                // Prepend old price
                priceEl.innerHTML = '<span style="text-decoration:line-through; color:var(--text-light); font-size:0.7em; margin-right:10px;">' + Number(product.oldPrice).toLocaleString('uk-UA') + '₴</span>' + priceEl.innerHTML;
            }
        }

        // Update images
        const mainImg = document.getElementById('mainProductImg');
        const thumbContainer = document.getElementById('pdpThumbnails');
        if (mainImg && product.image) {
            mainImg.src = product.image;
        }
        if (thumbContainer && product.images && product.images.length > 0) {
            thumbContainer.innerHTML = '';
            product.images.forEach((imgSrc, i) => {
                const btn = document.createElement('button');
                btn.className = 'pdp-thumb' + (i === 0 ? ' active' : '');
                btn.dataset.img = imgSrc;
                btn.innerHTML = '<img src="' + imgSrc + '" alt="Thumbnail ' + (i + 1) + '">';
                btn.addEventListener('click', () => {
                    mainImg.src = imgSrc;
                    document.querySelectorAll('.pdp-thumb').forEach(t => t.classList.remove('active'));
                    btn.classList.add('active');
                });
                thumbContainer.appendChild(btn);
            });
        }

        // Update Tab: Description
        const tabDesc = document.querySelector('#tab-desc p');
        const descText = product['description_' + currentLang] || product.description;
        if (tabDesc && descText) {
            tabDesc.removeAttribute('data-i18n');
            tabDesc.innerHTML = descText;
        } else if (document.getElementById('tab-desc')) {
            const container = document.getElementById('tab-desc');
            container.innerHTML = '<p>' + descText + '</p>';
        }

        // Update Tab: Specs
        const specsTable = document.querySelector('.pdp-specs-table');
        const fullSpecs = product['fullSpecs_' + currentLang] || product.fullSpecs;
        if (specsTable && fullSpecs) {
            specsTable.innerHTML = Object.entries(fullSpecs).map(([key, val]) => {
                return '<tr><td>' + key + '</td><td>' + val + '</td></tr>';
            }).join('');
        }

        const addCartBtn = document.getElementById('pdpAddCart');
        const buyNowBtn = document.getElementById('pdpBuyNow');
        const displayName = product['name_' + currentLang] || product.name;
        if (addCartBtn) {
            addCartBtn.dataset.price = product.price;
            addCartBtn.dataset.name = displayName;
        }
        if (buyNowBtn) {
            buyNowBtn.dataset.price = product.price;
            buyNowBtn.dataset.name = displayName;
        }
    }

    populatePDP();

    // =============================================
    // DYNAMIC BANNERS
    // =============================================
    function renderBanners() {
        const sliderWrapper = document.getElementById('heroSlider');
        const promoGrid = document.querySelector('.hero-promo-grid');
        if (!sliderWrapper || !promoGrid) return;

        const DEFAULT_BANNERS = {
            slider: [
                { image: 'assets/banner/1.jpg', title: 'ВЕСНЯНІ<br>ЗНИЖКИ', subtitle: '61', desc: '', link: '#' },
                { image: 'assets/banner/2.jpg', title: 'Інноваційні<br>Системи', subtitle: '', desc: 'Нове покоління безпеки з інтелектуальним розпізнаванням.', link: '#' }
            ],
            promo: [
                { image: 'assets/banner_monobank.png', title: 'ПОКУПКА ЧАСТИНАМИ<br>ВІД <span>monobank</span>', subtitle: 'АКЦІЯ', link: '#', type: 'dark' },
                { image: 'assets/banner_new_arrivals.png', title: 'КУПУЙ ПЕРШИМ!', subtitle: 'Новинки', link: '#products', type: 'light' },
                { image: 'assets/banner_pay_later.png', title: 'КУПУЙ ЗАРАЗ -<br>ПЛАТИ ПОТІМ', subtitle: 'РОЗТЕРМІНУВАННЯ НА 6 ПЛАТЕЖІВ', link: '#', type: 'blue' }
            ]
        };

        const data = JSON.parse(localStorage.getItem('admin_banners') || JSON.stringify(DEFAULT_BANNERS));

        // Render Slider
        sliderWrapper.innerHTML = data.slider.map((slide, i) => `
            <div class="slide ${i === 0 ? 'active' : ''}

    ">
                <div class="slide-bg" style="background-image: url('${slide.image}')"></div>
                <div class="slide-overlay"></div>
                <div class="slide-content">
                    <h1>${slide.title}</h1>
                    ${slide.subtitle ? `<div class="sale-badge">до <span class="percent">${slide.subtitle}</span>%</div>` : ''}
                    ${slide.desc ? `<p>${slide.desc}</p>` : ''}
                    <div style="margin-top: 30px;">
                        <a href="${slide.link || '#'}

    " class="btn btn-primary" style="padding: 15px 35px; text-decoration: none; display: inline-block;">
                            <span data-i18n="hero_cta">Купити зараз</span>
                        </a>
                    </div>
                </div>
            </div>
        `).join('');

        // Render Promo
        const promoBanners = promoGrid.querySelectorAll('.promo-banner');
        data.promo.forEach((promo, i) => {
            if (promoBanners[i]) {
                const banner = promoBanners[i];
                const img = banner.querySelector('img');
                const title = banner.querySelector('h4');
                const tag = banner.querySelector('.promo-tag');
                const btn = banner.querySelector('.promo-btn');
                const info = banner.querySelector('.promo-payment-info');

                if (img) img.src = promo.image;
                if (title) title.innerHTML = promo.title;
                if (tag) tag.textContent = promo.subtitle;
                if (btn) {
                    btn.textContent = promo.subtitle;
                    btn.href = promo.link;
                }
                if (info) {
                    // Specific to pay later banner
                    info.innerHTML = promo.subtitle;
                }

                banner.style.cursor = 'pointer';
                banner.onclick = (e) => {
                    if (e.target.tagName !== 'A') {
                        window.location.href = promo.link;
                    }
                };
            }
        });
    }

    function renderCustomPagesLinks() {
        const customPages = JSON.parse(localStorage.getItem('admin_pages_list') || '[]');
        if (!customPages.length) return;

        // 1. Footer Links
        const footerUL = document.querySelector('a[href="admin.html"]')?.closest('ul')
            || document.getElementById('dynamic-footer-pages');

        if (footerUL) {
            footerUL.querySelectorAll('.dynamic-page-link').forEach(el => el.remove());
            customPages.forEach(page => {
                const li = document.createElement('li');
                li.className = 'dynamic-page-link';
                li.innerHTML = `<a href="page.html?id=${page.id}">${page.title}</a>`;
                const adminLI = footerUL.querySelector('a[href="admin.html"]')?.closest('li');
                if (adminLI) footerUL.insertBefore(li, adminLI);
                else footerUL.appendChild(li);
            });
        }

        // 2. Mobile Menu Links
        const mainNav = document.getElementById('mainNav');
        if (mainNav) {
            mainNav.querySelectorAll('.dynamic-mobile-link').forEach(el => el.remove());
            
            // Get or create the bottom container
            let bottomContainer = mainNav.querySelector('.mobile-nav-bottom');
            if (!bottomContainer) {
                bottomContainer = document.createElement('div');
                bottomContainer.className = 'mobile-nav-bottom';
                mainNav.appendChild(bottomContainer);
            }

            customPages.forEach(page => {
                const a = document.createElement('a');
                a.href = `page.html?id=${page.id}`;
                a.className = 'mobile-only-nav dynamic-mobile-link';
                a.textContent = page.title;
                
                const callbackLink = document.getElementById('mobileCallbackLink');
                if (callbackLink) bottomContainer.insertBefore(a, callbackLink);
                else bottomContainer.appendChild(a);
            });
        }
    }

    // =============================================
    // DYNAMIC FOOTER FROM ADMIN
    // =============================================
    function renderDynamicFooter() {
        const saved = localStorage.getItem('admin_footer');
        if (!saved) return; // Use default HTML if no admin changes

        const footer = document.querySelector('.site-footer');
        if (!footer) return;

        let data;
        try { data = JSON.parse(saved); } catch (e) { return; }

        // Update description
        const descEl = footer.querySelector('.footer-brand p');
        if (descEl && data.description) {
            descEl.removeAttribute('data-i18n');
            descEl.textContent = data.description;
        }

        // Update social links
        if (data.socials) {
            const socialsContainer = footer.querySelector('.footer-socials');
            if (socialsContainer) {
                const socialMap = [
                    { key: 'facebook', icon: "ph-fill ph-facebook-logo" },
                    { key: 'twitter', icon: "ph-fill ph-twitter-logo" },
                    { key: 'instagram', icon: "ph-fill ph-instagram-logo" },
                    { key: 'youtube', icon: "ph-fill ph-youtube-logo" },
                    { key: 'tiktok', icon: 'logos:tiktok-icon' }
                ];

                let html = '';
                socialMap.forEach(item => {
                    const url = data.socials[item.key];
                    const show = data.socialsShow ? data.socialsShow[item.key] !== false : true;

                    if (url && url !== '#' && url.trim() !== '' && show) {
                        html += `<a href="${url}

    " target="_blank" aria-label="${item.key}

    "><i class="${item.icon}"></i></a>`;
                    }
                });
                socialsContainer.innerHTML = html;
            }
        }



        // Update link columns
        if (data.columns && data.columns.length === 3) {
            const footerLinks = footer.querySelectorAll('.footer-links');

            data.columns.forEach((col, i) => {
                if (!footerLinks[i]) return;

                // Update title
                const h4 = footerLinks[i].querySelector('h4');
                if (h4) {
                    h4.removeAttribute('data-i18n');
                    const titleSpan = h4.querySelector('span[data-i18n]');
                    const chevron = h4.querySelector('.footer-chevron');
                    if (titleSpan) {
                        titleSpan.textContent = col.title;
                        titleSpan.removeAttribute('data-i18n');
                    } else if (chevron) {
                        // Preserve chevron if we have to rebuild interior
                        const newTitle = document.createElement('span');
                        newTitle.textContent = col.title;
                        h4.innerHTML = '';
                        h4.appendChild(newTitle);
                        h4.appendChild(chevron);
                    } else {
                        h4.textContent = col.title;
                    }
                }

                // Update links
                const ul = footerLinks[i].querySelector('ul');
                if (ul && col.links) {
                    ul.innerHTML = col.links.map(link => {
                        const isAdmin = link.url === 'admin.html';
                        const style = isAdmin ? ' style="opacity: 0.5; font-size: 0.8em;"' : '';
                        return `<li><a href="${link.url}

    "${style}>${link.text}</a></li>`;
                    }).join('');
                }
            });
        }

        // Update copyright
        if (data.copyright) {
            const copyrightEl = footer.querySelector('.footer-bottom p');
            if (copyrightEl) {
                copyrightEl.removeAttribute('data-i18n');
                copyrightEl.innerHTML = data.copyright;
            }
        }

        // Update payment methods
        if (data.payments) {
            const payContainer = footer.querySelector('.footer-payment-methods');
            if (payContainer) {
                let payHtml = '';
                if (data.payments.visa) payHtml += '<iconify-icon icon="logos:visa"></iconify-icon>';
                if (data.payments.mastercard) payHtml += '<iconify-icon icon="logos:mastercard"></iconify-icon>';
                if (data.payments.applePay) payHtml += '<iconify-icon icon="logos:apple-pay"></iconify-icon>';
                if (data.payments.googlePay) payHtml += '<iconify-icon icon="logos:google-pay"></iconify-icon>';
                payContainer.innerHTML = payHtml;
            }
        }
    }

    // =============================================
    // SYSTEM SETTINGS FROM ADMIN
    // =============================================
    function applySystemSettings() {
        const saved = localStorage.getItem('admin_site_settings');
        if (!saved) return;

        let data;
        try { data = JSON.parse(saved); } catch (e) { return; }

        const isProductPage = window.location.search.includes('id=');

        // 1. Site Title & SEO
        if (data.title && !isProductPage) {
            // Only on main/list pages where product title doesn't override
            document.title = data.title + ' — ' + (document.title.split(' — ')[1] || 'Цілодобовий захист');
        }
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc && data.metaDesc && !isProductPage) {
            metaDesc.setAttribute('content', data.metaDesc);
        }

        // 2. Logo Text & Icon
        const logos = document.querySelectorAll('.logo');
        logos.forEach(logo => {
            const icon = logo.querySelector('.logo-icon');
            const span = logo.querySelector('span');
            if (icon && data.logoIcon) icon.setAttribute('icon', data.logoIcon);
            if (span && data.title) span.textContent = data.title;
        });

        // 3. Header Controls
        const callbackBtns = document.querySelectorAll('#headerCallbackTrigger, #mobileCallbackLink');
        callbackBtns.forEach(btn => {
            if (data.header?.showCallback === false) {
                btn.style.display = 'none';
            } else {
                btn.style.display = '';
                const span = btn.querySelector('span');
                if (span && data.header?.callbackText) span.textContent = data.header.callbackText;
            }
        });

        const hamburger = document.getElementById('hamburgerBtn');
        if (hamburger) {
            hamburger.style.display = data.header?.showHamburger === false ? 'none' : '';
        }

        // 4. Global Contacts (Phone / Email)
        // This is tricky because we need to target specific instances. 
        // We'll target strings that look like phones or common contact IDs.

        if (data.contacts) {
            // Update phone links
            const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
            phoneLinks.forEach(link => {
                if (data.contacts.phone) {
                    link.href = `tel:${data.contacts.phone.replace(/[^0-9+]/g, '')}`;
                    link.textContent = data.contacts.phone;
                }
            });

            // Update email links
            const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
            emailLinks.forEach(link => {
                if (data.contacts.email) {
                    link.href = `mailto:${data.contacts.email}`;
                    link.textContent = data.contacts.email;
                }
            });

            // Update footer copyright specifically if custom one not set in footer tab
            const copyrightEl = document.querySelector('.footer-bottom p');
            if (copyrightEl && !localStorage.getItem('admin_footer')) {
                // If special footer config exists, it will override this in renderDynamicFooter
            }
        }

        // 5. Newsletter Section
        if (data.newsletter) {
            const newsTitle = document.querySelector('.newsletter h2');
            const newsDesc = document.querySelector('.newsletter p');
            const newsInput = document.querySelector('.newsletter-form input');
            const newsBtn = document.querySelector('.newsletter-form button');

            if (newsTitle && data.newsletter.title) {
                newsTitle.removeAttribute('data-i18n');
                newsTitle.textContent = data.newsletter.title;
            }
            if (newsDesc && data.newsletter.desc) {
                newsDesc.removeAttribute('data-i18n');
                newsDesc.textContent = data.newsletter.desc;
            }
            if (newsInput && data.newsletter.placeholder) {
                newsInput.removeAttribute('data-i18n-placeholder');
                newsInput.placeholder = data.newsletter.placeholder;
            }
            if (newsBtn && data.newsletter.btnText) {
                newsBtn.removeAttribute('data-i18n');
                newsBtn.textContent = data.newsletter.btnText;
            }
        }
    }


    // Execute initialization
    renderBanners();
    renderApprovedReviews();
    initReviewForm();
    initHeroSlider();
    renderCustomPagesLinks();
    renderDynamicFooter();
    applySystemSettings();

    // =============================================
    // INTERNATIONAL PHONE INPUT (intl-tel-input)
    // =============================================
    function initIntlPhone() {
        if (typeof intlTelInput === 'undefined') return;

        const phoneConfig = {
            initialCountry: "ua",
            preferredCountries: ["ua", "pl", "de"],
            separateDialCode: true,
            utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@24.3.4/build/js/utils.js",
        };

        const inputs = [
            { id: 'checkoutPhone', global: 'iti_checkout' },
            { id: 'qbPhone', global: 'iti_qb' },
            { id: 'cbPhone', global: 'iti_cb' },
            { id: 'hcbPhone', global: 'iti_hcb' }
        ];

        inputs.forEach(item => {
            const input = document.getElementById(item.id);
            if (input) {
                // The .phone-error-msg is now hardcoded in HTML for better reliability
                const container = input.closest('.form-group') || input.parentElement;
                const errorMsg = container.querySelector('.phone-error-msg');

                const iti = intlTelInput(input, phoneConfig);
                window[item.global] = iti;

                input.addEventListener('input', () => {
                    if (errorMsg) errorMsg.classList.remove('active');
                    input.classList.remove('input-error');
                    const itiContainer = input.closest('.iti');
                    if (itiContainer) itiContainer.classList.remove('input-error');
                });
            }
        });
    }

    initIntlPhone();

    // =============================================
    // SUCCESS MODAL HELPERS
    // =============================================
    const successModal = document.getElementById('successModal');
    const closeSuccessBtn = document.getElementById('closeSuccessModal');
    const successOkBtn = document.getElementById('successModalBtn');

    function closeSuccessModal() {
        if (successModal) {
            successModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    if (closeSuccessBtn) closeSuccessBtn.addEventListener('click', closeSuccessModal);

    // =============================================
    // DYNAMIC SECTIONS RENDERING (Visual Builder)
    // =============================================
    function renderDynamicSections() {
        const lang = localStorage.getItem('securbox_lang') || 'ua';
        const data = JSON.parse(localStorage.getItem('admin_sections') || JSON.stringify(DEFAULT_SECTIONS_DATA));

        // 1. Testimonials
        const testimonialsGrid = document.querySelector('.testimonials .testimonials-grid');
        if (testimonialsGrid && data.testimonials) {
            testimonialsGrid.innerHTML = data.testimonials.map((test, i) => `
                <div class="testimonial-card ${i === 1 ? 'testimonial-highlight' : ''}">
                    <div class="testimonial-stars">
                        <i class="ph-fill ph-star"></i>
                        <i class="ph-fill ph-star"></i>
                        <i class="ph-fill ph-star"></i>
                        <i class="ph-fill ph-star"></i>
                        <i class="ph-fill ph-star"></i>
                    </div>
                    <p>${test[lang].text}</p>
                    <div class="testimonial-author">
                        <i class="ph-fill ph-user-circle" style="font-size:2.5rem; color:${i === 1 ? '#fff' : 'var(--color-primary)'}"></i>
                        <div>
                            <strong>${test[lang].name}</strong>
                            <span>${test[lang].role}</span>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        // 2. Articles
        const articlesGrid = document.querySelector('.articles .articles-grid');
        if (articlesGrid && data.articles) {
            articlesGrid.innerHTML = data.articles.map(art => `
                <article class="article-card">
                    <div class="article-thumb">
                        <img src="${art.image}" alt="Article thumbnail">
                    </div>
                    <div class="article-body">
                        <span class="article-date">${art['date' + lang]}</span>
                        <h3>${art[lang].title}</h3>
                    </div>
                </article>
            `).join('');
        }
    }

    // Call dynamic sections rendering
    renderDynamicSections();
    if (successOkBtn) successOkBtn.addEventListener('click', closeSuccessModal);
    if (successModal) {
        successModal.addEventListener('click', (e) => {
            if (e.target === successModal) closeSuccessModal();
        });
    }

    window.showSuccessResponse = function (title, desc) {
        if (!successModal) return;

        const titleEl = document.getElementById('successModalTitle');
        const descEl = document.getElementById('successModalDesc');
        const btnEl = document.getElementById('successModalBtn');
        const dict = translations[currentLang] || translations.ua;

        if (titleEl) titleEl.textContent = title;
        if (descEl) descEl.textContent = desc;
        if (btnEl) btnEl.textContent = dict.modal_ok || 'ОК';

        successModal.classList.add('active');
        document.body.style.overflow = 'hidden';

        // Auto close after 5s
        setTimeout(closeSuccessModal, 5000);
    };

    initRegionDropdown();
    initCityDropdown();
    initDeliverySelection();
    
    window.appIsInitialized = true;
});





