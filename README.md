# 🧩 User Dashboard

A small **Vue.js 2** project demonstrating frontend skills in logic, component interaction, and responsive UI using **Bootstrap 4.6**.

---

## ⚙️ Environment & Tech Stack

| Technology | Version | Description |
|-------------|----------|-------------|
| **Node.js** | v16.5.0 | JavaScript runtime environment |
| **Vue.js** | 2.x | Frontend framework |
| **Bootstrap** | 4.6 | Responsive UI framework |
| **Vue CLI** | 4.x | Project scaffolding and build tool |
| **Language files** | en.json / vi.json | i18n localization setup |
| **Mock data** | users.json | Static sample user list for demo |

---

## 📁 Folder Structure
src/
├─ assets/
│ ├─ logo.png
│ └─ users.json
├─ components/
│ ├─ OrderSummary.vue
│ ├─ UserCard.vue
│ └─ UserDashboard.vue
├─ language/
│ └─ vi.json
├─ App.vue
└─ main.js
---

## 🚀 Features

- 🧍 Display a list of users (avatar, name, email, “View Profile” button)  
- 👆 Click user card → shows “Selected: [Name]”  
- 📊 Displays order summary (completed orders count + total amount)  
- 💅 Responsive layout using **Bootstrap 4.6**
- ✨ Simple hover effects for better interactivity  
- 🌍 Multilingual (example: Vietnamese)

---

## 💡 Technical Highlights

- 🔄 **Component Interaction:**  
  The `UserDashboard` component manages the main state (selected user, order summary) and passes data to child components via **props**, while receiving user selection events through **custom events ($emit)** from `UserCard.vue`.

- 🧮 **Dynamic Computation:**  
  Utilizes **computed properties** to automatically calculate:
  - Total number of completed orders  
  - Sum of all completed order totals  
  These update reactively when the data changes.

- 🎨 **Modular UI Design:**  
  Each visual unit (user card, summary block) is separated into its own Vue component:
  - `UserCard.vue` — handles individual user display and emits selection events  
  - `OrderSummary.vue` — handles statistics and calculations display  
  - `UserDashboard.vue` — parent container managing state and layout  

- 💅 **Responsive & Interactive Layout:**  
  Built with **Bootstrap 4.6** grid system and utilities for a clean, responsive design.  
  Added hover effects using simple CSS transitions for a modern feel.

- 🌍 **Localization Ready:**  
  Configured with simple JSON-based i18n structure (`vi.json`) allowing easy extension for multilingual support.


## 🧠 Project Setup

```bash
npm install
npm run serve


### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



