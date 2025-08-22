# Xplore - Discover Hidden Gems 🗺️

Xplore is a community-driven platform that helps users discover unique, local spots and hidden gems in their city. Connect with authentic, unique, and overlooked places that give a city its soul.

Live Link: https://xplore-blond.vercel.app

---

## ✨ Features
- **Discover Hidden Gems**: Find unique local spots shared by the community  
- **Share Your Finds**: Add new places and contribute to the community  
- **Categorized Exploration**: Browse spots by categories like Culture, Food, Nature, and more  
- **Social Login**: Easy authentication with Google OAuth  
- **Ratings & Reviews**: See community ratings for each location  
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile  

---

## 🛠️ Tech Stack
- **Frontend**: Next.js, React, Tailwind CSS  
- **Authentication**: NextAuth.js  
- **Database**: MongoDB  

---

## 🚀 Quick Setup

### Prerequisites
- Node.js **16.8 or later**  
- MongoDB connection string  
- Google OAuth credentials  

### Installation Steps
1. **Clone and install dependencies**
   ```bash
   git clone https://github.com/your-username/xplore.git
   cd xplore
   npm install

 2. **Environment Setup**

Create a `.env.local` file in the root directory with the following variables:

```env
MONGODB_URI=your_mongodb_connection_string
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your_google_oauth_client_id
GOOGLE_CLIENT_SECRET=your_google_oauth_client_secret


3. **Run the Development Server**

```bash
npm run dev

---

## 📁 Route Summary

### 🔐 Authentication Routes
- `/login` → User login page with email/password and Google OAuth  
- `/signup` → User registration page for creating new accounts  

### 🗺️ Main Application Routes
- `/` → Homepage with featured spots and categories  
- `/allspots` → Browse all available spots with filtering options  
- `/addplace` → Form to add a new place to the platform  
- `/spots/[id]` → Detailed view of a specific spot  

### ⚙️ API Routes
- `/api/auth/[...nextauth]` → NextAuth.js authentication endpoints  
- `/api/places` → CRUD operations for spots ( POST)  
- `/api/spot/[id]` → Individual spot operations (GET, PUT, DELETE)  

---

## 🌟 Contributing
We welcome contributions to **Xplore**!  
Please feel free to submit issues, feature requests, or pull requests.

---

## 📌 License
This project is licensed under the MIT License.

---

## 🌍 Happy Exploring! ✨
Discover the soul of your city with **Xplore** — where every corner holds a story waiting to be uncovered.

