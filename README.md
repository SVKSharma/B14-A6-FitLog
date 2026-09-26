<div align="center">

<h1 style="font-size: 3rem; font-weight: 800; color: #ffffff;">
	<img src="./src/app/favicon.ico" alt="FitLog icon" width="52" style="vertical-align: middle;" />
	FIT<font color="#a6e22e">LOG</font>
</h1>

<h3 style="font-size: 1.1rem; font-weight: 700;"><font color="#a6e22e">B14-A06 · Workout Library</font></h3>

<h2 style="font-size: 1.8rem; font-weight: 800; color: #ffffff;">Train With Intent. Log Every Set.</h2>

Pick a lift, lock it into today&apos;s plan, and watch the work add up.

**Live Demo:** [Open FitLog](https://b14-a6-fitlog-svk.vercel.app/)

</div>

---

<h2 style="font-size: 1.5rem; font-weight: 800;"><font color="#a6e22e">About FitLog</font></h2>

FitLog is a modern, dark-themed responsive workout tracking application designed to help users organize their fitness routines. Built with the Next.js App Router, TypeScript, and Tailwind CSS, FitLog delivers a fast, interactive experience for discovering exercises, managing daily workout limits, and tracking completed lifts. It operates as a no-nonsense gym companion: pick a lift, lock it into today&apos;s plan, and watch the work add up.

<h2 style="font-size: 1.5rem; font-weight: 800;"><font color="#a6e22e">🌟 Key Features</font></h2>

- **Interactive Accomplishments:** Clicking "Mark as Done" triggers a custom canvas-confetti burst to reward completed lifts.
- **State Persistence:** Local storage integration retains your "Today&apos;s Plan" and "Saved" workouts across browser reloads and sessions.
- **Advanced Search & Filtering:** Find exercises instantly using a modern search bar that filters by workout name and category tags.
- **Comprehensive Sorting:** Sort the workout library and your plan by duration, calories, rating, and completion status in both ascending and descending orders.
- **Smart Plan Constraints:** Enforces a strict 5-lift cap for daily routines, automatically disabling the "Add to today&apos;s plan" button when the limit is reached to prevent overtraining.
- **Dynamic Metrics Dashboard:** Real-time calculation of total exercises, minutes, and calories directly inside the My Plan dashboard.
- **Custom UI & Animations:** Features sleek vertical glide effects for button switches and custom toast notifications (`react-toastify`) for success, warning, and error feedback.
- **Robust Error Handling:** Includes a heavily customized 404 Error page that catches all invalid routes, including missing dynamic workout IDs, and dedicated skeleton loading fallbacks for every API fetch.
- **Fully Responsive Grid:** The 3x4 workout library grid and two-column detail pages collapse gracefully for seamless mobile, tablet, and desktop viewing.

<h2 style="font-size: 1.5rem; font-weight: 800;"><font color="#a6e22e">🛠️ Technologies Used</font></h2>

- **Framework:** Next.js (App Router), React, React DOM
- **Language:** TypeScript
- **Styling:** Tailwind CSS, PostCSS, DaisyUI
- **Icons & UI:** React Icons, Canvas Confetti
- **State & Feedback:** React Toastify
- **Linting & Compilation:** ESLint, ESLint Config Next, Babel Plugin React Compiler
- **Type Definitions:** `@types/canvas-confetti`, `@types/node`, `@types/react`, `@types/react-dom`

<h2 style="font-size: 1.5rem; font-weight: 800;"><font color="#a6e22e">📂 Project Structure</font></h2>

FitLog follows a strict, modular component architecture to maintain clean boundaries between UI elements, layout components, and utility logic.

```text
src/
├── components/
│   ├── feedback/
│   │   ├── ShowErrorMsg.tsx
│   │   ├── ShowSuccessMsg.tsx
│   │   ├── ShowWarningMsg.tsx
│   │   └── ToastProvider.tsx
│   ├── layout/
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   └── Navbar.tsx
│   ├── my-plan/
│   │   └── MyPlanDashboard.tsx
│   ├── ui/
│   │   └── SearchBar.tsx
│   └── workouts/
│       ├── HorizontalCard.tsx
│       ├── Library.tsx
│       ├── LibraryContent.tsx
│       ├── VerticalCard.tsx
│       └── WorkoutDetails.tsx
├── lib/
│   ├── confetti.ts
│   ├── routes.ts
│   └── workouts.ts
```

<h2 style="font-size: 1.5rem; font-weight: 800;"><font color="#a6e22e">🚀 Getting Started</font></h2>

To run this project locally, follow these steps:

**GitHub Repository:** [B14-A6-FitLog](https://github.com/SVKSharma/B14-A6-FitLog)

**HTTPS Clone URL:** `https://github.com/SVKSharma/B14-A6-FitLog.git`

**SSH Clone URL:** `git@github.com:SVKSharma/B14-A6-FitLog.git`

<h3 style="font-size: 1.1rem; font-weight: 700; color: #ffffff;">Clone the repository</h3>

Using HTTPS:

```bash
git clone https://github.com/SVKSharma/B14-A6-FitLog.git
cd fitlog
```

Using SSH:

```bash
git clone git@github.com:SVKSharma/B14-A6-FitLog.git
cd fitlog
```

<h3 style="font-size: 1.1rem; font-weight: 700; color: #ffffff;">Install dependencies</h3>

```bash
npm install
```

<h3 style="font-size: 1.1rem; font-weight: 700; color: #ffffff;">Start the development server</h3>

```bash
npm run dev
```

<h3 style="font-size: 1.1rem; font-weight: 700; color: #ffffff;">Open your browser</h3>

Navigate to http://localhost:3000 to view the application.

Thank you for exploring FitLog. This project was developed to fulfill the B14-A6 requirements while pushing beyond the baseline to deliver a highly polished, production-ready fitness tracking experience.

---

<div align="center">

Built with 💚 by <a href="https://github.com/SVKSharma">Showvik</a>

</div>
