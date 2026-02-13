/**
 * game.js - Core Game State Management
 * Handles save/load, progression tracking, and game state
 */

const STORAGE_KEY = 'infinitia_save';
const MASTERY_THRESHOLD = 5; // Consecutive correct answers needed

// Default game state structure
function createNewGameState() {
    return {
        version: 1,
        created: Date.now(),
        lastPlayed: Date.now(),

        // Player progress
        currentRegion: null,
        currentTopic: null,

        // Runes collected (one per region)
        runes: {
            'tidal-observatory': false,
            'clocktower': false,
            'greenhouse': false,
            'weather-station': false,
            'mining-caverns': false,
            'reservoir': false,
            'alchemist-lab': false,
            'architect-ruins': false
        },

        // Topic mastery tracking
        // Key: topic ID (e.g., "1.1"), Value: { mastered: bool, streak: number, attempts: number }
        topics: {},

        // Statistics
        stats: {
            totalProblemsAttempted: 0,
            totalProblemsCorrect: 0,
            totalTopicsMastered: 0,
            playTime: 0 // in seconds
        },

        // Flags
        hasSeenIntro: false,
        gameCompleted: false
    };
}

// Game state singleton
let gameState = null;

/**
 * Initialize or load game state
 */
export function initGame() {
    const saved = loadFromStorage();
    if (saved) {
        gameState = saved;
        gameState.lastPlayed = Date.now();
    } else {
        gameState = createNewGameState();
    }
    return gameState;
}

/**
 * Start a new game, clearing any existing save
 */
export function newGame() {
    gameState = createNewGameState();
    saveToStorage();
    return gameState;
}

/**
 * Get current game state
 */
export function getState() {
    return gameState;
}

/**
 * Check if a saved game exists
 */
export function hasSavedGame() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        return saved !== null;
    } catch (e) {
        return false;
    }
}

/**
 * Save game state to localStorage
 */
export function saveToStorage() {
    try {
        gameState.lastPlayed = Date.now();
        localStorage.setItem(STORAGE_KEY, JSON.stringify(gameState));
        return true;
    } catch (e) {
        console.error('Failed to save game:', e);
        return false;
    }
}

/**
 * Load game state from localStorage
 */
function loadFromStorage() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            return JSON.parse(saved);
        }
    } catch (e) {
        console.error('Failed to load game:', e);
    }
    return null;
}

/**
 * Clear saved game
 */
export function clearSave() {
    try {
        localStorage.removeItem(STORAGE_KEY);
        return true;
    } catch (e) {
        console.error('Failed to clear save:', e);
        return false;
    }
}

// ============================================
// PROGRESSION TRACKING
// ============================================

/**
 * Get or create topic progress object
 */
export function getTopicProgress(topicId) {
    if (!gameState.topics[topicId]) {
        gameState.topics[topicId] = {
            mastered: false,
            streak: 0,
            attempts: 0,
            correctAnswers: 0
        };
    }
    return gameState.topics[topicId];
}

/**
 * Record an answer attempt
 * @returns {Object} { correct, streak, mastered, justMastered }
 */
export function recordAnswer(topicId, isCorrect) {
    const progress = getTopicProgress(topicId);
    const wasMastered = progress.mastered;

    progress.attempts++;
    gameState.stats.totalProblemsAttempted++;

    if (isCorrect) {
        progress.streak++;
        progress.correctAnswers++;
        gameState.stats.totalProblemsCorrect++;

        // Check for mastery
        if (progress.streak >= MASTERY_THRESHOLD && !progress.mastered) {
            progress.mastered = true;
            gameState.stats.totalTopicsMastered++;
        }
    } else {
        // Reset streak on wrong answer
        progress.streak = 0;
    }

    saveToStorage();

    return {
        correct: isCorrect,
        streak: progress.streak,
        mastered: progress.mastered,
        justMastered: progress.mastered && !wasMastered
    };
}

/**
 * Check if a topic is mastered
 */
export function isTopicMastered(topicId) {
    const progress = gameState.topics[topicId];
    return progress ? progress.mastered : false;
}

/**
 * Get mastery progress for a topic
 */
export function getTopicStreak(topicId) {
    const progress = gameState.topics[topicId];
    return progress ? progress.streak : 0;
}

/**
 * Count mastered topics for a region
 */
export function countMasteredTopics(topicIds) {
    return topicIds.filter(id => isTopicMastered(id)).length;
}

/**
 * Check if all topics in a list are mastered
 */
export function areAllTopicsMastered(topicIds) {
    return topicIds.every(id => isTopicMastered(id));
}

// ============================================
// RUNE MANAGEMENT
// ============================================

/**
 * Collect a rune for a region
 */
export function collectRune(regionId) {
    if (!gameState.runes[regionId]) {
        gameState.runes[regionId] = true;
        saveToStorage();
        return true;
    }
    return false;
}

/**
 * Check if a rune has been collected
 */
export function hasRune(regionId) {
    return gameState.runes[regionId] === true;
}

/**
 * Count collected runes
 */
export function countRunes() {
    return Object.values(gameState.runes).filter(v => v).length;
}

/**
 * Check if all runes are collected
 */
export function hasAllRunes() {
    return countRunes() === 8;
}

// ============================================
// REGION/NAVIGATION STATE
// ============================================

/**
 * Set current region
 */
export function setCurrentRegion(regionId) {
    gameState.currentRegion = regionId;
    saveToStorage();
}

/**
 * Set current topic
 */
export function setCurrentTopic(topicId) {
    gameState.currentTopic = topicId;
    saveToStorage();
}

/**
 * Get current region
 */
export function getCurrentRegion() {
    return gameState.currentRegion;
}

/**
 * Get current topic
 */
export function getCurrentTopic() {
    return gameState.currentTopic;
}

// ============================================
// INTRO/COMPLETION FLAGS
// ============================================

/**
 * Mark intro as seen
 */
export function markIntroSeen() {
    gameState.hasSeenIntro = true;
    saveToStorage();
}

/**
 * Check if intro was seen
 */
export function hasSeenIntro() {
    return gameState.hasSeenIntro;
}

/**
 * Mark game as completed
 */
export function markGameCompleted() {
    gameState.gameCompleted = true;
    saveToStorage();
}

/**
 * Check if game is completed
 */
export function isGameCompleted() {
    return gameState.gameCompleted;
}

// ============================================
// STATISTICS
// ============================================

/**
 * Get game statistics
 */
export function getStats() {
    return { ...gameState.stats };
}

/**
 * Update play time
 */
export function updatePlayTime(seconds) {
    gameState.stats.playTime += seconds;
    saveToStorage();
}

// ============================================
// REGION AVAILABILITY
// ============================================

/**
 * Check if a region is available to play
 * For now, only Unit 1 (tidal-observatory) is available
 */
export function isRegionAvailable(regionId) {
    // Only Unit 1 is implemented
    const availableRegions = ['tidal-observatory'];
    return availableRegions.includes(regionId);
}

/**
 * Check if a region is completed (all topics mastered)
 */
export function isRegionCompleted(regionId, topicIds) {
    return areAllTopicsMastered(topicIds);
}

export {
    MASTERY_THRESHOLD
};
