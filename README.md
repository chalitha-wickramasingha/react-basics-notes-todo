# ⚛️ React Basics – Notes & To-Do App

<table>

  <tr>

    <td width="40%">

      <strong>React Basics</strong><br />

      Dev Weekends Exercise

    </td>

    <td width="60%">

      <strong>React Basics – Notes & To-Do App</strong> is a beginner-friendly React application built as part of a <strong>Dev Weekends Fellowship 2026</strong> exercise.

      The project combines React learning notes with a functional To-Do application to demonstrate fundamental concepts including <strong>JSX</strong>, <strong>functional components</strong>, <strong>props</strong>, <strong>useState</strong>, <strong>useEffect</strong>, <strong>conditional rendering</strong>, and <strong>list rendering with keys</strong>.

    </td>

  </tr>

</table>

---

## ✨ Features

- ⚛️ **Functional Components** — Built using reusable React functional components.
- 📦 **Props & Component Communication** — Passes data and callback functions between parent and child components using props.
- 🧠 **useState** — Manages tasks, filters, form input, and application feedback.
- 🔄 **useEffect** — Persists the task list to browser `localStorage` whenever the task state changes.
- 🎯 **Conditional Rendering** — Displays different UI states depending on task availability and completion status.
- 📋 **List Rendering** — Dynamically renders tasks and filter options using JavaScript `.map()`.
- 🔑 **React Keys** — Uses unique task IDs as keys when rendering lists.
- ✅ **Task Management** — Allows users to add, complete, and delete tasks.
- 🔎 **Task Filtering** — Supports **All**, **Active**, and **Completed** task filters.
- 🧹 **Clear Completed** — Removes all completed tasks with a single action.
- 💾 **Local Persistence** — Keeps tasks available after refreshing the browser.
- 📱 **Responsive Design** — Adapts the interface for desktop and mobile screen sizes.
- 📝 **Learning Notes** — Includes dedicated React fundamentals notes and setup documentation.

---

## 📂 Project Structure

```text
react-basics-notes-todo/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── TaskSummary.jsx
│   │   ├── TodoForm.jsx
│   │   └── TodoItem.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
│
├── .gitignore
├── eslint.config.js
├── index.html
├── NOTES.md
├── package-lock.json
├── package.json
├── README.md
├── SETUP.md
└── vite.config.js
```

---

## 🌐 Live Demo

🚧 **Live Demo:** Coming soon.

The application will be deployed after the project has been finalized and tested.

---

## 📸 Screenshots

### 💻 Desktop View

📌 Desktop screenshot will be added after the final UI has been tested.

### 📱 Mobile View

📌 Mobile screenshot will be added after the final UI has been tested.

---

## 🛠️ Technologies Used

| Technology            | Purpose                                                |
| --------------------- | ------------------------------------------------------ |
| **React**             | Component-based user interface development             |
| **JavaScript (ES6+)** | Application logic, state management, and interactivity |
| **Vite**              | Fast frontend development server and build tooling     |
| **CSS3**              | Responsive styling, layouts, and visual presentation   |
| **ESLint**            | JavaScript and React code-quality checking             |
| **Git**               | Version control and project history management         |
| **GitHub**            | Repository hosting and source-code management          |
| **VS Code**           | Development environment                                |

---

## ⚙️ How to Run

### 🖥️ Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/chalitha-wickramasingha/react-basics-notes-todo.git
```

### 2. Navigate into the project directory

```bash
cd react-basics-notes-todo
```

### 3. Install the project dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Open the local development URL

Open the URL shown in your terminal. By default, Vite usually runs at:

```text
http://localhost:5173/
```

---

## 🔍 Available Scripts

### Start Development Server

```bash
npm run dev
```

### Run ESLint

```bash
npm run lint
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## 🎯 Core Functionalities

- Add a new task
- Mark tasks as completed
- Mark completed tasks as active
- Delete tasks
- Filter tasks by **All**, **Active**, or **Completed**
- Clear all completed tasks
- Display total task count
- Display active task count
- Display completed task count
- Show feedback messages after task actions
- Save tasks using browser `localStorage`
- Restore saved tasks after refreshing the page
- Responsive layout for smaller screens

---

## 🧩 React Concepts Demonstrated

### JSX

JSX is used to define the user interface directly inside React components.

### Functional Components

The application is structured using multiple functional components:

- `App`
- `TodoForm`
- `TodoItem`
- `TaskSummary`

This demonstrates component-based application architecture.

### Props

Props are used to pass data and callback functions between components.

Examples include:

- Passing task data to `TodoItem`
- Passing task information to `TaskSummary`
- Passing the task creation function to `TodoForm`

### useState

The `useState` hook manages dynamic application data such as:

- Tasks
- Current filter
- Form input
- Feedback messages

### useEffect

The `useEffect` hook is used to save the current task list to browser `localStorage` whenever the task state changes.

### Conditional Rendering

Conditional rendering is used to display different UI states, including:

- Empty task states
- Completed task status
- Active task status
- Success messages

### List Rendering

Tasks and filter options are rendered dynamically using JavaScript `.map()`.

### React Keys

Each task rendered in the list uses a unique task ID:

```jsx
<TodoItem
  key={task.id}
  task={task}
  onToggle={toggleTask}
  onDelete={deleteTask}
/>
```

Using a unique key allows React to correctly identify and manage individual list items.

---

## 📝 Learning Notes

The repository includes additional learning documentation.

### `NOTES.md`

Contains beginner-friendly explanations covering:

- JSX
- Functional Components
- Props
- useState
- useEffect
- Conditional Rendering
- List Rendering
- React Keys
- Event Handling
- Component Communication

### `SETUP.md`

Contains setup instructions for running the project locally.

---

## 📚 Dev Weekends Exercise

This project was created as part of the **Dev Weekends Fellowship 2026** as a practical exercise for learning React fundamentals.

### Exercise Focus

React fundamentals including:

- JSX
- Functional Components
- Props
- useState
- useEffect
- Conditional Rendering
- List Rendering
- React Keys

### Deliverable

A React application combining:

1. React learning notes
2. A small functional To-Do application

### Acceptance Criteria

- ✅ Builds functional components and passes props correctly.
- ✅ Uses `useState` and `useEffect`.
- ✅ Handles conditional rendering.
- ✅ Handles list rendering with React keys.

---

## 👨‍💻 Author

### Chalitha Wickramasingha

🔗 **GitHub:** [chalitha-wickramasingha](https://github.com/chalitha-wickramasingha)

🔗 **LinkedIn:** [Chalitha T. Wickramasingha](https://www.linkedin.com/in/chalitha-t-wickramasingha)

---

## ⚛️ Dev Weekends Fellowship 2026

Built as a **React fundamentals learning exercise** for the **Dev Weekends Fellowship 2026**.

---

⭐ **If you find this project useful, consider giving the repository a star!**
