# The Island of Infinitia

A Myst-style adventure game for learning AP Calculus AB concepts through exploration and puzzle-solving.

## How to Play

### Running the Game

1. Open `index.html` in a modern web browser (Chrome, Firefox, Edge, Safari)
2. No server or build tools required - just open the file directly

### Game Overview

You are shipwrecked on the mysterious Island of Infinitia. To escape, you must:

1. **Explore** - Visit 8 regions, each teaching a unit of AP Calculus AB
2. **Learn** - Read contextual lessons tied to the island's story
3. **Prove Mastery** - Answer 5 consecutive questions correctly per topic
4. **Collect Runes** - Master all topics in a region to earn its ancient rune
5. **Escape** - Collect all 8 runes to open the portal home

### Currently Available

- **Unit 1: The Tidal Observatory** - Limits and Continuity (16 topics, 128+ problems)
  - Full lessons with examples and explanations
  - Multiple choice problems at AP exam difficulty
  - Complete mastery tracking

### Coming Soon

- Units 2-8 covering Differentiation, Integration, and Applications

## Project Structure

```
MystCalculus/
├── index.html              # Main HTML file
├── css/
│   └── style.css           # Dark Myst-style theme
├── js/
│   ├── app.js              # Application entry point
│   ├── engine/
│   │   ├── game.js         # State management, save/load
│   │   ├── ui.js           # Screen rendering, navigation
│   │   └── math.js         # Answer validation
│   └── content/
│       ├── locations.js    # Region definitions
│       ├── lessons.js      # Lesson content
│       └── puzzles.js      # Problem bank
└── README.md
```

## Technical Notes

- **Math Rendering**: Uses KaTeX (loaded from CDN)
- **State Persistence**: Saves progress to localStorage
- **No Build Required**: Vanilla ES6 modules, works directly in browser
- **Responsive**: Works on desktop and tablet

## Debug Tools

Open browser console and use `window.InfinitiaDebug`:

```javascript
InfinitiaDebug.resetGame()     // Clear save and restart
InfinitiaDebug.getState()      // View current game state
InfinitiaDebug.grantAllRunes() // Unlock victory screen
```

## Content Scope

Based on the AP Calculus AB curriculum:

| Unit | Region | Topics | Status |
|------|--------|--------|--------|
| 1 | Tidal Observatory | Limits & Continuity | Complete |
| 2 | Clocktower | Differentiation Basics | Framework |
| 3 | Greenhouse | Chain Rule & Implicit | Framework |
| 4 | Weather Station | Contextual Applications | Framework |
| 5 | Mining Caverns | Analytical Applications | Framework |
| 6 | Reservoir | Integration | Framework |
| 7 | Alchemist's Lab | Differential Equations | Framework |
| 8 | Architect's Ruins | Integration Applications | Framework |

## License

Educational use. AP Calculus AB is a trademark of the College Board, which was not involved in the production of this game.
