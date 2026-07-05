# Student Registration System

A lightweight, fully responsive Multi-Step Student Registration interface engineered with vanilla web technologies. The application processes user registration workflows split across sequential logical sections, validates structured fields natively via custom regex/rules, triggers localized stage confirmations, and commits data persistently on client environments via `localStorage`.

This project was developed as a technical evaluation task for **Qwetrum Technologies**.

## 🚀 Key Features

* **Multi-Step Wizard Pipeline:** Divides data accumulation workflows into clean sequential steps ("Fill details" -> "Check & submit") to declutter the viewport and maximize registration completion.
* **Granular Validation Engine:** Features custom regex-driven criteria evaluating specific workflows:
  * Strict Pakistani cellular schema assertion (`/^03\d{9}$/`).
  * Boundary limits on custom values (Age bounded systematically between 12 and 100).
  * Direct structural verification parameters for semantic string configurations.
* **Live Dynamic Preview:** Injects parsed string structures dynamically into a structural multi-column responsive confirmation grid inside the UI sequence right before finalizing submissions.
* **Persistent CRUD Layer:** Commits, initializes, parses, and clears serialized JSON record blocks cleanly using browser-scoped `localStorage` pipelines.
* **Responsive Layout Fallbacks:** Incorporates strict media scoping definitions enabling grid adjustments, table text-scoping modifications, and button-stack configurations across mobile, tablet, and widescreen environments.

## 🛠️ Technical Stack

* **HTML5:** Modular markup structures using structural grids, data tables, and decoupled semantic section components.
* **CSS3:** Native styling incorporating explicit element scoping definitions, custom status flags, CSS grid systems, and structural view resets.
* **JavaScript (ES6+):** Complete lifecycle event loops, localized state array manipulations (`splice`), serialization mapping (`JSON.stringify`/`parse`), and real-time DOM structural modifications.
