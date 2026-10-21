/* ==========================================================================
   لعبة «فاهي» (Fahey) - محرك اللعبة الشامل (Game Engine v3.0)
   - يدعم 3 صفحات إعداد منفصلة: (1. اللهجة ➔ 2. القسم بالأيقونات ➔ 3. الأسماء)
   - يدعم اللهجات الثلاث (سودانية، سعودية، مصرية) تحت اسم ومصطلح موحد «فاهي»
   ========================================================================== */

class GameSoundFX {
  constructor() {
    this.audioCtx = null;
    this.soundEnabled = true;
  }

  init() {
    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.audioCtx = new AudioContext();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  playPop() {
    if (!this.soundEnabled) return;
    this.init();
    if (!this.audioCtx) return;
    
    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();
    
    osc.type = 'sine';
    const now = this.audioCtx.currentTime;
    osc.frequency.setValueAtTime(420, now);
    osc.frequency.exponentialRampToValueAtTime(840, now + 0.08);
    
    gain.gain.setValueAtTime(0.18, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.08);
    
    osc.connect(gain);
    gain.connect(this.audioCtx.destination);
    
    osc.start(now);
    osc.stop(now + 0.08);
  }

  playReveal() {
    if (!this.soundEnabled) return;
    this.init();
    if (!this.audioCtx) return;
    
    const now = this.audioCtx.currentTime;
    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();
    
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(300, now);
    osc.frequency.exponentialRampToValueAtTime(680, now + 0.25);
    
    gain.gain.setValueAtTime(0.22, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.25);
    
    osc.connect(gain);
    gain.connect(this.audioCtx.destination);
    
    osc.start(now);
    osc.stop(now + 0.25);
    
    if (navigator.vibrate) navigator.vibrate(40);
  }

  playTick() {
    if (!this.soundEnabled) return;
    this.init();
    if (!this.audioCtx) return;
    
    const now = this.audioCtx.currentTime;
    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();
    
    osc.type = 'sine';
    osc.frequency.setValueAtTime(650, now);
    
    gain.gain.setValueAtTime(0.1, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
    
    osc.connect(gain);
    gain.connect(this.audioCtx.destination);
    
    osc.start(now);
    osc.stop(now + 0.05);
  }

  playVictory() {
    if (!this.soundEnabled) return;
    this.init();
    if (!this.audioCtx) return;
    
    const notes = [523.25, 659.25, 783.99, 1046.50];
    const now = this.audioCtx.currentTime;
    
    notes.forEach((freq, index) => {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + index * 0.1);
      
      gain.gain.setValueAtTime(0.2, now + index * 0.1);
      gain.gain.exponentialRampToValueAtTime(0.01, now + index * 0.1 + 0.2);
      
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      
      osc.start(now + index * 0.1);
      osc.stop(now + index * 0.1 + 0.25);
    });
    
    if (navigator.vibrate) navigator.vibrate([80, 50, 120]);
  }

  playBuzzer() {
    if (!this.soundEnabled) return;
    this.init();
    if (!this.audioCtx) return;
    
    const now = this.audioCtx.currentTime;
    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();
    
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(160, now);
    osc.frequency.linearRampToValueAtTime(110, now + 0.35);
    
    gain.gain.setValueAtTime(0.22, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);
    
    osc.connect(gain);
    gain.connect(this.audioCtx.destination);
    
    osc.start(now);
    osc.stop(now + 0.35);
    
    if (navigator.vibrate) navigator.vibrate(250);
  }

  playHeartbeat(step = 1) {
    if (!this.soundEnabled) return;
    this.init();
    if (!this.audioCtx) return;

    const now = this.audioCtx.currentTime;
    const baseFreq = step === 3 ? 95 : step === 2 ? 115 : 135;

    // النبضة الأولى (Lub)
    const osc1 = this.audioCtx.createOscillator();
    const gain1 = this.audioCtx.createGain();
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(baseFreq, now);
    osc1.frequency.exponentialRampToValueAtTime(55, now + 0.12);
    gain1.gain.setValueAtTime(0.28, now);
    gain1.gain.exponentialRampToValueAtTime(0.01, now + 0.12);
    osc1.connect(gain1);
    gain1.connect(this.audioCtx.destination);
    osc1.start(now);
    osc1.stop(now + 0.12);

    // النبضة الثانية (Dub)
    const osc2 = this.audioCtx.createOscillator();
    const gain2 = this.audioCtx.createGain();
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(baseFreq * 1.15, now + 0.15);
    osc2.frequency.exponentialRampToValueAtTime(60, now + 0.28);
    gain2.gain.setValueAtTime(0.22, now + 0.15);
    gain2.gain.exponentialRampToValueAtTime(0.01, now + 0.28);
    osc2.connect(gain2);
    gain2.connect(this.audioCtx.destination);
    osc2.start(now + 0.15);
    osc2.stop(now + 0.28);

    if (navigator.vibrate) navigator.vibrate([50, 70, 50]);
  }
}

class FaheyGame {
  constructor() {
    this.sfx = new GameSoundFX();
    
    this.currentDialectId = "sudanese";
    this.activeScreenKey = "dialect";

    this.players = [
      { id: 1, name: "أحمد", score: 0 },
      { id: 2, name: "عثمان", score: 0 },
      { id: 3, name: "سارة", score: 0 },
      { id: 4, name: "فاطمة", score: 0 }
    ];
    this.nextPlayerId = 5;

    this.selectedCategories = ["foods"];
    this.impostorCount = 1;
    this.showHints = true;
    this.roundDurationSec = 30; // 30 ثانية لكل لاعب افتراضياً
    
    this.currentCategory = null;
    this.secretWord = "";
    this.impostorPlayerIds = [];
    this.assignedRoles = [];
    this.passTurnIndex = 0;
    this.cardIsRevealed = false;

    this.questionOrder = [];
    this.questionTurnIndex = 0;
    this.currentTargetPlayer = null;
    this.unusedQuestionsPool = [];
    this.questionPoolCursor = 0;

    this.timerRemaining = 30;
    this.timerInterval = null;
    this.timerIsRunning = false;

    this.selectedAccusedPlayerId = null;
    this.votingOrder = [];
    this.votingTurnIndex = 0;
    this.currentVoterChoiceId = null;
    this.playerVotes = [];
    this.guessChoices = [];
    this.selectedGuessWord = null;

    this.suspenseInterval = null;
    this.suspenseNextCallback = null;

    this.initDOM();
  }

  get dialect() {
    return GAME_DIALECTS[this.currentDialectId] || GAME_DIALECTS.sudanese;
  }

