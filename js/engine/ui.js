/**
 * ui.js - User Interface Management
 * Handles screen rendering, transitions, navigation, and input
 */

import * as Game from './game.js';
import { validateAnswer } from './math.js';

// Module references (set during initialization)
let Locations = null;
let Lessons = null;
let Puzzles = null;

// Current puzzle state
let currentPuzzle = null;
let puzzleQueue = [];

// Intro story text
const introStory = [
    "The storm came without warning...",
    "Your vessel, caught in the fury of the tempest, was torn asunder upon the rocks.",
    "You awaken on an unfamiliar shore, the wreckage of your ship scattered across the sand.",
    "Before you rises an island shrouded in mist—ancient structures peek through the fog.",
    "As you explore, you discover inscriptions in a mathematical language of limits and infinities.",
    "The island's name whispers through the wind: Infinitia.",
    "Eight runes of power are scattered across this land, each guarded by mathematical secrets.",
    "Master these secrets, collect the runes, and perhaps... you will find your way home."
];

/**
 * Initialize UI with content modules
 */
export function init(locations, lessons, puzzles) {
    Locations = locations;
    Lessons = lessons;
    Puzzles = puzzles;

    setupEventListeners();
    updateContinueButton();
}

/**
 * Set up all event listeners
 */
function setupEventListeners() {
    // Title screen
    document.getElementById('new-game-btn').addEventListener('click', startNewGame);
    document.getElementById('continue-btn').addEventListener('click', continueGame);

    // Intro screen
    document.getElementById('skip-intro-btn').addEventListener('click', skipIntro);

    // Map screen
    document.querySelectorAll('.map-region').forEach(region => {
        region.addEventListener('click', () => {
            const regionId = region.dataset.region;
            if (!region.classList.contains('locked')) {
                enterRegion(regionId);
            }
        });
    });
    document.getElementById('open-portal-btn').addEventListener('click', openPortal);

    // Region screen
    document.getElementById('back-to-map-btn').addEventListener('click', () => showScreen('map-screen'));

    // Lesson screen
    document.getElementById('back-to-region-btn').addEventListener('click', backToRegion);
    document.getElementById('start-practice-btn').addEventListener('click', startPractice);

    // Puzzle screen
    document.getElementById('back-to-lesson-btn').addEventListener('click', backToLesson);
    document.getElementById('submit-numerical-btn').addEventListener('click', submitNumericalAnswer);
    document.getElementById('next-puzzle-btn').addEventListener('click', nextPuzzle);

    // Numerical input enter key
    document.getElementById('numerical-answer').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            submitNumericalAnswer();
        }
    });

    // Rune screen
    document.getElementById('claim-rune-btn').addEventListener('click', claimRune);

    // Victory screen
    document.getElementById('credits-btn').addEventListener('click', () => showScreen('title-screen'));
}

/**
 * Update continue button state
 */
function updateContinueButton() {
    const continueBtn = document.getElementById('continue-btn');
    continueBtn.disabled = !Game.hasSavedGame();
}

/**
 * Show a specific screen
 */
export function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');

    // Render math after screen transition
    setTimeout(renderMath, 100);
}

/**
 * Render KaTeX math expressions
 */
function renderMath() {
    if (typeof renderMathInElement === 'function') {
        renderMathInElement(document.body, {
            delimiters: [
                { left: '$$', right: '$$', display: true },
                { left: '$', right: '$', display: false },
                { left: '\\[', right: '\\]', display: true },
                { left: '\\(', right: '\\)', display: false }
            ],
            throwOnError: false
        });
    }
}

// ============================================
// TITLE SCREEN
// ============================================

function startNewGame() {
    Game.newGame();
    showIntro();
}

function continueGame() {
    Game.initGame();
    if (Game.hasSeenIntro()) {
        showMap();
    } else {
        showIntro();
    }
}

// ============================================
// INTRO SCREEN
// ============================================

function showIntro() {
    showScreen('intro-screen');
    const textContainer = document.getElementById('intro-text');
    textContainer.innerHTML = '';

    // Animate story text
    introStory.forEach((line, index) => {
        setTimeout(() => {
            const p = document.createElement('p');
            p.textContent = line;
            p.style.animationDelay = '0s';
            textContainer.appendChild(p);

            // Auto-advance after all text shown
            if (index === introStory.length - 1) {
                setTimeout(() => {
                    Game.markIntroSeen();
                    showMap();
                }, 4000);
            }
        }, index * 2500);
    });
}

function skipIntro() {
    Game.markIntroSeen();
    showMap();
}

// ============================================
// MAP SCREEN
// ============================================

export function showMap() {
    updateMapState();
    showScreen('map-screen');
}

function updateMapState() {
    // Update rune counter
    document.getElementById('runes-collected').textContent = Game.countRunes();

    // Update each region
    document.querySelectorAll('.map-region').forEach(regionEl => {
        const regionId = regionEl.dataset.region;
        const region = Locations.getRegion(regionId);

        // Check if region is available
        if (Game.isRegionAvailable(regionId)) {
            regionEl.classList.remove('locked');

            // Check if completed
            if (region && Game.hasRune(regionId)) {
                regionEl.classList.add('completed');
            } else {
                regionEl.classList.remove('completed');
            }
        } else {
            regionEl.classList.add('locked');
        }
    });

    // Show portal button if all runes collected
    const portalBtn = document.getElementById('open-portal-btn');
    if (Game.hasAllRunes()) {
        portalBtn.classList.remove('hidden');
    } else {
        portalBtn.classList.add('hidden');
    }
}

