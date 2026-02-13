/**
 * app.js - Application Entry Point
 * Initializes and connects all game modules
 */

import * as Game from './engine/game.js';
import * as UI from './engine/ui.js';
import * as Locations from './content/locations.js';
import * as Lessons from './content/lessons.js';
import * as Puzzles from './content/puzzles.js';

// Initialize the game when the DOM is loaded
document.addEventListener('DOMContentLoaded', init);

/**
 * Main initialization function
 */
function init() {
    console.log('The Island of Infinitia - Initializing...');

    // Initialize game state
    Game.initGame();

    // Initialize UI with content modules
    UI.init(Locations, Lessons, Puzzles);

    // Show title screen
    UI.showScreen('title-screen');

    // Log puzzle counts for debugging
    logPuzzleCounts();

    console.log('Game initialized successfully!');
}

/**
 * Log puzzle counts for each topic (development helper)
 */
function logPuzzleCounts() {
    const topics = Puzzles.getTopicsWithPuzzles();
    console.log('Puzzle counts by topic:');
    topics.forEach(topic => {
        const count = Puzzles.countPuzzlesForTopic(topic);
        console.log(`  Topic ${topic}: ${count} puzzles`);
    });
    console.log(`Total puzzles: ${topics.reduce((sum, t) => sum + Puzzles.countPuzzlesForTopic(t), 0)}`);
}

// Expose some functions to window for debugging (optional, remove in production)
if (typeof window !== 'undefined') {
    window.InfinitiaDebug = {
        Game,
        UI,
        Locations,
        Lessons,
        Puzzles,
        resetGame: () => {
            Game.clearSave();
            location.reload();
        },
        getState: () => Game.getState(),
        grantAllRunes: () => {
            const regionIds = Locations.getRegionIds();
            regionIds.forEach(id => Game.collectRune(id));
            console.log('All runes granted!');
        }
    };
    console.log('Debug tools available: window.InfinitiaDebug');
}
