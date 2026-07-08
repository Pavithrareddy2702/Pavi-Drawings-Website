# 🎨 Pavi Drawings Website

A full-stack online painting gallery and portfolio website where users can explore paintings, discover artists, and securely register/login to access the platform. The application is built using **Node.js**, **Express.js**, **MongoDB Atlas**, and **EJS**, and is deployed on **Render**.

## 🌐 Live Demo

🚀 **Live Website:** https://pavi-drawings-website.onrender.com

---

## ✨ Features

### 👤 User Authentication
- Secure user registration
- Login using JWT authentication
- Passwords encrypted using bcrypt
- Session management using HTTP-only cookies

### 🖼️ Painting Gallery
- Browse paintings by category
- Portrait Paintings
- Landscape Paintings
- Pencil Art Collection
- View detailed information about each painting

### 🎨 Artist Showcase
- Featured Artists
- Trending Artists
- Artist biography and details

### 📤 Upload Functionality
- Upload new paintings
- Upload new artists
- Image upload using Multer
- Painting information stored in MongoDB Atlas

### ☁️ Cloud Database
- MongoDB Atlas integration
- Secure environment variables using dotenv

### 🚀 Deployment
- Hosted on Render
- Connected with MongoDB Atlas
- GitHub integrated deployment

---

# 🛠️ Tech Stack

| Category | Technologies |
|-----------|--------------|
| Backend | Node.js, Express.js |
| Database | MongoDB Atlas, Mongoose |
| Authentication | JWT, bcrypt |
| Frontend | HTML, CSS, EJS |
| File Upload | Multer |
| Environment | dotenv |
| Deployment | Render |
| Version Control | Git, GitHub |

---

# 📂 Project Structure

```
Pavi-Drawings-Website
│
├── static/                 # CSS, Images, JavaScript
├── views/                  # EJS Templates
│
├── controller.js           # Application Logic
├── router.js               # Express Routes
├── model.js                # MongoDB Models
├── db.js                   # Database Connection
├── multer.js               # File Upload Configuration
├── index.js                # Application Entry Point
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

---

# 🚀 Installation

## Clone Repository

```bash
git clone https://github.com/Pavithrareddy2702/Pavi-Drawings-Website.git
```

```bash
cd Pavi-Drawings-Website
```

Install dependencies

```bash
npm install
```

---

# ⚙️ Environment Variables

Create a `.env` file in the root directory.

```env
MONGO_URI=your_mongodb_atlas_connection_string
```

---

# ▶️ Run Locally

Development

```bash
npm run dev
```

Production

```bash
npm start
```

Application runs at

```
http://localhost:3000
```

---

# 📌 Available Routes

| Method | Route | Description |
|---------|-------|-------------|
| GET | `/` | Login Page |
| POST | `/login` | User Login |
| GET | `/register` | Registration Page |
| POST | `/register` | Register User |
| GET | `/home` | Home Page |
| GET | `/allPaintings` | All Paintings |
| GET | `/featuredPaintings` | Portrait Paintings |
| GET | `/landscapePaintings` | Landscape Paintings |
| GET | `/undergroundPaintings` | Pencil Art Collection |
| GET | `/featuredArtists` | Featured Artists |
| GET | `/trendingArtists` | Trending Artists |
| GET | `/addPainting` | Upload Painting Page |
| POST | `/uploadPainting` | Upload Painting |
| GET | `/addPainter` | Upload Painter Page |
| POST | `/uploadPainter` | Upload Painter |
| GET | `/myaccount` | User Account |
| GET | `/profile` | Logged-in User Profile |

---

# 🔐 Authentication

- Passwords are securely hashed using **bcrypt**.
- JWT tokens are stored in **HTTP-only cookies**.
- User sessions remain secure throughout authentication.

---

# 📸 Screenshots

> Add screenshots of your application here.

### Home Page

```
screenshots/home.png
```

### Login Page

```
screenshots/login.png
```

### Registration Page

```
screenshots/register.png
```

### Painting Gallery

```
screenshots/gallery.png
```

---

# 🚀 Deployment

This application is deployed on **Render**.

**Live Website**

👉 https://pavi-drawings-website.onrender.com

---

# 🔮 Future Improvements

- Password Reset
- Email Verification
- Responsive Mobile UI
- Search Paintings
- Like/Favorite Paintings
- Admin Dashboard
- Cloudinary Image Storage
- Pagination
- Image Compression
- Role-Based Authentication

---

# 👩‍💻 Author

**Pavithra Reddy**

GitHub

https://github.com/Pavithrareddy2702

---

# ⭐ If you found this project useful, don't forget to give it a star!