// ============================================
// REGION SCREEN
// ============================================

function enterRegion(regionId) {
    const region = Locations.getRegion(regionId);
    if (!region) return;

    Game.setCurrentRegion(regionId);

    // Update header
    document.getElementById('region-title').textContent = region.name;

    // Update description
    document.getElementById('region-description').innerHTML = region.description;

    // Calculate progress
    const topicIds = region.topics.map(t => t.id);
    const mastered = Game.countMasteredTopics(topicIds);
    document.getElementById('topics-mastered').textContent = mastered;
    document.getElementById('topics-total').textContent = region.topics.length;

    // Render topic cards
    const grid = document.getElementById('topics-grid');
    grid.innerHTML = '';

    region.topics.forEach(topic => {
        const card = createTopicCard(topic);
        grid.appendChild(card);
    });

    showScreen('region-screen');
}

function createTopicCard(topic) {
    const card = document.createElement('div');
    card.className = 'topic-card';

    const isMastered = Game.isTopicMastered(topic.id);
    if (isMastered) {
        card.classList.add('mastered');
    }

    const progress = Game.getTopicProgress(topic.id);
    const statusText = isMastered ? 'Mastered' : `${progress.streak}/${Game.MASTERY_THRESHOLD}`;

    card.innerHTML = `
        <div class="topic-info">
            <div class="topic-number">Topic ${topic.id}</div>
            <div class="topic-name">${topic.name}</div>
        </div>
        <div class="topic-status">${statusText}</div>
    `;

    card.addEventListener('click', () => openTopic(topic.id));
    return card;
}

function backToRegion() {
    const regionId = Game.getCurrentRegion();
    if (regionId) {
        enterRegion(regionId);
    } else {
        showMap();
    }
}

// ============================================
// LESSON SCREEN
// ============================================

function openTopic(topicId) {
    const lesson = Lessons.getLesson(topicId);
    if (!lesson) {
        console.error('Lesson not found:', topicId);
        return;
    }

    Game.setCurrentTopic(topicId);

    document.getElementById('lesson-title').textContent = `${topicId}: ${lesson.title}`;
    document.getElementById('lesson-content').innerHTML = lesson.content;

    showScreen('lesson-screen');
}

function backToLesson() {
    const topicId = Game.getCurrentTopic();
    if (topicId) {
        openTopic(topicId);
    } else {
        backToRegion();
    }
}

// ============================================
// PUZZLE SCREEN
// ============================================

function startPractice() {
    const topicId = Game.getCurrentTopic();
    if (!topicId) return;

    // Get puzzles for this topic
    const puzzles = Puzzles.getPuzzlesForTopic(topicId);
    if (!puzzles || puzzles.length === 0) {
        alert('No puzzles available for this topic yet.');
        return;
    }

    // Shuffle and create queue
    puzzleQueue = shuffleArray([...puzzles]);

    // Update header
    const lesson = Lessons.getLesson(topicId);
    document.getElementById('puzzle-topic-title').textContent = lesson ? lesson.title : `Topic ${topicId}`;

    // Update streak display
    updateStreakDisplay();

    // Show first puzzle
    showNextPuzzle();
    showScreen('puzzle-screen');
}

function showNextPuzzle() {
    // Check if already mastered
    const topicId = Game.getCurrentTopic();
    if (Game.isTopicMastered(topicId)) {
        showMasteryComplete();
        return;
    }

    // Get next puzzle (cycle through if needed)
    if (puzzleQueue.length === 0) {
        const puzzles = Puzzles.getPuzzlesForTopic(topicId);
        puzzleQueue = shuffleArray([...puzzles]);
    }

    currentPuzzle = puzzleQueue.shift();
    renderPuzzle(currentPuzzle);
}

function renderPuzzle(puzzle) {
    // Hide feedback
    document.getElementById('puzzle-feedback').classList.add('hidden');

    // Render question
    document.getElementById('puzzle-stem').innerHTML = puzzle.stem;

    // Render based on type
    const choicesContainer = document.getElementById('puzzle-choices');
    const inputArea = document.getElementById('puzzle-input-area');

    if (puzzle.type === 'multiple_choice') {
        inputArea.classList.add('hidden');
        choicesContainer.classList.remove('hidden');
        choicesContainer.innerHTML = '';

        puzzle.choices.forEach((choice, index) => {
            const btn = document.createElement('button');
            btn.className = 'puzzle-choice';
            btn.innerHTML = choice;
            btn.addEventListener('click', () => selectChoice(index));
            choicesContainer.appendChild(btn);
        });
    } else if (puzzle.type === 'numerical') {
        choicesContainer.classList.add('hidden');
        inputArea.classList.remove('hidden');
        document.getElementById('numerical-answer').value = '';
        document.getElementById('numerical-answer').focus();
    }

    renderMath();
}

