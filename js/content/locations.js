/**
 * locations.js - Game World Locations
 * Defines all 8 regions of the Island of Infinitia
 */

const regions = {
    'tidal-observatory': {
        id: 'tidal-observatory',
        name: 'The Tidal Observatory',
        unit: 1,
        unitName: 'Limits and Continuity',
        icon: '🌊',
        runeSymbol: '∞',
        description: `
            <p>The ancient Tidal Observatory rises from the rocky shore, its brass instruments green with age.
            Generations of island scholars tracked the tides here, predicting the water's approach to precise levels.</p>
            <p>Their secret? Understanding how values <em>approach</em> their destinations—the mathematical concept of <strong>limits</strong>.</p>
            <p>Stone tablets line the walls, each inscribed with lessons about approaching, but never quite reaching.
            Study them well, and prove your understanding to claim the Rune of Infinity.</p>
        `,
        runeMessage: 'You have mastered the art of limits—understanding how values approach their destinations. The Rune of Infinity recognizes your wisdom in comprehending the infinite.',
        topics: [
            { id: '1.1', name: 'Introducing Calculus: Can Change Occur at an Instant?' },
            { id: '1.2', name: 'Defining Limits and Using Limit Notation' },
            { id: '1.3', name: 'Estimating Limit Values from Graphs' },
            { id: '1.4', name: 'Estimating Limit Values from Tables' },
            { id: '1.5', name: 'Determining Limits Using Algebraic Properties' },
            { id: '1.6', name: 'Determining Limits Using Algebraic Manipulation' },
            { id: '1.7', name: 'Selecting Procedures for Determining Limits' },
            { id: '1.8', name: 'Determining Limits Using the Squeeze Theorem' },
            { id: '1.9', name: 'Connecting Multiple Representations of Limits' },
            { id: '1.10', name: 'Exploring Types of Discontinuities' },
            { id: '1.11', name: 'Defining Continuity at a Point' },
            { id: '1.12', name: 'Confirming Continuity over an Interval' },
            { id: '1.13', name: 'Removing Discontinuities' },
            { id: '1.14', name: 'Connecting Infinite Limits and Vertical Asymptotes' },
            { id: '1.15', name: 'Connecting Limits at Infinity and Horizontal Asymptotes' },
            { id: '1.16', name: 'Working with the Intermediate Value Theorem' }
        ]
    },

    'clocktower': {
        id: 'clocktower',
        name: 'The Clocktower',
        unit: 2,
        unitName: 'Differentiation: Definition and Fundamental Properties',
        icon: '⚙️',
        runeSymbol: '∂',
        description: `
            <p>The great Clocktower stands at the island's heart, its massive gears tracking the motion of celestial bodies.
            The ancient astronomers who built it needed to understand rates of change—how fast the stars moved across the sky.</p>
            <p>Within these walls, you will learn the foundations of <strong>differentiation</strong>: measuring instantaneous change.</p>
            <p class="coming-soon"><em>This region's lessons are being transcribed from ancient texts. Return soon.</em></p>
        `,
        runeMessage: 'You have learned to measure the rate of change at any instant. The Rune of Derivatives honors your mastery of differentiation.',
        topics: [
            { id: '2.1', name: 'Defining Average and Instantaneous Rates of Change' },
            { id: '2.2', name: 'Defining the Derivative of a Function' },
            { id: '2.3', name: 'Estimating Derivatives of a Function at a Point' },
            { id: '2.4', name: 'Connecting Differentiability and Continuity' },
            { id: '2.5', name: 'Applying the Power Rule' },
            { id: '2.6', name: 'Derivative Rules: Constant, Sum, Difference, Constant Multiple' },
            { id: '2.7', name: 'Derivatives of cos x, sin x, e^x, and ln x' },
            { id: '2.8', name: 'The Product Rule' },
            { id: '2.9', name: 'The Quotient Rule' },
            { id: '2.10', name: 'Finding Derivatives of Tangent, Cotangent, Secant, Cosecant' }
        ]
    },

    'greenhouse': {
        id: 'greenhouse',
        name: 'The Greenhouse',
        unit: 3,
        unitName: 'Differentiation: Composite, Implicit, and Inverse Functions',
        icon: '🌿',
        runeSymbol: '∘',
        description: `
            <p>Glass walls stretch toward the sky, encasing an impossible garden where vines intertwine in complex patterns.
            Each plant's growth depends on others—nested dependencies that the ancient botanists learned to model mathematically.</p>
            <p>Here you will master the <strong>Chain Rule</strong>, <strong>implicit differentiation</strong>, and derivatives of inverse functions.</p>
            <p class="coming-soon"><em>This region's lessons are being transcribed from ancient texts. Return soon.</em></p>
        `,
        runeMessage: 'You have unraveled the secrets of composite and implicit functions. The Rune of Composition is yours.',
        topics: [
            { id: '3.1', name: 'The Chain Rule' },
            { id: '3.2', name: 'Implicit Differentiation' },
            { id: '3.3', name: 'Differentiating Inverse Functions' },
            { id: '3.4', name: 'Differentiating Inverse Trigonometric Functions' },
            { id: '3.5', name: 'Selecting Procedures for Calculating Derivatives' },
            { id: '3.6', name: 'Calculating Higher-Order Derivatives' }
        ]
    },

    'weather-station': {
        id: 'weather-station',
        name: 'The Weather Station',
        unit: 4,
        unitName: 'Contextual Applications of Differentiation',
        icon: '🌤️',
        runeSymbol: 'Δ',
        description: `
            <p>High on the cliffs, the Weather Station monitors the island's ever-changing conditions.
            Temperature, pressure, wind—all changing together, all related in ways the ancient meteorologists documented.</p>
            <p>Master <strong>related rates</strong>, <strong>motion problems</strong>, and <strong>linearization</strong> to earn this region's rune.</p>
            <p class="coming-soon"><em>This region's lessons are being transcribed from ancient texts. Return soon.</em></p>
        `,
        runeMessage: 'You understand how changing quantities relate to each other. The Rune of Connection acknowledges your insight.',
        topics: [
            { id: '4.1', name: 'Interpreting the Meaning of the Derivative in Context' },
            { id: '4.2', name: 'Straight-Line Motion: Connecting Position, Velocity, Acceleration' },
            { id: '4.3', name: 'Rates of Change in Applied Contexts Other Than Motion' },
            { id: '4.4', name: 'Introduction to Related Rates' },
            { id: '4.5', name: 'Solving Related Rates Problems' },
            { id: '4.6', name: 'Approximating Values of a Function Using Local Linearity' },
            { id: '4.7', name: "Using L'Hospital's Rule for Indeterminate Forms" }
        ]
    },

    'mining-caverns': {
        id: 'mining-caverns',
        name: 'The Mining Caverns',
        unit: 5,
        unitName: 'Analytical Applications of Differentiation',
        icon: '⛏️',
        runeSymbol: '⋆',
        description: `
            <p>Deep beneath the island, crystalline caverns hold veins of precious ore.
            The ancient miners mapped optimal extraction paths, finding maximum yields and minimum efforts through mathematical analysis.</p>
            <p>Learn to find <strong>extrema</strong>, analyze <strong>concavity</strong>, and solve <strong>optimization problems</strong>.</p>
            <p class="coming-soon"><em>This region's lessons are being transcribed from ancient texts. Return soon.</em></p>
        `,
        runeMessage: 'You have mastered the art of finding optimal solutions. The Rune of Optimization rewards your analytical skills.',
        topics: [
            { id: '5.1', name: 'Using the Mean Value Theorem' },
            { id: '5.2', name: 'Extreme Value Theorem, Global vs Local Extrema, Critical Points' },
            { id: '5.3', name: 'Determining Intervals of Increasing/Decreasing' },
            { id: '5.4', name: 'Using the First Derivative Test' },
            { id: '5.5', name: 'Using the Candidates Test for Global Extrema' },
            { id: '5.6', name: 'Determining Concavity of Functions' },
            { id: '5.7', name: 'Using the Second Derivative Test' },
            { id: '5.8', name: 'Sketching Graphs of Functions and Their Derivatives' },
            { id: '5.9', name: 'Connecting f, f\', and f\'\' Graphically' },
            { id: '5.10', name: 'Introduction to Optimization Problems' },
            { id: '5.11', name: 'Solving Optimization Problems' },
            { id: '5.12', name: 'Exploring Behaviors of Implicit Relations' }
        ]
    },

    'reservoir': {
        id: 'reservoir',
        name: 'The Reservoir',
        unit: 6,
        unitName: 'Integration and Accumulation of Change',
        icon: '💧',
        runeSymbol: '∫',
        description: `
            <p>The great Reservoir collects water from across the island, its levels rising and falling with the seasons.
            Ancient engineers measured total accumulation by tracking the rate of flow—the inverse of differentiation.</p>
            <p>Here you will learn <strong>integration</strong>: Riemann sums, the Fundamental Theorem, and antiderivatives.</p>
            <p class="coming-soon"><em>This region's lessons are being transcribed from ancient texts. Return soon.</em></p>
        `,
        runeMessage: 'You have learned to accumulate change over time. The Rune of Integration marks your achievement.',
        topics: [
            { id: '6.1', name: 'Exploring Accumulations of Change' },
            { id: '6.2', name: 'Approximating Areas with Riemann Sums' },
            { id: '6.3', name: 'Riemann Sums, Summation Notation, Definite Integral Notation' },
            { id: '6.4', name: 'The Fundamental Theorem of Calculus and Accumulation Functions' },
            { id: '6.5', name: 'Interpreting the Behavior of Accumulation Functions' },
            { id: '6.6', name: 'Applying Properties of Definite Integrals' },
            { id: '6.7', name: 'The Fundamental Theorem of Calculus and Definite Integrals' },
            { id: '6.8', name: 'Finding Antiderivatives and Indefinite Integrals: Basic Rules' },
            { id: '6.9', name: 'Integrating Using Substitution' },
            { id: '6.10', name: 'Integrating Functions Using Long Division and Completing the Square' },
            { id: '6.14', name: 'Selecting Techniques for Antidifferentiation' }
        ]
    },

    'alchemist-lab': {
        id: 'alchemist-lab',
        name: "The Alchemist's Lab",
        unit: 7,
        unitName: 'Differential Equations',
        icon: '⚗️',
        runeSymbol: 'φ',
        description: `
            <p>Bubbling potions and strange apparatus fill this ancient laboratory.
            The alchemists who worked here studied transformations that followed predictable patterns of growth and decay.</p>
            <p>Master <strong>differential equations</strong>: slope fields, separation of variables, and exponential models.</p>
            <p class="coming-soon"><em>This region's lessons are being transcribed from ancient texts. Return soon.</em></p>
        `,
        runeMessage: 'You understand the equations that govern growth and decay. The Rune of Transformation is yours.',
        topics: [
            { id: '7.1', name: 'Modeling Situations with Differential Equations' },
            { id: '7.2', name: 'Verifying Solutions for Differential Equations' },
            { id: '7.3', name: 'Sketching Slope Fields' },
            { id: '7.4', name: 'Reasoning Using Slope Fields' },
            { id: '7.6', name: 'Finding General Solutions Using Separation of Variables' },
            { id: '7.7', name: 'Finding Particular Solutions Using Initial Conditions' },
            { id: '7.8', name: 'Exponential Models with Differential Equations' }
        ]
    },

    'architect-ruins': {
        id: 'architect-ruins',
        name: "The Architect's Ruins",
        unit: 8,
        unitName: 'Applications of Integration',
        icon: '🏛️',
        runeSymbol: 'Ω',
        description: `
            <p>Crumbling columns and geometric foundations mark where the island's greatest builders once worked.
            They calculated volumes of complex structures, areas between boundaries, and average values across regions.</p>
            <p>Complete your journey by mastering the <strong>applications of integration</strong>.</p>
            <p class="coming-soon"><em>This region's lessons are being transcribed from ancient texts. Return soon.</em></p>
        `,
        runeMessage: 'You have mastered all applications of integration. The Rune of Completion crowns your achievement, and the portal home awaits.',
        topics: [
            { id: '8.1', name: 'Finding the Average Value of a Function on an Interval' },
            { id: '8.2', name: 'Connecting Position, Velocity, and Acceleration Using Integrals' },
            { id: '8.3', name: 'Using Accumulation Functions and Definite Integrals in Applied Contexts' },
            { id: '8.4', name: 'Finding the Area Between Curves Expressed as Functions of x' },
            { id: '8.5', name: 'Finding the Area Between Curves Expressed as Functions of y' },
            { id: '8.6', name: 'Finding the Area Between Curves That Intersect at More Than Two Points' },
            { id: '8.7', name: 'Volumes with Cross Sections: Squares and Rectangles' },
            { id: '8.8', name: 'Volumes with Cross Sections: Triangles and Semicircles' },
            { id: '8.9', name: 'Volume with Disc Method: Revolving Around x or y Axis' },
            { id: '8.10', name: 'Volume with Disc Method: Revolving Around Other Axes' },
            { id: '8.11', name: 'Volume with Washer Method: Revolving Around x or y Axis' },
            { id: '8.12', name: 'Volume with Washer Method: Revolving Around Other Axes' }
        ]
    }
};

/**
 * Get a region by ID
 */
export function getRegion(regionId) {
    return regions[regionId] || null;
}

/**
 * Get all regions
 */
export function getAllRegions() {
    return Object.values(regions);
}

/**
 * Get region IDs
 */
export function getRegionIds() {
    return Object.keys(regions);
}

/**
 * Get topics for a region
 */
export function getTopicsForRegion(regionId) {
    const region = regions[regionId];
    return region ? region.topics : [];
}

/**
 * Get topic IDs for a region
 */
export function getTopicIdsForRegion(regionId) {
    return getTopicsForRegion(regionId).map(t => t.id);
}

/**
 * Find which region a topic belongs to
 */
export function getRegionForTopic(topicId) {
    for (const region of Object.values(regions)) {
        if (region.topics.some(t => t.id === topicId)) {
            return region;
        }
    }
    return null;
}

export { regions };