  initDOM() {
    // الشاشات المنفصلة
    this.screens = {
      dialect: document.getElementById("screen-dialect"),
      categories: document.getElementById("screen-categories"),
      players: document.getElementById("screen-players"),
      pass: document.getElementById("screen-pass"),
      questions: document.getElementById("screen-questions"),
      voting: document.getElementById("screen-voting"),
      suspense: document.getElementById("screen-suspense"),
      guess: document.getElementById("screen-guess"),
      results: document.getElementById("screen-results")
    };

    // مؤشر الخطوات الثلاث العلوية
    this.setupStepperEl = document.getElementById("setup-stepper");
    this.stepButtons = {
      dialect: document.getElementById("step-btn-dialect"),
      categories: document.getElementById("step-btn-categories"),
      players: document.getElementById("step-btn-players")
    };

    // عناصر الصفحة 1: اللهجة
    this.dialectTabs = {
      sudanese: document.getElementById("tab-dialect-sudanese"),
      saudi: document.getElementById("tab-dialect-saudi"),
      egyptian: document.getElementById("tab-dialect-egyptian")
    };
    this.brandLogoEl = document.getElementById("brand-logo");
    this.brandTaglineEl = document.getElementById("brand-tagline");
    this.btnDialectNext = document.getElementById("btn-dialect-next");
    this.dialectNextBtnTextEl = document.getElementById("dialect-next-btn-text");

    // عناصر الصفحة 2: اختيار القسم بالأيقونات
    this.categoriesScreenSubEl = document.getElementById("categories-screen-sub");
    this.categoriesContainer = document.getElementById("categories-container");
    this.btnCategoriesNext = document.getElementById("btn-categories-next");
    this.categoriesNextBtnTextEl = document.getElementById("categories-next-btn-text");

    // عناصر الصفحة 3: الأسماء والإعدادات
    this.playersBoxTitleEl = document.getElementById("players-box-title");
    this.playersBoxSubEl = document.getElementById("players-box-sub");
    this.playerInput = document.getElementById("player-input");
    this.btnAddPlayer = document.getElementById("btn-add-player");
    this.playersListContainer = document.getElementById("players-list-container");
    this.hintToggleLabelEl = document.getElementById("hint-toggle-label");
    this.toggleHintsInput = document.getElementById("toggle-hints");
    this.timerSelectLabelEl = document.getElementById("timer-select-label");
    this.timerSelect = document.getElementById("timer-select");
    this.btnStartGame = document.getElementById("btn-start-game");
    this.startBtnTextEl = document.getElementById("start-btn-text");

    // عناصر شاشة كشف الكرت
    this.playerTurnBadgeEl = document.getElementById("player-turn-badge");
    this.playerTurnNameEl = document.getElementById("player-turn-name");
    this.secretCardBox = document.getElementById("secret-card-box");
    this.holdInstructionTextEl = document.getElementById("hold-instruction-text");
    this.revealedContentEl = document.getElementById("revealed-content");
    this.roleTitleEl = document.getElementById("role-title");
    this.roleDetailsEl = document.getElementById("role-details");
    this.btnPassNext = document.getElementById("btn-pass-next");
    this.nextPlayerBtnTextEl = document.getElementById("next-player-btn-text");

    // عناصر شاشة الأسئلة (لكل لاعب)
    this.questionTurnCounterBadgeEl = document.getElementById("question-turn-counter-badge");
    this.questionPlayersPillsEl = document.getElementById("question-players-pills");
    this.askerTargetEl = document.getElementById("asker-target");
    this.suggestedQuestionEl = document.getElementById("suggested-question");
    this.timerRemainingLabelEl = document.getElementById("timer-remaining-label");
    this.timerDisplayEl = document.getElementById("timer-display");
    this.btnToggleTimer = document.getElementById("btn-toggle-timer");
    this.btnAddTime = document.getElementById("btn-add-time");
    this.btnNewQuestion = document.getElementById("btn-new-question");
    this.btnNextQuestionTurn = document.getElementById("btn-next-question-turn");
    this.nextQuestionTurnTextEl = document.getElementById("next-question-turn-text");
    this.btnGoToVote = document.getElementById("btn-go-to-vote");

    // عناصر شاشة التصويت الفردي ونتيجة الفرز
    this.votingTurnProgressBoxEl = document.getElementById("voting-turn-progress-box");
    this.votingTurnCounterBadgeEl = document.getElementById("voting-turn-counter-badge");
    this.votingPlayersPillsEl = document.getElementById("voting-players-pills");
    this.votingActiveStageEl = document.getElementById("voting-active-stage");
    this.votingInstructionsEl = document.getElementById("voting-instructions");
    this.votingListContainer = document.getElementById("voting-list-container");
    this.btnConfirmVote = document.getElementById("btn-confirm-vote");
    this.confirmVoteBtnTextEl = document.getElementById("confirm-vote-btn-text");
    this.votingResultsStageEl = document.getElementById("voting-results-stage");
    this.voteTallyHeaderEl = document.getElementById("vote-tally-header");
    this.voteTallySubEl = document.getElementById("vote-tally-sub");
    this.voteBarsContainerEl = document.getElementById("vote-bars-container");
    this.voteLogTitleEl = document.getElementById("vote-log-title");
    this.voteLogListEl = document.getElementById("vote-log-list");
    this.btnRevealAccused = document.getElementById("btn-reveal-accused");
    this.revealAccusedBtnTextEl = document.getElementById("reveal-accused-btn-text");

    // عناصر شاشة الترقب الدرامي (Suspense)
    this.suspenseAccusedBannerEl = document.getElementById("suspense-accused-banner");
    this.suspenseRadarWrapEl = document.getElementById("suspense-radar-wrap");
    this.suspenseCenterCircleEl = document.getElementById("suspense-center-circle");
    this.suspenseCountdownNumEl = document.getElementById("suspense-countdown-num");
    this.suspenseStatusTextEl = document.getElementById("suspense-status-text");
    this.suspenseVerdictBoxEl = document.getElementById("suspense-verdict-box");
    this.suspenseVerdictTitleEl = document.getElementById("suspense-verdict-title");
    this.suspenseVerdictSubEl = document.getElementById("suspense-verdict-sub");
    this.btnSuspenseContinue = document.getElementById("btn-suspense-continue");
    this.suspenseContinueTextEl = document.getElementById("suspense-continue-text");

    // عناصر شاشة التخمين
    this.accusedNameHeaderEl = document.getElementById("accused-name-header");
    this.guessOptionsListContainer = document.getElementById("guess-options-list");
    this.btnConfirmGuess = document.getElementById("btn-confirm-guess");
    this.confirmGuessBtnTextEl = document.getElementById("confirm-guess-btn-text");

    // عناصر شاشة النتائج
    this.resultVerdictEl = document.getElementById("result-verdict");
    this.resultExplanationEl = document.getElementById("result-explanation");
    this.scoreboardBody = document.getElementById("scoreboard-body");
    this.btnPlayAgain = document.getElementById("btn-play-again");
    this.playAgainBtnTextEl = document.getElementById("play-again-btn-text");
    this.btnChangeCategories = document.getElementById("btn-change-categories");
    this.btnBackToSetup = document.getElementById("btn-back-to-setup");

    // الهيدر
    this.headerTitleEl = document.getElementById("header-title");
    this.headerBackBtn = document.getElementById("header-back-btn");

    this.bindEvents();
    this.setDialect("sudanese", false);
    this.renderPlayersList();
    this.showScreen("dialect");
  }

  bindEvents() {
    // النقر على بطاقات اللهجات الثلاث في الصفحة 1
    Object.keys(this.dialectTabs).forEach(key => {
      const card = this.dialectTabs[key];
      if (card) {
        card.addEventListener("click", () => {
          this.setDialect(key, true);
        });
      }
    });

    // التنقل عبر شريط الخطوات العلوي (1. اللهجة ➔ 2. القسم ➔ 3. الأسماء)
    Object.keys(this.stepButtons).forEach(stepKey => {
      const btn = this.stepButtons[stepKey];
      if (btn) {
        btn.addEventListener("click", () => {
          this.sfx.playPop();
          this.showScreen(stepKey);
        });
      }
    });

    // زر التالي من صفحة اللهجة إلى صفحة القسم
    this.btnDialectNext.addEventListener("click", () => {
      this.sfx.playPop();
      this.renderCategoriesList();
      this.showScreen("categories");
    });

    // زر التالي من صفحة القسم إلى صفحة الأسماء
    this.btnCategoriesNext.addEventListener("click", () => {
      this.sfx.playPop();
      this.showScreen("players");
    });

    // إدارة اللاعبين في الصفحة 3
    this.btnAddPlayer.addEventListener("click", () => this.addPlayer());
    this.playerInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") this.addPlayer();
    });

