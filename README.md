<h1> Chat Application</h1>

Welcome to the Real-Time Chat Application, a MERN stack project that leverages MongoDB, React, Express, Node, and Socket.IO for seamless, real-time, bidirectional communication between users. This feature-rich chat application allows users to send messages, see online and offline statuses, and engage in conversations effortlessly. User authentication is implemented with tokens and cookies, ensuring a secure and personalized experience.
<h2>Features</h2>

    Real-Time Communication: Utilizing Socket.IO for instant, bidirectional messaging between users.
    User Authentication: Securely sign up and log in to access personalized chat functionalities.
    Online/Offline Status: Visual indicators for user availability.
    Token-based Security: Ensure secure user authentication and authorization.

<h2>Technologies Used</h2>

    Frontend: React
    Backend: Node.js, Express
    Database: MongoDB
    Real-Time Communication: Socket.IO
    Authentication: JSON Web Tokens (JWT), Cookies

# Getting Started
# Clone the Repository

bash

git clone https://github.com/sanaahsam/Chat-Application.git
cd chat-app

Install Dependencies

bash

# Install server dependencies
cd backend
npm install

# Install client dependencies
cd ../frontend
npm install

Set Environment Variables

Create a .env file in the backend directory with the following content:

env

PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

Run the Application

bash

# Start the server
cd backend
npm start

# Start the client
cd ../frontend
npm start

Open your browser and navigate to http://localhost:3000 to access the Real-Time Chat Application.
Contributing

Contributions are welcome! If you'd like to enhance the app or fix any bugs, feel free to submit a pull request.
License

This project is licensed under the MIT License.

Happy chatting! 🚀📱
