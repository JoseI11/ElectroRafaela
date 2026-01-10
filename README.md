
# Electro Rafaela

🌐 Read in: [English](README.md) | [Español](README.es.md)



## Overview
Electro Rafaela is a web application that simulates an online electronics store. 
 
Users can browse products, filter by category, view product details, and manage a shopping cart.

Data is stored in Firebase Realtime Database and product images are served from PostImages to keep the repository lightweight.
## Demo

https://electro-rafaela.vercel.app


## Features

- Product listing with categories
- Product detail view
- Shopping cart functionality
- Clean and simple UI


## Tech Stack
- **Next.js** – Chosen for a more complete React framework experience (routing, structure, and better project organization).
- **React** – Component-based UI for a modular and reusable frontend.
- **JavaScript (ES6+)** – Application logic and interactions.
- **TailwindCSS** – Utility-first styling for fast UI development, consistent design, and because it's a tool I’m already comfortable with.
- **Firebase Realtime Database** – Used as a real-time backend to store and sync product/cart data quickly without building a custom API
- **PostImages** – Hosts product images to avoid storing many assets inside the project (keeps the repo clean and lightweight).
- **Vercel** – Deployment and hosting.

## Screenshots

![Home](https://github.com/user-attachments/assets/37eef036-5075-47fc-9127-1ed2fec2ae57)

## Installation
```bash
git clone https://github.com/JoseI11/ElectroRafaela.git
cd ElectroRafaela
npm install
npm run dev
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env.local file

```env
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_DATABASE_URL=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=
```
## Roadmap

- Improve cart persistence (save cart between sessions).
- Add authentication (users can keep their cart and history).
- Create a checkout flow (order summary + confirmation).
- Add loading states, empty states, and better error handling.
