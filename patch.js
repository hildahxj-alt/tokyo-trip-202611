// Final timing corrections for concert days and arrival day.
if (!T.rate.currencyDefaultSet) {
  T.rate.mode = 'jpy';
  T.rate.currencyDefaultSet = true;
}
if (!document.getElementById('jpy-first-switch')) {
  const style = document.createElement('style');
  style.id = 'jpy-first-switch';
  style.textContent = '.currency-switch button[data-mode="jpy"]{order:-1}';
  document.head.append(style);
}
T.days[0].theme = '抵达 · 荻窪 · 吉祥寺';
T.days[0].reminder = '13:45 抵达成田 T2。先入住；若抵达荻窪后仍有体力，再去吉祥寺，不把第一天排满。';
T.days[0].points = ['Narita International Airport Terminal 2', '安心お宿 Woman Tokyo Ogikubo', 'Kichijoji Station'];
T.days[0].acts = [
  ['抵达后', '交通', '成田机场 T2 → 荻窪青旅', '13:45 落地；先完成入境、取行李与入住，不为了逛街赶路。'],
  ['晚上（弹性）', '咖啡', '但馬屋珈琲店 · 吉祥寺', 'Coppice 吉祥寺 B1F。平日最晚 19:00；若抵达荻窪后仍有体力再去，不作为必须完成的任务。']
];

T.days[2].theme = '编发 · 海鲜丼 · 演唱会';
T.days[2].reminder = '演唱会 18:00 开始。编发按舒服的时间约；两国民宿 15:00 正常入住，行李能否提前寄放以房东确认回复为准。未确认前，不把海鲜丼排进当天。';
T.days[2].points = ['安心お宿 Woman Tokyo Ogikubo', RY, 'Tokyo Dome'];
T.days[2].acts = [
  ['上午', '预约', '编发预约', '按舒服的时间安排，不为海鲜丼赶早。'],
  ['中午至下午', '住宿', '退房、前往两国', '正常入住为 15:00；提前寄放行李须等房东确认，未确认则携带行李或改用车站寄存。'],
  ['下午（弹性）', '提醒', '不安排海の幸 翔／啤酒专程', '当天以编发、行李交接与演唱会为主；海鲜丼另择时间。'],
  ['16:00左右', '交通', '两国 → 东京巨蛋', '预留换乘、步行、安检和找座位时间。'],
  ['18:00', '门票', '东京巨蛋演唱会', '第一场演唱会开始。']
];

if (!T.checklist.includes('填写 Visit Japan Web 日本入境手续（二维码）')) {
  T.checklist.splice(1, 0, '填写 Visit Japan Web 日本入境手续（二维码）');
}

T.days[3].reminder = 'chocoshoe 与 DARUMA STORE 都要留意闭店时间；Junie Moon 当天买完。若实际在银座购物，黑标 THE BAR 可顺路停 30–45 分钟；否则不绕路。';
T.days[4].reminder = '演唱会 16:30 开始；目标 15:00-15:20 抵达东京巨蛋，14:30 左右从活动区域出发。不为喝酒专程绕路。';

T.days[4].theme = 'Yuzu Lab · 御茶之水/神田 · 演唱会';
T.days[4].reminder = '演唱会 16:30 开始；目标 15:00-15:20 抵达东京巨蛋，14:30 左右从活动区域出发。';
T.days[4].points = [RY, 'Yuzu Lab Akihabara', 'Ochanomizu Station', 'Tokyo Dome'];
T.days[4].acts = [
  ['上午', '餐饮', 'Yuzu Lab 秋叶原店', '作为早午餐主线，不再重复安排午餐。'],
  ['中午', '散步', '秋叶原 → 御茶之水/神田', '安排书店、街区散步或咖啡；不强制回民宿。'],
  ['14:00左右', '餐饮', '东京巨蛋附近简单补充能量', '以轻食为主，避免影响进场。'],
  ['14:30左右', '交通', '前往东京巨蛋', '预留换乘、步行、安检和找座位时间。'],
  ['16:30', '门票', '东京巨蛋演唱会', '第二场演唱会开始。']
];