    this.toggleHintsInput.addEventListener("change", (e) => {
      this.showHints = e.target.checked;
      this.sfx.playPop();
    });

    this.timerSelect.addEventListener("change", (e) => {
      this.roundDurationSec = parseInt(e.target.value, 10);
      this.sfx.playPop();
    });

    // بدء اللعب الفعلي من الصفحة 3
    this.btnStartGame.addEventListener("click", () => this.startNewRound());

    this.secretCardBox.addEventListener("click", () => this.toggleCardReveal());
    this.btnPassNext.addEventListener("click", () => this.nextPassTurn());

    this.btnToggleTimer.addEventListener("click", () => this.toggleTimer());
    this.btnAddTime.addEventListener("click", () => this.addTimerSeconds(15));
    this.btnNewQuestion.addEventListener("click", () => this.changeSuggestedQuestionOrTarget());
    if (this.btnNextQuestionTurn) {
      this.btnNextQuestionTurn.addEventListener("click", () => this.nextQuestionTurn());
    }
    this.btnGoToVote.addEventListener("click", () => this.goToVotingPhase());

    this.btnConfirmVote.addEventListener("click", () => this.confirmVoting());
    if (this.btnRevealAccused) {
      this.btnRevealAccused.addEventListener("click", () => this.proceedFromVoteTallyToSuspense());
    }
    if (this.btnSuspenseContinue) {
      this.btnSuspenseContinue.addEventListener("click", () => {
        this.sfx.playPop();
        if (typeof this.suspenseNextCallback === "function") {
          this.suspenseNextCallback();
        }
      });
    }
    this.btnConfirmGuess.addEventListener("click", () => this.confirmImpostorGuess());

    this.btnPlayAgain.addEventListener("click", () => this.startNewRound());
    if (this.btnChangeCategories) {
      this.btnChangeCategories.addEventListener("click", () => {
        this.sfx.playPop();
        this.showScreen("categories");
      });
    }
    this.btnBackToSetup.addEventListener("click", () => {
      this.sfx.playPop();
      this.showScreen("dialect");
    });

    // زر الرجوع الذكي في الهيدر
    this.headerBackBtn.addEventListener("click", () => {
      this.sfx.playPop();
      if (this.activeScreenKey === "categories") {
        this.showScreen("dialect");
      } else if (this.activeScreenKey === "players") {
        this.showScreen("categories");
      } else if (this.activeScreenKey === "results") {
        this.showScreen("players");
      } else if (confirm("هل تريد إنهاء الجولة الحالية والعودة للإعدادات؟")) {
        clearInterval(this.timerInterval);
        clearInterval(this.suspenseInterval);
        this.showScreen("players");
      }
    });

