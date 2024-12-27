# GitHub-Receipt

A web application that generates a receipt-style summary of a GitHub user's profile and repositories. The app fetches data using the GitHub API and presents it in a visually appealing "receipt" format.

## Features

- Fetch and display:
  - Profile information (name, username, followers, following, etc.)
  - Number of public repositories
  - Top language used
  - List of public repositories with links
- Receipt-style UI with shadows and a clean layout
- Error handling for invalid or missing usernames

## Technologies Used

### Frontend:
- **React**: For building the user interface.
- **Vite**: For a fast development server.
- **Tailwind CSS**: For styling the application.

### Backend:
- **Node.js**: For the server-side runtime.
- **Express.js**: For building the API endpoints.

### Other Tools:
- **Axios**: For making HTTP requests.
- **GitHub API**: To fetch user profile and repository data.

## Getting Started

### Prerequisites

- **Node.js** (v14 or higher) installed on your machine.
- A **GitHub Personal Access Token** to fetch private repository data (optional).

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/DesignByDevDan/GitHub-Receipt.git
   ```
2. Navigate to the project directory:
   ```bash
   cd GitHub-Receipt
   ```
3. Install dependencies for both frontend and backend:
   - **Backend**:
     ```bash
     cd backend
     npm install
     ```
   - **Frontend**:
     ```bash
     cd ../frontend
     npm install
     ```

### Running the Application

1. **Start the Backend**:
   Navigate to the `backend` folder and start the server:
   ```bash
   cd backend
   npm start
   ```
   The backend will run on `http://localhost:5001`.

2. **Start the Frontend**:
   Navigate to the `frontend` folder and start the development server:
   ```bash
   cd ../frontend
   npm run dev
   ```
   The frontend will run on `http://localhost:5173`.

### Environment Variables

Create a `.env` file in the `backend` folder and add the following:
```env
GITHUB_TOKEN=your_personal_access_token_here
```

### Usage

1. Enter a GitHub username in the input field.
2. Click the "Generate Receipt" button.
3. View the receipt-style summary of the GitHub profile.

### Screenshots

#### Home Page
![Home Page](./screenshots/home-page.png)

#### Receipt
![Receipt](./screenshots/receipt.png)

## Folder Structure

```
GitHub-Receipt/
├── backend/
│   ├── server.js
│   ├── package.json
│   ├── .env
│   └── node_modules/
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── public/
│   ├── package.json
│   ├── tailwind.config.js
│   └── node_modules/
└── README.md
```

## License

This project is licensed under the [MIT License](LICENSE).

## Contributing

Contributions are welcome! If you'd like to contribute, please fork the repository and create a pull request.

## Contact

- **GitHub**: [DesignByDevDan](https://github.com/DesignByDevDan)
