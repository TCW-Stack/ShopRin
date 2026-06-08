/* ═══════════════════════════════════════════════
   SHOPRIN — app.js
   Full product data, state management, rendering
   ═══════════════════════════════════════════════ */

// ─────────────────────────────────────────────
// IMAGE POOLS — 8-10 Unsplash images per category
// Products rotate through these automatically
// ─────────────────────────────────────────────
const IMG = {
  phones: [
    'https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=480&q=78',
    'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=480&q=78',
    'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=480&q=78',
    'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=480&q=78',
    'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=480&q=78',
    'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=480&q=78',
    'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=480&q=78',
    'https://images.unsplash.com/photo-1663499482523-1c0c1bae4ce1?w=480&q=78',
    'https://images.unsplash.com/photo-1523206489230-c012c64b2b48?w=480&q=78',
    'https://images.unsplash.com/photo-1512941937938-a272fa651b79?w=480&q=78',
  ],
  laptops: [
    'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=480&q=78',
    'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=480&q=78',
    'https://images.unsplash.com/photo-1593642702749-b7d2a804fbcf?w=480&q=78',
    'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=480&q=78',
    'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=480&q=78',
    'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=480&q=78',
    'https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=480&q=78',
    'https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?w=480&q=78',
  ],
  fashion: [
    'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=480&q=78',
    'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=480&q=78',
    'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=480&q=78',
    'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=480&q=78',
    'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=480&q=78',
    'https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=480&q=78',
    'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=480&q=78',
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=480&q=78',
    'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=480&q=78',
    'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=480&q=78',
    'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=480&q=78',
    'https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?w=480&q=78',
  ],
  shoes: [
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=480&q=78',
    'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=480&q=78',
    'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=480&q=78',
    'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=480&q=78',
    'https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=480&q=78',
    'https://images.unsplash.com/photo-1542219550-37153d387c27?w=480&q=78',
    'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=480&q=78',
    'https://images.unsplash.com/photo-1605408499391-6368c628ef42?w=480&q=78',
    'https://images.unsplash.com/photo-1539185441755-769473a23570?w=480&q=78',
    'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=480&q=78',
  ],
  beauty: [
    'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=480&q=78',
    'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=480&q=78',
    'https://images.unsplash.com/photo-1631214500004-eae79e9d4c5b?w=480&q=78',
    'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=480&q=78',
    'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=480&q=78',
    'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=480&q=78',
    'https://images.unsplash.com/photo-1583241475880-083f84372725?w=480&q=78',
    'https://images.unsplash.com/photo-1571875257727-256c39da42af?w=480&q=78',
    'https://images.unsplash.com/photo-1519415943484-9fa1873496d4?w=480&q=78',
    'https://images.unsplash.com/photo-1567721913486-6585f069b332?w=480&q=78',
  ],
  home: [
    'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=480&q=78',
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=480&q=78',
    'https://images.unsplash.com/photo-1616627547584-bf28cee262db?w=480&q=78',
    'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=480&q=78',
    'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=480&q=78',
    'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=480&q=78',
    'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=480&q=78',
    'https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=480&q=78',
    'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=480&q=78',
    'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=480&q=78',
  ],
  appliances: [
    'https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=480&q=78',
    'https://images.unsplash.com/photo-1593359677879-a4bb92f4834c?w=480&q=78',
    'https://images.unsplash.com/photo-1631567091196-a1bfaf4f4703?w=480&q=78',
    'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=480&q=78',
    'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=480&q=78',
    'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=480&q=78',
    'https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=480&q=78',
    'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=480&q=78',
  ],
  sports: [
    'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=480&q=78',
    'https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=480&q=78',
    'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=480&q=78',
    'https://images.unsplash.com/photo-1570498839593-e565b39455fc?w=480&q=78',
    'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=480&q=78',
    'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=480&q=78',
    'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=480&q=78',
    'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=480&q=78',
  ],
  food: [
    'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=480&q=78',
    'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=480&q=78',
    'https://images.unsplash.com/photo-1587132137056-bfbf0166836e?w=480&q=78',
    'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=480&q=78',
    'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=480&q=78',
    'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=480&q=78',
    'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=480&q=78',
    'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=480&q=78',
    'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=480&q=78',
    'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=480&q=78',
  ],
  books: [
    'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=480&q=78',
    'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=480&q=78',
    'https://images.unsplash.com/photo-1535398089889-dd807df1dfaa?w=480&q=78',
    'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=480&q=78',
    'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=480&q=78',
    'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=480&q=78',
    'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=480&q=78',
    'https://images.unsplash.com/photo-1589998059171-988d887df646?w=480&q=78',
  ],
  gaming: [
    'https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=480&q=78',
    'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=480&q=78',
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=480&q=78',
    'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=480&q=78',
    'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=480&q=78',
    'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=480&q=78',
    'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=480&q=78',
    'https://images.unsplash.com/photo-1547394765-185e1e68f34e?w=480&q=78',
    'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=480&q=78',
    'https://images.unsplash.com/photo-1531525645387-7f14be1bdbbd?w=480&q=78',
  ],
  kids: [
    'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=480&q=78',
    'https://images.unsplash.com/photo-1472162072942-cd5147eb3902?w=480&q=78',
    'https://images.unsplash.com/photo-1560807707-8cc77767d783?w=480&q=78',
    'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=480&q=78',
    'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=480&q=78',
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=480&q=78',
  ],
};

// Pick image from pool, cycling by index
function poolImg(cat, idx) {
  const pool = IMG[cat] || IMG.fashion;
  return pool[idx % pool.length];
}

// ─────────────────────────────────────────────
// STATIC DATA
// ─────────────────────────────────────────────

