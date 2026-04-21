const fs = require('fs');

const products = [
    {
        id: 'PRD-1',
        name: 'Камера відеоспостереження вулична поворотна 20 МП із зумом 20x (ZA-839P-4-W)',
        price: 3990,
        oldPrice: null,
        image: 'assets/cam20/1 без фона без лого.png',
        images: ['assets/cam20/1 без фона без лого.png', 'assets/cam20/3.jpg', 'assets/cam20/IMG_20240213_000830.jpg', 'assets/cam20/IMG_20240213_001607.jpg', 'assets/cam20/IMG_20240213_002148.jpg', 'assets/cam20/IMG_20240213_002332.jpg', 'assets/cam20/IMG_20240213_002540.jpg'],
        specs: ['Роздільна здатність: 20 МП', 'Оптичне збільшення: 20x', 'Двостороннє аудіо', 'Датчик руху'],
        description: `<strong>Оптичне збільшення у 20 разів:</strong> забезпечує чітке зображення віддалених об'єктів.<br><strong>Широкий кут огляду:</strong> нахил на 90 ° і поворот на 355 °.<br><strong>Двостороннє аудіо:</strong> Вбудовані мікрофон та динамік дозволяють чути та спілкуватися через камеру.<br><strong>Датчик руху:</strong> надсилає повідомлення на телефон при виявленні активності.<br><br><strong>Комплектація:</strong><br>1 х Камера ZA-839P-4-W<br>1 х Блок живлення<br>1 х Інструкція<br>1 х Монтажний набір<br>1 х Коробка`,
        fullSpecs: {
            'Модель': 'ZA-839P-4-W',
            'Оптичне збільшення': '20x',
            'Роздільна здатність камери': '20 МП',
            'Максимальна дальність зйомки': '50 м',
            'Двостороннє аудіо': 'вбудовані мікрофон та динамік',
            'Датчик руху': 'надсилає повідомлення на телефон',
            'Нахил повороту по вертикалі': '90 °',
            'Нахил повороту по горизонталі': '355 °',
            'Режим зйомки': 'день/ніч',
            'Підсвічування': 'Інфрачервоне підсвічування / LED',
            'Кріплення': 'стельове / настінне',
            'Матеріал корпуса': 'пластик',
            'Підключення': 'Wi-Fi: 2.4 ГГц, Кабель: RJ-45',
            'Живлення': '220В'
        },
        category: 'cat_cameras'
    },
    {
        id: 'PRD-2',
        name: 'Камера відеоспостереження вулична 6 МП Wi-Fi IP PTZ із зумом 10x',
        price: 1890,
        oldPrice: 2199,
        image: 'assets/cam6/12456 без фона без кольца.png',
        images: ['assets/cam6/12456 без фона без кольца.png', 'assets/cam6/I6.jpg', 'assets/cam6/IMG_20240216_143343.jpg', 'assets/cam6/IMG_20240216_143453.jpg', 'assets/cam6/IMG_20240216_143630.jpg', 'assets/cam6/IMG_20240216_143656.jpg'],
        specs: ['Роздільна здатність: 6 МП', 'Оптичне збільшення: 10x', 'Датчик руху'],
        description: `Ця вулична Wi-Fi IP камера поворотна оснащена датчиком руху, який надсилає повідомлення на ваш телефон, а двосторонній аудіозв'язок дозволяє чути та говорити через камеру.<br><br><strong>Комплектація:</strong><br>1 х Камера<br>1 х Блок живлення<br>1 х Інструкція<br>1 х Монтажний набір<br>1 х Коробка`,
        fullSpecs: {
            'Роздільна здатність камери': '6 МП',
            "Фокусна відстань об'єктива": "4.0 мм + 8 мм",
            'Оптичне збільшення': '10x',
            'Датчик руху': 'надсилає повідомлення на телефон',
            'Нахил повороту по вертикалі': '90 °',
            'Нахил повороту по горизонталі': '355 °',
            'Кріплення': 'стельове, настінне',
            'Матеріал': 'пластик',
            'Режим зйомки': 'день / ніч',
            'Підсвічування': 'Інфрачервоне підсвічування / LED',
            'Підключення': 'Wi-Fi: 2.4 ГГц, кабель: RJ-45',
            'Живлення': '220В'
        },
        category: 'cat_cameras'
    },
    {
        id: 'PRD-3',
        name: 'Камера відеоспостереження вулична поворотна Wi-Fi PTZ 12 МП із зумом 10x (ZA-816S-4-W)',
        price: 2890,
        oldPrice: 3050,
        image: 'assets/camer/cam4.png',
        images: ['assets/camer/cam4.png', 'assets/camer/33.jpg', 'assets/camer/IMG_20240222_154156.jpg', 'assets/camer/IMG_20240222_154450.jpg', 'assets/camer/IMG_20240222_154648.jpg', 'assets/camer/IMG_20240222_154816.jpg', 'assets/camer/IMG_20240222_155233.jpg'],
        specs: ['Роздільна здатність: 12 МП', 'Оптичне збільшення: 10x', 'Максимальна дальність зйомки: 40 м'],
        description: `<strong>Оптичне збільшення у 10 разів:</strong> забезпечує чітке зображення віддалених об'єктів.<br><strong>Широкий угол огляду:</strong> нахил на 90° та поворот на 355°.<br><strong>Двостороннє аудіо:</strong> Вбудовані мікрофон та динамік дозволяють чути та спілкуватися через камеру.<br><strong>Датчик руху:</strong> надсилає повідомлення на телефон при виявленні активності.<br><br><strong>Комплектація:</strong><br>1 х Камера<br>1 х Блок живлення<br>1 х Інструкція<br>1 х Монтажний набір<br>1 х Коробка`,
        fullSpecs: {
            'Модель': 'ZA-816S-4-W',
            'Оптичне збільшення': '10x',
            'Роздільна здатність камери': '12 МП',
            'Максимальна дальність зйомки': '40 м',
            'Двостороннє аудіо': 'вбудовані мікрофон та динамік',
            'Датчик руху': 'надсилає повідомлення на телефон',
            'Нахил повороту по вертикалі': '90 °',
            'Нахил повороту по горизонталі': '355 °',
            'Підключення': 'Wi-Fi: 2.4 ГГц, кабель: RJ-45'
        },
        category: 'cat_cameras'
    },
    {
        id: 'PRD-4',
        name: 'Камера відеоспостереження вулична поворотна Wi-Fi 16 МП із зумом 10x (ZA-839S-4-W)',
        price: 3250,
        oldPrice: 3550,
        image: 'assets/camer16/1234 без фона.png',
        images: ['assets/camer16/1234 без фона.png', 'assets/camer16/IMG_20240216_150717.jpg', 'assets/camer16/IMG_20240216_150734.jpg', 'assets/camer16/IMG_20240216_150820.jpg', 'assets/camer16/IMG_20240216_151301.jpg'],
        specs: ['Роздільна здатність: 16 МП', 'Оптичне збільшення: 10x', 'Захист від пилу і вологи (IP66)'],
        description: `Камера відеоспостереження поворотна (ZA-839S-4-W), має широкий кут огляду, десятикратний зум, датчик руху, двостороннє аудіо і корпус із захистом від пилу і вологи (IP66).<br><br><strong>Комплектація:</strong><br>1 х Камера ZA-839S-4-W<br>1 х Блок живлення<br>1 х Інструкція<br>1 х Монтажний набір<br>1 х Коробка`,
        fullSpecs: {
            'Модель': 'ZA-839S-4-W',
            'Оптичне збільшення': '10x',
            'Роздільна здатність камери': '16 МП',
            'Максимальна дальність зйомки': '40 м',
            'Двостороннє аудіо': 'вбудовані мікрофон та динамік',
            'Датчик руху': 'надсилає повідомлення на телефон',
            'Підключення': 'Wi-Fi: 2.4 ГГц, кабель: RJ-45'
        },
        category: 'cat_cameras'
    },
    {
        id: 'PRD-5',
        name: 'Камера відеоспостереження поворотна IP Wi-Fi вулична 6 МП із зумом 36x ICSEE',
        price: 4750,
        oldPrice: 5250,
        image: 'assets/cam2.png',
        images: ['assets/cam2.png'],
        specs: ['Роздільна здатність: 6 МП', 'Оптичне збільшення: 36x', 'Ступінь захисту: IP66'],
        description: `Відмінна камера спостереження з 36-кратним оптичним збільшенням та підтримкою протоколів Onvif. Ідеально підходить для зовнішнього використання завдяки металевому корпусу та рівню захисту IP66.<br><br><strong>Комплектація:</strong><br>1 х Камера ICSEE-6K-36X<br>1 х Блок живлення<br>1 х Інструкція<br>1 х Монтажний набір<br>1 х Коробка`,
        fullSpecs: {
            'Модель': 'ICSEE-6K-36X',
            'Роздільна здатність камери': '6 МП',
            'Оптичний зум': '4.7-94 мм',
            'Оптичне збільшення': '36x',
            'Нахил повороту по вертикалі': '90 °',
            'Нахил повороту по горизонталі': '355 °',
            'Матеріал корпусу': 'метал, пластик',
            'Підсвічування': 'Інфрачервоне підсвічування / LED',
            'Ступінь захисту': 'IP66',
            'Підключення': 'Wi-Fi: 2.4 ГГц, кабель: RJ-45'
        },
        category: 'cat_cameras'
    },
    {
        id: 'PRD-6',
        name: 'Камера відеоспостереження Tuya 4mp Wi-Fi поворотная',
        price: 980,
        oldPrice: 1200,
        image: 'assets/camer16/1234 без фона.png',
        images: ['assets/camer16/1234 без фона.png'],
        specs: ['Роздільна здатність: 4мп', 'Додаток: Tuya', 'Двостороннє аудіо'],
        description: `Поворотна домашня Wi-Fi камера з роздільною здатністю 4мп, що підтримує додаток Tuya для iOS та Android. Забезпечує легкий контроль та спостереження.<br><br><strong>Комплектація:</strong><br>1 х Камера<br>1 х Блок живлення<br>1 х Інструкція<br>1 х Монтажний набір<br>1 х Коробка`,
        fullSpecs: {
            'Тип': 'Поворотна домашня Wi-Fi камера',
            'Роздільна здатність': '4мп',
            'Двостороннє аудіо': 'вбудовані мікрофон та динамік',
            'Додаток': 'Tuya',
            'Підтримка': 'micro SD'
        },
        category: 'cat_cameras'
    },
    {
        id: 'PRD-7',
        name: 'Світильник сенсорний на акумуляторі 600 mAh',
        price: 750,
        oldPrice: null,
        image: 'assets/cam3.png',
        images: ['assets/cam3.png'],
        specs: ['Сенсор руху: 3м', 'Акумулятор: 600 mAh', '60 світлодіодів'],
        description: `Сенсорний світильник має біле світло та 60 світлодіодів для яскравого та рівномірного освітлення, та сенсор який реагує на рух на відстані 3 метрів.<br><br><strong>Комплектація:</strong><br>1 х USB кабель<br>1 х Інструкція<br>1 х Кріплення<br>1 х Коробка`,
        fullSpecs: {
            'Потужність': '1,5 Вт',
            'Люмен потік': '150 LM',
            'Акумулятор': '600 mAh',
            'Довжина': '24 см',
            'Колірна температура': '6000К'
        },
        category: 'cat_lighting'
    },
    {
        id: 'PRD-8',
        name: 'LED світильник з акумулятором Sensor Light 1800 mAh',
        price: 850,
        oldPrice: null,
        image: 'assets/cam4.png',
        images: ['assets/cam4.png'],
        specs: ['Регульована яскравість', 'Акумулятор: 1800 mAh', 'Колірна температура: 3000К-6500К'],
        description: `Це компактний світлодіодний нічник з м'яким світлом та регульованою яскравістю. Можливість регулювати відтінок світіння, роблячи його теплішим або холоднішим.<br><br><strong>Комплектація:</strong><br>1 x Світильник.<br>1 x USB Type-C.<br>1 x Кріплення.<br>1 x Коробка.`,
        fullSpecs: {
            'Тип': 'Нічник',
            'Матеріал корпуса': 'пластик',
            'Колір': 'білий',
            'Довжина': '15 см',
            'Колір освітлення': 'теплий, холодний, нейтральний (3000К-6500К)',
            'Акумулятор': '1800 mAh'
        },
        category: 'cat_lighting'
    },
    {
        id: 'PRD-9',
        name: 'Налобний ліхтар Bailong BL-2188b-T6 50000W',
        price: 450,
        oldPrice: null,
        image: 'assets/cam2.png',
        images: ['assets/cam2.png'],
        specs: ['Потужність: 50 000 Вт', 'Дальність променя: до 500 м', 'Вологостійкий'],
        description: `Світловий промінь із фокусуванням – дальність променя в польових умовах до 500 м. Ідеально підходить для походів, рибалки, полювання.<br><br><strong>Комплектація:</strong><br>Налобний ліхтарик Bailong BL-2188B T6 50000W;<br>Два акумулятори Bailong Li-ion 18650 5800mAh 3.7V;<br>Заряджання від мережі 220 В;<br>Заряджання від прикурювача;<br>Фірмова упаковка.`,
        fullSpecs: {
            'Потужність лампи': '50 000 Вт',
            'Дальність світлового променя': '100 м',
            'Оптичний зум': 'Є',
            'Корпус': 'вологостійкий',
            'Заряджання': 'від мережі 220 Вт',
            'Кількість режимів роботи': '3'
        },
        category: 'cat_lighting'
    },
    {
        id: 'PRD-10',
        name: 'Електрична зубна щітка Shuke SK-601 (Чорна)',
        price: 399,
        oldPrice: null,
        image: 'assets/cam3.png',
        images: ['assets/cam3.png'],
        specs: ['4 насадки', 'Акумуляторна', '5 режимів роботи'],
        description: `Акумуляторна електрична зубна щітка з вібруючою головкою та функцією масажу. Поставляється з додатковими насадками.<br><br><strong>Комплектація:</strong><br>USB-кабель;<br>3 додаткові насадки;<br>Електрична щітка з насадкою;<br>Ковпачок.`,
        fullSpecs: {
            'Тип зубної щітки': 'звичайна',
            'Рух головки': 'вібруючі',
            'Дод. опції': 'масаж',
            'Вага товару з упаковкою': '180 г',
            'Висота': '21 см'
        },
        category: 'cat_health'
    },
    {
        id: 'PRD-11',
        name: 'Спортивний бандаж колінного суглоба Knee Bands',
        price: 299,
        oldPrice: null,
        image: 'assets/cam4.png',
        images: ['assets/cam4.png'],
        specs: ['Еластична фіксація', 'На липучках', 'Для занять спортом'],
        description: `Спортивний бандаж для коліна з нейлону та спандексу. Еластична фіксація на липучках, ідеально підходить для дорослих.`,
        fullSpecs: {
            'Тип': 'бандаж для коліна / спортивний наколінник',
            'Колір': 'чорний',
            'Матеріал': 'нейлон, спандекс',
            'Призначення': 'для занять спортом',
            'Ступінь фіксації': 'еластична'
        },
        category: 'cat_health'
    },
    {
        id: 'PRD-12',
        name: 'Мікрофон направлений зовнішній Sawetek M100',
        price: 1200,
        oldPrice: null,
        image: 'assets/cam2.png',
        images: ['assets/cam2.png'],
        specs: ['Алюмінієвий корпус', 'Для смартфона, камер, ПК', 'Повний комплект'],
        description: `Мікрофон направлений зовнішній для смартфона, камер, ПК Sawetek M100, алюмінієвий корпус, повний комплект.<br><br><strong>Комплектація:</strong> Мікрофон направлений Savetek M100 - 1 шт.`,
        fullSpecs: {
            'Частотний діапазон': '20 Гц – 20 кГц',
            'Чутливість': '-40dB±1,5dB',
            'Співвідношення сигнал/шум': '≥64 dB',
            'Штекер': '3,5 мм (stereo 3-pin)',
            'Матеріал корпусу': 'анодований алюміній',
            'Довжина кабелю': 'близько 35 см',
            'Розмір': '80 х 22 мм'
        },
        category: 'cat_accessories'
    },
    {
        id: 'PRD-13',
        name: 'Універсальний тримач для телефону, затискач для ліжка',
        price: 430,
        oldPrice: null,
        image: 'assets/cam3.png',
        images: ['assets/cam3.png'],
        specs: ['Кріпиться на any стол', 'Для спальні, офісу', 'Гнучкий кронштейн'],
        description: `Тримач для мобільного телефону, лінивий кронштейн, тримач-кліпса кріпиться на будь-який стіл, мобільна підставка для спальні, офісу, ванної кімнати та кухні.`,
        fullSpecs: {
            'Тип': 'Тримач',
            'Призначення': 'для телефону',
            'Місце встановлення': 'Стіл, ліжко'
        },
        category: 'cat_accessories'
    },
    {
        id: 'PRD-14',
        name: 'Чапка Муха 12 МЛ',
        price: 200,
        oldPrice: null,
        image: 'assets/cam4.png',
        images: ['assets/cam4.png'],
        specs: ['Матеріал: Скло', 'Об\'єм: 12 МЛ'],
        description: `Скляна чапка лафітник Муха. Ціна за 1 шт.`,
        fullSpecs: {
            'Матеріал': 'Скло',
            "Об'єм": '12 МЛ',
            'Вага': '28 грам'
        },
        category: 'cat_other'
    },
    {
        id: 'PRD-15',
        name: 'Чапка Муха 10 МЛ',
        price: 200,
        oldPrice: 220,
        image: 'assets/cam2.png',
        images: ['assets/cam2.png'],
        specs: ['Матеріал: Скло', 'Об\'єм: 10 МЛ'],
        description: `Скляна чапка лафітник Муха. Ціна за 1 шт.`,
        fullSpecs: {
            'Матеріал': 'Скло',
            "Об'єм": '10 МЛ',
            'Висота': '6 см',
            'Вага': '24 грам'
        },
        category: 'cat_other'
    },
    {
        id: 'PRD-16',
        name: 'Чапка Муха 8 МЛ',
        price: 180,
        oldPrice: null,
        image: 'assets/cam3.png',
        images: ['assets/cam3.png'],
        specs: ['Матеріал: Скло', 'Об\'єм: 8 МЛ'],
        description: `Скляна чапка лафітник Муха. Ціна за 1 шт.`,
        fullSpecs: {
            'Матеріал': 'Скло',
            "Об'єм": '8 МЛ',
            'Висота': '6 см',
            'Вага': '22 грам'
        },
        category: 'cat_other'
    }
];

