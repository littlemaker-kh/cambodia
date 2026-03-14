/* ================================================================
   LITTLEMAKER CAMBODIA — main.js v3.0
   Features: page loader, scroll progress, navbar shrink,
             counter animation, cart, invoice, translations,
             product grid & detail, filter/search, ripple effects
   ================================================================ */

'use strict';

/* ─────────────────────────────────────────────
   TRANSLATIONS
───────────────────────────────────────────── */
const T = {
  en:{
    nav_home:"Home",nav_about:"About Us",nav_services:"Services",
    nav_shop:"Shop",nav_contact:"Contact",
    hero_title:"Precision Metal &<br><span class='highlight'>Office Solutions</span>",
    hero_desc:"From industrial CNC parts to premium steel office furniture. Quality manufacturing made in Cambodia.",
    btn_shop:"Shop Products",btn_quote:"Request Quote",
    feat_title:"What We Do",feat_sub:"Our Core Specialties",
    feat_off:"Office Furniture",feat_off_desc:"Modern desks, cabinets, and storage.",
    btn_view_cat:"View Catalog <i class='fa-solid fa-arrow-right'></i>",
    feat_ind:"Industrial Parts",feat_ind_desc:"CNC machining and custom metal fabrication.",
    btn_learn:"Learn More <i class='fa-solid fa-arrow-right'></i>",
    cta_title:"Looking for Custom Fabrication?",
    cta_desc:"We handle bulk orders for offices and industrial projects.",
    btn_contact:"Contact Us Today",
    footer_desc:"Professional metal fabrication and engineering solutions tailored for the Cambodian market.",
    footer_quick:"Quick Links",footer_contact:"Contact",
    footer_copy:"&copy; 2025 LittleMaker Cambodia. All Rights Reserved.",
    about_header:"About Our Company",about_sub:"Leading the way in Cambodian Manufacturing",
    about_who:"Who We Are",about_title:"Leading Metal Solutions in Cambodia",
    about_p1:"LITTLEMAKER CAMBODIA is a premier manufacturing partner specializing in high-quality metal components and modern office furniture. We combine local expertise with international manufacturing standards.",
    about_p2:"Whether you need custom enclosures, heavy machinery parts, or delicate architectural metalwork, our team of engineers ensures perfection in every weld and cut.",
    feat_iso:"ISO 9001 Compliant Processes",feat_high:"High Quality Office Furniture",feat_fast:"Fast Delivery in Phnom Penh",
    stat_eng:"Skilled Engineers",stat_proj:"Projects Completed",stat_exp:"Industry Experience",
    serv_header:"Our Capabilities",serv_sub:"Advanced Technology Meets Skilled Craftsmanship",
    serv_cnc:"CNC Machining",serv_cnc_desc:"High-precision milling and turning for complex geometries using steel, aluminum, and brass.",
    serv_laser:"Laser Cutting",serv_laser_desc:"State-of-the-art fiber laser cutting for sheet metal with clean edges and tight tolerances.",
    serv_weld:"Welding & Fab",serv_weld_desc:"MIG, TIG, and Spot welding services by certified welders for structural integrity.",
    serv_finish:"Finishing",serv_finish_desc:"Powder coating, anodizing, and galvanizing to ensure durability and aesthetic appeal.",
    serv_cad:"CAD Design",serv_cad_desc:"Professional engineering design services to turn your concept sketches into manufacturing-ready blueprints.",
    serv_ass:"Assembly",serv_ass_desc:"Full product assembly and packaging services for retail-ready delivery.",
    prod_header:"Product Catalog",prod_sub:"Quality Tables, Cabinets & Grills",
    search_ph:"Search products...",
    filter_all:"All",filter_tables:"Tables",filter_cabinets:"Cabinets",filter_grills:"Grills",
    btn_add:"<i class='fa-solid fa-cart-plus'></i> Add",
    btn_add_cart:"Add to Cart",btn_buy_now:"Buy Now",btn_chat:"Chat",
    lbl_quantity:"Quantity:",tab_desc:"Description",tab_specs:"Specifications",
    related_prod:"Related Products",
    cont_header:"Contact Us",cont_sub:"Get a Quote or Ask a Question",
    cont_touch:"Get In Touch",cont_ready:"Ready to Start Your Project?",
    cont_desc:"Contact us today for a free consultation or bulk order quote. We respond within 24 hours.",
    ph_name:"Your Name",ph_email:"Your Email",ph_subj:"Subject / Product Inquiry",ph_msg:"Project Details or Order Request",
    btn_send:"Send Message",
    cont_email:"Email",cont_fb:"Facebook",cont_tg:"Telegram",cont_phone:"Phone",cont_loc:"Location"
  },
  kh:{
    nav_home:"ទំព័រដើម",nav_about:"អំពីយើង",nav_services:"សេវាកម្ម",
    nav_shop:"ហាង",nav_contact:"ទំនាក់ទំនង",
    hero_title:"លោហៈភាពជាក់លាក់ &<br><span class='highlight'>ដំណោះស្រាយការិយាល័យ</span>",
    hero_desc:"ពីគ្រឿងបន្លាស់ CNC ឧស្សាហកម្ម រហូតដល់គ្រឿងសង្ហារឹមការិយាល័យ។ ផលិតកម្មគុណភាពផលិតនៅកម្ពុជា។",
    btn_shop:"ទិញផលិតផល",btn_quote:"ស្នើសុំតម្លៃ",
    feat_title:"អ្វីដែលយើងធ្វើ",feat_sub:"ជំនាញស្នូលរបស់យើង",
    feat_off:"គ្រឿងសង្ហារឹមការិយាល័យ",feat_off_desc:"តុ ទូ និងកន្លែងផ្ទុកទំនើប។",
    btn_view_cat:"មើលកាតាឡុក <i class='fa-solid fa-arrow-right'></i>",
    feat_ind:"គ្រឿងបន្លាស់ឧស្សាហកម្ម",feat_ind_desc:"ម៉ាស៊ីន CNC និងការផលិតដែកតាមតម្រូវការ។",
    btn_learn:"ស្វែងយល់បន្ថែម <i class='fa-solid fa-arrow-right'></i>",
    cta_title:"ស្វែងរកការផលិតតាមតម្រូវការ?",
    cta_desc:"យើងទទួលការបញ្ជាទិញជាដុំ សម្រាប់គម្រោងការិយាល័យ និងឧស្សាហកម្ម។",
    btn_contact:"ទាក់ទងមកយើងថ្ងៃនេះ",
    footer_desc:"ដំណោះស្រាយផលិតកម្មលោហៈ និងវិស្វកម្មដែលមានវិជ្ជាជីវៈ។",
    footer_quick:"តំណរហ័ស",footer_contact:"ទំនាក់ទំនង",
    footer_copy:"&copy; 2025 LittleMaker Cambodia. រក្សាសិទ្ធិគ្រប់យ៉ាង។",
    about_header:"អំពីក្រុមហ៊ុនរបស់យើង",about_sub:"នាំមុខក្នុងវិស័យផលិតកម្មកម្ពុជា",
    about_who:"យើងជានរណា",about_title:"ដំណោះស្រាយលោហៈឈានមុខគេនៅកម្ពុជា",
    about_p1:"LITTLEMAKER CAMBODIA គឺជាដៃគូផលិតកម្មឈានមុខ ដែលមានឯកទេសលើសមាសធាតុលោហៈ និងគ្រឿងសង្ហារឹមការិយាល័យទំនើប។",
    about_p2:"មិនថាអ្នកត្រូវការប្រអប់តាមតម្រូវការ គ្រឿងបន្លាស់ម៉ាស៊ីន ក្រុមវិស្វករបស់យើងធានានូវភាពល្អឥតខ្ចោះ។",
    feat_iso:"ដំណើរការអនុលោមតាម ISO 9001",feat_high:"គ្រឿងសង្ហារឹមការិយាល័យគុណភាពខ្ពស់",feat_fast:"ដឹកជញ្ជូនរហ័សក្នុងភ្នំពេញ",
    stat_eng:"វិស្វករជំនាញ",stat_proj:"គម្រោងបានបញ្ចប់",stat_exp:"បទពិសោធន៍ក្នុងឧស្សាហកម្ម",
    serv_header:"សមត្ថភាពរបស់យើង",serv_sub:"បច្ចេកវិទ្យាជឿនលឿន ជួបជាមួយជំនាញ",
    serv_cnc:"ម៉ាស៊ីន CNC",serv_cnc_desc:"ការកិននិងការក្រឡឹងដែលមានភាពជាក់លាក់ខ្ពស់។",
    serv_laser:"ការកាត់ឡាស៊ែរ",serv_laser_desc:"ការកាត់ឡាស៊ែរហ្វាយប៊ឺរដ៏ទំនើបសម្រាប់សន្លឹកដែក។",
    serv_weld:"ការផ្សារ & ផលិតកម្ម",serv_weld_desc:"សេវាផ្សារ MIG, TIG និង Spot ដោយជាងផ្សារដែលមានវិញ្ញាបនបត្រ។",
    serv_finish:"ការបញ្ចប់",serv_finish_desc:"ការបាញ់ថ្នាំម្សៅ anodizing និង galvanizing។",
    serv_cad:"ការរចនា CAD",serv_cad_desc:"សេវាកម្មរចនាវិស្វកម្មដែលមានវិជ្ជាជីវៈ ដើម្បីប្រែក្លាយគំនូររបស់អ្នក។",
    serv_ass:"ការដំឡើង",serv_ass_desc:"សេវាកម្មដំឡើងផលិតផលពេញលេញ និងការវេចខ្ចប់។",
    prod_header:"កាតាឡុកផលិតផល",prod_sub:"តុ ទូ និងចង្ក្រានអាំងគុណភាព",
    search_ph:"ស្វែងរកផលិតផល...",
    filter_all:"ទាំងអស់",filter_tables:"តុ",filter_cabinets:"ទូ",filter_grills:"ចង្ក្រានអាំង",
    btn_add:"<i class='fa-solid fa-cart-plus'></i> បញ្ចូល",
    btn_add_cart:"បញ្ចូលកន្ត្រក",btn_buy_now:"ទិញឥឡូវ",btn_chat:"ជជែក",
    lbl_quantity:"ចំនួន:",tab_desc:"ការពិពណ៌នា",tab_specs:"លក្ខណៈបច្ចេកទេស",
    related_prod:"ផលិតផលពាក់ព័ន្ធ",
    cont_header:"ទាក់ទងមកយើង",cont_sub:"ទទួលតម្លៃ ឬសួរសំណួរ",
    cont_touch:"ទំនាក់ទំនង",cont_ready:"ត្រៀមខ្លួនចាប់ផ្តើមគម្រោងហើយឬ?",
    cont_desc:"ទាក់ទងមកយើងថ្ងៃនេះ។ យើងឆ្លើយតបក្នុង ២៤ ម៉ោង។",
    ph_name:"ឈ្មោះ",ph_email:"អ៊ីមែល",ph_subj:"ប្រធានបទ",ph_msg:"ព័ត៌មានលម្អិតគម្រោង",
    btn_send:"ផ្ញើសារ",
    cont_email:"អ៊ីមែល",cont_fb:"ហ្វេសប៊ុក",cont_tg:"តេឡេក្រាម",cont_phone:"ទូរស័ព្ទ",cont_loc:"ទីតាំង"
  },
  cn:{
    nav_home:"首页",nav_about:"关于我们",nav_services:"服务",
    nav_shop:"商店",nav_contact:"联系",
    hero_title:"精密金属与<br><span class='highlight'>办公解决方案</span>",
    hero_desc:"从工业CNC零件到优质钢制办公家具。柬埔寨制造的优质产品。",
    btn_shop:"购买产品",btn_quote:"询价",
    feat_title:"我们做什么",feat_sub:"我们的核心专长",
    feat_off:"办公家具",feat_off_desc:"现代办公桌、文件柜和存储设备。",
    btn_view_cat:"查看目录 <i class='fa-solid fa-arrow-right'></i>",
    feat_ind:"工业零件",feat_ind_desc:"CNC加工和定制金属制造。",
    btn_learn:"了解更多 <i class='fa-solid fa-arrow-right'></i>",
    cta_title:"寻找定制制造？",
    cta_desc:"我们处理办公室和工业项目的批量订单。",
    btn_contact:"立即联系我们",
    footer_desc:"专为柬埔寨市场定制的专业金属制造和工程解决方案。",
    footer_quick:"快速链接",footer_contact:"联系方式",
    footer_copy:"&copy; 2025 LittleMaker Cambodia. 版权所有。",
    about_header:"关于我们公司",about_sub:"引领柬埔寨制造业",
    about_who:"我们是谁",about_title:"柬埔寨领先的金属解决方案",
    about_p1:"LITTLEMAKER CAMBODIA 是首屈一指的制造合作伙伴，专注于高质量的金属部件和现代办公家具。",
    about_p2:"无论您需要定制外壳、重型机械零件，我们的工程师团队都能确保完美。",
    feat_iso:"符合 ISO 9001 标准",feat_high:"高品质办公家具",feat_fast:"金边市内快速配送",
    stat_eng:"熟练工程师",stat_proj:"完成的项目",stat_exp:"行业经验",
    serv_header:"我们的能力",serv_sub:"先进技术遇上精湛工艺",
    serv_cnc:"CNC 加工",serv_cnc_desc:"高精度铣削和车削，用于复杂几何形状。",
    serv_laser:"激光切割",serv_laser_desc:"最先进的光纤激光切割，边缘整洁。",
    serv_weld:"焊接与制造",serv_weld_desc:"由认证焊工提供MIG、TIG和点焊服务。",
    serv_finish:"表面处理",serv_finish_desc:"粉末涂层、阳极氧化和镀锌。",
    serv_cad:"CAD 设计",serv_cad_desc:"专业的工程设计服务。",
    serv_ass:"组装",serv_ass_desc:"完整的产品组装和包装服务。",
    prod_header:"产品目录",prod_sub:"优质桌子、柜子和烤架",
    search_ph:"搜索产品...",
    filter_all:"全部",filter_tables:"桌子",filter_cabinets:"柜子",filter_grills:"烤架",
    btn_add:"<i class='fa-solid fa-cart-plus'></i> 添加",
    btn_add_cart:"加入购物车",btn_buy_now:"立即购买",btn_chat:"联系卖家",
    lbl_quantity:"数量:",tab_desc:"描述",tab_specs:"规格",
    related_prod:"相关产品",
    cont_header:"联系我们",cont_sub:"获取报价或提问",
    cont_touch:"取得联系",cont_ready:"准备好开始您的项目了吗？",
    cont_desc:"立即联系我们进行免费咨询或批量订单报价。24小时内回复。",
    ph_name:"您的姓名",ph_email:"您的电子邮件",ph_subj:"主题",ph_msg:"项目详情",
    btn_send:"发送信息",
    cont_email:"电子邮件",cont_fb:"Facebook",cont_tg:"Telegram",cont_phone:"电话",cont_loc:"位置"
  }
};

