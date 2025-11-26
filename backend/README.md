# Backend Setup

## Environment Variables

Create a `.env` file in the backend directory with the following variables:

```
PORT=3001
MONGODB_URI=mongodb://localhost:27017/test-project
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
```

**Environment Variables:**
- `PORT` - Server port (default: 3001)
- `MONGODB_URI` - MongoDB connection string
- `NODE_ENV` - Environment (development/production)
- `FRONTEND_URL` - Frontend URL for CORS (default: http://localhost:3000)

## Installation

```bash
yarn install
```

## Running the Server

```bash
yarn dev
```

## MongoDB Connection

Make sure MongoDB is running on your system. The default connection string is `mongodb://localhost:27017/test-project`.

You can change the connection string in the `.env` file.

## CORS Configuration

CORS is configured to allow requests from the frontend. The configuration:

- **Development**: Allows requests from `http://localhost:3000`, `http://127.0.0.1:3000`, and the `FRONTEND_URL` environment variable
- **Production**: Only allows requests from the `FRONTEND_URL` environment variable
- **Credentials**: Enabled (allows cookies and authentication headers)
- **Methods**: GET, POST, PUT, DELETE, PATCH, OPTIONS
- **Headers**: Content-Type, Authorization, X-Requested-With

To change the allowed frontend URL, update the `FRONTEND_URL` environment variable in your `.env` file.

## API Endpoints

- `GET /api/health` - Health check
- `GET /api/hello` - Hello message
- `POST /api/data` - Test endpoint
- `POST /api/users` - Create a user (requires name and email)
- `GET /api/users` - Get all users
