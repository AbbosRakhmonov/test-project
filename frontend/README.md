# Frontend Setup

## Environment Variables

Create a `.env` file in the frontend directory with the following variables:

```env
# API Configuration
VITE_API_URL=http://localhost:3001
VITE_API_BASE_PATH=/api

# App Configuration
VITE_APP_TITLE=React + Vite + TypeScript
VITE_APP_ENV=development

# Frontend Configuration
VITE_FRONTEND_PORT=3000
```

You can copy from `.env.example`:
```bash
cp .env.example .env
```

**Important:** In Vite, only environment variables prefixed with `VITE_` are exposed to the client code.

**Environment Variables:**
- `VITE_API_URL` - Backend API URL (default: http://localhost:3001)
- `VITE_API_BASE_PATH` - API base path (default: /api)
- `VITE_APP_TITLE` - Application title
- `VITE_APP_ENV` - Environment mode (development/production)
- `VITE_FRONTEND_PORT` - Frontend dev server port (default: 3000)

## Installation

```bash
yarn install
```

## Running the Development Server

```bash
yarn dev
```

The frontend will run on the port specified in `VITE_FRONTEND_PORT` (default: 3000)

## Building for Production

```bash
yarn build
```

## Preview Production Build

```bash
yarn preview
```

## Using Environment Variables in Code

Environment variables are accessed through the `env` config:

```typescript
import { env, getApiUrl } from './config/env'

// Get API URL
const apiUrl = env.VITE_API_URL

// Get full API endpoint URL
const healthUrl = getApiUrl('health') // Returns: http://localhost:3001/api/health
```

