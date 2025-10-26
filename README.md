<div align="center">

# 🤖 AI Playground

**A minimal, beautiful prompt playground built with React + Vite.**

[![Vite](https://img.shields.io/badge/Bundler-Vite-646CFF)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/Framework-React-61DAFB)](https://react.dev/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

</div>

## ✨ Features
- Clean UI with textarea input + response viewer
- Zero vendor lock‑in — points to a generic `/api/generate` (use any backend)
- Works out‑of‑the‑box with `npm run dev`
- Type once, click **Generate**, see the model’s reply

## 📁 Project Structure
```
ai-playground/
├── index.html
├── package.json
├── vite.config.js
├── .gitignore
├── src/
│   ├── App.jsx
│   ├── api.js
│   ├── main.jsx
│   └── styles.css
└── README.md
```

## 🚀 Quickstart
```bash
npm install
npm run dev
# open http://localhost:5173
```

## 🔌 Hooking up an API (optional)
The frontend calls a single endpoint:
```http
POST {VITE_API_URL or http://localhost:8000/api}/generate
Body: { "prompt": "..." }
Response: { "output": "..." }
```

Configure the API base via env:
```bash
# .env (optional)
VITE_API_URL=http://localhost:8000/api
```

> You can back this with any server (FastAPI, Express, local LLM, etc.).  
> This repo intentionally **does not** include server code by default.

## 🖼️ UI
- Dark theme
- Minimal, responsive layout
- “Thinking…” button state while awaiting response

## 🧪 Test locally without a backend
If you don’t have an API yet, you can mock the response by changing `src/api.js` to:
```js
export async function generateResponse(prompt) {
  await new Promise(r => setTimeout(r, 600));
  return `Echo: ${prompt}`; // fake response
}
```

## 🛠️ Scripts
- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run preview` — preview production build

## 📄 License
MIT
