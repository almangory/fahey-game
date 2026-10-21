// ==========================================================================
// قاموس اللهجات الثلاث المفصول بالكامل (سودانية، سعودية، مصرية)
// قاعدة صارمة: كل لهجة تستخدم مصطلحها الخاص فقط دون أي خلط!
// - سوداني: «فاهي» (والموضوع) - بدون أي ذكر لكلمة "السالفة"
// - سعودي: «برا السالفة» (والسالفة) - بدون أي ذكر لكلمة "فاهي"
// - مصري: «في الطراوة» (والحوار) - بدون أي ذكر لكلمة "فاهي" أو "السالفة"
// ==========================================================================

const GAME_DIALECTS = {
  sudanese: {
    id: "sudanese",
    name: "اللهجة السودانية",
    shortName: "سودانية",
    flag: "🇸🇩",
    impostorTerm: "فاهي",
    gameTitle: "فـاهي",
    dialectCardDesc: "نلعب بالمصطلحات والأكلات والمعالم السودانية، والزول الما عارف الموضوع بنسميهو «فاهي»!",
    tagline: "أفرز الفاهي القاعد بيناتنا وما جايب خبر! 🕵️‍♂️",
    appHeader: "لعبة فاهي",
    defaultPlayers: ["أحمد", "عثمان", "سارة", "فاطمة"],

    // 1. شاشة اختيار اللهجة
    dialectScreenHeader: "اختر لهجة اللعب",
    dialectNextBtn: "التالي: اختار قسم اللعب ➔",

    // 2. شاشة اختيار القسم بالأيقونات
    categoriesScreenHeader: "اختار قسم الموضوع",
    categoriesScreenSub: "اضغط على أي قسم أو أكتر عشان نلعب فيهو:",
    allCategoriesLabel: "كوكتيل (كل الأقسام)",
    allCategoriesSub: "🎲 عشوائي من كل المواضيع",
    categoriesNextBtn: "التالي: أضف أسماء الشلة ➔",

    // 3. شاشة أسماء اللاعبين والإعدادات
    playersScreenHeader: "أسماء شلة اللعب",
    playersBoxTitle: "👥 قائمة اللعيبة (3 إلى 14)",
    playersBoxSub: "التلفون بيلف عليكم واحد واحد",
    addPlayerPlaceholder: "أكتب اسم الزول هنا...",
    hintToggleLabel: "💡 تلميح للفاهي (يعرف اسم القسم بس)",
    timerSelectLabel: "⏱️ زمن السؤال لكل لاعب",
    startBtnText: "🔥 يلا نبدأ القيم!",

    // 4. شاشة الكشف السري
    passHeader: "أكشف كرتك بالسر!",
    passTurnBadge: "أدّي التلفون لي:",
    holdInstruction: "تأكد مافي زول بعاين معاك في الشاشة!<br><strong>اضغط هنا عشان تشوف وضعك شنو</strong>",
    citizenTitle: "أنت فاهم الموضوع! 😎",
    citizenDescPrefix: "الكلمة السرية هي:",
    citizenDescSuffix: "اسأل أسئلة حريفة تكشف الزول الفاهي بدون ما تفضح الكلمة!",
    impostorTitle: "أنت الفاهي! 🙈",
    impostorDesc: "أنت فاهي وما جايب خبر الموضوع شنو! ركّز في كلام الجماعة عشان تلقط الكلمة، أو زوغ منهم وخليهم يشكوا في زول تاني!",
    hintPrefix: "💡 تلميح ليك: الموضوع عن",
    nextPlayerBtn: "تم، حوّل للزول البعدو ➔",

    // 5. الأسئلة والمؤقت لكل لاعب
    questionsHeader: "فقرة الأسئلة والمكابسة!",
    questionTurnCounter: (current, total) => `سؤال اللاعب ${current} من ${total}`,
    whoAsksWho: (p1, p2) => `🎤 دور <strong>${p1}</strong> يسأل <strong>${p2}</strong>!`,
    btnNextQuestionTurn: "تم السؤال ➔ اللاعب البعدو",
    btnNewQuestion: "🔄 غيّر السؤال المقترح أو المستهدف",
    timerRemainingLabel: (name) => `⏱️ زمن سؤال «${name}»:`,
    readyToVoteBtn: "🚨 تخطي الأسئلة والذهاب للتصويت فوراً!",
    allTurnsCompletedAlert: "كل اللعيبة سألوا بعض! أها، جاهزين تطلعوا الفاهي؟ يلا نصوّت!",
    suggestedQuestions: [
      "الشي دا قاعد في كل بيت سوداني ولا نادر؟",
      "لو لاقاك الصباح بدري، شعورك بيكون شنو؟",
      "سعره كم تقريباً؟ رخيص ولا غالي نار؟",
      "هل عنده ريحة مميزة ولا عادي؟",
      "بنستعمله كل يوم ولا في المناسبات والعزومات بس؟",
      "حجمه أكبر من كف اليد ولا أصغر؟",
      "الشفع الصغار بحبوه ولا الكبار بس؟",
      "لونه شنو في الغالب؟"
    ],

    // 6. التصويت
    votingHeader: "منو الفاهي بيناتنا؟",
    votingInstruction: "منو الزول اللي إجاباته ما راكبة وفاهي ما عارف الموضوع؟<br><strong>اختاروا الزول الشاكين فيهو:</strong>",
    btnConfirmVote: "تأكيد الاتهام 🎯",

    // 6.5 شاشة الترقب وكشف الحقيقة (Suspense Reveal)
    suspenseHeader: "لحظة الحسم والترقب! 🥁",
    suspenseAccusedLabel: (name) => `اتفقتم على اتهام <strong>«${name}»</strong>...`,
    suspenseStep1: "🔍 جاري فحص بصمات الشك والمكابسة...",
    suspenseStep2: "🥁 دقات القلب بتزيد... هل فعلاً هو الفاهي؟",
    suspenseCaughtBadge: (name) => `🎯 صاااح! قبضتوا على الفاهي «${name}»!`,
    suspenseCaughtSub: "لكن اصبروا... لسه عنده فرصة أخيرة يخمن الكلمة ويقلب الطاولة!",
    suspenseCaughtBtn: "أدّوا الفاهي فرصته الأخيرة للتخمين! ⚡",
    suspenseInnocentBadge: (name) => `😱 ظلمتوه! «${name}» طلع صاحي وفاهم الموضوع!`,
    suspenseInnocentSub: "الفاهي الحقيقي ضحك عليكم ومرق منها زي الشعرة من العجين!",
    suspenseInnocentBtn: "اكشف الفاهي الحقيقي والنتيجة! 🎭",

    // 7. تخمين الفاهي
    guessHeader: "فرصة الفاهي الأخيرة!",
    guessInstruction: (name) => `قبضوا عليك يا <strong>${name}</strong> وطلعوك أنت الفاهي!<br><span style="font-size: 0.95rem; opacity: 0.9;">عندك فرصة أخيرة تقلب الطاولة وتخمن الكلمة السرية:</span>`,
    btnConfirmGuess: "أراهن على الكلمة دي! 🚀",

    // 7.5 ترقب تخمين الكلمة
    suspenseGuessLabel: (name, word) => `الفاهي <strong>«${name}»</strong> راهن على كلمة: <strong>(${word})</strong>`,
    suspenseGuessStep1: "🔐 جاري مطابقة التخمين مع الكلمة السرية...",
    suspenseGuessStep2: "⏳ يا ترى جابها صاح ولا راحت عليه؟",

    // 8. النتائج
    resultsHeader: "نتيجة القيم والنقاط!",
    verdictImpostorGuessed: (name) => `الفاهي «${name}» طلع مفتّح وفاز! 🧠🔥`,
    descImpostorGuessed: (name, word) => `صاح كشفتوا إنو «${name}» هو الفاهي، لكن لقط الكلمة السرية من كلامكم وجابها صاح: <strong>(${word})</strong>!`,
    pointsImpostorGuessed: (name) => `كسب الفاهي «${name}» +100 نقطة!`,
    verdictCitizensWin: "الناس الصاحيين كسبوا القيم! 🏆👏",
    descCitizensWin: (name, word) => `قبضتوا على الفاهي «${name}» وكمان ما قدر يعرف الكلمة السرية! الكلمة كانت: <strong>(${word})</strong>.`,
    pointsCitizensWin: "كل زول صاحي معانا كسب +100 نقطة!",
    verdictImpostorTricked: "الفاهي غشاكم كلكم وفاز! 🎭😂",
    descImpostorTricked: (accused, impostor, word) => `ظلمتوا «${accused}» وهو زول فاهم الموضوع زيكم!<br>الفاهي الحقيقي كان: <strong>${impostor}</strong>!<br>والكلمة السرية كانت: <strong>(${word})</strong>.`,
    pointsImpostorTricked: (impostor) => `الفاهي «${impostor}» أخد +150 نقطة عشان جلاكم كلكم!`,
    playAgainBtn: "🔄 قيم جديد بنفس الشلة!",
    changeCategoriesBtn: "📂 تغيير قسم اللعب",
    backToSetupBtn: "⚙️ تغيير اللهجة واللعيبة"
  },

  saudi: {
    id: "saudi",
    name: "اللهجة السعودية",
    shortName: "سعودية",
    flag: "🇸🇦",
    impostorTerm: "برا السالفة",
    gameTitle: "فـاهي",
    dialectCardDesc: "نلعب بالسوالف والأكلات والمعالم السعودية، والشخص اللي ما يدري وش الموضوع نسميه «برا السالفة»!",
    tagline: "لعبة فاهي باللهجة السعودية — اعرف مين اللي برا السالفة! 🕵️‍♂️",
    appHeader: "لعبة فاهي",
    defaultPlayers: ["فيصل", "ريم", "نورة", "عبدالله"],

    // 1. شاشة اختيار اللهجة
    dialectScreenHeader: "لعبة فاهي - اختر اللهجة",
    dialectNextBtn: "التالي: اختر قسم السالفة ➔",

    // 2. شاشة اختيار القسم بالأيقونات
    categoriesScreenHeader: "اختر قسم السالفة",
    categoriesScreenSub: "اضغط على قسم واحد أو أكثر للعب فيها:",
    allCategoriesLabel: "كوكتيل (كل السوالف)",
    allCategoriesSub: "🎲 سحب عشوائي من جميع الأقسام",
    categoriesNextBtn: "التالي: أضف أسماء اللاعبين ➔",

    // 3. شاشة أسماء اللاعبين والإعدادات
    playersScreenHeader: "أسماء اللاعبين",
    playersBoxTitle: "👥 قائمة اللاعبين (3 إلى 14)",
    playersBoxSub: "الجوال يدور بينكم بالترتيب",
    addPlayerPlaceholder: "اكتب اسم اللاعب...",
    hintToggleLabel: "💡 تلميح للي برا السالفة (يعرف التصنيف)",
    timerSelectLabel: "⏱️ وقت السؤال لكل لاعب",
    startBtnText: "🔥 ابدأ السالفة!",

    // 4. شاشة الكشف السري
    passHeader: "اكشف دورك بالسر!",
    passTurnBadge: "أعطِ الجوال لـ:",
    holdInstruction: "تأكد إن ما أحد يطالع في الشاشة!<br><strong>اضغط هنا عشان تكشف كرتك السري</strong>",
    citizenTitle: "أنت داخل السالفة! 😎",
    citizenDescPrefix: "السالفة السرية هي:",
    citizenDescSuffix: "اسأل أسئلة ذكية تكشف اللي برا السالفة بدون ما تفضح الكلمة!",
    impostorTitle: "أنت اللي برا السالفة! 🙈",
    impostorDesc: "أنت اللي برا السالفة وما تدري وش السالفة! حاول تلقط السالفة من كلام البقية أو اقنعهم يصوتون على الشخص الخطأ!",
    hintPrefix: "💡 تلميح: السالفة عن",
    nextPlayerBtn: "تم، مرر الجوال للي بعده ➔",

    // 5. الأسئلة والمؤقت لكل لاعب
    questionsHeader: "جولة الأسئلة والتحقيق!",
    questionTurnCounter: (current, total) => `سؤال اللاعب ${current} من ${total}`,
    whoAsksWho: (p1, p2) => `🎤 دور <strong>${p1}</strong> يسأل <strong>${p2}</strong>!`,
    btnNextQuestionTurn: "تم السؤال ➔ اللاعب اللي بعده",
    btnNewQuestion: "🔄 تغيير السؤال المقترح أو المستهدف",
    timerRemainingLabel: (name) => `⏱️ وقت سؤال «${name}»:`,
    readyToVoteBtn: "🚨 تخطي الأسئلة وبدء التصويت فوراً!",
    allTurnsCompletedAlert: "انتهت أسئلة جميع اللاعبين! الحين وقت التصويت وكشف اللي برا السالفة!",
    suggestedQuestions: [
      "هل الشيء ذا موجود في كل بيت ولا نادر؟",
      "لو شفته الصباح، وش بتكون ردة فعلك؟",
      "كم سعره تقريباً؟ رخيص ولا غالي؟",
      "هل له ريحة مميزة ولا بدون ريحة؟",
      "نستخدمه يومياً ولا بالمناسبات بس؟",
      "حجمه أكبر من كف اليد ولا أصغر؟",
      "الصغار يحبونه ولا الكبار بس؟",
      "وش لونه بالعاده؟"
    ],

    // 6. التصويت
    votingHeader: "مين اللي برا السالفة؟",
    votingInstruction: "مين اللي إجاباته مشكوك فيها وواضح إنه برا السالفة؟<br><strong>صوتوا على المشتبه به:</strong>",
    btnConfirmVote: "تأكيد التصويت 🎯",

    // 6.5 شاشة الترقب وكشف الحقيقة (Suspense Reveal)
    suspenseHeader: "لحظة الحسم والترقب! 🥁",
    suspenseAccusedLabel: (name) => `اجتمع تصويتكم على اتهام <strong>«${name}»</strong>...`,
    suspenseStep1: "🔍 جاري فحص الأدلة ومراجعة السوالف...",
    suspenseStep2: "🥁 نبضات القلب تتسارع... هل هو فعلاً برا السالفة؟",
    suspenseCaughtBadge: (name) => `🎯 كفو! قفطتوا «${name}» وطلع فعلاً برا السالفة!`,
    suspenseCaughtSub: "لكن انتبهوا... باقي عنده فرصة أخيرة يخمن السالفة ويخطف الفوز!",
    suspenseCaughtBtn: "أعطوا اللي برا السالفة فرصته للتخمين! ⚡",
    suspenseInnocentBadge: (name) => `😱 ظلمتوه! «${name}» طلع بريء وداخل السالفة!`,
    suspenseInnocentSub: "اللي برا السالفة الحقيقي خدعكم كلكم وطلع منها سلام سلام!",
    suspenseInnocentBtn: "اكشف اللي برا السالفة الحقيقي والنتيجة! 🎭",

    // 7. تخمين برا السالفة
    guessHeader: "فرصة اللي برا السالفة!",
    guessInstruction: (name) => `قفطوكم يا <strong>${name}</strong> وعرفوا إنك برا السالفة!<br><span style="font-size: 0.95rem; opacity: 0.9;">عندك فرصة أخيرة تخمن وش كانت السالفة وتكسب النقاط:</span>`,
    btnConfirmGuess: "تأكيد التخمين! 🚀",

    // 7.5 ترقب تخمين السالفة
    suspenseGuessLabel: (name, word) => `اللي برا السالفة <strong>«${name}»</strong> اختار تخمين: <strong>(${word})</strong>`,
    suspenseGuessStep1: "🔐 جاري مطابقة التخمين مع السالفة السرية...",
    suspenseGuessStep2: "⏳ هل لقط السالفة صح ولا راحت عليه؟",

    // 8. النتائج
    resultsHeader: "نتيجة الجولة والنقاط!",
    verdictImpostorGuessed: (name) => `اللي برا السالفة «${name}» لقطها وفاز! 🧠🔥`,
    descImpostorGuessed: (name, word) => `صح إنكم كشفتم «${name}» إنه برا السالفة، لكنه كان ذكي ولقط السالفة من كلامكم: <strong>(${word})</strong>!`,
    pointsImpostorGuessed: (name) => `حصل اللي برا السالفة «${name}» على +100 نقطة!`,
    verdictCitizensWin: "فوز كاسح للي داخل السالفة! 🏆👏",
    descCitizensWin: (name, word) => `كشفتم اللي برا السالفة «${name}» وما قدر يخمن السالفة صح! السالفة كانت: <strong>(${word})</strong>.`,
    pointsCitizensWin: "حصل كل لاعب داخل السالفة على +100 نقطة!",
    verdictImpostorTricked: "اللي برا السالفة خدعكم كلكم! 🎭😂",
    descImpostorTricked: (accused, impostor, word) => `صوتوا على «${accused}» وهو بريء وداخل السالفة معكم!<br>اللي برا السالفة الحقيقي كان: <strong>${impostor}</strong>!<br>والسالفة كانت: <strong>(${word})</strong>.`,
    pointsImpostorTricked: (impostor) => `حصل اللي برا السالفة «${impostor}» على +150 نقطة لخداع الجميع!`,
    playAgainBtn: "🔄 جولة جديدة بنفس اللاعبين!",
    changeCategoriesBtn: "📂 تغيير قسم السالفة",
    backToSetupBtn: "⚙️ تغيير اللهجة واللاعبين"
  },

  egyptian: {
    id: "egyptian",
    name: "اللهجة المصرية",
    shortName: "مصرية",
    flag: "🇪🇬",
    impostorTerm: "في الطراوة",
    gameTitle: "فـاهي",
    dialectCardDesc: "نلعب بالحوارات والأكلات والمعالم المصرية، واللي مش فاهم الحوار بنسميه «في الطراوة»!",
    tagline: "لعبة فاهي باللهجة المصرية — اقفش مين اللي نايم في الطراوة! 🕵️‍♂️",
    appHeader: "لعبة فاهي",
    defaultPlayers: ["أحمد", "مي", "كريم", "نور"],

    // 1. شاشة اختيار اللهجة
    dialectScreenHeader: "لعبة فاهي - اختار اللهجة",
    dialectNextBtn: "التالي: اختار قسم الحوار ➔",

    // 2. شاشة اختيار القسم بالأيقونات
    categoriesScreenHeader: "اختار قسم الحوار",
    categoriesScreenSub: "دوس على قسم أو أكتر علشان نلعب فيهم:",
    allCategoriesLabel: "كوكتيل (كل الحوارات)",
    allCategoriesSub: "🎲 سحب عشوائي من كل الأقسام",
    categoriesNextBtn: "التالي: ضيف أسماء الشلة ➔",

    // 3. شاشة أسماء اللاعبين والإعدادات
    playersScreenHeader: "أسماء الشلة",
    playersBoxTitle: "👥 الشلة اللي بتلعب (3 إلى 14)",
    playersBoxSub: "الموبايل هيلف عليكم واحد واحد",
    addPlayerPlaceholder: "اكتب اسم اللاعب...",
    hintToggleLabel: "💡 تلميح للي في الطراوة (يعرف اسم القسم)",
    timerSelectLabel: "⏱️ وقت السؤال لكل لاعب",
    startBtnText: "🔥 يلا نبدأ الجيم!",

    // 4. شاشة الكشف السري
    passHeader: "شوف كارتك في السر!",
    passTurnBadge: "ادي الموبايل لـ:",
    holdInstruction: "اتأكد إن مافيش حد باصص في الشاشة!<br><strong>دوس هنا علشان تشوف كارتك السري</strong>",
    citizenTitle: "أنت فاهم الحوار! 😎",
    citizenDescPrefix: "الكلمة السرية هي:",
    citizenDescSuffix: "اسأل أسئلة صايعة تكشف اللي في الطراوة من غير ما تفضح الكلمة!",
    impostorTitle: "أنت اللي في الطراوة! 🙈",
    impostorDesc: "أنت نايم في الطراوة ومش عارف إيه الحوار أصلاً! ركز في كلامهم علشان تلقط الكلمة، أو اشتغلهم وخليهم يصوتوا على حد تاني!",
    hintPrefix: "💡 تلميح: الحوار عن",
    nextPlayerBtn: "تمام، باصي الموبايل للي بعده ➔",

    // 5. الأسئلة والمؤقت لكل لاعب
    questionsHeader: "فقرة الأسئلة والاستجواب!",
    questionTurnCounter: (current, total) => `سؤال اللاعب ${current} من ${total}`,
    whoAsksWho: (p1, p2) => `🎤 دور <strong>${p1}</strong> يسأل <strong>${p2}</strong>!`,
    btnNextQuestionTurn: "خلص سؤاله ➔ اللي بعده",
    btnNewQuestion: "🔄 غير السؤال المقترح أو المستهدف",
    timerRemainingLabel: (name) => `⏱️ وقت سؤال «${name}»:`,
    readyToVoteBtn: "🚨 تخطي الأسئلة ويلا نصوت فوراً!",
    allTurnsCompletedAlert: "كل اللاعيبة سألوا بعض! يلا نصوت ونشوف مين اللي كان نايم في الطراوة!",
    suggestedQuestions: [
      "الحاجة دي موجودة في كل بيت مصري ولا نادرة؟",
      "لو شفتها الصبح بدري، رد فعلك هيكون إيه؟",
      "سعرها كام تقريباً؟ رخيصة ولا غالية نار؟",
      "هل ليها ريحة مميزة ولا من غير ريحة؟",
      "بنستخدمها كل يوم ولا في المناسبات بس؟",
      "حجمها أكبر من كف الإيد ولا أصغر؟",
      "العيال الصغيرة بتحبها ولا الكبار بس؟",
      "لونها إيه في العادة؟"
    ],

    // 6. التصويت
    votingHeader: "مين اللي في الطراوة؟",
    votingInstruction: "مين اللي ردوده عجيبة وباين عليه نايم في الطراوة؟<br><strong>صوتوا على المتهم:</strong>",
    btnConfirmVote: "تأكيد التصويت 🎯",

    // 6.5 شاشة الترقب وكشف الحقيقة (Suspense Reveal)
    suspenseHeader: "لحظة الحسم والترقب! 🥁",
    suspenseAccusedLabel: (name) => `كلكم اتفقتم على اتهام <strong>«${name}»</strong>...`,
    suspenseStep1: "🔍 جاري فحص التحقيقات وكشف المستور...",
    suspenseStep2: "🥁 دقات القلب بتعلى... يا ترى هو اللي في الطراوة بجد؟",
    suspenseCaughtBadge: (name) => `🎯 معلمين! قفشتوا «${name}» وطلع هو اللي في الطراوة!`,
    suspenseCaughtSub: "بس استنوا... لسه قدامه فرصة أخيرة يخمن الكلمة ويكسب الجيم!",
    suspenseCaughtBtn: "ادوا اللي في الطراوة فرصته الأخيرة! ⚡",
    suspenseInnocentBadge: (name) => `😱 ظلمتوه! «${name}» طلع بريء وفاهم الحوار!`,
    suspenseInnocentSub: "اللي في الطراوة الحقيقي اشتغلكم كلكم وخلع منها بشياكة!",
    suspenseInnocentBtn: "اكشف اللي في الطراوة الحقيقي والنتيجة! 🎭",

    // 7. تخمين اللي في الطراوة
    guessHeader: "الفرصة الأخيرة للي في الطراوة!",
    guessInstruction: (name) => `قفشوك يا <strong>${name}</strong> وعرفوا إنك في الطراوة!<br><span style="font-size: 0.95rem; opacity: 0.9;">قدامك فرصة أخيرة تخمن الكلمة السرية وتكسب الجيم:</span>`,
    btnConfirmGuess: "أكد التخمين ده! 🚀",

    // 7.5 ترقب تخمين الكلمة
    suspenseGuessLabel: (name, word) => `اللي في الطراوة <strong>«${name}»</strong> راهن على كلمة: <strong>(${word})</strong>`,
    suspenseGuessStep1: "🔐 جاري مطابقة التخمين مع الكلمة السرية...",
    suspenseGuessStep2: "⏳ يا ترى لقطها صح ولا راحت عليه؟",

    // 8. النتائج
    resultsHeader: "نتيجة الجيم والنقط!",
    verdictImpostorGuessed: (name) => `اللي في الطراوة «${name}» طلع صايع وكسب! 🧠🔥`,
    descImpostorGuessed: (name, word) => `مع إنكم قفشتوا «${name}» إنه في الطراوة، بس لقط الكلمة السرية من كلامكم وجابها صح: <strong>(${word})</strong>!`,
    pointsImpostorGuessed: (name) => `كسب اللي في الطراوة «${name}» +100 نقطة!`,
    verdictCitizensWin: "فوز ساحق للناصحين! 🏆👏",
    descCitizensWin: (name, word) => `قفشتوا اللي في الطراوة «${name}» وماعرفش يخمن الكلمة! الكلمة السرية كانت: <strong>(${word})</strong>.`,
    pointsCitizensWin: "كل لاعب فاهم الحوار كسب +100 نقطة!",
    verdictImpostorTricked: "اللي في الطراوة اشتغلكم كلكم! 🎭😂",
    descImpostorTricked: (accused, impostor, word) => `ظلمتوا «${accused}» وهو فاهم الحوار زيكم!<br>اللي كان في الطراوة بجد هو: <strong>${impostor}</strong>!<br>والكلمة كانت: <strong>(${word})</strong>.`,
    pointsImpostorTricked: (impostor) => `كسب اللي في الطراوة «${impostor}» +150 نقطة علشان ضحك عليكم!`,
    playAgainBtn: "🔄 جيم جديد بنفس الشلة!",
    changeCategoriesBtn: "📂 تغيير قسم الحوار",
    backToSetupBtn: "⚙️ تغيير اللهجة واللاعيبة"
  }
};