/* ─────────────────────────────────────────────
   PRODUCTS DATABASE
───────────────────────────────────────────── */
const DB = [
  { id:1, category:'tables',
    title:"Modern Executive Desk", price:185,
    image:"images/Husky1.png",
    gallery:["images/Husky1.png","images/cabinet.jpg"],
    desc:"Minimalist steel frame desk with wooden top. Perfect for modern offices.",
    specs:{"Dimensions":"140×70 cm","Material":"Steel & Plywood","Color":"Black / Oak","Warranty":"1 Year"},
    badge:'new' },
  { id:2, category:'cabinets',
    title:"Steel File Cabinet (3-Drawer)", price:95,
    image:"images/cabinet.jpg",
    gallery:["images/cabinet.jpg","images/Husky1.png"],
    desc:"Secure locking storage with heavy-duty drawer rails.",
    specs:{"Dimensions":"40×50×65 cm","Color":"Grey / White","Drawers":"3","Lock":"Key Lock"} },
  { id:3, category:'tables',
    title:"Conference Table (8 Seats)", price:450,
    image:"images/R2.png",
    gallery:["images/R2.png","images/Husky1.png"],
    desc:"Durable metal legs with glass or wood top. Seats 8–10 people.",
    specs:{"Length":"2.4 m","Width":"1.2 m","Seating":"8–10","Material":"Steel & Tempered Glass"} },
  { id:4, category:'grills',
    title:"Premium BBQ Grill Stand", price:250,
    image:"images/cabinet.jpg",
    gallery:["images/cabinet.jpg","images/R2.png"],
    desc:"Heavy-duty stainless steel charcoal grill with adjustable height.",
    specs:{"Material":"Stainless Steel 304","Fuel":"Charcoal","Weight":"15 kg","Feature":"Adjustable Height"},
    badge:'sale' },
  { id:5, category:'cabinets',
    title:"Industrial Metal Locker", price:120,
    image:"images/Husky1.png",
    gallery:["images/Husky1.png","images/cabinet.jpg"],
    desc:"Single-door workshop or gym locker with ventilated design.",
    specs:{"Height":"180 cm","Width":"38 cm","Depth":"45 cm","Material":"Cold Rolled Steel"} },
  { id:6, category:'grills',
    title:"Portable Camping Stove", price:45,
    image:"images/R2.png",
    gallery:["images/R2.png","images/cabinet.jpg"],
    desc:"Compact stainless steel stove for travel with foldable legs.",
    specs:{"Weight":"1.5 kg","Fuel":"Charcoal / Wood","Folded":"20×20×5 cm","Material":"Stainless Steel"} }
];

