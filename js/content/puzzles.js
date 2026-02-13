/**
 * puzzles.js - Problem Bank
 * AP Calculus AB difficulty problems for all topics
 * Includes multiple choice and numerical entry
 */

const puzzles = [
    // ============================================
    // TOPIC 1.1: Introducing Calculus
    // ============================================
    {
        topic: '1.1',
        type: 'multiple_choice',
        difficulty: 'easy',
        stem: 'Which of the following best describes the central question of calculus?',
        choices: [
            'How do we measure the exact value of a function at every point?',
            'How do we measure instantaneous rates of change?',
            'How do we find the maximum value of any function?',
            'How do we calculate areas of complex shapes?'
        ],
        correct: 1,
        explanation: 'Calculus was developed to answer the question: how can we measure instantaneous rates of change when calculation seems to require an interval of time?'
    },
    {
        topic: '1.1',
        type: 'multiple_choice',
        difficulty: 'easy',
        stem: 'The average rate of change of a function $f$ over the interval $[a, b]$ is given by:',
        choices: [
            '$f(b) - f(a)$',
            '$\\frac{f(b) - f(a)}{b - a}$',
            '$\\frac{b - a}{f(b) - f(a)}$',
            '$f(b) + f(a)$'
        ],
        correct: 1,
        explanation: 'The average rate of change is the change in output divided by the change in input: $\\frac{\\Delta y}{\\Delta x} = \\frac{f(b) - f(a)}{b - a}$.'
    },
    {
        topic: '1.1',
        type: 'multiple_choice',
        difficulty: 'medium',
        stem: 'A tidal gauge records water height $h(t)$ in meters at time $t$ hours. If $h(2) = 3.5$ and $h(5) = 5.0$, what is the average rate of change of water height over this interval?',
        choices: [
            '$0.5$ meters per hour',
            '$1.5$ meters per hour',
            '$2.5$ meters per hour',
            '$4.25$ meters per hour'
        ],
        correct: 0,
        explanation: 'Average rate of change $= \\frac{h(5) - h(2)}{5 - 2} = \\frac{5.0 - 3.5}{3} = \\frac{1.5}{3} = 0.5$ meters per hour.'
    },
    {
        topic: '1.1',
        type: 'multiple_choice',
        difficulty: 'medium',
        stem: 'To find the instantaneous rate of change at $t = 3$, we would:',
        choices: [
            'Calculate $f(3)$ directly',
            'Find the average rate of change over smaller and smaller intervals containing $t = 3$',
            'Find the maximum value of $f$ near $t = 3$',
            'Calculate $f(3) - f(0)$'
        ],
        correct: 1,
        explanation: 'The instantaneous rate of change is found by examining what happens to the average rate of change as the interval shrinks toward zero—this is the concept of a limit.'
    },
    {
        topic: '1.1',
        type: 'multiple_choice',
        difficulty: 'medium',
        stem: 'The position of a particle is given by $s(t) = t^2$ meters. What is the average velocity from $t = 1$ to $t = 3$ seconds?',
        choices: [
            '$2$ m/s',
            '$4$ m/s',
            '$5$ m/s',
            '$8$ m/s'
        ],
        correct: 1,
        explanation: 'Average velocity $= \\frac{s(3) - s(1)}{3 - 1} = \\frac{9 - 1}{2} = \\frac{8}{2} = 4$ m/s.'
    },
    {
        topic: '1.1',
        type: 'multiple_choice',
        difficulty: 'hard',
        stem: 'The average rate of change of $f(x) = x^2$ from $x = 2$ to $x = 2 + h$ is:',
        choices: [
            '$4 + h$',
            '$4 + 2h$',
            '$h + h^2$',
            '$2h + h^2$'
        ],
        correct: 0,
        explanation: 'Average rate $= \\frac{(2+h)^2 - 4}{h} = \\frac{4 + 4h + h^2 - 4}{h} = \\frac{4h + h^2}{h} = 4 + h$. As $h \\to 0$, this approaches $4$, the instantaneous rate at $x = 2$.'
    },
    {
        topic: '1.1',
        type: 'multiple_choice',
        difficulty: 'easy',
        stem: 'What does a car\'s speedometer measure?',
        choices: [
            'Average speed over the trip',
            'Total distance traveled',
            'Instantaneous speed',
            'Acceleration'
        ],
        correct: 2,
        explanation: 'A speedometer shows instantaneous speed—how fast you\'re going at that exact moment, not an average over time.'
    },
    {
        topic: '1.1',
        type: 'multiple_choice',
        difficulty: 'hard',
        stem: 'For $f(x) = 3x - 1$, the average rate of change over any interval is:',
        choices: [
            '$3$',
            '$-1$',
            '$3x$',
            'Depends on the interval'
        ],
        correct: 0,
        explanation: 'For a linear function $f(x) = mx + b$, the average rate of change over any interval equals the slope $m$. Here, the slope is $3$.'
    },

    // ============================================
    // TOPIC 1.2: Defining Limits and Notation
    // ============================================
    {
        topic: '1.2',
        type: 'multiple_choice',
        difficulty: 'easy',
        stem: 'The notation $\\lim_{x \\to 3} f(x) = 7$ means:',
        choices: [
            '$f(3) = 7$',
            'As $x$ approaches $3$, $f(x)$ approaches $7$',
            '$f(x) = 7$ when $x > 3$',
            'The function equals $7$ for all $x$ near $3$'
        ],
        correct: 1,
        explanation: 'Limit notation describes what value the function approaches as the input approaches a certain value—not necessarily what the function equals at that point.'
    },
    {
        topic: '1.2',
        type: 'multiple_choice',
        difficulty: 'easy',
        stem: '$\\lim_{x \\to 2^-} f(x)$ represents:',
        choices: [
            'The limit as $x$ approaches $2$ from values greater than $2$',
            'The limit as $x$ approaches $2$ from values less than $2$',
            'The limit as $x$ approaches $-2$',
            'The negative of the limit as $x$ approaches $2$'
        ],
        correct: 1,
        explanation: 'The superscript "$-$" indicates approaching from the left (values less than $2$). The "$+$" would indicate approaching from the right.'
    },
    {
        topic: '1.2',
        type: 'multiple_choice',
        difficulty: 'medium',
        stem: 'For $\\lim_{x \\to c} f(x) = L$ to exist, which must be true?',
        choices: [
            '$f(c) = L$',
            '$f(c)$ must be defined',
            '$\\lim_{x \\to c^-} f(x) = \\lim_{x \\to c^+} f(x) = L$',
            'All of the above'
        ],
        correct: 2,
        explanation: 'The two-sided limit exists if and only if both one-sided limits exist and are equal. The function value at $c$ does not need to equal $L$, or even exist.'
    },
    {
        topic: '1.2',
        type: 'multiple_choice',
        difficulty: 'medium',
        stem: 'If $\\lim_{x \\to 4^-} g(x) = 5$ and $\\lim_{x \\to 4^+} g(x) = 5$, then $\\lim_{x \\to 4} g(x)$ is:',
        choices: [
            'Does not exist',
            '$4$',
            '$5$',
            'Cannot be determined'
        ],
        correct: 2,
        explanation: 'When both one-sided limits exist and are equal, the two-sided limit equals that common value. Here, both equal $5$, so $\\lim_{x \\to 4} g(x) = 5$.'
    },
    {
        topic: '1.2',
        type: 'multiple_choice',
        difficulty: 'medium',
        stem: 'If $\\lim_{x \\to 1^-} f(x) = 3$ and $\\lim_{x \\to 1^+} f(x) = 5$, then $\\lim_{x \\to 1} f(x)$:',
        choices: [
            'Equals $3$',
            'Equals $4$',
            'Equals $5$',
            'Does not exist'
        ],
        correct: 3,
        explanation: 'For the two-sided limit to exist, both one-sided limits must be equal. Since $3 \\neq 5$, the limit does not exist.'
    },
    {
        topic: '1.2',
        type: 'multiple_choice',
        difficulty: 'hard',
        stem: 'For $f(x) = \\frac{x^2 - 9}{x - 3}$, what is $\\lim_{x \\to 3} f(x)$?',
        choices: [
            '$0$',
            '$3$',
            '$6$',
            'Does not exist'
        ],
        correct: 2,
        explanation: '$\\frac{x^2 - 9}{x - 3} = \\frac{(x-3)(x+3)}{x-3} = x + 3$ for $x \\neq 3$. As $x \\to 3$, this approaches $6$.'
    },
    {
        topic: '1.2',
        type: 'multiple_choice',
        difficulty: 'easy',
        stem: 'True or False: If $\\lim_{x \\to a} f(x) = L$, then $f(a) = L$.',
        choices: [
            'True',
            'False',
            'True only if $f$ is continuous',
            'True only if $L \\neq 0$'
        ],
        correct: 1,
        explanation: 'False. The limit describes what value $f(x)$ approaches, but $f(a)$ might be undefined or equal to a different value. This is the key distinction between limits and function values.'
    },
    {
        topic: '1.2',
        type: 'multiple_choice',
        difficulty: 'hard',
        stem: 'If $f(x) = \\begin{cases} x + 2 & x < 1 \\\\ 5 & x = 1 \\\\ 3 - x & x > 1 \\end{cases}$, find $\\lim_{x \\to 1} f(x)$.',
        choices: [
            '$2$',
            '$3$',
            '$5$',
            'Does not exist'
        ],
        correct: 3,
        explanation: '$\\lim_{x \\to 1^-} (x+2) = 3$ and $\\lim_{x \\to 1^+} (3-x) = 2$. Since $3 \\neq 2$, the two-sided limit does not exist.'
    },

    // ============================================
    // TOPIC 1.3: Estimating Limits from Graphs
    // ============================================
    {
        topic: '1.3',
        type: 'multiple_choice',
        difficulty: 'easy',
        stem: 'When reading a limit from a graph, you should look at:',
        choices: [
            'The $y$-value where the point is plotted',
            'The $y$-value the curve approaches from both sides',
            'The highest point on the graph',
            'The $x$-intercept'
        ],
        correct: 1,
        explanation: 'To find a limit graphically, trace the curve from both sides and identify where the $y$-values are heading—not where a point might actually be plotted.'
    },
    {
        topic: '1.3',
        type: 'multiple_choice',
        difficulty: 'medium',
        stem: 'On a graph, an open circle at a point indicates:',
        choices: [
            'The function is continuous there',
            'The limit does not exist',
            'The function is not defined there (or defined elsewhere)',
            'The function has a maximum there'
        ],
        correct: 2,
        explanation: 'An open circle indicates the function is not defined at that $x$-value (or is defined at a different $y$-value). The limit may still exist!'
    },
    {
        topic: '1.3',
        type: 'multiple_choice',
        difficulty: 'medium',
        stem: 'If a graph shows a jump at $x = 2$, where the curve approaches $y = 3$ from the left and $y = 5$ from the right, then:',
        choices: [
            '$\\lim_{x \\to 2} f(x) = 3$',
            '$\\lim_{x \\to 2} f(x) = 5$',
            '$\\lim_{x \\to 2} f(x) = 4$',
            '$\\lim_{x \\to 2} f(x)$ does not exist'
        ],
        correct: 3,
        explanation: 'A jump discontinuity means the left and right limits are different. Since $3 \\neq 5$, the two-sided limit does not exist.'
    },
    {
        topic: '1.3',
        type: 'multiple_choice',
        difficulty: 'easy',
        stem: 'A vertical asymptote on a graph at $x = a$ indicates:',
        choices: [
            '$\\lim_{x \\to a} f(x) = 0$',
            '$f(a)$ is very large',
            'The function approaches $\\pm\\infty$ near $x = a$',
            'The function is continuous at $x = a$'
        ],
        correct: 2,
        explanation: 'A vertical asymptote means the function grows without bound (approaches $\\pm\\infty$) as $x$ approaches that value.'
    },
    {
        topic: '1.3',
        type: 'multiple_choice',
        difficulty: 'hard',
        stem: 'A graph shows $f$ approaching $y = 4$ as $x \\to 3$ from both sides, but there\'s a solid dot at $(3, 1)$. What is $\\lim_{x \\to 3} f(x)$?',
        choices: [
            '$1$',
            '$4$',
            '$\\frac{5}{2}$',
            'Does not exist'
        ],
        correct: 1,
        explanation: 'The limit depends on where the curve is heading, not where a point is plotted. The curve approaches $4$ from both sides, so the limit is $4$ (even though $f(3) = 1$).'
    },
    {
        topic: '1.3',
        type: 'multiple_choice',
        difficulty: 'medium',
        stem: 'From a graph, if the left-hand limit at $x = c$ is $\\infty$ and the right-hand limit is $-\\infty$, the two-sided limit:',
        choices: [
            'Equals $0$',
            'Equals $\\infty$',
            'Equals $-\\infty$',
            'Does not exist'
        ],
        correct: 3,
        explanation: 'For a two-sided limit to exist (even as $\\pm\\infty$), both one-sided limits must agree. $\\infty \\neq -\\infty$, so the limit does not exist.'
    },
    {
        topic: '1.3',
        type: 'multiple_choice',
        difficulty: 'easy',
        stem: 'If a graph shows a continuous curve passing through $(5, 2)$, then $\\lim_{x \\to 5} f(x) =$',
        choices: [
            '$5$',
            '$2$',
            '$7$',
            'Cannot be determined'
        ],
        correct: 1,
        explanation: 'If the curve passes smoothly through the point, the limit equals the function value. The curve approaches $y = 2$ from both sides.'
    },
    {
        topic: '1.3',
        type: 'multiple_choice',
        difficulty: 'hard',
        stem: 'A graph shows $f(x)$ oscillating rapidly between $-1$ and $1$ as $x \\to 0$, never settling to a single value. Then $\\lim_{x \\to 0} f(x)$:',
        choices: [
            'Equals $0$',
            'Equals $1$',
            'Equals $-1$',
            'Does not exist'
        ],
        correct: 3,
        explanation: 'If a function oscillates without approaching a single value, the limit does not exist. This is different from the function being bounded—it must approach a specific value.'
    },

    // ============================================
    // TOPIC 1.4: Estimating Limits from Tables
    // ============================================
    {
        topic: '1.4',
        type: 'multiple_choice',
        difficulty: 'easy',
        stem: 'To estimate $\\lim_{x \\to 3} f(x)$ using a table, you should calculate $f(x)$ for $x$ values:',
        choices: [
            'Only greater than $3$',
            'Only less than $3$',
            'Approaching $3$ from both sides',
            'Far from $3$'
        ],
        correct: 2,
        explanation: 'To estimate a two-sided limit, we need to see the pattern from both directions: values slightly less than $3$ and slightly greater than $3$.'
    },
    {
        topic: '1.4',
        type: 'multiple_choice',
        difficulty: 'medium',
        stem: 'A table shows: $f(1.9) = 3.9$, $f(1.99) = 3.99$, $f(1.999) = 3.999$, $f(2.001) = 4.001$, $f(2.01) = 4.01$. Estimate $\\lim_{x \\to 2} f(x)$.',
        choices: [
            '$3$',
            '$4$',
            '$3.5$',
            'Does not exist'
        ],
        correct: 1,
        explanation: 'From both sides, the values approach $4$. The pattern $3.9, 3.99, 3.999...$ from the left and $4.001, 4.01...$ from the right both converge to $4$.'
    },
    {
        topic: '1.4',
        type: 'multiple_choice',
        difficulty: 'medium',
        stem: 'A table shows: $f(0.9) = 2.1$, $f(0.99) = 2.01$, $f(1.01) = 4.01$, $f(1.1) = 4.1$. This suggests:',
        choices: [
            '$\\lim_{x \\to 1} f(x) = 2$',
            '$\\lim_{x \\to 1} f(x) = 4$',
            '$\\lim_{x \\to 1} f(x) = 3$',
            '$\\lim_{x \\to 1} f(x)$ does not exist'
        ],
        correct: 3,
        explanation: 'From the left, values approach $2$; from the right, values approach $4$. Since these differ, the two-sided limit does not exist.'
    },
    {
        topic: '1.4',
        type: 'multiple_choice',
        difficulty: 'hard',
        stem: 'Given the table for $f(x) = \\frac{\\sin x}{x}$: $f(0.1) \\approx 0.998$, $f(0.01) \\approx 0.99998$, $f(-0.01) \\approx 0.99998$, $f(-0.1) \\approx 0.998$. Estimate $\\lim_{x \\to 0} f(x)$.',
        choices: [
            '$0$',
            '$0.998$',
            '$1$',
            'Does not exist'
        ],
        correct: 2,
        explanation: 'The values approach $1$ from both sides. This is the famous limit $\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$.'
    },
    {
        topic: '1.4',
        type: 'multiple_choice',
        difficulty: 'easy',
        stem: 'If a table shows $f(x)$ values becoming $10, 100, 1000, 10000$ as $x$ approaches $c$, then:',
        choices: [
            '$\\lim_{x \\to c} f(x) = 10000$',
            '$\\lim_{x \\to c} f(x) = \\infty$',
            '$\\lim_{x \\to c} f(x)$ is finite',
            '$\\lim_{x \\to c} f(x) = 0$'
        ],
        correct: 1,
        explanation: 'When values grow without bound, we say the limit is $\\infty$. This indicates the function doesn\'t approach a finite value.'
    },
    {
        topic: '1.4',
        type: 'multiple_choice',
        difficulty: 'medium',
        stem: 'A limitation of using tables to find limits is:',
        choices: [
            'Tables can\'t show if a limit exists',
            'Tables only give estimates, not proofs',
            'Tables only work for polynomial functions',
            'Tables can\'t detect infinite limits'
        ],
        correct: 1,
        explanation: 'Tables show a pattern but can\'t prove the limit definitively. A function could behave unexpectedly between the tested values.'
    },
    {
        topic: '1.4',
        type: 'multiple_choice',
        difficulty: 'hard',
        stem: 'A table for $g(x)$ near $x = 0$ shows: $g(-0.1) = 5.01$, $g(-0.01) = 5.0001$, $g(0.01) = 5.0001$, $g(0.1) = 5.01$. However, $g(0) = -3$. What is $\\lim_{x \\to 0} g(x)$?',
        choices: [
            '$-3$',
            '$5$',
            '$1$',
            'Does not exist'
        ],
        correct: 1,
        explanation: 'The limit depends on what values the function approaches, not the value at the point. The table shows values approaching $5$ from both sides, so the limit is $5$.'
    },
    {
        topic: '1.4',
        type: 'multiple_choice',
        difficulty: 'medium',
        stem: 'To estimate $\\lim_{x \\to 5^+} f(x)$, which $x$ values should you use?',
        choices: [
            '$4.9, 4.99, 4.999$',
            '$5.1, 5.01, 5.001$',
            '$4, 5, 6$',
            '$0, 2.5, 5$'
        ],
        correct: 1,
        explanation: 'The $^+$ means approaching from the right (values greater than $5$). Use values like $5.1, 5.01, 5.001$ that approach $5$ from above.'
    },

    // ============================================
    // TOPIC 1.5: Algebraic Properties of Limits
    // ============================================
    {
        topic: '1.5',
        type: 'multiple_choice',
        difficulty: 'easy',
        stem: 'If $\\lim_{x \\to c} f(x) = 4$ and $\\lim_{x \\to c} g(x) = 3$, then $\\lim_{x \\to c} [f(x) + g(x)] =$',
        choices: [
            '$1$',
            '$7$',
            '$12$',
            '$\\frac{4}{3}$'
        ],
        correct: 1,
        explanation: 'By the Sum Rule for limits: $\\lim [f + g] = \\lim f + \\lim g = 4 + 3 = 7$.'
    },
    {
        topic: '1.5',
        type: 'multiple_choice',
        difficulty: 'easy',
        stem: 'If $\\lim_{x \\to 2} f(x) = 5$, then $\\lim_{x \\to 2} [3f(x)] =$',
        choices: [
            '$5$',
            '$8$',
            '$15$',
            '$\\frac{5}{3}$'
        ],
        correct: 2,
        explanation: 'By the Constant Multiple Rule: $\\lim [cf(x)] = c \\cdot \\lim f(x) = 3 \\cdot 5 = 15$.'
    },
    {
        topic: '1.5',
        type: 'multiple_choice',
        difficulty: 'medium',
        stem: 'Find $\\lim_{x \\to 3} (x^2 - 2x + 1)$.',
        choices: [
            '$3$',
            '$4$',
            '$6$',
            '$10$'
        ],
        correct: 1,
        explanation: 'For polynomials, substitute directly: $(3)^2 - 2(3) + 1 = 9 - 6 + 1 = 4$.'
    },
    {
        topic: '1.5',
        type: 'multiple_choice',
        difficulty: 'medium',
        stem: 'If $\\lim_{x \\to 1} f(x) = 2$ and $\\lim_{x \\to 1} g(x) = 4$, find $\\lim_{x \\to 1} [f(x) \\cdot g(x)]$.',
        choices: [
            '$2$',
            '$6$',
            '$8$',
            '$16$'
        ],
        correct: 2,
        explanation: 'By the Product Rule: $\\lim [f \\cdot g] = \\lim f \\cdot \\lim g = 2 \\cdot 4 = 8$.'
    },
    {
        topic: '1.5',
        type: 'multiple_choice',
        difficulty: 'medium',
        stem: 'Find $\\lim_{x \\to 4} \\frac{x + 1}{x - 2}$.',
        choices: [
            '$\\frac{3}{2}$',
            '$\\frac{5}{2}$',
            '$3$',
            'Does not exist'
        ],
        correct: 1,
        explanation: 'Since the denominator is not zero at $x = 4$, substitute directly: $\\frac{4 + 1}{4 - 2} = \\frac{5}{2}$.'
    },
    {
        topic: '1.5',
        type: 'multiple_choice',
        difficulty: 'hard',
        stem: 'If $\\lim_{x \\to a} f(x) = 3$, find $\\lim_{x \\to a} [f(x)]^3$.',
        choices: [
            '$9$',
            '$27$',
            '$3^3 = 27$',
            '$3$'
        ],
        correct: 1,
        explanation: 'By the Power Rule: $\\lim [f(x)]^n = [\\lim f(x)]^n = 3^3 = 27$.'
    },
    {
        topic: '1.5',
        type: 'multiple_choice',
        difficulty: 'easy',
        stem: '$\\lim_{x \\to 5} 7 =$',
        choices: [
            '$5$',
            '$7$',
            '$12$',
            '$35$'
        ],
        correct: 1,
        explanation: 'The limit of a constant is just that constant: $\\lim_{x \\to c} k = k$.'
    },
    {
        topic: '1.5',
        type: 'multiple_choice',
        difficulty: 'hard',
        stem: 'If $\\lim_{x \\to 2} f(x) = 6$ and $\\lim_{x \\to 2} g(x) = 0$, what can we conclude about $\\lim_{x \\to 2} \\frac{f(x)}{g(x)}$?',
        choices: [
            'It equals $0$',
            'It equals $6$',
            'It equals $\\infty$',
            'We cannot use the quotient rule directly'
        ],
        correct: 3,
        explanation: 'The Quotient Rule only applies when the denominator\'s limit is non-zero. When the denominator approaches $0$ and numerator doesn\'t, the limit may be $\\pm\\infty$ or may not exist.'
    },

    // ============================================
    // TOPIC 1.6: Algebraic Manipulation
    // ============================================
    {
        topic: '1.6',
        type: 'multiple_choice',
        difficulty: 'medium',
        stem: 'Find $\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2}$.',
        choices: [
            '$0$',
            '$2$',
            '$4$',
            'Does not exist'
        ],
        correct: 2,
        explanation: 'Factor: $\\frac{(x-2)(x+2)}{x-2} = x + 2$ for $x \\neq 2$. Then $\\lim_{x \\to 2} (x + 2) = 4$.'
    },
    {
        topic: '1.6',
        type: 'multiple_choice',
        difficulty: 'medium',
        stem: 'Find $\\lim_{x \\to -3} \\frac{x^2 - 9}{x + 3}$.',
        choices: [
            '$-6$',
            '$0$',
            '$6$',
            'Does not exist'
        ],
        correct: 0,
        explanation: '$\\frac{x^2 - 9}{x + 3} = \\frac{(x-3)(x+3)}{x+3} = x - 3$ for $x \\neq -3$. Then $\\lim_{x \\to -3} (x - 3) = -6$.'
    },
    {
        topic: '1.6',
        type: 'multiple_choice',
        difficulty: 'hard',
        stem: 'Find $\\lim_{x \\to 4} \\frac{\\sqrt{x} - 2}{x - 4}$.',
        choices: [
            '$0$',
            '$\\frac{1}{4}$',
            '$\\frac{1}{2}$',
            '$1$'
        ],
        correct: 1,
        explanation: 'Note $x - 4 = (\\sqrt{x} - 2)(\\sqrt{x} + 2)$. So $\\frac{\\sqrt{x} - 2}{x - 4} = \\frac{1}{\\sqrt{x} + 2}$. As $x \\to 4$: $\\frac{1}{2 + 2} = \\frac{1}{4}$.'
    },
    {
        topic: '1.6',
        type: 'multiple_choice',
        difficulty: 'hard',
        stem: 'Find $\\lim_{x \\to 0} \\frac{\\sqrt{x + 9} - 3}{x}$.',
        choices: [
            '$0$',
            '$\\frac{1}{6}$',
            '$\\frac{1}{3}$',
            'Does not exist'
        ],
        correct: 1,
        explanation: 'Rationalize: multiply by $\\frac{\\sqrt{x+9} + 3}{\\sqrt{x+9} + 3}$. Get $\\frac{x}{x(\\sqrt{x+9} + 3)} = \\frac{1}{\\sqrt{x+9} + 3}$. At $x = 0$: $\\frac{1}{3 + 3} = \\frac{1}{6}$.'
    },
    {
        topic: '1.6',
        type: 'multiple_choice',
        difficulty: 'medium',
        stem: 'Find $\\lim_{x \\to 1} \\frac{x^3 - 1}{x - 1}$.',
        choices: [
            '$1$',
            '$2$',
            '$3$',
            'Does not exist'
        ],
        correct: 2,
        explanation: 'Factor: $x^3 - 1 = (x - 1)(x^2 + x + 1)$. So $\\frac{x^3 - 1}{x - 1} = x^2 + x + 1$. At $x = 1$: $1 + 1 + 1 = 3$.'
    },
    {
        topic: '1.6',
        type: 'multiple_choice',
        difficulty: 'easy',
        stem: 'If direct substitution gives $\\frac{0}{0}$, the limit:',
        choices: [
            'Always equals $0$',
            'Always equals $1$',
            'Does not exist',
            'May exist but requires more work to find'
        ],
        correct: 3,
        explanation: '$\\frac{0}{0}$ is an indeterminate form. The limit might exist (and be any value) or might not exist. We need algebraic manipulation to determine.'
    },
    {
        topic: '1.6',
        type: 'multiple_choice',
        difficulty: 'hard',
        stem: 'Find $\\lim_{h \\to 0} \\frac{(2+h)^2 - 4}{h}$.',
        choices: [
            '$0$',
            '$2$',
            '$4$',
            '$8$'
        ],
        correct: 2,
        explanation: 'Expand: $(2+h)^2 = 4 + 4h + h^2$. So $\\frac{4 + 4h + h^2 - 4}{h} = \\frac{4h + h^2}{h} = 4 + h$. As $h \\to 0$: $4$.'
    },
    {
        topic: '1.6',
        type: 'multiple_choice',
        difficulty: 'hard',
        stem: 'Find $\\lim_{x \\to 0} \\frac{\\frac{1}{x+3} - \\frac{1}{3}}{x}$.',
        choices: [
            '$-\\frac{1}{9}$',
            '$0$',
            '$\\frac{1}{9}$',
            '$\\frac{1}{3}$'
        ],
        correct: 0,
        explanation: 'Combine numerator: $\\frac{3 - (x+3)}{3(x+3)} = \\frac{-x}{3(x+3)}$. Then $\\frac{-x}{3(x+3)x} = \\frac{-1}{3(x+3)}$. At $x = 0$: $\\frac{-1}{9}$.'
    },

    // ============================================
    // TOPIC 1.7: Selecting Procedures
    // ============================================
    {
        topic: '1.7',
        type: 'multiple_choice',
        difficulty: 'medium',
        stem: 'To find $\\lim_{x \\to 5} \\frac{x^2 - 25}{x - 5}$, the best first step is:',
        choices: [
            'Use a table of values',
            'Factor the numerator',
            'Rationalize the denominator',
            'Apply L\'Hôpital\'s Rule'
        ],
        correct: 1,
        explanation: 'The numerator $x^2 - 25 = (x-5)(x+5)$ factors nicely, allowing us to cancel the $(x-5)$ term.'
    },
    {
        topic: '1.7',
        type: 'multiple_choice',
        difficulty: 'medium',
        stem: 'To find $\\lim_{x \\to 9} \\frac{\\sqrt{x} - 3}{x - 9}$, the best approach is:',
        choices: [
            'Direct substitution',
            'Factor $x - 9$',
            'Rationalize by noting $x - 9 = (\\sqrt{x} - 3)(\\sqrt{x} + 3)$',
            'Use a table of values'
        ],
        correct: 2,
        explanation: 'Recognizing $x - 9 = (\\sqrt{x})^2 - 9 = (\\sqrt{x} - 3)(\\sqrt{x} + 3)$ lets us cancel the $(\\sqrt{x} - 3)$ factor.'
    },
    {
        topic: '1.7',
        type: 'multiple_choice',
        difficulty: 'easy',
        stem: 'If direct substitution into $\\lim_{x \\to a} f(x)$ gives a number (not $\\frac{0}{0}$ or $\\frac{k}{0}$), then:',
        choices: [
            'The limit does not exist',
            'That number is the limit',
            'You need to factor first',
            'The limit is $0$'
        ],
        correct: 1,
        explanation: 'When direct substitution works (gives a finite result), that result is the limit. No further work needed!'
    },
    {
        topic: '1.7',
        type: 'multiple_choice',
        difficulty: 'medium',
        stem: '$\\lim_{x \\to 0} \\frac{\\sin(5x)}{x}$ should be rewritten as:',
        choices: [
            '$\\frac{\\sin 5}{0}$',
            '$5 \\cdot \\frac{\\sin(5x)}{5x}$',
            '$\\sin 5$',
            '$\\frac{5x}{\\sin(5x)}$'
        ],
        correct: 1,
        explanation: 'Rewrite as $5 \\cdot \\frac{\\sin(5x)}{5x}$. Using $\\lim_{u \\to 0} \\frac{\\sin u}{u} = 1$ with $u = 5x$, the limit is $5 \\cdot 1 = 5$.'
    },
    {
        topic: '1.7',
        type: 'multiple_choice',
        difficulty: 'hard',
        stem: 'For $\\lim_{x \\to 4} \\frac{x - 4}{\\sqrt{x} - 2}$, the best strategy is:',
        choices: [
            'Direct substitution',
            'Multiply by $\\frac{\\sqrt{x} + 2}{\\sqrt{x} + 2}$',
            'Factor the numerator as $(\\sqrt{x}-2)(\\sqrt{x}+2)$',
            'Use L\'Hôpital\'s Rule'
        ],
        correct: 2,
        explanation: 'Since $x - 4 = (\\sqrt{x})^2 - 4 = (\\sqrt{x} - 2)(\\sqrt{x} + 2)$, we can cancel with the denominator to get $\\sqrt{x} + 2 \\to 4$.'
    },
    {
        topic: '1.7',
        type: 'multiple_choice',
        difficulty: 'easy',
        stem: 'If $\\lim_{x \\to 3} f(x)$ gives $\\frac{5}{0}$ (nonzero over zero), the limit:',
        choices: [
            'Equals $5$',
            'Equals $0$',
            'Is $\\pm\\infty$ or does not exist',
            'Equals $\\frac{5}{0}$'
        ],
        correct: 2,
        explanation: 'Nonzero divided by zero indicates a vertical asymptote. The limit is $+\\infty$, $-\\infty$, or DNE (if different from each side).'
    },
    {
        topic: '1.7',
        type: 'multiple_choice',
        difficulty: 'hard',
        stem: 'To find $\\lim_{x \\to 1} \\frac{x^{1/3} - 1}{x - 1}$, use the factoring:',
        choices: [
            '$x - 1 = (x^{1/3})^3 - 1$',
            '$x^{1/3} - 1 = (x - 1)^{1/3}$',
            'Direct substitution works',
            'Rationalization'
        ],
        correct: 0,
        explanation: 'Using $a^3 - b^3 = (a-b)(a^2 + ab + b^2)$ with $a = x^{1/3}$, $b = 1$: $x - 1 = (x^{1/3} - 1)(x^{2/3} + x^{1/3} + 1)$. The limit is $\\frac{1}{3}$.'
    },
    {
        topic: '1.7',
        type: 'multiple_choice',
        difficulty: 'medium',
        stem: '$\\lim_{x \\to 0} \\frac{1 - \\cos x}{x}$ equals:',
        choices: [
            '$0$',
            '$1$',
            '$-1$',
            'Does not exist'
        ],
        correct: 0,
        explanation: 'This is a standard limit: $\\lim_{x \\to 0} \\frac{1 - \\cos x}{x} = 0$. It can be shown using L\'Hôpital\'s Rule or the half-angle identity.'
    },

    // ============================================
    // TOPIC 1.8: Squeeze Theorem
    // ============================================
    {
        topic: '1.8',
        type: 'multiple_choice',
        difficulty: 'easy',
        stem: 'The Squeeze Theorem requires:',
        choices: [
            '$f(x) = g(x) = h(x)$ near $c$',
            '$g(x) \\leq f(x) \\leq h(x)$ and $\\lim g = \\lim h = L$',
            '$f$, $g$, $h$ all continuous',
            'All three functions equal at $x = c$'
        ],
        correct: 1,
        explanation: 'If $g(x) \\leq f(x) \\leq h(x)$ near $c$, and both $g$ and $h$ approach the same limit $L$, then $f$ is "squeezed" to approach $L$ as well.'
    },
    {
        topic: '1.8',
        type: 'multiple_choice',
        difficulty: 'medium',
        stem: 'To find $\\lim_{x \\to 0} x^2 \\sin\\left(\\frac{1}{x}\\right)$, we use that:',
        choices: [
            '$\\sin\\left(\\frac{1}{x}\\right) \\to 0$',
            '$-x^2 \\leq x^2 \\sin\\left(\\frac{1}{x}\\right) \\leq x^2$',
            '$x^2 \\to \\infty$',
            'Direct substitution works'
        ],
        correct: 1,
        explanation: 'Since $-1 \\leq \\sin(\\cdot) \\leq 1$, we have $-x^2 \\leq x^2\\sin(1/x) \\leq x^2$. Both bounds approach $0$, so by Squeeze Theorem, the limit is $0$.'
    },
    {
        topic: '1.8',
        type: 'multiple_choice',
        difficulty: 'medium',
        stem: 'Find $\\lim_{x \\to 0} x \\cos\\left(\\frac{1}{x}\\right)$.',
        choices: [
            '$1$',
            '$0$',
            '$-1$',
            'Does not exist'
        ],
        correct: 1,
        explanation: 'Since $-1 \\leq \\cos(1/x) \\leq 1$, we have $-|x| \\leq x\\cos(1/x) \\leq |x|$. Both bounds $\\to 0$, so by Squeeze Theorem, the limit is $0$.'
    },
    {
        topic: '1.8',
        type: 'multiple_choice',
        difficulty: 'hard',
        stem: 'The Squeeze Theorem is used to prove $\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$ by showing:',
        choices: [
            '$\\sin x = x$ near $0$',
            '$\\frac{\\sin x}{x} = 1$ for small $x$',
            '$\\cos x \\leq \\frac{\\sin x}{x} \\leq 1$ for small positive $x$',
            '$0 \\leq \\frac{\\sin x}{x} \\leq 2$'
        ],
        correct: 2,
        explanation: 'Geometric arguments show $\\cos x \\leq \\frac{\\sin x}{x} \\leq 1$ for $0 < x < \\frac{\\pi}{2}$. Since $\\cos x \\to 1$, the Squeeze Theorem gives the limit as $1$.'
    },
    {
        topic: '1.8',
        type: 'multiple_choice',
        difficulty: 'easy',
        stem: 'If $g(x) \\leq f(x) \\leq h(x)$ and $\\lim_{x \\to c} g(x) = 2$ while $\\lim_{x \\to c} h(x) = 4$, what can we conclude about $\\lim_{x \\to c} f(x)$?',
        choices: [
            'It equals $3$',
            'It equals $2$',
            'It equals $4$',
            'We cannot use the Squeeze Theorem'
        ],
        correct: 3,
        explanation: 'The Squeeze Theorem requires both bounding limits to be equal. Since $2 \\neq 4$, we can only conclude the limit is between $2$ and $4$, not its exact value.'
    },
    {
        topic: '1.8',
        type: 'multiple_choice',
        difficulty: 'hard',
        stem: 'Find $\\lim_{x \\to 0^+} \\sqrt{x} \\sin\\left(\\frac{1}{x}\\right)$.',
        choices: [
            '$1$',
            '$0$',
            '$\\infty$',
            'Does not exist'
        ],
        correct: 1,
        explanation: 'Since $|\\sin(1/x)| \\leq 1$, we have $-\\sqrt{x} \\leq \\sqrt{x}\\sin(1/x) \\leq \\sqrt{x}$. As $x \\to 0^+$, $\\sqrt{x} \\to 0$, so the limit is $0$.'
    },
    {
        topic: '1.8',
        type: 'multiple_choice',
        difficulty: 'medium',
        stem: 'Why doesn\'t the Squeeze Theorem apply to $\\lim_{x \\to 0} \\sin\\left(\\frac{1}{x}\\right)$ directly?',
        choices: [
            'The function is not defined at $0$',
            'The function oscillates without bound',
            'We can\'t find bounds that squeeze to the same limit',
            'The Squeeze Theorem only works for polynomial functions'
        ],
        correct: 2,
        explanation: 'While $-1 \\leq \\sin(1/x) \\leq 1$, these bounds don\'t squeeze to a common limit (they stay at $-1$ and $1$). The function oscillates between these bounds forever.'
    },
    {
        topic: '1.8',
        type: 'multiple_choice',
        difficulty: 'hard',
        stem: 'Find $\\lim_{x \\to \\infty} \\frac{\\sin x}{x}$.',
        choices: [
            '$1$',
            '$0$',
            '$\\infty$',
            'Does not exist'
        ],
        correct: 1,
        explanation: 'Since $-1 \\leq \\sin x \\leq 1$, we have $-\\frac{1}{x} \\leq \\frac{\\sin x}{x} \\leq \\frac{1}{x}$. As $x \\to \\infty$, both bounds $\\to 0$, so the limit is $0$.'
    },

    // ============================================
    // TOPIC 1.9: Connecting Representations
    // ============================================
    {
        topic: '1.9',
        type: 'multiple_choice',
        difficulty: 'medium',
        stem: 'A graph shows a hole at $(3, 5)$ and a solid point at $(3, 2)$. What is $\\lim_{x \\to 3} f(x)$?',
        choices: [
            '$2$',
            '$3$',
            '$5$',
            'Does not exist'
        ],
        correct: 2,
        explanation: 'The hole at $(3, 5)$ shows where the curve approaches: $y = 5$. The solid point at $(3, 2)$ shows $f(3) = 2$, but that doesn\'t affect the limit.'
    },
    {
        topic: '1.9',
        type: 'multiple_choice',
        difficulty: 'medium',
        stem: 'For $f(x) = \\frac{|x|}{x}$, which is true?',
        choices: [
            '$\\lim_{x \\to 0} f(x) = 1$',
            '$\\lim_{x \\to 0} f(x) = -1$',
            '$\\lim_{x \\to 0} f(x) = 0$',
            '$\\lim_{x \\to 0} f(x)$ does not exist'
        ],
        correct: 3,
        explanation: 'For $x > 0$: $f(x) = 1$. For $x < 0$: $f(x) = -1$. The one-sided limits differ ($1 \\neq -1$), so the two-sided limit does not exist.'
    },
    {
        topic: '1.9',
        type: 'multiple_choice',
        difficulty: 'hard',
        stem: 'Algebraically, $\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2} = 4$. A table should show values approaching:',
        choices: [
            '$2$ from both sides',
            '$4$ from both sides',
            '$0$ from both sides',
            'Different values from each side'
        ],
        correct: 1,
        explanation: 'The algebraic result says the limit is $4$. A table would show $f(1.9) \\approx 3.9$, $f(1.99) \\approx 3.99$, $f(2.01) \\approx 4.01$, etc., all approaching $4$.'
    },
    {
        topic: '1.9',
        type: 'multiple_choice',
        difficulty: 'easy',
        stem: 'If a function is continuous at $x = c$, then:',
        choices: [
            'The limit might not exist',
            'The limit exists and equals $f(c)$',
            'The limit equals $0$',
            'The function has no graph at $x = c$'
        ],
        correct: 1,
        explanation: 'By definition of continuity: $\\lim_{x \\to c} f(x) = f(c)$. The limit exists and equals the function value.'
    },
    {
        topic: '1.9',
        type: 'multiple_choice',
        difficulty: 'medium',
        stem: 'The piecewise function $f(x) = \\begin{cases} 2x & x \\leq 1 \\\\ x + 1 & x > 1 \\end{cases}$ has what behavior at $x = 1$?',
        choices: [
            'Continuous',
            'Jump discontinuity',
            'Removable discontinuity',
            'Infinite discontinuity'
        ],
        correct: 0,
        explanation: '$\\lim_{x \\to 1^-} 2x = 2$, $\\lim_{x \\to 1^+} (x+1) = 2$, and $f(1) = 2$. All three equal $2$, so $f$ is continuous at $x = 1$.'
    },
    {
        topic: '1.9',
        type: 'multiple_choice',
        difficulty: 'hard',
        stem: 'A graph shows $f$ approaching $y = 3$ as $x \\to 5$ from both sides. A table shows $f(4.999) = 2.999$ and $f(5.001) = 3.001$. These representations:',
        choices: [
            'Contradict each other',
            'Both support $\\lim_{x \\to 5} f(x) = 3$',
            'Show the limit does not exist',
            'Show $f(5) = 3$'
        ],
        correct: 1,
        explanation: 'Both representations show values approaching $3$ from both sides, consistently supporting $\\lim_{x \\to 5} f(x) = 3$.'
    },
    {
        topic: '1.9',
        type: 'multiple_choice',
        difficulty: 'medium',
        stem: 'For verification, if algebra gives $\\lim_{x \\to 4} f(x) = 7$, a graph should show:',
        choices: [
            'A maximum at $(4, 7)$',
            'The curve approaching height $7$ as $x$ approaches $4$',
            'A vertical asymptote at $x = 4$',
            'The curve passing through $(7, 4)$'
        ],
        correct: 1,
        explanation: 'The limit describes what $y$-value the curve approaches as $x$ approaches $4$. The curve should head toward $y = 7$ from both sides.'
    },
    {
        topic: '1.9',
        type: 'multiple_choice',
        difficulty: 'hard',
        stem: 'A table shows $f(x)$ values: $f(2.9) = 5.1$, $f(2.99) = 5.01$, $f(3) = \\text{ERROR}$, $f(3.01) = 4.99$, $f(3.1) = 4.9$. What can we conclude?',
        choices: [
            '$\\lim_{x \\to 3} f(x) = 5$',
            '$\\lim_{x \\to 3} f(x)$ does not exist',
            '$f(3) = 5$',
            'The function is continuous at $3$'
        ],
        correct: 0,
        explanation: 'From the left: approaching $5$. From the right: approaching $5$. Even though $f(3)$ is undefined, the limit exists and equals $5$.'
    },

    // ============================================
    // TOPIC 1.10: Types of Discontinuities
    // ============================================
    {
        topic: '1.10',
        type: 'multiple_choice',
        difficulty: 'easy',
        stem: 'A removable discontinuity occurs when:',
        choices: [
            'The one-sided limits differ',
            'The function approaches infinity',
            'The limit exists but doesn\'t equal $f(c)$ (or $f(c)$ undefined)',
            'The function is continuous'
        ],
        correct: 2,
        explanation: 'A removable discontinuity is one where the limit exists. The discontinuity is because either $f(c)$ is undefined or $f(c) \\neq \\lim f(x)$.'
    },
    {
        topic: '1.10',
        type: 'multiple_choice',
        difficulty: 'medium',
        stem: 'The function $f(x) = \\frac{x^2 - 1}{x - 1}$ has what type of discontinuity at $x = 1$?',
        choices: [
            'No discontinuity',
            'Removable discontinuity',
            'Jump discontinuity',
            'Infinite discontinuity'
        ],
        correct: 1,
        explanation: '$\\lim_{x \\to 1} \\frac{(x-1)(x+1)}{x-1} = 2$ exists, but $f(1)$ is undefined. This is a removable discontinuity (a "hole").'
    },
    {
        topic: '1.10',
        type: 'multiple_choice',
        difficulty: 'medium',
        stem: 'The greatest integer function $f(x) = \\lfloor x \\rfloor$ has what type of discontinuity at integer values?',
        choices: [
            'Removable discontinuity',
            'Jump discontinuity',
            'Infinite discontinuity',
            'No discontinuity'
        ],
        correct: 1,
        explanation: 'At each integer $n$: $\\lim_{x \\to n^-} \\lfloor x \\rfloor = n - 1$ but $\\lim_{x \\to n^+} \\lfloor x \\rfloor = n$. The one-sided limits differ: jump discontinuity.'
    },
    {
        topic: '1.10',
        type: 'multiple_choice',
        difficulty: 'easy',
        stem: 'The function $f(x) = \\frac{1}{x - 2}$ has what type of discontinuity at $x = 2$?',
        choices: [
            'Removable discontinuity',
            'Jump discontinuity',
            'Infinite discontinuity',
            'No discontinuity'
        ],
        correct: 2,
        explanation: 'As $x \\to 2$, $f(x) \\to \\pm\\infty$ (vertical asymptote). This is an infinite discontinuity.'
    },
    {
        topic: '1.10',
        type: 'multiple_choice',
        difficulty: 'hard',
        stem: 'Which discontinuity type CANNOT be "fixed" by redefining the function at a single point?',
        choices: [
            'Removable discontinuity',
            'Hole in the graph',
            'Jump discontinuity',
            'A discontinuity where the limit exists'
        ],
        correct: 2,
        explanation: 'Jump discontinuities have different left and right limits. No single value can make the function continuous. Only removable discontinuities can be "fixed."'
    },
    {
        topic: '1.10',
        type: 'multiple_choice',
        difficulty: 'medium',
        stem: 'At $x = 0$, the function $f(x) = \\frac{\\sin x}{x}$ has:',
        choices: [
            'A jump discontinuity',
            'An infinite discontinuity',
            'A removable discontinuity',
            'No discontinuity'
        ],
        correct: 2,
        explanation: '$f(0)$ is undefined, but $\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$ exists. This is a removable discontinuity.'
    },
    {
        topic: '1.10',
        type: 'multiple_choice',
        difficulty: 'hard',
        stem: 'Classify the discontinuity of $f(x) = \\frac{|x - 3|}{x - 3}$ at $x = 3$.',
        choices: [
            'Removable',
            'Jump',
            'Infinite',
            'No discontinuity'
        ],
        correct: 1,
        explanation: 'For $x > 3$: $f(x) = 1$. For $x < 3$: $f(x) = -1$. Left limit = $-1$, right limit = $1$. Since they differ, it\'s a jump discontinuity.'
    },
    {
        topic: '1.10',
        type: 'multiple_choice',
        difficulty: 'hard',
        stem: 'The function $f(x) = \\frac{x}{x^2}$ simplified is $\\frac{1}{x}$. At $x = 0$, the discontinuity is:',
        choices: [
            'Removable',
            'Jump',
            'Infinite',
            'There is no discontinuity'
        ],
        correct: 2,
        explanation: 'Simplifying gives $f(x) = \\frac{1}{x}$ for $x \\neq 0$. As $x \\to 0$, $f(x) \\to \\pm\\infty$. This is an infinite discontinuity.'
    },

    // ============================================
    // TOPIC 1.11: Continuity at a Point
    // ============================================
    {
        topic: '1.11',
        type: 'multiple_choice',
        difficulty: 'easy',
        stem: 'For $f$ to be continuous at $x = c$, how many conditions must be satisfied?',
        choices: [
            'One',
            'Two',
            'Three',
            'Four'
        ],
        correct: 2,
        explanation: 'Three conditions: (1) $f(c)$ is defined, (2) $\\lim_{x \\to c} f(x)$ exists, (3) $\\lim_{x \\to c} f(x) = f(c)$.'
    },
    {
        topic: '1.11',
        type: 'multiple_choice',
        difficulty: 'medium',
        stem: 'If $f(2) = 5$ and $\\lim_{x \\to 2} f(x) = 5$, then $f$ is:',
        choices: [
            'Not continuous at $x = 2$',
            'Continuous at $x = 2$',
            'Has a removable discontinuity at $x = 2$',
            'Cannot be determined'
        ],
        correct: 1,
        explanation: 'All three conditions are met: $f(2)$ exists, the limit exists, and they\'re equal. Therefore $f$ is continuous at $x = 2$.'
    },
    {
        topic: '1.11',
        type: 'multiple_choice',
        difficulty: 'medium',
        stem: 'Is $f(x) = x^2 + 3x - 1$ continuous at $x = 4$?',
        choices: [
            'Yes, because it\'s a polynomial',
            'No, because $f(4) \\neq 0$',
            'Only if we check the limit',
            'No, because it has two terms with $x$'
        ],
        correct: 0,
        explanation: 'All polynomials are continuous everywhere. We don\'t need to check—polynomial functions automatically satisfy all three continuity conditions.'
    },
    {
        topic: '1.11',
        type: 'multiple_choice',
        difficulty: 'hard',
        stem: 'If $\\lim_{x \\to 3} f(x) = 7$ but $f(3)$ is undefined, then at $x = 3$, $f$ has:',
        choices: [
            'A jump discontinuity',
            'An infinite discontinuity',
            'A removable discontinuity',
            'No discontinuity'
        ],
        correct: 2,
        explanation: 'The limit exists, but the function value doesn\'t. This is a removable discontinuity—we could define $f(3) = 7$ to make it continuous.'
    },
    {
        topic: '1.11',
        type: 'multiple_choice',
        difficulty: 'medium',
        stem: 'The function $f(x) = \\frac{x + 1}{x - 3}$ is continuous at $x = 5$ because:',
        choices: [
            '$f(5) = 3$',
            'The denominator is not zero at $x = 5$',
            'It\'s a rational function',
            'Both A and B'
        ],
        correct: 3,
        explanation: 'Rational functions are continuous wherever defined (denominator $\\neq 0$). At $x = 5$: denominator $= 2 \\neq 0$, and $f(5) = 6/2 = 3$.'
    },
    {
        topic: '1.11',
        type: 'multiple_choice',
        difficulty: 'easy',
        stem: 'Which function is continuous everywhere?',
        choices: [
            '$f(x) = \\frac{1}{x}$',
            '$f(x) = \\tan x$',
            '$f(x) = e^x$',
            '$f(x) = \\ln x$'
        ],
        correct: 2,
        explanation: '$e^x$ is continuous for all real numbers. The others have discontinuities: $\\frac{1}{x}$ at $0$, $\\tan x$ at odd multiples of $\\frac{\\pi}{2}$, $\\ln x$ undefined for $x \\leq 0$.'
    },
    {
        topic: '1.11',
        type: 'multiple_choice',
        difficulty: 'hard',
        stem: 'If $f$ is continuous at $c$ and $g$ is continuous at $f(c)$, then $g(f(x))$ is:',
        choices: [
            'Not necessarily continuous',
            'Continuous at $c$',
            'Continuous everywhere',
            'Undefined at $c$'
        ],
        correct: 1,
        explanation: 'The composition of continuous functions is continuous. Since $f$ is continuous at $c$ and $g$ is continuous at $f(c)$, $g \\circ f$ is continuous at $c$.'
    },
    {
        topic: '1.11',
        type: 'multiple_choice',
        difficulty: 'hard',
        stem: 'For $f(x) = \\begin{cases} x^2 & x \\neq 2 \\\\ 3 & x = 2 \\end{cases}$, is $f$ continuous at $x = 2$?',
        choices: [
            'Yes',
            'No, because $\\lim_{x \\to 2} f(x) \\neq f(2)$',
            'No, because the limit doesn\'t exist',
            'No, because $f(2)$ is undefined'
        ],
        correct: 1,
        explanation: '$\\lim_{x \\to 2} x^2 = 4$, but $f(2) = 3$. Since $4 \\neq 3$, the third condition fails: $f$ is not continuous at $x = 2$.'
    },

    // ============================================
    // TOPIC 1.12: Continuity over an Interval
    // ============================================
    {
        topic: '1.12',
        type: 'multiple_choice',
        difficulty: 'easy',
        stem: 'For continuity on a closed interval $[a, b]$, at the endpoints we use:',
        choices: [
            'Two-sided limits',
            'One-sided limits',
            'The derivative',
            'The function must equal zero'
        ],
        correct: 1,
        explanation: 'At $x = a$, we use the right-hand limit; at $x = b$, we use the left-hand limit. We can only approach endpoints from inside the interval.'
    },
    {
        topic: '1.12',
        type: 'multiple_choice',
        difficulty: 'medium',
        stem: 'Is $f(x) = \\sqrt{x}$ continuous on $[0, 9]$?',
        choices: [
            'No, because $f(0) = 0$',
            'No, because it\'s not a polynomial',
            'Yes',
            'Only on $(0, 9)$'
        ],
        correct: 2,
        explanation: '$\\sqrt{x}$ is continuous on $(0, 9)$. At $x = 0$: $\\lim_{x \\to 0^+} \\sqrt{x} = 0 = f(0)$. At $x = 9$: $\\lim_{x \\to 9^-} \\sqrt{x} = 3 = f(9)$. Yes, continuous on $[0, 9]$.'
    },
    {
        topic: '1.12',
        type: 'multiple_choice',
        difficulty: 'hard',
        stem: 'The function $f(x) = \\frac{1}{x - 2}$ is continuous on which interval?',
        choices: [
            '$[0, 3]$',
            '$[0, 2]$',
            '$[3, 5]$',
            '$(-\\infty, \\infty)$'
        ],
        correct: 2,
        explanation: '$f$ has a discontinuity at $x = 2$. The interval $[3, 5]$ doesn\'t include $x = 2$, so $f$ is continuous there.'
    },
    {
        topic: '1.12',
        type: 'multiple_choice',
        difficulty: 'medium',
        stem: 'A polynomial function is continuous on:',
        choices: [
            'Only $[0, \\infty)$',
            'Only where it\'s positive',
            '$(-\\infty, \\infty)$ (all real numbers)',
            'Only at integer points'
        ],
        correct: 2,
        explanation: 'Polynomials are continuous on the entire real line—they have no discontinuities anywhere.'
    },
    {
        topic: '1.12',
        type: 'multiple_choice',
        difficulty: 'hard',
        stem: 'For the piecewise function $f(x) = \\begin{cases} 3x - 1 & x < 2 \\\\ 5 & x = 2 \\\\ x^2 + 1 & x > 2 \\end{cases}$, is $f$ continuous on $[0, 4]$?',
        choices: [
            'Yes',
            'No, discontinuous at $x = 2$',
            'No, discontinuous at $x = 0$',
            'No, discontinuous at $x = 4$'
        ],
        correct: 1,
        explanation: '$\\lim_{x \\to 2^-} (3x-1) = 5$ and $\\lim_{x \\to 2^+} (x^2+1) = 5$, so the limit is $5$. And $f(2) = 5$. So $f$ is actually continuous at $2$. Checking the pieces: each piece is continuous on its subdomain. So $f$ is continuous on $[0, 4]$. Wait, let me recheck: from left, $3(2)-1=5$. From right, $4+1=5$. $f(2)=5$. All equal 5, so continuous!'
    },
    {
        topic: '1.12',
        type: 'multiple_choice',
        difficulty: 'medium',
        stem: '$f(x) = \\ln x$ is continuous on which interval?',
        choices: [
            '$(-\\infty, \\infty)$',
            '$[0, \\infty)$',
            '$(0, \\infty)$',
            '$[-1, 1]$'
        ],
        correct: 2,
        explanation: '$\\ln x$ is only defined for $x > 0$. On its domain $(0, \\infty)$, it is continuous.'
    },
    {
        topic: '1.12',
        type: 'multiple_choice',
        difficulty: 'easy',
        stem: 'If $f$ is continuous on $[1, 5]$, then $f$ is definitely continuous at:',
        choices: [
            '$x = 0$',
            '$x = 3$',
            '$x = 6$',
            '$x = -1$'
        ],
        correct: 1,
        explanation: 'Continuity on $[1, 5]$ means $f$ is continuous at every point in that interval. $x = 3$ is in $[1, 5]$, so $f$ is continuous there.'
    },
    {
        topic: '1.12',
        type: 'multiple_choice',
        difficulty: 'hard',
        stem: 'If $f$ and $g$ are both continuous on $[a, b]$, then $f + g$ is:',
        choices: [
            'Not necessarily continuous',
            'Continuous on $[a, b]$',
            'Continuous only at $a$ and $b$',
            'Continuous only if $f = g$'
        ],
        correct: 1,
        explanation: 'The sum of continuous functions is continuous. If $f$ and $g$ are both continuous on $[a, b]$, so is $f + g$.'
    },

    // ============================================
    // TOPIC 1.13: Removing Discontinuities
    // ============================================
    {
        topic: '1.13',
        type: 'multiple_choice',
        difficulty: 'medium',
        stem: 'To remove the discontinuity from $f(x) = \\frac{x^2 - 9}{x - 3}$ at $x = 3$, define $f(3) =$',
        choices: [
            '$0$',
            '$3$',
            '$6$',
            '$9$'
        ],
        correct: 2,
        explanation: '$\\lim_{x \\to 3} \\frac{(x-3)(x+3)}{x-3} = \\lim_{x \\to 3} (x+3) = 6$. Define $f(3) = 6$ to make it continuous.'
    },
    {
        topic: '1.13',
        type: 'multiple_choice',
        difficulty: 'medium',
        stem: 'For $f(x) = \\begin{cases} x + 1 & x < 2 \\\\ k & x = 2 \\\\ x^2 - 1 & x > 2 \\end{cases}$ to be continuous, $k$ must equal:',
        choices: [
            '$2$',
            '$3$',
            'No value works',
            '$4$'
        ],
        correct: 2,
        explanation: '$\\lim_{x \\to 2^-} (x+1) = 3$ but $\\lim_{x \\to 2^+} (x^2-1) = 3$. Both one-sided limits equal $3$, so $k = 3$ makes it continuous.'
    },
    {
        topic: '1.13',
        type: 'multiple_choice',
        difficulty: 'hard',
        stem: 'Find $a$ so that $f(x) = \\begin{cases} ax^2 & x \\leq 1 \\\\ 4x - 2 & x > 1 \\end{cases}$ is continuous.',
        choices: [
            '$a = 1$',
            '$a = 2$',
            '$a = 3$',
            '$a = 4$'
        ],
        correct: 1,
        explanation: 'For continuity: $\\lim_{x \\to 1^-} ax^2 = a$ must equal $\\lim_{x \\to 1^+} (4x-2) = 2$. So $a = 2$.'
    },
    {
        topic: '1.13',
        type: 'multiple_choice',
        difficulty: 'easy',
        stem: 'Which type of discontinuity can be removed by redefining the function at one point?',
        choices: [
            'Jump discontinuity',
            'Infinite discontinuity',
            'Removable discontinuity',
            'All discontinuities'
        ],
        correct: 2,
        explanation: 'Only removable discontinuities (where the limit exists) can be "fixed" by defining the function value to equal the limit.'
    },
    {
        topic: '1.13',
        type: 'multiple_choice',
        difficulty: 'hard',
        stem: 'Find $b$ so that $f(x) = \\begin{cases} \\frac{x^2 - 4}{x - 2} & x \\neq 2 \\\\ b & x = 2 \\end{cases}$ is continuous.',
        choices: [
            '$b = 0$',
            '$b = 2$',
            '$b = 4$',
            '$b = 6$'
        ],
        correct: 2,
        explanation: '$\\lim_{x \\to 2} \\frac{(x-2)(x+2)}{x-2} = 4$. For continuity, $b = f(2)$ must equal the limit, so $b = 4$.'
    },
    {
        topic: '1.13',
        type: 'multiple_choice',
        difficulty: 'medium',
        stem: 'Can the discontinuity of $f(x) = \\frac{1}{x}$ at $x = 0$ be removed?',
        choices: [
            'Yes, by defining $f(0) = 0$',
            'Yes, by defining $f(0) = 1$',
            'No, it\'s an infinite discontinuity',
            'No, it\'s a jump discontinuity'
        ],
        correct: 2,
        explanation: 'At $x = 0$, the function approaches $\\pm\\infty$. The limit doesn\'t exist as a finite number, so this infinite discontinuity cannot be removed.'
    },
    {
        topic: '1.13',
        type: 'multiple_choice',
        difficulty: 'hard',
        stem: 'For $f(x) = \\begin{cases} 3 - x & x < 1 \\\\ ax + b & x \\geq 1 \\end{cases}$ to be continuous with $f(1) = 2$, find $a + b$.',
        choices: [
            '$1$',
            '$2$',
            '$3$',
            '$4$'
        ],
        correct: 1,
        explanation: 'Continuity requires $\\lim_{x \\to 1^-} (3-x) = 2$, which matches. We need $a(1) + b = 2$, so $a + b = 2$.'
    },
    {
        topic: '1.13',
        type: 'multiple_choice',
        difficulty: 'medium',
        stem: 'The "continuous extension" of $\\frac{\\sin x}{x}$ at $x = 0$ is defined as:',
        choices: [
            '$f(0) = 0$',
            '$f(0) = 1$',
            '$f(0) = \\infty$',
            'Cannot be continuously extended'
        ],
        correct: 1,
        explanation: 'Since $\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$, defining $f(0) = 1$ removes the discontinuity and makes the function continuous.'
    },

    // ============================================
    // TOPIC 1.14: Infinite Limits and Vertical Asymptotes
    // ============================================
    {
        topic: '1.14',
        type: 'multiple_choice',
        difficulty: 'easy',
        stem: 'A vertical asymptote occurs where the function:',
        choices: [
            'Equals zero',
            'Approaches $\\pm\\infty$',
            'Is continuous',
            'Has a maximum'
        ],
        correct: 1,
        explanation: 'A vertical asymptote is a vertical line $x = c$ where the function grows without bound ($\\pm\\infty$) as $x$ approaches $c$.'
    },
    {
        topic: '1.14',
        type: 'multiple_choice',
        difficulty: 'medium',
        stem: 'Find all vertical asymptotes of $f(x) = \\frac{x}{x^2 - 4}$.',
        choices: [
            '$x = 0$',
            '$x = 2$',
            '$x = -2$',
            '$x = 2$ and $x = -2$'
        ],
        correct: 3,
        explanation: 'Vertical asymptotes occur where the denominator is zero and the numerator isn\'t. $x^2 - 4 = 0$ when $x = \\pm 2$. At both, the numerator is nonzero.'
    },
    {
        topic: '1.14',
        type: 'multiple_choice',
        difficulty: 'medium',
        stem: 'For $f(x) = \\frac{1}{x - 3}$, what is $\\lim_{x \\to 3^+} f(x)$?',
        choices: [
            '$0$',
            '$+\\infty$',
            '$-\\infty$',
            'Does not exist'
        ],
        correct: 1,
        explanation: 'As $x \\to 3^+$, $x - 3$ is small and positive. So $\\frac{1}{x-3}$ is large and positive: $+\\infty$.'
    },
    {
        topic: '1.14',
        type: 'multiple_choice',
        difficulty: 'medium',
        stem: 'For $f(x) = \\frac{1}{x - 3}$, what is $\\lim_{x \\to 3^-} f(x)$?',
        choices: [
            '$0$',
            '$+\\infty$',
            '$-\\infty$',
            'Does not exist'
        ],
        correct: 2,
        explanation: 'As $x \\to 3^-$, $x - 3$ is small and negative. So $\\frac{1}{x-3}$ is large and negative: $-\\infty$.'
    },
    {
        topic: '1.14',
        type: 'multiple_choice',
        difficulty: 'hard',
        stem: 'For $f(x) = \\frac{x + 1}{(x - 2)^2}$, evaluate $\\lim_{x \\to 2} f(x)$.',
        choices: [
            '$+\\infty$',
            '$-\\infty$',
            '$0$',
            'Does not exist'
        ],
        correct: 0,
        explanation: 'At $x = 2$: numerator $= 3 > 0$, denominator $= (x-2)^2 > 0$ (always positive). Both limits (from left and right) are $+\\infty$, so $\\lim_{x \\to 2} f(x) = +\\infty$.'
    },
    {
        topic: '1.14',
        type: 'multiple_choice',
        difficulty: 'hard',
        stem: 'Does $f(x) = \\frac{x^2 - 4}{x - 2}$ have a vertical asymptote at $x = 2$?',
        choices: [
            'Yes, because the denominator is $0$ at $x = 2$',
            'No, because the numerator is also $0$ at $x = 2$',
            'Yes, because the function is undefined at $x = 2$',
            'Cannot be determined'
        ],
        correct: 1,
        explanation: 'Both numerator and denominator are $0$ at $x = 2$. After factoring: $\\frac{(x-2)(x+2)}{x-2} = x + 2$. There\'s a hole, not an asymptote.'
    },
    {
        topic: '1.14',
        type: 'multiple_choice',
        difficulty: 'medium',
        stem: 'The function $f(x) = \\tan x$ has vertical asymptotes at:',
        choices: [
            '$x = n\\pi$ for integer $n$',
            '$x = \\frac{\\pi}{2} + n\\pi$ for integer $n$',
            '$x = 0$ only',
            '$x = \\pi$ only'
        ],
        correct: 1,
        explanation: '$\\tan x = \\frac{\\sin x}{\\cos x}$. Vertical asymptotes occur where $\\cos x = 0$, which is at $x = \\frac{\\pi}{2} + n\\pi$.'
    },
    {
        topic: '1.14',
        type: 'multiple_choice',
        difficulty: 'hard',
        stem: 'For $f(x) = \\frac{-3}{(x+1)^3}$, evaluate $\\lim_{x \\to -1^+} f(x)$.',
        choices: [
            '$+\\infty$',
            '$-\\infty$',
            '$0$',
            '$-3$'
        ],
        correct: 1,
        explanation: 'As $x \\to -1^+$, $(x+1)$ is small and positive, so $(x+1)^3$ is small and positive. $\\frac{-3}{\\text{small positive}} = -\\infty$.'
    },

    // ============================================
    // TOPIC 1.15: Limits at Infinity and Horizontal Asymptotes
    // ============================================
    {
        topic: '1.15',
        type: 'multiple_choice',
        difficulty: 'easy',
        stem: 'A horizontal asymptote describes the function\'s behavior as:',
        choices: [
            '$x \\to 0$',
            '$x \\to$ a finite value',
            '$x \\to \\pm\\infty$',
            '$y \\to 0$'
        ],
        correct: 2,
        explanation: 'Horizontal asymptotes describe end behavior—what happens to $f(x)$ as $x$ goes to positive or negative infinity.'
    },
    {
        topic: '1.15',
        type: 'multiple_choice',
        difficulty: 'medium',
        stem: 'Find $\\lim_{x \\to \\infty} \\frac{3x^2 + 1}{5x^2 - 2}$.',
        choices: [
            '$0$',
            '$\\frac{3}{5}$',
            '$1$',
            '$\\infty$'
        ],
        correct: 1,
        explanation: 'Degrees are equal (both 2), so divide leading coefficients: $\\frac{3}{5}$.'
    },
    {
        topic: '1.15',
        type: 'multiple_choice',
        difficulty: 'medium',
        stem: 'Find $\\lim_{x \\to \\infty} \\frac{2x + 5}{x^3 - 1}$.',
        choices: [
            '$0$',
            '$2$',
            '$\\infty$',
            'Does not exist'
        ],
        correct: 0,
        explanation: 'Numerator degree ($1$) < denominator degree ($3$). The limit is $0$.'
    },
    {
        topic: '1.15',
        type: 'multiple_choice',
        difficulty: 'medium',
        stem: 'Find $\\lim_{x \\to \\infty} \\frac{x^3 + 2x}{4x^2 - 1}$.',
        choices: [
            '$0$',
            '$\\frac{1}{4}$',
            '$\\infty$',
            '$-\\infty$'
        ],
        correct: 2,
        explanation: 'Numerator degree ($3$) > denominator degree ($2$). The limit is $\\infty$.'
    },
    {
        topic: '1.15',
        type: 'multiple_choice',
        difficulty: 'hard',
        stem: 'Find $\\lim_{x \\to -\\infty} \\frac{x^2 + 1}{x - 3}$.',
        choices: [
            '$+\\infty$',
            '$-\\infty$',
            '$0$',
            '$1$'
        ],
        correct: 1,
        explanation: 'As $x \\to -\\infty$: numerator $\\to +\\infty$, denominator $\\to -\\infty$. $\\frac{\\text{large positive}}{\\text{large negative}} = -\\infty$.'
    },
    {
        topic: '1.15',
        type: 'multiple_choice',
        difficulty: 'hard',
        stem: 'What is the horizontal asymptote of $f(x) = \\frac{2x^2 - 3x}{x^2 + 1}$?',
        choices: [
            '$y = 0$',
            '$y = 2$',
            '$y = -3$',
            'No horizontal asymptote'
        ],
        correct: 1,
        explanation: 'Degrees are equal. HA is $y = \\frac{\\text{leading coeff. of num.}}{\\text{leading coeff. of denom.}} = \\frac{2}{1} = 2$.'
    },
    {
        topic: '1.15',
        type: 'multiple_choice',
        difficulty: 'medium',
        stem: 'Find $\\lim_{x \\to \\infty} \\frac{5}{x^2 + 1}$.',
        choices: [
            '$0$',
            '$5$',
            '$\\infty$',
            'Does not exist'
        ],
        correct: 0,
        explanation: 'As $x \\to \\infty$, the denominator grows without bound. $\\frac{5}{\\text{large number}} \\to 0$.'
    },
    {
        topic: '1.15',
        type: 'multiple_choice',
        difficulty: 'hard',
        stem: 'Find $\\lim_{x \\to \\infty} \\frac{\\sqrt{4x^2 + 1}}{x + 2}$.',
        choices: [
            '$0$',
            '$2$',
            '$4$',
            '$\\infty$'
        ],
        correct: 1,
        explanation: 'For large $x > 0$: $\\sqrt{4x^2 + 1} \\approx \\sqrt{4x^2} = 2x$. So $\\frac{2x}{x + 2} \\to \\frac{2x}{x} = 2$ as $x \\to \\infty$.'
    },

    // ============================================
    // TOPIC 1.16: Intermediate Value Theorem
    // ============================================
    {
        topic: '1.16',
        type: 'multiple_choice',
        difficulty: 'easy',
        stem: 'The Intermediate Value Theorem requires the function to be:',
        choices: [
            'Differentiable',
            'Continuous on a closed interval',
            'Positive',
            'A polynomial'
        ],
        correct: 1,
        explanation: 'IVT requires continuity on a closed interval $[a, b]$. It does not require differentiability or any specific type of function.'
    },
    {
        topic: '1.16',
        type: 'multiple_choice',
        difficulty: 'medium',
        stem: 'If $f$ is continuous on $[0, 3]$, $f(0) = -2$, and $f(3) = 4$, IVT guarantees there exists $c$ in $(0, 3)$ where:',
        choices: [
            '$f(c) = -3$',
            '$f(c) = 0$',
            '$f(c) = 5$',
            '$f(c) = f\'(c)$'
        ],
        correct: 1,
        explanation: 'IVT says $f$ takes every value between $f(0) = -2$ and $f(3) = 4$. Since $0$ is between $-2$ and $4$, there exists $c$ with $f(c) = 0$.'
    },
    {
        topic: '1.16',
        type: 'multiple_choice',
        difficulty: 'medium',
        stem: 'To show $x^3 - 3x + 1 = 0$ has a root in $[0, 1]$, we check that:',
        choices: [
            '$f(0) = f(1)$',
            '$f(0)$ and $f(1)$ have opposite signs',
            '$f(0) > 0$ and $f(1) > 0$',
            '$f$ is a polynomial'
        ],
        correct: 1,
        explanation: 'If $f(0)$ and $f(1)$ have opposite signs, then $0$ is between them. By IVT (with $f$ continuous), there\'s a root where $f(c) = 0$.'
    },
    {
        topic: '1.16',
        type: 'multiple_choice',
        difficulty: 'hard',
        stem: 'Let $f(x) = x^3 - 2x - 2$. $f(1) = -3$ and $f(2) = 2$. IVT guarantees a root in:',
        choices: [
            '$[0, 1]$',
            '$(1, 2)$',
            '$[2, 3]$',
            'Cannot be determined'
        ],
        correct: 1,
        explanation: '$f(1) = -3 < 0$ and $f(2) = 2 > 0$. Opposite signs, and $f$ is continuous (polynomial). By IVT, there\'s a root in $(1, 2)$.'
    },
    {
        topic: '1.16',
        type: 'multiple_choice',
        difficulty: 'easy',
        stem: 'IVT guarantees the existence of a value $c$, but does NOT tell us:',
        choices: [
            'That $c$ exists',
            'What $c$ equals exactly',
            'That $f(c) = k$',
            'All of the above'
        ],
        correct: 1,
        explanation: 'IVT is an existence theorem. It guarantees there IS a $c$ with $f(c) = k$, but doesn\'t tell us the specific value of $c$.'
    },
    {
        topic: '1.16',
        type: 'multiple_choice',
        difficulty: 'hard',
        stem: 'Why can\'t we use IVT on $f(x) = \\frac{1}{x}$ on $[-1, 1]$ to find where $f(c) = 0$?',
        choices: [
            '$f$ never equals $0$',
            '$f$ is not continuous on $[-1, 1]$',
            '$0$ is not between $f(-1)$ and $f(1)$',
            'Both A and B'
        ],
        correct: 3,
        explanation: 'Two problems: (1) $f$ is discontinuous at $x = 0$ within $[-1, 1]$, so IVT doesn\'t apply. (2) Even if it did, $\\frac{1}{x}$ never equals $0$.'
    },
    {
        topic: '1.16',
        type: 'multiple_choice',
        difficulty: 'medium',
        stem: 'If $f$ is continuous on $[2, 5]$, $f(2) = 7$, and $f(5) = 3$, which value is NOT guaranteed by IVT to be achieved?',
        choices: [
            '$4$',
            '$5$',
            '$6$',
            '$8$'
        ],
        correct: 3,
        explanation: 'IVT guarantees values between $f(2) = 7$ and $f(5) = 3$, so values from $3$ to $7$. The value $8$ is not in this range.'
    },
    {
        topic: '1.16',
        type: 'multiple_choice',
        difficulty: 'hard',
        stem: 'A function $g$ is continuous on $[0, 2]$ with $g(0) = g(2) = 1$. By IVT, we can conclude:',
        choices: [
            '$g$ has a root in $(0, 2)$',
            '$g(1) = 1$',
            'Nothing specific—the theorem doesn\'t apply',
            '$g$ achieves all values between its min and max on $[0, 2]$'
        ],
        correct: 3,
        explanation: 'IVT says a continuous function on $[a,b]$ takes every value between its minimum and maximum. We just don\'t know what those are from the given info.'
    }
];

/**
 * Get all puzzles for a specific topic
 */
export function getPuzzlesForTopic(topicId) {
    return puzzles.filter(p => p.topic === topicId);
}

/**
 * Get puzzles by difficulty
 */
export function getPuzzlesByDifficulty(topicId, difficulty) {
    return puzzles.filter(p => p.topic === topicId && p.difficulty === difficulty);
}

/**
 * Get a random puzzle for a topic
 */
export function getRandomPuzzle(topicId) {
    const topicPuzzles = getPuzzlesForTopic(topicId);
    if (topicPuzzles.length === 0) return null;
    return topicPuzzles[Math.floor(Math.random() * topicPuzzles.length)];
}

/**
 * Count puzzles per topic
 */
export function countPuzzlesForTopic(topicId) {
    return getPuzzlesForTopic(topicId).length;
}

/**
 * Get all topic IDs that have puzzles
 */
export function getTopicsWithPuzzles() {
    const topics = new Set();
    puzzles.forEach(p => topics.add(p.topic));
    return Array.from(topics).sort();
}

export { puzzles };
