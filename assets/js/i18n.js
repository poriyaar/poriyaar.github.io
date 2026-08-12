(function () {
    var translations = {
      en: {
        langLabel: "Language",
        menu: "Menu",
        getInTouch: "Get in Touch",
        nav: {
          about: "About",
          service: "Service",
          skills: "Skills",
          resume: "Resume",
          portfolio: "Portfolio",
          contact: "Contact",
        },
        sidebar: { residence: "Residence:", city: "City:", age: "Age:" },
        aboutBadge: "ABOUT ME",
        aboutTitleHTML: 'About <span class="font-semibold text-theme">Me</span>',
        aboutText:
          "Highly motivated PHP/Laravel backend developer with a strong passion for learning new technologies. Skilled in solving complex challenges, flexible, and a strong team player. Known for humor, openness to feedback, and adaptability to new conditions. Experienced in developing APIs and admin panels, always striving to improve system performance. Proficient in Clean Code principles, software design using SOLID, and Design Patterns.",
        aboutInfo: {
          phone: "Phone",
          email: "Email",
          github: "Github",
          language: "Language",
          dob: "Date of Birth",
          marital: "Marital Status",
          military: "Military Service",
          single: "Single",
          completed: "Completed",
        },
        servicesBadge: "SERVICES",
        servicesTitleHTML:
          'My <span class="font-semibold text-theme">Services</span>',
        servicesCards: [
          {
            title: "API Development",
            desc: "Developed and maintained scalable Laravel APIs, ensuring secure and efficient data flow across applications.",
          },
          {
            title: "Admin Panel Development",
            desc: "Designed and managed modern admin dashboards with Laravel and Livewire, improving usability and maintainability.",
          },
          {
            title: "Feature Enhancement",
            desc: "Delivered new features and optimized existing ones to boost performance and enhance user experience.",
          },
          {
            title: "Collaboration & Optimization",
            desc: "Partnered with cross-functional teams, applied testing, and improved system performance through continuous optimization.",
          },
        ],
        skillsBadge: "SKILLS",
        skillsTitleHTML:
          'My <span class="font-semibold text-theme">Advantages</span>',
        resumeBadge: "RESUME",
        resumeTitleHTML:
          'Work <span class="font-semibold text-theme">Experience</span>',
        jobTitle: "Backend Developer",
        eduTitleHTML:
          'My <span class="font-semibold text-theme">Education & Achievements</span>',
        eduItem1: "Post Graduate Diploma in Empirical Sciences",
        eduItem2:
          "Participated in the PHP Laravel Olympiad, achieving a top ranking.",
        certificateLink: "Certificate Link",
        portfolioBadge: "PORTFOLIO",
        portfolioTitleHTML:
          'Featured <span class="font-semibold text-theme">Projects</span>',
        portfolioTags: {
          backend: "Backend Developer",
          backendReview: "Backend / Code Review",
          deprecated: "Deprecated",
        },
        portfolioSpans: {
          besat: "Exhibition & Booth Management",
          niil: " Smart Training Platform ",
          nasim: " Storytelling Mobile App ",
          kachar: " E-commerce & Tire Service ",
          drtop: " Appointment Booking ",
          splus: " Samsung Support & Training ",
          iranpark: " Smart Parking System ",
        },
        portfolioDescriptions: {
          besat:
            "A platform that helps organizers assign booths and manage vendors, while allowing vendors to choose and reserve their preferred booth location.",
          niil:
            "A training and upskilling platform serving employees, students, and other learners.",
          nasim:
            "A mobile application designed for interactive storytelling experiences.",
          kachar:
            "An e-commerce platform for selling tires and providing car services online.",
          drtop:
            "A web-based platform for booking and managing doctor appointments.",
          splus:
            "A dedicated service for Samsung product users, offering technical support, training, and troubleshooting guides.",
          iranpark:
            "An intelligent parking management system designed to optimize space usage and provide real-time monitoring.",
        },
        contactBadge: "CONTACT",
        contactTitleHTML:
          'Contact <span class="font-semibold text-theme">Me.</span>',
        contactSubtitle:
          "I design products that are more than pretty. I make them shippable and usable.",
        contactInfo: { email: "E-mail", phone: "Phone" },
        form: {
          name: "Name",
          email: "E-Mail",
          message: "Message",
          send: "Send Message",
        },
      },
      fa: {
        langLabel: "زبان",
        menu: "منو",
        getInTouch: "راه‌های ارتباطی",
        nav: {
          about: "درباره",
          service: "خدمات",
          skills: "مهارت‌ها",
          resume: "رزومه",
          portfolio: "نمونه‌کارها",
          contact: "تماس",
        },
        sidebar: { residence: "کشور:", city: "شهر:", age: "سن:" },
        aboutBadge: "درباره من",
        aboutTitleHTML: 'درباره <span class="font-semibold text-theme">من</span>',
        aboutText:
          "توسعه‌دهنده بک‌اند PHP/Laravel با انگیزه و مشتاق یادگیری فناوری‌های نو. توانمند در حل مسائل پیچیده، منعطف و تیم‌محور. شوخ‌طبع، پذیرای بازخورد و سازگار با شرایط جدید. در توسعه API و پنل‌های مدیریتی باتجربه و همواره در تلاش برای بهبود عملکرد سیستم. مسلط به اصول Clean Code، طراحی نرم‌افزار با SOLID و الگوهای طراحی.",
        aboutInfo: {
          phone: "تلفن",
          email: "ایمیل",
          github: "گیت‌هاب",
          language: "زبان‌ها",
          dob: "تاریخ تولد",
          marital: "وضعیت تأهل",
          military: "خدمت سربازی",
          single: "مجرد",
          completed: "پایان‌یافته",
          dobValue: "۱۵ آذر ۱۳۷۷",
        },
        servicesBadge: "خدمات",
        servicesTitleHTML:
          'خدمات <span class="font-semibold text-theme">من</span>',
        servicesCards: [
          {
            title: "توسعه API",
            desc: "توسعه و نگهداری APIهای مقیاس‌پذیر لاراول با تضمین امنیت و کارایی جریان داده.",
          },
          {
            title: "توسعه پنل ادمین",
            desc: "طراحی و مدیریت داشبوردهای مدرن با Laravel و Livewire جهت بهبود کاربری و نگهداشت.",
          },
          {
            title: "بهبود ویژگی‌ها",
            desc: "افزودن قابلیت‌های جدید و بهینه‌سازی موارد موجود برای ارتقای عملکرد و تجربه کاربری.",
          },
          {
            title: "همکاری و بهینه‌سازی",
            desc: "همکاری تیمی، تست و بهینه‌سازی مستمر برای بهبود عملکرد سیستم.",
          },
        ],
        skillsBadge: "مهارت‌ها",
        skillsTitleHTML:
          'مزیت‌های <span class="font-semibold text-theme">من</span>',
        resumeBadge: "رزومه",
        resumeTitleHTML:
          'سوابق <span class="font-semibold text-theme">کاری</span>',
        jobTitle: "توسعه‌دهنده بک‌اند",
        eduTitleHTML:
          'تحصیلات و <span class="font-semibold text-theme">دستاوردها</span>',
        eduItem1: "دیپلم علوم تجربی",
        eduItem2: "شرکت در المپیاد PHP Laravel و کسب رتبه برتر.",
        certificateLink: "لینک گواهی",
        portfolioBadge: "نمونه‌کارها",
        portfolioTitleHTML:
          'پروژه‌های <span class="font-semibold text-theme">برجسته</span>',
        portfolioTags: {
          backend: "توسعه‌دهنده بک‌اند",
          backendReview: "بک‌اند / بازبینی کد",
          deprecated: "منسوخ",
        },
        portfolioSpans: {
          besat: " مدیریت غرفه و نمایشگاه ",
          niil: " پلتفرم آموزش هوشمند ",
          nasim: " اپلیکیشن موبایل قصه‌گویی ",
          kachar: " تجارت الکترونیک و خدمات لاستیک ",
          drtop: " نوبت‌دهی ",
          splus: " پشتیبانی و آموزش سامسونگ ",
          iranpark: " پارکینگ هوشمند ",
        },
        portfolioDescriptions: {
          besat:
            "پلتفرمی که به برگزارکنندگان کمک می‌کند غرفه‌ها را تخصیص داده و فروشندگان را مدیریت کنند، در حالی که فروشندگان نیز می‌توانند موقعیت غرفه‌ی مورد نظر خود را انتخاب و رزرو کنند.",
          niil:
            "پلتفرم آموزش و ارتقای مهارت برای کارمندان، دانشجویان و سایر یادگیرندگان.",
          nasim:
            "اپلیکیشن موبایلی طراحی‌شده برای تجربه‌ی تعاملی قصه‌گویی.",
          kachar:
            "پلتفرم تجارت الکترونیک برای فروش لاستیک و ارائه خدمات خودرو به صورت آنلاین.",
          drtop: "پلتفرم مبتنی بر وب برای رزرو و مدیریت نوبت‌های پزشکی.",
          splus:
            "سرویس اختصاصی برای کاربران محصولات سامسونگ، ارائه پشتیبانی فنی، آموزش و راهنمای عیب‌یابی.",
          iranpark:
            "سیستم مدیریت پارکینگ هوشمند طراحی شده برای بهینه‌سازی استفاده از فضا و نظارت در زمان واقعی.",
        },
        contactBadge: "تماس",
        contactTitleHTML:
          'تماس با <span class="font-semibold text-theme">من</span>',
        contactSubtitle:
          "محصولاتی طراحی می‌کنم که فقط زیبا نیستند؛ قابل ارسال و استفاده‌اند.",
        contactInfo: { email: "ایمیل", phone: "تلفن" },
        form: {
          name: "نام",
          email: "ایمیل",
          message: "پیام",
          send: "ارسال پیام",
        },
      },
      tr: {
        langLabel: "Dil",
        menu: "Menü",
        getInTouch: "İletişime Geç",
        nav: {
          about: "Hakkımda",
          service: "Hizmetler",
          skills: "Yetenekler",
          resume: "Özgeçmiş",
          portfolio: "Portfolyo",
          contact: "İletişim",
        },
        sidebar: { residence: "İkamet:", city: "Şehir:", age: "Yaş:" },
        aboutBadge: "HAKKIMDA",
        aboutTitleHTML:
          'Kendim <span class="font-semibold text-theme">Hakkında</span>',
        aboutText:
          "Yeni teknolojiler öğrenmeye büyük tutkusu olan, yüksek motivasyonlu bir PHP/Laravel backend geliştiricisiyim. Karmaşık sorunları çözmede yetenekli, esnek ve güçlü bir takım oyuncusuyum. Mizah anlayışım, geri bildirime açıklığım ve yeni koşullara uyum sağlama becerimle tanınırım. API ve yönetim panelleri geliştirme konusunda deneyimliyim ve sistem performansını sürekli iyileştirmeye çalışırım. Clean Code prensiplerine, SOLID ile yazılım tasarımına ve Tasarım Kalıplarına hakimim.",
        aboutInfo: {
          phone: "Telefon",
          email: "E-posta",
          github: "Github",
          language: "Diller",
          dob: "Doğum Tarihi",
          marital: "Medeni Durum",
          military: "Askerlik Durumu",
          single: "Bekar",
          completed: "Tamamlandı",
          dobValue: "6 Aralık 1998",
        },
        servicesBadge: "HİZMETLER",
        servicesTitleHTML:
          'Sunduğum <span class="font-semibold text-theme">Hizmetler</span>',
        servicesCards: [
          {
            title: "API Geliştirme",
            desc: "Uygulamalar arasında güvenli ve verimli veri akışını sağlayan, ölçeklenebilir Laravel API'leri geliştirdim ve sürdürdüm.",
          },
          {
            title: "Yönetim Paneli Geliştirme",
            desc: "Laravel ve Livewire ile modern yönetim panelleri tasarladım ve yönettim; kullanılabilirliği ve sürdürülebilirliği artırdım.",
          },
          {
            title: "Özellik Geliştirme",
            desc: "Performansı artırmak ve kullanıcı deneyimini iyileştirmek için yeni özellikler sundum ve mevcut olanları optimize ettim.",
          },
          {
            title: "İşbirliği ve Optimizasyon",
            desc: "Çapraz fonksiyonlu ekiplerle iş birliği yaptım, test uyguladım ve sürekli optimizasyonla sistem performansını artırdım.",
          },
        ],
        skillsBadge: "YETENEKLER",
        skillsTitleHTML:
          'Güçlü <span class="font-semibold text-theme">Yönlerim</span>',
        resumeBadge: "ÖZGEÇMİŞ",
        resumeTitleHTML:
          'İş <span class="font-semibold text-theme">Deneyimi</span>',
        jobTitle: "Backend Geliştirici",
        eduTitleHTML:
          'Eğitim ve <span class="font-semibold text-theme">Başarılarım</span>',
        eduItem1: "Deneysel Bilimler alanında Lise Diploması",
        eduItem2:
          "PHP Laravel Olimpiyatı'na katıldı ve üst sıralarda yer aldı.",
        certificateLink: "Sertifika Bağlantısı",
        portfolioBadge: "PORTFOLYO",
        portfolioTitleHTML:
          'Öne Çıkan <span class="font-semibold text-theme">Projeler</span>',
        portfolioTags: {
          backend: "Backend Geliştirici",
          backendReview: "Backend / Kod İncelemesi",
          deprecated: "Kullanımdan Kaldırıldı",
        },
        portfolioSpans: {
          besat: " Fuar ve Stant Yönetimi ",
          niil: " Akıllı Eğitim Platformu ",
          nasim: " Hikaye Anlatımı Mobil Uygulaması ",
          kachar: " E-ticaret ve Lastik Servisi ",
          drtop: " Randevu Sistemi ",
          splus: " Samsung Destek ve Eğitim ",
          iranpark: " Akıllı Otopark Sistemi ",
        },
        portfolioDescriptions: {
          besat:
            "Organizatörlerin stant ataması yapmasına ve satıcıları yönetmesine yardımcı olan; satıcıların da istedikleri stant konumunu seçip rezerve edebildiği bir platform.",
          niil:
            "Çalışanlara, öğrencilere ve diğer öğrenenlere hizmet veren bir eğitim ve beceri geliştirme platformu.",
          nasim:
            "Etkileşimli hikaye anlatımı deneyimleri için tasarlanmış bir mobil uygulama.",
          kachar:
            "Lastik satışı ve araç bakım hizmetleri sunan bir e-ticaret platformu.",
          drtop:
            "Doktor randevularının alınması ve yönetilmesi için web tabanlı bir platform.",
          splus:
            "Samsung ürün kullanıcıları için teknik destek, eğitim ve sorun giderme rehberleri sunan özel bir hizmet.",
          iranpark:
            "Alan kullanımını optimize etmek ve gerçek zamanlı izleme sağlamak için tasarlanmış akıllı bir otopark yönetim sistemi.",
        },
        contactBadge: "İLETİŞİM",
        contactTitleHTML:
          'Benimle <span class="font-semibold text-theme">İletişime Geç.</span>',
        contactSubtitle:
          "Sadece güzel değil, aynı zamanda kullanılabilir ve teslim edilebilir ürünler tasarlıyorum.",
        contactInfo: { email: "E-posta", phone: "Telefon" },
        form: {
          name: "İsim",
          email: "E-posta",
          message: "Mesaj",
          send: "Mesaj Gönder",
        },
      },
    };

    function setLang(lang) {
      var t = translations[lang] || translations.en;
      // html lang and direction
      document.documentElement.setAttribute("lang", lang);
      document.documentElement.setAttribute("dir", lang === "fa" ? "rtl" : "ltr");
      // Keep skills slider ordered LTR visually to avoid reordering issues
      var skillsContainer = document.querySelector(".skills-slider .swiper");
      if (skillsContainer) skillsContainer.style.direction = "ltr";
      // Ensure components react to direction change (skills slider buttons)
      if (
        typeof window !== "undefined" &&
        typeof window.syncSkillsNavForDir === "function"
      ) {
        window.syncSkillsNavForDir();
      }

      // Toggle button active states
      var enBtn = document.getElementById("lang_en");
      var faBtn = document.getElementById("lang_fa");
      var trBtn = document.getElementById("lang_tr");
      if (enBtn) enBtn.classList.toggle("bg-flashWhite", lang === "en");
      if (faBtn) faBtn.classList.toggle("bg-flashWhite", lang === "fa");
      if (trBtn) trBtn.classList.toggle("bg-flashWhite", lang === "tr");

      // Style switcher language heading
      var langHeading = document.getElementById("i18n_language_heading");
      if (langHeading) langHeading.textContent = t.langLabel;

      // Mobile menu headings
      var menuTitles = document.querySelectorAll(".mobile-menu .menu-title");
      if (menuTitles[0]) menuTitles[0].textContent = t.menu;
      if (menuTitles[1]) menuTitles[1].textContent = t.getInTouch;

      // Mobile menu items
      var mobileMap = [
        { idx: 1, text: t.nav.about },
        { idx: 2, text: t.nav.service },
        { idx: 3, text: t.nav.skills },
        { idx: 4, text: t.nav.resume },
        { idx: 5, text: t.nav.portfolio },
        { idx: 8, text: t.nav.contact },
      ];
      mobileMap.forEach(function (m) {
        var el = document.querySelector(
          '.mobile-menu li[data-scroll-nav="' + m.idx + '"] a span:last-child'
        );
        if (el) el.textContent = m.text;
      });

      // Right navigation tooltips (data-title)
      mobileMap.forEach(function (m) {
        var a = document.querySelector(
          '.minfo__nav__wrapper li[data-scroll-nav="' + m.idx + '"] a'
        );
        if (a)
          a.setAttribute(
            "data-title",
            t.nav[
              {
                1: "about",
                2: "service",
                3: "skills",
                4: "resume",
                5: "portfolio",
                8: "contact",
              }[m.idx]
            ]
          );
      });

      // Sidebar info labels
      var sidebarLis = document.querySelectorAll(".user-meta-info li");
      if (sidebarLis[0])
        sidebarLis[0].querySelector("span:first-child").textContent =
          t.sidebar.residence;
      if (sidebarLis[1])
        sidebarLis[1].querySelector("span:first-child").textContent =
          t.sidebar.city;
      if (sidebarLis[2])
        sidebarLis[2].querySelector("span:first-child").textContent =
          t.sidebar.age;

      // About section
      var aboutBadge = document.querySelector("#about .section-name");
      if (aboutBadge) aboutBadge.textContent = t.aboutBadge;
      var aboutTitle = document.querySelector("#about .section-title .title");
      if (aboutTitle) aboutTitle.innerHTML = t.aboutTitleHTML;
      var aboutText = document.querySelector("#about .subtitle");
      if (aboutText) aboutText.textContent = t.aboutText;
      var aboutInfoLis = document.querySelectorAll("#about .section-content li");
      if (aboutInfoLis[0])
        aboutInfoLis[0].querySelector("span:first-child").textContent =
          t.aboutInfo.phone;
      if (aboutInfoLis[1])
        aboutInfoLis[1].querySelector("span:first-child").textContent =
          t.aboutInfo.email;
      if (aboutInfoLis[2])
        aboutInfoLis[2].querySelector("span:first-child").textContent =
          t.aboutInfo.github;
      if (aboutInfoLis[3])
        aboutInfoLis[3].querySelector("span:first-child").textContent =
          t.aboutInfo.language;
      if (aboutInfoLis[4]) {
        aboutInfoLis[4].querySelector("span:first-child").textContent =
          t.aboutInfo.dob;
        // Update the birth date value
        var dobValue = aboutInfoLis[4].querySelector("span:last-child");
        if (dobValue)
          dobValue.textContent = t.aboutInfo.dobValue || "December 6, 1998";
      }
      if (aboutInfoLis[5])
        aboutInfoLis[5].querySelector("span:first-child").textContent =
          t.aboutInfo.marital;
      if (aboutInfoLis[6])
        aboutInfoLis[6].querySelector("span:first-child").textContent =
          t.aboutInfo.military;
      if (aboutInfoLis[5]) {
        var maritalVal = aboutInfoLis[5].querySelector("span:last-child");
        if (maritalVal) maritalVal.textContent = t.aboutInfo.single;
      }
      if (aboutInfoLis[6]) {
        var militaryVal = aboutInfoLis[6].querySelector("span:last-child");
        if (militaryVal) militaryVal.textContent = t.aboutInfo.completed;
      }

      // Services section
      var servicesBadge = document.querySelector("#service .section-name");
      if (servicesBadge) servicesBadge.textContent = t.servicesBadge;
      var servicesTitle = document.querySelector(
        "#service .section-title .title"
      );
      if (servicesTitle) servicesTitle.innerHTML = t.servicesTitleHTML;
      var cards = document.querySelectorAll(
        "#service .service-card-wrapper .card-item"
      );
      cards.forEach(function (card, idx) {
        var data = t.servicesCards[idx];
        if (!data) return;
        var h4 = card.querySelector("h4");
        var p = card.querySelector("p");
        if (h4) h4.textContent = data.title;
        if (p) p.textContent = data.desc;
      });

      // Skills section
      var skillsBadge = document.querySelector("#skill .section-name");
      if (skillsBadge) skillsBadge.textContent = t.skillsBadge;
      var skillsTitle = document.querySelector("#skill .section-title .title");
      if (skillsTitle) skillsTitle.innerHTML = t.skillsTitleHTML;

      // Resume section
      var resumeBadge = document.querySelector("#resume .section-name");
      if (resumeBadge) resumeBadge.textContent = t.resumeBadge;
      var resumeTitle = document.querySelector("#resume .section-title .title");
      if (resumeTitle) resumeTitle.innerHTML = t.resumeTitleHTML;
      var jobTitle = document.querySelector("#resume .experience li h4");
      if (jobTitle) jobTitle.textContent = t.jobTitle;
      var eduTitle = document.querySelectorAll(
        "#resume .section-title .title"
      )[1];
      if (eduTitle) eduTitle.innerHTML = t.eduTitleHTML;
      // Target only the Education section (second .experience div)
      var educationSection = document.querySelectorAll("#resume .experience")[1];
      if (educationSection) {
        var eduItems = educationSection.querySelectorAll("li h4");

        // Only remaining education item - PHP Laravel Olympiad achievement
        if (eduItems[0]) eduItems[0].textContent = t.eduItem2;

        // Certificate link
        var certLink = educationSection.querySelector("li a");
        if (certLink) certLink.textContent = t.certificateLink;
      }

      // Portfolio section
      var portfolioBadge = document.querySelector("#portfolio .section-name");
      if (portfolioBadge) portfolioBadge.textContent = t.portfolioBadge;
      var portfolioTitle = document.querySelector(
        "#portfolio .section-title .title"
      );
      if (portfolioTitle) portfolioTitle.innerHTML = t.portfolioTitleHTML;
      // tag buttons on overlays
      var overlayBtns = document.querySelectorAll("#portfolio .item ul li a");
      overlayBtns.forEach(function (a) {
        if (/Code Review/i.test(a.textContent))
          a.textContent = t.portfolioTags.backendReview;
        else if (/Backend Developer/i.test(a.textContent))
          a.textContent = t.portfolioTags.backend;
      });
      // overlay spans and deprecated labels
      var deprecateds = document.querySelectorAll(
        "#portfolio .info .text-red-500"
      );
      deprecateds.forEach(function (el) {
        el.textContent = t.portfolioTags.deprecated;
      });
      var spanSets = [
        {
          selector: "#portfolio .item:nth-of-type(1) .info span",
          text: t.portfolioSpans.besat,
        },
        {
          selector: "#portfolio .item:nth-of-type(2) .info span",
          text: t.portfolioSpans.niil,
        },
        {
          selector: "#portfolio .item:nth-of-type(3) .info span",
          text: t.portfolioSpans.nasim,
        },
        {
          selector: "#portfolio .item:nth-of-type(4) .info span",
          text: t.portfolioSpans.kachar,
        },
        {
          selector: "#portfolio .item:nth-of-type(5) .info span",
          text: t.portfolioSpans.splus,
        },
        {
          selector: "#portfolio .item:nth-of-type(6) .info span",
          text: t.portfolioSpans.drtop,
        },
        {
          selector: "#portfolio .item:nth-of-type(7) .info span",
          text: t.portfolioSpans.iranpark,
        },
      ];
      spanSets.forEach(function (s) {
        var el = document.querySelector(s.selector);
        if (el) el.textContent = s.text;
      });
      // Translate project descriptions
      var projectDescriptions = [
        {
          selector: "#portfolio .item:nth-of-type(1) .info p",
          text: t.portfolioDescriptions.besat,
        },
        {
          selector: "#portfolio .item:nth-of-type(2) .info p",
          text: t.portfolioDescriptions.niil,
        },
        {
          selector: "#portfolio .item:nth-of-type(3) .info p",
          text: t.portfolioDescriptions.nasim,
        },
        {
          selector: "#portfolio .item:nth-of-type(4) .info p",
          text: t.portfolioDescriptions.kachar,
        },
        {
          selector: "#portfolio .item:nth-of-type(5) .info p",
          text: t.portfolioDescriptions.splus,
        },
        {
          selector: "#portfolio .item:nth-of-type(6) .info p",
          text: t.portfolioDescriptions.drtop,
        },
        {
          selector: "#portfolio .item:nth-of-type(7) .info p",
          text: t.portfolioDescriptions.iranpark,
        },
      ];
      projectDescriptions.forEach(function (desc) {
        var el = document.querySelector(desc.selector);
        if (el) el.textContent = desc.text;
      });
      // Contact section
      var contactBadge = document.querySelector("#contact .section-name");
      if (contactBadge) contactBadge.textContent = t.contactBadge;
      var contactTitle = document.querySelector("#contact .section-title .title");
      if (contactTitle) contactTitle.innerHTML = t.contactTitleHTML;
      var contactSubtitle = document.querySelector(
        "#contact .section-title .subtitle"
      );
      if (contactSubtitle) contactSubtitle.textContent = t.contactSubtitle;
      var contactLabels = document.querySelectorAll("#contact .contact-info h6");
      if (contactLabels[0]) contactLabels[0].textContent = t.contactInfo.email;
      if (contactLabels[1]) contactLabels[1].textContent = t.contactInfo.phone;
      var nameInput = document.getElementById("client__name");
      if (nameInput) nameInput.setAttribute("placeholder", t.form.name);
      var emailInput = document.getElementById("client_email");
      if (emailInput) emailInput.setAttribute("placeholder", t.form.email);
      var msgInput = document.querySelector('textarea[name="contact__message"]');
      if (msgInput) msgInput.setAttribute("placeholder", t.form.message);
      var sendBtn = document.querySelector('#contact button[type="submit"]');
      if (sendBtn) sendBtn.textContent = t.form.send;

      // After all content changes, refresh skills layout so order/visibility remain correct
      if (
        typeof window !== "undefined" &&
        typeof window.updateSkillsLayout === "function"
      ) {
        window.updateSkillsLayout();
      }
    }

    function init() {
      var saved = localStorage.getItem("lang") || "en";
      setLang(saved);
      var enBtn = document.getElementById("lang_en");
      var faBtn = document.getElementById("lang_fa");
      var trBtn = document.getElementById("lang_tr");
      if (enBtn) {
        enBtn.addEventListener("click", function () {
          localStorage.setItem("lang", "en");
          setLang("en");
        });
      }
      if (faBtn) {
        faBtn.addEventListener("click", function () {
          localStorage.setItem("lang", "fa");
          setLang("fa");
        });
      }
      if (trBtn) {
        trBtn.addEventListener("click", function () {
          localStorage.setItem("lang", "tr");
          setLang("tr");
        });
      }
    }

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", init);
    } else {
      init();
    }
  })();