/* ─────────────────────────────────────────────
   GLOBAL SLIDER HELPERS (called inline from HTML)
───────────────────────────────────────────── */
window._gallery = []; window._gIdx = 0;

window.moveSlide = function(step) {
  if (!window._gallery.length) return;
  window._gIdx = (window._gIdx + step + window._gallery.length) % window._gallery.length;
  const img = document.getElementById('mainImg');
  if (img) img.src = window._gallery[window._gIdx];
  document.querySelectorAll('.thumb-item').forEach((t,i) =>
    t.classList.toggle('active', i === window._gIdx));
};

window.setImage = function(idx) {
  window._gIdx = idx;
  const img = document.getElementById('mainImg');
  if (img) img.src = window._gallery[idx];
  document.querySelectorAll('.thumb-item').forEach((t,i) =>
    t.classList.toggle('active', i === idx));
};

window.openTab = function(evt, name) {
  document.querySelectorAll('.tab-content').forEach(el => el.style.display = 'none');
  document.querySelectorAll('.tab-btn').forEach(el => el.classList.remove('active'));
  document.getElementById(name).style.display = 'block';
  evt.currentTarget.classList.add('active');
};

/* ─────────────────────────────────────────────
   CART STATE
───────────────────────────────────────────── */
let cart = JSON.parse(localStorage.getItem('lm_cart') || '[]');

