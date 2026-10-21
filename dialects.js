// ==========================================================================
// قاموس اللهجات الثلاث (سودانية، سعودية، مصرية)
// قاعدة صارمة: اللعبة في كل اللهجات اسمها «فاهي» والشخص المخادع اسمه «فاهي»!
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
    impostorTerm: "فاهي",
    gameTitle: "فـاهي",
    dialectCardDesc: "نلعب بالمواضيع والأكلات والمعالم السعودية، والشخص اللي ما يدري وش الموضوع نسميه «فاهي»!",
    tagline: "لعبة فاهي باللهجة السعودية — اعرف مين الفاهي اللي بيننا! 🕵️‍♂️",
    appHeader: "لعبة فاهي",
    defaultPlayers: ["فيصل", "ريم", "نورة", "عبدالله"],

    // 1. شاشة اختيار اللهجة
    dialectScreenHeader: "لعبة فاهي - اختر اللهجة",
    dialectNextBtn: "التالي: اختر قسم اللعب ➔",

    // 2. شاشة اختيار القسم بالأيقونات
    categoriesScreenHeader: "اختر قسم الموضوع",
    categoriesScreenSub: "اضغط على قسم واحد أو أكثر للعب فيها:",
    allCategoriesLabel: "كوكتيل (كل الأقسام)",
    allCategoriesSub: "🎲 سحب عشوائي من جميع الأقسام",
    categoriesNextBtn: "التالي: أضف أسماء اللاعبين ➔",

    // 3. شاشة أسماء اللاعبين والإعدادات
    playersScreenHeader: "أسماء اللاعبين",
    playersBoxTitle: "👥 قائمة اللاعبين (3 إلى 14)",
    playersBoxSub: "الجوال يدور بينكم بالترتيب",
    addPlayerPlaceholder: "اكتب اسم اللاعب...",
    hintToggleLabel: "💡 تلميح للفاهي (يعرف التصنيف)",
    timerSelectLabel: "⏱️ وقت السؤال لكل لاعب",
    startBtnText: "🔥 ابدأ الجولة!",

    // 4. شاشة الكشف السري
    passHeader: "اكشف دورك بالسر!",
    passTurnBadge: "أعطِ الجوال لـ:",
    holdInstruction: "تأكد إن ما أحد يطالع في الشاشة!<br><strong>اضغط هنا عشان تكشف كرتك السري</strong>",
    citizenTitle: "أنت فاهم الموضوع! 😎",
    citizenDescPrefix: "الكلمة السرية هي:",
    citizenDescSuffix: "اسأل أسئلة ذكية تكشف الفاهي بدون ما تفضح الكلمة!",
    impostorTitle: "أنت الفاهي! 🙈",
    impostorDesc: "أنت فاهي وما تدري وش الموضوع! حاول تلقط الكلمة من كلام البقية أو اقنعهم يصوتون على الشخص الخطأ!",
    hintPrefix: "💡 تلميح: الموضوع عن",
    nextPlayerBtn: "تم، مرر الجوال للي بعده ➔",

    // 5. الأسئلة والمؤقت لكل لاعب
    questionsHeader: "جولة الأسئلة والتحقيق!",
    questionTurnCounter: (current, total) => `سؤال اللاعب ${current} من ${total}`,
    whoAsksWho: (p1, p2) => `🎤 دور <strong>${p1}</strong> يسأل <strong>${p2}</strong>!`,
    btnNextQuestionTurn: "تم السؤال ➔ اللاعب اللي بعده",
    btnNewQuestion: "🔄 تغيير السؤال المقترح أو المستهدف",
    timerRemainingLabel: (name) => `⏱️ وقت سؤال «${name}»:`,
    readyToVoteBtn: "🚨 تخطي الأسئلة وبدء التصويت فوراً!",
    allTurnsCompletedAlert: "انتهت أسئلة جميع اللاعبين! الحين وقت التصويت وكشف الفاهي!",
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
    votingHeader: "مين الفاهي اللي بيننا؟",
    votingInstruction: "مين اللي إجاباته مشكوك فيها وواضح إنه فاهي؟<br><strong>صوتوا على المشتبه به:</strong>",
    btnConfirmVote: "تأكيد التصويت 🎯",

    // 6.5 شاشة الترقب وكشف الحقيقة (Suspense Reveal)
    suspenseHeader: "لحظة الحسم والترقب! 🥁",
    suspenseAccusedLabel: (name) => `اجتمع تصويتكم على اتهام <strong>«${name}»</strong>...`,
    suspenseStep1: "🔍 جاري فحص الأدلة ومراجعة الإجابات...",
    suspenseStep2: "🥁 نبضات القلب تتسارع... هل هو فعلاً الفاهي؟",
    suspenseCaughtBadge: (name) => `🎯 كفو! قفطتوا «${name}» وطلع فعلاً هو الفاهي!`,
    suspenseCaughtSub: "لكن انتبهوا... باقي عنده فرصة أخيرة يخمن الكلمة ويخطف الفوز!",
    suspenseCaughtBtn: "أعطوا الفاهي فرصته للتخمين! ⚡",
    suspenseInnocentBadge: (name) => `😱 ظلمتوه! «${name}» طلع بريء وفاهم الموضوع!`,
    suspenseInnocentSub: "الفاهي الحقيقي خدعكم كلكم وطلع منها سلام سلام!",
    suspenseInnocentBtn: "اكشف الفاهي الحقيقي والنتيجة! 🎭",

    // 7. تخمين الفاهي
    guessHeader: "فرصة الفاهي الأخيرة!",
    guessInstruction: (name) => `قفطوك يا <strong>${name}</strong> وعرفوا إنك أنت الفاهي!<br><span style="font-size: 0.95rem; opacity: 0.9;">عندك فرصة أخيرة تخمن الكلمة السرية وتكسب النقاط:</span>`,
    btnConfirmGuess: "تأكيد التخمين! 🚀",

    // 7.5 ترقب تخمين الكلمة
    suspenseGuessLabel: (name, word) => `الفاهي <strong>«${name}»</strong> اختار تخمين: <strong>(${word})</strong>`,
    suspenseGuessStep1: "🔐 جاري مطابقة التخمين مع الكلمة السرية...",
    suspenseGuessStep2: "⏳ هل لقط الكلمة صح ولا راحت عليه؟",

    // 8. النتائج
    resultsHeader: "نتيجة الجولة والنقاط!",
    verdictImpostorGuessed: (name) => `الفاهي «${name}» لقطها وفاز! 🧠🔥`,
    descImpostorGuessed: (name, word) => `صح إنكم كشفتم «${name}» إنه الفاهي، لكنه كان ذكي ولقط الكلمة من كلامكم: <strong>(${word})</strong>!`,
    pointsImpostorGuessed: (name) => `حصل الفاهي «${name}» على +100 نقطة!`,
    verdictCitizensWin: "فوز كاسح للي فاهمين الموضوع! 🏆👏",
    descCitizensWin: (name, word) => `كشفتم الفاهي «${name}» وما قدر يخمن الكلمة صح! الكلمة كانت: <strong>(${word})</strong>.`,
    pointsCitizensWin: "حصل كل لاعب فاهم الموضوع على +100 نقطة!",
    verdictImpostorTricked: "الفاهي خدعكم كلكم! 🎭😂",
    descImpostorTricked: (accused, impostor, word) => `صوتوا على «${accused}» وهو بريء وفاهم الموضوع معكم!<br>الفاهي الحقيقي كان: <strong>${impostor}</strong>!<br>والكلمة السرية كانت: <strong>(${word})</strong>.`,
    pointsImpostorTricked: (impostor) => `حصل الفاهي «${impostor}» على +150 نقطة لخداع الجميع!`,
    playAgainBtn: "🔄 جولة جديدة بنفس اللاعبين!",
    changeCategoriesBtn: "📂 تغيير قسم اللعب",
    backToSetupBtn: "⚙️ تغيير اللهجة واللاعبين"
  },

  egyptian: {
    id: "egyptian",
    name: "اللهجة المصرية",
    shortName: "مصرية",
    flag: "🇪🇬",
    impostorTerm: "فاهي",
    gameTitle: "فـاهي",
    dialectCardDesc: "نلعب بالحوارات والأكلات والمعالم المصرية، واللي مش فاهم الحوار بنسميه «فاهي»!",
    tagline: "لعبة فاهي باللهجة المصرية — اقفش مين الفاهي اللي وسطينا! 🕵️‍♂️",
    appHeader: "لعبة فاهي",
    defaultPlayers: ["أحمد", "مي", "كريم", "نور"],

    // 1. شاشة اختيار اللهجة
    dialectScreenHeader: "لعبة فاهي - اختار اللهجة",
    dialectNextBtn: "التالي: اختار قسم اللعب ➔",

    // 2. شاشة اختيار القسم بالأيقونات
    categoriesScreenHeader: "اختار قسم الحوار",
    categoriesScreenSub: "دوس على قسم أو أكتر علشان نلعب فيهم:",
    allCategoriesLabel: "كوكتيل (كل الأقسام)",
    allCategoriesSub: "🎲 سحب عشوائي من كل الأقسام",
    categoriesNextBtn: "التالي: ضيف أسماء الشلة ➔",

    // 3. شاشة أسماء اللاعبين والإعدادات
    playersScreenHeader: "أسماء الشلة",
    playersBoxTitle: "👥 الشلة اللي بتلعب (3 إلى 14)",
    playersBoxSub: "الموبايل هيلف عليكم واحد واحد",
    addPlayerPlaceholder: "اكتب اسم اللاعب...",
    hintToggleLabel: "💡 تلميح للفاهي (يعرف اسم القسم)",
    timerSelectLabel: "⏱️ وقت السؤال لكل لاعب",
    startBtnText: "🔥 يلا نبدأ الجيم!",

    // 4. شاشة الكشف السري
    passHeader: "شوف كارتك في السر!",
    passTurnBadge: "ادي الموبايل لـ:",
    holdInstruction: "اتأكد إن مافيش حد باصص في الشاشة!<br><strong>دوس هنا علشان تشوف كارتك السري</strong>",
    citizenTitle: "أنت فاهم الحوار! 😎",
    citizenDescPrefix: "الكلمة السرية هي:",
    citizenDescSuffix: "اسأل أسئلة صايعة تكشف الفاهي من غير ما تفضح الكلمة!",
    impostorTitle: "أنت الفاهي! 🙈",
    impostorDesc: "أنت فاهي ومش عارف إيه الحوار أصلاً! ركز في كلامهم علشان تلقط الكلمة، أو اشتغلهم وخليهم يصوتوا على حد تاني!",
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
    allTurnsCompletedAlert: "كل اللاعيبة سألوا بعض! يلا نصوت ونشوف مين الفاهي اللي وسطينا!",
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
    votingHeader: "مين الفاهي اللي وسطينا؟",
    votingInstruction: "مين اللي ردوده عجيبة وباين عليه فاهي؟<br><strong>صوتوا على المتهم:</strong>",
    btnConfirmVote: "تأكيد التصويت 🎯",

    // 6.5 شاشة الترقب وكشف الحقيقة (Suspense Reveal)
    suspenseHeader: "لحظة الحسم والترقب! 🥁",
    suspenseAccusedLabel: (name) => `كلكم اتفقتم على اتهام <strong>«${name}»</strong>...`,
    suspenseStep1: "🔍 جاري فحص التحقيقات وكشف المستور...",
    suspenseStep2: "🥁 دقات القلب بتعلى... يا ترى هو الفاهي بجد؟",
    suspenseCaughtBadge: (name) => `🎯 معلمين! قفشتوا «${name}» وطلع هو الفاهي!`,
    suspenseCaughtSub: "بس استنوا... لسه قدامه فرصة أخيرة يخمن الكلمة ويكسب الجيم!",
    suspenseCaughtBtn: "ادوا الفاهي فرصته الأخيرة! ⚡",
    suspenseInnocentBadge: (name) => `😱 ظلمتوه! «${name}» طلع بريء وفاهم الحوار!`,
    suspenseInnocentSub: "الفاهي الحقيقي اشتغلكم كلكم وخلع منها بشياكة!",
    suspenseInnocentBtn: "اكشف الفاهي الحقيقي والنتيجة! 🎭",

    // 7. تخمين الفاهي
    guessHeader: "فرصة الفاهي الأخيرة!",
    guessInstruction: (name) => `قفشوك يا <strong>${name}</strong> وعرفوا إنك أنت الفاهي!<br><span style="font-size: 0.95rem; opacity: 0.9;">قدامك فرصة أخيرة تخمن الكلمة السرية وتكسب الجيم:</span>`,
    btnConfirmGuess: "أكد التخمين ده! 🚀",

    // 7.5 ترقب تخمين الكلمة
    suspenseGuessLabel: (name, word) => `الفاهي <strong>«${name}»</strong> راهن على كلمة: <strong>(${word})</strong>`,
    suspenseGuessStep1: "🔐 جاري مطابقة التخمين مع الكلمة السرية...",
    suspenseGuessStep2: "⏳ يا ترى لقطها صح ولا راحت عليه؟",

    // 8. النتائج
    resultsHeader: "نتيجة الجيم والنقط!",
    verdictImpostorGuessed: (name) => `الفاهي «${name}» طلع صايع وكسب! 🧠🔥`,
    descImpostorGuessed: (name, word) => `مع إنكم قفشتوا «${name}» إنه الفاهي، بس لقط الكلمة السرية من كلامكم وجابها صح: <strong>(${word})</strong>!`,
    pointsImpostorGuessed: (name) => `كسب الفاهي «${name}» +100 نقطة!`,
    verdictCitizensWin: "فوز ساحق للناصحين! 🏆👏",
    descCitizensWin: (name, word) => `قفشتوا الفاهي «${name}» وماعرفش يخمن الكلمة! الكلمة السرية كانت: <strong>(${word})</strong>.`,
    pointsCitizensWin: "كل لاعب فاهم الحوار كسب +100 نقطة!",
    verdictImpostorTricked: "الفاهي اشتغلكم كلكم! 🎭😂",
    descImpostorTricked: (accused, impostor, word) => `ظلمتوا «${accused}» وهو فاهم الحوار زيكم!<br>الفاهي الحقيقي كان: <strong>${impostor}</strong>!<br>والكلمة كانت: <strong>(${word})</strong>.`,
    pointsImpostorTricked: (impostor) => `كسب الفاهي «${impostor}» +150 نقطة علشان ضحك عليكم!`,
    playAgainBtn: "🔄 جيم جديد بنفس الشلة!",
    changeCategoriesBtn: "📂 تغيير قسم الحوار",
    backToSetupBtn: "⚙️ تغيير اللهجة واللاعيبة"
  }
};
