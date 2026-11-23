// --- Tailwind Config ---
tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
          },
        },
      },
    };

// --- Main Store Application ---
(function () {
      const STORAGE_KEY = 'srinivasa_bags_vip_v1';
      const DEV_STORAGE_KEY = 'srinivasa_bags_dev_config_v1';

      const DEFAULT_DEV_CONFIG = {
        primaryColor: '#dc2626',
        titleColor: '#dc2626',
        bgColor: '#fff5f5',
        textColor: '#0f172a',
        shopName: 'Srinivasa Bags',
        shopSubtitle: 'Authorized Luggage & Bag Store',
        titleFont: "'Playfair Display', Georgia, serif",
        bodyFont: "'Inter', system-ui, sans-serif",
        titleSize: 'md',
        cardRadius: '16px',
        showHero: true,
        showBrands: true,
        showCart: true,
        heroEyebrow: 'VIP Authorized Franchise Store',
        heroTitle: 'Srinivasa Bags — Travel, Office & Everyday Carry',
        heroDesc: 'Suitcases, luggage, laptop & executive bags, handbags, bottles, lunchboxes, belts, wallets, and umbrellas from top brands — with live store prices and discounts.',
        logoImage: '',
        logoIcon: 'luggage',
        shopAddress: 'Main Road, Shop No. 12, City Center',
        shopPhone: '+91 98765 43210',
        shopHours: '9:30 AM – 9:30 PM',
        customCss: '',
        socialLinks: [
          { id: 'soc-1', platform: 'Instagram', url: 'https://instagram.com/' },
          { id: 'soc-2', platform: 'WhatsApp', url: 'https://wa.me/' }
        ]
      };

      const OFFICIAL_BRANDS = [
        {
          name: 'VIP',
          badge: 'Franchise Flagship',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Logo_vip_new.png',
          accent: 'border-red-500 bg-red-50/70'
        },
        {
          name: 'American Tourister',
          badge: 'Official Partner',
          logo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/23/American_Tourister_logo.svg/1280px-American_Tourister_logo.svg.png',
          accent: 'border-slate-200 bg-white'
        },
        {
          name: 'Safari',
          badge: 'Official Partner',
          logo: 'https://companieslogo.com/img/orig/SAFARI.NS_BIG-fd5d80fc.png',
          accent: 'border-slate-200 bg-white'
        },
        {
          name: 'Wildcraft',
          badge: 'Official Partner',
          logo: 'https://images.seeklogo.com/logo-png/32/1/the-wildcraft-logo-png_seeklogo-328359.png',
          accent: 'border-slate-200 bg-white'
        },
        {
          name: 'Skybags',
          badge: 'Official Partner',
          logo: 'https://images.seeklogo.com/logo-png/34/1/skybags-logo-png_seeklogo-343860.png',
          accent: 'border-slate-200 bg-white'
        },
        {
          name: 'Genie',
          badge: 'Backpacks',
          logo: '',
          accent: 'border-slate-200 bg-white'
        },
        {
          name: 'Kamiliant',
          badge: 'Official Partner',
          logo: 'https://images.seeklogo.com/logo-png/32/1/kamiliant-logo-png_seeklogo-328360.png',
          accent: 'border-slate-200 bg-white'
        }
      ];

      const DEFAULT_PRODUCTS = [
        {
          id: 'prod-1',
          name: 'VIP Skyscraper 55cm Cabin Suitcase',
          brand: 'VIP',
          category: 'Suitcases',
          price: 6499,
          discount: 20,
          available: true,
          image: './images/suitcase.jpg',
          description: 'Lightweight polycarbonate hard-shell 4-wheel spinner suitcase with TSA lock and 5-year international VIP warranty.',
          internalNote: 'SKU-VIP-55 • Showroom Front'
        },
        {
          id: 'prod-2',
          name: 'American Tourister Valex Laptop Bag',
          brand: 'American Tourister',
          category: 'Laptop Bags',
          price: 3299,
          discount: 15,
          available: true,
          image: './images/laptop-backpack.jpg',
          description: 'Water-resistant 15.6-inch padded laptop backpack with ergonomic shoulder straps and quick-access organizer.',
          internalNote: 'SKU-AT-102 • Rack B'
        },
        {
          id: 'prod-3',
          name: 'Safari Sprint 55L Travel Duffle Bag',
          brand: 'Safari',
          category: 'Duffle Bags',
          price: 2499,
          discount: 25,
          available: true,
          image: './images/duffle-bag.jpg',
          description: 'Spacious weekend duffle bag with reinforced grab handles, detachable padded strap, and side shoe pocket.',
          internalNote: 'SKU-SAF-210 • Shelf C'
        },
        {
          id: 'prod-4',
          name: 'Genie Glitz Casual Backpack',
          brand: 'Genie',
          category: 'Casual Backpacks',
          price: 1899,
          discount: 15,
          available: true,
          image: './images/laptop-backpack.jpg',
          description: 'Lightweight everyday casual backpack from Genie with spacious main compartment, front organizer pocket, and padded straps.',
          internalNote: 'SKU-GEN-305 • Backpack Wall'
        },
        {
          id: 'prod-5',
          name: 'Wildcraft Executive Office Bag',
          brand: 'Wildcraft',
          category: 'Office Executive Bags',
          price: 3799,
          discount: 0,
          available: true,
          image: './images/office-bag.jpg',
          description: 'Premium tan executive carryall with dedicated laptop compartment, document sleeve, and trolley pass-through.',
          internalNote: 'SKU-WLD-411 • Executive Wall'
        },
        {
          id: 'prod-6',
          name: 'Skybags Trooper Hard Luggage 65cm',
          brand: 'Skybags',
          category: 'Luggage Bags',
          price: 7899,
          discount: 30,
          available: true,
          image: './images/suitcase.jpg',
          description: 'Medium check-in polycarbonate trolley luggage with dual 360-degree wheels and expander zipper.',
          internalNote: 'SKU-SKY-65 • Luggage Bay'
        },
        {
          id: 'prod-7',
          name: 'Kamiliant Kiza Spinner Suitcase (Hidden Demo)',
          brand: 'Kamiliant',
          category: 'Suitcases',
          price: 5499,
          discount: 15,
          available: false,
          image: './images/suitcase.jpg',
          description: 'Scratch-resistant textured hard suitcase. Currently hidden from customers until new stock arrives.',
          internalNote: 'SKU-KAM-09 • Pending Restock'
        }
      ];

      function loadDevConfig() {
        try {
          const raw = localStorage.getItem(DEV_STORAGE_KEY);
          if (raw) {
            return { ...DEFAULT_DEV_CONFIG, ...JSON.parse(raw) };
          }
        } catch (e) {}
        return JSON.parse(JSON.stringify(DEFAULT_DEV_CONFIG));
      }

      function saveDevConfig() {
        try {
          localStorage.setItem(DEV_STORAGE_KEY, JSON.stringify(state.devConfig));
        } catch (e) {}
      }

      // State
      let state = {
        mode: 'user', // 'user' | 'owner' | 'developer'
        authTargetMode: 'owner',
        devConfig: loadDevConfig(),
        products: loadProducts(),
        userSearch: '',
        userBrand: 'All',
        userCategory: 'All',
        userDiscountOnly: false,
        userSort: 'featured',
        ownerSearch: '',
        ownerStatus: 'all',
        cart: {}, // { productId: qty }
        activeDetailId: null,
        pendingConfirmAction: null
      };

      function loadProducts() {
        try {
          const raw = localStorage.getItem(STORAGE_KEY);
          if (raw) {
            const parsed = JSON.parse(raw);
            if (Array.isArray(parsed) && parsed.length > 0) return parsed;
          }
        } catch (e) {}
        return JSON.parse(JSON.stringify(DEFAULT_PRODUCTS));
      }

      function saveProducts() {
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(state.products));
        } catch (e) {}
      }

      function formatINR(num) {
        return '₹' + Math.round(Number(num) || 0).toLocaleString('en-IN');
      }

      function getFinalPrice(product) {
        const price = Number(product.price) || 0;
        const disc = Math.min(95, Math.max(0, Number(product.discount) || 0));
        return Math.round(price * (1 - disc / 100));
      }

      function showToast(message, type = 'success') {
        const container = document.getElementById('toastContainer');
        const el = document.createElement('div');
        const bg = type === 'error' ? 'bg-red-700' : 'bg-slate-900';
        el.className = `toast-enter pointer-events-auto px-4 py-2.5 rounded-xl ${bg} text-white text-xs sm:text-sm font-medium shadow-lg flex items-center gap-2`;
        el.textContent = message;
        container.appendChild(el);
        setTimeout(() => {
          el.remove();
        }, 2800);
      }

      // DOM Elements
      const OWNER_PASSCODE = '216216216';
      const DEV_PASSCODE = 'dev216';
      const userView = document.getElementById('userView');
      const ownerView = document.getElementById('ownerView');
      const developerView = document.getElementById('developerView');
      const headerSubtitle = document.getElementById('headerSubtitle');
      const btnOpenCart = document.getElementById('btnOpenCart');
      const btnExitOwner = document.getElementById('btnExitOwner');

      function applyDevConfig() {
        const c = state.devConfig;
        const root = document.documentElement;
        root.style.setProperty('--brand-primary', c.primaryColor);
        root.style.setProperty('--brand-secondary', c.primaryColor);
        root.style.setProperty('--page-bg', c.bgColor);
        root.style.setProperty('--title-color', c.titleColor);
        root.style.setProperty('--text-color', c.textColor);
        root.style.setProperty('--title-font', c.titleFont);
        root.style.setProperty('--body-font', c.bodyFont);
        root.style.setProperty('--card-radius', c.cardRadius);

        const shopEl = document.getElementById('headerShopName');
        shopEl.textContent = c.shopName || 'Srinivasa Bags';
        shopEl.classList.remove('text-lg', 'sm:text-xl', 'text-xl', 'sm:text-2xl', 'text-2xl', 'sm:text-3xl');
        if (c.titleSize === 'sm') shopEl.classList.add('text-lg', 'sm:text-xl');
        else if (c.titleSize === 'lg') shopEl.classList.add('text-2xl', 'sm:text-3xl');
        else shopEl.classList.add('text-xl', 'sm:text-2xl');

        if (state.mode === 'user') {
          headerSubtitle.textContent = c.shopSubtitle || 'Authorized Luggage & Bag Store';
        }

        document.getElementById('heroBannerSection').classList.toggle('hidden', !c.showHero);
        document.getElementById('brandsSection').classList.toggle('hidden', !c.showBrands);
        if (state.mode === 'user') {
          btnOpenCart.classList.toggle('hidden', !c.showCart);
        }

        document.getElementById('heroEyebrowText').textContent = c.heroEyebrow;
        document.getElementById('heroTitleText').textContent = c.heroTitle;
        document.getElementById('heroDescText').textContent = c.heroDesc;
        document.getElementById('footerCopyright').innerHTML = `&copy; 2026 ${escapeHtml(c.shopName)}. All rights reserved.`;

        // Logo
        const headerLogoImg = document.getElementById('headerLogoImg');
        const headerLogoIcon = document.getElementById('headerLogoIcon');
        if (c.logoImage) {
          headerLogoImg.src = c.logoImage;
          headerLogoImg.classList.remove('hidden');
          headerLogoIcon.classList.add('hidden');
        } else {
          headerLogoImg.classList.add('hidden');
          headerLogoIcon.setAttribute('data-lucide', c.logoIcon || 'luggage');
          headerLogoIcon.classList.remove('hidden');
        }

        // Address & Contact
        document.getElementById('footerAddressText').textContent = c.shopAddress || '';
        document.getElementById('footerAddressBlock').classList.toggle('hidden', !c.shopAddress && !c.shopPhone && !c.shopHours);
        document.getElementById('footerPhoneText').textContent = c.shopPhone || '';
        document.getElementById('footerPhoneWrap').classList.toggle('hidden', !c.shopPhone);
        document.getElementById('footerHoursText').textContent = c.shopHours || '';
        document.getElementById('footerHoursWrap').classList.toggle('hidden', !c.shopHours);

        // Custom CSS
        document.getElementById('devCustomStyleTag').textContent = c.customCss || '';

        renderSocialLinks();
      }

      function renderSocialLinks() {
        const footerContainer = document.getElementById('footerSocialLinks');
        const devList = document.getElementById('devSocialList');
        const links = state.devConfig.socialLinks || [];

        footerContainer.innerHTML = '';
        if (links.length === 0) {
          footerContainer.classList.add('hidden');
        } else {
          footerContainer.classList.remove('hidden');
          links.forEach(item => {
            const a = document.createElement('a');
            a.href = item.url;
            a.target = '_blank';
            a.rel = 'noopener noreferrer';
            a.className = 'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-red-200 bg-red-50/70 hover:bg-red-100 text-xs font-semibold text-red-700 transition-colors';
            a.innerHTML = `<i data-lucide="external-link" class="w-3 h-3"></i><span>${escapeHtml(item.platform)}</span>`;
            footerContainer.appendChild(a);
          });
        }

        if (devList) {
          devList.innerHTML = '';
          if (links.length === 0) {
            devList.innerHTML = '<p class="text-xs text-slate-400">No social links added yet.</p>';
          } else {
            links.forEach(item => {
              const row = document.createElement('div');
              row.className = 'flex items-center justify-between gap-2 p-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs';
              row.innerHTML = `
                <div class="min-w-0">
                  <span class="font-bold text-slate-800">${escapeHtml(item.platform)}</span>
                  <div class="text-slate-500 truncate">${escapeHtml(item.url)}</div>
                </div>
                <button type="button" data-del-social="${item.id}" class="p-1.5 rounded-lg text-red-600 hover:bg-red-100 shrink-0" aria-label="Remove social link">
                  <i data-lucide="trash-2" class="w-4 h-4"></i>
                </button>
              `;
              devList.appendChild(row);
            });
          }
        }
      }

      function syncDevInputs() {
        const c = state.devConfig;
        document.getElementById('devPrimaryColor').value = c.primaryColor;
        document.getElementById('devTitleColor').value = c.titleColor;
        document.getElementById('devBgColor').value = c.bgColor;
        document.getElementById('devTextColor').value = c.textColor;
        document.getElementById('devShopName').value = c.shopName;
        document.getElementById('devShopSubtitle').value = c.shopSubtitle;
        document.getElementById('devTitleFont').value = c.titleFont;
        document.getElementById('devBodyFont').value = c.bodyFont;
        document.getElementById('devTitleSize').value = c.titleSize;
        document.getElementById('devCardRadius').value = c.cardRadius;
        document.getElementById('devToggleHero').checked = c.showHero;
        document.getElementById('devToggleBrands').checked = c.showBrands;
        document.getElementById('devToggleCart').checked = c.showCart;
        document.getElementById('devHeroEyebrow').value = c.heroEyebrow;
        document.getElementById('devHeroTitle').value = c.heroTitle;
        document.getElementById('devHeroDesc').value = c.heroDesc;
        document.getElementById('devLogoIconSelect').value = c.logoIcon || 'luggage';
        document.getElementById('devLogoUrl').value = c.logoImage && c.logoImage.startsWith('http') ? c.logoImage : '';
        document.getElementById('devShopAddress').value = c.shopAddress || '';
        document.getElementById('devShopPhone').value = c.shopPhone || '';
        document.getElementById('devShopHours').value = c.shopHours || '';
        document.getElementById('devCustomCss').value = c.customCss || '';
        const devPrev = document.getElementById('devLogoPreview');
        const devPh = document.getElementById('devLogoPlaceholder');
        if (c.logoImage) {
          devPrev.src = c.logoImage;
          devPrev.classList.remove('hidden');
          devPh.classList.add('hidden');
        } else {
          devPrev.classList.add('hidden');
          devPh.classList.remove('hidden');
        }
        document.getElementById('devRawDataJson').value = JSON.stringify({ products: state.products }, null, 2);
      }

      function setMode(mode) {
        state.mode = mode;
        userView.classList.toggle('hidden', mode !== 'user');
        ownerView.classList.toggle('hidden', mode !== 'owner');
        developerView.classList.toggle('hidden', mode !== 'developer');
        btnExitOwner.classList.toggle('hidden', mode === 'user');

        if (mode === 'user') {
          btnOpenCart.classList.toggle('hidden', !state.devConfig.showCart);
          headerSubtitle.textContent = state.devConfig.shopSubtitle;
        } else if (mode === 'owner') {
          btnOpenCart.classList.add('hidden');
          headerSubtitle.textContent = 'Owner Management Portal';
        } else {
          btnOpenCart.classList.add('hidden');
          headerSubtitle.textContent = 'Developer Mode';
          syncDevInputs();
        }
        applyDevConfig();
        renderAll();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }

      function openAuthModal(targetMode = 'owner') {
        state.authTargetMode = targetMode;
        const isDev = targetMode === 'developer';
        document.getElementById('authModalTitle').textContent = isDev ? 'Developer Verification' : 'Owner Verification';
        const pinInput = document.getElementById('ownerPinInput');
        pinInput.placeholder = isDev ? 'Enter developer password' : 'Enter owner passcode';
        pinInput.value = '';
        document.getElementById('ownerAuthError').classList.add('hidden');
        document.getElementById('ownerAuthModal').classList.remove('hidden');
        setTimeout(() => pinInput.focus(), 50);
      }

      function closeAuthModal() {
        document.getElementById('ownerAuthModal').classList.add('hidden');
      }

      // ==================== RENDER BRAND STRIP ====================
      function renderBrandStrip() {
        const strip = document.getElementById('brandLogoStrip');
        const clearBtn = document.getElementById('btnClearBrandFilter');
        clearBtn.classList.toggle('hidden', state.userBrand === 'All');
        strip.innerHTML = '';

        OFFICIAL_BRANDS.forEach(b => {
          const isActive = state.userBrand === b.name;
          const btn = document.createElement('button');
          btn.type = 'button';
          btn.className = `group p-2.5 rounded-xl border text-center transition-all flex flex-col items-center justify-center gap-1.5 min-h-[76px] ${
            isActive
              ? 'border-red-600 bg-red-50 ring-2 ring-red-500/30 shadow-sm'
              : `${b.accent} hover:border-red-300 hover:bg-red-50/40`
          }`;

          if (b.logo) {
            const img = document.createElement('img');
            img.src = b.logo;
            img.alt = `${b.name} logo`;
            img.className = 'h-7 w-auto max-w-[100px] object-contain mx-auto';
            img.onerror = function () {
              this.replaceWith(createBrandTextFallback(b.name));
            };
            btn.appendChild(img);
          } else {
            btn.appendChild(createBrandTextFallback(b.name));
          }

          const label = document.createElement('span');
          label.className = `text-[10px] font-bold uppercase tracking-wider ${
            b.name === 'VIP' ? 'text-red-700' : 'text-slate-500'
          }`;
          label.textContent = b.name === 'VIP' ? 'VIP Flagship' : (b.name === 'Genie' ? 'Genie Backpacks' : b.name);
          btn.appendChild(label);

          btn.addEventListener('click', () => {
            state.userBrand = state.userBrand === b.name ? 'All' : b.name;
            renderUserView();
            if (window.lucide) lucide.createIcons();
          });
          strip.appendChild(btn);
        });
      }

      function createBrandTextFallback(name) {
        const span = document.createElement('span');
        span.className = name === 'VIP'
          ? 'px-2.5 py-0.5 rounded bg-red-600 text-white font-black text-sm tracking-widest'
          : 'font-extrabold text-xs sm:text-sm tracking-tight text-slate-800';
        span.textContent = name.toUpperCase();
        return span;
      }

      // ==================== RENDER USER VIEW ====================
      function renderUserView() {
        renderBrandStrip();

        const availableProducts = state.products.filter(p => p.available === true);
        const discountedCount = availableProducts.filter(p => (Number(p.discount) || 0) > 0).length;

        document.getElementById('userAvailableStat').textContent = availableProducts.length;
        document.getElementById('userDiscountStat').textContent = discountedCount;

        // Categories from available products only
        const categories = ['All', ...new Set(availableProducts.map(p => p.category).filter(Boolean))];
        if (!categories.includes(state.userCategory)) {
          state.userCategory = 'All';
        }

        const chipsContainer = document.getElementById('userCategoryChips');
        chipsContainer.innerHTML = '';
        categories.forEach(cat => {
          const btn = document.createElement('button');
          btn.type = 'button';
          const active = state.userCategory === cat;
          btn.className = active
            ? 'px-3.5 py-1.5 rounded-full text-xs font-semibold bg-red-600 text-white shrink-0 transition-colors'
            : 'px-3.5 py-1.5 rounded-full text-xs font-semibold bg-red-50 text-red-900 hover:bg-red-100 shrink-0 transition-colors';
          btn.textContent = cat;
          btn.addEventListener('click', () => {
            state.userCategory = cat;
            renderUserView();
          });
          chipsContainer.appendChild(btn);
        });

        // Filter & Sort
        const q = state.userSearch.trim().toLowerCase();
        let filtered = availableProducts.filter(p => {
          const brand = (p.brand || '').toLowerCase();
          const matchesQuery = !q || p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q) || brand.includes(q);
          const matchesBrand = state.userBrand === 'All' || (p.brand || '') === state.userBrand;
          const matchesCat = state.userCategory === 'All' || p.category === state.userCategory;
          const matchesDisc = !state.userDiscountOnly || (Number(p.discount) || 0) > 0;
          return matchesQuery && matchesBrand && matchesCat && matchesDisc;
        });

        if (state.userSort === 'price-asc') {
          filtered.sort((a, b) => getFinalPrice(a) - getFinalPrice(b));
        } else if (state.userSort === 'price-desc') {
          filtered.sort((a, b) => getFinalPrice(b) - getFinalPrice(a));
        } else if (state.userSort === 'discount-desc') {
          filtered.sort((a, b) => (Number(b.discount) || 0) - (Number(a.discount) || 0));
        }

        const grid = document.getElementById('userProductGrid');
        const empty = document.getElementById('userEmptyState');
        grid.innerHTML = '';

        if (filtered.length === 0) {
          grid.classList.add('hidden');
          empty.classList.remove('hidden');
        } else {
          grid.classList.remove('hidden');
          empty.classList.add('hidden');

          filtered.forEach(p => {
            const finalPrice = getFinalPrice(p);
            const hasDiscount = (Number(p.discount) || 0) > 0;

            const card = document.createElement('article');
            card.className = 'group bg-white rounded-2xl border border-red-100 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col';

            const imgWrap = document.createElement('div');
            imgWrap.className = 'relative aspect-[4/3] bg-slate-100 overflow-hidden cursor-pointer';
            imgWrap.addEventListener('click', () => openDetailModal(p.id));

            if (p.image) {
              const img = document.createElement('img');
              img.src = p.image;
              img.alt = p.name;
              img.className = 'w-full h-full object-cover group-hover:scale-105 transition-transform duration-300';
              imgWrap.appendChild(img);
            } else {
              imgWrap.innerHTML = '<div class="w-full h-full flex items-center justify-center text-slate-400"><i data-lucide="package" class="w-10 h-10"></i></div>';
            }

            if (hasDiscount) {
              const badge = document.createElement('span');
              badge.className = 'absolute top-3 left-3 px-2.5 py-1 rounded-full bg-red-600 text-white text-xs font-bold shadow-sm';
              badge.textContent = `${p.discount}% OFF`;
              imgWrap.appendChild(badge);
            }

            if (p.brand) {
              const bBadge = document.createElement('span');
              bBadge.className = 'absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded-md bg-white/90 backdrop-blur-xs text-[10px] font-bold uppercase tracking-wider text-slate-800 shadow-xs';
              bBadge.textContent = p.brand;
              imgWrap.appendChild(bBadge);
            }

            const body = document.createElement('div');
            body.className = 'p-4 flex-1 flex flex-col justify-between gap-3';

            const top = document.createElement('div');
            top.className = 'space-y-1 cursor-pointer';
            top.addEventListener('click', () => openDetailModal(p.id));

            const catEl = document.createElement('div');
            catEl.className = 'text-[11px] font-semibold uppercase tracking-wider text-red-600';
            catEl.textContent = p.category;

            const nameEl = document.createElement('h3');
            nameEl.className = 'font-semibold text-slate-900 text-base leading-snug line-clamp-2';
            nameEl.textContent = p.name;

            top.appendChild(catEl);
            top.appendChild(nameEl);

            const bottom = document.createElement('div');
            bottom.className = 'pt-2 border-t border-slate-100 flex items-center justify-between gap-2';

            const priceBox = document.createElement('div');
            priceBox.className = 'flex items-baseline gap-1.5 flex-wrap';

            const finalEl = document.createElement('span');
            finalEl.className = 'text-lg font-bold text-slate-900';
            finalEl.textContent = formatINR(finalPrice);
            priceBox.appendChild(finalEl);

            if (hasDiscount) {
              const origEl = document.createElement('span');
              origEl.className = 'text-xs text-slate-400 line-through';
              origEl.textContent = formatINR(p.price);
              priceBox.appendChild(origEl);
            }

            const addBtn = document.createElement('button');
            addBtn.type = 'button';
            addBtn.className = 'px-3.5 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-semibold transition-colors shrink-0 min-h-[36px]';
            addBtn.textContent = 'Add';
            addBtn.addEventListener('click', () => addToCart(p.id));

            bottom.appendChild(priceBox);
            bottom.appendChild(addBtn);

            body.appendChild(top);
            body.appendChild(bottom);

            card.appendChild(imgWrap);
            card.appendChild(body);
            grid.appendChild(card);
          });
        }
      }

      // ==================== RENDER OWNER VIEW ====================
      function renderOwnerView() {
        const total = state.products.length;
        const available = state.products.filter(p => p.available).length;
        const hidden = total - available;
        const discounted = state.products.filter(p => (Number(p.discount) || 0) > 0).length;

        document.getElementById('ownerStatTotal').textContent = total;
        document.getElementById('ownerStatAvailable').textContent = available;
        document.getElementById('ownerStatHidden').textContent = hidden;
        document.getElementById('ownerStatDiscounted').textContent = discounted;

        const q = state.ownerSearch.trim().toLowerCase();
        const filtered = state.products.filter(p => {
          const matchesQ = !q || p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q) || (p.brand || '').toLowerCase().includes(q) || (p.internalNote || '').toLowerCase().includes(q);
          let matchesStatus = true;
          if (state.ownerStatus === 'available') matchesStatus = p.available === true;
          else if (state.ownerStatus === 'hidden') matchesStatus = p.available === false;
          else if (state.ownerStatus === 'discounted') matchesStatus = (Number(p.discount) || 0) > 0;
          return matchesQ && matchesStatus;
        });

        const tbody = document.getElementById('ownerTableBody');
        const mobileList = document.getElementById('ownerMobileList');
        const empty = document.getElementById('ownerEmptyState');
        tbody.innerHTML = '';
        mobileList.innerHTML = '';

        if (filtered.length === 0) {
          empty.classList.remove('hidden');
          return;
        }
        empty.classList.add('hidden');

        filtered.forEach(p => {
          const finalPrice = getFinalPrice(p);

          // Desktop Row
          const tr = document.createElement('tr');
          tr.className = 'hover:bg-red-50/30 transition-colors';

          tr.innerHTML = `
            <td class="py-3.5 px-5">
              <div class="flex items-center gap-3">
                <div class="w-12 h-10 rounded-lg bg-slate-100 border border-slate-200 overflow-hidden shrink-0 flex items-center justify-center">
                  ${p.image ? `<img src="${escapeAttr(p.image)}" alt="${escapeAttr(p.name)}" class="w-full h-full object-cover" />` : `<i data-lucide="package" class="w-5 h-5 text-slate-400"></i>`}
                </div>
                <div class="min-w-0">
                  <div class="font-semibold text-slate-900 truncate max-w-[220px]">${escapeHtml(p.name)}</div>
                  ${p.internalNote ? `<div class="text-xs text-slate-400 truncate max-w-[220px]">${escapeHtml(p.internalNote)}</div>` : ''}
                </div>
              </div>
            </td>
            <td class="py-3.5 px-4 text-slate-600">
              <div class="font-semibold text-red-700 text-xs">${escapeHtml(p.brand || 'Other')}</div>
              <div class="text-xs text-slate-500">${escapeHtml(p.category)}</div>
            </td>
            <td class="py-3.5 px-4 font-medium text-slate-700">${formatINR(p.price)}</td>
            <td class="py-3.5 px-4">
              ${p.discount > 0 ? `<span class="px-2 py-0.5 rounded-full text-xs font-semibold bg-red-50 text-red-700">${p.discount}% OFF</span>` : `<span class="text-slate-400">—</span>`}
            </td>
            <td class="py-3.5 px-4 font-bold text-slate-900">${formatINR(finalPrice)}</td>
            <td class="py-3.5 px-4"></td>
            <td class="py-3.5 px-5 text-right"></td>
          `;

          // Visibility toggle button
          const visCell = tr.children[5];
          const visBtn = document.createElement('button');
          visBtn.type = 'button';
          visBtn.className = p.available
            ? 'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100 transition-colors'
            : 'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200 hover:bg-amber-100 transition-colors';
          visBtn.innerHTML = `<span class="w-1.5 h-1.5 rounded-full ${p.available ? 'bg-emerald-500' : 'bg-amber-500'}"></span><span>${p.available ? 'Available' : 'Hidden'}</span>`;
          visBtn.addEventListener('click', () => toggleAvailability(p.id));
          visCell.appendChild(visBtn);

          // Action buttons
          const actCell = tr.children[6];
          const actWrap = document.createElement('div');
          actWrap.className = 'inline-flex items-center gap-1.5';

          const editBtn = document.createElement('button');
          editBtn.type = 'button';
          editBtn.className = 'px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors';
          editBtn.textContent = 'Modify';
          editBtn.addEventListener('click', () => openOwnerModal(p.id));

          const delBtn = document.createElement('button');
          delBtn.type = 'button';
          delBtn.className = 'p-1.5 rounded-lg border border-slate-200 text-red-600 hover:bg-red-50 transition-colors';
          delBtn.innerHTML = '<i data-lucide="trash-2" class="w-4 h-4"></i>';
          delBtn.setAttribute('aria-label', 'Delete product');
          delBtn.addEventListener('click', () => requestDeleteProduct(p.id));

          actWrap.appendChild(editBtn);
          actWrap.appendChild(delBtn);
          actCell.appendChild(actWrap);
          tbody.appendChild(tr);

          // Mobile Card
          const mCard = document.createElement('div');
          mCard.className = 'p-4 space-y-3';
          mCard.innerHTML = `
            <div class="flex items-start justify-between gap-3">
              <div class="flex items-center gap-3 min-w-0">
                <div class="w-14 h-12 rounded-xl bg-slate-100 border border-slate-200 overflow-hidden shrink-0 flex items-center justify-center">
                  ${p.image ? `<img src="${escapeAttr(p.image)}" alt="${escapeAttr(p.name)}" class="w-full h-full object-cover" />` : `<i data-lucide="package" class="w-5 h-5 text-slate-400"></i>`}
                </div>
                <div class="min-w-0">
                  <div class="font-semibold text-slate-900 truncate">${escapeHtml(p.name)}</div>
                  <div class="text-xs text-slate-500">${escapeHtml(p.brand || '')} • ${escapeHtml(p.category)} • ${formatINR(finalPrice)} ${p.discount > 0 ? `(${p.discount}% OFF)` : ''}</div>
                </div>
              </div>
            </div>
          `;
          const mActions = document.createElement('div');
          mActions.className = 'flex items-center justify-between gap-2 pt-1';

          const mVisBtn = visBtn.cloneNode(true);
          mVisBtn.className += ' min-h-[42px] px-3.5';
          mVisBtn.addEventListener('click', () => toggleAvailability(p.id));

          const mRight = document.createElement('div');
          mRight.className = 'flex items-center gap-2';
          const mEdit = editBtn.cloneNode(true);
          mEdit.className += ' min-h-[42px] px-4';
          mEdit.addEventListener('click', () => openOwnerModal(p.id));
          const mDel = delBtn.cloneNode(true);
          mDel.className += ' min-h-[42px] min-w-[42px] flex items-center justify-center';
          mDel.addEventListener('click', () => requestDeleteProduct(p.id));
          mRight.appendChild(mEdit);
          mRight.appendChild(mDel);

          mActions.appendChild(mVisBtn);
          mActions.appendChild(mRight);
          mCard.appendChild(mActions);
          mobileList.appendChild(mCard);
        });
      }

      // ==================== CART LOGIC ====================
      function addToCart(productId) {
        const prod = state.products.find(p => p.id === productId && p.available);
        if (!prod) return;
        state.cart[productId] = (state.cart[productId] || 0) + 1;
        renderCart();
        showToast(`Added "${prod.name}" to cart`);
      }

      function renderCart() {
        Object.keys(state.cart).forEach(id => {
          const prod = state.products.find(p => p.id === id && p.available);
          if (!prod || state.cart[id] <= 0) delete state.cart[id];
        });

        const entries = Object.entries(state.cart);
        const totalQty = entries.reduce((sum, [, qty]) => sum + qty, 0);
        const badge = document.getElementById('cartCountBadge');
        badge.textContent = totalQty;
        badge.classList.toggle('hidden', totalQty === 0);

        const container = document.getElementById('cartItemsContainer');
        container.innerHTML = '';

        let subtotal = 0;
        let savings = 0;

        if (entries.length === 0) {
          container.innerHTML = `
            <div class="h-full flex flex-col items-center justify-center text-center py-12 space-y-2">
              <div class="w-12 h-12 rounded-2xl bg-red-50 text-red-400 flex items-center justify-center">
                <i data-lucide="shopping-cart" class="w-6 h-6"></i>
              </div>
              <p class="text-sm font-semibold text-slate-700">Your cart is empty</p>
              <p class="text-xs text-slate-500">Add available products from Srinivasa Bags to get started.</p>
            </div>
          `;
        } else {
          entries.forEach(([id, qty]) => {
            const p = state.products.find(item => item.id === id);
            if (!p) return;
            const finalPrice = getFinalPrice(p);
            subtotal += finalPrice * qty;
            savings += (p.price - finalPrice) * qty;

            const row = document.createElement('div');
            row.className = 'flex items-center gap-3 p-3 rounded-xl border border-slate-200 bg-white';
            row.innerHTML = `
              <div class="w-16 h-14 rounded-lg bg-slate-100 overflow-hidden shrink-0">
                ${p.image ? `<img src="${escapeAttr(p.image)}" alt="${escapeAttr(p.name)}" class="w-full h-full object-cover" />` : ''}
              </div>
              <div class="flex-1 min-w-0">
                <div class="text-sm font-semibold text-slate-900 truncate">${escapeHtml(p.name)}</div>
                <div class="text-xs text-slate-500">${formatINR(finalPrice)} each</div>
              </div>
              <div class="flex items-center gap-1.5">
                <button type="button" data-cart-dec="${p.id}" class="w-7 h-7 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-100 font-semibold text-sm">-</button>
                <span class="w-6 text-center text-xs font-bold">${qty}</span>
                <button type="button" data-cart-inc="${p.id}" class="w-7 h-7 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-100 font-semibold text-sm">+</button>
              </div>
            `;
            container.appendChild(row);
          });
        }

        document.getElementById('cartSubtotal').textContent = formatINR(subtotal);
        document.getElementById('cartSavingsTotal').textContent = '-' + formatINR(savings);
        document.getElementById('btnCheckout').disabled = entries.length === 0;
        if (window.lucide) lucide.createIcons();
      }

      // ==================== MODALS ====================
      function openDetailModal(productId) {
        const p = state.products.find(item => item.id === productId && item.available);
        if (!p) return;
        state.activeDetailId = p.id;
        const finalPrice = getFinalPrice(p);
        const hasDiscount = (Number(p.discount) || 0) > 0;

        const imgEl = document.getElementById('detailImg');
        imgEl.src = p.image || '';
        imgEl.alt = p.name;

        const badge = document.getElementById('detailDiscountBadge');
        badge.classList.toggle('hidden', !hasDiscount);
        badge.textContent = `${p.discount}% OFF`;

        document.getElementById('detailBrand').textContent = p.brand || 'VIP';
        document.getElementById('detailCategory').textContent = p.category;
        document.getElementById('detailName').textContent = p.name;
        document.getElementById('detailFinalPrice').textContent = formatINR(finalPrice);

        const origEl = document.getElementById('detailOriginalPrice');
        const savEl = document.getElementById('detailSavingsText');
        origEl.classList.toggle('hidden', !hasDiscount);
        savEl.classList.toggle('hidden', !hasDiscount);
        if (hasDiscount) {
          origEl.textContent = formatINR(p.price);
          savEl.textContent = `Save ${formatINR(p.price - finalPrice)}`;
        }

        document.getElementById('detailDescription').textContent = p.description || 'No additional details provided.';
        document.getElementById('productDetailModal').classList.remove('hidden');
      }

      function closeDetailModal() {
        document.getElementById('productDetailModal').classList.add('hidden');
        state.activeDetailId = null;
      }

      let currentFormImageData = '';

      function updateFormPreviewImage(src) {
        currentFormImageData = src || '';
        const preview = document.getElementById('formImgPreview');
        const placeholder = document.getElementById('formImgPlaceholder');
        if (currentFormImageData) {
          preview.src = currentFormImageData;
          preview.classList.remove('hidden');
          placeholder.classList.add('hidden');
        } else {
          preview.src = '';
          preview.classList.add('hidden');
          placeholder.classList.remove('hidden');
        }
      }

      function updateFinalPricePreview() {
        const price = Number(document.getElementById('formPrice').value) || 0;
        const discount = Math.min(95, Math.max(0, Number(document.getElementById('formDiscount').value) || 0));
        const finalP = Math.round(price * (1 - discount / 100));
        document.getElementById('formFinalPricePreview').textContent = formatINR(finalP);
      }

      function openOwnerModal(productId = null) {
        const modal = document.getElementById('ownerProductModal');
        const title = document.getElementById('ownerModalTitle');
        document.getElementById('ownerProductForm').reset();
        document.getElementById('formImageFile').value = '';

        if (productId) {
          const p = state.products.find(item => item.id === productId);
          if (!p) return;
          title.textContent = 'Modify Product & Details';
          document.getElementById('editProductId').value = p.id;
          document.getElementById('formName').value = p.name;
          document.getElementById('formBrand').value = p.brand || 'VIP';
          document.getElementById('formCategory').value = p.category;
          document.getElementById('formPrice').value = p.price;
          document.getElementById('formDiscount').value = p.discount || 0;
          document.getElementById('formDescription').value = p.description || '';
          document.getElementById('formInternalNote').value = p.internalNote || '';
          document.getElementById('formAvailable').checked = Boolean(p.available);
          document.getElementById('formImageUrl').value = p.image && p.image.startsWith('http') ? p.image : '';
          updateFormPreviewImage(p.image || '');
        } else {
          title.textContent = 'Upload New Product';
          document.getElementById('editProductId').value = '';
          document.getElementById('formBrand').value = 'VIP';
          document.getElementById('formDiscount').value = 0;
          document.getElementById('formAvailable').checked = true;
          updateFormPreviewImage('');
        }
        updateFinalPricePreview();
        modal.classList.remove('hidden');
        if (window.lucide) lucide.createIcons();
      }

      function closeOwnerModal() {
        document.getElementById('ownerProductModal').classList.add('hidden');
      }

      function toggleAvailability(productId) {
        const p = state.products.find(item => item.id === productId);
        if (!p) return;
        p.available = !p.available;
        saveProducts();
        renderAll();
        showToast(p.available ? `"${p.name}" is now visible to users` : `"${p.name}" hidden from users`);
      }

      function requestDeleteProduct(productId) {
        const p = state.products.find(item => item.id === productId);
        if (!p) return;
        openConfirmModal(
          'Delete Product',
          `Remove "${p.name}" permanently from Srinivasa Bags?`,
          () => {
            state.products = state.products.filter(item => item.id !== productId);
            delete state.cart[productId];
            saveProducts();
            renderAll();
            showToast(`Deleted "${p.name}"`);
          }
        );
      }

      function openConfirmModal(title, message, onConfirm) {
        document.getElementById('confirmTitle').textContent = title;
        document.getElementById('confirmMessage').textContent = message;
        state.pendingConfirmAction = onConfirm;
        document.getElementById('confirmModal').classList.remove('hidden');
      }

      function closeConfirmModal() {
        document.getElementById('confirmModal').classList.add('hidden');
        state.pendingConfirmAction = null;
      }

      function escapeHtml(str) {
        return String(str || '')
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      }

      function escapeAttr(str) {
        return String(str || '').replace(/"/g, '&quot;');
      }

      function renderAll() {
        renderUserView();
        renderOwnerView();
        renderCart();
        if (window.lucide) lucide.createIcons();
      }

      // ==================== EVENT LISTENERS ====================
      document.getElementById('btnOwnerAccess').addEventListener('click', () => openAuthModal('owner'));
      document.getElementById('btnDevToOwner').addEventListener('click', () => setMode('owner'));
      document.getElementById('btnDevToStore').addEventListener('click', () => setMode('user'));
      document.getElementById('btnDevReset').addEventListener('click', () => {
        state.devConfig = JSON.parse(JSON.stringify(DEFAULT_DEV_CONFIG));
        saveDevConfig();
        syncDevInputs();
        applyDevConfig();
        if (window.lucide) lucide.createIcons();
        showToast('Theme reset to default');
      });

      const devInputBindings = [
        ['devPrimaryColor', 'primaryColor', 'input'],
        ['devTitleColor', 'titleColor', 'input'],
        ['devBgColor', 'bgColor', 'input'],
        ['devTextColor', 'textColor', 'input'],
        ['devShopName', 'shopName', 'input'],
        ['devShopSubtitle', 'shopSubtitle', 'input'],
        ['devTitleFont', 'titleFont', 'change'],
        ['devBodyFont', 'bodyFont', 'change'],
        ['devTitleSize', 'titleSize', 'change'],
        ['devCardRadius', 'cardRadius', 'change'],
        ['devHeroEyebrow', 'heroEyebrow', 'input'],
        ['devHeroTitle', 'heroTitle', 'input'],
        ['devHeroDesc', 'heroDesc', 'input'],
        ['devShopAddress', 'shopAddress', 'input'],
        ['devShopPhone', 'shopPhone', 'input'],
        ['devShopHours', 'shopHours', 'input'],
        ['devCustomCss', 'customCss', 'input'],
        ['devLogoIconSelect', 'logoIcon', 'change']
      ];
      devInputBindings.forEach(([elId, key, evt]) => {
        document.getElementById(elId).addEventListener(evt, (e) => {
          state.devConfig[key] = e.target.value;
          saveDevConfig();
          applyDevConfig();
        });
      });

      [
        ['devToggleHero', 'showHero'],
        ['devToggleBrands', 'showBrands'],
        ['devToggleCart', 'showCart']
      ].forEach(([elId, key]) => {
        document.getElementById(elId).addEventListener('change', (e) => {
          state.devConfig[key] = e.target.checked;
          saveDevConfig();
          applyDevConfig();
        });
      });

      document.querySelectorAll('[data-theme-preset]').forEach(btn => {
        btn.addEventListener('click', () => {
          const preset = btn.getAttribute('data-theme-preset');
          const presets = {
            red: { primaryColor: '#dc2626', titleColor: '#dc2626', bgColor: '#fff5f5', textColor: '#0f172a' },
            indigo: { primaryColor: '#4f46e5', titleColor: '#4f46e5', bgColor: '#f8fafc', textColor: '#0f172a' },
            emerald: { primaryColor: '#059669', titleColor: '#059669', bgColor: '#f0fdf4', textColor: '#0f172a' },
            dark: { primaryColor: '#0f172a', titleColor: '#0f172a', bgColor: '#f1f5f9', textColor: '#0f172a' }
          };
          Object.assign(state.devConfig, presets[preset] || presets.red);
          saveDevConfig();
          syncDevInputs();
          applyDevConfig();
          showToast('Theme preset applied');
        });
      });

      document.getElementById('devLogoFile').addEventListener('change', (e) => {
        const file = e.target.files && e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (ev) => {
          const img = new Image();
          img.onload = () => {
            const maxW = 300;
            const scale = img.width > maxW ? maxW / img.width : 1;
            const canvas = document.createElement('canvas');
            canvas.width = Math.round(img.width * scale);
            canvas.height = Math.round(img.height * scale);
            canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height);
            state.devConfig.logoImage = canvas.toDataURL('image/png');
            saveDevConfig();
            syncDevInputs();
            applyDevConfig();
            if (window.lucide) lucide.createIcons();
            showToast('Store logo updated');
          };
          img.src = ev.target.result;
        };
        reader.readAsDataURL(file);
      });

      document.getElementById('devLogoUrl').addEventListener('input', (e) => {
        state.devConfig.logoImage = e.target.value.trim();
        saveDevConfig();
        applyDevConfig();
        if (window.lucide) lucide.createIcons();
      });

      document.getElementById('btnDevClearLogo').addEventListener('click', () => {
        state.devConfig.logoImage = '';
        document.getElementById('devLogoUrl').value = '';
        saveDevConfig();
        syncDevInputs();
        applyDevConfig();
        if (window.lucide) lucide.createIcons();
        showToast('Reverted to icon logo');
      });

      document.getElementById('btnDevLoadRawData').addEventListener('click', () => {
        document.getElementById('devRawDataJson').value = JSON.stringify({ products: state.products }, null, 2);
        showToast('Data refreshed');
      });

      document.getElementById('btnDevApplyRawData').addEventListener('click', () => {
        try {
          const parsed = JSON.parse(document.getElementById('devRawDataJson').value);
          if (parsed && Array.isArray(parsed.products)) {
            state.products = parsed.products;
            saveProducts();
            renderAll();
            showToast('Store data updated');
          } else {
            showToast('JSON must contain a products array', 'error');
          }
        } catch (err) {
          showToast('Invalid JSON syntax', 'error');
        }
      });

      document.getElementById('devSocialForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const platform = document.getElementById('devSocialPlatform').value;
        const url = document.getElementById('devSocialUrl').value.trim();
        if (!url) return;
        state.devConfig.socialLinks.push({ id: 'soc-' + Date.now(), platform, url });
        saveDevConfig();
        applyDevConfig();
        if (window.lucide) lucide.createIcons();
        document.getElementById('devSocialUrl').value = '';
        showToast(`Added ${platform} link`);
      });

      document.getElementById('devSocialList').addEventListener('click', (e) => {
        const del = e.target.closest('[data-del-social]');
        if (!del) return;
        const id = del.getAttribute('data-del-social');
        state.devConfig.socialLinks = state.devConfig.socialLinks.filter(s => s.id !== id);
        saveDevConfig();
        applyDevConfig();
        if (window.lucide) lucide.createIcons();
        showToast('Social link removed');
      });
      document.getElementById('btnCloseAuthModal').addEventListener('click', closeAuthModal);
      document.getElementById('btnCancelAuth').addEventListener('click', closeAuthModal);
      btnExitOwner.addEventListener('click', () => {
        setMode('user');
        showToast('Returned to Customer Storefront');
      });

      document.getElementById('ownerAuthForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const pin = document.getElementById('ownerPinInput').value.trim();
        if (pin === DEV_PASSCODE) {
          closeAuthModal();
          setMode('developer');
          showToast('Developer Mode unlocked');
        } else if (pin === OWNER_PASSCODE && state.authTargetMode !== 'developer') {
          closeAuthModal();
          setMode('owner');
          showToast('Owner Portal unlocked');
        } else {
          document.getElementById('ownerAuthError').classList.remove('hidden');
        }
      });

      document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && !e.shiftKey && !e.altKey && e.key.toLowerCase() === 'd') {
          e.preventDefault();
          if (state.mode === 'developer') setMode('user');
          else openAuthModal('developer');
        } else if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === 'o') {
          e.preventDefault();
          if (state.mode === 'user') openAuthModal('owner');
          else setMode('user');
        }
      });

      document.getElementById('btnExportCatalog').addEventListener('click', () => {
        const blob = new Blob([JSON.stringify(state.products, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'srinivasa-bags-catalog.json';
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
        showToast('Catalog exported for other devices');
      });

      document.getElementById('inputImportCatalog').addEventListener('change', (e) => {
        const file = e.target.files && e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (ev) => {
          try {
            const imported = JSON.parse(ev.target.result);
            if (!Array.isArray(imported)) throw new Error('Invalid format');
            state.products = imported;
            saveProducts();
            renderAll();
            showToast(`Imported ${imported.length} products`);
          } catch (err) {
            showToast('Invalid catalog JSON file', 'error');
          }
          e.target.value = '';
        };
        reader.readAsText(file);
      });

      document.getElementById('btnClearBrandFilter').addEventListener('click', () => {
        state.userBrand = 'All';
        renderUserView();
        if (window.lucide) lucide.createIcons();
      });

      document.getElementById('userSearchInput').addEventListener('input', (e) => {
        state.userSearch = e.target.value;
        renderUserView();
        if (window.lucide) lucide.createIcons();
      });
      document.getElementById('userDiscountOnly').addEventListener('change', (e) => {
        state.userDiscountOnly = e.target.checked;
        renderUserView();
        if (window.lucide) lucide.createIcons();
      });
      document.getElementById('userSortSelect').addEventListener('change', (e) => {
        state.userSort = e.target.value;
        renderUserView();
        if (window.lucide) lucide.createIcons();
      });
      document.getElementById('btnResetUserFilters').addEventListener('click', () => {
        state.userSearch = '';
        state.userBrand = 'All';
        state.userCategory = 'All';
        state.userDiscountOnly = false;
        state.userSort = 'featured';
        document.getElementById('userSearchInput').value = '';
        document.getElementById('userDiscountOnly').checked = false;
        document.getElementById('userSortSelect').value = 'featured';
        renderAll();
      });

      document.getElementById('ownerSearchInput').addEventListener('input', (e) => {
        state.ownerSearch = e.target.value;
        renderOwnerView();
        if (window.lucide) lucide.createIcons();
      });
      document.getElementById('ownerStatusFilter').addEventListener('change', (e) => {
        state.ownerStatus = e.target.value;
        renderOwnerView();
        if (window.lucide) lucide.createIcons();
      });

      document.getElementById('btnOpenUploadModal').addEventListener('click', () => openOwnerModal(null));
      document.getElementById('btnCloseOwnerModal').addEventListener('click', closeOwnerModal);
      document.getElementById('btnCancelOwnerModal').addEventListener('click', closeOwnerModal);

      document.getElementById('formPrice').addEventListener('input', updateFinalPricePreview);
      document.getElementById('formDiscount').addEventListener('input', updateFinalPricePreview);

      document.getElementById('btnMobileUpload').addEventListener('click', () => openOwnerModal(null));
      document.getElementById('btnMobileExitOwner').addEventListener('click', () => {
        setMode('user');
        showToast('Returned to Customer Storefront');
      });

      document.getElementById('formImageFile').addEventListener('change', (e) => {
        const file = e.target.files && e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (ev) => {
          const img = new Image();
          img.onload = () => {
            const maxW = 900;
            const scale = img.width > maxW ? maxW / img.width : 1;
            const canvas = document.createElement('canvas');
            canvas.width = Math.round(img.width * scale);
            canvas.height = Math.round(img.height * scale);
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            const compressed = canvas.toDataURL('image/jpeg', 0.82);
            updateFormPreviewImage(compressed);
            document.getElementById('formImageUrl').value = '';
          };
          img.onerror = () => {
            updateFormPreviewImage(ev.target.result);
            document.getElementById('formImageUrl').value = '';
          };
          img.src = ev.target.result;
        };
        reader.readAsDataURL(file);
      });

      document.getElementById('formImageUrl').addEventListener('input', (e) => {
        const val = e.target.value.trim();
        if (val) updateFormPreviewImage(val);
      });

      document.getElementById('ownerProductForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const id = document.getElementById('editProductId').value;
        const name = document.getElementById('formName').value.trim();
        const brand = document.getElementById('formBrand').value.trim() || 'VIP';
        const category = document.getElementById('formCategory').value.trim() || 'Luggage Bags';
        const price = Math.max(1, Number(document.getElementById('formPrice').value) || 0);
        const discount = Math.min(95, Math.max(0, Number(document.getElementById('formDiscount').value) || 0));
        const description = document.getElementById('formDescription').value.trim();
        const internalNote = document.getElementById('formInternalNote').value.trim();
        const available = document.getElementById('formAvailable').checked;

        if (!name) return;

        if (id) {
          const existing = state.products.find(p => p.id === id);
          if (existing) {
            existing.name = name;
            existing.brand = brand;
            existing.category = category;
            existing.price = price;
            existing.discount = discount;
            existing.description = description;
            existing.internalNote = internalNote;
            existing.available = available;
            existing.image = currentFormImageData;
          }
          showToast(`Updated "${name}"`);
        } else {
          const newProd = {
            id: 'prod-' + Date.now(),
            name,
            brand,
            category,
            price,
            discount,
            available,
            image: currentFormImageData,
            description,
            internalNote
          };
          state.products.unshift(newProd);
          showToast(`Uploaded "${name}"`);
        }

        saveProducts();
        closeOwnerModal();
        renderAll();
      });

      document.getElementById('btnResetDemo').addEventListener('click', () => {
        openConfirmModal(
          'Reset Demo Store',
          'Restore the default Srinivasa Bags catalog? Any custom edits will be replaced.',
          () => {
            state.products = JSON.parse(JSON.stringify(DEFAULT_PRODUCTS));
            state.cart = {};
            saveProducts();
            renderAll();
            showToast('Store reset to default catalog');
          }
        );
      });

      document.getElementById('btnConfirmCancel').addEventListener('click', closeConfirmModal);
      document.getElementById('btnConfirmOk').addEventListener('click', () => {
        if (typeof state.pendingConfirmAction === 'function') {
          state.pendingConfirmAction();
        }
        closeConfirmModal();
      });

      document.getElementById('btnCloseDetailModal').addEventListener('click', closeDetailModal);
      document.getElementById('btnDetailAddToCart').addEventListener('click', () => {
        if (state.activeDetailId) {
          addToCart(state.activeDetailId);
          closeDetailModal();
        }
      });

      // Cart Drawer
      document.getElementById('btnOpenCart').addEventListener('click', () => {
        document.getElementById('cartDrawer').classList.remove('hidden');
      });
      document.getElementById('btnCloseCart').addEventListener('click', () => {
        document.getElementById('cartDrawer').classList.add('hidden');
      });
      document.getElementById('cartItemsContainer').addEventListener('click', (e) => {
        const inc = e.target.closest('[data-cart-inc]');
        const dec = e.target.closest('[data-cart-dec]');
        if (inc) {
          const id = inc.getAttribute('data-cart-inc');
          state.cart[id] = (state.cart[id] || 0) + 1;
          renderCart();
        } else if (dec) {
          const id = dec.getAttribute('data-cart-dec');
          state.cart[id] = (state.cart[id] || 0) - 1;
          if (state.cart[id] <= 0) delete state.cart[id];
          renderCart();
        }
      });
      document.getElementById('btnCheckout').addEventListener('click', () => {
        state.cart = {};
        renderCart();
        document.getElementById('cartDrawer').classList.add('hidden');
        showToast('Order placed! Thank you for shopping at Srinivasa Bags.');
      });

      // Initial render (supports #dev URL hash on mobile)
      setMode('user');
      if (window.location.hash === '#dev') {
        openAuthModal('developer');
      }
    })();
