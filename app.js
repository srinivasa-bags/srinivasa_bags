// --- Tailwind Config ---
if (typeof tailwind !== 'undefined') {
  tailwind.config = {
    theme: {
      extend: {
        fontFamily: {
          sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        },
      },
    },
  };
}

// --- Main Store Application ---
(function () {
      const STORAGE_KEY = 'srinivasa_bags_vip_v1';
      const DEV_STORAGE_KEY = 'srinivasa_bags_dev_config_v1';
      const GH_AUTH_KEY = 'srinivasa_bags_gh_auth_v1';

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
        shopAddress: 'BRODIPET 4TH LANE, BESIDE RAMRAJ SHOWROOM, NEAR SHANKAR VILLAS, GUNTUR, ANDHRA PRADESH',
        shopPhone: '+91 9948517724',
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
        syncToCloud(false);
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

      function loadGhAuth() {
        try {
          const raw = localStorage.getItem(GH_AUTH_KEY);
          if (raw) return JSON.parse(raw);
        } catch (e) {}
        return { owner: '', repo: '', branch: 'main', token: '' };
      }

      function saveGhAuth(auth) {
        try {
          localStorage.setItem(GH_AUTH_KEY, JSON.stringify(auth));
        } catch (e) {}
      }

      function updateCloudBadge(text, ok) {
        const el = document.getElementById('devCloudStatus');
        if (!el) return;
        el.textContent = text;
        el.className = ok
          ? 'text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700'
          : 'text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600';
      }

      async function syncToCloud(showMessage = false) {
        const auth = loadGhAuth();
        if (!auth.owner || !auth.repo || !auth.token) {
          updateCloudBadge('Local Mode (Set GitHub Token in Dev Mode)', false);
          return;
        }
        const branch = auth.branch || 'main';
        const apiUrl = `https://api.github.com/repos/${encodeURIComponent(auth.owner)}/${encodeURIComponent(auth.repo)}/contents/catalog.json`;
        try {
          let sha = undefined;
          const getRes = await fetch(`${apiUrl}?ref=${encodeURIComponent(branch)}`, {
            headers: {
              'Authorization': `Bearer ${auth.token}`,
              'Accept': 'application/vnd.github+json'
            }
          });
          if (getRes.ok) {
            const existing = await getRes.json();
            sha = existing.sha;
          }

          const payload = {
            products: state.products,
            devConfig: state.devConfig,
            updatedAt: new Date().toISOString()
          };
          const jsonStr = JSON.stringify(payload, null, 2);
          const contentB64 = btoa(unescape(encodeURIComponent(jsonStr)));

          const body = {
            message: 'Update Srinivasa Bags catalog.json',
            content: contentB64,
            branch
          };
          if (sha) body.sha = sha;

          const putRes = await fetch(apiUrl, {
            method: 'PUT',
            headers: {
              'Authorization': `Bearer ${auth.token}`,
              'Accept': 'application/vnd.github+json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
          });
          if (!putRes.ok) throw new Error('HTTP ' + putRes.status);
          updateCloudBadge('Published to GitHub', true);
          if (showMessage) showToast('Published to GitHub! Live in ~30s.');
        } catch (err) {
          updateCloudBadge('GitHub Sync Error (Check Token/Repo)', false);
          if (showMessage) showToast('GitHub publish failed: check repo & token', 'error');
        }
      }

      async function loadFromCloud(showMessage = false) {
        try {
          const res = await fetch(`./catalog.json?t=${Date.now()}`);
          if (!res.ok) return;
          const data = await res.json();
          if (data && Array.isArray(data.products)) {
            state.products = data.products;
            try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state.products)); } catch (e) {}
          }
          if (data && data.devConfig && typeof data.devConfig === 'object') {
            state.devConfig = { ...DEFAULT_DEV_CONFIG, ...data.devConfig };
            try { localStorage.setItem(DEV_STORAGE_KEY, JSON.stringify(state.devConfig)); } catch (e) {}
          }
          applyDevConfig();
          renderAll();
          if (showMessage) showToast('Reloaded catalog.json');
        } catch (err) {
          if (showMessage) showToast('No catalog.json found yet', 'error');
        }
      }

      function saveProducts() {
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(state.products));
        } catch (e) {}
        syncToCloud(false);
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
        documen