T.trip.cities = ['厦门／悉尼', '东京', '箱根', '东京', '厦门'];
const renderHome = home;
home = () => {
  renderHome();
  const route = document.querySelector('#home .route');
  if (route) route.innerHTML = T.trip.cities.map((x, i) => `<div><b>${String(i + 1).padStart(2, '0')}</b>${x}</div>`).join('');
};
const renderAll = all;
all = () => {
  renderAll();
  const route = document.querySelector('#home .route');
  if (route) route.innerHTML = T.trip.cities.map((x, i) => `<div><b>${String(i + 1).padStart(2, '0')}</b>${x}</div>`).join('');
};

if (!T.wishlist) T.wishlist = {
  restaurants: [
    {name: '但馬屋珈琲店 · 吉祥寺', area: '荻窪・吉祥寺', kind: '咖啡', note: '抵达日有体力时的弹性停靠。', hours: '平日 10:30–19:00（L.O. 18:30）／周末及节假日 10:30–20:00（L.O. 19:30）', closed: '随 Coppice 吉祥寺休馆', status: '抵达日弹性', query: '但馬屋珈琲店 コピス吉祥寺店'},
    {name: '黑标 THE BAR 银座', area: '银座', kind: '啤酒吧', note: '只在实际逛银座时顺路喝一杯，不专程绕路。', hours: '周一至周六 11:30–22:00（L.O. 21:30）／周日及节假日 11:30–21:00（L.O. 20:30）', closed: '年末年始、2月第3个周二', status: '银座购物时顺路', query: 'サッポロ生ビール黒ラベル THE BAR GINZA'},
    {name: '海の幸 翔', area: '岩本町・秋叶原・神田', kind: '海鲜丼', note: '想吃的海鲜丼；不再挤进 11/6 演唱会日。', hours: '营业时间待出行前向店方确认', closed: '休息日待出行前确认', status: '暂未排入', query: '海の幸 翔 岩本町'},
    {name: 'Yuzu Lab 秋叶原店', area: '岩本町・秋叶原・神田', kind: '柚子拉面', note: '11/8 午餐主线。', hours: '平日 11:00–22:00（L.O. 21:30）／周末及节假日 11:00–21:00（L.O. 20:30）', closed: '年末年始', status: '已排入 11/8', query: '麺処ゆずラボ。秋葉原本店'}
  ],
  shops: [
    {name: 'chocoshoe', area: '涩谷・惠比寿', kind: '杂货／艺术家限定品', note: '11/7 染发后可顺路安排。', hours: '周三、周四 11:00–17:00／周五 11:00–18:00／周六 12:00–18:00', closed: '周日、周一、周二', status: '已排入 11/7', query: 'chocoshoe store 渋谷区東'},
    {name: 'DARUMA STORE Tokyo', area: '涩谷・惠比寿', kind: '毛线／手作', note: '与涩谷东侧可串成同一段购物路线。', hours: '10:30–18:00', closed: '请以店铺营业日历为准', status: '已排入 11/7', query: 'DARUMA STORE Tokyo 恵比寿'},
    {name: 'Junie Moon 新宿店', area: '新宿', kind: 'Blythe／玩偶', note: '当天优先采购，不留到最后。', hours: '11:00–20:00', closed: '随新宿 Marui Annex 休馆', status: '已排入 11/7', query: 'Junie Moon 新宿店'}
  ]
};

