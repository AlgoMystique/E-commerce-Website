# Ethereal Apparel - E-Commerce Website

Ethereal Apparel is a modern and scalable e-commerce website built using the MERN stack (MongoDB, Express.js, React, and Node.js). This project showcases a full-stack single-page application (SPA) with a focus on user interaction, smooth UX, and real-time data handling.

## Project Overview

This interactive and responsive e-commerce platform provides users with a seamless shopping experience. It offers authentication, a dynamic product catalog, a shopping cart, and a user profile page, all powered by a MongoDB backend and GraphQL API. The website is fully deployed and functional, supporting various user operations like browsing, adding products to the cart, and managing user authentication securely with JWT.

## Key Features

Interactive UI: Engaging and user-friendly interface that allows users to browse products, add them to the cart, and manage their profile.

User Authentication: Users can register and log in with secure JWT authentication to personalize their shopping experience.
Product Management: View and filter products, with GraphQL queries fetching real-time data from the MongoDB database.
Shopping Cart: Users can add and remove products to/from their cart with instant updates.
Responsive Design: Optimized for various screen sizes, offering a mobile-friendly experience.
Deployment: Hosted on Render, ensuring high availability and scalability for all users.
Technologies Used
Frontend: React.js
Backend: Node.js, Express.js
Database: MongoDB with Mongoose ODM
API: GraphQL for flexible querying
Authentication: JWT (JSON Web Tokens)
Deployment: Render for full-stack deployment
Version Control: GitHub for source code management
CI/CD: GitHub Actions for automated workflows
Responsive Design: CSS (Flexbox, Media Queries) for mobile-first layout
Installation
To run the project locally, follow these steps:

Clone the Repository

bash
Copy
git clone https://github.com/yourusername/ethereal-apparel.git
cd ethereal-apparel
Install Dependencies
Install the required dependencies for both the backend and frontend:

Backend (Node.js, Express, GraphQL, MongoDB)
bash
Copy
npm install
Frontend (React, Apollo Client)
bash
Copy
cd client
npm install
cd ..
Set Up Environment Variables
Create a .env file in the root directory for the following:

MONGODB_URI: Your MongoDB connection URI
JWT_SECRET: Secret key for JWT token generation
PORT: Port number (default is 5000)
Start the Application
To run both frontend and backend locally, open two terminal windows and run:

Backend (Express/GraphQL Server)
bash
Copy
npm run server
Frontend (React Client)
bash
Copy
npm run client
Visit the Application
Open http://localhost:3000 in your browser to view the website.

Deployed Application
Visit the live version of the website at:
Deployed Application Link

Screenshots

The homepage showing a selection of featured products.


A product detail page displaying all information about the selected item.

