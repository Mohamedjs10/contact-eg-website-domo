import { colors } from "../src/utils/const";

export default {
  direction: "rtl",
  textAlign: "right",
  formMsg: "تم ارسال الطلب بنجاح",
  formMsgFail: "فشل ارسال الطلب",
  clipboardMsg: "تم نسخ الرابط بنجاح",
  subscribeMsg: "تم الاشتراك بنجاح",
  subscribeFailMsg: "فشل الاشتراك",
  calcTitle: "احسب قسطك في ثواني",
  calc: {
    monthlyAmount: " قيمة القسط الشهري",
    priceCar: "السعر ",
    preAmount: "المقدم",
    plan: "الخطة",
    plan: "الخطة",
    egyptianPound: "جنية مصري",
    duration: "المدة",
    year1: "1 سنة",
    year2: "2 سنة",
    year3: "3 سنة",
    year4: "4 سنة",
    year5: "5 سنة",
    year6: "6 سنة",
    plan1: "البرنامج الإقتصادي",
    plan2: "البرنامج المرن",
  },
  calc_packages: {
    auto: [
      { packageId: 268, title: "المرن بلس" },
      { packageId: 114, title: "الاقتصادي" },
      { packageId: 262, title: "الاقتصادي بلس" },
      { packageId: 144, title: "السيارات المستعملة" },
    ],
    trucks: [
      { packageId: 247, title: "النظام المرن" },
      { packageId: 234, title: "النظام العادي" },
    ],
    consumer_finance: [{ packageId: 408, title: "كريدي تيك" }],
    mortgage: [
      { packageId: 179, title: "إعادة تمويل بيتك - البرنامج الاقتصادي" },
      { packageId: 180, title: "إعادة تمويل بيتك - البرنامج المرن" },
      { packageId: 336, title: "تمويل بيتك" },
    ],
    clubs: [{ packageId: 452, title: "عضوية الأندية" }],
    education: [{ packageId: 363, title: "التعليم" }],
    insurance: [{ packageId: 402, title: "تأمين" }],
    wedding: [{ packageId: 437, title: "أفراح" }],
    maintenance: [{ packageId: 439, title: "صيانة البيت" }],
    green_finance: [
      {
        packageId: 459,
        title: "التمويل الأخضر أ (ربع سنوي)",
        packageId: 458,
        title: "التمويل الأخضر ب (شهري)",
      },
    ],
  },
  general: {
    gifs: { hi: "/gif/hi-ar.gif", calculationg: "/gif/calculating-ar.gif" },

    menu: {
      about_us: "نبذة عنا",
      media: "ميديا",
      careers: "وظائف",
      our_brand: "شركتنا",
      contact_us: "اتصل بنا",
    },
    reviewTitle: "ماذا يقول العملاء عننا؟",
    reviewSubTitle: "ماذا يقول العملاء عننا؟",
    reviews: [
      {
        id: "1",
        name: "محمد دياب",
        role: "30 مارس 2022",
        avatar: "/male-avatar.svg",
        rating: 5,
        review: "تطبيق ممتاز ومفيد جدا وسهل الاستخدام.",
      },
      {
        id: "2",
        name: "مارتينا ابراهيم",
        role: "3 يناير 2023",
        avatar: "/female-avatar.png",
        rating: 5,
        review: "تطبيق ممتاز وسهل الاستخدام للغاية.",
      },
      {
        id: "3",
        name: "مينا البر",
        role: "15 يناير 2023",
        avatar: "/male-avatar.svg",
        rating: 5,
        review: "تطبيق مفيد وسهل وسريع.",
      },
      {
        id: "4",
        name: "عزيز محمد صلاح",
        role: "31 ديسمبر 2022",
        avatar: "/male-avatar.svg",
        rating: 5,
        review:
          "تطبيق جديد كليًا ، وكل الميزات الجديدة ، وسهل الاستخدام ، شكرًا على المجهود الكبير.",
      },
      {
        id: "5",
        name: "مو عبد الوهاب",
        role: "30 ديسمبر 2022",
        avatar: "/male-avatar.svg",
        rating: 5,
        review: "مفيد. يعطينا تجربة رائعة. شكرا على الميزات الجديدة.",
      },
    ],
    directors: [
      {
        id: 1,
        img: "/directors/01.jpg",
        name: "حازم موسى",
        role: "رئيس مجلس إدارة الشركة القابضة",
      },
      {
        id: 2,
        img: "/directors/02.jpg",
        name: "سعيد زعتر",
        role: "العضو المنتدب للشركة القابضة والرئيس التنفيذي",
      },
      {
        id: 3,
        img: "/directors/03.jpg",
        name: "عمرو لمعي",
        role: "نائب رئيس مجلس الإدارة",
      },
      {
        id: 4,
        img: "/directors/04.jpg",
        name: "أشرف زكي",
        role: "عضو مجلس الإدارة",
      },
      {
        id: 5,
        img: "/directors/05.jpg",
        name: "محمد عبد الحليم",
        role: "عضو مجلس الإدارة",
      },
      {
        id: 6,
        img: "/directors/06.jpg",
        name: "محمد صادق",
        role: "عضو مجلس الإدارة",
      },
      {
        id: 7,
        img: "/directors/07.jpg",
        name: "أنور باحبيش",
        role: "عضو مجلس الإدارة",
      },
      {
        id: 8,
        img: "/directors/08.jpg",
        name: "حسن عبده",
        role: "عضو مجلس الإدارة",
      },
      {
        id: 9,
        img: "/directors/09.jpg",
        name: "كريم حسين",
        role: "عضو مجلس إدارة مستقل",
      },
      {
        id: 10,
        img: "/directors/10.jpg",
        name: "كريم زين",
        role: "عضو مجلس إدارة مستقل",
      },
      {
        id: 11,
        img: "/directors/11.jpg",
        name: "صفية برهان",
        role: "عضو مجلس الإدارة",
      },
    ],
    mangers: [
      {
        id: 1,
        img: "/managers/01.jpg",
        name: "حازم موسى",
        role: "رئيس مجلس إدارة الشركة القابضة",
      },
      {
        id: 2,
        img: "/managers/02.jpg",
        name: "سعيد زعتر",
        role: "العضو المنتدب للشركة القابضة والرئيس التنفيذي",
      },
      {
        id: 3,
        img: "/managers/03.jpg",
        name: "أيمن الصاوي",
        role: "رئيس القطاعات المالية",
      },
      {
        id: 4,
        img: "/managers/04.jpg",
        name: "عمرو رفعت",
        role: "نائب رئيس مجلس الإدارة لكونتكت للتمويل",
      },
      {
        id: 5,
        img: "/managers/05.jpg",
        name: "علاء عوض",
        role: "رئيس قطاع الموارد البشرية والتطوير المؤسسي",
      },
      {
        id: 6,
        img: "/managers/06.jpg",
        name: "محمد سلامة",
        role: "رئيس القطاع القانوني",
      },
      {
        id: 7,
        img: "/managers/07.jpg",
        name: "إسماعيل سمير",
        role: "العضو المنتدب لشركة كونتكت للتأجير التمويلي",
      },
      {
        id: 8,
        img: "/managers/08.jpg",
        name: "أحمد خليفة",
        role: "العضو المنتدب لشركة ثروة للتأمين",
      },
      {
        id: 9,
        img: "/managers/09.jpg",
        name: "رماح أسعد",
        role: "العضو المنتدب لشركة ثروة لتأمينات الحياة",
      },
      {
        id: 10,
        img: "/managers/10.jpg",
        name: "سعيد سمير",
        role: "رئيس قطاع الائتمان وإدارة المخاطر",
      },
      {
        id: 11,
        img: "/managers/11.jpg",
        name: "شريف جلال",
        role: "رئيس قطاع التفتيش والمتابعة",
      },
      {
        id: 12,
        img: "/managers/12.jpg",
        name: "تامر سمير",
        role: "العضو المنتدب لكونتكت للتمويل",
      },
      {
        id: 13,
        img: "/managers/13.jpg",
        name: "صفية برهان",
        role: "مدير عام شئون الشركات والحوكمة",
      },
      {
        id: 14,
        img: "/managers/14.jpg",
        name: "نيهال بريك",
        role: "العضو المنتدب لشركة كونتكت للوساطة التأمينية",
      },
      {
        id: 15,
        img: "/managers/15.jpg",
        name: "عثمان عبد المنعم",
        role: "العضو المنتدب لشركة كونتكت كارز دوت كوم",
      },
      {
        id: 16,
        img: "/managers/16.jpg",
        name: "أحمد عبد الحكيم",
        role: "مدير عام تكنولوجيا المعلومات",
      },
      {
        id: 17,
        img: "/managers/17.jpg",
        name: "أحمد سمير كامل",
        role: "العضو المنتدب لكونتكت كريدي تك",
      },
      {
        id: 18,
        img: "/managers/18.jpg",
        name: "هاني عمر",
        role: "المدير التنفيذي لشركة كونتكت للتخصيم",
      },
      {
        id: 19,
        img: "/managers/19.jpg",
        name: "أيمن حليم",
        role: "المدير التنفيذي لشركة كونتكت للتمويل العقاري",
      },
      {
        id: 20,
        img: "/managers/20.jpg",
        name: "مروان عادل",
        role: "مدير عام التسويق",
      },
      {
        id: 21,
        img: "/managers/21.jpg",
        name: "محمد سمير",
        role: "رئيس قطاع الشؤون الإدارية",
      },
      {
        id: 22,
        img: "/managers/22.jpg",
        name: "سارة محمود",
        role: "مدير بحوث السوق",
      },
      {
        id: 23,
        img: "/managers/23.jpg",
        name: "مرسي منصور",
        role: "المراجع الداخلي للمجموعة",
      },
    ],
    places: [
      { id: 1, img: "/member.png", name: "اسم المكان" },
      { id: 2, img: "/member.png", name: "اسم المكان" },
      { id: 3, img: "/member.png", name: "اسم المكان" },
      { id: 4, img: "/member.png", name: "اسم المكان" },
      { id: 5, img: "/member.png", name: "اسم المكان" },
      { id: 6, img: "/member.png", name: "اسم المكان" },
      { id: 7, img: "/member.png", name: "اسم المكان" },
      { id: 8, img: "/member.png", name: "اسم المكان" },
      { id: 9, img: "/member.png", name: "اسم المكان" },
      { id: 10, img: "/member.png", name: "اسم المكان" },
    ],
    icon_title: {
      products_auto_page: [
        {
          id: 1,
          img: "/alarm.png",
          title: "٥ سنين",
          description: "فترات سداد تصل إلى 5 سنوات",
        },
        {
          id: 2,
          img: "/payment.png",
          title: "20% مقدم",
          description: "مقدم يبدأ من 20%",
        },
        {
          id: 3,
          img: "/coins.png",
          title: "4 مليون",
          description: "تمويل يصل إلى 4 مليون جنيه",
        },
        {
          id: 4,
          img: "/flash.png",
          title: "سرعة",
          description: "سهولة وسرعة في إجراءات التمويل",
        },
        {
          id: 5,
          img: "/ticket-expired.png",
          title: "تسهيلات للتقسيط",
          description:
            "خدمات إضافية مع باقات التقسيط كتسهيلات التراخيص والتأمين والتجديد",
        },
        {
          id: 6,
          img: "/receipt.png",
          title: "بدون تأمين",
          description: "إمكانية التقسيط بدون تأمين",
        },
      ],
      products_trucks_page: [
        {
          id: 1,
          img: "/alarm.png",
          title: "٥ سنين",
          description: "فترات سداد تصل إلى 5 سنوات",
        },
        {
          id: 2,
          img: "/payment.png",
          title: "20% مقدم",
          description: "مقدم يبدأ من 20%",
        },
        {
          id: 3,
          img: "/coins.png",
          title: "4 مليون",
          description: "تمويل يصل إلى 4 مليون جنيه",
        },
        {
          id: 4,
          img: "/flash.png",
          title: "سرعة",
          description: "سهولة وسرعة في إجراءات التمويل",
        },
      ],
      products_maintainance_page: [
        {
          id: 1,
          img: "/alarm.png",
          title: "فترات سداد تصل إلى 24 شهر",
        },
        {
          id: 2,
          img: "/coins.png",
          title: "تمويل يصل إلى 1.5 مليون جنيه",
        },
        {
          id: 3,
          img: "/payment.png",
          title: "بدون مقدم",
        },
        {
          id: 4,
          img: "/tax.png",
          title: "سهولة وسرعة في الشراء عن طريق رقم بطاقتك ورقم موبايلك فقط",
        },
      ],
      products_shopping_page: [
        {
          id: 1,
          img: "/alarm.png",
          title: "فترات سداد تصل إلى 5 سنوات",
        },
        {
          id: 2,
          img: "/coins.png",
          title: "تمويل يصل إلى مليون جنيه",
        },
        {
          id: 3,
          img: "/payment.png",
          title: "بدون مقدم",
        },
        {
          id: 4,
          img: "/tax.png",
          title: "سهولة وسرعة في الشراء عن طريق رقم بطاقتك ورقم موبايلك فقط",
        },
        {
          id: 5,
          img: "/bank.png",
          title: "أكبر عدد من المحلات والمعارض ومنافذ البيع والتحصيل",
        },
        {
          id: null,
        },
      ],
      products_clubs_page: [
        {
          id: 1,
          img: "/alarm.png",
          title: "فترات سداد تصل إلى 5 سنوات",
        },
        {
          id: 2,
          img: "/coins.png",
          title: "تمويل يصل إلى مليون جنيه",
        },
        {
          id: 3,
          img: "/payment.png",
          title: "بدون مقدم",
        },
        {
          id: 4,
          img: "/tax.png",
          title: "سهولة وسرعة في إجراءات التمويل",
        },
        {
          id: 5,
          img: "/graduation.png",
          title: "يتم تفعيل العضوية مباشرة",
        },
        {
          id: null,
        },
      ],
      products_education_page: [
        {
          id: 1,
          img: "/alarm.png",
          title: "فترات سداد تصل إلى 12 شهر للمدارس والجامعات والكورسات",
        },
        {
          id: 2,
          img: "/coins.png",
          title: "يصل إلي مليون جنية",
        },
        {
          id: 3,
          img: "/payment.png",
          title: "بدون مقدم",
        },
        {
          id: 4,
          img: "/tax.png",
          title:
            "سهولة وسرعة في إجراءات التمويل· سهولة وسرعة في إجراءات التمويل",
        },
        {
          id: 5,
          img: "/graduation.png",
          title: "فترات سداد تصل إلى 3 سنوات للماجستير و5 سنوات للدكتوراه",
        },
        {
          id: null,
        },
      ],
      products_factoring_page: [
        {
          id: 1,
          img: "/alarm.png",
          title: "الحصول على موافقة أسهل وأسرع من الإقراض المصرفي التقليدي",
        },
        {
          id: 2,
          img: "/payment.png",
          title: "الوصول الفوري إلى السيولة النقدية لتحصيلاتك الآجلة",
        },
        {
          id: 3,
          img: "/coins.png",
          title: "تغطية متنوعة لمجموعة كبيرة من القطاعات",
        },
      ],
    },
  },
  logo: "/logo-ar.png",

  main_nav: {
    individuals: "أفراد",
    companies: "شركات",
    investors: "مستثمرين",
    lang: "En",
  },
  secondary_nav: {
    financial_services: "خدمات تمويلية",
    insurance_services: "خدمات تأمينية",
    insurance_services_dropdown: {
      motor: "تأمين السيارات",
      home: "تأمين المنزل",
      personal: "تأمين الحوادث الشخصية ونمط الحياة",
      property: "تأمين الممتلكات",
      engineering: "التأمينات الهندسية",
      motor_fleet: "تأمين أساطيل السيارات",
      marine: "التأمين البحري والبري بضائع",
      liability: "تأمين المسؤوليات والتأمينات المالية",
      medical: "تأمين طبي",
    },
    e_payments: "مدفوعات الكترونية",
    clients_program: "برامج كونتكت",
    investment_and_savings: "استثمار وادخار",
    branches_location: "اماكن الفروع",
    login: "تسجيل الدخول",
    download_app: "حمل التطبيق",
  },
  footer: {
    section_a: {
      subscribe_now: "إشترك الان",
      in_email_service: "في خدمة البريد الالكتروني",
      enter_email: "أدخل بريدك الالكتروني",
      button: "إشترك",
    },
    section_b: {
      financial_services: "خدمات تمويلية",
      financial_services_list1: [
        { name: "تمويل السيارات", url: "/products/cars" },
        { name: "تمويل النقل", url: "/products/trucks" },
        { name: "تمويل تسوق", url: "/products/shopping" },
        { name: "تمويل التعليم", url: "/products/education" },
        { name: "تمويل إشتراكات الاندية", url: "/products/clubs" },
        { name: "تمويل تصميم و تشطيب", url: "/products/home-interior" },
      ],
      financial_services_list2: [
        { name: "تمويل أفراح و مناسبات", url: "/products/events" },
        { name: "تمويل عقاري", url: "/products/home" },
        { name: "وساطة تأمينية", url: "/products/insurance" },
        { name: "تخصيم", url: "/products/factoring" },
        { name: "تأجير تمويلي", url: "/products/leasing" },
        { name: "تمويل الاخضر", url: "/products/green-finance" },
      ],
      other_services: "خدمات اخرى",
      other_services_list: [
        { name: "خدمات تأمينية", url: "/" },
        { name: "مدفوعات الكترونية", url: "/" },
        { name: "برنامج العملاء", url: "/" },
        { name: "إستثمار و ادخار ", url: "/" },
      ],
      contact: "كونتكت",
      contact_list: [
        { name: "عن كونتكت", url: "/about" },
        { name: "شركتنا", url: "/" },
        { name: "أخبار كونتكت", url: "/media" },
        { name: "عروض كونتكت", url: "/" },
        { name: "المدونة", url: "/" },
        { name: "الإستدامة", url: "/" },
      ],
      company: "الشركة",
      company_list: [
        { name: "وظائفنا", url: "/" },
        {
          name: "كتالوج منتجات كونتكت",
          url: "https://contact-app-prod.s3.us-east-2.amazonaws.com/contact.eg/Contact-Brochure.pdf",
        },
        { name: "تواصل معنا", url: "/" },
      ],
      policy: "السياسات",
      policy_list: [
        { name: "سياسة الخصوصة", url: "/" },
        { name: "دليل حماية العملاء ", url: "/" },
      ],
    },
    section_c: {
      download_app: "حمل تطبيق كونتكت",
      img1: "/google-play-ar.png",
      img2: "/app-store-ar.png",
      img1: "/google-play-ar.png",
      img3: "/huawei-store-ar.png",
    },
    section_d: { copy_right: "جميع الحقوق محفوظة  2021  لكونتكت" },
  },
  bottom_card: {
    placeholder: "ادخل البريد الالكتروني",
    send: "ارسل",
  },
  form_labels: {
    full_name: "الاسم بالكامل",
    last_name: "اسم العائلة",
    email_adress: "البريد الالكتروني",
    phone_number: "رقم الهاتف",
    national_id: "رقم البطاقة",
    governorate: "المحافظة",
    g_placeholder: "اختر المحافظة",
    city: "المدينة",
    category: "الفئة",
    area: "المنطقة",
    case1: "من فضلك اختر على الأقل فئة ومدينة",
    case2: "لا يوجد تجار",
    cat_placeholder: "اختر الفئة",
    city_placeholder: "اختر المدينة",
    area_placeholder: "اختر المنطقة",
    a_placeholder: "اختر المنطقة",
    car_type: "نوع السيارة",
    car_placeholder: "اختر السيارة",
    car_price: "ثمن السيارة",
    products: "المنتجات",
    products_placeholder: "اختر منتج",
    submit: "اطلب الخدمة",
    // =======
    subject: "الموضوع",
    message: "الرسالة",
  },
  governorates: [
    {
      id: "1",
      governorate_name: "القاهرة",
    },
    { id: "2", governorate_name: "الجيزة" },
    {
      id: "3",
      governorate_name: "الأسكندرية",
    },
    {
      id: "4",
      governorate_name: "الدقهلية",
    },
    {
      id: "5",
      governorate_name: "البحر الأحمر",
    },
    {
      id: "6",
      governorate_name: "البحيرة",
    },
    {
      id: "7",
      governorate_name: "الفيوم",
    },
    {
      id: "8",
      governorate_name: "الغربية",
    },
    {
      id: "9",
      governorate_name: "الإسماعلية",
    },
    {
      id: "10",
      governorate_name: "المنوفية",
    },
    {
      id: "11",
      governorate_name: "المنيا",
    },
    {
      id: "12",
      governorate_name: "القليوبية",
    },
    {
      id: "13",
      governorate_name: "الوادي الجديد",
    },
    {
      id: "14",
      governorate_name: "السويس",
    },
    {
      id: "15",
      governorate_name: "اسوان",
    },
    {
      id: "16",
      governorate_name: "اسيوط",
    },
    {
      id: "17",
      governorate_name: "بني سويف",
    },
    {
      id: "18",
      governorate_name: "بورسعيد",
    },
    {
      id: "19",
      governorate_name: "دمياط",
    },
    {
      id: "20",
      governorate_name: "الشرقية",
    },
    {
      id: "21",
      governorate_name: "جنوب سيناء",
    },
    {
      id: "22",
      governorate_name: "كفر الشيخ",
    },
    {
      id: "23",
      governorate_name: "مطروح",
    },
    {
      id: "24",
      governorate_name: "الأقصر",
    },
    { id: "25", governorate_name: "قنا" },
    {
      id: "26",
      governorate_name: "شمال سيناء",
    },
    {
      id: "27",
      governorate_name: "سوهاج",
    },
  ],
  car_type: [
    {
      id: "1",
      value: "جديد",
    },
    { id: "2", value: "مستعمل" },
  ],
  home_page: {
    slides: [
      {
        bgColor: "#2D317F",
        bgImage: "/bgs/01-ar.svg",
        text: "ادفع فواتيرك وأنت في مكانك",
        textColor: colors.ratty,
        logo: "/home-cover/contact-pay-ar.png",
        button: "اقرأ المزيد",
        img: "/home-cover/cover_img_1_ar.png",
        link: "#contact-pay",
      },
      {
        bgColor: "#EAEAEA",
        bgImage: "/bgs/02-ar.svg",
        textColor: colors.white,
        logo: "/home-cover/contact-ar.png",
        text: "كونتكت اقرب ليك!",
        button: "اختر فرعك",
        img: "/home-cover/cover_img_2_ar.png",
        link: "#map",
      },
      {
        bgColor: "#EAEAEA",
        bgImage: "/bgs/03-ar.svg",
        logo: "/home-cover/contact-brokerage-ar.png",
        text: "نافذة واحدة وشاملة لكل الخدمات التأمينية",
        textColor: colors.ratty,
        button: "أطلب الخدمة",
        img: "/home-cover/cover_img_3_ar.png",
        link: "/products/insurance",
      },
      {
        bgColor: "#2D317F",
        bgImage: "/bgs/04-ar.svg",
        logo: "/home-cover/contact-now-ar.png",
        text: "حمل التطبيق واستمتع بخدمات تمويلية غير محدودة",
        textColor: colors.white,
        button: "اقرأ المزيد",
        img: "/home-cover/cover_img_4_ar.png",
        link: "#instant-approval",
      },
      {
        bgColor: "#EAEAEA",
        bgImage: "/bgs/05-ar.svg",
        logo: "/home-cover/contact-blue-ar.png",
        text: "اسهل تقسيط واكبر تمويل",
        textColor: colors.ratty,
        button: "تصفح المنتجات",
        img: "/home-cover/cover_img_5_ar.png",
        link: "#all-products",
      },
    ],
    products_title: "منتجاتنا التمويلية",

    products: [
      {
        title1: "تمويل",
        title2: "السيارات",
        img: "/our-products/auto.jpg",
        url: "/products/cars",
      },
      {
        title1: "تمويل",
        title2: "عقاري",
        img: "/our-products/mortgage.jpg",
        url: "/products/mortgage",
      },
      {
        title1: "تمويل",
        title2: "النقل",
        img: "/our-products/trucks.jpg",
        url: "/products/trucks",
      },
      {
        title1: "تمويل",
        title2: "استهلاكي",
        img: "/our-products/auto.jpg",
        url: "/products/shopping",
      },
      {
        title1: "برامج",
        title2: "التعليم",
        img: "/our-products/education.jpg",
        url: "/products/education",
      },
      {
        title1: "تأجير",
        title2: "تمويلي",
        img: "/our-products/leasing.jpg",
        url: "/products/leasing",
      },
      {
        title1: "تمويل",
        title2: "التشطيب",
        img: "/our-products/home-interior.jpg",
        url: "/products/home-interior",
      },
      {
        title1: "تمويل",
        title2: "التخصيم",
        img: "/our-products/factoring.jpg",
        url: "/products/factoring",
      },
      {
        title1: "اشتراكات",
        title2: "الاندية",
        img: "/our-products/clubs.jpg",
        url: "/products/clubs",
      },
      {
        title1: "تمويل",
        title2: "الاخضر",
        img: "/our-products/green-finance.jpg",
        url: "/products/green-finance",
      },
      {
        title1: "تمويل",
        title2: "الصيانة",
        img: "/our-products/clubs.jpg",
        url: "/products/maintainance",
      },
      {
        title1: "تمويل",
        title2: "فرش البيت",
        img: "/our-products/furniture.jpg",
        url: "/products/finishing",
      },
      {
        title1: "تمويل",
        title2: "افراح",
        img: "/our-products/wedding-events.jpg",
        url: "/products/events",
      },
      {
        title1: "وساطة",
        title2: "تامينية",
        img: "/our-products/insurance.jpg",
        url: "/products/insurance",
      },
    ],
    bos: {
      title1: "كونتكت",
      title2: "باي",
      body1:
        "دلوقتي تقدر تدفع كل فواتيرك وانت في مكانك مع Contact Pay. ادفع فواتير التليفون، الكهرباء، الغاز وخدمات غيرها كتير بكل بساطة وسرعة من خلال تطبيق ContactNow على موبايلك او زور اقرب فرع من فروع كونتكت المنتشرة في جميع أنحاء الجمهورية.",
      body2: [
        "مصاريف المدارس والجامعات",
        "فواتير الكهرباء",
        "فواتير الغاز",
        "فواتير التليفون الأرضي",
        "فواتير المياه",
        "فواتير وشحن المحمول",
        "تذاكر وسائل النقل",
        "اشتراك الإنترنت",
        "اشتراك القنوات التلفزيونية",
        "الأقساط التأمينية",
        "التبرعات الخيرية",
        "اشتراكات الأندية",
      ],
    },
    services: {
      A: [
        {
          id: "1",
          url: "/products/cars",

          color: colors.blue,
          img: "/services/car.svg",
          title: "تمويل السيارات",
          description:
            "لو عايز تشتري عربية جديدة أو مستعملة، كونتكت بتوفرلك حلول تمويلية متميزة لجميع الماركات ",
        },
        {
          url: "/products/trucks",

          color: colors.dark_red,
          img: "/services/lorry.svg",
          title: "تمويل النقل",
          description:
            "سواء محتاج نقل تقيل أو خفيف كونتكت هتقسطلك جميع أنواع الشاحنات الجديدة والمستعملة والاستيراد",
        },
        {
          url: "/products/shopping",

          color: colors.dark_violet,
          img: "/services/cart.svg",
          title: "تمويل تسوق",
          description: "لو نفسك تشتري في أي وقت براحتك، كونتكت هتسهل حياتك",
        },
        {
          url: "/products/education",

          color: colors.green,
          img: "/services/education.svg",
          title: "تمويل التعليم",
          description:
            "نفسك في مستقبل أفضل ليك ولأولادك، كونتكت هتساعدك وهتكون معاك طول مشوار التعليم",
        },
        {
          url: "/products/clubs",

          color: colors.dark_petroli,
          img: "/services/clubs.svg",
          title: "تمويل إشتراكات الاندية",
          description:
            "نفسك تُنمى مهارات أولادك وتساعدهم يمارسوا الرياضة اللي بيحبوها، كونتكت هتقسطلك اشتراك ",
        },
        {
          url: "/products/home-interior",
          color: colors.dark_brown,
          img: "/services/design.svg",
          title: "تمويل تصميم و تشطيب",
          description:
            "لو عايز تصمم وتشطب بيتك على مزاجك من خلال أفضل شركات التصميم الداخلي والديكور في مصر، ",
        },
        {
          url: "/products/maintainance",

          color: colors.dark_brown,
          img: "/services/maintainance.svg",
          title: "تمويل الصيانة",
          description:
            "لو بيتك، عربيتك أو ممتلكاتك محتاجة صيانة، كونتكت سهلتها عليك وهتقسطها على فترات سداد مريحة.",
        },
      ],
      B: [
        {
          url: "/products/events",

          color: colors.dark_green,
          img: "/services/ring.svg",
          title: "تمويل أفراح و مناسبات",
          description:
            "افرح وريح بالك، كونتكت حلتهالك وهتغطي تكاليف فرحك بأكبر قيمة تمويل وبتقسيط سهل ومريح",
        },
        {
          url: "/products/home-interior",

          color: colors.dark_petroli,
          img: "/services/house.svg",
          title: "تمويل عقاري",
          description:
            'احصل على تمويل بيت أحلامك بأسهل وأسرع الإجراءات من خلال نظام "تمويل بيتك"',
        },
        {
          url: "/products/insurance",

          color: colors.ratty,
          img: "/services/mediation.svg",
          title: "وساطة تأمينية",
          description:
            "محتاج مكان واحد تقدر تأمن فيه على عيلتك، بيتك، عربيتك، مشروعك أو شركتك",
        },
        {
          url: "/products/factoring",

          color: colors.dark_brown,
          img: "/services/discount.svg",
          title: "تخصيم",
          description:
            "لو محتاج سيولة نقدية، كونتكت هتدعمك وهتضمنلك تعزيز رأس المال الخاص بشركتك ",
        },
        {
          url: "/products/leasing",

          color: colors.light_petroli,
          img: "/services/rent.svg",
          title: "تأجير تمويلي",
          description:
            "لو عايز تجهز عيادتك الطبية أو تطور أسطول النقل الخاص بشركتك",
        },
        {
          url: "/products/green-finance",

          color: colors.light_green,
          img: "/services/green-finance.svg",
          title: "التمويل الاخضر",
          description:
            "لو محتاج تُنمي استثمارك الزراعي، كونتكت بتقدملك التمويل اللازم اللي هيساعدك في تحقيق التنمية ",
        },
        {
          url: "/products/finishing",

          color: colors.light_green,
          img: "/services/green-finance.svg",
          title: "تمويل فرش البيت",
          description:
            "لو عايز تفرش وتجهز بيتك على مزاجك ومن أي مكان نفسك فيه، كونتكت هتسهلك المشوار",
        },
      ],
      All: [
        {
          url: "/products/cars",

          id: "1",
          color: colors.blue,
          img: "/services/car.svg",
          title: "تمويل السيارات",
          description:
            "لو عايز تشتري عربية جديدة أو مستعملة، كونتكت بتوفرلك حلول تمويلية متميزة لجميع الماركات ",
        },
        {
          url: "/products/trucks",

          color: colors.dark_red,
          img: "/services/lorry.svg",
          title: "تمويل النقل",
          description:
            "سواء محتاج نقل تقيل أو خفيف كونتكت هتقسطلك جميع أنواع الشاحنات الجديدة والمستعملة والاستيراد",
        },
        {
          url: "/products/shopping",

          color: colors.dark_violet,
          img: "/services/cart.svg",
          title: "تمويل تسوق",
          description: "لو نفسك تشتري في أي وقت براحتك، كونتكت هتسهل حياتك",
        },
        {
          url: "/products/education",

          color: colors.green,
          img: "/services/education.svg",
          title: "تمويل التعليم",
          description:
            "نفسك في مستقبل أفضل ليك ولأولادك، كونتكت هتساعدك وهتكون معاك طول مشوار التعليم",
        },
        {
          url: "/products/clubs",

          color: colors.dark_petroli,
          img: "/services/clubs.svg",
          title: "تمويل إشتراكات الاندية",
          description:
            "نفسك تُنمى مهارات أولادك وتساعدهم يمارسوا الرياضة اللي بيحبوها، كونتكت هتقسطلك اشتراك ",
        },
        {
          url: "/products/home-interior",

          color: colors.dark_brown,
          img: "/services/design.svg",
          title: "تمويل تصميم و تشطيب",
          description:
            "لو عايز تصمم وتشطب بيتك على مزاجك من خلال أفضل شركات التصميم الداخلي والديكور في مصر، ",
        },
        {
          url: "/products/maintainance",

          color: colors.dark_brown,
          img: "/services/maintainance.svg",
          title: "تمويل الصيانة",
          description:
            "لو بيتك، عربيتك أو ممتلكاتك محتاجة صيانة، كونتكت سهلتها عليك وهتقسطها على فترات سداد مريحة.",
        },
        {
          url: "/products/events",

          color: colors.dark_green,
          img: "/services/ring.svg",
          title: "تمويل أفراح و مناسبات",
          description:
            "افرح وريح بالك، كونتكت حلتهالك وهتغطي تكاليف فرحك بأكبر قيمة تمويل وبتقسيط سهل ومريح",
        },
        {
          url: "/products/mortgage",

          color: colors.dark_petroli,
          img: "/services/house.svg",
          title: "تمويل عقاري",
          description:
            'احصل على تمويل بيت أحلامك بأسهل وأسرع الإجراءات من خلال نظام "تمويل بيتك"',
        },
        {
          url: "/products/insurance",

          color: colors.ratty,
          img: "/services/mediation.svg",
          title: "وساطة تأمينية",
          description:
            "محتاج مكان واحد تقدر تأمن فيه على عيلتك، بيتك، عربيتك، مشروعك أو شركتك",
        },
        {
          url: "/products/factoring",

          color: colors.dark_brown,
          img: "/services/discount.svg",
          title: "تخصيم",
          description:
            "لو محتاج سيولة نقدية، كونتكت هتدعمك وهتضمنلك تعزيز رأس المال الخاص بشركتك ",
        },
        {
          url: "/products/leasing",

          color: colors.light_petroli,
          img: "/services/rent.svg",
          title: "تأجير تمويلي",
          description:
            "لو عايز تجهز عيادتك الطبية أو تطور أسطول النقل الخاص بشركتك",
        },
        {
          url: "/products/green-finance",

          color: colors.light_green,
          img: "/services/green-finance.svg",
          title: "التمويل الاخضر",
          description:
            "لو محتاج تُنمي استثمارك الزراعي، كونتكت بتقدملك التمويل اللازم اللي هيساعدك في تحقيق التنمية ",
        },
        {
          url: "/products/finishing",

          color: colors.light_green,
          img: "/services/green-finance.svg",
          title: "تمويل فرش البيت",
          description:
            "لو عايز تفرش وتجهز بيتك على مزاجك ومن أي مكان نفسك فيه، كونتكت هتسهلك المشوار",
        },
      ],
      C: [
        {
          url: "/products/leasing",
          color: colors.blue,
          img: "/services/homes.svg",
          title: "كونتكت هومز",
          description:
            "الان من خلال الشراكة بين شركة كونتكت, شركة التمويل الأولى في مصر، و شركة كولدويل بانكر",
          full_description:
            "الان من خلال الشراكة بين شركة كونتكت, شركة التمويل الأولى في مصر، و شركة كولدويل بانكر",
        },
      ],
      D: [
        {
          url: "/rewards",

          color: colors.blue,
          img: "/services/clients.svg",
          title: "برنامج ترشيح العملاء",
          description:
            "يمكنك ترشيح أصدقاءك والحصول على نقاط مجانية وخصومات حصرية",
          full_description:
            "الان من خلال الشراكة بين شركة كونتكت, شركة التمويل الأولى في مصر، و شركة كولدويل بانكر",
        },
      ],
    },
    news_title: "أخبارنا",
    news_button1: "اقرأ المزيد",
    news_button2: "المزيد",
    news: [
      {
        id: "1",
        img: "/news/news1.png",
        title: "كونتكت تطلق منتج رقمي لتأمين السيارات",
        description:
          "كونتكت المالية القابضة تعلن اليوم عن إطلاق منتج رقمي بالكامل للتأمين التكميلى للسيارات في مصر. يتوفر المنتج من خلال منصة كونتكت كارز دوت كوم وشركة ثروة للتأمين وشركة كونتكت ...",
      },
      {
        id: "2",
        img: "/news/news2.png",
        title:
          "«شطبلي» توقع اتفاقية شراكة مع «كونتكت» لإتاحة برامج تمويل مبتكرة",
        description:
          "وقّعت شركة «شطبلي»، صاحبة أول منصة إلكترونية متخصصة في أعمال تصميم وتنفيذ أعمال الديكورات والتشطيبات، اتفاقية شراكة مع شركة كونتكت للتمويل ...",
      },
      {
        id: "3",
        img: "/news/news3.png",
        title: "كونتكت توقع برنامج تمويل فريد من نوعه في مصر مع كابيتر",
        description:
          "وقعت كونتكت المالية القابضة (CNFN)، الشركة الرائدة في مجال الخدمات المالية غير مصرفية في مصر، من خلال شركة كونتكت للتخصيم، أحد ...",
      },
    ],
  },

  products_shopiing_page: {
    cover: {
      title1: "تمويل استهلاكي",
      title2: "بنسهّل حياتك",
      description: `لو نفسك تشتري في أي وقت براحتك، كونتكت هتسهل حياتك من خلال حلول
      تمويلية خالية من المتاعب وبأسهل وأسرع موافقة وأوسع شبكة تجار تغطي جميع
      المنتجات والخدمات ومنتشرة في جميع أنحاء الجمهورية.`,
    },
    section_a: {
      title1: "فترة سداد",
      title2: "36 شهر",
      body: `إشتري كل إحتياجاتك بدون عمليات معقدة فقط برقم البطاقة و برقم موبايلك, من خلال نظام كنتكت الإلكتروني للتس الشراء و التقسيط من أكثر من 1000 منفذ بيع في جميع محافاظات الجمهورية. نظام التقسيط من كونتكت تسوق هو أفضل و أسرع طريقة لتمويل جميع مشترياتك من خلال شبكة ضخمة من المنافذ التجارية و معارض التجزئة و المتاجر الكبري و توكيلات الماركات العالمية. والذي يتيح لك حرية تحديد مبلغ الدفعة المقدمة و يقدم أنظمة التقسيط بفترات سداد تتراوح من 6 أشهر إلي 36 شهر.`,
    },
    section_b: [
      "إختر التاجر من خلال شبكتنا",
      "الذهاب إلى المتجر مع بطاقة الرقم القومي والموبايل المسجل في الخدمة",
      "حدد مبلغ القسط وفترة السداد التي تتراوح ما بين 6 إلى 60 شهر",
      "سوف تتلقى رمز العملية من خلال رسالة نصية على هاتفك المحمول لتقديمها إلى التاجر",
      "سيتم إرسال فاتورة إلكترونية من خلال رسالة نصية على هاتفك المحمول",
    ],
  },
  about: {
    members: {
      directors: "مجلس الادارة",
      mangers: "الادارة التنفيذية",
      title: "مجلس الإدارة وفريق العمل",
      subtitle:
        "نحن نبحث دائمًا عن الأفراد المتحمسين والديناميكيين والموهوبين.",
    },
    aboutTitle: "نبذه عن",
    aboutText:
      "كونتكت المالية القابضة هي شركة رائدة تتميز بتقديم باقة متنوعة من الحلول والخدمات التمويلية تشمل تمويل السيارات والتمويل الاستهلاكي والتمويل العقاري والتأمين وغيرها من الخدمات لقاعدة عريضة من العملاء، فضلاً عن أنها اللاعب الرئيسي في أسواق أدوات الدين الناشئة في مصر، حيث تقوم بهيكلة وتنظيم وتغطية الاكتتاب في عمليات إصدار الدين للشركات الراغبة في تمويل خطط النمو وإدارة المخاطر وتحسين أوضاعها المالية وزيادة مستويات السيولة.",
    aboutCard: {
      heading1: "خبراتنا",
      text1:
        "نسعى دائما إلى توظيف خبرتنا الواسعة بمجال إدارة الاستثمارات المالية وتوفير التمويل في استحداث حلول مالية متطورة تناسب احتياجات عملائنا؛ كما نعمل على تطويع الفرص المتاحة في القطاعات المالية الواعدة مما يساهم في زيادة معدلات الإدماج المالي في السوق.",
      heading2: "الحلول التمويلية",
      text2:
        "وتتباين الحلول التمويلية المقدمة لتشمل نطاقا عريضًا من الخدمات والمنتجات لعملائنا من الأفراد والشركات سواء قدمت تحت إحدى العلامات التجارية الخاصة بكونتكت المالية القابضة أو ضمن برامج العلامات المتخصصة التي نقدم من خلالها مجموعة من المنتجات والحلول التمويلية التي صممت خصيصا لتتناسب مع احتياجات كبرى الشركات من شركاء الأعمال.",
      heading3: "فريق العمل",
      text3:
        "ويمثل حجر الأساس في نجاح كونتكت المالية القابضة فريق العمل الذي يضم أكثر من 2,200 محترف من أبرز الكوادر في الصناعة. وإيمانًا من الشركة بالدور الذي يلعبه فريق العمل في الحفاظ على ريادة الشركة وتميزها، فإنها تحرص دائمًا على الاستثمار في موظفيها ولا تدخر جهدًا في دعمهم حيث إنها تثق أن نجاح الشركة لا يولد إلا بنجاح موظفيها.",
    },
    title: "أكد على ما هو مهم لشركتك",
    text: "نسعى دائما إلى توظيف خبرتنا الواسعة بمجال إدارة الاستثمارات المالية وتوفير التمويل في استحداث حلول مالية متطورة تناسب احتياجات عملائنا",
    card: {
      vision_mission: [
        {
          id: "1",
          title: "رؤيتنا",
          text: [
            "نسعى أن نكون الاختيار الأول في تقديم الخدمات المالية لعملائنا مستخدمين أحدث التقنيات التكنولوجية للتأكد من تمكين العملاء من الاستفادة من حلولنا المبتكرة وتعظيم إمكاناتهم المالية. كما نسعى جاهدين للتميز في كل ما نقوم به ونلتزم بتقديم تجربة عملاء متميزة.",
          ],
          img: "/images/eye.png",
        },
        {
          id: "2",
          title: "هدفنا",
          text: [
            "نقوم بتقديم خدمات تمويلية رقمية مبتكرة تتمركز حول متطلبات العميل واحتياجاته، من خلال علاقتنا القوية والتزامنا تجاه عملائنا. حيث يقوم خبرائنا بتقديم تجربة فريدة عن طريق نافذة تمويلية متكاملة بإستخدام أحدث التقنيات المتطورة وتقديم خدمة عملاء إستثنائية. كما تتعدد برامجنا التمويلية لتشمل خدمة الأفراد و الشركات بهدف تحقيق جميع أهدافهم المالية.",
          ],
          img: "/images/mission.png",
        },
        {
          id: "3",
          title: "قيمنا",
          text: [
            "العميل اولا: هو منهجنا وهدفنا الأول في تقديم خدمات تمويلية سلسة واستثنائية . وإدراكنا لقيمة العميل هو الدعامة الرئيسية لعلاقة طويلة الأمد مع عملائنا.",
            "المصداقية والنزاهة: النزاهة والمصداقية هي مبادئنا التي لا نحيد عنها، سواء على مستوى الأفراد او كفريق عمل. نطمح إلى ترسيخ الثقة التي نؤمن انها الأساس في علاقاتنا الشخصية والعملية الممتدة.",
            "السهولة: نقوم بتوظيف التكنولوجيا المتقدمة لضمان سهولة و وضوح الخدمات المقدمة لعملائنا .",
          ],
          img: "/images/value.png",
        },
      ],
    },
    statistic: [
      { id: "1", sufTheous: " ألف", text: "عميل", count: 150 },
      { id: "2", sufTheous: " ألف", text: "عملية", count: 360 },
      { id: "3", sufTheous: "", text: "موظف", count: 2200 },
    ],
  },
  sustainability: {
    sustainabilityTitle: "الاستدامة في",
    sustainabilityText:
      "لكن لا بد أن أوضح لك أن كل هذه الأفكار المغلوطة حول استنكار  النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل لتكتشف حقيقة وأساس تلك السعادة البشرية، فلا أحد يرفض أو يكره أو يتجنب الشعور بالسعادة، ولكن بفضل هؤلاء الأشخاص الذين لا يدركون بأن السعادة لا بد أن نستشعرها بصورة أكثر عقلانية ومنطقية فيعرضهم هذا لمواجهة الظروف الأليمة، وأكرر بأنه لا يوجد من يرغب في الحب ونيل المنال ويتلذذ بالآلام، الألم هو الألم ولكن نتيجة لظروف ما قد تكمن السعاده فيما نتحمله من كد وأسي.",
    sustainabilityCard: {
      heading1: "لكن لا بد ",
      text1:
        "لكن لا بد أن أوضح لك أن كل هذه الأفكار المغلوطة حول استنكار  النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل لتكتشف حقيقة وأساس تلك السعادة البشرية، فلا أحد يرفض أو يكره أو يتجنب الشعور بالسعادة، ولكن بفضل هؤلاء الأشخاص الذين لا يدركون بأن السعادة لا بد أن نستشعرها بصورة أكثر عقلانية ومنطقية فيعرضهم هذا لمواجهة الظروف الأليمة، وأكرر بأنه لا يوجد من يرغب في الحب ونيل المنال ويتلذذ بالآلام، الألم هو الألم ولكن نتيجة لظروف ما قد تكمن السعاده فيما نتحمله من كد وأسي.",
      heading2: "لكن لا بد ",
      text2:
        "لكن لا بد أن أوضح لك أن كل هذه الأفكار المغلوطة حول استنكار  النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل لتكتشف حقيقة وأساس تلك السعادة البشرية، فلا أحد يرفض أو يكره أو يتجنب الشعور بالسعادة، ولكن بفضل هؤلاء الأشخاص الذين لا يدركون بأن السعادة لا بد أن نستشعرها بصورة أكثر عقلانية ومنطقية فيعرضهم هذا لمواجهة الظروف الأليمة، وأكرر بأنه لا يوجد من يرغب في الحب ونيل المنال ويتلذذ بالآلام، الألم هو الألم ولكن نتيجة لظروف ما قد تكمن السعاده فيما نتحمله من كد وأسي.",
      heading3: "لكن لا بد ",
      text3:
        "لكن لا بد أن أوضح لك أن كل هذه الأفكار المغلوطة حول استنكار  النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل لتكتشف حقيقة وأساس تلك السعادة البشرية، فلا أحد يرفض أو يكره أو يتجنب الشعور بالسعادة، ولكن بفضل هؤلاء الأشخاص الذين لا يدركون بأن السعادة لا بد أن نستشعرها بصورة أكثر عقلانية ومنطقية فيعرضهم هذا لمواجهة الظروف الأليمة، وأكرر بأنه لا يوجد من يرغب في الحب ونيل المنال ويتلذذ بالآلام، الألم هو الألم ولكن نتيجة لظروف ما قد تكمن السعاده فيما نتحمله من كد وأسي.",
    },
    subTitle: "لكن",
    title: "لكن لا بد أن أوضح لك أن كل",
    text: "لكن لا بد أن أوضح لك أن كل هذه الأفكار المغلوطة حول استنكار  النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل لتكتشف حقيقة ",
    card: {
      card_sections: [
        {
          id: "1",
          title: "لكن",
          text: [
            "لكن لا بد أن أوضح لك أن كل هذه الأفكار المغلوطة حول استنكار  النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل لتكتشف حقيقة وأساس تلك السعادة البشرية، فلا أحد يرفض أو يكره أو يتجنب الشعور بالسعادة، ولكن بفضل هؤلاء الأشخاص الذين لا يدركون بأن السعادة لا بد أن نستشعرها بصورة أكثر عقلانية ومنطقية فيعرضهم هذا لمواجهة الظروف الأليمة، وأكرر بأنه لا يوجد من يرغب في الحب ونيل المنال ويتلذذ بالآلام، الألم هو الألم ولكن نتيجة لظروف ما قد تكمن السعاده فيما نتحمله من كد وأسي.",
          ],
        },
        {
          id: "2",
          title: "لكن",
          text: [
            "لكن لا بد أن أوضح لك أن كل هذه الأفكار المغلوطة حول استنكار  النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل لتكتشف حقيقة وأساس تلك السعادة البشرية، فلا أحد يرفض أو يكره أو يتجنب الشعور بالسعادة، ولكن بفضل هؤلاء الأشخاص الذين لا يدركون بأن السعادة لا بد أن نستشعرها بصورة أكثر عقلانية ومنطقية فيعرضهم هذا لمواجهة الظروف الأليمة، وأكرر بأنه لا يوجد من يرغب في الحب ونيل المنال ويتلذذ بالآلام، الألم هو الألم ولكن نتيجة لظروف ما قد تكمن السعاده فيما نتحمله من كد وأسي.",
          ],
        },
        {
          id: "3",
          title: "لكن",
          text: [
            "لكن لا بد أن أوضح لك أن كل هذه الأفكار المغلوطة حول استنكار  النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل لتكتشف حقيقة وأساس تلك السعادة البشرية، فلا أحد يرفض أو يكره أو يتجنب الشعور بالسعادة، ولكن بفضل هؤلاء الأشخاص الذين لا يدركون بأن السعادة لا بد أن نستشعرها بصورة أكثر عقلانية ومنطقية فيعرضهم هذا لمواجهة الظروف الأليمة، وأكرر بأنه لا يوجد من يرغب في الحب ونيل المنال ويتلذذ بالآلام، الألم هو الألم ولكن نتيجة لظروف ما قد تكمن السعاده فيما نتحمله من كد وأسي.",
          ],
        },
      ],
    },
    statistic: [
      { id: "1", sufTheous: " ألف", text: "لكن", count: 360 },
      { id: "2", sufTheous: " ألف", text: "لكن", count: 150 },
      { id: "3", sufTheous: "", text: "لكن", count: 2200 },
    ],
  },
  calc: {
    monthlyAmount: " قيمة القسط الشهري",
    priceCar: "السعر ",
    preAmount: "المقدم",
    plan: "الخطة",
    plan: "الخطة",
    egyptianPound: "جنية مصري",
    duration: "المدة",
    year1: "1 سنة",
    year2: "2 سنة",
    year3: "3 سنة",
    year4: "4 سنة",
    year5: "5 سنة",
    year6: "6 سنة",
    plan1: "البرنامج الإقتصادي",
    plan2: "البرنامج المرن",
  },
  products_events: {
    cover: {
      img: "/pages/events-cover.png",
      color: "#1F5B36",
      title1: "تمويل الأفراح والمناسبات",
      title2: "هنكمل فرحتك",
      description: `افرح وريح بالك، كونتكت حلتهالك وهتغطي تكاليف فرحك بأكبر قيمة تمويل وبتقسيط سهل ومريح، وكمان هتكون معاك في كل مناسباتك السعيدة سواء حفلات الخطوبة أو التخرج أو أعياد الميلاد.`,
    },
  },
  // products_finishing: {
  //   cover: {
  //     img: "/pages/finishing-cover.png",
  //     color: "#977859",
  //     title1: "تمويل تصميم وتشطيب بيتك",
  //     title2: "بيتك على ذوقك",
  //     description: `لو عايز تصمم وتشطب بيتك على مزاجك من خلال أفضل شركات التصميم الداخلي والديكور في مصر، كونتكت هتقدملك أكبر قيمة تمويل وعلى فترات سداد تناسب إمكانياتك.`,
  //   },
  //   section_a: {
  //     title: "4 مليون جنية",
  //     body: `برامج تمويل النقل تصل بحد أقصي إلي 2 مليون جنية مصري لسيارات النقل الجديدة, بفترات سداد تصل إلي 5 سنوات بمقدم يبدأ من 20% بأسهل الإجراءات كونتكت توفر لك أسرع و أبسط نظام لتمويل و تقسيط معاملاتك الشرائية, فقط من خلال بطاقة الرقم القومي الخاصة بك تستطيع شراء منتجات التشطيب التي تحتاجها مثل الحوائط و الأرضيات, أبوب و شبابيك, دهانات  و ديكور, مستلزمات كهربائية, الأدوات الصحية و غيرها, من خلال شبكة سريعة النمو من المنافذ التجارية و معارض التجزئة و المتاجر الكبري, كما يتوفر لك حرية إختيار الدفعة المقدمة و القسط الشهري المناسب مع فترات تقيسط تتراوح من 6 إلي 60 شهراً.`,
  //   },
  //   section_b: {
  //     img: "/pages/without-advance.png",
  //     title: "بدون مقدم",
  //     body: `كونتكت توفر لك أسرع و أبسط نظام لتمويل و تقسيط معاملاتك الشرائية من خلال شبكة  سريعة النمو من المنافذ التجارية و معارض التجزئة و المتاجر الكبري. كما يتوفر لك حرية إختيار الدفعة المقدمة و القسط الشهري المناسب مع فترة تفسيط تتراوح بين 6 إلي 60 شهرا حد ائتماني يصل إلي 750,000 جنية بدون مقدم أو مصاريف إضافية. لا يتطلب ملكية الوحدة أو الرهن العقاري أسرع و أسهل إجراءات للإصدار`,
  //   },
  // },

  products_finishing: {
    cover: {
      img: "/pages/finishing-cover.png",
      color: "#977859",
      title1: "تمويل تصميم وتشطيب بيتك",
      title2: "بيتك على ذوقك",
      description: `لو عايز تصمم وتشطب بيتك على مزاجك من خلال أفضل شركات التصميم الداخلي والديكور في مصر، كونتكت هتقدملك أكبر قيمة تمويل وعلى فترات سداد تناسب إمكانياتك.`,
    },
    section_a: {
      title: "4 مليون جنية",
      body: `برامج تمويل النقل تصل بحد أقصي إلي 2 مليون جنية مصري لسيارات النقل الجديدة, بفترات سداد تصل إلي 5 سنوات بمقدم يبدأ من 20% بأسهل الإجراءات كونتكت توفر لك أسرع و أبسط نظام لتمويل و تقسيط معاملاتك الشرائية, فقط من خلال بطاقة الرقم القومي الخاصة بك تستطيع شراء منتجات التشطيب التي تحتاجها مثل الحوائط و الأرضيات, أبوب و شبابيك, دهانات  و ديكور, مستلزمات كهربائية, الأدوات الصحية و غيرها, من خلال شبكة سريعة النمو من المنافذ التجارية و معارض التجزئة و المتاجر الكبري, كما يتوفر لك حرية إختيار الدفعة المقدمة و القسط الشهري المناسب مع فترات تقيسط تتراوح من 6 إلي 60 شهراً.`,
    },
    section_b: {
      img: "/pages/without-advance.png",
      title: "بدون مقدم",
      body: `كونتكت توفر لك أسرع و أبسط نظام لتمويل و تقسيط معاملاتك الشرائية من خلال شبكة  سريعة النمو من المنافذ التجارية و معارض التجزئة و المتاجر الكبري. كما يتوفر لك حرية إختيار الدفعة المقدمة و القسط الشهري المناسب مع فترة تفسيط تتراوح بين 6 إلي 60 شهرا حد ائتماني يصل إلي 750,000 جنية بدون مقدم أو مصاريف إضافية. لا يتطلب ملكية الوحدة أو الرهن العقاري أسرع و أسهل إجراءات للإصدار`,
    },
  },
  products_events: {
    cover: {
      img: "/pages/events-cover.png",
      color: "#1F5B36",
      title1: "تمويل الأفراح والمناسبات",
      title2: "هنكمل فرحتك",
      description: `افرح وريح بالك، كونتكت حلتهالك وهتغطي تكاليف فرحك بأكبر قيمة تمويل وبتقسيط سهل ومريح، وكمان هتكون معاك في كل مناسباتك السعيدة سواء حفلات الخطوبة أو التخرج أو أعياد الميلاد.`,
    },
  },
  products_factoring: {
    cover: {
      img: "/pages/factoring-cover.png",
      color: "#5B311F",
      title1: "التخصيم",
      title2: "سيولة بسهولة",
      description: `لو محتاج سيولة نقدية، كونتكت هتدعمك وهتضمنلك تعزيز رأس المال الخاص بشركتك قبل موعد التحصيل بأقل أعباء وبمرونة كبيرة وحلول مبتكرة ومتخصصة.`,
    },
  },
  products_clubs: {
    cover: {
      img: "/pages/clubs-cover.png",
      color: "#745306",
      title1: "تمويل اشتراكات الأندية",
      title2: "جدد نشاطك وشجع ولادك",
      description: `نفسك تُنمى مهارات أولادك وتساعدهم يمارسوا الرياضة اللي بيحبوها، كونتكت هتقسطلك اشتراك أي نادي في مصر بأسهل وأسرع الإجراءات وبفترات سداد مناسبة.`,
    },
    clubs_title: "الاندية المشتركة",
    clubs: [
      ["نادي وادي دجلة", "/pages/club1.png"],
      ["نادي ماتركس", "/pages/club2.png"],
      ["نادي الزهور", "/pages/club3.png"],
      ["نادي جزيرة الورد الرياضي", "/pages/club4.png"],
      ["نادي الحوار", "/pages/club5.png"],
      ["نادي بلاتينم قطامية", "/pages/club6.png"],
    ],
  },
  products_maintainance: {
    cover: {
      img: "/pages/maintainance-cover.png",
      color: "#1F5B36",
      title1: "تمويل الصيانة",
      title2: "معاك في كل تفصيله",
      description: `لو بيتك، عربيتك أو ممتلكاتك محتاجة صيانة، كونتكت سهلتها عليك وهتقسطها على فترات سداد مريحة.`,
    },
  },
  products_trucks: {
    cover: {
      img: "/pages/trucks-cover.png",
      color: "#1E4256",
      title1: "تمويل النقل",
      title2: "سنَدك ومعاك طول الطريق",
      description: `سواء محتاج نقل تقيل أو خفيف كونتكت هتقسطلك جميع أنواع الشاحنات الجديدة والمستعملة والاستيراد بكل سهولة ومرونة في الإجراءات.`,
    },
    plans_title: "خطط التقسيط",
    plans: [
      {
        title: "العادي",
        bodyList: ["مقدم يبدأ من 30%"],
      },
      {
        title: "المرن",
        bodyList: ["مقدم يبدأ من 20%"],
      },
    ],
  },
  products_cars: {
    cover: {
      img: "/pages/cars-cover.png",
      color: "#1169A8",
      title1: "تمويل السيارات",
      title2: "فرحة عربيتك الجديدة مستنياك",
      description: `لو عايز تشتري عربية جديدة أو مستعملة، كونتكت بتوفرلك حلول تمويلية متميزة لجميع الماركات والموديلات بمرونة في الإجراءات وأنظمة تقسيط متعددة تناسب جميع احتياجاتك`,
    },
    plans_title: "خطط التقسيط",
    plans: [
      {
        title: "الإقتصادي",
        bodyList: [
          "مقدم يبدأ من 20%",
          "التأمين أجباري",
          "فترات سداد تصل الي 3 سنوات",
        ],
      },
      {
        title: "الإقتصادي بلس",
        bodyList: [
          "مقدم يبدأ من 20%",
          "التأمين أجباري",
          "فترات سداد تصل الي 5 سنوات",
          "إمكانية السداد المبكر بعد سنة من التعاقد",
        ],
      },
      {
        title: "المرن",
        bodyList: [
          "مقدم يبدأ من 20%",
          "التأمين أجباري",
          "فترات سداد تصل الي 5 سنوات",
          "إمكانية السداد المبكر بعد سنة من التعاقد",
        ],
      },
      {
        title: "المرن بلس",
        bodyList: [
          "مقدم يبدأ من 20%",
          "التأمين اختياري",
          "فترات سداد تصل الي 5 سنوات",
          "إمكانية السداد الكلي أو الجزئي",
        ],
      },
      {
        title: "السيارات المستعملة",
        bodyList: [
          "مقدم يبدأ من 20%",
          "التأمين اختياري",
          "فترات سداد تصل الي 5 سنوات",
          "إمكانية السداد المبكر بعد ٦ أقساط",
        ],
      },
      {
        title: "الشركات",
        bodyList: [
          "مقدم يبدأ من 20%",
          "التأمين أجباري",
          "فترات سداد تصل الي 5 سنوات",
          "إمكانية السداد المبكر بعد سنة من التعاقد",
        ],
      },
    ],
  },
  products_education: {
    cover: {
      img: "/pages/education-cover.png",
      color: "#3C3B3A",
      title1: "تمويل التعليم",
      title2: "معاك وفي ضهرك طول مشوار التعليم",
      description: `نفسك في مستقبل أفضل ليك ولأولادك، كونتكت هتساعدك وهتكون معاك طول مشوارالتعليم بجميع مراحله المختلفة وبكافة أنواعه سواء كانت مصرية أو دولية.`,
    },
  },
  products_home: {
    cover: {
      img: "/pages/home-cover.png",
      color: "#2D9A8F",
      title1: "تمويل عقاري",
      title2: "كونتكت معاك في خطواتك اللي جايه",
      description: `احصل على تمويل بيت أحلامك بأسهل وأسرع الإجراءات من خلال نظام "تمويل بيتك`,
    },
    // plans_title: "خطط التقسيط",
    // plans: [
    // {
    //   title: "اقتصادي",
    //   bodyList: [
    //     "بدون مقدم",
    //     "تمويل يصل إلى 6 مليون جنية",
    //     "فترات سداد تصل الي 5 سنوات",
    //     "إمكانية السداد الكلي أو الجزئي بعد سنه",
    //   ],
    // },
    // {
    //   title: "المرن",
    //   bodyList: [
    //     "بدون مقدم",
    //     "تمويل يصل إلى 6 مليون جنية",
    //     "فترات سداد تصل الي 5 سنوات",
    //     "إمكانية السداد الكلي أو الجزئي بعد سنه",
    //   ],
    // },
    // ],
    section_a: {
      img: "/pages/without-advance.png",
      title: "مميزات نظام تمويل بيتك",
      body: [
        "مقدم 25% من قيمة الوحدة",
        "تمويل يصل إلى 6 مليون جنيه",
        "فترات سداد تصل إلى 10 سنوات",
        "شاملة جميع الوحدات السكنية بجميع أنواعها سواء كانت (داخل كومباوند أو خارجه بشكل منفرد)",
      ],
    },
    section_b: {
      img: "/pages/without-advance.png",
      title: `أو احصل على تمويل بضمان بيتك يصل إلى 50% من قيمته من خلال نظام "إعادة تمويل بيتك"`,
      body: [
        "بدون مقدم",
        " تمويل نقدي يصل إلى 6 مليون جنيه",
        "فترات سداد تصل إلى 5 سنوات",
        " التمويل يشمل جميع الوحدات السكنية بجميع أنواعها سواء كانت (داخل كومباوند أو خارجه بشكل منفرد)",
      ],
    },
    card_section_title: "البرامج",
    cards: [
      {
        title: "اقتصادي",
        body: [
          "بدون مقدم",
          "تمويل يصل إلى 6 مليون جنية",
          "فترات سداد تصل الي 5 سنوات",
          "إمكانية السداد الكلي أو الجزئي بعد سنه",
        ],
      },
      {
        title: "المرن",
        body: [
          "بدون مقدم",
          "تمويل يصل إلى 6 مليون جنية",
          "فترات سداد تصل الي 5 سنوات",
          "إمكانية السداد الكلي أو الجزئي بعد سنه",
        ],
      },
    ],
  },
  products_leasing: {
    cover: {
      img: "/pages/leasing-cover.png",
      color: "#7A1315",
      title1: "تأجير تمويلي",
      title2: "طوّر قدراتك ونجح أعمالك",
      description: `لو عايز تجهز عيادتك الطبية أو تطور أسطول النقل الخاص بشركتك، كونتكت هتُمكنك من تنمية أعمالك بأسهل الحلول وأفضل الخدمات التمويلية اللي بتضمنلك السرعة والنجاح للوصول لأهدافك.`,
    },
    section_a: {
      img: "/pages/without-advance.png",
      title: "مزايا كونتكت تأجير تمويلي",
      body: [
        "دفعة مقدمة تبدأ من 10% طبقاً لنوع الأصل",
        "فترات سداد تصل إلى 5 سنوات",
        "شبكة واسعة من الموردين المعتمدين لأفضل المصنعين والماركات العالمية",
        "خطط سداد متنوعة مصممة لتناسب احتياجاتك",
        "إجراءات واضحة بدون تعقيدات",
        "التمويل يشمل تجهيزات العيادات والمنشآت الطبية وسيارات الإسعاف بأحدث أجهزة الرعاية الصحية",
        "التمويل يشمل وسائل النقل من السيارات الشخصية إلى السيارات التجارية (نقل خفيف، متوسط وثقيل) بالإضافة إلى الحافلات والڤان.",
      ],
    },
    section_b: {
      img: "/pages/without-advance.png",
      title: "كيف نعمل",
      description: `لتبسيط الإجراءات صممنا الحلول لترتكز علي القيمة السوقية للأصول التي تحتاجها الشركة. كما أن خبراتنا الطويلة ساعدتنا علي تقديم خدمات شاملة 
  و متخصصة بشكل أفضل و بأعلي إستفادة لك و لأنشتطتك التجارية.`,
      list: [
        [
          "إختار الأصول المناسبة لنشاطك",
          "من خلال شبكة الموردين والشركاء تغطى قطاعات الأدوات الطبية والنقل سواء كانت جديدة أو مستعملة لنضمن وصولك لأفضل المعدات التي تحتاجها لتنمية وتطوير نشاطك",
          "1",
        ],
        [
          "استكمال إجراءات التقديم",
          "فقد فمنا بتبسيط الإجراءات بشكل يسمح لك بمعرفة جميع الخطوات و المستندات المطلوبة بكل وضوح وشفافية. وكذلك الرد علي جميع استفساراتك بسرعة وفى المواعيد المحددة.",
          "2",
        ],
        [
          "اختيار خطة الدفع التي تناسب احتياجاتك",
          "اختيار خطة الدفع التي تناسبك مع مراعاة القيمة السوقية للأصل الذى تختاره مع وضوح وشفافية جميع المصاريف بداية من الدفعة الأولى والرسوم الإدارية المطلوبة منك ، وبدون أي رسوم أخرى غير معلنة",
          "3",
        ],
      ],
    },
  },
  products_green_finance: {
    cover: {
      img: "/pages/green-finance-cover.png",
      color: "#415B1F",
      title1: "التمويل الأخضر",
      title2: "معا نزرع معا نُنمي",
      description: `لو محتاج تُنمي استثمارك الزراعي، كونتكت بتقدملك التمويل اللازم اللي هيساعدك في تحقيق التنمية والاستدامة البيئية وبأنظمة سداد مختلفة تناسب إمكانياتك وتلبي جميع احتياجاتك.`,
    },
    section_a: {
      img: "/pages/without-advance.png",
      title1: "تمويل صغار المزارعين",
      title2: "- من 1 إلى 5 افدنة",
      body: [
        "تمويل وحدات الطاقة الشمسية",
        "تمويل وتطوير نظم الري",
        "تمويل الصوب الزراعية",
        "تمويل تطوير وتجهيز مشروعات الزراعات الخندقية والأغطية البلاستيكية للأنفاق والصوب الزراعية",
        "تمويل أحواض ومعدات الثروة السمكية",
        "تمويل عنابر ومعدات الثروة الداجنة",
        "تمويل عنابر ومعدات الثروة الحيوانية",
      ],
    },
  },

  products_insurance_page: {
    cover: {
      img: "/pages/insurance-cover.png",
      color: "#3D3D3D",
      title1: "وساطة تأمينية",
      title2: "عيش مطّمن وانت مأمن",
      description: `محتاج مكان واحد تقدر تأمن فيه على عيلتك، بيتك، عربيتك، مشروعك أو شركتك، مع كونتكت تقدر تختار ما بين الباقات التأمينية المختلفة اللي بنوفرهالك من خلال أقوي شركات التأمين في مصر بأقل الأسعار وبأفضل مزايا تأمينية تناسب إحتياجات الأفراد والشركات.`,
    },
    section_a: [
      {
        title: "حماية عائلتك",
        points: [
          "تأمين طبي",
          "تأمين حياة",
          "حوادث شخصية",
          "كارت المزايا الطبية",
        ],
      },
      {
        title: "حماية عائلتك",
        points: [
          "تأمين طبي",
          "تأمين حياة",
          "حوادث شخصية",
          "كارت المزايا الطبية",
        ],
      },
      {
        title: "حماية عائلتك",
        points: [
          "تأمين طبي",
          "تأمين حياة",
          "حوادث شخصية",
          "كارت المزايا الطبية",
        ],
      },
      {
        title: "حماية عائلتك",
        points: [
          "تأمين طبي",
          "تأمين حياة",
          "حوادث شخصية",
          "كارت المزايا الطبية",
        ],
      },
    ],
  },
  our_brand_page: {
    title: "شركتنا",
    body: [
      {
        id: 1,
        img: "https://contact.eg/wp-content/uploads/2020/10/logo-3.png",
        link: "/",
        content:
          "بدأت كونتكت في عام 2001 كأول شركة مصرية متخصصة في خدمات التمويل الاستهلاكي. وقد تأسست الشركة باعتبارها كيان مستقل بقيادة إدارة وفريق عمل على أعلى مستوى من الخبرة، ونجحت في جذب الاستثمارات من مصادر متنوعة تشمل البنوك والمؤسسات المالية وشركات الاستثمار المباشر والمستثمرين الأفراد",
      },
      {
        id: 2,
        img: "https://contact.eg/wp-content/uploads/2021/02/Sarwa-Insurance-01.png",
        link: "https://sarwa.insurance/sarwa-insurance",
        content:
          "تعد ثروة للتأمين من أكثر الشركات ديناميكية وسرعة في النمو بسوق التامين المصري من خلال تقديم مجموعة واسعة من حلول التأمين للأفراد والشركات. ينصب تركيزنا الأساسي على تقديم خدمات متميزة وقيمة عالية الجودة للعملاء. لقد اخترنا أفضل الكوادرالتأمينية في مختلف مجالات التأمين لضمان جاهزيتنا لمواجهة المخاطر المتزايدة واحتياجات التأمين المختلفة لعملائنا. إن خبرتنا الواسعة في العمل بالمعايير الدولية وفهم احتياجات السوق يضمن لنا القدرة على تقديم الحلول الاقتصادية الأكثر فعالية للعملاء. كما تحرص الشركة دائماً على بناء الثقة وخلق والمصداقية كأحد الركائز الأساسية في جميع أعمالها.",
      },
      {
        id: 3,
        img: "https://contact.eg/wp-content/uploads/2021/02/Sarwa-Life-EN-1.jpg",
        link: "https://sarwa.insurance/sarwa-Life",
        content:
          "ثروة حياة هي نموذج شامل ونافذة الكترونية واحدة هدفها تغطية الاحتياجات المالية اليومية للعملاء خلال رحلة الحياة كما توفر لهم التغطية الصحية الشاملة، وغيرها من الحلول والخدمات. وقد تم تأسيس ثروة حياة برأس مال مدفوع 100 مليون جنيه لتقديم خدمات متميزة ومبتكرة للعملاء من خلال حلول رقمية سريعة تمكن العملاء من إدارة جميع المتطلبات الكترونياً سواء كان فرد أو شركة في أي وقت وفي أي مكان. بناء على نموذج رقمي وشمولي موحد يدعم احتياجات العمليات المالية اليومية، عن طريق حلول رقمية حديثة ومبتكرة تناسب احتياجات الحياة، والاحتياجات الطبية وغيرها من احتياجات عملائنا. ت تأسيس ثروة لتأمينات الحياة برأس مال يقدر ب 100 مليون جنيه مصري. حيث توفر الشركة خدمات متميزة ومبتكرة لخدمة العملاء سواء كانوا من الأفراد أو الشركات ، من خلال حلول رقمية سهلة وسريعة تساعدهم في إدارة جميع احتياجاتهم رقمياً في أي وقت وفي أي مكان.",
      },
      {
        id: 4,
        img: "https://contact.eg/wp-content/uploads/2021/03/Logo2.png",
        link: "https://www.contactcars.com/en",
        content:
          "كونتكت كارز هي المنصة الرائدة في عالم السيارات في مصر. لأكثر من 19 عاماً وإلى الآن قادت كونتكت كارز التحول الرقمي في صناعة السيارات مقدمة مجموعة متنوعة من المنتجات والخدمات التي تهدف لجعل تجربة البيع والشراء أسهل وأكثر راحة للمستخدمين. والآن في عام 2021 وكجزء من سعينا الدائم للتطوير، نطلق النسخة الجديدة لكل من الموقع وتطبيقات المحمول، إضافة إلى عدد من الخدمات الجديدة لكل من المستخدمين والتجار والوكلاء التي تهدف لتواصل أفضل بين كافة الأطراف الموجودة في سوق السيارات المصري، وتسهيل بيع وشراء السيارات، وتقديم تجربة رقمية جديدة لملاك السيارات في كل ما يتعلق بالاعتناء بسياراتهم.",
      },
      {
        id: 5,
        img: "https://contact.eg/wp-content/uploads/2021/03/file-2-e1614693894411.png",
        link: "/",
        content:
          "لطالما كان الاستثمار في أسواق رأس مال الدين (DCM) محورا مركزيا لنموذج أعمال ثروة حيث سمح لنا بتنوع قاعدة تمويلنا وإعادة هيكلة عملياتنا بنجاح.  ومن خلال خبراتنا من هذه التجربة العميقة الجذور في مجال ادارة أسواق الدين ، قمنا بتسويق مجموعة من خدمات التمويل التي دفعتنا إلى أن نصبح أكبر لاعب في مصر في هذا القطاع. وقد قامت ثروة بترتيب وإصدار أكثر من 26 مليار جنيه من إصدارات الديون منذ عام  2005، بما في ذلك أول طرح من نوعه لسندات التوريق في السوق المصري. كما أن ثروة هي أول مصدر للصكوك المرخصة في السوق المصرية.",
      },
    ],
    link: "لزيارة الموقع",
  },

  rewards: {
    heading: "نقاط برنامج ترشيح العملاء",
    subHeading: "في حالة ترشيح عميل حالي لعميل جديد تحسب النقاط كال",
    title: "كيفية احتساب النقاط",
    note: "ملحوظة: ",
    noteText: "الحد الأدنى لسعر الوثيقة لاحتساب النقاط 5,000 جم",
    pointsCard: [
      {
        id: "1",
        title: "كونتكت تسوق",
        headingKey: "نوع المعاملة",
        headingVal: "عدد النقاط",
        subTitle:
          "تمنح نقاط لكل “جنيه مصري” في المشتريات، وذلك طبقاً لقيمة المعاملة الشرائية الجارية بواسطة الحساب ويتم تقريبها لأقرب نقطة",
        purchaseKey: "المشتريات	",
        purchaseVal: "1 نقطة لكل 1 جم",
        firstTreatmentKey:
          "أول معاملة شرائية خلال أول شهرين من الاشتراك او أول شهرين من اطلاق البرنامج",
        firstTreatmentSubKey: "*بحد ادنى 10000 الاف جنيه مصرى	",
        firstTreatmentVal: "3000 نقطة",
        lastTreatmentKey:
          "خامس معاملة شرائية بعد الإشتراك (ليست مربوطة بمدة محددة)",
        lastTreatmentSubKey: "*بحد ادنى 10000 الاف جنيه مصرى",
        lastTreatmentVal: "2000 نقطة",
      },
      {
        id: "2",
        title: "كونتكت تمويل التشطيب",
        headingKey: "نوع المعاملة",
        headingVal: "عدد النقاط",
        subTitle:
          "تمنح العميل نقاط لكل “جنيه مصري” من المشتريات، وذلك طبقاً لقيمة المعاملة الشرائية الجارية بواسطة الحساب ويتم تقريبها لأقرب نقطة.",
        purchaseKey: "المشتريات	",
        purchaseVal: "0.5 نقطة لكل 1 جم",
        firstTreatmentKey:
          "أول معاملة شرائية خلال أول شهرين من الإشتراك او أول شهرين من إطلاق البرنامج",
        firstTreatmentSubKey: "*بحد ادنى 20000 الاف جنيه مصرى	",
        firstTreatmentVal: "3000 نقطة",
        lastTreatmentKey:
          "خامس معاملة شرائية بعد الإشتراك (ليست مربوطة بمدة محددة)",
        lastTreatmentSubKey: "*بحد ادنى 20000 الاف جنيه مصرى",
        lastTreatmentVal: "2000 نقطة",
      },
    ],
    card: [
      { title: "كونتكت تمويل السيارات ", count: 40000 },
      { title: "كونتكت تمويل النقل ", count: 30000 },
      { title: "كونتكت تسوق عقاري", count: 25000 },
      { title: "كونتكت تمويل التشطيب", count: 20000 },
      { title: "كونتكت تمويل عقاري", count: 20000 },
    ],
    products_finishing: {
      cover: {
        img: "/pages/finishing-cover.png",
        color: "#1F5B36",
        title1: "تمويل فرش البيت",
        title2: "جدد شكل بيتك",
        description: `لو عايز تفرش وتجهز بيتك على مزاجك ومن أي مكان نفسك فيه، كونتكت هتسهلك المشوار بأكبر قيمة تمويل عشان تختار كل الديكور والفرش اللي بيتك محتاجة من خلال أكبر عدد من المعارض ومحلات الديكور والأثاث اللي بتناسب جميع الأذواق والإمكانيات.`,
      },
    },

    our_brand_page: {
      title: "شركتنا",
      body: [
        {
          id: 1,
          img: "https://contact.eg/wp-content/uploads/2020/10/logo-3.png",
          link: "/",
          content:
            "بدأت كونتكت في عام 2001 كأول شركة مصرية متخصصة في خدمات التمويل الاستهلاكي. وقد تأسست الشركة باعتبارها كيان مستقل بقيادة إدارة وفريق عمل على أعلى مستوى من الخبرة، ونجحت في جذب الاستثمارات من مصادر متنوعة تشمل البنوك والمؤسسات المالية وشركات الاستثمار المباشر والمستثمرين الأفراد",
        },
        {
          id: 2,
          img: "https://contact.eg/wp-content/uploads/2021/02/Sarwa-Insurance-01.png",
          link: "https://sarwa.insurance/sarwa-insurance",
          content:
            "تعد ثروة للتأمين من أكثر الشركات ديناميكية وسرعة في النمو بسوق التامين المصري من خلال تقديم مجموعة واسعة من حلول التأمين للأفراد والشركات. ينصب تركيزنا الأساسي على تقديم خدمات متميزة وقيمة عالية الجودة للعملاء. لقد اخترنا أفضل الكوادرالتأمينية في مختلف مجالات التأمين لضمان جاهزيتنا لمواجهة المخاطر المتزايدة واحتياجات التأمين المختلفة لعملائنا. إن خبرتنا الواسعة في العمل بالمعايير الدولية وفهم احتياجات السوق يضمن لنا القدرة على تقديم الحلول الاقتصادية الأكثر فعالية للعملاء. كما تحرص الشركة دائماً على بناء الثقة وخلق والمصداقية كأحد الركائز الأساسية في جميع أعمالها.",
        },
        {
          id: 3,
          img: "https://contact.eg/wp-content/uploads/2021/02/Sarwa-Life-EN-1.jpg",
          link: "https://sarwa.insurance/sarwa-Life",
          content:
            "ثروة حياة هي نموذج شامل ونافذة الكترونية واحدة هدفها تغطية الاحتياجات المالية اليومية للعملاء خلال رحلة الحياة كما توفر لهم التغطية الصحية الشاملة، وغيرها من الحلول والخدمات. وقد تم تأسيس ثروة حياة برأس مال مدفوع 100 مليون جنيه لتقديم خدمات متميزة ومبتكرة للعملاء من خلال حلول رقمية سريعة تمكن العملاء من إدارة جميع المتطلبات الكترونياً سواء كان فرد أو شركة في أي وقت وفي أي مكان. بناء على نموذج رقمي وشمولي موحد يدعم احتياجات العمليات المالية اليومية، عن طريق حلول رقمية حديثة ومبتكرة تناسب احتياجات الحياة، والاحتياجات الطبية وغيرها من احتياجات عملائنا. ت تأسيس ثروة لتأمينات الحياة برأس مال يقدر ب 100 مليون جنيه مصري. حيث توفر الشركة خدمات متميزة ومبتكرة لخدمة العملاء سواء كانوا من الأفراد أو الشركات ، من خلال حلول رقمية سهلة وسريعة تساعدهم في إدارة جميع احتياجاتهم رقمياً في أي وقت وفي أي مكان.",
        },
        {
          id: 4,
          img: "https://contact.eg/wp-content/uploads/2021/03/Logo2.png",
          link: "https://www.contactcars.com/en",
          content:
            "كونتكت كارز هي المنصة الرائدة في عالم السيارات في مصر. لأكثر من 19 عاماً وإلى الآن قادت كونتكت كارز التحول الرقمي في صناعة السيارات مقدمة مجموعة متنوعة من المنتجات والخدمات التي تهدف لجعل تجربة البيع والشراء أسهل وأكثر راحة للمستخدمين. والآن في عام 2021 وكجزء من سعينا الدائم للتطوير، نطلق النسخة الجديدة لكل من الموقع وتطبيقات المحمول، إضافة إلى عدد من الخدمات الجديدة لكل من المستخدمين والتجار والوكلاء التي تهدف لتواصل أفضل بين كافة الأطراف الموجودة في سوق السيارات المصري، وتسهيل بيع وشراء السيارات، وتقديم تجربة رقمية جديدة لملاك السيارات في كل ما يتعلق بالاعتناء بسياراتهم.",
        },
        {
          id: 5,
          img: "https://contact.eg/wp-content/uploads/2021/03/file-2-e1614693894411.png",
          link: "/",
          content:
            "لطالما كان الاستثمار في أسواق رأس مال الدين (DCM) محورا مركزيا لنموذج أعمال ثروة حيث سمح لنا بتنوع قاعدة تمويلنا وإعادة هيكلة عملياتنا بنجاح.  ومن خلال خبراتنا من هذه التجربة العميقة الجذور في مجال ادارة أسواق الدين ، قمنا بتسويق مجموعة من خدمات التمويل التي دفعتنا إلى أن نصبح أكبر لاعب في مصر في هذا القطاع. وقد قامت ثروة بترتيب وإصدار أكثر من 26 مليار جنيه من إصدارات الديون منذ عام  2005، بما في ذلك أول طرح من نوعه لسندات التوريق في السوق المصري. كما أن ثروة هي أول مصدر للصكوك المرخصة في السوق المصرية.",
        },
      ],
      link: "لزيارة الموقع",
    },
  },

  featureSection: [
    {
      id: "1",
      delay: "0",
      img: "/shopping.png",
      title: "تسوق",
      text: " ابحث عن منتجات وعلامات تجارية جديدة. احصل على أفضل صفقة واكسب مكافآت - فقط للتسوق.",
    },
    {
      id: "2",
      delay: "200",
      img: "/shopping.png",
      title: "تقسيط",
      text: "اختر طريقة الدفع في المتاجر الشريكة ، عبر تطبيقنا أو بطاقة  أو امتداد المتصفح.",
    },
    {
      id: "3",
      delay: "400",
      img: "/shopping.png",
      title: "تدفع",
      text: "قم بتقسيم مدفوعاتك وإدارة المشتريات ، من خلال نظرة عامة على الإنفاق الذكي والمزيد.",
    },
  ],
  stepsFeature: [
    {
      id: "1",
      img: "/images/steps-image.png",
      title: "موافقة فورية",
      subTitle: "ميزة",
      text: "  وصف كتيير جدا جدا جدا بس مكسل اسيرش علي لوريم ابسيوم بالعربي, وصف  كتيير جدا جدا جدا بس مكسل اسيرش علي لوريم ابسيوم بالعربي, وصفكتيير جدا جدا جدا بس مكسل اسيرش علي لوريم ابسيوم بالعربي كتيير جدا جدا جدا بس مكسل اسيرش علي لوريم ابسيوم بالعربي",
    },
    {
      id: "2",
      img: "/images/steps-image.png",
      title: "زيادة الحد الإتماني",
      subTitle: "ميزة",
      text: "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام  فتجعلها تبدو (أي الأحرف) وكأنها نص مقروء. العديد من برامح النشر المكتبي وبرامح تحرير صفحات الويب تستخدم لوريم إيبسوم بشكل إفتراضي كنموذج عن النص، وإذا قمت بإدخال في أي محرك بحث ستظهر العديد من المواقع الحديثة العهد في نتائج البحث. على مدى السنين ظهرت نسخ جديدة ومختلفة من نص لوريم إيبسوم، أحياناً عن طريق الصدفة، وأحياناً عن عمد كإدخال بعض العبارات الفكاهية إليها.",
    },
    {
      id: "3",
      img: "/images/steps-image.png",
      title: "ادفع فواتيرك",
      subTitle: "ميزة",
      text: "  وصف كتيير جدا جدا جدا بس مكسل اسيرش علي لوريم ابسيوم بالعربي, وصف  كتيير جدا جدا جدا بس مكسل اسيرش علي لوريم ابسيوم بالعربي, وصفكتيير جدا جدا جدا بس مكسل اسيرش علي لوريم ابسيوم بالعربي كتيير جدا جدا جدا بس مكسل اسيرش علي لوريم ابسيوم بالعربي",
    },
  ],
  map: {
    title: "شبكة فروعنا",
    subTitle: "شوف اقرب فرع ليك من خلال الخريطة",
    placeholderGovernate: "المحافظة",
    placeholderBranch: "الفروع بداخل المحافظات",
    noOption: "لا توجد محافظات",
  },
};
