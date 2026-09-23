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
  wishView.innerHTML = `${head('WISHLIST', '想去', '按片区排列；每个地点均可直接导航。')}<div class="wish-switch"><button class="${wishTab === 'restaurants' ? 'active' : ''}" data-wish-tab="restaurants">餐厅</button><button class="${wishTab === 'shops' ? 'active' : ''}" data-wish-tab="shops">店铺</button></div>${areas.map(area => `<section><h2 class="wish-area">${area}</h2>${items.filter(x => x.area === area).map(x => `<article class="card wish-card"><h3>${escape(x.name)}</h3><div class="wish-kind">${escape(x.kind)} · ${escape(x.area)}</div><p>${escape(x.note)}</p><p class="wish-hours">营业：${escape(x.hours)}<br>休息：${escape(x.closed)}</p><span class="wish-status">${escape(x.status)}</span><a class="wish-map" target="_blank" href="${search(x.query)}"><i data-lucide="map-pinned"></i>Google 地图导航</a></article>`).join('')}</section>`).join('')}`;
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