const path = require('path');

const categories = [
    { id: 'cat_cameras', nameUa: 'Камера', nameRu: 'Камера', img: 'assets/cam20/1 без фона без лого.png' },
    { id: 'cat_lighting', nameUa: 'Світильник', nameRu: 'Светильник', img: 'assets/cam3.png' },
    { id: 'cat_health', nameUa: 'Товар для здоров\'я', nameRu: 'Товар для здоровья', img: 'assets/cam4.png' },
    { id: 'cat_accessories', nameUa: 'Аксесуар', nameRu: 'Аксессуар', img: 'assets/cam2.png' },
    { id: 'cat_other', nameUa: 'Тестовий товар', nameRu: 'Тестовый товар', img: 'assets/cam3.png' }
];

const testProducts = [];
categories.forEach(cat => {
    for (let i = 1; i <= 10; i++) {
        const randPrice = Math.floor(Math.random() * (4500 - 300) + 300);
        const hasOldPrice = Math.random() > 0.7;
        const oldPrice = hasOldPrice ? Math.floor(randPrice * 1.2) : null;
        
        testProducts.push({
            id: `TEST-${cat.id.split('_')[1].toUpperCase()}-${i}`,
            name: `${cat.nameUa} #${i} (Тест)`,
            name_ua: `${cat.nameUa} #${i} (Тест)`,
            name_ru: `${cat.nameRu} #${i} (Тест)`,
            price: randPrice,
            oldPrice: oldPrice,
            image: cat.img,
            images: [cat.img],
            specs_ua: [`Тестова характеристика #${i}`],
            specs_ru: [`Тестовая характеристика #${i}`],
            description_ua: `Це тестовий товар №${i} для категорії ${cat.nameUa}. Призначений для перевірки відображення каталогу та фільтрів.`,
            description_ru: `Это тестовый товар №${i} для категории ${cat.nameRu}. Предназначен для проверки отображения каталога и фильтров.`,
            fullSpecs_ua: {
                'Модель': `TEST-MODE-${i}`,
                'Стан': 'Новий',
                'Гарантія': '12 місяців'
            },
            fullSpecs_ru: {
                'Модель': `TEST-MODE-${i}`,
                'Состояние': 'Новый',
                'Гарантия': '12 месяцев'
            },
            category: cat.id
        });
    }
});