// Update saved restaurant lists once without clearing tickets or checklists.
if (T.wishlist.restaurantPlanVersion !== '2026-10-20') {
  const restaurantUpdates = [
    {name: '牛たんの檸檬 · 新宿総本店', area: '新宿', kind: '厚切牛舌', address: '東京都新宿区西新宿7-16-12 YSビル B1F', note: '最适合 11/7 逛完新宿后吃晚餐；先完成会早关门的店铺。11/10 只有本来就在新宿补货才选，不为吃饭往返。可预约，定食用餐限时 60 分钟。', hours: '11:30–15:00；周日至周四 17:00–22:00（L.O. 21:00）；周五、六 17:00–22:30（L.O. 21:45）', closed: '年末年始；临时休业以店方公告为准', status: '11/7 晚餐优先候选', query: '牛たんの檸檬 新宿総本店 西新宿7-16-12', source: 'https://www.tablecheck.com/ja/shops/gyutannolemon/reserve'},
    {name: '道玄坂マンモス / Dogenzaka Mammoth', area: '涩谷・惠比寿', kind: '沾面／拉面', address: '東京都渋谷区道玄坂2-10-1', note: '11/7 实际走到涩谷站西侧时可吃；chocoshoe／DARUMA 所在的涩谷东侧不是同一边，属于小绕行。与新宿牛舌择一，不硬塞两顿。不可预约，排队过长就跳过。', hours: '11:30–22:00（店方公开资料；临时调整以现场为准）', closed: '通常无休，年末年始除外', status: '11/7 涩谷段条件候选', query: '道玄坂マンモス 渋谷区道玄坂2-10-1', source: 'https://tabelog.com/tokyo/A1303/A130301/13122700/'},
    {name: 'GARAKU（分店待确认）', area: '中野', kind: '汤咖喱', address: '候选：東京中野店／東京都中野区中野5-50-3 KINGビル1F', note: '先保留品牌，不替你确定分店。若指中野店，11/4 入住荻窪后有体力且不去吉祥寺时可考虑；不算必经，要专门在中野下车。11/7 加中野会偏离原宿／涩谷／新宿购物线。若指八王子店，本次不顺路。', hours: '中野店：11:30–15:30（L.O. 15:00）、17:00–23:00（L.O. 22:30）；分店待确认', closed: '中野店不定休；汤售完可能提前结束', status: '分店待确认／中野店为 11/4 弹性', query: 'GARAKU 東京中野店 中野5-50-3', source: 'https://s-garaku.com/shoplist.php'},
    {name: '喫茶 一房', area: '下北泽', kind: '喫茶／水果三明治', address: '東京都世田谷区北沢2-21-26 2F（用户提供；到店前核对官方定位）', note: '现有行程没有下北泽购物段，不算顺路。11/10 只有普通小田急返程愿意中途下车、当日营业且返东京够早才考虑；直达新宿的 Romancecar 不能当作在下北泽停站。营业日与定位未核实前不排死。', hours: '当前营业时间待官方确认', closed: '待官方当月营业日历确认，尤其 11/10 周二', status: '低优先／有下北泽行程再安排', query: '喫茶 一房 下北沢', source: 'https://www.instagram.com/kissa_hitofusa/'},
    {name: '海の幸 翔', area: '岩本町・秋叶原・神田', kind: '海鲜丼', address: '東京都千代田区神田東松下町12 宮川ビル東棟 1F', note: '位置能接秋叶原／神田，但 11/8 是周日，营业未确认，不因离 Yuzu Lab 近就安排两顿午饭。11/6 仍受编发和行李寄放限制；11/10 通常赶不上午餐；11/11 机场日前不安排排队海鲜丼。', hours: '当前营业时间未获店方确认；网上资料存在差异', closed: '周末休息资料不一致，须向店方确认；不默认周日开门', status: '地理顺路／时间受限，暂不固定', query: '海の幸 翔 神田東松下町12 宮川ビル'},
    {name: '浅草今半 · 国際通り本店', area: '浅草', kind: '寿喜烧／牛肉饭', address: '東京都台東区西浅草3-1-12', note: '11/6 若行李已解决、决定走浅草路线，可作为午餐选项；与海鲜丼择一。国際通り本店在浅草西侧，与东侧八十八／Asahi 不是紧邻。午餐限定菜单不可预约，不能用排队挤占巨蛋入场时间。', hours: '11:30–21:30（L.O. 20:30）；午餐 11:30–14:30；14:30–16:00 暂停接待，最晚 19:00 入店', closed: '通常全年无休；留意临时公告', status: '11/6 浅草午餐条件候选', query: '浅草今半 国際通り本店 西浅草3-1-12', source: 'https://www.asakusaimahan.co.jp/kokusai'},
    {name: '八十八浅草（八十八良葉舎）', area: '浅草', kind: '抹茶／甜品', address: '東京都台東区花川戸2-14-3', note: '11/6 若本来就走浅草东侧，可作为短暂停靠；排队长就放弃。与今半可同一区域安排，但不在隔壁；不再同时堆叠多家咖啡、甜品与啤酒。', hours: '官网未列营业时间，待店方确认', closed: '待当月店方公告确认', status: '11/6 浅草段弹性甜品', query: '八十八浅草 花川戸2-14-3', source: 'https://www.8108kyoto.com/'},
    {name: '回転寿しトリトン · 東京ソラマチ店', area: '押上・晴空塔', kind: '回转寿司', address: '東京都墨田区押上1-1-2 東京スカイツリータウン ソラマチ6F', note: '只有本来安排晴空塔城才顺路；从两国特意过去吃属于额外行程。店头取号，不接受预约，混杂时提前停止受付。11/6、11/8 演唱会前不安排不可控排队；11/10 仅返东京早且改在晴空塔补货时可候选。', hours: '11:00–22:00（L.O. 21:30）；席位使用 80 分钟', closed: '以商场及店方临时公告为准', status: '晴空塔购物时才安排', query: '回転寿しトリトン 東京ソラマチ店', source: 'https://www.tokyo-solamachi.jp/shop/detail/295/'},
    {name: 'YAKINIKU MARUUSHI · 银座本店', area: '银座', kind: '和牛烧肉', address: '東京都中央区銀座1-5-10 GINZA 1st.5 BLDG 8階', note: '11/10 从箱根回东京后，若当晚在银座补货，这是顺路的晚餐优先候选。预约应留返程余量，不抢着赶早场。认准 8F 银座本店，别订成同楼 9F THE ROOM。', hours: '17:00–23:00（官网）', closed: '官网未列固定休息日，预约时核对', status: '11/10 银座补货后晚餐候选', query: 'YAKINIKU MARUUSHI 銀座本店 銀座1-5-10 8F', source: 'https://www.maruushi.com/'},
    {name: '人形町らーめん いなせ', area: '人形町・日本桥', kind: '拉面', address: '東京都中央区日本橋人形町2-2-3 堀口ビル1F', note: '按你提供的地址对应此店。若最后一晚仍住 Saibo，11/10 晚餐或补货后回酒店时最自然；11/11 不为等午餐开门压缩去机场时间。', hours: '当前营业时间待店方确认；不以旧版深夜时间保证营业', closed: '待出行前确认', status: '11/10 住 Saibo 时最顺路', query: '人形町らーめん いなせ 人形町2-2-3', source: 'https://happy-kaimonoken.info/?p=51315'}
  ];
  for (const item of restaurantUpdates) {
    const index = T.wishlist.restaurants.findIndex(existing => existing.name === item.name);
    if (index < 0) T.wishlist.restaurants.push(item);
    else T.wishlist.restaurants[index] = {...T.wishlist.restaurants[index], ...item};
  }
  const areaOrder = ['荻窪・吉祥寺', '中野', '新宿', '涩谷・惠比寿', '下北泽', '岩本町・秋叶原・神田', '浅草', '押上・晴空塔', '银座', '人形町・日本桥'];
  T.wishlist.restaurants.sort((a, b) => {
    const rank = area => areaOrder.includes(area) ? areaOrder.indexOf(area) : areaOrder.length;
    return rank(a.area) - rank(b.area);
  });
  const junie = T.wishlist.shops.find(item => item.name === 'Junie Moon 新宿店');
  if (junie) Object.assign(junie, {name: 'Junie Moon Harajuku（原宿）', area: '原宿・表参道', hours: '原宿店营业时间待核实', closed: '原宿店休息日待核实', query: 'Junie Moon Harajuku'});
  T.wishlist.restaurantPlanVersion = '2026-10-20';
}