    const soundToggle = document.getElementById("sound-toggle");
    if (soundToggle) {
      soundToggle.addEventListener("click", () => {
        this.sfx.soundEnabled = !this.sfx.soundEnabled;
        soundToggle.textContent = this.sfx.soundEnabled ? "🔊" : "🔇";
      });
    }
  }

  setDialect(dialectId, playSound = true) {
    if (!GAME_DIALECTS[dialectId]) return;
    this.currentDialectId = dialectId;

    if (playSound) this.sfx.playPop();

    Object.keys(this.dialectTabs).forEach(key => {
      if (this.dialectTabs[key]) {
        this.dialectTabs[key].classList.toggle("active", key === dialectId);
      }
    });

    const d = this.dialect;
    document.title = d.appHeader;

    if (this.brandLogoEl) this.brandLogoEl.textContent = d.gameTitle;
    if (this.brandTaglineEl) this.brandTaglineEl.textContent = d.tagline;
    if (this.dialectNextBtnTextEl) this.dialectNextBtnTextEl.textContent = d.dialectNextBtn;

    if (this.categoriesScreenSubEl) this.categoriesScreenSubEl.textContent = d.categoriesScreenSub;
    if (this.categoriesNextBtnTextEl) this.categoriesNextBtnTextEl.textContent = d.categoriesNextBtn;

    if (this.playersBoxTitleEl) this.playersBoxTitleEl.textContent = d.playersBoxTitle;
    if (this.playersBoxSubEl) this.playersBoxSubEl.textContent = d.playersBoxSub;
    if (this.playerInput) this.playerInput.placeholder = d.addPlayerPlaceholder;
    if (this.hintToggleLabelEl) this.hintToggleLabelEl.textContent = d.hintToggleLabel;
    if (this.timerSelectLabelEl) this.timerSelectLabelEl.textContent = d.timerSelectLabel;
    if (this.startBtnTextEl) this.startBtnTextEl.textContent = d.startBtnText;

    if (this.holdInstructionTextEl) this.holdInstructionTextEl.innerHTML = d.holdInstruction;
    if (this.nextPlayerBtnTextEl) this.nextPlayerBtnTextEl.textContent = d.nextPlayerBtn;
    if (this.btnNewQuestion) this.btnNewQuestion.textContent = d.btnNewQuestion;
    if (this.nextQuestionTurnTextEl) this.nextQuestionTurnTextEl.textContent = d.btnNextQuestionTurn;
    if (this.btnGoToVote) this.btnGoToVote.innerHTML = `<span>${d.readyToVoteBtn}</span>`;
    if (this.confirmVoteBtnTextEl) this.confirmVoteBtnTextEl.textContent = d.btnConfirmVote;
    if (this.confirmGuessBtnTextEl) this.confirmGuessBtnTextEl.textContent = d.btnConfirmGuess;
    if (this.playAgainBtnTextEl) this.playAgainBtnTextEl.textContent = d.playAgainBtn;
    if (this.btnChangeCategories) this.btnChangeCategories.textContent = d.changeCategoriesBtn;
    if (this.btnBackToSetup) this.btnBackToSetup.textContent = d.backToSetupBtn;

    if (this.activeScreenKey === "dialect") {
      this.headerTitleEl.textContent = d.appHeader;
    }

    if (d.defaultPlayers && this.players.length === 4) {
      const currentNames = this.players.map(p => p.name).join(",");
      const sudaneseDefault = GAME_DIALECTS.sudanese.defaultPlayers.join(",");
      const saudiDefault = GAME_DIALECTS.saudi.defaultPlayers.join(",");
      const egyptianDefault = GAME_DIALECTS.egyptian.defaultPlayers.join(",");

      if (currentNames === sudaneseDefault || currentNames === saudiDefault || currentNames === egyptianDefault) {
        this.players = d.defaultPlayers.map((name, i) => ({
          id: i + 1,
          name: name,
          score: 0
        }));
        this.renderPlayersList();
      }
    }

    this.renderCategoriesList();
  }

  // --- التبديل بين الشاشات وتحديث شريط الخطوات (Stepper) ---
  showScreen(screenKey) {
    this.activeScreenKey = screenKey;
    Object.values(this.screens).forEach(screen => {
      if (screen) screen.classList.remove("active");
    });
    if (this.screens[screenKey]) {
      this.screens[screenKey].classList.add("active");
    }

    // إظهار شريط الخطوات فقط في صفحات الإعداد الثلاث (1. اللهجة، 2. القسم، 3. الأسماء)
    const isSetupFlow = ["dialect", "categories", "players"].includes(screenKey);
    if (this.setupStepperEl) {
      this.setupStepperEl.style.display = isSetupFlow ? "flex" : "none";
    }

    if (isSetupFlow) {
      const order = ["dialect", "categories", "players"];
      const currentIdx = order.indexOf(screenKey);
      order.forEach((key, idx) => {
        const btn = this.stepButtons[key];
        if (btn) {
          btn.classList.toggle("active", idx === currentIdx);
          btn.classList.toggle("completed", idx < currentIdx);
        }
      });
    }

    const d = this.dialect;
    switch (screenKey) {
      case "dialect":
        this.headerTitleEl.textContent = d.appHeader;
        this.headerBackBtn.style.visibility = "hidden";
        break;
      case "categories":
        this.headerTitleEl.textContent = d.categoriesScreenHeader;
        this.headerBackBtn.style.visibility = "visible";
        break;
      case "players":
        this.headerTitleEl.textContent = d.playersScreenHeader;
        this.headerBackBtn.style.visibility = "visible";
        break;
      case "pass":
        this.headerTitleEl.textContent = d.passHeader;
        this.headerBackBtn.style.visibility = "visible";
        break;
      case "questions":
        this.headerTitleEl.textContent = d.questionsHeader;
        this.headerBackBtn.style.visibility = "visible";
        break;
      case "voting":
        this.headerTitleEl.textContent = d.votingHeader;
        this.headerBackBtn.style.visibility = "visible";
        break;
      case "suspense":
        this.headerTitleEl.textContent = d.suspenseHeader;
        this.headerBackBtn.style.visibility = "hidden";
        break;
      case "guess":
        this.headerTitleEl.textContent = d.guessHeader;
        this.headerBackBtn.style.visibility = "hidden";
        break;
      case "results":
        this.headerTitleEl.textContent = d.resultsHeader;
        this.headerBackBtn.style.visibility = "visible";
        break;
    }
  }

  addPlayer() {
    const name = this.playerInput.value.trim();
    if (!name) return;
    
    if (this.players.some(p => p.name.toLowerCase() === name.toLowerCase())) {
      alert("الاسم موجود مسبقاً، اختر اسماً آخر!");
      return;
    }

    if (this.players.length >= 14) {
      alert("الحد الأقصى للاعبين هو 14 لاعباً!");
      return;
    }

    this.players.push({
      id: this.nextPlayerId++,
      name: name,
      score: 0
    });

    this.playerInput.value = "";
    this.sfx.playPop();
    this.renderPlayersList();
  }

  removePlayer(playerId) {
    if (this.players.length <= 3) {
      alert("الحد الأدنى للعب هو 3 لاعبين!");
      return;
    }

    this.players = this.players.filter(p => p.id !== playerId);
    this.sfx.playPop();
    this.renderPlayersList();
  }

  renderPlayersList() {
    this.playersListContainer.innerHTML = "";
    this.players.forEach(player => {
      const card = document.createElement("div");
      card.className = "player-capsule";

      const infoGroup = document.createElement("div");
      infoGroup.className = "player-info-group";

      const avatar = document.createElement("div");
      avatar.className = "player-avatar";
      avatar.textContent = player.name.charAt(0);

      const nameSpan = document.createElement("span");
      nameSpan.className = "player-name";
      nameSpan.textContent = player.name;

      infoGroup.appendChild(avatar);
      infoGroup.appendChild(nameSpan);

      const removeBtn = document.createElement("button");
      removeBtn.className = "btn-remove-player";
      removeBtn.innerHTML = "✕";
      removeBtn.title = "حذف";
      removeBtn.addEventListener("click", () => this.removePlayer(player.id));

      card.appendChild(infoGroup);
      card.appendChild(removeBtn);
      this.playersListContainer.appendChild(card);
    });
  }

  renderCategoriesList() {
    if (!this.categoriesContainer) return;
    this.categoriesContainer.innerHTML = "";

    const allCategoryKeys = Object.keys(GAME_CATEGORIES);
    const isAllSelected = this.selectedCategories.length === allCategoryKeys.length;

    const allCard = document.createElement("div");
    allCard.className = "category-poster-card all-categories-banner" + (isAllSelected ? " selected" : "");
    allCard.style.setProperty("--cat-gradient", "linear-gradient(135deg, #0d9488 0%, #4f46e5 100%)");

    allCard.innerHTML = `
      <div class="cat-check-circle">✓</div>
      <div style="text-align: right; padding-right: 6px;">
        <div class="cat-poster-title" style="font-size: 1.2rem; margin-top: 0;">${this.dialect.allCategoriesLabel}</div>
        <div style="font-size: 0.85rem; opacity: 0.85; margin-top: 2px;">${this.dialect.allCategoriesSub}</div>
      </div>
      <div class="cat-main-icon" style="font-size: 2.8rem;">🎲</div>
    `;

    allCard.addEventListener("click", () => {
      if (isAllSelected) {
        this.selectedCategories = ["foods"];
      } else {
        this.selectedCategories = [...allCategoryKeys];
      }
      this.sfx.playPop();
      this.renderCategoriesList();
    });
    this.categoriesContainer.appendChild(allCard);

    Object.values(GAME_CATEGORIES).forEach(cat => {
      const isSelected = this.selectedCategories.includes(cat.id);
      const wordCount = getCategoryWordCount(cat.id, this.currentDialectId);

      const poster = document.createElement("div");
      poster.className = "category-poster-card" + (isSelected ? " selected" : "");
      if (cat.themeGradient) poster.style.setProperty("--cat-gradient", cat.themeGradient);

      const badgeHTML = cat.badge ? `<div class="cat-ribbon-badge">${cat.badge}</div>` : "";

      poster.innerHTML = `
        <div class="cat-check-circle">✓</div>
        ${badgeHTML}
        <div class="cat-visual-showcase">
          <div class="cat-main-icon">${cat.icon}</div>
          <div class="cat-sub-icons">${cat.subIcons || ""}</div>
        </div>
        <div>
          <div class="cat-poster-title">${cat.name}</div>
          <div class="cat-word-count-pill">${wordCount} كلمة</div>
        </div>
      `;

      poster.addEventListener("click", () => {
        if (isSelected) {
          if (this.selectedCategories.length > 1) {
            this.selectedCategories = this.selectedCategories.filter(id => id !== cat.id);
          }
        } else {
          this.selectedCategories.push(cat.id);
        }
        this.sfx.playPop();
        this.renderCategoriesList();
      });

      this.categoriesContainer.appendChild(poster);
    });
  }

  startNewRound() {
    if (this.players.length < 3) {
      alert("الرجاء إضافة 3 لاعبين على الأقل للبدء!");
      this.showScreen("players");
      return;
    }

    if (this.selectedCategories.length === 0) {
      this.selectedCategories = ["foods"];
    }

    const randomCatId = this.selectedCategories[Math.floor(Math.random() * this.selectedCategories.length)];
    this.currentCategory = GAME_CATEGORIES[randomCatId];

    const wordsPool = getWordsForCategoryAndDialect(this.currentCategory.id, this.currentDialectId);
    this.secretWord = wordsPool[Math.floor(Math.random() * wordsPool.length)];

    const shuffledPlayers = [...this.players].sort(() => 0.5 - Math.random());
    const impostorCount = Math.min(this.impostorCount, Math.floor(this.players.length / 2));
    this.impostorPlayerIds = shuffledPlayers.slice(0, impostorCount).map(p => p.id);

    this.assignedRoles = shuffledPlayers.map(player => ({
      player: player,
      isImpostor: this.impostorPlayerIds.includes(player.id)
    }));

    this.passTurnIndex = 0;
    this.cardIsRevealed = false;
    this.selectedAccusedPlayerId = null;
    this.selectedGuessWord = null;

    this.sfx.playReveal();
    this.showScreen("pass");
    this.setupPassTurnUI();
  }

  setupPassTurnUI() {
    this.cardIsRevealed = false;
    this.secretCardBox.classList.remove("revealed");
    this.btnPassNext.style.display = "none";

    const d = this.dialect;
    const currentTurn = this.assignedRoles[this.passTurnIndex];
    if (this.playerTurnBadgeEl) this.playerTurnBadgeEl.textContent = d.passTurnBadge;
    this.playerTurnNameEl.textContent = currentTurn.player.name;

    if (currentTurn.isImpostor) {
      this.roleTitleEl.className = "role-title-impostor";
      this.roleTitleEl.textContent = d.impostorTitle;
      
      let hintHTML = "";
      if (this.showHints) {
        hintHTML = `<div class="hint-pill">${d.hintPrefix} (${this.currentCategory.name})</div>`;
      }

      this.roleDetailsEl.innerHTML = `
        <div class="role-desc-impostor">
          ${d.impostorDesc}
        </div>
        ${hintHTML}
      `;
    } else {
      this.roleTitleEl.className = "role-title-citizen";
      this.roleTitleEl.textContent = d.citizenTitle;
      
      this.roleDetailsEl.innerHTML = `
        <div class="role-desc-citizen">${d.citizenDescPrefix}</div>
        <div class="secret-word-display">${this.secretWord}</div>
        <div class="role-desc-citizen" style="margin-top: 6px;">
          القسم: <strong style="color: var(--brand-teal);">${this.currentCategory.name}</strong><br>
          ${d.citizenDescSuffix}
        </div>
      `;
    }
  }

  toggleCardReveal() {
    if (!this.cardIsRevealed) {
      this.cardIsRevealed = true;
      this.secretCardBox.classList.add("revealed");
      this.btnPassNext.style.display = "flex";
      this.sfx.playReveal();
    }
  }

  nextPassTurn() {
    this.sfx.playPop();
    this.passTurnIndex++;
    
    if (this.passTurnIndex < this.assignedRoles.length) {
      this.setupPassTurnUI();
    } else {
      this.startQuestionsPhase();
    }
  }

  // --- 5. فقرة الأسئلة والمؤقت المستقل لكل لاعب (سؤالان لكل لاعب، مخصصة للموضوع بدون أي تكرار) ---
  drawNextUniqueQuestion() {
    if (!this.unusedQuestionsPool || this.unusedQuestionsPool.length === 0) {
      const d = this.dialect;
      return d.suggestedQuestions[0] || "اشرح لينا علاقتك بالحاجة دي من غير ما تذكر اسمها؟";
    }
    if (this.questionPoolCursor >= this.unusedQuestionsPool.length) {
      // في حال استهلك اللاعبون كل الأسئلة (أكثر من 40 تبديل)، نعيد خلط القائمة
      this.unusedQuestionsPool = this.shuffleArray([...this.unusedQuestionsPool]);
      this.questionPoolCursor = 0;
    }
    const q = this.unusedQuestionsPool[this.questionPoolCursor];
    this.questionPoolCursor++;
    return q;
  }

  startQuestionsPhase() {
    this.showScreen("questions");

    // 1. جلب بنك الأسئلة المخصص لموضوع الجولة الحالي ولهجة اللعب (أكثر من 35 سؤالاً متخصصاً لكل موضوع)
    const categoryId = this.currentCategory ? this.currentCategory.id : "foods";
    const rawCategoryQuestions = typeof getQuestionsForCategoryAndDialect === "function"
      ? getQuestionsForCategoryAndDialect(categoryId, this.currentDialectId)
      : [...this.dialect.suggestedQuestions];

    // خلط الأسئلة عشوائياً (Fisher-Yates) لضمان عدم تكرار أي سؤال بين اللاعبين نهائياً
    this.unusedQuestionsPool = this.shuffleArray([...rawCategoryQuestions]);
    this.questionPoolCursor = 0;

    // 2. تجهيز جدول الأسئلة على جولتين (مرتين لكل لاعب مضاف: السؤال الأول + السؤال الثاني)
    // في كل جولة يسأل اللاعب طرفاً ثانياً مختلفاً مع سؤال مخصص محضّر له مسبقاً
    this.questionOrder = [];
    const numPlayers = this.players.length;

    // ترتيب عشوائي للمستهدفين في الجولة الأولى والجولة الثانية بحيث يسأل كل لاعب شخصين مختلفين
    for (let roundNum = 1; roundNum <= 2; roundNum++) {
      this.players.forEach((asker, idx) => {
        const otherPlayers = this.players.filter(p => p.id !== asker.id);
        let targetPlayer = otherPlayers[0];

        if (otherPlayers.length > 0) {
          if (roundNum === 1) {
            // في الجولة الأولى يسأل اللاعب الذي يليه أو طرفاً عشوائياً
            const shiftIdx = idx % otherPlayers.length;
            targetPlayer = otherPlayers[shiftIdx];
          } else {
            // في الجولة الثانية نضمن اختيار طرف ثانٍ مختلف عن الجولة الأولى (إن كان عدد اللاعبين 3 فأكثر)
            const round1Turn = this.questionOrder.find(t => t.asker.id === asker.id && t.roundNum === 1);
            const candidates = otherPlayers.filter(p => !round1Turn || p.id !== round1Turn.target.id);
            const pool = candidates.length > 0 ? candidates : otherPlayers;
            targetPlayer = pool[(idx + 1) % pool.length];
          }
        }

        this.questionOrder.push({
          asker: asker,
          target: targetPlayer,
          roundNum: roundNum,
          question: this.drawNextUniqueQuestion()
        });
      });
    }

    this.questionTurnIndex = 0;
    this.setupPlayerQuestionTurn();
  }

  setupPlayerQuestionTurn() {
    clearInterval(this.timerInterval);
    const d = this.dialect;
    const totalTurns = this.questionOrder.length;
    const currentTurn = this.questionOrder[this.questionTurnIndex];
    const currentAsker = currentTurn.asker;
    this.currentTargetPlayer = currentTurn.target;

    // تحديث عداد تقدم الأسئلة (الجولة 1 أو 2 من 2 • السؤال X من Y)
    if (this.questionTurnCounterBadgeEl && typeof d.questionTurnCounter === "function") {
      this.questionTurnCounterBadgeEl.textContent = d.questionTurnCounter(
        this.questionTurnIndex + 1,
        totalTurns,
        currentTurn.roundNum
      );
    }

    // تحديث كبسولات اللاعبين مع إظهار تقدم كل لاعب في السؤالين (1/2، 2/2، ✓✓)
    if (this.questionPlayersPillsEl) {
      this.questionPlayersPillsEl.innerHTML = "";
      this.players.forEach((p) => {
        // حساب كم سؤالاً أنجزه هذا اللاعب حتى الآن
        const completedCount = this.questionOrder
          .slice(0, this.questionTurnIndex)
          .filter(t => t.asker.id === p.id).length;
        const isCurrentAsker = currentAsker.id === p.id;

        const pill = document.createElement("div");
        if (completedCount >= 2) {
          pill.className = "q-player-pill done";
          pill.innerHTML = `<span>✓✓</span><span>${p.name} (2/2)</span>`;
        } else if (isCurrentAsker) {
          pill.className = "q-player-pill active";
          pill.innerHTML = `<span>🎤</span><span>${p.name} (${currentTurn.roundNum}/2)</span>`;
        } else if (completedCount === 1) {
          pill.className = "q-player-pill";
          pill.innerHTML = `<span>✓⏳</span><span>${p.name} (1/2)</span>`;
        } else {
          pill.className = "q-player-pill";
          pill.innerHTML = `<span>⏳</span><span>${p.name} (0/2)</span>`;
        }
        this.questionPlayersPillsEl.appendChild(pill);
      });
    }

    // تحديث نص من يسأل من + السؤال المحضّر الخاص بهذا اللاعب والمرتبط بموضوع الكلمة
    this.askerTargetEl.innerHTML = d.whoAsksWho(
      currentAsker.name,
      this.currentTargetPlayer.name,
      currentTurn.roundNum
    );
    this.suggestedQuestionEl.textContent = `💡 "${currentTurn.question}"`;

    // تحديث عنوان العداد باسم اللاعب الحالي
    if (this.timerRemainingLabelEl) {
      this.timerRemainingLabelEl.textContent = typeof d.timerRemainingLabel === "function"
        ? d.timerRemainingLabel(currentAsker.name)
        : d.timerRemainingLabel;
    }

    // تحديث نص زر الانتقال للسؤال التالي أو التصويت إذا كان السؤال الأخير
    if (this.nextQuestionTurnTextEl) {
      if (this.questionTurnIndex === totalTurns - 1) {
        this.nextQuestionTurnTextEl.textContent = "إنهاء الأسئلة والذهاب للتصويت 🚨";
      } else {
        const nextTurn = this.questionOrder[this.questionTurnIndex + 1];
        this.nextQuestionTurnTextEl.textContent = `${d.btnNextQuestionTurn} (${nextTurn.asker.name} - ج${nextTurn.roundNum})`;
      }
    }

    // ضبط عداد الوقت الخاص بهذا اللاعب وبدء العد التنازلي فوراً
    this.timerRemaining = this.roundDurationSec;
    this.updateTimerDisplay();
    this.startTimer();
  }

  changeSuggestedQuestionOrTarget() {
    if (this.players.length < 2 || !this.questionOrder.length) return;
    const d = this.dialect;
    const currentTurn = this.questionOrder[this.questionTurnIndex];
    const currentAsker = currentTurn.asker;
    const otherPlayers = this.players.filter(p => p.id !== currentAsker.id);

    // اختيار طرف مستهدف آخر إن وُجد
    if (otherPlayers.length > 1 && this.currentTargetPlayer) {
      const differentTargets = otherPlayers.filter(p => p.id !== this.currentTargetPlayer.id);
      this.currentTargetPlayer = differentTargets[Math.floor(Math.random() * differentTargets.length)];
    } else {
      this.currentTargetPlayer = otherPlayers[0];
    }

    // سحب سؤال جديد فريد من بنك أسئلة الموضوع الحالي لم يُعرض لأي لاعب من قبل
    const newUniqueQ = this.drawNextUniqueQuestion();
    currentTurn.target = this.currentTargetPlayer;
    currentTurn.question = newUniqueQ;

    this.askerTargetEl.innerHTML = d.whoAsksWho(
      currentAsker.name,
      this.currentTargetPlayer.name,
      currentTurn.roundNum
    );
    this.suggestedQuestionEl.textContent = `💡 "${newUniqueQ}"`;
    this.sfx.playPop();
  }

  nextQuestionTurn() {
    clearInterval(this.timerInterval);
    this.sfx.playPop();

    if (this.questionTurnIndex < this.questionOrder.length - 1) {
      this.questionTurnIndex++;
      this.setupPlayerQuestionTurn();
    } else {
      // انتهت أدوار جميع اللاعبين
      this.goToVotingPhase();
    }
  }

  startTimer() {
    clearInterval(this.timerInterval);
    this.timerIsRunning = true;
    this.btnToggleTimer.textContent = "⏸️ إيقاف";

    this.timerInterval = setInterval(() => {
      this.timerRemaining--;
      this.updateTimerDisplay();

      if (this.timerRemaining <= 5 && this.timerRemaining > 0) {
        this.sfx.playTick();
      }

      if (this.timerRemaining <= 0) {
        clearInterval(this.timerInterval);
        this.timerIsRunning = false;
        this.sfx.playBuzzer();

        // عند انتهاء وقت اللاعب الحالي، ننتقل تلقائياً للاعب التالي أو للتصويت إذا كان الأخير
        if (this.questionTurnIndex < this.questionOrder.length - 1) {
          this.questionTurnIndex++;
          this.setupPlayerQuestionTurn();
        } else {
          alert(this.dialect.allTurnsCompletedAlert);
          this.goToVotingPhase();
        }
      }
    }, 1000);
  }

  toggleTimer() {
    if (this.timerIsRunning) {
      clearInterval(this.timerInterval);
      this.timerIsRunning = false;
      this.btnToggleTimer.textContent = "▶️ استئناف";
    } else {
      if (this.timerRemaining <= 0) {
        this.timerRemaining = this.roundDurationSec;
      }
      this.startTimer();
    }
    this.sfx.playPop();
  }

  addTimerSeconds(sec) {
    this.timerRemaining += sec;
    this.updateTimerDisplay();
    this.sfx.playPop();
  }

  updateTimerDisplay() {
    const mins = Math.floor(this.timerRemaining / 60);
    const secs = this.timerRemaining % 60;
    this.timerDisplayEl.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    if (this.timerDisplayEl) {
      this.timerDisplayEl.classList.toggle("urgent", this.timerRemaining <= 5 && this.timerRemaining > 0);
    }
  }

  goToVotingPhase() {
    clearInterval(this.timerInterval);
    this.sfx.playPop();
    this.selectedAccusedPlayerId = null;
    this.votingOrder = [...this.players];
    this.votingTurnIndex = 0;
    this.playerVotes = [];
    this.currentVoterChoiceId = null;

    this.showScreen("voting");
    if (this.votingTurnProgressBoxEl) this.votingTurnProgressBoxEl.style.display = "flex";
    if (this.votingActiveStageEl) this.votingActiveStageEl.style.display = "block";
    if (this.votingResultsStageEl) this.votingResultsStageEl.style.display = "none";

    this.setupPlayerVotingTurn();
  }

  setupPlayerVotingTurn() {
    const d = this.dialect;
    const totalPlayers = this.votingOrder.length;
    const currentVoter = this.votingOrder[this.votingTurnIndex];

    this.currentVoterChoiceId = null;
    this.btnConfirmVote.disabled = true;
    this.btnConfirmVote.style.opacity = "0.5";

    // تحديث شارة عداد التصويت (تصويت اللاعب X من Y)
    if (this.votingTurnCounterBadgeEl && typeof d.voteTurnCounter === "function") {
      this.votingTurnCounterBadgeEl.textContent = d.voteTurnCounter(this.votingTurnIndex + 1, totalPlayers);
    }

    // تحديث كبسولات تقدم اللاعبين في التصويت
    if (this.votingPlayersPillsEl) {
      this.votingPlayersPillsEl.innerHTML = "";
      this.votingOrder.forEach((p, idx) => {
        const pill = document.createElement("div");
        if (idx < this.votingTurnIndex) {
          pill.className = "q-player-pill done";
          pill.innerHTML = `<span>✓</span><span>${p.name}</span>`;
        } else if (idx === this.votingTurnIndex) {
          pill.className = "q-player-pill active";
          pill.innerHTML = `<span>🗳️</span><span>${p.name}</span>`;
        } else {
          pill.className = "q-player-pill";
          pill.innerHTML = `<span>⏳</span><span>${p.name}</span>`;
        }
        this.votingPlayersPillsEl.appendChild(pill);
      });
    }

    // تحديث عنوان من يصوّت الآن
    if (this.votingInstructionsEl) {
      this.votingInstructionsEl.innerHTML = typeof d.voterPrompt === "function"
        ? d.voterPrompt(currentVoter.name)
        : d.votingInstruction;
    }

    // تحديث نص زر تأكيد صوت اللاعب الحالي
    if (this.confirmVoteBtnTextEl) {
      const nextVoterName = (this.votingTurnIndex < totalPlayers - 1)
        ? this.votingOrder[this.votingTurnIndex + 1].name
        : null;
      this.confirmVoteBtnTextEl.textContent = typeof d.btnConfirmPlayerVote === "function"
        ? d.btnConfirmPlayerVote(nextVoterName)
        : d.btnConfirmVote;
    }

    this.renderVotingList();
  }

  renderVotingList() {
    this.votingListContainer.innerHTML = "";
    const currentVoter = this.votingOrder[this.votingTurnIndex];

    // كل لاعب يصوت على أي لاعب آخر غير نفسه
    const candidates = this.players.filter(p => !currentVoter || p.id !== currentVoter.id);

    candidates.forEach(player => {
      const item = document.createElement("div");
      item.className = "vote-item" + (this.currentVoterChoiceId === player.id ? " selected" : "");
      
      const badge = document.createElement("div");
      badge.className = "vote-badge";
      badge.innerHTML = this.currentVoterChoiceId === player.id ? "🎯" : "🕵️";

      const nameSpan = document.createElement("span");
      nameSpan.textContent = player.name;

      item.appendChild(badge);
      item.appendChild(nameSpan);

      item.addEventListener("click", () => {
        this.currentVoterChoiceId = player.id;
        this.btnConfirmVote.disabled = false;
        this.btnConfirmVote.style.opacity = "1";
        this.sfx.playPop();
        this.renderVotingList();
      });

      this.votingListContainer.appendChild(item);
    });
  }

  confirmVoting() {
    if (!this.currentVoterChoiceId) return;

    const currentVoter = this.votingOrder[this.votingTurnIndex];
    const targetPlayer = this.players.find(p => p.id === this.currentVoterChoiceId);

    this.playerVotes.push({
      voterId: currentVoter.id,
      voterName: currentVoter.name,
      targetId: targetPlayer.id,
      targetName: targetPlayer.name
    });

    this.sfx.playPop();

    if (this.votingTurnIndex < this.votingOrder.length - 1) {
      this.votingTurnIndex++;
      this.setupPlayerVotingTurn();
    } else {
      // جميع اللاعبين صوّتوا ➔ عرض شاشة نتيجة فرز الأصوات
      this.showVotingTallyResults();
    }
  }

  showVotingTallyResults() {
    this.sfx.playReveal();
    const d = this.dialect;

    if (this.votingTurnProgressBoxEl) this.votingTurnProgressBoxEl.style.display = "none";
    if (this.votingActiveStageEl) this.votingActiveStageEl.style.display = "none";
    if (this.votingResultsStageEl) this.votingResultsStageEl.style.display = "flex";

    // حساب عدد الأصوات لكل لاعب
    const voteCounts = {};
    this.players.forEach(p => {
      voteCounts[p.id] = 0;
    });
    this.playerVotes.forEach(v => {
      if (voteCounts[v.targetId] !== undefined) {
        voteCounts[v.targetId]++;
      }
    });

    // ترتيب اللاعبين تنازلياً حسب عدد الأصوات
    const sortedTally = [...this.players]
      .map(p => ({
        player: p,
        votes: voteCounts[p.id] || 0
      }))
      .sort((a, b) => b.votes - a.votes);

    const topCandidate = sortedTally[0];
    this.selectedAccusedPlayerId = topCandidate.player.id;

    if (this.voteTallyHeaderEl) {
      this.voteTallyHeaderEl.textContent = d.voteTallyHeader || "📊 نتيجة فرز الأصوات!";
    }
    if (this.voteTallySubEl && typeof d.voteTallySub === "function") {
      this.voteTallySubEl.innerHTML = d.voteTallySub(topCandidate.player.name, topCandidate.votes);
    }

    // بناء أشرطة التصويت المرئية لكل لاعب
    const totalVotesCast = this.playerVotes.length || 1;
    if (this.voteBarsContainerEl) {
      this.voteBarsContainerEl.innerHTML = "";
      sortedTally.forEach((item, idx) => {
        const pct = Math.round((item.votes / totalVotesCast) * 100);
        const isTop = idx === 0 && item.votes > 0;

        const row = document.createElement("div");
        row.className = "vote-bar-row" + (isTop ? " top-accused" : "");

        const countText = typeof d.voteCountLabel === "function"
          ? d.voteCountLabel(item.votes)
          : `${item.votes} أصوات`;

        row.innerHTML = `
          <div class="vote-bar-fill" style="width: ${pct}%;"></div>
          <div class="vote-bar-content">
            <div class="vote-bar-name">
              <span>${isTop ? "🎯" : "👤"}</span>
              <span>${item.player.name}</span>
            </div>
            <div class="vote-bar-count-badge">${countText} (${pct}%)</div>
          </div>
        `;
        this.voteBarsContainerEl.appendChild(row);
      });
    }

    // بناء سجل من صوّت على من
    if (this.voteLogTitleEl && d.voteLogTitle) {
      this.voteLogTitleEl.textContent = d.voteLogTitle;
    }
    if (this.voteLogListEl) {
      this.voteLogListEl.innerHTML = "";
      this.playerVotes.forEach(v => {
        const pill = document.createElement("div");
        pill.className = "vote-log-pill";
        pill.innerHTML = `
          <span>🗳️ ${v.voterName}</span>
          <span>⬅️</span>
          <span class="vote-log-target">${v.targetName}</span>
        `;
        this.voteLogListEl.appendChild(pill);
      });
    }

    // تحديث زر كشف حقيقة المتهم الأعلى أصواتاً
    if (this.revealAccusedBtnTextEl && typeof d.btnRevealAccused === "function") {
      this.revealAccusedBtnTextEl.textContent = d.btnRevealAccused(topCandidate.player.name);
    }
  }

  proceedFromVoteTallyToSuspense() {
    if (!this.selectedAccusedPlayerId) return;
    const accusedPlayer = this.players.find(p => p.id === this.selectedAccusedPlayerId);
    const isActuallyImpostor = this.impostorPlayerIds.includes(this.selectedAccusedPlayerId);
    const d = this.dialect;

    this.runVotingSuspenseReveal(accusedPlayer, isActuallyImpostor, d);
  }

  runVotingSuspenseReveal(accusedPlayer, isActuallyImpostor, d) {
    clearInterval(this.suspenseInterval);
    this.showScreen("suspense");

    // تهيئة عناصر شاشة الترقب
    this.suspenseAccusedBannerEl.innerHTML = d.suspenseAccusedLabel(accusedPlayer.name);
    this.suspenseCenterCircleEl.className = "suspense-center-circle";
    this.suspenseCountdownNumEl.textContent = "3";
    this.suspenseStatusTextEl.textContent = d.suspenseStep1;
    this.suspenseStatusTextEl.style.display = "block";
    this.suspenseVerdictBoxEl.style.display = "none";
    this.btnSuspenseContinue.style.display = "none";

    // إظهار حلقات الرادار
    const rings = this.suspenseRadarWrapEl.querySelectorAll(".radar-ring");
    rings.forEach(r => (r.style.display = "block"));

    let count = 3;
    this.sfx.playHeartbeat(1);

    this.suspenseInterval = setInterval(() => {
      count--;
      if (count === 2) {
        this.suspenseCountdownNumEl.textContent = "2";
        this.suspenseStatusTextEl.textContent = d.suspenseStep2;
        this.sfx.playHeartbeat(2);
      } else if (count === 1) {
        this.suspenseCountdownNumEl.textContent = "1";
        this.sfx.playHeartbeat(3);
      } else {
        clearInterval(this.suspenseInterval);
        rings.forEach(r => (r.style.display = "none"));
        this.suspenseStatusTextEl.style.display = "none";
        this.suspenseVerdictBoxEl.style.display = "block";

        if (isActuallyImpostor) {
          this.sfx.playVictory();
          this.suspenseCenterCircleEl.className = "suspense-center-circle revealed-caught";
          this.suspenseCountdownNumEl.textContent = "🎯";
          this.suspenseVerdictBoxEl.className = "suspense-verdict-box caught";
          this.suspenseVerdictTitleEl.textContent = d.suspenseCaughtBadge(accusedPlayer.name);
          this.suspenseVerdictSubEl.textContent = d.suspenseCaughtSub;
          this.suspenseContinueTextEl.textContent = d.suspenseCaughtBtn;
          this.btnSuspenseContinue.style.display = "flex";
          this.suspenseNextCallback = () => this.startGuessPhase(accusedPlayer);
        } else {
          this.sfx.playBuzzer();
          this.suspenseCenterCircleEl.className = "suspense-center-circle revealed-innocent";
          this.suspenseCountdownNumEl.textContent = "😱";
          this.suspenseVerdictBoxEl.className = "suspense-verdict-box innocent";
          this.suspenseVerdictTitleEl.textContent = d.suspenseInnocentBadge(accusedPlayer.name);
          this.suspenseVerdictSubEl.textContent = d.suspenseInnocentSub;
          this.suspenseContinueTextEl.textContent = d.suspenseInnocentBtn;
          this.btnSuspenseContinue.style.display = "flex";
          this.suspenseNextCallback = () => this.handleInnocentAccused(accusedPlayer);
        }
      }
    }, 950);
  }

  startGuessPhase(impostorPlayer) {
    this.showScreen("guess");
    this.accusedNameHeaderEl.innerHTML = this.dialect.guessInstruction(impostorPlayer.name);
    
    this.guessChoices = generateGuessOptions(this.secretWord, this.currentCategory.id, this.currentDialectId);
    this.selectedGuessWord = null;
    this.btnConfirmGuess.disabled = true;
    this.btnConfirmGuess.style.opacity = "0.5";

    this.renderGuessOptionsList();
  }

  renderGuessOptionsList() {
    this.guessOptionsListContainer.innerHTML = "";

    this.guessChoices.forEach(choice => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "guess-option-btn" + (this.selectedGuessWord === choice ? " selected" : "");
      btn.textContent = choice;

      btn.addEventListener("click", () => {
        this.selectedGuessWord = choice;
        this.btnConfirmGuess.disabled = false;
        this.btnConfirmGuess.style.opacity = "1";
        this.sfx.playPop();
        this.renderGuessOptionsList();
      });

      this.guessOptionsListContainer.appendChild(btn);
    });
  }

  confirmImpostorGuess() {
    if (!this.selectedGuessWord) return;

    const d = this.dialect;
    const impostorPlayer = this.players.find(p => p.id === this.selectedAccusedPlayerId);
    const guessedCorrectly = (this.selectedGuessWord === this.secretWord);

    // لحظة ترقب سريعة ومشوقة قبل كشف نتيجة تخمين الكلمة السرية
    clearInterval(this.suspenseInterval);
    this.showScreen("suspense");

    this.suspenseAccusedBannerEl.innerHTML = d.suspenseGuessLabel(impostorPlayer.name, this.selectedGuessWord);
    this.suspenseCenterCircleEl.className = "suspense-center-circle";
    this.suspenseCountdownNumEl.textContent = "3";
    this.suspenseStatusTextEl.textContent = d.suspenseGuessStep1;
    this.suspenseStatusTextEl.style.display = "block";
    this.suspenseVerdictBoxEl.style.display = "none";
    this.btnSuspenseContinue.style.display = "none";

    const rings = this.suspenseRadarWrapEl.querySelectorAll(".radar-ring");
    rings.forEach(r => (r.style.display = "block"));

    let count = 3;
    this.sfx.playHeartbeat(1);

    this.suspenseInterval = setInterval(() => {
      count--;
      if (count === 2) {
        this.suspenseCountdownNumEl.textContent = "2";
        this.suspenseStatusTextEl.textContent = d.suspenseGuessStep2;
        this.sfx.playHeartbeat(2);
      } else if (count === 1) {
        this.suspenseCountdownNumEl.textContent = "1";
        this.sfx.playHeartbeat(3);
      } else {
        clearInterval(this.suspenseInterval);
        if (guessedCorrectly) {
          this.sfx.playVictory();
          impostorPlayer.score += 100;
          this.showRoundResults({
            verdict: d.verdictImpostorGuessed(impostorPlayer.name),
            explanation: d.descImpostorGuessed(impostorPlayer.name, this.secretWord),
            pointsAwarded: d.pointsImpostorGuessed(impostorPlayer.name)
          });
        } else {
          this.sfx.playVictory();
          this.players.forEach(p => {
            if (!this.impostorPlayerIds.includes(p.id)) {
              p.score += 100;
            }
          });
          this.showRoundResults({
            verdict: d.verdictCitizensWin,
            explanation: d.descCitizensWin(impostorPlayer.name, this.secretWord),
            pointsAwarded: d.pointsCitizensWin
          });
        }
      }
    }, 900);
  }

  handleInnocentAccused(accusedPlayer) {
    this.sfx.playBuzzer();
    const d = this.dialect;
    const actualImpostorNames = this.players
      .filter(p => this.impostorPlayerIds.includes(p.id))
      .map(p => p.name)
      .join(" و ");

    this.players.forEach(p => {
      if (this.impostorPlayerIds.includes(p.id)) {
        p.score += 150;
      }
    });

    this.showRoundResults({
      verdict: d.verdictImpostorTricked,
      explanation: d.descImpostorTricked(accusedPlayer.name, actualImpostorNames, this.secretWord),
      pointsAwarded: d.pointsImpostorTricked(actualImpostorNames)
    });
  }

  showRoundResults(resultData) {
    this.showScreen("results");
    this.resultVerdictEl.textContent = resultData.verdict;
    this.resultExplanationEl.innerHTML = `
      <p style="font-size: 1.05rem; line-height: 1.65; color: var(--text-main); margin-bottom: 8px;">${resultData.explanation}</p>
      <div style="color: var(--brand-amber); font-weight: 800; font-size: 1.05rem; margin-top: 8px;">${resultData.pointsAwarded}</div>
    `;

    const sortedPlayers = [...this.players].sort((a, b) => b.score - a.score);
    this.scoreboardBody.innerHTML = "";

    sortedPlayers.forEach((p, index) => {
      const tr = document.createElement("tr");
      let medal = "";
      if (index === 0) medal = "🥇 ";
      else if (index === 1) medal = "🥈 ";
      else if (index === 2) medal = "🥉 ";

      tr.innerHTML = `
        <td>${medal}${p.name}</td>
        <td class="score-points">${p.score} نقطة</td>
      `;
      this.scoreboardBody.appendChild(tr);
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  window.game = new FaheyGame();
});