function selectChoice(index) {
    // Disable all choices
    const choices = document.querySelectorAll('.puzzle-choice');
    choices.forEach(choice => choice.disabled = true);

    // Mark selected
    choices[index].classList.add('selected');

    // Check answer
    const isCorrect = index === currentPuzzle.correct;
    checkAnswer(isCorrect, choices[index], choices[currentPuzzle.correct]);
}

function submitNumericalAnswer() {
    const input = document.getElementById('numerical-answer');
    const userAnswer = input.value.trim();

    if (!userAnswer) return;

    const isCorrect = validateAnswer(userAnswer, currentPuzzle.answer, currentPuzzle.tolerance);
    checkAnswer(isCorrect);
}

function checkAnswer(isCorrect, selectedEl = null, correctEl = null) {
    const topicId = Game.getCurrentTopic();
    const result = Game.recordAnswer(topicId, isCorrect);

    // Update visuals
    if (selectedEl) {
        selectedEl.classList.add(isCorrect ? 'correct' : 'incorrect');
    }
    if (correctEl && !isCorrect) {
        correctEl.classList.add('correct');
    }

    // Update streak display
    updateStreakDisplay();

    // Show feedback
    showFeedback(isCorrect, result);
}

function showFeedback(isCorrect, result) {
    const feedbackArea = document.getElementById('puzzle-feedback');
    const feedbackResult = document.getElementById('feedback-result');
    const feedbackExplanation = document.getElementById('feedback-explanation');

    feedbackResult.className = isCorrect ? 'correct' : 'incorrect';

    if (result.justMastered) {
        feedbackResult.textContent = 'Topic Mastered!';
    } else if (isCorrect) {
        feedbackResult.textContent = 'Correct!';
    } else {
        feedbackResult.textContent = 'Not quite...';
    }

    feedbackExplanation.innerHTML = currentPuzzle.explanation || '';

    feedbackArea.classList.remove('hidden');

    // Update button text
    const nextBtn = document.getElementById('next-puzzle-btn');
    if (result.justMastered) {
        nextBtn.textContent = 'Continue';
    } else {
        nextBtn.textContent = 'Next Problem';
    }

    renderMath();
}

function nextPuzzle() {
    const topicId = Game.getCurrentTopic();

    if (Game.isTopicMastered(topicId)) {
        // Check if region is complete
        const regionId = Game.getCurrentRegion();
        const region = Locations.getRegion(regionId);

        if (region) {
            const topicIds = region.topics.map(t => t.id);
            if (Game.areAllTopicsMastered(topicIds) && !Game.hasRune(regionId)) {
                showRuneScreen(regionId);
                return;
            }
        }

        backToRegion();
    } else {
        showNextPuzzle();
    }
}

function showMasteryComplete() {
    const feedbackArea = document.getElementById('puzzle-feedback');
    const feedbackResult = document.getElementById('feedback-result');
    const feedbackExplanation = document.getElementById('feedback-explanation');

    feedbackResult.className = 'correct';
    feedbackResult.textContent = 'Already Mastered!';
    feedbackExplanation.innerHTML = 'You have already proven your mastery of this topic.';

    document.getElementById('puzzle-stem').innerHTML = '';
    document.getElementById('puzzle-choices').innerHTML = '';
    document.getElementById('puzzle-input-area').classList.add('hidden');

    feedbackArea.classList.remove('hidden');
    document.getElementById('next-puzzle-btn').textContent = 'Return';
}

function updateStreakDisplay() {
    const topicId = Game.getCurrentTopic();
    const streak = Game.getTopicStreak(topicId);
    const container = document.getElementById('streak-dots');
    container.innerHTML = '';

    for (let i = 0; i < Game.MASTERY_THRESHOLD; i++) {
        const dot = document.createElement('div');
        dot.className = 'streak-dot';
        if (i < streak) {
            dot.classList.add('filled');
        }
        container.appendChild(dot);
    }
}

// ============================================
// RUNE SCREEN
// ============================================

function showRuneScreen(regionId) {
    const region = Locations.getRegion(regionId);
    if (!region) return;

    document.getElementById('rune-symbol').textContent = region.runeSymbol || '✦';
    document.getElementById('rune-message').textContent = region.runeMessage ||
        `You have mastered the secrets of ${region.name}. The ancient rune recognizes your wisdom.`;

    showScreen('rune-screen');
}

function claimRune() {
    const regionId = Game.getCurrentRegion();
    Game.collectRune(regionId);

    // Check for game completion
    if (Game.hasAllRunes()) {
        Game.markGameCompleted();
        showVictory();
    } else {
        showMap();
    }
}

// ============================================
// VICTORY SCREEN
// ============================================

function showVictory() {
    const stats = Game.getStats();
    document.getElementById('total-problems-solved').textContent = stats.totalProblemsCorrect;
    document.getElementById('total-topics-mastered').textContent = stats.totalTopicsMastered;

    showScreen('victory-screen');
}

function openPortal() {
    if (Game.hasAllRunes()) {
        showVictory();
    }
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