function saveCart()  { localStorage.setItem('lm_cart', JSON.stringify(cart)) }
function cartCount() { return cart.reduce((s,i) => s + i.qty, 0) }

function refreshBadge() {
  const n = cartCount();
  document.querySelectorAll('.cart-badge').forEach(b => b.textContent = n);
}

function addToCart(id, qty = 1) {
  const p = DB.find(p => p.id === +id);
  if (!p) return;
  const ex = cart.find(i => i.id === p.id);
  if (ex) ex.qty += qty; else cart.push({ id:p.id, name:p.title, price:p.price, qty });
  saveCart(); refreshBadge();
  document.querySelectorAll('.cart-badge').forEach(b => {
    b.classList.add('bump');
    setTimeout(() => b.classList.remove('bump'), 260);
  });
  showToast('✓  ' + p.title);
}

/* ─────────────────────────────────────────────
   TOAST
───────────────────────────────────────────── */
function showToast(msg) {
  let t = document.getElementById('toast');
  if (!t) { t = document.createElement('div'); t.id = 'toast'; t.className = 'toast'; document.body.appendChild(t) }
  t.textContent = msg;
  t.className = 'toast show';
  clearTimeout(t._tid);
  t._tid = setTimeout(() => { t.className = 'toast' }, 3000);
}

/* ─────────────────────────────────────────────
   INJECT CART + INVOICE HTML
───────────────────────────────────────────── */
function injectCartHTML() {
  const html = `
  <!-- ── Cart Modal ── -->
  <div class="cart-modal-overlay" id="cartModal">
    <div class="cart-modal">
      <div class="cart-header">
        <h3>🛒 Shopping Cart</h3>
        <span class="close-cart" id="closeCart"><i class="fa-solid fa-xmark"></i></span>
      </div>
      <div class="cart-body" id="cartItems"></div>
      <div class="cart-footer">
        <div class="cart-total">
          <span>Total</span>
          <span id="cartTotal">$0.00</span>
        </div>
        <button id="viewInvBtn" class="btn btn-outline"
          style="width:100%;justify-content:center;margin-bottom:14px;
                 color:var(--text);border-color:var(--border);">
          <i class="fa-solid fa-file-invoice"></i> View Invoice
        </button>
        <div class="cart-actions">
          <button class="social-checkout-btn btn-telegram" id="checkoutTg">
            <i class="fa-brands fa-telegram"></i> Order via Telegram
          </button>
          <div class="dual-btns">
            <button class="social-checkout-btn btn-facebook" id="checkoutFb">
              <i class="fa-brands fa-facebook"></i> Facebook
            </button>
            <button class="social-checkout-btn btn-phone" id="checkoutPhone">
              <i class="fa-solid fa-phone"></i> Call
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- ── Invoice ── -->
  <div class="invoice-backdrop" id="invBackdrop"></div>
  <div class="invoice-modal"    id="invoiceModal">
    <div class="invoice-header">
      <div class="inv-logo">LITTLEMAKER</div>
      <div class="inv-title">INVOICE</div>
    </div>
    <div class="invoice-body" id="invoiceBody"></div>
    <div class="invoice-actions">
      <button class="btn btn-outline" id="closeInv"
        style="color:var(--text);border-color:var(--border)">Close</button>
      <div class="invoice-actions-right">
        <button class="btn btn-outline" id="dlJpgBtn"
          style="color:var(--text);border-color:var(--border)">
          <i class="fa-solid fa-image"></i> JPG
        </button>
        <button class="btn btn-outline" id="dlPdfBtn"
          style="color:var(--text);border-color:var(--border)">
          <i class="fa-solid fa-file-pdf"></i> PDF
        </button>
        <button class="btn btn-primary" onclick="window.print()">
          <i class="fa-solid fa-print"></i> Print
        </button>
      </div>
    </div>
  </div>`;
  document.body.insertAdjacentHTML('beforeend', html);
}

