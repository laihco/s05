S05: Activity – Analyze & Refactor

Identified code smells

Duplicated code: The three button handlers (increment/decrement/reset) repeated the same UI update steps.

Unclear names: Variables like c, a, b, h, bI, bD, bR make it hard to understand when they are referenced later.

Global mutable state: c had no safety net against inconsistent updates.

Refactorings Applied (Fowler)

Rename Variable
c → count, a/b/h → IDS/HEADING_TEXT, bI/bD/bR → incBtn/decBtn/resetBtn, etc.

Replace Magic Number/Literal with Symbolic Constant
Introduced IDS, HEADING_TEXT, TITLE_PREFIX, and BG so IDs/text/colors live in one place.

Extract Function
Created a single render() to perform all UI updates (counter text, title, background).

Encapsulate Variable
Added setCount(next) so all state changes to count pass through one spot and trigger render().

Why This Improved the Code

Maintainability: UI updates live in one place and only requires editing render() or constants.

Readability: Clear names and grouped constants make the program easier to understand.
