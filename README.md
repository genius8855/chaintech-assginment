# React Authentication App

This is a simple authentication app built using **React** and **React Router DOM**. It includes login, registration, and account management features. The UI is styled using **Tailwind CSS**.

## Features

- **User Registration**: Allows new users to sign up by providing a username and password.
- **User Login**: Authenticated users can log in using their credentials.
- **Account Page**: After logging in, users can view their account details and log out.
- **Logout**: Users can securely log out of their accounts.

## Pages

1. **Login Page**  
   Users can log in by providing their username and password.
   
2. **Registration Page**  
   New users can register by entering a username and password.
   
3. **Account Page**  
   After logging in, users are directed to their account page, where they can view details and log out.

## Project Structure

├── src │ 
  ├── components │
     ├── LoginPage.js │ 
     ├── RegistrationPage.js │
     └── AccountPage.js │ 
  ├── App.js │ 
  ├── index.js │ 
  ├── styles.css (Tailwind CSS included here) │
  └── public │
    └── index.html 
├── package.json 
├── tailwind.config.js
└── README.md


## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/genius8855/chaintech-assignment.git
   cd chaintech-assginment

2. **Install Dependencies**
   ```bash
   npm install

4. **Set up tailwind css**
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init

6. **Add the following content to your tailwind.config.js file**
   ```bash
   module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  }

8. **In src/styles.css, add the following Tailwind directives:**
   ```bash
   @tailwind base;
   @tailwind components;
   @tailwind utilities;

10. **Start the development server**
    ```bash
    npm start

12. **The app will be running at http://localhost:3000/.**