/* ─────────────────────────────────────────────
   RENDER CART ITEMS
───────────────────────────────────────────── */
function renderCart() {
  const body  = document.getElementById('cartItems');
  const total = document.getElementById('cartTotal');
  if (!body) return;
  let sum = 0; body.innerHTML = '';
  if (!cart.length) {
    body.innerHTML = `<div style="text-align:center;padding:40px;color:var(--muted)">
      <i class="fa-solid fa-cart-shopping" style="font-size:2.5rem;opacity:.2;margin-bottom:14px;display:block"></i>
      Your cart is empty.</div>`;
  } else {
    cart.forEach((item, i) => {
      const sub = item.price * item.qty; sum += sub;
      body.insertAdjacentHTML('beforeend', `
        <div class="cart-item">
          <div class="cart-item-info">
            <h5>${item.name}</h5>
            <span class="cart-item-price">$${item.price.toFixed(2)}</span>
          </div>
          <div style="display:flex;align-items:center">
            <div class="qty-controls">
              <button class="qty-btn" data-action="minus" data-i="${i}">−</button>
              <span class="qty-val">${item.qty}</span>
              <button class="qty-btn" data-action="plus"  data-i="${i}">+</button>
            </div>
            <button class="remove-item" data-i="${i}">
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>`);
    });
  }
  if (total) total.textContent = '$' + sum.toFixed(2);

  /* qty + remove events */
  body.querySelectorAll('.qty-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const i = +btn.dataset.i;
      if (btn.dataset.action === 'plus') { cart[i].qty++ }
      else { if (cart[i].qty > 1) cart[i].qty--; else cart.splice(i,1) }
      saveCart(); refreshBadge(); renderCart();
    });
  });
  body.querySelectorAll('.remove-item').forEach(btn => {
    btn.addEventListener('click', () => {
      cart.splice(+btn.dataset.i, 1);
      saveCart(); refreshBadge(); renderCart();
    });
  });
}

/* ─────────────────────────────────────────────
   INVOICE RENDER
───────────────────────────────────────────── */
function showInvoice() {
  if (!cart.length) { showToast('Your cart is empty'); return }
  let sum = 0;
  const rows = cart.map(i => {
    const s = i.price * i.qty; sum += s;
    return `<tr><td>${i.name}</td>
            <td class="text-right">${i.qty}</td>
            <td class="text-right">$${i.price.toFixed(2)}</td>
            <td class="text-right">$${s.toFixed(2)}</td></tr>`;
  }).join('');
  document.getElementById('invoiceBody').innerHTML = `
    <table>
      <thead><tr>
        <th>Item</th>
        <th class="text-right">Qty</th>
        <th class="text-right">Unit Price</th>
        <th class="text-right">Subtotal</th>
      </tr></thead>
      <tbody>${rows}</tbody>
    </table>
    <div class="invoice-summary">Grand Total: $${sum.toFixed(2)}</div>
    <p style="margin-top:14px;font-size:.82rem;color:var(--muted)">
      Date: ${new Date().toLocaleDateString()} &nbsp;|&nbsp; LITTLEMAKER (CAMBODIA) CO., LTD.
    </p>`;
  document.getElementById('invBackdrop').classList.add('open');
  document.getElementById('invoiceModal').classList.add('open');
}

/* ─────────────────────────────────────────────
   CHECKOUT MESSAGE
───────────────────────────────────────────── */
function buildOrderMsg() {
  let sum = 0, msg = 'Hello LittleMaker! I would like to order:%0A%0A';
  cart.forEach((i,n) => {
    const s = i.price * i.qty; sum += s;
    msg += `${n+1}. ${i.name} ×${i.qty} = $${s.toFixed(2)}%0A`;
  });
  return msg + `%0A────────%0ATotal: $${sum.toFixed(2)}%0A%0APlease confirm, thank you!`;
}

/* ─────────────────────────────────────────────
   APPLY LANGUAGE
───────────────────────────────────────────── */
function applyLang(lang) {
  const tr = T[lang] || T.en;
  document.querySelectorAll('[data-translate]').forEach(el => {
    const k = el.getAttribute('data-translate');
    if (tr[k] !== undefined) {
      if (/</.test(tr[k])) el.innerHTML = tr[k];
      else el.textContent = tr[k];
    }
  });
  document.querySelectorAll('[data-translate-placeholder]').forEach(el => {
    const k = el.getAttribute('data-translate-placeholder');
    if (tr[k]) el.placeholder = tr[k];
  });
  const cl = document.getElementById('currentLang');
  if (cl) cl.textContent = lang.toUpperCase();
}

/* ─────────────────────────────────────────────
   PRODUCT CARD HTML
───────────────────────────────────────────── */
function productCardHTML(p) {
  const badge = p.badge === 'new'
    ? `<span class="badge-new">New</span>`
    : p.badge === 'sale' ? `<span class="badge-sale">Hot</span>` : '';
  return `
    <div class="product-card fade-in" data-category="${p.category}">
      <a href="product-detail.html?id=${p.id}">
        <div class="product-img">
          <img src="${p.image}" alt="${p.title}" loading="lazy"
               onerror="this.src='images/cabinet.jpg'">
          ${badge}
        </div>
      </a>
      <div class="product-details">
        <span class="product-cat">${p.category}</span>
        <a href="product-detail.html?id=${p.id}"><h4>${p.title}</h4></a>
        <p class="product-desc">${p.desc}</p>
        <div class="product-bottom">
          <span class="price">$${p.price.toFixed(2)}</span>
          <button class="btn-cart add-to-cart-btn" data-id="${p.id}"
            data-translate="btn_add">
            <i class="fa-solid fa-cart-plus"></i> Add
          </button>
        </div>
      </div>
    </div>`;
}

/* ─────────────────────────────────────────────
   ANIMATED COUNTER
───────────────────────────────────────────── */
function animCounter(el, raw, dur = 1800) {
  const hasPlus  = raw.includes('+');
  const hasYears = raw.toLowerCase().includes('year');
  const num = parseInt(raw.replace(/\D/g,''), 10);
  if (isNaN(num)) return;
  const suffix = hasPlus ? '+' : (hasYears ? ' Years' : '');
  let s = 0; const step = num / (dur / 16);
  const tick = () => {
    s = Math.min(s + step, num);
    el.textContent = Math.floor(s) + suffix;
    if (s < num) requestAnimationFrame(tick);
  };
  tick();
}