if (T.wishlist.sasamotoPlanVersion !== '2026-10-20') {
  const sasamoto = {name: 'ささもと 新宿店 / Sasamoto', area: '新宿', kind: '内脏串烧／煮込み', address: '東京都新宿区西新宿1-2-7 思い出横丁', note: '11/7 新宿购物后顺路的晚餐候选，与牛たんの檸檬二选一。主打猪牛内脏串烧，并非以鸡肉烧鸟为主；不可预约，排队过长就改选其他店。店方资料标为现金支付。', hours: '周一至周六 15:30–23:00（L.O. 22:30）；节假日 15:00–23:00（L.O. 22:30）', closed: '周日；年末年始、黄金周、盂兰盆节另休，以店方公告为准', status: '11/7 新宿晚餐顺路候选', query: 'ささもと 新宿店 西新宿1-2-7', source: 'https://tabelog.com/tokyo/A1304/A130401/13000779/'};
  const sasamotoIndex = T.wishlist.restaurants.findIndex(item => item.name === sasamoto.name);
  if (sasamotoIndex >= 0) T.wishlist.restaurants[sasamotoIndex] = {...T.wishlist.restaurants[sasamotoIndex], ...sasamoto};
  else {
    const shinjukuIndex = T.wishlist.restaurants.findIndex(item => item.area === '新宿');
    T.wishlist.restaurants.splice(shinjukuIndex < 0 ? T.wishlist.restaurants.length : shinjukuIndex + 1, 0, sasamoto);
  }
  T.wishlist.sasamotoPlanVersion = '2026-10-20';
}

