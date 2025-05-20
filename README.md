# 📘 Blog-App

A **MERN Stack Blog Application** built using **React.js**, **Node.js**, **Express**, and **MongoDB**, styled with **Material UI**. This app allows users to register, log in, and manage their personal blogs with full CRUD functionality.

---

### 🚀 Features

## 🔐 **User Authentication**
  - User Registration
  - Login with validation
  - Logout functionality

## 📝 **Blog Management**
  - Create a blog post
  - Read/view all blogs
  - Update existing blogs
  - Delete blogs

## 🔗 **User-Blog Mapping**
  - Each blog is linked to the user who created it
  - Users can only manage their own blogs

## 🎨 **UI/UX**
  - Clean and responsive UI using **Material UI**

---

### 🔧 **Installation & Running Locally**
        Prerequisites
            - Node.js & npm
            
            - MongoDB
            
            - Git

        # Clone the repository
            git clone https://github.com/your-username/blog-app.git
            cd blog-app
        
        # Install all dependencies (root, frontend, backend)
            npm install
            cd frontend && npm install && cd ..
            cd backend && npm install && cd ..
        
        # Start both frontend and backend together using concurrently
            npm run dev

    ## 📜 Scripts
          - Make sure your root-level package.json has this:
              "scripts": {
                "dev": "concurrently \"npm run server\" \"npm run client\"",
                "server": "cd backend && npm start",
                "client": "cd frontend && npm start"
              }

### 📌 Environment Variables
    Create a .env file in the backend/ directory:

      PORT=5000
      MONGODB_URI=your_mongo_db_connection_string
   
### 🤝 Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
