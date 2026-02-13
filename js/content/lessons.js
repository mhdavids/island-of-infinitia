/**
 * lessons.js - Lesson Content for All Topics
 * Full lessons for Unit 1 (Limits and Continuity)
 * Placeholder content for Units 2-8
 */

const lessons = {
    // ============================================
    // UNIT 1: LIMITS AND CONTINUITY
    // ============================================

    '1.1': {
        id: '1.1',
        title: 'Introducing Calculus: Can Change Occur at an Instant?',
        content: `
            <h3>The Mystery of Instantaneous Change</h3>
            <p>The tidal observers faced a profound question: If the water level is constantly changing,
            how can we measure the rate of that change at a single instant?</p>

            <p>Consider this paradox: To calculate a rate, we need two points in time to compare.
            But an "instant" has no duration—it's a single moment. How can something change in zero time?</p>

            <div class="definition">
                <strong>The Central Question of Calculus:</strong> How do we measure instantaneous rates of change
                when calculation seems to require an interval of time?
            </div>

            <h3>Average Rate vs. Instantaneous Rate</h3>
            <p>The ancient scholars first mastered <strong>average rates of change</strong>. If the tide rises
            from 2 meters to 5 meters over 3 hours, the average rate is:</p>

            <div class="math-display">
                $$\\text{Average Rate} = \\frac{\\Delta h}{\\Delta t} = \\frac{5 - 2}{3} = 1 \\text{ meter per hour}$$
            </div>

            <p>But this doesn't tell us how fast the water is rising at exactly noon. The tide might be
            rushing in quickly at noon and slowing later, yet still average 1 m/hr over the full period.</p>

            <h3>The Key Insight: Shrinking Intervals</h3>
            <p>The breakthrough came from examining what happens as we shrink the time interval:</p>

            <ul>
                <li>Average rate over 3 hours</li>
                <li>Average rate over 1 hour</li>
                <li>Average rate over 1 minute</li>
                <li>Average rate over 1 second</li>
                <li>Average rate as the interval approaches zero...</li>
            </ul>

            <div class="key-concept">
                <strong>The Foundation of Calculus:</strong> The instantaneous rate of change is what the
                average rate of change <em>approaches</em> as the time interval shrinks toward zero.
                This "approaching" behavior is what we call a <strong>limit</strong>.
            </div>

            <h3>Why This Matters</h3>
            <p>This concept—examining what happens as quantities approach certain values—is the foundation
            of all calculus. The tidal observatory's instruments were designed around this principle:
            measuring how values approach their destinations.</p>

            <div class="example">
                <div class="example-header">Real-World Connection</div>
                <p>Your car's speedometer shows instantaneous speed—not an average over your trip,
                but how fast you're going right now. This requires the same mathematical concept
                the island's scholars discovered: limits.</p>
            </div>
        `
    },

    '1.2': {
        id: '1.2',
        title: 'Defining Limits and Using Limit Notation',
        content: `
            <h3>The Language of Approaching</h3>
            <p>The tidal observers developed precise notation to describe how water levels approach certain heights.
            This notation—the language of limits—is your first key to unlocking the observatory's secrets.</p>

            <div class="definition">
                <strong>Definition of a Limit:</strong> We write
                $$\\lim_{x \\to c} f(x) = L$$
                and say "the limit of $f(x)$ as $x$ approaches $c$ equals $L$" if $f(x)$ gets arbitrarily
                close to $L$ as $x$ gets sufficiently close to (but not equal to) $c$.
            </div>

            <h3>Understanding the Notation</h3>
            <p>Let's break down $\\lim_{x \\to c} f(x) = L$:</p>
            <ul>
                <li><strong>$\\lim$</strong> — We're finding a limit</li>
                <li><strong>$x \\to c$</strong> — As $x$ approaches the value $c$</li>
                <li><strong>$f(x)$</strong> — We examine the function's output</li>
                <li><strong>$= L$</strong> — The output approaches the value $L$</li>
            </ul>

            <div class="example">
                <div class="example-header">Example: Tidal Heights</div>
                <p>If $h(t)$ represents water height in meters at time $t$ hours, then:</p>
                <p>$$\\lim_{t \\to 6} h(t) = 4.5$$</p>
                <p>This means: "As time approaches 6 hours, the water height approaches 4.5 meters."</p>
                <p><strong>Important:</strong> This does NOT mean $h(6) = 4.5$. The limit describes
                what value is being <em>approached</em>, not necessarily what value is reached.</p>
            </div>

            <h3>The Limit May Not Equal the Function Value</h3>
            <p>A crucial insight: $\\lim_{x \\to c} f(x)$ can exist even when:</p>
            <ul>
                <li>$f(c)$ is undefined (there's a hole in the graph)</li>
                <li>$f(c)$ exists but equals something different from the limit</li>
            </ul>

            <div class="math-display">
                <p>Consider $f(x) = \\frac{x^2 - 4}{x - 2}$</p>
                <p>At $x = 2$: $f(2) = \\frac{0}{0}$ is undefined!</p>
                <p>But $\\lim_{x \\to 2} f(x) = \\lim_{x \\to 2} \\frac{(x-2)(x+2)}{x-2} = \\lim_{x \\to 2} (x+2) = 4$</p>
            </div>

            <h3>One-Sided Limits</h3>
            <p>Sometimes we need to specify which direction we're approaching from:</p>

            <div class="definition">
                <p><strong>Left-hand limit:</strong> $\\lim_{x \\to c^-} f(x)$ — approaching $c$ from values less than $c$</p>
                <p><strong>Right-hand limit:</strong> $\\lim_{x \\to c^+} f(x)$ — approaching $c$ from values greater than $c$</p>
            </div>

            <div class="key-concept">
                The two-sided limit $\\lim_{x \\to c} f(x) = L$ exists if and only if both one-sided limits
                exist and are equal:
                $$\\lim_{x \\to c^-} f(x) = \\lim_{x \\to c^+} f(x) = L$$
            </div>
        `
    },

    '1.3': {
        id: '1.3',
        title: 'Estimating Limit Values from Graphs',
        content: `
            <h3>Reading Limits from Visual Records</h3>
            <p>The tidal observers kept meticulous graphical records of water levels. Learning to read
            limits from these graphs is an essential skill.</p>

            <h3>Finding Limits Graphically</h3>
            <p>To find $\\lim_{x \\to c} f(x)$ from a graph:</p>
            <ol>
                <li>Locate $x = c$ on the horizontal axis</li>
                <li>Trace the curve from the left, noting where the $y$-value heads</li>
                <li>Trace the curve from the right, noting where the $y$-value heads</li>
                <li>If both sides approach the same $y$-value, that's the limit</li>
            </ol>

            <div class="key-concept">
                <strong>Remember:</strong> Look at where the curve is <em>heading</em>, not where it
                actually is at $x = c$. A hole in the graph (open circle) doesn't prevent a limit
                from existing!
            </div>

            <h3>Cases to Recognize</h3>

            <div class="example">
                <div class="example-header">Case 1: Limit Exists (Continuous)</div>
                <p>The curve passes smoothly through the point. The limit equals the function value.</p>
            </div>

            <div class="example">
                <div class="example-header">Case 2: Limit Exists (Hole)</div>
                <p>There's an open circle at the point, but the curve approaches the same height from both sides.
                The limit exists even though $f(c)$ may be undefined or different.</p>
            </div>

            <div class="example">
                <div class="example-header">Case 3: Limit Does Not Exist (Jump)</div>
                <p>The left-hand and right-hand limits exist but are different. The two-sided limit DNE.</p>
            </div>

            <div class="example">
                <div class="example-header">Case 4: Limit Does Not Exist (Asymptote)</div>
                <p>The curve shoots off toward infinity. We may write $\\lim_{x \\to c} f(x) = \\infty$
                (or $-\\infty$), but technically the limit "does not exist" as a finite number.</p>
            </div>

            <h3>Common Graphical Patterns</h3>
            <ul>
                <li><strong>Solid dot:</strong> The function is defined there; check if it matches the limit</li>
                <li><strong>Open circle:</strong> The function is not defined (or defined elsewhere); limit may still exist</li>
                <li><strong>Vertical asymptote:</strong> Curve approaches $\\pm\\infty$</li>
                <li><strong>Jump discontinuity:</strong> Left and right limits differ</li>
            </ul>

            <div class="definition">
                <strong>Key Questions When Reading Graphs:</strong>
                <ol>
                    <li>What $y$-value does the curve approach from the left?</li>
                    <li>What $y$-value does the curve approach from the right?</li>
                    <li>Are these the same? If yes, that's your limit.</li>
                </ol>
            </div>
        `
    },

    '1.4': {
        id: '1.4',
        title: 'Estimating Limit Values from Tables',
        content: `
            <h3>Numerical Evidence for Limits</h3>
            <p>When the tidal observers couldn't rely on continuous graphs, they used tables of measurements
            taken at precise intervals to estimate limits.</p>

            <h3>The Table Method</h3>
            <p>To estimate $\\lim_{x \\to c} f(x)$ using a table:</p>
            <ol>
                <li>Calculate $f(x)$ for values of $x$ approaching $c$ from the left (e.g., $c - 0.1$, $c - 0.01$, $c - 0.001$)</li>
                <li>Calculate $f(x)$ for values of $x$ approaching $c$ from the right (e.g., $c + 0.1$, $c + 0.01$, $c + 0.001$)</li>
                <li>Observe what value $f(x)$ appears to approach</li>
            </ol>

            <div class="example">
                <div class="example-header">Example: Estimating a Limit</div>
                <p>Estimate $\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2}$</p>
                <table style="width: 100%; border-collapse: collapse; margin: 1rem 0;">
                    <tr style="border-bottom: 1px solid var(--border-subtle);">
                        <th style="padding: 0.5rem; text-align: center;">$x$</th>
                        <th style="padding: 0.5rem; text-align: center;">$f(x)$</th>
                        <th style="padding: 0.5rem; text-align: center;">$x$</th>
                        <th style="padding: 0.5rem; text-align: center;">$f(x)$</th>
                    </tr>
                    <tr>
                        <td style="padding: 0.5rem; text-align: center;">1.9</td>
                        <td style="padding: 0.5rem; text-align: center;">3.9</td>
                        <td style="padding: 0.5rem; text-align: center;">2.1</td>
                        <td style="padding: 0.5rem; text-align: center;">4.1</td>
                    </tr>
                    <tr>
                        <td style="padding: 0.5rem; text-align: center;">1.99</td>
                        <td style="padding: 0.5rem; text-align: center;">3.99</td>
                        <td style="padding: 0.5rem; text-align: center;">2.01</td>
                        <td style="padding: 0.5rem; text-align: center;">4.01</td>
                    </tr>
                    <tr>
                        <td style="padding: 0.5rem; text-align: center;">1.999</td>
                        <td style="padding: 0.5rem; text-align: center;">3.999</td>
                        <td style="padding: 0.5rem; text-align: center;">2.001</td>
                        <td style="padding: 0.5rem; text-align: center;">4.001</td>
                    </tr>
                </table>
                <p>Both sides approach 4, so we estimate $\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2} = 4$</p>
            </div>

            <h3>Cautions with Tables</h3>
            <div class="key-concept">
                <strong>Tables provide estimates, not proofs.</strong>
                <ul>
                    <li>A table shows a pattern but can't prove the limit definitively</li>
                    <li>Some functions behave unexpectedly between table values</li>
                    <li>Rounding errors can accumulate with very small intervals</li>
                </ul>
            </div>

            <h3>Recognizing When Limits Don't Exist</h3>
            <p>From a table, you can detect:</p>
            <ul>
                <li><strong>Jump discontinuity:</strong> Left and right values approach different numbers</li>
                <li><strong>Infinite limit:</strong> Values grow without bound ($\\pm\\infty$)</li>
                <li><strong>Oscillation:</strong> Values bounce around without settling (rare but possible)</li>
            </ul>

            <div class="example">
                <div class="example-header">Example: Detecting a Jump</div>
                <p>If approaching from the left gives values near 3, but approaching from the right gives
                values near 5, the two-sided limit does not exist.</p>
            </div>
        `
    },

    '1.5': {
        id: '1.5',
        title: 'Determining Limits Using Algebraic Properties',
        content: `
            <h3>The Laws of Limits</h3>
            <p>The tidal mathematicians discovered that limits obey elegant algebraic laws, allowing them
            to compute complex limits from simpler ones.</p>

            <div class="definition">
                <strong>Basic Limit Laws:</strong> If $\\lim_{x \\to c} f(x) = L$ and $\\lim_{x \\to c} g(x) = M$, then:
            </div>

            <div class="math-display">
                <p><strong>Sum/Difference:</strong> $\\lim_{x \\to c} [f(x) \\pm g(x)] = L \\pm M$</p>
                <p><strong>Constant Multiple:</strong> $\\lim_{x \\to c} [k \\cdot f(x)] = k \\cdot L$</p>
                <p><strong>Product:</strong> $\\lim_{x \\to c} [f(x) \\cdot g(x)] = L \\cdot M$</p>
                <p><strong>Quotient:</strong> $\\lim_{x \\to c} \\frac{f(x)}{g(x)} = \\frac{L}{M}$ (if $M \\neq 0$)</p>
                <p><strong>Power:</strong> $\\lim_{x \\to c} [f(x)]^n = L^n$</p>
                <p><strong>Root:</strong> $\\lim_{x \\to c} \\sqrt[n]{f(x)} = \\sqrt[n]{L}$ (with appropriate domain restrictions)</p>
            </div>

            <h3>Fundamental Limits</h3>
            <div class="key-concept">
                <p><strong>Constant:</strong> $\\lim_{x \\to c} k = k$</p>
                <p><strong>Identity:</strong> $\\lim_{x \\to c} x = c$</p>
                <p>These simple limits, combined with the laws above, let us evaluate polynomial and rational limits.</p>
            </div>

            <h3>Direct Substitution</h3>
            <p>For polynomials and many other "nice" functions, finding limits is straightforward:</p>

            <div class="definition">
                <strong>Direct Substitution Property:</strong> If $f$ is a polynomial, rational (where defined),
                or built from continuous functions, then:
                $$\\lim_{x \\to c} f(x) = f(c)$$
                (provided $f(c)$ is defined)
            </div>

            <div class="example">
                <div class="example-header">Example: Polynomial Limit</div>
                <p>Find $\\lim_{x \\to 3} (2x^2 - 5x + 1)$</p>
                <p>By direct substitution:</p>
                <p>$= 2(3)^2 - 5(3) + 1 = 18 - 15 + 1 = 4$</p>
            </div>

            <div class="example">
                <div class="example-header">Example: Using Limit Laws</div>
                <p>Find $\\lim_{x \\to 2} \\frac{x^2 + 3x}{x - 1}$</p>
                <p>Since the denominator isn't zero at $x = 2$:</p>
                <p>$= \\frac{(2)^2 + 3(2)}{2 - 1} = \\frac{4 + 6}{1} = 10$</p>
            </div>

            <h3>When Direct Substitution Fails</h3>
            <p>If substituting gives $\\frac{0}{0}$, the limit may still exist—but we need other techniques
            (covered in the next lesson).</p>
        `
    },

    '1.6': {
        id: '1.6',
        title: 'Determining Limits Using Algebraic Manipulation',
        content: `
            <h3>Resolving Indeterminate Forms</h3>
            <p>When direct substitution yields $\\frac{0}{0}$, all is not lost. The ancient scholars
            developed algebraic techniques to reveal the hidden limit.</p>

            <div class="definition">
                <strong>Indeterminate Form $\\frac{0}{0}$:</strong> This form tells us nothing directly about
                the limit—it could be any value, or might not exist. We must manipulate the expression
                to find the answer.
            </div>

            <h3>Technique 1: Factoring</h3>
            <p>Factor the numerator and denominator, then cancel common factors.</p>

            <div class="example">
                <div class="example-header">Example: Factoring</div>
                <p>Find $\\lim_{x \\to 3} \\frac{x^2 - 9}{x - 3}$</p>
                <p>Direct substitution gives $\\frac{0}{0}$. Factor:</p>
                <p>$= \\lim_{x \\to 3} \\frac{(x-3)(x+3)}{x-3} = \\lim_{x \\to 3} (x + 3) = 6$</p>
            </div>

            <h3>Technique 2: Rationalizing</h3>
            <p>Multiply by the conjugate to eliminate radicals.</p>

            <div class="example">
                <div class="example-header">Example: Rationalizing</div>
                <p>Find $\\lim_{x \\to 0} \\frac{\\sqrt{x+4} - 2}{x}$</p>
                <p>Multiply by conjugate:</p>
                <p>$= \\lim_{x \\to 0} \\frac{(\\sqrt{x+4} - 2)(\\sqrt{x+4} + 2)}{x(\\sqrt{x+4} + 2)}$</p>
                <p>$= \\lim_{x \\to 0} \\frac{(x+4) - 4}{x(\\sqrt{x+4} + 2)} = \\lim_{x \\to 0} \\frac{x}{x(\\sqrt{x+4} + 2)}$</p>
                <p>$= \\lim_{x \\to 0} \\frac{1}{\\sqrt{x+4} + 2} = \\frac{1}{2 + 2} = \\frac{1}{4}$</p>
            </div>

            <h3>Technique 3: Common Denominators</h3>
            <p>Combine fractions in the numerator or denominator.</p>

            <div class="example">
                <div class="example-header">Example: Complex Fractions</div>
                <p>Find $\\lim_{x \\to 0} \\frac{\\frac{1}{x+2} - \\frac{1}{2}}{x}$</p>
                <p>Combine the numerator:</p>
                <p>$= \\lim_{x \\to 0} \\frac{\\frac{2 - (x+2)}{2(x+2)}}{x} = \\lim_{x \\to 0} \\frac{-x}{2x(x+2)}$</p>
                <p>$= \\lim_{x \\to 0} \\frac{-1}{2(x+2)} = \\frac{-1}{4}$</p>
            </div>

            <h3>Technique 4: Expand and Simplify</h3>
            <p>Sometimes expanding expressions reveals cancellations.</p>

            <div class="key-concept">
                <strong>Strategy:</strong> When you get $\\frac{0}{0}$:
                <ol>
                    <li>Look for common factors to cancel</li>
                    <li>If there are radicals, try rationalizing</li>
                    <li>If there are complex fractions, find common denominators</li>
                    <li>Expand and simplify when other methods don't apply</li>
                </ol>
            </div>
        `
    },

    '1.7': {
        id: '1.7',
        title: 'Selecting Procedures for Determining Limits',
        content: `
            <h3>Choosing Your Approach</h3>
            <p>Faced with a limit problem, how do you decide which technique to use? The tidal scholars
            developed a systematic approach.</p>

            <h3>The Decision Tree</h3>

            <div class="definition">
                <strong>Step 1: Try Direct Substitution</strong>
                <ul>
                    <li>If you get a finite number → that's your answer!</li>
                    <li>If you get $\\frac{0}{0}$ → indeterminate, use algebraic manipulation</li>
                    <li>If you get $\\frac{\\text{nonzero}}{0}$ → limit is $\\pm\\infty$ or DNE</li>
                    <li>If you get $\\frac{0}{\\text{nonzero}}$ → limit is $0$</li>
                </ul>
            </div>

            <div class="definition">
                <strong>Step 2: For $\\frac{0}{0}$, Choose a Technique:</strong>
                <ul>
                    <li><strong>Polynomial or rational?</strong> → Factor and cancel</li>
                    <li><strong>Square roots present?</strong> → Rationalize with conjugate</li>
                    <li><strong>Complex fractions?</strong> → Find common denominators</li>
                    <li><strong>Trig functions?</strong> → Use special trig limits</li>
                </ul>
            </div>

            <h3>Common Forms and Their Solutions</h3>

            <div class="example">
                <div class="example-header">Form: $\\frac{x^n - a^n}{x - a}$</div>
                <p>Factor as $(x-a)(x^{n-1} + x^{n-2}a + \\cdots + a^{n-1})$</p>
                <p>After canceling: limit $= na^{n-1}$</p>
            </div>

            <div class="example">
                <div class="example-header">Form: $\\frac{\\sqrt{x+a} - b}{x - c}$</div>
                <p>Rationalize using $(\\sqrt{x+a} + b)$</p>
            </div>

            <h3>Special Trigonometric Limits</h3>
            <div class="key-concept">
                <p>These fundamental limits are essential (memorize them!):</p>
                <p>$$\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$$</p>
                <p>$$\\lim_{x \\to 0} \\frac{1 - \\cos x}{x} = 0$$</p>
                <p>$$\\lim_{x \\to 0} \\frac{\\tan x}{x} = 1$$</p>
            </div>

            <h3>Practice Recognition</h3>
            <p>With experience, you'll recognize patterns instantly:</p>
            <ul>
                <li>$\\frac{x^2 - 4}{x - 2}$ → factor as $(x-2)(x+2)$</li>
                <li>$\\frac{\\sqrt{x} - 3}{x - 9}$ → rationalize or note $x - 9 = (\\sqrt{x}-3)(\\sqrt{x}+3)$</li>
                <li>$\\frac{\\sin 3x}{x}$ → rewrite as $3 \\cdot \\frac{\\sin 3x}{3x}$</li>
            </ul>
        `
    },

    '1.8': {
        id: '1.8',
        title: 'Determining Limits Using the Squeeze Theorem',
        content: `
            <h3>The Squeeze Theorem</h3>
            <p>Some limits resist direct computation. For these, the ancient scholars developed a clever
            technique: trap the function between two others whose limits are known.</p>

            <div class="definition">
                <strong>The Squeeze Theorem:</strong> If $g(x) \\leq f(x) \\leq h(x)$ for all $x$ near $c$
                (except possibly at $c$), and
                $$\\lim_{x \\to c} g(x) = \\lim_{x \\to c} h(x) = L$$
                then
                $$\\lim_{x \\to c} f(x) = L$$
            </div>

            <p>Think of it like this: if $f$ is squeezed between $g$ and $h$, and both $g$ and $h$
            approach $L$, then $f$ has no choice but to approach $L$ as well.</p>

            <h3>The Classic Application</h3>

            <div class="example">
                <div class="example-header">Proving $\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$</div>
                <p>This fundamental limit is proven using the Squeeze Theorem with geometric arguments.</p>
                <p>For $0 < x < \\frac{\\pi}{2}$, we can show:</p>
                <p>$$\\cos x < \\frac{\\sin x}{x} < 1$$</p>
                <p>Since $\\lim_{x \\to 0} \\cos x = 1$ and $\\lim_{x \\to 0} 1 = 1$:</p>
                <p>$$\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$$</p>
            </div>

            <h3>When to Use the Squeeze Theorem</h3>
            <p>Look for situations where:</p>
            <ul>
                <li>Direct computation is impossible or very difficult</li>
                <li>The function involves bounded oscillation (like sine or cosine)</li>
                <li>You can identify natural upper and lower bounds</li>
            </ul>

            <div class="example">
                <div class="example-header">Example: Oscillating Function</div>
                <p>Find $\\lim_{x \\to 0} x^2 \\sin\\left(\\frac{1}{x}\\right)$</p>
                <p>We know $-1 \\leq \\sin\\left(\\frac{1}{x}\\right) \\leq 1$</p>
                <p>Multiplying by $x^2$ (positive near 0):</p>
                <p>$-x^2 \\leq x^2 \\sin\\left(\\frac{1}{x}\\right) \\leq x^2$</p>
                <p>Since $\\lim_{x \\to 0} (-x^2) = \\lim_{x \\to 0} x^2 = 0$:</p>
                <p>$$\\lim_{x \\to 0} x^2 \\sin\\left(\\frac{1}{x}\\right) = 0$$</p>
            </div>

            <div class="key-concept">
                <strong>Key Bounds to Remember:</strong>
                <ul>
                    <li>$-1 \\leq \\sin(\\text{anything}) \\leq 1$</li>
                    <li>$-1 \\leq \\cos(\\text{anything}) \\leq 1$</li>
                    <li>$|\\sin x| \\leq |x|$ for all $x$</li>
                </ul>
            </div>
        `
    },

    '1.9': {
        id: '1.9',
        title: 'Connecting Multiple Representations of Limits',
        content: `
            <h3>Synthesis: Graphs, Tables, and Algebra</h3>
            <p>The tidal observatory archives contain records in many forms: visual charts, numerical tables,
            and algebraic formulas. A master must interpret limits across all these representations.</p>

            <h3>Three Perspectives on the Same Limit</h3>

            <div class="definition">
                <strong>Graphical:</strong> Where does the curve head as $x$ approaches $c$?
                <br><br>
                <strong>Numerical:</strong> What value do $f(x)$ values approach in a table?
                <br><br>
                <strong>Analytical:</strong> What does algebraic manipulation reveal?
            </div>

            <h3>Connecting the Views</h3>

            <div class="example">
                <div class="example-header">Example: Complete Analysis</div>
                <p>Consider $f(x) = \\frac{|x-2|}{x-2}$</p>

                <p><strong>Algebraically:</strong></p>
                <ul>
                    <li>For $x > 2$: $|x-2| = x-2$, so $f(x) = 1$</li>
                    <li>For $x < 2$: $|x-2| = -(x-2)$, so $f(x) = -1$</li>
                </ul>

                <p><strong>Graphically:</strong> A horizontal line at $y = 1$ for $x > 2$, and $y = -1$ for $x < 2$</p>

                <p><strong>Numerically:</strong></p>
                <ul>
                    <li>$f(1.9) = -1$, $f(1.99) = -1$ (approaching from left → $-1$)</li>
                    <li>$f(2.1) = 1$, $f(2.01) = 1$ (approaching from right → $1$)</li>
                </ul>

                <p><strong>Conclusion:</strong> $\\lim_{x \\to 2^-} f(x) = -1$, $\\lim_{x \\to 2^+} f(x) = 1$</p>
                <p>The two-sided limit does not exist.</p>
            </div>

            <h3>Using Multiple Representations Strategically</h3>
            <ul>
                <li><strong>Graphs</strong> give quick visual intuition about limit behavior</li>
                <li><strong>Tables</strong> provide numerical evidence when graphs aren't available</li>
                <li><strong>Algebra</strong> proves limits definitively and finds exact values</li>
            </ul>

            <div class="key-concept">
                <strong>Verification Strategy:</strong> When possible, check your answer using a different
                representation. If algebra gives you 4, a quick table calculation should show values
                approaching 4.
            </div>

            <h3>Piecewise Functions</h3>
            <p>For piecewise functions, analyze each piece separately:</p>
            <ul>
                <li>Use the appropriate formula for each side of the boundary</li>
                <li>Check if left and right limits match for two-sided limits</li>
                <li>The function value at the boundary may differ from the limit</li>
            </ul>
        `
    },

    '1.10': {
        id: '1.10',
        title: 'Exploring Types of Discontinuities',
        content: `
            <h3>When Functions Break</h3>
            <p>The tidal observers noted that their instruments sometimes showed sudden jumps or gaps.
            Understanding these discontinuities was crucial for accurate predictions.</p>

            <h3>Three Types of Discontinuities</h3>

            <div class="definition">
                <strong>1. Removable Discontinuity (Hole)</strong>
                <p>The limit exists, but either $f(c)$ is undefined or $f(c) \\neq \\lim_{x \\to c} f(x)$</p>
                <p>Called "removable" because we could redefine $f(c)$ to make it continuous.</p>
            </div>

            <div class="example">
                <div class="example-header">Example: Removable</div>
                <p>$f(x) = \\frac{x^2 - 1}{x - 1}$ has a removable discontinuity at $x = 1$</p>
                <p>$\\lim_{x \\to 1} f(x) = 2$ exists, but $f(1)$ is undefined</p>
            </div>

            <div class="definition">
                <strong>2. Jump Discontinuity</strong>
                <p>Both one-sided limits exist, but they're not equal:</p>
                <p>$\\lim_{x \\to c^-} f(x) \\neq \\lim_{x \\to c^+} f(x)$</p>
            </div>

            <div class="example">
                <div class="example-header">Example: Jump</div>
                <p>The greatest integer function $f(x) = \\lfloor x \\rfloor$ has jump discontinuities at every integer.</p>
                <p>At $x = 2$: $\\lim_{x \\to 2^-} = 1$ but $\\lim_{x \\to 2^+} = 2$</p>
            </div>

            <div class="definition">
                <strong>3. Infinite Discontinuity</strong>
                <p>At least one of the one-sided limits is $\\pm\\infty$</p>
                <p>The graph has a vertical asymptote.</p>
            </div>

            <div class="example">
                <div class="example-header">Example: Infinite</div>
                <p>$f(x) = \\frac{1}{x}$ has an infinite discontinuity at $x = 0$</p>
                <p>$\\lim_{x \\to 0^+} = +\\infty$ and $\\lim_{x \\to 0^-} = -\\infty$</p>
            </div>

            <h3>Identifying Discontinuities</h3>
            <div class="key-concept">
                <strong>Decision Process:</strong>
                <ol>
                    <li>Does $\\lim_{x \\to c} f(x)$ exist (as a finite number)?
                        <ul>
                            <li>No → Check if one-sided limits are infinite (infinite disc.) or just different (jump disc.)</li>
                        </ul>
                    </li>
                    <li>If the limit exists, does $f(c)$ exist?
                        <ul>
                            <li>No → Removable discontinuity</li>
                        </ul>
                    </li>
                    <li>If both exist, does $f(c) = \\lim_{x \\to c} f(x)$?
                        <ul>
                            <li>No → Removable discontinuity</li>
                            <li>Yes → Function is continuous at $c$!</li>
                        </ul>
                    </li>
                </ol>
            </div>
        `
    },

    '1.11': {
        id: '1.11',
        title: 'Defining Continuity at a Point',
        content: `
            <h3>The Definition of Continuity</h3>
            <p>A function is continuous at a point when there are no breaks, jumps, or holes—the graph
            can be drawn without lifting your pen.</p>

            <div class="definition">
                <strong>Definition:</strong> A function $f$ is <strong>continuous at $x = c$</strong> if all three conditions hold:
                <ol>
                    <li>$f(c)$ is defined (the function has a value at $c$)</li>
                    <li>$\\lim_{x \\to c} f(x)$ exists (the function approaches a value)</li>
                    <li>$\\lim_{x \\to c} f(x) = f(c)$ (the approached value equals the actual value)</li>
                </ol>
            </div>

            <h3>Checking Continuity</h3>

            <div class="example">
                <div class="example-header">Example: Continuous Function</div>
                <p>Is $f(x) = x^2$ continuous at $x = 3$?</p>
                <ol>
                    <li>$f(3) = 9$ ✓ (defined)</li>
                    <li>$\\lim_{x \\to 3} x^2 = 9$ ✓ (limit exists)</li>
                    <li>$\\lim_{x \\to 3} x^2 = f(3) = 9$ ✓ (they're equal)</li>
                </ol>
                <p>Yes, $f(x) = x^2$ is continuous at $x = 3$.</p>
            </div>

            <div class="example">
                <div class="example-header">Example: Discontinuous Function</div>
                <p>Is $g(x) = \\begin{cases} x^2 & x \\neq 2 \\\\ 5 & x = 2 \\end{cases}$ continuous at $x = 2$?</p>
                <ol>
                    <li>$g(2) = 5$ ✓ (defined)</li>
                    <li>$\\lim_{x \\to 2} g(x) = 4$ ✓ (limit exists)</li>
                    <li>$\\lim_{x \\to 2} g(x) = 4 \\neq 5 = g(2)$ ✗</li>
                </ol>
                <p>No, $g$ is not continuous at $x = 2$ (removable discontinuity).</p>
            </div>

            <h3>Functions Known to Be Continuous</h3>
            <div class="key-concept">
                <p>These functions are continuous on their domains:</p>
                <ul>
                    <li>Polynomials (continuous everywhere)</li>
                    <li>Rational functions (continuous except where denominator = 0)</li>
                    <li>$\\sin x$, $\\cos x$ (continuous everywhere)</li>
                    <li>$e^x$, $\\ln x$ (continuous on domains)</li>
                    <li>$\\sqrt{x}$, $\\sqrt[n]{x}$ (continuous on domains)</li>
                </ul>
            </div>

            <h3>Building Continuous Functions</h3>
            <p>If $f$ and $g$ are continuous at $c$, then so are:</p>
            <ul>
                <li>$f + g$, $f - g$, $f \\cdot g$</li>
                <li>$\\frac{f}{g}$ (if $g(c) \\neq 0$)</li>
                <li>$f \\circ g$ (composition, with appropriate domain)</li>
            </ul>
        `
    },

    '1.12': {
        id: '1.12',
        title: 'Confirming Continuity over an Interval',
        content: `
            <h3>Continuity on Intervals</h3>
            <p>The tidal observers needed to know when their models were reliable over entire time periods,
            not just at individual moments.</p>

            <div class="definition">
                <strong>Continuity on an Open Interval:</strong> $f$ is continuous on $(a, b)$ if $f$ is
                continuous at every point $c$ in $(a, b)$.
            </div>

            <div class="definition">
                <strong>Continuity on a Closed Interval:</strong> $f$ is continuous on $[a, b]$ if:
                <ol>
                    <li>$f$ is continuous on $(a, b)$</li>
                    <li>$\\lim_{x \\to a^+} f(x) = f(a)$ (continuous from the right at $a$)</li>
                    <li>$\\lim_{x \\to b^-} f(x) = f(b)$ (continuous from the left at $b$)</li>
                </ol>
            </div>

            <h3>Why Endpoints Are Special</h3>
            <p>At endpoints, we can only approach from one direction, so we use one-sided limits.</p>

            <div class="example">
                <div class="example-header">Example: Checking an Interval</div>
                <p>Is $f(x) = \\sqrt{x}$ continuous on $[0, 4]$?</p>
                <ul>
                    <li>On $(0, 4)$: $\\sqrt{x}$ is continuous (composition of continuous functions)</li>
                    <li>At $x = 0$: $\\lim_{x \\to 0^+} \\sqrt{x} = 0 = f(0)$ ✓</li>
                    <li>At $x = 4$: $\\lim_{x \\to 4^-} \\sqrt{x} = 2 = f(4)$ ✓</li>
                </ul>
                <p>Yes, $f(x) = \\sqrt{x}$ is continuous on $[0, 4]$.</p>
            </div>

            <h3>Piecewise Functions</h3>
            <p>For piecewise functions, check continuity at the boundary points:</p>

            <div class="example">
                <div class="example-header">Example: Piecewise Continuity</div>
                <p>$f(x) = \\begin{cases} x^2 & x < 1 \\\\ 2x - 1 & x \\geq 1 \\end{cases}$</p>
                <p>Check at $x = 1$:</p>
                <ul>
                    <li>$\\lim_{x \\to 1^-} x^2 = 1$</li>
                    <li>$\\lim_{x \\to 1^+} (2x - 1) = 1$</li>
                    <li>$f(1) = 2(1) - 1 = 1$</li>
                </ul>
                <p>All three equal 1, so $f$ is continuous at $x = 1$.</p>
            </div>

            <div class="key-concept">
                <strong>Strategy for Piecewise Functions:</strong>
                <ol>
                    <li>Each piece is usually continuous on its subdomain</li>
                    <li>Check the boundaries where pieces meet</li>
                    <li>At each boundary, verify the left limit = right limit = function value</li>
                </ol>
            </div>
        `
    },

    '1.13': {
        id: '1.13',
        title: 'Removing Discontinuities',
        content: `
            <h3>Fixing Removable Discontinuities</h3>
            <p>Some discontinuities are merely defects in how the function is defined—they can be "removed"
            by redefining the function at a single point.</p>

            <div class="definition">
                <strong>Removable Discontinuity:</strong> A discontinuity at $x = c$ is removable if
                $\\lim_{x \\to c} f(x)$ exists. We can make $f$ continuous by defining (or redefining)
                $f(c) = \\lim_{x \\to c} f(x)$.
            </div>

            <h3>The Process</h3>

            <div class="example">
                <div class="example-header">Example: Removing a Hole</div>
                <p>$f(x) = \\frac{x^2 - 4}{x - 2}$ is undefined at $x = 2$</p>
                <p>Find the limit: $\\lim_{x \\to 2} \\frac{(x-2)(x+2)}{x-2} = \\lim_{x \\to 2} (x+2) = 4$</p>
                <p>The continuous extension is:</p>
                <p>$g(x) = \\begin{cases} \\frac{x^2 - 4}{x - 2} & x \\neq 2 \\\\ 4 & x = 2 \\end{cases}$</p>
                <p>Or simply: $g(x) = x + 2$ for all $x$</p>
            </div>

            <h3>Identifying Removable vs Non-Removable</h3>

            <div class="key-concept">
                <strong>Removable:</strong>
                <ul>
                    <li>$\\frac{0}{0}$ form that simplifies</li>
                    <li>Piecewise function with wrong value assigned</li>
                    <li>Graph shows a "hole" (open circle)</li>
                </ul>
                <strong>NOT Removable:</strong>
                <ul>
                    <li>Jump discontinuities (one-sided limits differ)</li>
                    <li>Infinite discontinuities (vertical asymptotes)</li>
                </ul>
            </div>

            <div class="example">
                <div class="example-header">Example: Making Piecewise Continuous</div>
                <p>Find the value of $k$ that makes $f$ continuous:</p>
                <p>$f(x) = \\begin{cases} x^2 + 1 & x < 2 \\\\ kx - 3 & x \\geq 2 \\end{cases}$</p>
                <p>For continuity at $x = 2$:</p>
                <p>$\\lim_{x \\to 2^-} (x^2 + 1) = 5$</p>
                <p>$\\lim_{x \\to 2^+} (kx - 3) = 2k - 3$</p>
                <p>Set equal: $5 = 2k - 3$</p>
                <p>$k = 4$</p>
            </div>

            <h3>Why This Matters</h3>
            <p>Continuous functions are much easier to work with:</p>
            <ul>
                <li>The Intermediate Value Theorem applies</li>
                <li>Integration and differentiation work smoothly</li>
                <li>Numerical methods converge reliably</li>
            </ul>
        `
    },

    '1.14': {
        id: '1.14',
        title: 'Connecting Infinite Limits and Vertical Asymptotes',
        content: `
            <h3>When Functions Explode</h3>
            <p>Sometimes as $x$ approaches a value, the function grows without bound. The tidal instruments
            had to account for these extreme behaviors.</p>

            <div class="definition">
                <strong>Infinite Limit:</strong> We write $\\lim_{x \\to c} f(x) = \\infty$ if $f(x)$ grows
                arbitrarily large as $x$ approaches $c$. Similarly for $-\\infty$ if $f(x)$ becomes
                arbitrarily negative.
            </div>

            <div class="definition">
                <strong>Vertical Asymptote:</strong> The line $x = c$ is a vertical asymptote of $f$ if
                at least one of these is true:
                <ul>
                    <li>$\\lim_{x \\to c^+} f(x) = \\pm\\infty$</li>
                    <li>$\\lim_{x \\to c^-} f(x) = \\pm\\infty$</li>
                </ul>
            </div>

            <h3>Finding Vertical Asymptotes</h3>
            <p>For rational functions $\\frac{p(x)}{q(x)}$:</p>
            <ol>
                <li>Find where $q(x) = 0$ (potential asymptotes)</li>
                <li>Check if $p(x) \\neq 0$ at those points</li>
                <li>If $p(c) \\neq 0$ and $q(c) = 0$, there's a vertical asymptote at $x = c$</li>
            </ol>

            <div class="example">
                <div class="example-header">Example: Finding Asymptotes</div>
                <p>Find vertical asymptotes of $f(x) = \\frac{x + 1}{x^2 - 4}$</p>
                <p>Denominator: $x^2 - 4 = (x-2)(x+2) = 0$ when $x = 2$ or $x = -2$</p>
                <p>Check numerator: $x + 1 \\neq 0$ at $x = 2$ or $x = -2$</p>
                <p>Vertical asymptotes at $x = 2$ and $x = -2$</p>
            </div>

            <h3>Determining the Sign of Infinity</h3>
            <p>To find whether the limit is $+\\infty$ or $-\\infty$:</p>
            <ol>
                <li>Pick a test value just to the left or right of $c$</li>
                <li>Determine the sign of the function at that test value</li>
            </ol>

            <div class="example">
                <div class="example-header">Example: Determining Signs</div>
                <p>For $f(x) = \\frac{1}{x - 2}$:</p>
                <ul>
                    <li>As $x \\to 2^+$: denominator is small and positive → $f(x) \\to +\\infty$</li>
                    <li>As $x \\to 2^-$: denominator is small and negative → $f(x) \\to -\\infty$</li>
                </ul>
            </div>

            <div class="key-concept">
                <strong>Note:</strong> When we write $\\lim_{x \\to c} f(x) = \\infty$, the limit technically
                "does not exist" as a real number. The notation $= \\infty$ describes the specific way
                it fails to exist (unbounded growth).
            </div>
        `
    },

    '1.15': {
        id: '1.15',
        title: 'Connecting Limits at Infinity and Horizontal Asymptotes',
        content: `
            <h3>End Behavior</h3>
            <p>What happens to a function as $x$ grows very large (or very negative)? The tidal observers
            needed to predict long-term trends.</p>

            <div class="definition">
                <strong>Limit at Infinity:</strong> We write $\\lim_{x \\to \\infty} f(x) = L$ if $f(x)$
                approaches $L$ as $x$ grows without bound. Similarly for $\\lim_{x \\to -\\infty} f(x)$.
            </div>

            <div class="definition">
                <strong>Horizontal Asymptote:</strong> The line $y = L$ is a horizontal asymptote if
                $\\lim_{x \\to \\infty} f(x) = L$ or $\\lim_{x \\to -\\infty} f(x) = L$.
            </div>

            <h3>Rational Functions at Infinity</h3>
            <p>For $f(x) = \\frac{a_nx^n + \\ldots}{b_mx^m + \\ldots}$:</p>

            <div class="key-concept">
                <ul>
                    <li><strong>If $n < m$:</strong> $\\lim_{x \\to \\pm\\infty} f(x) = 0$ (horizontal asymptote at $y = 0$)</li>
                    <li><strong>If $n = m$:</strong> $\\lim_{x \\to \\pm\\infty} f(x) = \\frac{a_n}{b_m}$ (horizontal asymptote at $y = \\frac{a_n}{b_m}$)</li>
                    <li><strong>If $n > m$:</strong> No horizontal asymptote (limit is $\\pm\\infty$)</li>
                </ul>
            </div>

            <div class="example">
                <div class="example-header">Example: Equal Degrees</div>
                <p>$\\lim_{x \\to \\infty} \\frac{3x^2 + 5x}{2x^2 - 1}$</p>
                <p>Degrees are equal (both 2), so divide leading coefficients:</p>
                <p>$= \\frac{3}{2}$</p>
                <p>Horizontal asymptote: $y = \\frac{3}{2}$</p>
            </div>

            <div class="example">
                <div class="example-header">Example: Numerator Smaller</div>
                <p>$\\lim_{x \\to \\infty} \\frac{5x + 2}{x^3 + 1}$</p>
                <p>Numerator degree (1) < denominator degree (3):</p>
                <p>$= 0$</p>
                <p>Horizontal asymptote: $y = 0$</p>
            </div>

            <h3>Technique: Divide by Highest Power</h3>
            <p>For complicated expressions, divide numerator and denominator by $x^n$ (highest power in denominator):</p>

            <div class="example">
                <div class="example-header">Example: Detailed Calculation</div>
                <p>$\\lim_{x \\to \\infty} \\frac{2x^2 + 3}{5x^2 - x}$</p>
                <p>Divide by $x^2$:</p>
                <p>$= \\lim_{x \\to \\infty} \\frac{2 + \\frac{3}{x^2}}{5 - \\frac{1}{x}}$</p>
                <p>As $x \\to \\infty$: $\\frac{3}{x^2} \\to 0$ and $\\frac{1}{x} \\to 0$</p>
                <p>$= \\frac{2 + 0}{5 - 0} = \\frac{2}{5}$</p>
            </div>

            <div class="key-concept">
                <strong>Key Limits:</strong>
                <p>$\\lim_{x \\to \\infty} \\frac{1}{x^n} = 0$ for any $n > 0$</p>
                <p>$\\lim_{x \\to \\infty} \\frac{c}{x^n} = 0$ for any constant $c$ and $n > 0$</p>
            </div>
        `
    },

    '1.16': {
        id: '1.16',
        title: 'Working with the Intermediate Value Theorem',
        content: `
            <h3>The Intermediate Value Theorem</h3>
            <p>One of the most powerful consequences of continuity: if a function is continuous and takes
            two values, it must take every value in between.</p>

            <div class="definition">
                <strong>Intermediate Value Theorem (IVT):</strong> If $f$ is continuous on $[a, b]$ and
                $k$ is any value between $f(a)$ and $f(b)$, then there exists at least one $c$ in $(a, b)$
                such that $f(c) = k$.
            </div>

            <h3>Visualizing the IVT</h3>
            <p>Imagine drawing the graph of a continuous function from point $(a, f(a))$ to point $(b, f(b))$
            without lifting your pen. The graph must cross every horizontal line between $y = f(a)$ and $y = f(b)$.</p>

            <h3>Using IVT to Find Roots</h3>
            <p>A common application: proving that an equation $f(x) = 0$ has a solution.</p>

            <div class="example">
                <div class="example-header">Example: Proving a Root Exists</div>
                <p>Show that $x^3 + x - 1 = 0$ has a solution in $(0, 1)$.</p>
                <p>Let $f(x) = x^3 + x - 1$</p>
                <ol>
                    <li>$f$ is a polynomial, so it's continuous everywhere (including $[0, 1]$) ✓</li>
                    <li>$f(0) = 0 + 0 - 1 = -1 < 0$</li>
                    <li>$f(1) = 1 + 1 - 1 = 1 > 0$</li>
                    <li>Since $f(0) < 0 < f(1)$, by IVT there exists $c \\in (0, 1)$ with $f(c) = 0$ ✓</li>
                </ol>
            </div>

            <h3>IVT Requirements</h3>
            <div class="key-concept">
                <strong>To apply IVT, you must verify:</strong>
                <ol>
                    <li>The function is <strong>continuous</strong> on the closed interval $[a, b]$</li>
                    <li>The target value $k$ is <strong>between</strong> $f(a)$ and $f(b)$</li>
                </ol>
                <p>If either condition fails, IVT does not apply!</p>
            </div>

            <div class="example">
                <div class="example-header">Example: IVT Does Not Apply</div>
                <p>$f(x) = \\frac{1}{x}$ on $[-1, 1]$</p>
                <p>$f(-1) = -1$ and $f(1) = 1$, but $f$ is NOT continuous on $[-1, 1]$ (undefined at $x = 0$)</p>
                <p>We cannot use IVT to conclude anything about values between $-1$ and $1$.</p>
            </div>

            <h3>What IVT Doesn't Tell You</h3>
            <ul>
                <li>IVT guarantees <em>at least one</em> $c$, but there might be more</li>
                <li>IVT doesn't tell you the exact value of $c$</li>
                <li>IVT only works one direction—a root existing doesn't require IVT to prove it</li>
            </ul>

            <div class="key-concept">
                <strong>The Power of IVT:</strong> It proves existence without finding the exact answer.
                This is a fundamental technique in mathematics—sometimes knowing a solution exists is
                as valuable as finding it.
            </div>
        `
    }
};

// Placeholder lessons for Units 2-8
// These will be expanded in future updates

const placeholderLesson = {
    content: `
        <h3>Coming Soon</h3>
        <p>This lesson is being transcribed from the ancient texts of Infinitia.</p>
        <p>Return to this region after mastering the Tidal Observatory to find it unlocked.</p>
        <div class="key-concept">
            <strong>For now:</strong> Focus on mastering Unit 1: Limits and Continuity at the Tidal Observatory.
        </div>
    `
};

// Add placeholder lessons for topics without full content
function ensureLessonExists(topicId) {
    if (!lessons[topicId]) {
        lessons[topicId] = {
            id: topicId,
            title: `Topic ${topicId}`,
            ...placeholderLesson
        };
    }
}

/**
 * Get a lesson by topic ID
 */
export function getLesson(topicId) {
    ensureLessonExists(topicId);
    return lessons[topicId];
}

/**
 * Check if a lesson has full content (not placeholder)
 */
export function hasFullContent(topicId) {
    return lessons[topicId] && lessons[topicId].content !== placeholderLesson.content;
}

/**
 * Get all lesson IDs
 */
export function getAllLessonIds() {
    return Object.keys(lessons);
}

export { lessons };