/* ─────────────────────────────────────────────
   RIPPLE EFFECT
───────────────────────────────────────────── */
function addRipple(el) {
  el.style.position = 'relative';
  el.style.overflow = 'hidden';
  el.addEventListener('click', function(e) {
    const r = document.createElement('span');
    const rect = this.getBoundingClientRect();
    r.style.cssText = `
      position:absolute;border-radius:50%;
      width:0;height:0;background:rgba(255,255,255,.3);
      transform:translate(-50%,-50%);pointer-events:none;
      left:${e.clientX-rect.left}px;
      top:${e.clientY-rect.top}px;
      animation:_ripple .6s ease-out forwards`;
    if (!document.getElementById('_rippleCSS')) {
      const s = document.createElement('style');
      s.id = '_rippleCSS';
      s.textContent = '@keyframes _ripple{to{width:220px;height:220px;opacity:0}}';
      document.head.appendChild(s);
    }
    this.appendChild(r);
    setTimeout(() => r.remove(), 650);
  });
}

/* ─────────────────────────────────────────────
   DOM READY
───────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {

  /* ── Page Loader ── */
  const loader = document.createElement('div');
  loader.id = '_loader';
  loader.innerHTML = `
    <style>
      #_loader{position:fixed;inset:0;background:#fff;z-index:99999;
        display:flex;align-items:center;justify-content:center;flex-direction:column;gap:20px;
        transition:opacity .5s ease}
      ._lgear{font-size:3rem;color:#004d99;animation:gearSpin 1s linear infinite}
      ._lbar{width:200px;height:4px;background:#e5eaf2;border-radius:4px;overflow:hidden}
      ._lfill{height:100%;background:linear-gradient(90deg,#004d99,#ff9900);
        border-radius:4px;animation:_lf .9s ease forwards}
      @keyframes _lf{from{width:0}to{width:100%}}
    </style>
    <div class="_lgear"><i class="fa-solid fa-gears"></i></div>
    <div class="_lbar"><div class="_lfill"></div></div>`;
  document.body.prepend(loader);
  window.addEventListener('load', () => {
    loader.style.opacity = '0';
    setTimeout(() => loader.remove(), 520);
  });

  /* ── Scroll Progress Bar ── */
  const prog = document.createElement('div');
  prog.style.cssText =
    'position:fixed;top:0;left:0;height:3px;width:0;z-index:9998;pointer-events:none;' +
    'background:linear-gradient(90deg,#004d99,#ff9900);transition:width .1s linear';
  document.body.prepend(prog);
  window.addEventListener('scroll', () => {
    const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100;
    prog.style.width = Math.min(pct,100) + '%';
  }, { passive:true });

  /* ── Navbar Shrink ── */
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    navbar?.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive:true });

  /* ── Theme ── */
  const themeBtn = document.getElementById('themeBtn');
  const applyTheme = t => {
    document.body.classList.toggle('dark-mode', t === 'dark');
    if (themeBtn) themeBtn.innerHTML = t === 'dark'
      ? '<i class="fa-solid fa-sun"></i>'
      : '<i class="fa-solid fa-moon"></i>';
  };
  applyTheme(localStorage.getItem('lm_theme') || 'light');
  themeBtn?.addEventListener('click', () => {
    const n = document.body.classList.contains('dark-mode') ? 'light' : 'dark';
    localStorage.setItem('lm_theme', n); applyTheme(n);
  });

  /* ── Language ── */
  const langBtn  = document.getElementById('langBtn');
  const langMenu = document.getElementById('langMenu');
  const curLang  = localStorage.getItem('lm_lang') || 'en';
  applyLang(curLang);

  langBtn?.addEventListener('click', e => { e.stopPropagation(); langMenu?.classList.toggle('show') });
  document.addEventListener('click', e => {
    if (!langBtn?.contains(e.target) && !langMenu?.contains(e.target))
      langMenu?.classList.remove('show');
  });
  document.querySelectorAll('.lang-menu a').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      const l = a.dataset.lang;
      localStorage.setItem('lm_lang', l);
      applyLang(l);
      langMenu?.classList.remove('show');
    });
  });

  /* ── Active nav link ── */
  const pg = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(lnk => {
    const h = lnk.getAttribute('href') || '';
    lnk.classList.toggle('active',
      h === pg || (pg === 'product-detail.html' && h === 'products.html'));
  });

  /* ── Scroll Reveal ── */
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target) }
    });
  }, { threshold:.1 });
  document.querySelectorAll('.fade-in').forEach(el => io.observe(el));

  /* ── Counter Animation ── */
  const cio = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const h3 = e.target.querySelector('h3');
        if (h3 && !h3.dataset.done) {
          h3.dataset.done = '1';
          animCounter(h3, h3.textContent.trim());
        }
        cio.unobserve(e.target);
      }
    });
  }, { threshold:.5 });
  document.querySelectorAll('.stats-card').forEach(c => cio.observe(c));

  /* ── Inject Cart HTML ── */
  injectCartHTML();
  refreshBadge();

  /* ── Export Invoice LoadScript ── */
  const loadScript = (src, cb) => {
    if (document.querySelector(`script[src="${src}"]`)) return cb();
    const s = document.createElement('script');
    s.src = src; s.onload = cb; document.head.appendChild(s);
  };

  /* ── Cart Open/Close ── */
  document.querySelectorAll('.cart-trigger').forEach(t =>
    t.addEventListener('click', e => { e.preventDefault(); renderCart(); document.getElementById('cartModal')?.classList.add('open') }));
  document.getElementById('closeCart')?.addEventListener('click', () =>
    document.getElementById('cartModal')?.classList.remove('open'));
  document.getElementById('cartModal')?.addEventListener('click', e => {
    if (e.target.id === 'cartModal') e.target.classList.remove('open');
  });

  /* ── Invoice ── */
  document.addEventListener('click', e => {
    if (e.target.closest('#viewInvBtn')) {
      document.getElementById('cartModal')?.classList.remove('open');
      showInvoice();
    }
  });
  document.getElementById('invBackdrop')?.addEventListener('click', () => {
    document.getElementById('invoiceModal')?.classList.remove('open');
    document.getElementById('invBackdrop')?.classList.remove('open');
  });
  document.addEventListener('click', e => {
    if (e.target.closest('#closeInv')) {
      document.getElementById('invoiceModal')?.classList.remove('open');
      document.getElementById('invBackdrop')?.classList.remove('open');
    }

    /* Invoice Export PDF/JPG */
    const pdfBtn = e.target.closest('#dlPdfBtn');
    if (pdfBtn) {
      const orig = pdfBtn.innerHTML;
      pdfBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> PDF...';
      loadScript('https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js', () => {
        const el = document.getElementById('invoiceModal');
        const actions = el.querySelector('.invoice-actions');
        const origMaxH = el.style.maxHeight;
        const origOver = el.style.overflowY;
        
        actions.style.display = 'none';
        el.style.maxHeight = 'none';
        el.style.overflowY = 'visible';
        
        const opt = {
          margin: 0.5,
          filename: 'LittleMaker_Invoice.pdf',
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { scale: 2, useCORS: true },
          jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };
        
        html2pdf().set(opt).from(el).save().then(() => {
          actions.style.display = '';
          el.style.maxHeight = origMaxH;
          el.style.overflowY = origOver;
          pdfBtn.innerHTML = orig;
        });
      });
    }

    const jpgBtn = e.target.closest('#dlJpgBtn');
    if (jpgBtn) {
      const orig = jpgBtn.innerHTML;
      jpgBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> JPG...';
      loadScript('https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js', () => {
        const el = document.getElementById('invoiceModal');
        const actions = el.querySelector('.invoice-actions');
        const origMaxH = el.style.maxHeight;
        const origOver = el.style.overflowY;
        
        actions.style.display = 'none';
        el.style.maxHeight = 'none';
        el.style.overflowY = 'visible';
        
        window.html2canvas(el, { scale: 2, useCORS: true }).then(canvas => {
          actions.style.display = '';
          el.style.maxHeight = origMaxH;
          el.style.overflowY = origOver;
          jpgBtn.innerHTML = orig;
          
          const link = document.createElement('a');
          link.download = 'LittleMaker_Invoice.jpg';
          link.href = canvas.toDataURL('image/jpeg', 0.9);
          link.click();
        });
      });
    }
  });

  /* ── Checkout ── */
  document.addEventListener('click', e => {
    if (e.target.closest('#checkoutTg')) {
      if (!cart.length) { showToast('Cart is empty'); return }
      window.open(`https://t.me/samnangkhiev?text=${buildOrderMsg()}`, '_blank');
    }
    if (e.target.closest('#checkoutFb'))
      window.open('https://web.facebook.com/littlemaker.kh/','_blank');
    if (e.target.closest('#checkoutPhone'))
      location.href = 'tel:+855719716888';
  });

  /* ── Add to Cart delegate ── */
  document.body.addEventListener('click', e => {
    const btn = e.target.closest('.add-to-cart-btn');
    if (btn) addToCart(btn.dataset.id);
  });

  /* ── SHOP PAGE — Render Products ── */
  const shopGrid = document.getElementById('shop-products-grid');
  if (shopGrid) {
    shopGrid.innerHTML = DB.map(productCardHTML).join('');
    applyLang(localStorage.getItem('lm_lang') || 'en');
    shopGrid.querySelectorAll('.fade-in').forEach(el => io.observe(el));

    /* Search */
    document.getElementById('productSearch')?.addEventListener('input', function() {
      const q = this.value.toLowerCase();
      document.querySelectorAll('#shop-products-grid .product-card').forEach(c => {
        const t = c.querySelector('h4')?.textContent.toLowerCase() || '';
        c.style.display = t.includes(q) ? '' : 'none';
      });
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      document.querySelector('.filter-btn[data-filter="all"]')?.classList.add('active');
    });

    /* Filter */
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const f = btn.dataset.filter;
        if (document.getElementById('productSearch'))
          document.getElementById('productSearch').value = '';
        document.querySelectorAll('#shop-products-grid .product-card').forEach(c => {
          const show = f === 'all' || c.dataset.category === f;
          c.style.display   = show ? '' : 'none';
          c.style.opacity   = show ? '1' : '0';
          c.style.transition = 'opacity .3s';
        });
      });
    });
  }

  /* ── PRODUCT DETAIL PAGE ── */
  const detailWrap = document.getElementById('product-detail-container');
  if (detailWrap) {
    const id   = +new URLSearchParams(location.search).get('id');
    const prod = DB.find(p => p.id === id);

    if (prod) {
      window._gallery = prod.gallery; window._gIdx = 0;
      document.getElementById('breadcrumb-title').textContent = prod.title;

      /* gallery HTML */
      const thumbs = prod.gallery.map((src,i) => `
        <div class="thumb-item ${i===0?'active':''}" onclick="setImage(${i})">
          <img src="${src}" onerror="this.src='images/cabinet.jpg'">
        </div>`).join('');

      /* specs table */
      const specsRows = Object.entries(prod.specs||{}).map(([k,v]) =>
        `<tr><th>${k}</th><td>${v}</td></tr>`).join('');

      detailWrap.innerHTML = `
        <div class="product-detail-wrapper">
          <div class="product-gallery">
            <div class="main-image-container">
              <button class="slider-btn prev" onclick="moveSlide(-1)">
                <i class="fa-solid fa-chevron-left"></i>
              </button>
              <div class="main-image">
                <img id="mainImg" src="${prod.image}" alt="${prod.title}"
                     onerror="this.src='images/cabinet.jpg'">
              </div>
              <button class="slider-btn next" onclick="moveSlide(1)">
                <i class="fa-solid fa-chevron-right"></i>
              </button>
            </div>
            <div class="thumb-list">${thumbs}</div>
          </div>

          <div class="product-info">
            <h1>${prod.title}</h1>
            <div class="price-tag">$${prod.price.toFixed(2)}</div>
            <div class="stock-status">
              <i class="fa-solid fa-check-circle"></i> In Stock – Ready to Ship
            </div>
            <p class="short-desc">${prod.desc}</p>
            <div class="quantity-selector">
              <span data-translate="lbl_quantity">Quantity:</span>
              <div class="qty-controls">
                <button class="qty-btn" id="qMinus">−</button>
                <input type="number" id="detailQty" value="1" min="1" class="qty-input" readonly>
                <button class="qty-btn" id="qPlus">+</button>
              </div>
            </div>
            <div class="action-buttons">
              <button class="btn-action add-cart" id="btnAddCart" data-translate="btn_add_cart">Add to Cart</button>
              <button class="btn-action buy-now"  id="btnBuyNow"  data-translate="btn_buy_now">Buy Now</button>
            </div>
            <a href="https://t.me/samnangkhiev" target="_blank" class="chat-seller-btn">
              <i class="fa-brands fa-telegram"></i>
              <span data-translate="btn_chat">Chat with Seller</span>
            </a>
          </div>
        </div>

        <div class="product-tabs">
          <div class="tab-headers">
            <button class="tab-btn active" onclick="openTab(event,'tabDesc')"
              data-translate="tab_desc">Description</button>
            <button class="tab-btn"        onclick="openTab(event,'tabSpecs')"
              data-translate="tab_specs">Specifications</button>
          </div>
          <div id="tabDesc"  class="tab-content" style="display:block"><p>${prod.desc}</p></div>
          <div id="tabSpecs" class="tab-content">
            <table class="specs-table"><tbody>${specsRows}</tbody></table>
          </div>
        </div>`;

      /* qty controls */
      const qtyInput = document.getElementById('detailQty');
      document.getElementById('qMinus')?.addEventListener('click', () => {
        if (+qtyInput.value > 1) qtyInput.value--;
      });
      document.getElementById('qPlus')?.addEventListener('click', () => qtyInput.value++);

      /* add / buy */
      document.getElementById('btnAddCart')?.addEventListener('click', () =>
        addToCart(prod.id, +qtyInput.value));
      document.getElementById('btnBuyNow')?.addEventListener('click', () => {
        addToCart(prod.id, +qtyInput.value);
        renderCart();
        document.getElementById('cartModal')?.classList.add('open');
      });

      /* mobile sticky bar */
      document.getElementById('mobile-add-cart')?.addEventListener('click', () =>
        document.getElementById('btnAddCart')?.click());
      document.getElementById('mobile-buy-now')?.addEventListener('click', () =>
        document.getElementById('btnBuyNow')?.click());
      /* Add class to body so padding accounts for both bottom bars on mobile */
      document.body.classList.add('has-action-bar');

      /* related products */
      const relGrid = document.getElementById('related-products-grid');
      if (relGrid) {
        DB.filter(p => p.category === prod.category && p.id !== prod.id)
          .slice(0,3).forEach(p => relGrid.insertAdjacentHTML('beforeend', productCardHTML(p)));
        relGrid.querySelectorAll('.fade-in').forEach(el => io.observe(el));
      }

      applyLang(localStorage.getItem('lm_lang') || 'en');

      /* ripple on action buttons */
      document.querySelectorAll('.btn-action').forEach(addRipple);

    } else {
      detailWrap.innerHTML = `<p style="text-align:center;padding:60px;color:var(--muted)">
        Product not found.</p>`;
    }
  }

  /* ── Contact Form ── */
  document.getElementById('contactForm')?.addEventListener('submit', e => {
    e.preventDefault();
    const form = e.target;
    const btn  = form.querySelector('button[type=submit]');
    const orig = btn.innerHTML;

    const name    = form.querySelector('input[type=text]')?.value || '';
    const email   = form.querySelector('input[type=email]')?.value || '';
    const subject = form.querySelectorAll('input[type=text]')[1]?.value || '';
    const message = form.querySelector('textarea')?.value || '';

    /* Build Telegram message */
    const tgMsg = encodeURIComponent(
      `📩 New Contact from LittleMaker Website\n\n` +
      `👤 Name: ${name}\n` +
      `📧 Email: ${email}\n` +
      `📌 Subject: ${subject}\n\n` +
      `💬 Message:\n${message}`
    );

    /* Open Telegram with the message */
    window.open(`https://t.me/samnangkhiev?text=${tgMsg}`, '_blank');

    /* Also open mailto as fallback */
    const mailBody = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`);
    setTimeout(() => {
      window.location.href = `mailto:info@littlemaker.com.kh?subject=${encodeURIComponent(subject)}&body=${mailBody}`;
    }, 800);

    /* Show success feedback */
    btn.innerHTML = '<i class="fa-solid fa-check"></i> Sent!';
    btn.style.background = 'linear-gradient(135deg,#28a745,#1e8035)';
    btn.disabled = true;
    showToast('✓ Message sent via Telegram!');
    setTimeout(() => {
      btn.innerHTML = orig; btn.style.background = ''; btn.disabled = false;
      form.reset();
    }, 3500);
  });

  /* ── Ripple on all primary buttons ── */
  document.querySelectorAll('.btn-primary').forEach(addRipple);

}); /* end DOMContentLoaded */
