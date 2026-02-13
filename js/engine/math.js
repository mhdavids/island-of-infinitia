/**
 * math.js - Mathematical Answer Validation
 * Handles numerical comparison, expression parsing, and answer checking
 */

// Default tolerance for numerical comparisons
const DEFAULT_TOLERANCE = 0.001;

/**
 * Validate a user's answer against the correct answer
 * @param {string} userAnswer - The user's input
 * @param {number|string} correctAnswer - The correct answer
 * @param {number} tolerance - Acceptable margin of error (default 0.001)
 * @returns {boolean} Whether the answer is correct
 */
export function validateAnswer(userAnswer, correctAnswer, tolerance = DEFAULT_TOLERANCE) {
    // Clean the user input
    const cleaned = cleanInput(userAnswer);

    // Parse the user's answer
    const userValue = parseAnswer(cleaned);
    if (userValue === null) {
        return false;
    }

    // Parse the correct answer if it's a string
    let correctValue;
    if (typeof correctAnswer === 'string') {
        correctValue = parseAnswer(correctAnswer);
    } else {
        correctValue = correctAnswer;
    }

    if (correctValue === null) {
        return false;
    }

    // Handle special cases
    if (!isFinite(userValue) && !isFinite(correctValue)) {
        // Both are infinity (or -infinity)
        return Math.sign(userValue) === Math.sign(correctValue);
    }

    if (!isFinite(userValue) || !isFinite(correctValue)) {
        return false;
    }

    // Compare with tolerance
    return Math.abs(userValue - correctValue) <= tolerance;
}

/**
 * Clean user input
 */
function cleanInput(input) {
    if (typeof input !== 'string') {
        return String(input);
    }

    return input
        .trim()
        .toLowerCase()
        .replace(/\s+/g, '') // Remove whitespace
        .replace(/,/g, '')   // Remove commas
        .replace(/÷/g, '/')  // Replace division symbol
        .replace(/×/g, '*')  // Replace multiplication symbol
        .replace(/−/g, '-'); // Replace minus sign
}

/**
 * Parse an answer string into a numerical value
 * Supports fractions, pi, e, sqrt, and basic expressions
 */
export function parseAnswer(input) {
    if (typeof input === 'number') {
        return input;
    }

    const cleaned = cleanInput(input);

    // Handle special text values
    if (cleaned === 'dne' || cleaned === 'undefined' || cleaned === 'doesnotexist') {
        return NaN; // "Does not exist" represented as NaN
    }

    if (cleaned === 'infinity' || cleaned === 'inf' || cleaned === '∞') {
        return Infinity;
    }

    if (cleaned === '-infinity' || cleaned === '-inf' || cleaned === '-∞') {
        return -Infinity;
    }

    // Try to evaluate as expression
    try {
        const value = evaluateExpression(cleaned);
        return value;
    } catch (e) {
        return null;
    }
}

/**
 * Evaluate a mathematical expression
 * Supports: +, -, *, /, ^, sqrt, pi, e, parentheses
 */
function evaluateExpression(expr) {
    // Replace mathematical constants and functions
    let processed = expr
        .replace(/pi|π/g, String(Math.PI))
        .replace(/\be\b/g, String(Math.E))
        .replace(/sqrt\(([^)]+)\)/g, (_, inner) => {
            const val = evaluateExpression(inner);
            return String(Math.sqrt(val));
        })
        .replace(/\^/g, '**'); // Convert ^ to ** for exponentiation

    // Handle fractions like "3/4"
    // Only evaluate if it's a simple expression
    if (isSimpleExpression(processed)) {
        // Use Function constructor for safe evaluation
        // Only allow numbers and basic operators
        const result = Function(`'use strict'; return (${processed})`)();
        return result;
    }

    // Fallback: try parseFloat
    const simple = parseFloat(processed);
    if (!isNaN(simple)) {
        return simple;
    }

    return null;
}

/**
 * Check if expression contains only safe mathematical operations
 */
function isSimpleExpression(expr) {
    // Only allow: digits, decimal points, operators, parentheses, whitespace, E notation
    const safePattern = /^[\d\.\+\-\*\/\(\)\s\e]+$/i;
    return safePattern.test(expr);
}

/**
 * Format a number for display
 */
export function formatNumber(num, decimals = 4) {
    if (!isFinite(num)) {
        if (num === Infinity) return '∞';
        if (num === -Infinity) return '-∞';
        return 'DNE';
    }

    // Check if it's effectively an integer
    if (Math.abs(num - Math.round(num)) < 0.0000001) {
        return String(Math.round(num));
    }

    // Round to specified decimals
    return Number(num.toFixed(decimals)).toString();
}

/**
 * Check if two expressions are equivalent
 * Evaluates both and compares numerically
 */
export function areExpressionsEqual(expr1, expr2, tolerance = DEFAULT_TOLERANCE) {
    const val1 = parseAnswer(expr1);
    const val2 = parseAnswer(expr2);

    if (val1 === null || val2 === null) {
        return false;
    }

    return Math.abs(val1 - val2) <= tolerance;
}

/**
 * Parse a fraction string like "3/4" into decimal
 */
export function parseFraction(input) {
    const cleaned = cleanInput(input);
    const fractionMatch = cleaned.match(/^(-?\d+(?:\.\d+)?)\s*\/\s*(-?\d+(?:\.\d+)?)$/);

    if (fractionMatch) {
        const numerator = parseFloat(fractionMatch[1]);
        const denominator = parseFloat(fractionMatch[2]);
        if (denominator !== 0) {
            return numerator / denominator;
        }
    }

    return parseFloat(cleaned);
}

/**
 * Check if a value represents "does not exist"
 */
export function isDNE(value) {
    if (typeof value === 'string') {
        const cleaned = cleanInput(value);
        return cleaned === 'dne' || cleaned === 'undefined' || cleaned === 'doesnotexist';
    }
    return value !== value; // NaN check
}

/**
 * Compare answers that might be DNE
 */
export function compareWithDNE(userAnswer, correctAnswer) {
    const userDNE = isDNE(userAnswer);
    const correctDNE = isDNE(correctAnswer);

    if (userDNE && correctDNE) {
        return true;
    }

    if (userDNE !== correctDNE) {
        return false;
    }

    return validateAnswer(userAnswer, correctAnswer);
}