const allProducts = [...products, ...testProducts];

const processed = allProducts.map(p => {
    p.link = 'product.html?id=' + p.id;
    return p;
});

// Use local path for script.js
const scriptPath = path.join(__dirname, 'script.js');
let scriptContent = fs.readFileSync(scriptPath, 'utf8');

// 1. Remove any old initialProducts definition and db_version check
// Using global flag to clean up any duplicates
const oldProductsRegex = /const initialProducts = \[\s*\{[\s\S]*\}\s*\];/gm;
const oldVersionRegex = /\/\/ Auto-refresh localStorage[\s\S]*?localStorage\.setItem\('db_version'[\s\S]*?\}/gm;
const oldVersionRegex2 = /if \(localStorage\.getItem\('db_version'\) !== '.*?'\) \{[\s\S]*?\}/gm;

scriptContent = scriptContent.replace(oldProductsRegex, '');
scriptContent = scriptContent.replace(oldVersionRegex, '');
scriptContent = scriptContent.replace(oldVersionRegex2, '');

// 2. Prepare the new block
const newDbVersion = Date.now().toString();
const newBlock = `
    const initialProducts = ${JSON.stringify(processed, null, 4)};

    // Auto-refresh localStorage if database version changes
    if (localStorage.getItem('db_version') !== '${newDbVersion}') {
        localStorage.setItem('products', JSON.stringify(initialProducts));
        localStorage.setItem('db_version', '${newDbVersion}');
    }
`;

// 3. Insert after DOMContentLoaded start
const domContentLoadedRegex = /document\.addEventListener\('DOMContentLoaded', \(\) => \{/;
if (domContentLoadedRegex.test(scriptContent)) {
    scriptContent = scriptContent.replace(domContentLoadedRegex, "$&\n" + newBlock);
} else {
    // Fallback: prepend to file
    scriptContent = newBlock + "\n" + scriptContent;
}

fs.writeFileSync(scriptPath, scriptContent);
console.log(`script.js updated. Products: ${allProducts.length}. Version: ${newDbVersion}`);
