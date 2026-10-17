# Crossfire 2026 - Inter-Faculty Game Day & Call of Duty 4 Tournament

Official web portal and registration platform for the inter-faculty university game day and Call of Duty 4 tournament. Built with modern web technologies for high performance, ease of use, and seamless mobile responsiveness.

## Tech Stack

- **Frontend:** React (Vite) + Tailwind CSS v4
- **Routing:** React Router DOM (Client-side SPA routing)
- **Backend & Storage:** Firebase Firestore (Database) & Firebase Storage
- **Hosting:** Firebase Hosting

---

## Project Structure

```text
Crossfire-Website/
├── public/              # Static assets
├── src/
│   ├── pages/           # Page components (Home, Register, Admin)
│   ├── App.jsx          # Root component & route definitions
│   ├── firebase.js      # Firebase SDK configuration
│   ├── main.jsx         # Application entry point
│   └── index.css        # Tailwind CSS v4 imports
├── firebase.json        # Firebase Hosting & SPA rewrite rules
├── package.json         # Project dependencies & scripts
└── vite.config.js       # Vite configuration
```

---

## Getting Started Locally

Follow these steps to set up and run the project on your local machine:

### 1. Clone the repository

```bash
git clone https://github.com/yasithbuddhima/Crossfire-Website.git
cd Crossfire-Website
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure Firebase

Create a `src/firebase.js` file and initialize your Firebase project credentials:

```javascript
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
```

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

---

## Building & Deployment

### 1. Build for Production

Compiles the static production assets into the `dist/` directory:

```bash
npm run build
```

### 2. Deploy to Firebase Hosting

Deploy your application live to your Firebase `.web.app` subdomain:

```bash
npx firebase-tools deploy
```

---

## Contributors

Developed for the university game day community.

<p align="center">
  <b>Crossfire 2026 — Department of Computer Science, University of Ruhuna</b>
</p>