if (!document.getElementById('wishlist-style')) {
  const style = document.createElement('style');
  style.id = 'wishlist-style';
  style.textContent = '.wish-switch{display:flex;gap:8px;margin:0 0 18px}.wish-switch button{flex:1;border:1px solid var(--line);border-radius:9px;padding:9px;background:var(--white);color:var(--muted);font-weight:800}.wish-switch button.active{border-color:var(--pine);background:var(--pine);color:#fff}.wish-area{margin:20px 2px 9px;color:var(--pine);font-size:12px;font-weight:800;letter-spacing:1px}.wish-card{padding:15px;margin-bottom:10px}.wish-card h3{margin:0;font-size:16px}.wish-kind{margin:4px 0 0;color:var(--pine);font-size:12px;font-weight:800}.wish-card p{margin:8px 0 0;color:var(--muted);font-size:12px}.wish-hours{padding-top:9px;border-top:1px solid var(--line)}.wish-status{display:inline-flex;margin-top:10px;padding:3px 7px;border-radius:999px;background:var(--mint);color:var(--pine);font-size:10px;font-weight:800}.wish-map{display:flex;align-items:center;justify-content:center;gap:6px;margin-top:12px;padding:9px;border:1px solid var(--pine);border-radius:8px;color:var(--pine);font-size:12px;font-weight:800;text-decoration:none}.wish-map svg{width:15px}';
  document.head.append(style);
}

const wishView = document.createElement('section');
wishView.id = 'wishlist';
wishView.className = 'view';
document.querySelector('.app').append(wishView);
const wishNav = document.createElement('button');
wishNav.dataset.view = 'wishlist';
wishNav.innerHTML = '<i data-lucide="heart"></i>想去';
document.querySelector('.nav-inner').insertBefore(wishNav, document.querySelector('[data-view="tickets"]'));
let wishTab = 'restaurants';
function wishlist() {
  const items = T.wishlist[wishTab];
  const areas = [...new Set(items.map(x => x.area))];
  wishView.innerHTML = `${head('WISHLIST', '想去', '按片区排列；日期为候选安排，未代表预约成功。')}<div class="wish-switch"><button class="${wishTab === 'restaurants' ? 'active' : ''}" data-wish-tab="restaurants">餐厅</button><button class="${wishTab === 'shops' ? 'active' : ''}" data-wish-tab="shops">店铺</button></div>${areas.map(area => `<section><h2 class="wish-area">${area}</h2>${items.filter(x => x.area === area).map(x => `<article class="card wish-card"><h3>${escape(x.name)}</h3><div class="wish-kind">${escape(x.kind)} · ${escape(x.area)}</div>${x.address ? `<p>地址：${escape(x.address)}</p>` : ''}<p>${escape(x.note)}</p><p class="wish-hours">营业：${escape(x.hours)}<br>休息：${escape(x.closed)}</p><span class="wish-status">${escape(x.status)}</span><a class="wish-map" target="_blank" rel="noopener" href="${search(x.query)}"><i data-lucide="map-pinned"></i>Google 地图导航</a>${x.source ? `<p><a target="_blank" rel="noopener" href="${escape(x.source)}">查看店铺信息／营业公告</a></p>` : ''}</article>`).join('')}</section>`).join('')}`;
  icons();
}
document.addEventListener('click', e => {
  const button = e.target.closest('[data-wish-tab]');
  if (!button) return;
  wishTab = button.dataset.wishTab;
  wishlist();
});

dialog = (title, body, submit) => {
  const el = $('#dialog');
  el.innerHTML = `<form><div class="modal-head"><h2>${title}</h2><button type="button" class="add" data-a="close-dialog"><i data-lucide="x"></i></button></div><div class="modal-body">${body}<div class="modal-actions"><button type="button" class="btn ghost" data-a="close-dialog">取消</button><button type="submit" class="btn">保存</button></div></div></form>`;
  el.querySelector('form').addEventListener('submit', e => { e.preventDefault(); submit(new FormData(e.currentTarget)); el.close(); });
  el.onclick = e => { if (e.target === el) el.close(); };
  el.showModal();
  icons();
};
document.addEventListener('click', e => { if (e.target.closest('[data-a="close-dialog"]')) $('#dialog').close(); });

const refreshWithWishlist = all;
all = () => { refreshWithWishlist(); wishlist(); };

save();
all();
