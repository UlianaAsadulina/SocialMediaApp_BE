# Social Media App (Backend)

A minimal MVP backend for a MERN social media application built with **Node.js**, **Express**, **MongoDB**, and **Cloudinary**.  
Supports authentication, posts, comments, profiles, and image uploads.



📦 **Frontend Repo:** https://github.com/UlianaAsadulina/SocialMediaApp_FE    

---

## 🚀 Tech Stack

- ![Node.js](https://img.shields.io/badge/Node.js-43853D?logo=node.js)
- ![Express](https://img.shields.io/badge/Express.js-black?logo=express)
- ![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?logo=mongodb)
- ![Mongoose](https://img.shields.io/badge/Mongoose-880000)
- ![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?logo=cloudinary)
- ![JWT](https://img.shields.io/badge/JWT-black?logo=jsonwebtokens)


---

## ⭐ API Features
- 🔐 JWT Authentication
- 👤 User registration & login
- 📝 Create/read posts
- 💬 Comments support
- 🖼️ Image upload via Cloudinary
- 📄 Profile lookup

---

## 📁 Folder Structure
```
backend/
│── controllers/
│── models/
│── routes/
│── middleware/
└── server.js

---

## 🛠️ Getting Started

### Prerequisites
- Node.js (v14+)
- MongoDB Atlas account or local instance
- Cloudinary account for image storage

### Installation
1. Clone the repository:
   `git clone https://github.com/UlianaAsadulina/SocialMediaApp_BE.git`
2. Install dependencies:
   `npm install`
3. Create a `.env` file in the root directory and add:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_secret_key
   CLOUDINARY_CLOUD_NAME=your_name
   CLOUDINARY_API_KEY=your_key
   CLOUDINARY_API_SECRET=your_secret

4. Start the server: npm run dev

---

### API Endpoints Documentation


| Method | Endpoint | Description | Auth Req. |
| :--- | :--- | :--- | :--- |
| POST | `/api/auth/register` | Register a new user | No |
| POST | `/api/auth/login` | Login & receive JWT | No |
| GET | `/api/posts` | Get all posts | No |
| POST | `/api/posts` | Create a new post (w/ images) | Yes |
| POST | `/api/posts/:id/comment` | Add a comment to a post | Yes |

---

### Key Design Patterns

Adding a "Why" section shows you aren't just following a tutorial, but making engineering decisions.
* **MVC Architecture:** Mention that you used the Model-View-Controller pattern for scalability.
* **Middleware:** Highlight custom middleware for JWT verification or error handling.
* **Security:** Mention `cors`, `helmet`, or `bcrypt` for password hashing.

---

### Visuals & Status

* **License:** MIT License
* **Deployment:** on progress

---

### 5. Future Improvements (Roadmap)

This shows you have a vision for the project beyond just an MVP.
* [ ] Implementation of Socket.io for real-time notifications.
* [ ] Unit testing with Jest and Supertest.
* [ ] Password reset functionality via email (Nodemailer).

---

👩‍💻 Author

Uliana Asadulina | MERN Stack Web Developer  

🔗 GitHub: https://github.com/UlianaAsadulina  
🔗 LinkedIn: https://www.linkedin.com/in/uasadulina  