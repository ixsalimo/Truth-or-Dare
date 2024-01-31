const $ = document , _id = id => $.getElementById(id) , _qs = id => $.querySelector(id) , _qsa = id => $.querySelectorAll(id) , Bubble = new Audio('/Truth.Dare.github.io/Audio/bubble.wav') ,
Warn = Swal.mixin({
    showConfirmButton: false,
    timer: 1500,
    customClass: {
        container: "warn__container",
        popup: "warn__popup",
        title: "warn__title",
        icon: "warn__icon"
    }
});
//TODO Variables
var dareQuestions = [
    'یک قطعه یخ داخل شلوارت بنداز تا آب شه' , 'لُپ شرکت کننده سمت راستت رو بوس کن' ,
    'پنج دقیقه پای شرکت کننده سمت چپت رو ماساژ بده' , 'یک دقیقه بدون آهنگ برقص' , 'یکی از شرکت کننده ها قلقلکت بده و اگه بخندی باید تنبیه بشی' ,
    "چشمات رو ببند و  بزار شرکت کنندگان هر چی میخوان بزارن دهنت" , "دندون های شرکت کننده رو به روت رو مسواک بزن" , `دو تیکه از لباسات رو با شرکت کننده سمت چپت عوض کن\n(جوراب ، تیشرت ، شلوار و ....)` ,
    "شانه های شرکت کننده سمت راستت رو به مدت 3 دقیقه ماساژ بده" , "صدای یک حیوان رو در بیار" , "معجونی که بقیه شرکت کنندگان درست میکنن رو نوش جان کن" ,
    "یک تکه سیر خام بخور" , "یک گاز کامل پیاز خام بخور" , "یک تکه از لباس هایی که تنت هست رو در بیار" ,
    "آخرین پیامی که برای اِکسِت فرستادی رو نشون بده" , "یک فلفل تند بخور" , "مثل گرگ زوزه بکش" ,
    "مثل یه نوزاد رو زمین بخز" , "یک تخم مرغ رو بدون اینکه ترک بخوره برای 3 دقیقه داخل دهنت نگه دار" , "بزار شرکت کننده سمت راستیت روی صورتت هر چی میخواد بکشه" ,
    "بلند داد بزن من عاشق رابطه جنسیم" , "برای یک دقیقه گوشی خودت رو بده به شرکت کننده ها سرک بکشن" , "خجالت آور ترین عکس داخل گوشیت رو به شرکت کنندگان نشون بده" ,
    "پنج نفر آخری که بهشون داخل واتساپ پیام دادی و  پیامای آخرتون رو نشون بده" , "به بقیه اعضای گروه اجازه بده که با اکانت اینستاگرام تو به یکی پیام بدن" , "سه تکه یخ داخل دهنت بزار تا آب بشن" ,
    "برای 1 دقیقه نفست رو حبس کن" , "دَه مایع مختلف داخل یک لیوان بریز و بخور" , "به انتخاب خودت با یکی از افراد برقص" ,
    "یک قاشق نصفه سس خردل بخور" , "چشمات رو تا نوبت بعدیت ببند" , "دو چیز صادقانه راجب تمام افراد گروه بگو" ,
    "سعی کن تمام مشتت رو داخل دهنت قرار بدی" , "بدون استفاده از دست موز بخور" , "سعی کن آرنج خودت رو لیس بزنی" ,
    "قدیمی ترین سلفی خودت رو داخل اینستاگرام تا پایان بازی استوری کن" , "2 دقیقه بدون توقف حرف بزن و ازت فیلم بگیرن" , "یه کوسن یا بالشت بزار توی لباست و ادای حامله ها رو در بیار" ,
    "انگشت پاتو بکن تو بینیت" , "بلند شو داد بزن خوشگلا باید برقصن" , "ادای یه تبلیغ تلویزیونی که شرکت کنندگان میگن رو در بیار" ,
    "20 ثانیه کلاغ پر بزن" , "همه محتویات داخل کیفت رو خالی کن" , "دور همه شرکت کننده ها پنج بار بچرخ" ,
    "با یک وسیله ای که شرکت کننده ها میگن 2 دقیقه صحبت کن" , "بیست دور بچرخ" , "همه پیام های واتساپ گوشیت رو پاک کن" ,
    "با یکی از آهنگای گوشیت برقص" , "با خودت اتل متل بازی کن" , "یه لنگه پا دور اتاق بدو" ,
    "یه لیوان آب یخ روت خالی کنن" , "به صورت رندوم به یکی از مخاطبای گوشیت زنگ بزن و بگو شام مهمونش میکنی" , "یه کیوی با پوست بخور" ,
    "برای 30 ثانیه مثل کرم بخز" , "گوشیت رو بده به جلوییت و تا پیام آخر واتساپت رو بخونه" , "توی دو دقیقه 10 تا شنا برو" ,
    "چهار لیوان آب بخور" , "دو دقیقه پروانه برو" , "تا 3 نوبت عینک آفتابی بزن" ,
    "یک دقیقه بپر" , "تخم مرغ خام بخور" , "از زبونت عکس بگیر بزار پروفایلت" ,
    "با مسواکت دستشویی رو تمیز کن" , "یه سیب یا انار رو کامل بخور" , "یه قاشق کره بخور" ,
    "توی سی ثانیه 50 تا بشین پاشو برو" , "به مدت 2 دقیقه دماغت رو بگیر و با دهنت نفس بکش" , "تو دو دقیقه 50 تا دراز نشست برو" ,
    "به نفر رو به روییت دور اتاق سواری بده" , "دماغت رو برای 3 نوبت بزار روی زمین و از زمین جداش نکن" , "یک آهنگ رو به انتخاب بقیه بخون" ,
    "با دماغت روی دیوار یه جمله بنویس" , " با دهن بسته یه آهنگ بخون اگه تشخیص ندادن باید ادامه بدی" , `سه بار بگو\n چیپس ، چسب ، سس` ,
    "یک قاشق چایی خوری پودر فلفل سیاه بخور"
] , truthQuestions = [
    "بدترین کاری که دور از چشم خانواده کردی چی بوده ؟" , "تا حالا برای گفتن قیمت چیزی به اعضای گروه دروغ گفتی ؟ چی؟" , "تا حالا وارد حریم خصوصی یکی از افراد بازی شدی ؟ کی؟" ,
    "از 1 تا 10 به هرکدوم از اعضای بازی چند میدی ؟" , "آخرین کار بدی که در حق یکی از افراد بازی کردی و بهش نگفتی " , "خنده دار ترین کاری که تا حالا توی زندگیت کردی" ,
    "تا حالا جلوی دوستات ضایع شدی ؟ تعریف کن" , "ضایع ترین کاری که تا حالا توی مکان عمومی کردی چی بوده ؟" , "اگر قرار باشه با یکی از افراد گروه ازدواج کنی اون فرد کیه ؟" ,
    "بزرگترین دروغ زندگیت چی بوده ؟" , "دوست داشتی چه نیروی خارق العاده ای داشته باشی ؟" , "عجیب ترین خوابی که دیدی چی بوده ؟" ,
    "خنده دار ترین خوابی که دیدی چی بوده ؟" , "بدترین هدیه ای که گرفتی چی بوده ؟" , "بی معنی ترین کاری که تا حالا انجام دادی چی بوده ؟" ,
    "برای انجام کاری هنوز به والدینت وابسته ای ؟" , "اگه قرار بود یک حیوان باشی چه حیوانی میشدی ؟" , `بزرگترین راز زندگیت رو بگو\n(همینجا چال میشه)` ,
    "کی در مورد یکی از افراد بازی غیبت کردی ؟ چی گفتی ؟" , "تا حالا دزدی کردی ؟ چی دزدیدی و چن سالت بوده ؟" , "از چه ویژگی افراد بازی بدت میاد ؟" ,
    "سوالی که بیشترین ترس رو برای جوابش دادنش داری چیه؟" , "سه تا از بدترین اخلاقات رو بگو" , "سه تا از بدترین عادت هاتو بگو" ,
    "اگه الان تنها بودی چیکار می کردی ؟" , "بزرگترین گناه زندگیت چیه ؟" , "زشت ترین کاری که توی خیابون کردی چی بوده ؟" ,
    "از تاریکی میترسی ؟" , "از سوسک میترسی ؟" , "عادت داری شب ها با عروسک یا یه اسباب بازی بخوابی ؟" ,
    "تا حالا برای برنده شدن تو مسابقه ای تقلب کردی ؟" , "بدترین صدا رو تو جمع حاضر بازی کی داره ؟" , "تا حالا از لوازم شخضی جنس مخالفت استفاده کردی ؟" ,
    "تا حالا شده امانت کسی رو بهش ندی ؟ اسمش رو بگو ؟" , "تا حالا هدیه کسی رو برای یکی از افراد بازی بردی ؟" , "تا حالا آلبوم شخصی کسی رو برداشتی ببینی ؟" ,
    "باحال ترین کاری که توی مدرسه یا دانشگاه کردی چی بوده ؟" , "از چه چیز جنس مخالفت بدت میاد ؟" , "تا حالا بی دلیل عاشق شدی ؟" ,
    "دوست داری کی از بازی حذف شه ؟" , "بیشترین پولی که گم کردی چقدر بوده ؟" , "دوست داری همسر آیندت چی کاره باشه ؟" ,
    "اگه خوراکی بودی ، چی بودی ؟" , "بد اخلاق ترین فرد جمع کیه ؟" , "سه تا از بدترین دروغ هایی که به افراد حاضر در بازی گفتی چی بوده ؟" ,
    "بیشترین ترست از چیه ؟" , "از چه ویژگی اخلاقی نفر رو به روت بدت میاد ؟" , "تا حالا از کسی یواشکی عکس گرفتی ؟" ,
    "طولانی ترین زمانی که حموم نرفتی کی بوده ؟" , "فکر کن افراد بازی دارن میمیرن و تو فقط میتونی یکی رو نجات بدی ، کی رو نجات میدی ؟" , "تا حالا به معلمت دروغ گفتی ؟ چی گفتی ؟" ,
    "تا حالا به معلمت دروغ گفتی ؟ چی گفتی ؟" , "بدترین نمره ای که داشتی چند و از چه درسی بوده ؟" , "چه چیزی رو بیشتر از همه در مورد افراد داخل اتاق دوست داری ؟" ,
    "کی و کجا بیشتر از همیشه ترسیدی ؟" , "ترجیح میدی برای یک روز غلام کدوم یکی از افراد گروه باشی ؟" , "تو حموم آهنگ میخونی ؟" ,
    "گرونترین چیزی که برای خودت خریدی چی بوده ؟" , "اگه یک میلیارد بهت بدن چیکار میکنی ؟" , "بین یک میلیارد یا همسر خوب کدوم رو انتخاب می کنی ؟" ,
    "چه کسی توی افراد از نظر تو اصلا نرمال نیست ؟" , "تو این جمع از کی بیشتر از همه بدت میاد ؟" , "بدترین خاطره دوران کودکیت چیه ؟" ,
    "دوست داری تو زندگی کدوم یکی از افراد بازی فضولی کنی ؟" , "افکار احمقانت در مورد افراد بازی چی بوده ؟" , "مسخره ترین حرفی که تا حالا به جنس مخالف زدی چی بوده ؟" ,
    "چند بار شکست عشقی خوردی ؟" , "تا حالا شده پدر یا مادرت متنفر بشی ؟" , "تا حالا رل داشتی ؟" ,
    "به کی تو زندگیت حسادت کردی و برای چی ؟" , "آخرین باری که تو کار بقیه فضولی کردی کِی بوده ؟" , "آخرین چیزی رو که لو دادی کی بود و چی رو لو دادی ؟" ,
    "تا حالا شده کسی بهت بگه بو میدی ؟" , "تا حالا چاپلوسی کردی ؟" , "آخرین باری که خیلی عصبانی شدی کی بوده ؟ بخاطر چی ؟" ,
    "در ازای خوبی به ینفر انتظار جبران داری ؟" , "به چه چیزی بیشتر تظاهر میکنی ؟" , "اگه عشقت آدم بکشه لوش میدی ؟" ,
    "بیشترین نصیحتی که به بقیه میکنی چیه ؟" , "چه چیزی تو زندگیت باید تغییر کنه ؟" , "بزرگترین دروغی که تا حالا به خانوادت گفتی چی بوده ؟" ,
    "از چه چیزی میترسی که دیگران راجب تو بفهمن ؟" , "تا حالا شده سهم خوراکی خواهر/برادرت رو بخوری ؟" , "تا حالا به کسی که خیلی دوسش داری تو دلت فحش دادی ؟ چی گفتی ؟" ,
    "بدترین انتقامی که گرفتی چی بوده  ؟" , "تا حالا به قتل فکر کردی ؟" , "تا حالا کسی باعث گریه ت شده ؟ کی بوده و چرا ؟" ,
    "چه کاریو انجام دادی که میدونی آدما از همه بیشتر بخاطرش قضاوتت میکنن ؟" , "دوس داری پدر مادرت چه چیزیو هیچوقت نفهمن ؟" , "چرا با رل قبلیت بهم زدی ؟" ,
    "چه کسی رو خیلی ظالمانه مسخره کردی یا دست انداختی و چطور ؟" , "دوس داری کدوم یکی از عکسا یا فیلمایی که توشون هستی نابود شه ؟" , "بنظرت بهترین ویژگی جنس مخالفت چیه ؟" ,
    "حال بهم زن ترین عادتی که داری چیه ؟" , "چیزی که تا حالا به هیچکس نگفتی چیه ؟" , "کسایی که تو عاشقشون بودی و اونا دوست نداشتن کیا بودن ؟" ,
    "نوشابه چه رنگی دوست داری ؟" , "رنگ مورد علاقت چیه ؟" , "ماشین مورد علاقت چیه ؟" ,
    "میوه مورد علاقت چیه ؟" , "غذای فست فود مورد علاقت چیه ؟" , "غذای ایرانی مورد علاقت چیه ؟" ,
    "اگه میتونستی با یه آدم معروف روزت رو بگذرونی کی رو انتخاب میکردی ؟ چرا ؟" , "اگه میتونستی توی یه فیلم بازی کنی دوست داشتی چه فیلمی بود و چه نقشی ؟" , "به ترتیب رتبه ، سه تا بهترین سریال هایی رو که دیدی بگو" ,
    "اگه میتونستی توی ظاهرت یه ویژگی رو تغییر بدی اون چی بود ؟" , "سه تا فیلم یا سریالی که اشکتو درآورد بگو" , "از 1 تا 10 چقدر تتلو رو دوست داری ؟" ,
    "دوست داری اسم رلت چی باشه ؟" , "احمقانه ترین کاری که تا حالا انجام دادی چی بوده ؟" , "عجیب ترین خوابی که تا حالا دیدی چی بوده ؟" ,
    "تا حالا شده یه راز رو به کسی که مورد اعتمادت بوده بگی و اون به بقیه بگه ؟ اون فرد کی بوده ؟" , "بعد از دوران کودکی شلوارت رو خراب کردی ؟" , "عجیب ترین جایی که دستشویی کردی کجا بوده ؟" ,
    "مسخره ترین چیزی که بهش احساس عاطفی داری ؟" , "چه کاریه که مردم هیچوقت فکر نمیکنن تو انجامش بدی ولی انجامش دادی ؟" , "بدترین رفتاری که تا حالا با یه نفر داشتی ولی اون مستحقش نبوده چی بوده ؟" ,
    "تا حالا دروغی گفتی که به کسی صدمه بزنه ؟ چی گفتی ؟" , "تا حالا به سایتای 18+ سر زدی ؟" , "از تیم های فوتبال خارجی طرفدار کدومی ؟" ,
    "طرفدار پرسپولیسی یا استقلال ؟" , "شرم آور ترین کاری که جلوی خانوادت انجام دادی چی بوده ؟" , "تا حالا جلوی جنس مخالفت ضایع شدی ؟ داستان چی بوده ؟" ,
    "از نظر تو بدترین ویژگی جنس مخالفت چیه ؟" , "از نظر تو بدترین ویژگی جنس خودتون چیه ؟" , "از نظر تو بهترین ویژگی جنس خودتون چیه ؟" ,
    "بچه گانه ترین کاری که هنوز انجام میدی چیه ؟ چرا ؟" , "تا حالا شده بخاطر کاری که تو کردی شخص دیگه ای بجای تو سرزنش یا تنبیه بشه ؟" , "خواننده محبوبت رو بگو ؟" ,
    "اگه میتونستی برای یک روز نامرئی بشی چیکار میکردی ؟" , "بدترین لقبی که تا حالا گرفتی چی بوده ؟" , "اسم دخترونه ای رو که دوست داری بگو" ,
    "اسم پسرونه ای رو که دوست داری بگو" , "بدترین تنبه ای که شدی کی بوده و چجوری ؟" , "چه غذایی رو بیشتر از همه دوست داری ؟" ,
    "شیرین ترین خاطره زندگیت چیه ؟" , "بیشتر مردم چه باور غلطی راجب شخصیتت دارن ؟" , "بزرگترین اتفاقی که ازش قسر در رفتی چی بوده ؟" ,
    "بیشترین شیطونی ای که توی عموم انجام دادی چی بوده ؟" , "بزرگترین دروغی که تا حالا شنیدی چی بوده ؟" , "بزرگترین دروغی که تا حالا گفتی چی بوده ؟" ,
    "آخرین باری که بعد از دوران کودکی تو جات جیش کردی کی بوده ؟" , "تا حالا خیانت کردی ؟" , "تا حالا بهت خیانت شده ؟" ,
    "از چه چیزی بیشتر از همه پشیمونی ؟" , "جذاب ترین آدم این جمع کیه ؟" , "خوشگلترین شخص توی فامیل و اقوامت کیه ؟" ,
    "عمیق ترین و تاریک ترین رازت چیه ؟" , "بهترین دوستت کیه ؟" , "عشقت کیه ؟" ,
    "بزرگترین حسرت زندگیت چیه ؟" , "بزرگترین آرزوت چیه ؟" , "دوست داری جای شخص دیگه ای باشی ؟ کی ؟" ,
    "تا حالا عاشق شدی ؟ اسمش رو بگو ؟" , "آخرین سوتی ای که دادی چی بود ؟"
] , punishQuestions = [
    "یه آهنگ رو با دهن بسته بخون و تا زمانی که بقیه تشخیص ندادن ادامه بده" , "سه قاشق کامل آبلیمو بخور" , "بقیه افراد برات یه معجون درست کنن بخور" ,
    "نصف قاشق روغن خالی بخور" , "یه تیکه از برگ یه گل رو بخور" , "یه خیار رو کامل بخور" ,
    "در حال خوردن موز با پوست از خودت عکس بگیر بزار پروفایل جاهایی که افراد بازی میگن" , "دو دقیقه دهنت رو پر از آب کن" , "تا زمانی که همه افراد بازی بخندن جوک بگو" ,
    "تا حالا نود فرستادی یا گرفتی ؟" , "تا حالا لخت کسی رو دیدی ؟" , "تا حالا کسی لختت رو دیده ؟\n(به جز افراد خانواده)" ,
    "زنگ بزن به کراشت بزار رو حالت اسپیکر و جمله هایی که افراد بازی میگن رو بگو" , "یه حرف دارک حق بگو" , "یه آهنگ رو با احساس واقعی بخون" ,
    "تخم مرغ خام بخور" , "برای 5 دقیقه هر کاری اعضای گروه میگن بکن" , "یه تیکه کاغذ بخور" ,
    "اسم سلبریتی کراشت رو بگو" , "چهار بار پشت سر هم پشتک بزن" , "آخرین پیام کوتاهی که فرستادی رو بلند بخون" ,
    "انگشتت رو بزار روی زمین و 20 دور بچرخ" , "سه تا تیکه یخ بندازن تو شلوارت" , "یه تخم مرغ تو سرت بشکنن" ,
    "یک قاشق چایی خوری تندترین ادویه آشپزخونه رو بخور" , "سی ثانیه تا جایی که میتونی بالا و پایین بپر" , "نفر روبروتو ببوس" ,
    "نفر رو به روت ازت هر سوالی که میخواد بپرسه و تو جواب بده" , "برو دستشویی با شلنگ آب بخور" , "یه تیکه یخ بندازن توی پیرهنت" ,
    "زبونت رو روی صابون بکش" , "یه سیب زمینی خام بخور" , "شکلات بزار روی ترشی بخور" ,
    "یک دقیقه رپ بخون" , "صدای 'هویییییییییا' در بیار" , "تا جایی که میتونی داخل دهنت انگور پر کن" ,
    "یک شات آب ترشی بخور" , "با زبونت اسمت رو روی زمین بنویس" , "به کراشت زنگ بزن" ,
    "به اکست زنگ بزن" , "بقیه برای 1 دقیقه قلقلکت بدن" , "یه پیاز و سیر رو با هم بخور" ,
    "همه ظرفارو بشور" , "یه لیوان آب سرد روت بریزن" , "همه محتویات داخل کیفت رو خالی کن"
] , players = JSON.parse(localStorage.getItem('Players')) , index = 0 , Timer;
//* Security
!function Security () {
    if (localStorage.getItem('Players') == null) {
        _qsa('#background , #menu__wrapper , header , main , footer').forEach(elem => elem.remove());
        _qs('title').textContent = 'شروع بازی';
        _qs('link[rel="icon"]').href = '/Truth.Dare.github.io/Pic/Tab/check.png';
        _qs('meta[name="theme-color"]').content = '#000';
        _qs('.error__wrapper h3').addEventListener('click' , () => {
            window.open('/Truth.Dare.github.io/' , '_top');
        });
        window.addEventListener('keydown' , event => (event.key == 'Enter' ? _qs('.error__wrapper h3').click() : (event.key == 'Escape' ? window.close() : null)));
    } else {
        _qs('.error__wrapper').remove();
        localStorage.clear();
        
        //TODO Events
        _qsa('#timer-input__wrapper input').forEach(input => {
            input.addEventListener('beforeinput' , event => {
                let legal = "0123456789" , char = event.data;
                (char != null ? (!legal.includes(char) ? event.preventDefault() : null) : null);
            });
            input.addEventListener('input' , event => {
                (event.target.value > 59 || event.target.value.length > 2 ? event.target.value = 59 : null);
            });
            input.addEventListener('focus' , (event) => {
                let list = _id('timer-list') , input = event.target;
                (list.classList.contains('deactive') ? list.classList.replace('deactive' , 'active') : list.classList.add('active'));
                playerTurnPosition();
                createTimerListOptions();
                [...list.children].forEach(elem => {
                    elem.addEventListener('click' , event => {
                        input.value = JSON.parse(event.target.value);
                        list.classList.replace('active' , 'deactive');
                    });
                });
            });
            input.addEventListener('blur' , () => (_id('timer-list').classList.contains('active') ? _id('timer-list').classList.replace('active' , 'deactive') : null));
        });
        _id('close-menu').addEventListener('click' , () => _id('menu__wrapper').removeAttribute('style'));
        _id('menu-btn').addEventListener('click' , () => _id('menu__wrapper').style.display = 'flex');
        _id('menu__wrapper').addEventListener('click' , event => (event.target == _id('menu__wrapper') ? _id('close-menu').click() : null));
        _id('start-btn').addEventListener('click' , startGame);
        _id('punish-btn').addEventListener('click' , punishPlayer);
        _id('start-timer-btn').addEventListener('click' , () => setTimer({start: true} , _id('second').value , _id('minute').value , _id('hour').value));
        _id('pause-timer-btn').addEventListener('click' , () => setTimer({pause: true} , _id('second').value , _id('minute').value , _id('hour').value));
        _id('stop-timer-btn').addEventListener('click' , () => setTimer({stop: true}));
        _id('second').addEventListener('keydown' , event => (event.key == 'Enter' ? _id('start-timer-btn').click() : null));
        window.addEventListener('load' , () => {
            setTimeout(() => {
                _qsa('#dare-btn__wrapper , #truth-btn__wrapper').forEach(elem => {
                    elem.removeAttribute('data-aos');
                    elem.removeAttribute('data-aos-delay');
                    elem.removeAttribute('data-aos-anchor');
                    elem.removeAttribute('data-aos-duration');
                });
                _id('dare-btn__wrapper').addEventListener('click' , () => checkActive('Dare'));
                _id('truth-btn__wrapper').addEventListener('click' , () => checkActive('Truth'));
            } , 1000);
        });
        !function setQuestionsCount () {
            _id('dare-questions-count').textContent = dareQuestions.length;
            _id('truth-questions-count').textContent = truthQuestions.length;
            _id('punish-questions-count').textContent = punishQuestions.length;
            _id('all-questions-count').textContent = dareQuestions.length + truthQuestions.length + punishQuestions.length;
        }();
    }
}();
//! Functions
function checkActive (elem) {
    let wrapper = (elem == 'Dare' ? _id('dare-btn__wrapper') : _id('truth-btn__wrapper')) , btn = (elem == 'Dare' ? _qs('#dare-btn__wrapper button') : _qs('#truth-btn__wrapper button')) , icon = (elem == 'Dare' ? _qs('#dare-btn__wrapper img') : _qs('#truth-btn__wrapper img'));
    if (!JSON.parse(btn.getAttribute('data-status'))) {
        wrapper.classList.add('active');
        btn.setAttribute('data-status' , JSON.stringify(true));
        icon.src = '/Truth.Dare.github.io/Pic/Icon/SVG/circle-check-regular.svg';
        icon.alt = '✔️';
    } else {
        wrapper.removeAttribute('class');
        btn.setAttribute('data-status' , JSON.stringify(false));
        icon.src = '/Truth.Dare.github.io/Pic/Icon/SVG/circle-xmark-regular.svg';
        icon.alt = '❌';
    };
};
function punishWrapper (bool) {
    (bool ? _id('punish-btn__wrapper').removeAttribute('class') : _id('punish-btn__wrapper').classList.add('hidden'));
};
function choiseWarn () {
    Warn.fire({
        title: "حداقل یکی از گزینه ها رو انتخاب کن",
        icon: "warning"
    });
};
function timerWrapperStatus (bool = true) {
    let wrapper = _id('timer__wrapper') , list = _id('timer-list');
    (list.hasAttribute('class') ? list.removeAttribute('class') : null);
    clearTimerInputs();
    if (bool) {
        wrapper.setAttribute('data-aos-anchor' , 'body');
        wrapper.setAttribute('data-aos-duration' , 1000);
        wrapper.setAttribute('data-aos' , 'fade-up');
        wrapper.classList.add('active');
    } else {
        wrapper.removeAttribute('data-aos');
        wrapper.removeAttribute('data-aos-anchor');
        wrapper.removeAttribute('data-aos-duration');
        wrapper.removeAttribute('class');
    };
};
function createQuestion (question , isPunish = false) {
    let wrapper = _id('question__wrapper') , QuestionElement = $.createElement('p');
    (question.includes('دقیقه') || question.includes('ثانیه') ? timerWrapperStatus() : timerWrapperStatus(false));
    wrapper.innerHTML = null;
    QuestionElement.classList.add((isPunish ? 'punish-question' : 'question'));
    QuestionElement.innerText = question;
    QuestionElement.setAttribute('data-aos' , (isPunish ? 'zoom-in-down' : 'fade-up'));
    QuestionElement.setAttribute('data-aos-duration' , 1000);
    wrapper.append(QuestionElement);
    (isPunish ? (_qs('#player-turn__wrapper p').classList.add('punishment') , playerTurnPosition(true)) : null);
    punishWrapper((isPunish ? false : true));
};
function playerTurnPosition (bool = false) {
    let elem = _qs('#player-turn__wrapper p');
    (bool ? elem.removeAttribute('style') : elem.style.right = `calc(-${getComputedStyle(elem).width} + -${getComputedStyle(elem).paddingRight})`);
};
function setWhoseTurns (isPunish = false) {
    index = (index == players.length ? (isPunish ? index : index = 0) : index);
    let wrapper = _id('player-turn__wrapper') , elem = $.createElement('p') , player = players[(isPunish ? index - 1 : index++)];
    wrapper.innerHTML = '';
    elem.textContent = (isPunish ? `مجازات ${player}` : `نوبت ${player} است`);
    elem.setAttribute('data-aos' , 'fade-left');
    elem.setAttribute('data-aos-duration' , 1000);
    elem.setAttribute('data-aos-anchor' , 'body');
    wrapper.append(elem);
    playerTurnPosition(true);
    elem.addEventListener('click' , event => (Number(parseFloat(getComputedStyle(event.target).right)) != 0 ? playerTurnPosition(true) : playerTurnPosition()));
};
function waitTimerError () {
    Warn.fire({
        title: "صبر کنید تایم تمام شود",
        icon: "warning"
    });
};
function checkTimer (btn = _id('start-timer-btn')) {
    return bool = (!btn.classList.contains('hidden') ? true : false);
};
function startGame () {
    if (checkTimer()) {
        let isDareActive = JSON.parse(_qs('#dare-btn__wrapper button').getAttribute('data-status')) , isTruthActive = JSON.parse(_qs('#truth-btn__wrapper button').getAttribute('data-status')) , selectedQuestions = [] , question;
        (isDareActive && isTruthActive ? selectedQuestions = selectedQuestions.concat(dareQuestions , truthQuestions) : (isDareActive && !isTruthActive ? selectedQuestions = selectedQuestions.concat(dareQuestions) : (!isDareActive && isTruthActive ? selectedQuestions = selectedQuestions.concat(truthQuestions) : choiseWarn())));
        (selectedQuestions.length != 0 ? (question = selectedQuestions[Math.trunc(Math.random() * selectedQuestions.length)] , setWhoseTurns() , createQuestion(question)) : null);
    } else {
        waitTimerError();
    };
};
function punishPlayer () {
    if (checkTimer()) {
        if (_id('question__wrapper').hasChildNodes()) {
            let question = punishQuestions[Math.trunc(Math.random() * punishQuestions.length)];
            setWhoseTurns(true);
            createQuestion(question , true);
        }
    } else {
        waitTimerError();
    };
};
function changeTimerStyle (bool = true) {
    _qsa('#timer-input__wrapper input').forEach(input => (bool ? input.setAttribute('disabled' , 'true') : input.removeAttribute('disabled')));
    _qsa('#timer-btn__wrapper button').forEach(btn => btn.classList.toggle('hidden'));
};
function clearTimerInputs () {
    _qsa('#timer-input__wrapper input').forEach(input => input.value = '');
};
function endTimer () {
    Bubble.play();
    changeTimerStyle(false);
    Swal.fire({
        title: "وقت تمام شد",
        icon: "success",
        showConfirmButton: false,
        timer: 2000,
        customClass: {
            container: "success__container",
            popup: "success__popup",
            title: "success__title",
            icon: "success__icon"
        }
    });
};
function timerError () {
    Warn.fire({
        title: "برای شروع تایمر باید بالای صفر ثانیه باشد",
        icon: "error"
    });
};
function setTimer (isActive = {start: true , pause: false , stop: false} , second = 0 , minute = 0 , hour = 0) {
    if (isActive.stop || second > 0 || minute > 0 || hour > 0) {
        if (!isActive.stop && !isActive.pause) {
            changeTimerStyle();
            var s = Math.floor(Number(second) < 0 ? Number(-second) : Number(second)) , m = Math.floor(Number(minute) < 0 ? Number(-minute) : Number(minute)) , h = Math.floor(Number(hour) < 0 ? Number(-hour) : Number(hour));
            Timer = setInterval(() => {
                _id('hour').value = (h <= 9 ? `0${h}` : h);_id('minute').value = (m <= 9 ? `0${m}` : m);_id('second').value = (s <= 9 ? `0${s}` : s);
                (s == 0 ? (m > 0 ? (m-- , s = 60) : (h > 0 ? (h-- , m = 59 , s = 60) : (clearInterval(Timer) , clearTimerInputs() , endTimer()))) : null);
                s--;
            } , 1000);
        }
        (isActive.stop ? (clearInterval(Timer) , changeTimerStyle(false) , clearTimerInputs()) : null);
        (isActive.pause ? (clearInterval(Timer) , changeTimerStyle(false)) : null);
    } else {
        timerError();
    }
};
function createTimerListOptions () {
    let list = _id('timer-list') , option = $.createElement('option');
    list.innerHTML = '';
    option.value = JSON.stringify(null);
    option.textContent = 0;
    list.append(option);
    for (let number = 1; number <= 59; number++) {
        option = $.createElement('option');
        option.value = number;
        option.textContent = number;
        list.append(option);
    }
    list.scroll(0 , 0);
};
//? Events
window.addEventListener('load' , () => {_id('loader').classList.add('hide');setTimeout(() => _id('loader').remove() , 1000)});
window.addEventListener('keydown' , event => (event.key == 'F12' ? event.preventDefault() : (event.key == 'ContextMenu' ? event.preventDefault() : null)));
window.addEventListener('contextmenu' , event => event.preventDefault());