const CATS = [
  { id: 'phones',     label: 'Phones',        img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&q=75' },
  { id: 'laptops',    label: 'Laptops',        img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&q=75' },
  { id: 'fashion',    label: 'Fashion',        img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=75' },
  { id: 'shoes',      label: 'Shoes',          img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=75' },
  { id: 'beauty',     label: 'Beauty',         img: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&q=75' },
  { id: 'home',       label: 'Home & Living',  img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=75' },
  { id: 'appliances', label: 'Appliances',     img: 'https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=400&q=75' },
  { id: 'sports',     label: 'Sports',         img: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&q=75' },
  { id: 'food',       label: 'Food & Drinks',  img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=75' },
  { id: 'books',      label: 'Books',          img: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&q=75' },
  { id: 'gaming',     label: 'Gaming',         img: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=400&q=75' },
  { id: 'kids',       label: 'Kids & Toys',    img: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400&q=75' },
];

const BRANDS = [
  { name: 'Apple',     e: '🍎' }, { name: 'Samsung',   e: '📱' },
  { name: 'Tecno',     e: '📲' }, { name: 'Infinix',   e: '📡' },
  { name: 'Nike',      e: '✔️'  }, { name: 'Adidas',    e: '🏃' },
  { name: 'IKEA',      e: '🛋'  }, { name: "L'Oréal",  e: '💄' },
  { name: 'Nestlé',    e: '🍫' }, { name: 'Sony',      e: '🎧' },
  { name: 'HP',        e: '💻' }, { name: 'Hisense',   e: '❄️' },
  { name: 'OPPO',      e: '📸' }, { name: 'Zara',      e: '👗' },
  { name: 'Indomie',   e: '🍜' }, { name: 'Dyson',     e: '🌀' },
];

// 122 base products across 12 categories
const BASE_PRODUCTS = [
  // ── PHONES (16) ──
  { id:1,  cat:'phones',    brand:'Apple',       name:'iPhone 15 Pro Max 256GB Natural Titanium', price:980000,  old:1100000, rating:4.9, rev:2341, badge:'hot'  },
  { id:2,  cat:'phones',    brand:'Samsung',     name:'Samsung Galaxy S24 Ultra 5G 512GB',        price:850000,  old:950000,  rating:4.8, rev:1876, badge:'sale' },
  { id:3,  cat:'phones',    brand:'Tecno',       name:'Tecno Spark 20 Pro+ 256GB',                price:89000,   old:110000,  rating:4.5, rev:934,  badge:'sale' },
  { id:4,  cat:'phones',    brand:'Infinix',     name:'Infinix Note 40 Pro 5G 256GB',             price:115000,  old:145000,  rating:4.6, rev:721,  badge:'new'  },
  { id:5,  cat:'phones',    brand:'OPPO',        name:'OPPO Reno 11 5G 256GB',                    price:210000,  old:260000,  rating:4.7, rev:543,  badge:'sale' },
  { id:6,  cat:'phones',    brand:'Xiaomi',      name:'Xiaomi Redmi Note 13 Pro 256GB',           price:145000,  old:180000,  rating:4.6, rev:1102, badge:'best' },
  { id:7,  cat:'phones',    brand:'Apple',       name:'iPhone 14 128GB Midnight',                 price:750000,  old:890000,  rating:4.8, rev:1567, badge:'sale' },
  { id:8,  cat:'phones',    brand:'Samsung',     name:'Samsung Galaxy A55 5G 256GB',              price:290000,  old:340000,  rating:4.6, rev:834,  badge:'new'  },
  { id:9,  cat:'phones',    brand:'Tecno',       name:'Tecno Camon 30 Pro 5G',                    price:132000,  old:160000,  rating:4.5, rev:612,  badge:'new'  },
  { id:10, cat:'phones',    brand:'Infinix',     name:'Infinix Hot 40i 128GB',                    price:68000,   old:82000,   rating:4.4, rev:889,  badge:'sale' },
  { id:11, cat:'phones',    brand:'Apple',       name:'iPhone SE 3rd Gen 128GB',                  price:480000,  old:560000,  rating:4.7, rev:432,  badge:'sale' },
  { id:12, cat:'phones',    brand:'Samsung',     name:'Samsung Galaxy Z Fold 5',                  price:1450000, old:1700000, rating:4.9, rev:287,  badge:'hot'  },
  { id:13, cat:'phones',    brand:'Google',      name:'Google Pixel 8 Pro 256GB',                 price:780000,  old:900000,  rating:4.8, rev:345,  badge:'best' },
  { id:14, cat:'phones',    brand:'Itel',        name:'Itel A70 128GB Budget Pick',               price:42000,   old:55000,   rating:4.3, rev:1234, badge:'sale' },
  { id:15, cat:'phones',    brand:'OPPO',        name:'OPPO A78 5G 128GB',                        price:165000,  old:200000,  rating:4.5, rev:567,  badge:'new'  },
  { id:16, cat:'phones',    brand:'Xiaomi',      name:'Xiaomi 14 Ultra Leica Camera',             price:950000,  old:1100000, rating:4.9, rev:198,  badge:'hot'  },

  // ── LAPTOPS (10) ──
  { id:17, cat:'laptops',   brand:'Apple',       name:'MacBook Pro 14" M3 Chip 18GB',             price:1850000, old:2100000, rating:4.9, rev:687,  badge:'hot'  },
  { id:18, cat:'laptops',   brand:'HP',          name:'HP Pavilion 15 Core i7 16GB 512GB',        price:520000,  old:650000,  rating:4.7, rev:456,  badge:'sale' },
  { id:19, cat:'laptops',   brand:'Dell',        name:'Dell XPS 13 OLED Touch 16GB',              price:1200000, old:1450000, rating:4.8, rev:312,  badge:'best' },
  { id:20, cat:'laptops',   brand:'Lenovo',      name:'Lenovo ThinkPad X1 Carbon Gen 11',         price:1350000, old:1600000, rating:4.7, rev:289,  badge:'sale' },
  { id:21, cat:'laptops',   brand:'Asus',        name:'ASUS ROG Strix G16 Gaming Laptop',         price:980000,  old:1150000, rating:4.8, rev:412,  badge:'hot'  },
  { id:22, cat:'laptops',   brand:'HP',          name:'HP Spectre x360 13.5" 2-in-1',             price:890000,  old:1050000, rating:4.7, rev:231,  badge:'new'  },
  { id:23, cat:'laptops',   brand:'Apple',       name:'MacBook Air 15" M3 8GB 256GB',             price:1250000, old:1400000, rating:4.9, rev:543,  badge:'best' },
  { id:24, cat:'laptops',   brand:'Lenovo',      name:'Lenovo IdeaPad Slim 5 Core i5',            price:420000,  old:520000,  rating:4.6, rev:378,  badge:'sale' },
  { id:25, cat:'laptops',   brand:'Microsoft',   name:'Microsoft Surface Pro 9 Intel i7',         price:1180000, old:1350000, rating:4.7, rev:213,  badge:'new'  },
  { id:26, cat:'laptops',   brand:'Acer',        name:'Acer Predator Helios 16 RTX 4070',         price:1100000, old:1300000, rating:4.8, rev:189,  badge:'hot'  },

  // ── FASHION (14) ──
  { id:27, cat:'fashion',   brand:'Zara',        name:'Zara Floral Ruched Midi Dress',            price:38000,   old:52000,   rating:4.6, rev:876,  badge:'sale' },
  { id:28, cat:'fashion',   brand:'H&M',         name:'H&M Linen Oversized Blazer',               price:32000,   old:42000,   rating:4.5, rev:654,  badge:'sale' },
  { id:29, cat:'fashion',   brand:'Ankara',      name:'Handwoven Ankara Tote Bag',                price:18500,   old:null,    rating:4.8, rev:432,  badge:'new'  },
  { id:30, cat:'fashion',   brand:'Adire',       name:'Adire Kaftan Dress Blue Tie-Dye',          price:35000,   old:null,    rating:4.9, rev:312,  badge:'new'  },
  { id:31, cat:'fashion',   brand:'Uniqlo',      name:'Uniqlo Men Slim Fit Chino Trousers',       price:19000,   old:25000,   rating:4.6, rev:567,  badge:'sale' },
  { id:32, cat:'fashion',   brand:'Tommy',       name:'Tommy Hilfiger Classic Polo Shirt',        price:42000,   old:58000,   rating:4.7, rev:389,  badge:'sale' },
  { id:33, cat:'fashion',   brand:'Ankara',      name:'Aso-Oke Agbada 3-Piece Set',               price:65000,   old:85000,   rating:4.8, rev:234,  badge:'hot'  },
  { id:34, cat:'fashion',   brand:'Gucci',       name:'Gucci GG Monogram Leather Belt',           price:185000,  old:220000,  rating:4.9, rev:178,  badge:'hot'  },
  { id:35, cat:'fashion',   brand:'Zara',        name:'Zara Satin Slip Skirt Black',              price:28000,   old:38000,   rating:4.5, rev:321,  badge:'sale' },
  { id:36, cat:'fashion',   brand:'H&M',         name:'H&M Ribbed Crop Top 3-Pack',               price:12000,   old:16000,   rating:4.4, rev:543,  badge:'sale' },
  { id:37, cat:'fashion',   brand:'Ralph',       name:'Ralph Lauren Oxford Shirt White',          price:55000,   old:70000,   rating:4.7, rev:267,  badge:'best' },
  { id:38, cat:'fashion',   brand:'Ankara',      name:'Kente Print Crop Top and Skirt Set',       price:22000,   old:null,    rating:4.8, rev:198,  badge:'new'  },
  { id:39, cat:'fashion',   brand:"Levi's",      name:"Levi's 501 Original Fit Jeans",            price:48000,   old:62000,   rating:4.8, rev:1234, badge:'best' },
  { id:40, cat:'fashion',   brand:'Boss',        name:'Hugo Boss Slim Fit Suit Navy',             price:245000,  old:310000,  rating:4.9, rev:134,  badge:'hot'  },

  // ── SHOES (10) ──
  { id:41, cat:'shoes',     brand:'Nike',        name:'Nike Air Force 1 Low Triple White',        price:65000,   old:80000,   rating:4.8, rev:2100, badge:'hot'  },
  { id:42, cat:'shoes',     brand:'Adidas',      name:'Adidas Samba OG Black/White',              price:70000,   old:88000,   rating:4.9, rev:1890, badge:'best' },
  { id:43, cat:'shoes',     brand:'Puma',        name:'Puma Deviate NITRO 3 Running Shoe',        price:55000,   old:72000,   rating:4.7, rev:934,  badge:'sale' },
  { id:44, cat:'shoes',     brand:'New Balance', name:'New Balance 550 Retro White',              price:75000,   old:95000,   rating:4.8, rev:1234, badge:'hot'  },
  { id:45, cat:'shoes',     brand:'Converse',    name:'Converse Chuck Taylor All-Star Hi',        price:38000,   old:48000,   rating:4.7, rev:2780, badge:'best' },
  { id:46, cat:'shoes',     brand:'Nike',        name:'Nike Pegasus 41 Road Running',             price:78000,   old:98000,   rating:4.8, rev:672,  badge:'new'  },
  { id:47, cat:'shoes',     brand:'Adidas',      name:'Adidas Ultraboost 22 Black',               price:98000,   old:125000,  rating:4.8, rev:876,  badge:'best' },
  { id:48, cat:'shoes',     brand:'Jordan',      name:'Air Jordan 1 Mid Chicago',                 price:145000,  old:180000,  rating:4.9, rev:543,  badge:'hot'  },
  { id:49, cat:'shoes',     brand:'Vans',        name:'Vans Old Skool Classic Black',             price:32000,   old:42000,   rating:4.7, rev:1456, badge:'best' },
  { id:50, cat:'shoes',     brand:'Timberland',  name:'Timberland 6" Premium Boot Wheat',         price:85000,   old:110000,  rating:4.8, rev:789,  badge:'sale' },

  // ── BEAUTY (10) ──
  { id:51, cat:'beauty',    brand:"L'Oréal",    name:"L'Oréal Revitalift Triple Power Serum",   price:12500,   old:16000,   rating:4.7, rev:1243, badge:'best' },
  { id:52, cat:'beauty',    brand:'MAC',         name:'MAC Matte Lipstick Ruby Woo',              price:8500,    old:11000,   rating:4.8, rev:2341, badge:'hot'  },
  { id:53, cat:'beauty',    brand:'Fenty',       name:"Fenty Beauty Pro Filt'r Foundation",      price:15000,   old:19500,   rating:4.9, rev:1876, badge:'best' },
  { id:54, cat:'beauty',    brand:'Neutrogena',  name:'Neutrogena Vitamin C Brightening Wash',   price:5500,    old:null,    rating:4.6, rev:987,  badge:'new'  },
  { id:55, cat:'beauty',    brand:'Shea',        name:'Organic Raw Shea Butter Gift Set',        price:12000,   old:null,    rating:4.9, rev:665,  badge:'new'  },
  { id:56, cat:'beauty',    brand:'NYX',         name:'NYX Pro 40-Pan Eyeshadow Palette',        price:9800,    old:13000,   rating:4.7, rev:754,  badge:'sale' },
  { id:57, cat:'beauty',    brand:'Dove',        name:'Dove Glow Brightening Body Lotion',       price:4200,    old:null,    rating:4.6, rev:1876, badge:'best' },
  { id:58, cat:'beauty',    brand:'OGX',         name:'OGX Coconut Milk Shampoo 385ml',          price:5800,    old:7500,    rating:4.7, rev:987,  badge:'sale' },
  { id:59, cat:'beauty',    brand:'Versace',     name:'Versace Eros Pour Femme EDP 100ml',       price:28000,   old:36000,   rating:4.8, rev:543,  badge:'hot'  },
  { id:60, cat:'beauty',    brand:'Maybelline',  name:'Maybelline FitMe Matte Foundation',       price:6500,    old:8500,    rating:4.6, rev:1234, badge:'sale' },

  // ── HOME (10) ──
  { id:61, cat:'home',      brand:'IKEA',        name:'IKEA SÖDERHAMN 3-Seat Sofa Grey',         price:285000,  old:360000,  rating:4.7, rev:456,  badge:'sale' },
  { id:62, cat:'home',      brand:'IKEA',        name:'IKEA Solid Wood Dining Table Set 6',      price:195000,  old:240000,  rating:4.6, rev:312,  badge:'sale' },
  { id:63, cat:'home',      brand:'Decor',       name:'Rattan Wall Mirror 70cm Boho',            price:41000,   old:55000,   rating:4.6, rev:213,  badge:'new'  },
  { id:64, cat:'home',      brand:'EcoHome',     name:'Bamboo Kitchen Utensil Set 8-Piece',      price:8500,    old:null,    rating:4.7, rev:432,  badge:'new'  },
  { id:65, cat:'home',      brand:'Decor',       name:'Linen Throw Pillow Covers Set x4',        price:22000,   old:30000,   rating:4.7, rev:321,  badge:'sale' },
  { id:66, cat:'home',      brand:'Royal',       name:'Royal Cookware 12-Piece Stainless Set',   price:45000,   old:60000,   rating:4.7, rev:678,  badge:'best' },
  { id:67, cat:'home',      brand:'Decor',       name:'Velvet Blackout Curtains 2 Panels',       price:32000,   old:42000,   rating:4.6, rev:234,  badge:'sale' },
  { id:68, cat:'home',      brand:'IKEA',        name:'IKEA King Size Bed Frame with Storage',   price:185000,  old:230000,  rating:4.8, rev:289,  badge:'best' },
  { id:69, cat:'home',      brand:'Prayer',      name:'Luxury Silk Prayer Mat Green',            price:8500,    old:null,    rating:4.9, rev:876,  badge:'new'  },
  { id:70, cat:'home',      brand:'Office',      name:'Ergonomic Mesh Office Chair Black',       price:85000,   old:110000,  rating:4.7, rev:345,  badge:'sale' },

  // ── APPLIANCES (8) ──
  { id:71, cat:'appliances', brand:'Samsung',    name:'Samsung 55" QLED 4K Smart TV',            price:620000,  old:780000,  rating:4.8, rev:789,  badge:'hot'  },
  { id:72, cat:'appliances', brand:'Hisense',    name:'Hisense 1.5HP Split Inverter AC',         price:285000,  old:350000,  rating:4.7, rev:543,  badge:'sale' },
  { id:73, cat:'appliances', brand:'Samsung',    name:'Samsung Bespoke French Door Fridge',      price:890000,  old:1050000, rating:4.8, rev:234,  badge:'best' },
  { id:74, cat:'appliances', brand:'Dyson',      name:'Dyson V15 Detect Cordless Vacuum',        price:380000,  old:460000,  rating:4.9, rev:456,  badge:'best' },
  { id:75, cat:'appliances', brand:'LG',         name:'LG 7KG Front Load Washing Machine',       price:420000,  old:520000,  rating:4.7, rev:312,  badge:'sale' },
  { id:76, cat:'appliances', brand:'Philips',    name:'Philips Flip and Juice Pro Blender',      price:48000,   old:62000,   rating:4.6, rev:567,  badge:'new'  },
  { id:77, cat:'appliances', brand:'Thermocool', name:'Thermocool 3.2CF Chest Freezer',          price:145000,  old:180000,  rating:4.7, rev:389,  badge:'sale' },
  { id:78, cat:'appliances', brand:'Scanfrost',  name:'Scanfrost 4-Burner Gas Cooker',           price:95000,   old:120000,  rating:4.6, rev:456,  badge:'best' },

  // ── SPORTS (8) ──
  { id:79, cat:'sports',    brand:'Nike',        name:'Nike Dri-FIT Training T-Shirt',           price:22000,   old:28000,   rating:4.7, rev:1234, badge:'best' },
  { id:80, cat:'sports',    brand:'Adidas',      name:'Adidas Ultraboost 22 Running Shoe',       price:98000,   old:125000,  rating:4.8, rev:876,  badge:'hot'  },
  { id:81, cat:'sports',    brand:'Nike',        name:'Premium Non-Slip Yoga Mat 6mm',           price:28000,   old:38000,   rating:4.7, rev:567,  badge:'sale' },
  { id:82, cat:'sports',    brand:'Wilson',      name:'Wilson Premier Size 5 Football',          price:18500,   old:null,    rating:4.7, rev:432,  badge:'new'  },
  { id:83, cat:'sports',    brand:'Adidas',      name:'Adidas World Cup 2026 Soccer Ball',       price:22000,   old:28000,   rating:4.8, rev:654,  badge:'new'  },
  { id:84, cat:'sports',    brand:'Gym',         name:'Adjustable Dumbbell Set 5-30kg',          price:85000,   old:105000,  rating:4.8, rev:345,  badge:'best' },
  { id:85, cat:'sports',    brand:'Nike',        name:"Nike Men's Running Shorts Dry-Fit",       price:15000,   old:20000,   rating:4.6, rev:789,  badge:'sale' },
  { id:86, cat:'sports',    brand:'Cycle',       name:'Mountain Bike 26" 21-Speed Steel',        price:145000,  old:180000,  rating:4.6, rev:213,  badge:'new'  },

  // ── FOOD (10) ──
  { id:87, cat:'food',      brand:'Indomie',     name:'Indomie Instant Noodles Box 40-Pack',     price:9800,    old:12000,   rating:4.8, rev:3421, badge:'best' },
  { id:88, cat:'food',      brand:'Nescafé',    name:'Nescafé Gold Classic Instant Coffee',    price:7500,    old:9000,    rating:4.7, rev:1654, badge:'sale' },
  { id:89, cat:'food',      brand:'Nestlé',     name:'Milo Chocolate Malt Drink 1kg Tin',      price:8800,    old:null,    rating:4.8, rev:2198, badge:'new'  },
  { id:90, cat:'food',      brand:'Nature',      name:'Herbal Tea Wellness Bundle 30-Cup',       price:9500,    old:null,    rating:4.9, rev:765,  badge:'best' },
  { id:91, cat:'food',      brand:'Dangote',     name:'Dangote Pasta 500g Pack of 12',           price:8200,    old:10000,   rating:4.6, rev:1123, badge:'sale' },
  { id:92, cat:'food',      brand:'Golden',      name:'Golden Morn Maize Cereal 800g',           price:4500,    old:null,    rating:4.7, rev:987,  badge:'new'  },
  { id:93, cat:'food',      brand:'Royco',       name:'Royco Chicken Seasoning Cubes 50-Pack',   price:2800,    old:null,    rating:4.8, rev:2341, badge:'best' },
  { id:94, cat:'food',      brand:'Cadbury',     name:'Cadbury Bournvita 900g Promo Pack',       price:6500,    old:8000,    rating:4.7, rev:1456, badge:'sale' },
  { id:95, cat:'food',      brand:'Peak',        name:'Peak Full Cream Evaporated Milk x24',     price:7800,    old:9500,    rating:4.8, rev:876,  badge:'best' },
  { id:96, cat:'food',      brand:'TomTom',      name:'TomTom Candy and Ribena Combo Bulk',      price:3500,    old:null,    rating:4.5, rev:654,  badge:'new'  },

  // ── BOOKS (8) ──
  { id:97,  cat:'books',    brand:'Penguin',     name:'Atomic Habits by James Clear',            price:5500,    old:7000,    rating:4.9, rev:4512, badge:'best' },
  { id:98,  cat:'books',    brand:'Penguin',     name:'Rich Dad Poor Dad by Kiyosaki',           price:4500,    old:6000,    rating:4.8, rev:3876, badge:'best' },
  { id:99,  cat:'books',    brand:'Chinua',      name:'Things Fall Apart by Chinua Achebe',      price:3500,    old:null,    rating:4.9, rev:2341, badge:'new'  },
  { id:100, cat:'books',    brand:'Oxford',      name:"Oxford Advanced Learner's Dict 10th",     price:12000,   old:15000,   rating:4.8, rev:1234, badge:'sale' },
  { id:101, cat:'books',    brand:'Penguin',     name:'48 Laws of Power by Robert Greene',       price:5000,    old:6500,    rating:4.8, rev:2876, badge:'best' },
  { id:102, cat:'books',    brand:'Simon',       name:'Think and Grow Rich by Napoleon Hill',    price:4000,    old:null,    rating:4.9, rev:3241, badge:'best' },
  { id:103, cat:'books',    brand:'NECO',        name:'NECO and WAEC Past Questions Bundle 2025',price:8500,    old:11000,   rating:4.7, rev:1876, badge:'sale' },
  { id:104, cat:'books',    brand:'Wole',        name:'Season of Anomie by Wole Soyinka',        price:3800,    old:null,    rating:4.8, rev:987,  badge:'new'  },

  // ── GAMING (10) ──
  { id:105, cat:'gaming',   brand:'Sony',        name:'Sony PlayStation 5 Console + Controller', price:750000,  old:890000,  rating:4.9, rev:1876, badge:'hot'  },
  { id:106, cat:'gaming',   brand:'SteelSeries', name:'SteelSeries Apex 5 Mech Keyboard',        price:78000,   old:98000,   rating:4.7, rev:543,  badge:'sale' },
  { id:107, cat:'gaming',   brand:'Sony',        name:'WH-1000XM5 Noise-Cancelling Headset',     price:195000,  old:245000,  rating:4.9, rev:2187, badge:'best' },
  { id:108, cat:'gaming',   brand:'JBL',         name:'JBL Pulse 5 Wireless Party Speaker',      price:95000,   old:120000,  rating:4.8, rev:876,  badge:'new'  },
  { id:109, cat:'gaming',   brand:'Apple',       name:'AirPods Pro 2nd Gen MagSafe USB-C',       price:185000,  old:220000,  rating:4.9, rev:2431, badge:'hot'  },
  { id:110, cat:'gaming',   brand:'Razer',       name:'Razer Kraken V3 X Gaming Headset',        price:58000,   old:72000,   rating:4.7, rev:432,  badge:'new'  },
  { id:111, cat:'gaming',   brand:'Logitech',    name:'Logitech G502 HERO Gaming Mouse',         price:32000,   old:42000,   rating:4.8, rev:876,  badge:'sale' },
  { id:112, cat:'gaming',   brand:'Xbox',        name:'Xbox Series X 1TB Console',               price:720000,  old:850000,  rating:4.8, rev:987,  badge:'hot'  },
  { id:113, cat:'gaming',   brand:'LG',          name:'LG UltraGear 27" 165Hz Gaming Monitor',   price:280000,  old:340000,  rating:4.8, rev:345,  badge:'best' },
  { id:114, cat:'gaming',   brand:'Chair',       name:'DXRacer Formula Series Gaming Chair',     price:185000,  old:230000,  rating:4.7, rev:234,  badge:'sale' },

  // ── KIDS (8) ──
  { id:115, cat:'kids',     brand:'LEGO',        name:'LEGO Classic Creative Bricks 1500pc',     price:45000,   old:58000,   rating:4.9, rev:1234, badge:'best' },
  { id:116, cat:'kids',     brand:'Mattel',      name:'Barbie Dreamhouse 3-Story Playset',       price:72000,   old:92000,   rating:4.8, rev:876,  badge:'hot'  },
  { id:117, cat:'kids',     brand:'Edu',         name:'Nigerian Story Books Bundle Set x10',     price:12000,   old:null,    rating:4.9, rev:654,  badge:'new'  },
  { id:118, cat:'kids',     brand:'LEGO',        name:'LEGO Technic Bugatti Chiron 3599pc',      price:125000,  old:160000,  rating:4.9, rev:456,  badge:'hot'  },
  { id:119, cat:'kids',     brand:'Edu',         name:'Wooden Educational Blocks 100pcs',        price:15000,   old:20000,   rating:4.7, rev:543,  badge:'new'  },
  { id:120, cat:'kids',     brand:'JanSport',    name:'JanSport Kids School Backpack Pink',      price:22000,   old:28000,   rating:4.6, rev:789,  badge:'sale' },
  { id:121, cat:'kids',     brand:'Remote',      name:'Remote Control Monster Truck 1:12',       price:18000,   old:24000,   rating:4.6, rev:432,  badge:'new'  },
  { id:122, cat:'kids',     brand:'Baby',        name:'Newborn Starter Romper Set 6-Piece',      price:9500,    old:12500,   rating:4.8, rev:1234, badge:'new'  },
];

const VENDORS = [
  { name:'Lagos Style Co.',  tag:'Fashion & Apparel',     prods:248, rating:4.9, revs:'4.3K', cover:'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=70', avatar:'https://images.unsplash.com/photo-1542323228966-9876df0c98cc?w=120&q=70' },
  { name:'TechHub Nigeria',  tag:'Phones & Electronics',  prods:512, rating:4.8, revs:'8.1K', cover:'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&q=70', avatar:'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=120&q=70' },
  { name:'Afro Crafts',      tag:'Handmade & Culture',    prods:89,  rating:4.7, revs:'2.1K', cover:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=70', avatar:'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=120&q=70' },
  { name:'Glow & Co.',       tag:'Beauty & Skincare',     prods:324, rating:4.9, revs:'6.2K', cover:'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&q=70', avatar:'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=120&q=70' },
  { name:'EcoHome NG',       tag:'Home & Living',         prods:198, rating:4.7, revs:'1.8K', cover:'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=70', avatar:'https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?w=120&q=70' },
  { name:'FitLife Store',    tag:'Sports & Fitness',      prods:156, rating:4.6, revs:'3.4K', cover:'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&q=70', avatar:'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=120&q=70' },
  { name:'PowerTech NG',     tag:'Appliances & Power',    prods:134, rating:4.8, revs:'2.6K', cover:'https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=400&q=70', avatar:'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&q=70' },
  { name:'Edu Africa',       tag:'Books & Learning',      prods:412, rating:4.9, revs:'5.7K', cover:'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&q=70', avatar:'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=120&q=70' },
];

const FEATURES = [
  { icon:'🚀', title:'Same-Day Delivery',    desc:'Lagos orders before 12pm arrive same day.',              img:'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&q=70' },
  { icon:'🔒', title:'Secure Checkout',      desc:'Paystack, Flutterwave, PayPal, USSD & Bank Transfer.',  img:'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&q=70' },
  { icon:'🔄', title:'30-Day Returns',       desc:'Not satisfied? Return anything within 30 days, free.',  img:'https://images.unsplash.com/photo-1607082349566-187342175e2f?w=400&q=70' },
  { icon:'⭐', title:'Verified Sellers',     desc:'Every vendor is vetted. Real reviews, real people.',    img:'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&q=70' },
  { icon:'🎁', title:'Weekly Flash Sales',   desc:'Coupon codes and member-only deals every week.',        img:'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=400&q=70' },
  { icon:'📞', title:'24/7 Support',         desc:'Human agents via chat, call or email anytime.',         img:'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&q=70' },
  { icon:'🏆', title:'Quality Promise',      desc:'ShopRin guarantee on every single product.',            img:'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=400&q=70' },
  { icon:'🌍', title:'Nationwide Shipping',  desc:'All 36 states + FCT with live order tracking.',         img:'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400&q=70' },
];


// ─────────────────────────────────────────────
// STATE
// ─────────────────────────────────────────────
let userProducts = JSON.parse(localStorage.getItem('sr-uprods') || '[]');
const ALL_PRODUCTS = () => [...BASE_PRODUCTS, ...userProducts];

let cart     = JSON.parse(localStorage.getItem('sr-cart')  || '[]');
let wl       = JSON.parse(localStorage.getItem('sr-wl')    || '[]');
let user     = JSON.parse(localStorage.getItem('sr-user')  || 'null');
let activeCat = 'all';
let curPage   = 1;
const PER_PAGE = 20;
let visible   = [];
let coStep    = 1;

const sv   = () => { localStorage.setItem('sr-cart',   JSON.stringify(cart));        ucb(); };
const svWL = () =>   localStorage.setItem('sr-wl',     JSON.stringify(wl));
const svU  = () =>   localStorage.setItem('sr-user',   JSON.stringify(user));
const svUP = () =>   localStorage.setItem('sr-uprods', JSON.stringify(userProducts));

function ucb() {
  const n = cart.reduce((s, i) => s + i.qty, 0);
  document.getElementById('cdot').textContent = n;
  document.getElementById('fcc').textContent  = n;
}

// ─────────────────────────────────────────────
// TOAST
// ─────────────────────────────────────────────
function toast(msg, type = 'info') {
  const icons = { success: '✅', error: '❌', info: '💡' };
  const el = document.createElement('div');
  el.className = `t t-${type[0]}`;
  el.innerHTML = `<span>${icons[type] || '💡'}</span><span>${msg}</span>`;
  document.getElementById('toasts').appendChild(el);
  requestAnimationFrame(() => requestAnimationFrame(() => el.classList.add('show')));
  setTimeout(() => { el.classList.remove('show'); setTimeout(() => el.remove(), 340); }, 3500);
}

// ─────────────────────────────────────────────
// THEME
// ─────────────────────────────────────────────
let dark = localStorage.getItem('sr-th') === 'dark';
function applyTheme() {
  document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  document.getElementById('tbtn').textContent = dark ? '☀️' : '🌙';
}
function tgTheme() {
  dark = !dark;
  localStorage.setItem('sr-th', dark ? 'dark' : 'light');
  applyTheme();
}
applyTheme();

// ─────────────────────────────────────────────
// SCROLL & NAV HELPERS
// ─────────────────────────────────────────────
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  document.getElementById('nav').classList.toggle('sc', y > 26);
  document.getElementById('sct').classList.toggle('vis', y > 400);
  document.getElementById('fcb').classList.toggle('vis', y > 600 && cart.length > 0);
});

function gs(id) { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
function tgMob() { document.getElementById('mn').classList.toggle('op'); }
function cm()    { document.getElementById('mn').classList.remove('op'); }

// ─────────────────────────────────────────────
// MODALS
// ─────────────────────────────────────────────
function openOv(id)  { document.getElementById(id).classList.add('op');    }
function closeOv(id) { document.getElementById(id).classList.remove('op'); }

document.addEventListener('click', e => {
  if (e.target.classList.contains('ov')) e.target.classList.remove('op');
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') document.querySelectorAll('.ov.op').forEach(o => o.classList.remove('op'));
});

// ─────────────────────────────────────────────
// AUTH
// ─────────────────────────────────────────────
function openAuth(tab) { swAuth(tab); openOv('auth-ov'); }
function swAuth(tab) {
  document.getElementById('lf').classList.toggle('hidden', tab !== 'login');
  document.getElementById('rf').classList.toggle('hidden', tab !== 'register');
  document.getElementById('lt').classList.toggle('act', tab === 'login');
  document.getElementById('rt').classList.toggle('act', tab === 'register');
  document.getElementById('auth-title').textContent = tab === 'login' ? 'Welcome Back' : 'Create Account';
}
function doLogin() {
  const e = document.getElementById('le').value;
  const p = document.getElementById('lp').value;
  if (!e || !p) { toast('Please fill all fields', 'error'); return; }
  user = { name: e.split('@')[0], email: e, type: 'customer' };
  svU(); closeOv('auth-ov');
  toast(`👋 Welcome back, ${user.name}!`, 'success');
}
function doReg() {
  const fn = document.getElementById('rfn').value;
  const ln = document.getElementById('rln').value;
  const e  = document.getElementById('re').value;
  const p  = document.getElementById('rp').value;
  if (!fn || !ln || !e || !p) { toast('Please fill all fields', 'error'); return; }
  if (p.length < 8) { toast('Password must be at least 8 characters', 'error'); return; }
  user = { name: `${fn} ${ln}`, email: e, type: document.getElementById('rtype').value };
  svU(); closeOv('auth-ov');
  toast(`🎉 Welcome, ${fn}! Account created.`, 'success');
}

// ─────────────────────────────────────────────
// CART
// ─────────────────────────────────────────────
function addToCart(pid) {
  const p  = ALL_PRODUCTS().find(x => x.id === pid); if (!p) return;
  const ex = cart.find(x => x.id === pid);
  if (ex) { ex.qty++; toast(`Updated qty: ${p.name}`); }
  else    { cart.push({ ...p, qty: 1 }); toast(`🛒 Added: ${p.name}`, 'success'); }
  sv();
}
function remCart(pid) {
  cart = cart.filter(x => x.id !== pid); sv();
  if (document.getElementById('cart-ov').classList.contains('op')) renderCart();
}
function updQty(pid, d) {
  const it = cart.find(x => x.id === pid); if (!it) return;
  it.qty = Math.max(1, it.qty + d); sv();
  if (document.getElementById('cart-ov').classList.contains('op')) renderCart();
}

function openCart() { renderCart(); openOv('cart-ov'); }
function renderCart() {
  const el = document.getElementById('cbody');
  if (!cart.length) {
    el.innerHTML = `<div style="text-align:center;padding:30px 10px">
      <div style="font-size:2.8rem;margin-bottom:11px">🛒</div>
      <h3 style="color:var(--text);margin-bottom:6px">Cart is empty</h3>
      <p style="color:var(--text2);font-size:.8rem;margin-bottom:16px">Add some amazing products!</p>
      <button class="btn btn-p" onclick="closeOv('cart-ov');gs('shop')">Browse Products</button>
    </div>`;
    return;
  }
  const sub = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const del = sub >= 15000 ? 0 : 1500;
  const tot = sub + del;
  el.innerHTML = `
    <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:18px">
      ${cart.map(i => `
        <div class="ci2">
          <div class="cim"><img src="${i.img || poolImg(i.cat, i.id)}" alt="${i.name}" onerror="this.style.display='none'"></div>
          <div style="flex:1">
            <div class="cin">${i.name}</div>
            <div class="cip">₦${(i.price * i.qty).toLocaleString()}</div>
            <div class="ciq">
              <button class="qb" onclick="updQty(${i.id},-1)">−</button>
              <span class="qv">${i.qty}</span>
              <button class="qb" onclick="updQty(${i.id},1)">+</button>
            </div>
          </div>
          <button class="cdl" onclick="remCart(${i.id})">🗑</button>
        </div>`).join('')}
    </div>
    <div class="csum">
      <div class="cr2"><span>Subtotal</span><span>₦${sub.toLocaleString()}</span></div>
      <div class="cr2"><span>Delivery</span><span>${del === 0 ? '<span style="color:var(--green);font-weight:700">FREE</span>' : '₦' + del.toLocaleString()}</span></div>
      <div class="cr2 tot"><span>Total</span><span>₦${tot.toLocaleString()}</span></div>
    </div>
    <div style="display:flex;gap:9px;margin-top:11px">
      <button class="btn btn-o" style="flex:1" onclick="closeOv('cart-ov')">Keep Shopping</button>
      <button class="btn btn-p" style="flex:1" onclick="closeOv('cart-ov');openCO()">Checkout →</button>
    </div>`;
}

// ─────────────────────────────────────────────
// WISHLIST
// ─────────────────────────────────────────────
function tgWL(pid, btn) {
  const p   = ALL_PRODUCTS().find(x => x.id === pid); if (!p) return;
  const idx = wl.findIndex(x => x.id === pid);
  if (idx > -1) {
    wl.splice(idx, 1);
    if (btn) { btn.classList.remove('on'); btn.textContent = '♡'; }
    toast('Removed from wishlist', 'info');
  } else {
    wl.push(p);
    if (btn) { btn.classList.add('on'); btn.textContent = '❤️'; }
    toast(`❤️ Saved: ${p.name}`, 'success');
  }
  svWL();
}
function openWL() { renderWL(); openOv('wl-ov'); }
function renderWL() {
  const el = document.getElementById('wlbody');
  if (!wl.length) {
    el.innerHTML = `<div style="text-align:center;padding:28px 10px">
      <div style="font-size:2.6rem;margin-bottom:10px">❤️</div>
      <h3 style="color:var(--text);margin-bottom:5px">Wishlist is empty</h3>
      <p style="color:var(--text2);font-size:.79rem;margin-bottom:14px">Save products you love!</p>
      <button class="btn btn-p" onclick="closeOv('wl-ov');gs('shop')">Browse Products</button>
    </div>`;
    return;
  }
  el.innerHTML = `
    <div style="display:flex;flex-direction:column;gap:9px">
      ${wl.map(i => `
        <div class="wli">
          <div class="wlim"><img src="${i.img || poolImg(i.cat, i.id)}" alt="${i.name}"></div>
          <div style="flex:1">
            <div class="wln">${i.name}</div>
            <div class="wlp">₦${i.price.toLocaleString()}</div>
          </div>
          <button class="btn btn-p btn-sm" onclick="addToCart(${i.id})">Add</button>
          <button style="background:none;border:none;cursor:pointer;color:var(--text3);font-size:.88rem;padding:3px"
            onclick="tgWL(${i.id});renderWL()">🗑</button>
        </div>`).join('')}
    </div>
    <button class="btn btn-p" style="width:100%;margin-top:11px"
      onclick="wl.forEach(i=>addToCart(i.id));closeOv('wl-ov');openCart()">
      Add All to Cart 🛒
    </button>`;
}

// ─────────────────────────────────────────────
// PRODUCT DETAIL
// ─────────────────────────────────────────────
function openPD(pid) {
  const p = ALL_PRODUCTS().find(x => x.id === pid); if (!p) return;
  const w    = wl.some(x => x.id === pid);
  const disc = p.old ? Math.round((1 - p.price / p.old) * 100) : 0;
  const pimg = p.img || poolImg(p.cat, pid);
  window._pdq = 1;

  document.getElementById('pdbody').innerHTML = `
    <div class="pdg">
      <div class="pdi"><img src="${pimg}" alt="${p.name}" onerror="this.style.background='var(--bg3)'"></div>
      <div>
        <div class="pdbr">${p.brand}</div>
        <h2 class="pdn">${p.name}</h2>
        <div class="pdr">
          <span class="stars">${'★'.repeat(Math.floor(p.rating))}</span>
          <strong style="font-size:.82rem;color:var(--text)">${p.rating}</strong>
          <span style="font-size:.75rem;color:var(--text3)">(${p.rev.toLocaleString()} reviews)</span>
        </div>
        <div class="pdp">
          <span class="pdm2">₦${p.price.toLocaleString()}</span>
          ${p.old ? `<span class="pdo">₦${p.old.toLocaleString()}</span>
          <span style="background:var(--accent);color:#fff;border-radius:99px;padding:2px 8px;font-size:.65rem;font-weight:700">${disc}% OFF</span>` : ''}
        </div>
        <p class="pdd">
          Premium <strong>${p.name}</strong> by <strong>${p.brand}</strong>.
          Sourced from authorized suppliers with original packaging, warranty card, and all accessories.
          ${p.id % 2 === 0 ? 'Includes 6-month ShopRin quality guarantee.' : 'Nigerian after-sales support included.'}
          ${p.desc ? '<br><br>' + p.desc : ''}
        </p>
        <div class="pdqr">
          <div class="pdq">
            <button class="pqb" onclick="window._pdq=Math.max(1,(window._pdq||1)-1);document.getElementById('pqv').textContent=window._pdq">−</button>
            <span id="pqv" class="pqv">1</span>
            <button class="pqb" onclick="window._pdq=(window._pdq||1)+1;document.getElementById('pqv').textContent=window._pdq">+</button>
          </div>
          <button class="btn btn-p" style="flex:1"
            onclick="for(let i=0;i<(window._pdq||1);i++)addToCart(${p.id});closeOv('pdm')">
            🛒 Add to Cart
          </button>
          <button class="bico" id="pdwb"
            style="${w ? 'border-color:#d63030;color:#d63030' : ''}"
            onclick="tgWL(${p.id},this)">${w ? '❤️' : '♡'}</button>
        </div>
        <div class="pdtags">
          ${['✓ Free delivery over ₦15K','✓ 30-day returns','✓ Authentic product','✓ Warranty included']
            .map(t => `<span class="pdtag">${t}</span>`).join('')}
        </div>
      </div>
    </div>`;
  openOv('pdm');
}

// ─────────────────────────────────────────────
// CHECKOUT
// ─────────────────────────────────────────────
function openCO() {
  if (!cart.length) { toast('Your cart is empty!', 'error'); return; }
  coStep = 1; renderCO(); openOv('co-ov');
}
function renderCO() {
  const sub = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const del = sub >= 15000 ? 0 : 1500;
  const tot = sub + del;
  const sl  = ['Details', 'Delivery', 'Payment', 'Done'];

  const stepsHtml = sl.map((s, i) => {
    const n   = i + 1;
    const cls = n < coStep ? 'done' : n === coStep ? 'act' : '';
    return `<div class="coss ${cls}">
      <div class="cosn">${n < coStep ? '✓' : n}</div>
      <div class="cosl">${s}</div>
      ${i < 3 ? '<div class="cosl2"></div>' : ''}
    </div>`;
  }).join('');

  const sumHtml = `
    <div class="cosm">
      <div style="font-weight:700;font-size:.84rem;color:var(--text);margin-bottom:8px">Order Summary</div>
      ${cart.map(i => `<div class="cosr"><span>${i.name} ×${i.qty}</span><span>₦${(i.price * i.qty).toLocaleString()}</span></div>`).join('')}
      <div class="cosr"><span>Delivery</span><span>${del === 0 ? 'FREE' : '₦' + del.toLocaleString()}</span></div>
      <div class="cosr tot"><span>Total</span><span>₦${tot.toLocaleString()}</span></div>
    </div>`;

  const s1 = coStep === 1 ? `<div class="csc act">
    ${sumHtml}
    <div class="fg2"><label>Full Name</label><input type="text" placeholder="Full Name" value="${user ? user.name : ''}"></div>
    <div class="fg2"><label>Email</label><input type="email" placeholder="Email" value="${user ? user.email : ''}"></div>
    <div class="fg2"><label>Phone</label><input type="tel" placeholder="+234 800 000 0000"></div>
    <button class="btn btn-p" style="width:100%" onclick="coStep=2;renderCO()">Continue →</button>
  </div>` : '<div class="csc"></div>';

  const s2 = coStep === 2 ? `<div class="csc act">
    ${sumHtml}
    <div class="fg2"><label>Street Address</label><input type="text" placeholder="House No., Street Name"></div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:11px">
      <div class="fg2"><label>State</label>
        <select><option>Lagos</option><option>Abuja</option><option>Rivers</option>
        <option>Kano</option><option>Oyo</option><option>Enugu</option><option>Delta</option></select>
      </div>
      <div class="fg2"><label>City</label><input type="text" placeholder="City"></div>
    </div>
    <div style="display:flex;gap:8px">
      <button class="btn btn-o" style="flex:1" onclick="coStep=1;renderCO()">← Back</button>
      <button class="btn btn-p" style="flex:1" onclick="coStep=3;renderCO()">Continue →</button>
    </div>
  </div>` : '<div class="csc"></div>';

  const s3 = coStep === 3 ? `<div class="csc act">
    ${sumHtml}
    <div style="font-weight:700;font-size:.84rem;color:var(--text);margin-bottom:9px">Payment Method</div>
    <div class="pmg">
      <div class="pm sel" onclick="this.closest('.pmg').querySelectorAll('.pm').forEach(x=>x.classList.remove('sel'));this.classList.add('sel')">💳 Paystack</div>
      <div class="pm" onclick="this.closest('.pmg').querySelectorAll('.pm').forEach(x=>x.classList.remove('sel'));this.classList.add('sel')">🦋 Flutterwave</div>
      <div class="pm" onclick="this.closest('.pmg').querySelectorAll('.pm').forEach(x=>x.classList.remove('sel'));this.classList.add('sel')">💸 PayPal</div>
      <div class="pm" onclick="this.closest('.pmg').querySelectorAll('.pm').forEach(x=>x.classList.remove('sel'));this.classList.add('sel')">🏧 Bank Transfer</div>
    </div>
    <div class="fg2">
      <label>Coupon Code (optional)</label>
      <div style="display:flex;gap:7px">
        <input type="text" id="coup" placeholder="e.g. SHOPRIN10">
        <button class="btn btn-o btn-sm" onclick="applyCoup()">Apply</button>
      </div>
    </div>
    <div style="display:flex;gap:8px">
      <button class="btn btn-o" style="flex:1" onclick="coStep=2;renderCO()">← Back</button>
      <button class="btn btn-p" style="flex:1" onclick="placeOrder(${tot})">Pay ₦${tot.toLocaleString()} →</button>
    </div>
  </div>` : '<div class="csc"></div>';

  const oid = 'SHR' + Date.now().toString().slice(-8).toUpperCase();
  const s4 = coStep === 4 ? `<div class="csc act">
    <div class="oss">
      <span class="osi">🎉</span>
      <h3>Order Placed Successfully!</h3>
      <p>Thank you for shopping with ShopRin. Your order is confirmed and on its way to you.</p>
      <div class="osn">${oid}</div>
      <p style="margin-bottom:14px">A confirmation email has been sent to your inbox.</p>
      <div style="display:flex;gap:9px;justify-content:center;flex-wrap:wrap">
        <button class="btn btn-p" onclick="closeOv('co-ov');toast('Track order in your dashboard!','info')">Track Order</button>
        <button class="btn btn-o" onclick="closeOv('co-ov');gs('shop')">Continue Shopping</button>
      </div>
    </div>
  </div>` : '<div class="csc"></div>';

  document.getElementById('cobody').innerHTML = `<div class="cos">${stepsHtml}</div>${s1}${s2}${s3}${s4}`;
}

function applyCoup() {
  const c = document.getElementById('coup')?.value.trim().toUpperCase();
  const valid = ['SHOPRIN10', 'SAVE15', 'WELCOME20', 'NG25', 'NIGERIA'];
  valid.includes(c) ? toast('🎉 Coupon applied! Discount added.', 'success') : toast('Invalid code. Try SHOPRIN10!', 'error');
}
function placeOrder(total) {
  toast('Processing payment…', 'info');
  setTimeout(() => { cart = []; sv(); coStep = 4; renderCO(); toast('🎉 Payment successful!', 'success'); }, 2000);
}

// ─────────────────────────────────────────────
// SEARCH
// ─────────────────────────────────────────────
let stmr;
function hs(q) {
  clearTimeout(stmr);
  if (!q.trim()) return;
  stmr = setTimeout(() => { if (q.length > 1) openSR(q); }, 500);
}
function openSR(q) {
  if (!q.trim()) return;
  const res = ALL_PRODUCTS().filter(p =>
    p.name.toLowerCase().includes(q.toLowerCase()) ||
    p.brand.toLowerCase().includes(q.toLowerCase()) ||
    p.cat.includes(q.toLowerCase())
  );
  document.getElementById('srbody').innerHTML = `
    <p style="font-size:.81rem;color:var(--text2);margin-bottom:11px">
      Found <strong>${res.length}</strong> result${res.length !== 1 ? 's' : ''} for "<strong>${q}</strong>"
    </p>
    <div style="display:flex;flex-direction:column;gap:7px">
      ${res.length ? res.slice(0, 10).map(p => `
        <div class="sri" onclick="closeOv('sr-ov');openPD(${p.id})">
          <div class="srim"><img src="${p.img || poolImg(p.cat, p.id)}" alt="${p.name}"></div>
          <div style="flex:1">
            <div class="srn">${p.name}</div>
            <div class="srp">₦${p.price.toLocaleString()}</div>
          </div>
          <button class="btn btn-p btn-sm"
            onclick="event.stopPropagation();addToCart(${p.id});toast('Added!','success')">Add</button>
        </div>`).join('')
      : '<div style="text-align:center;padding:18px;color:var(--text2)">No results. Try: iPhone, Nike, Indomie…</div>'}
    </div>`;
  openOv('sr-ov');
}

// ─────────────────────────────────────────────
// NOTIFICATIONS
// ─────────────────────────────────────────────
const NOTIFS = [
  '🔥 Flash Sale: 65% off selected phones — 2 hours left!',
  '📦 Your last order has been delivered!',
  '❤️ A wishlist item just went on sale!',
  '🏆 You earned a ShopRin Gold Badge!',
  '🎁 Use code SHOPRIN10 for 10% off your next order!',
  '📱 New Tecno Spark 30 Pro just listed — check it out!',
];
function showN() {
  toast(NOTIFS[Math.floor(Math.random() * NOTIFS.length)], 'info');
  document.getElementById('ndot').style.display = 'none';
}

// ─────────────────────────────────────────────
// FILTER / SORT / PAGINATE
// ─────────────────────────────────────────────
function setCat(id) {
  activeCat = id; curPage = 1;
  document.querySelectorAll('.ctab').forEach(t => t.classList.toggle('act', t.dataset.cat === id));
  document.getElementById('ssel').value = '';
  applyFilter();
}

function applyFilter(sortVal) {
  let base = activeCat === 'all' ? [...ALL_PRODUCTS()] : ALL_PRODUCTS().filter(p => p.cat === activeCat);
  const s  = sortVal || document.getElementById('ssel').value;
  if      (s === 'price-asc')  base.sort((a, b) => a.price - b.price);
  else if (s === 'price-desc') base.sort((a, b) => b.price - a.price);
  else if (s === 'rating')     base.sort((a, b) => b.rating - a.rating);
  else if (s === 'newest')     base.sort((a, b) => b.id - a.id);
  visible = base;
  renderPage();
}

function doSort(v) { curPage = 1; applyFilter(v); }

function renderPage() {
  const total = visible.length;
  const pages = Math.ceil(total / PER_PAGE);
  const start = (curPage - 1) * PER_PAGE;
  const end   = start + PER_PAGE;
  const slice = visible.slice(start, end);

  document.getElementById('tcnt').textContent =
    `Showing ${start + 1}–${Math.min(end, total)} of ${total} products`;

  document.getElementById('pgrid').innerHTML = slice.map((p, idx) => {
    const wi   = wl.some(x => x.id === p.id);
    const di   = p.old ? Math.round((1 - p.price / p.old) * 100) : 0;
    const pimg = p.img || poolImg(p.cat, start + idx);
    return `
      <div class="pc" onclick="openPD(${p.id})">
        <div class="pci">
          <img src="${pimg}" alt="${p.name}" loading="lazy" onerror="this.style.display='none'">
          <div class="pbdgs">
            ${p.badge ? `<span class="pbdg p${p.badge[0]}">${p.badge === 'sale' ? `-${di}%` : p.badge.toUpperCase()}</span>` : ''}
          </div>
          <button class="pwb ${wi ? 'on' : ''}"
            onclick="event.stopPropagation();tgWL(${p.id},this)">${wi ? '❤️' : '♡'}</button>
        </div>
        <div class="pcb">
          <div class="pcbr">${p.brand}</div>
          <div class="pcn">${p.name}</div>
          <div class="pcs">
            <span class="stars">${'★'.repeat(Math.floor(p.rating))}</span>
            <span class="rc">(${p.rev.toLocaleString()})</span>
          </div>
          <div class="ppr">
            <div>
              <span class="pp">₦${p.price.toLocaleString()}</span>
              ${p.old ? `<span class="pop"> ₦${p.old.toLocaleString()}</span>` : ''}
            </div>
            <button class="padd" onclick="event.stopPropagation();addToCart(${p.id})">+ Cart</button>
          </div>
        </div>
      </div>`;
  }).join('');

  // Pagination buttons
  let pgH = '';
  if (pages > 1) {
    if (curPage > 1) pgH += `<button class="pgbtn" onclick="curPage--;renderPage()">← Prev</button>`;
    for (let i = 1; i <= pages; i++) {
      if (i === 1 || i === pages || Math.abs(i - curPage) <= 1) {
        pgH += `<button class="pgbtn${i === curPage ? ' act' : ''}" onclick="curPage=${i};renderPage()">${i}</button>`;
      } else if (Math.abs(i - curPage) === 2) {
        pgH += `<span class="pgn-dots">…</span>`;
      }
    }
    if (curPage < pages) pgH += `<button class="pgbtn" onclick="curPage++;renderPage()">Next →</button>`;
  }
  document.getElementById('pgn').innerHTML = pgH;
}

// ─────────────────────────────────────────────
// VENDOR PRODUCT SUBMISSION
// ─────────────────────────────────────────────
function submitProduct() {
  const name   = document.getElementById('up-name').value.trim();
  const brand  = document.getElementById('up-brand').value.trim();
  const cat    = document.getElementById('up-cat').value;
  const price  = parseInt(document.getElementById('up-price').value);
  const old    = parseInt(document.getElementById('up-old').value) || null;
  const desc   = document.getElementById('up-desc').value.trim();
  const vendor = document.getElementById('up-vendor').value.trim();
  const imgUrl = document.getElementById('up-img').value.trim();

  if (!name || !brand || !cat || !price || !vendor) {
    toast('Please fill all required fields (*)', 'error'); return;
  }

  const newProd = {
    id:          Date.now(),
    cat, brand, name, price, old,
    rating:      4.5,
    rev:         0,
    badge:       'new',
    vendor, desc,
    img:         imgUrl || poolImg(cat, Math.floor(Math.random() * 10)),
    isUserListed: true,
    listedAt:    new Date().toLocaleDateString(),
  };

  userProducts.unshift(newProd);
  svUP();

  // Clear form
  ['up-name','up-brand','up-price','up-old','up-desc','up-vendor','up-img']
    .forEach(id => { document.getElementById(id).value = ''; });
  document.getElementById('up-cat').value = '';

  toast('🚀 Product listed successfully! Now live on ShopRin.', 'success');
  applyFilter();
  renderRecentlyAdded();
}

function renderRecentlyAdded() {
  const el = document.getElementById('ra-list');
  if (!userProducts.length) {
    el.innerHTML = '<div class="ra-empty">No products listed yet. Be the first!</div>';
    return;
  }
  el.innerHTML = userProducts.slice(0, 5).map(p => `
    <div class="ra-item">
      <div class="ra-img">
        <img src="${p.img}" alt="${p.name}" onerror="this.style.background='var(--bg3)'">
      </div>
      <div class="ra-info">
        <div class="ra-n">${p.name}</div>
        <div class="ra-p">₦${p.price.toLocaleString()}</div>
      </div>
      <span class="ra-badge">NEW</span>
    </div>`).join('');
}

// ─────────────────────────────────────────────
// NEWSLETTER
// ─────────────────────────────────────────────
function sub() {
  const e = document.getElementById('nle').value;
  if (!e || !e.includes('@')) { toast('Please enter a valid email', 'error'); return; }
  document.getElementById('nle').value = '';
  toast(`🎉 Subscribed! Welcome, ${e.split('@')[0]}!`, 'success');
}

// ─────────────────────────────────────────────
// RENDER ALL SECTIONS
// ─────────────────────────────────────────────
function renderAll() {
  // Brand strip
  document.getElementById('bstrip').innerHTML = BRANDS.map(b =>
    `<div class="bchip" onclick="filterByBrand('${b.name}')">${b.e} ${b.name}</div>`
  ).join('');

  // Category showcase tiles
  const catCounts = {};
  ALL_PRODUCTS().forEach(p => { catCounts[p.cat] = (catCounts[p.cat] || 0) + 1; });

  document.getElementById('csgrid').innerHTML = CATS.map(c => `
    <div class="ctile" onclick="setCat('${c.id}');gs('shop');toast('Browsing ${c.label}','info')">
      <img src="${c.img}" alt="${c.label}" loading="lazy">
      <div class="ctov"></div>
      <div class="ctlbl">
        <div class="ctn">${c.label}</div>
        <div class="ctc">${(catCounts[c.id] || 0)} products</div>
      </div>
    </div>`).join('');

  // Category tab row
  const tabs = [{ id: 'all', label: 'All' }, ...CATS];
  document.getElementById('tabrow').innerHTML = tabs.map(c =>
    `<button class="ctab${c.id === 'all' ? ' act' : ''}" data-cat="${c.id}" onclick="setCat('${c.id}')">${c.label}</button>`
  ).join('');

  // Vendors
  document.getElementById('vgrid').innerHTML = VENDORS.map(v => `
    <div class="vc" onclick="toast('Opening ${v.name} store…','info')">
      <div class="vcc"><img src="${v.cover}" alt="${v.name}" loading="lazy"></div>
      <div class="vcb">
        <div class="vav"><img src="${v.avatar}" alt="${v.name}" loading="lazy"></div>
        <div class="vn">${v.name}</div>
        <div class="vtag">${v.tag}</div>
        <div class="vm"><span>📦 ${v.prods}</span><span>⭐ ${v.rating}</span><span>💬 ${v.revs}</span></div>
      </div>
    </div>`).join('');

  // Features
  document.getElementById('fgrid').innerHTML = FEATURES.map(f => `
    <div class="fcard">
      <div class="fi"><img src="${f.img}" alt="${f.title}" loading="lazy"></div>
      <div class="fb">
        <span class="ficon">${f.icon}</span>
        <div class="ftit">${f.title}</div>
        <p class="fdesc">${f.desc}</p>
      </div>
    </div>`).join('');

  
  // Products
  applyFilter();
  renderRecentlyAdded();
}

function filterByBrand(brand) {
  visible    = ALL_PRODUCTS().filter(p => p.brand === brand);
  activeCat  = 'all';
  curPage    = 1;
  document.querySelectorAll('.ctab').forEach(t => t.classList.toggle('act', t.dataset.cat === 'all'));
  renderPage();
  gs('shop');
  toast(`Showing all ${brand} products`, 'info');
}

// ─────────────────────────────────────────────
// INIT
// ─────────────────────────────────────────────
renderAll();
ucb();
if (user) setTimeout(() => toast(`👋 Welcome back, ${user.name.split(' ')[0]}!`, 'info'), 800);
else      setTimeout(() => toast('🛍 Welcome to ShopRin! Use SHOPRIN10 for 10% off!', 'info'), 1200);
