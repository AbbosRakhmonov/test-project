# Full-Stack TypeScript Project

A simple test project with React + Vite frontend and Node.js Express backend, both using TypeScript.

## Project Structure

```
test-project/
├── backend/          # Express backend with TypeScript
│   ├── src/
│   │   └── index.ts  # Main server file
│   ├── package.json
│   └── tsconfig.json
├── frontend/         # React + Vite frontend with TypeScript
│   ├── src/
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── ...
│   ├── package.json
│   ├── vite.config.ts
│   └── tsconfig.json
├── .gitignore        # Git ignore rules
└── README.md
```

## Getting Started

### Quick Start (Run Both Servers)

1. Install all dependencies (root, backend, and frontend):

```bash
yarn install:all
```

2. Start both servers simultaneously:

```bash
yarn dev
```

This will start:

- Backend on `http://localhost:3001`
- Frontend on `http://localhost:3000`

### Individual Setup

#### Backend Setup

1. Navigate to the backend directory:

```bash
cd backend
```

2. Install dependencies:

```bash
yarn install
```

3. Run the development server:

```bash
yarn dev
```

The backend will run on `http://localhost:3001`

#### Frontend Setup

1. Navigate to the frontend directory:

```bash
cd frontend
```

2. Install dependencies:

```bash
yarn install
```

3. Run the development server:

```bash
yarn dev
```

The frontend will run on `http://localhost:3000`

## Available Scripts

### Root Level (Run from project root)

- `yarn dev` - Start both backend and frontend servers simultaneously
- `yarn dev:backend` - Start only the backend server
- `yarn dev:frontend` - Start only the frontend server
- `yarn install:all` - Install dependencies for root, backend, and frontend

### Backend (Run from `backend/` directory)

- `yarn dev` - Start development server with hot reload
- `yarn build` - Build for production
- `yarn start` - Start production server

### Frontend (Run from `frontend/` directory)

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn preview` - Preview production build

## API Endpoints

- `GET /api/health` - Health check endpoint
- `GET /api/hello` - Returns a hello message
- `POST /api/data` - Accepts JSON data and returns a response
- `POST /api/users` - Create a user (requires name and email)
- `GET /api/users` - Get all users

## Technologies Used

- **Frontend**: React 18, Vite, TypeScript
- **Backend**: Node.js, Express, TypeScript, Mongoose
- **Development**: tsx (for backend hot reload)
- **Package Manager**: Yarn
