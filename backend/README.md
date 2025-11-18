# Catálogo de Carros - Backend API

## Description
Backend API for vehicle catalog management system with contact form functionality.

## Features
- Vehicle listing with filtering and sorting
- Vehicle detail views
- Contact form submission

## Technology Stack
- Node.js
- Express.js
- TypeScript
- In-memory data storage (no database)

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation
```bash
npm install
```

### Configuration
Copy `.env.example` to `.env` and configure:
```bash
cp .env.example .env
```

### Development
```bash
npm run dev
```

### Build
```bash
npm run build
```

### Production
```bash
npm start
```

### Testing
```bash
npm test
```

## API Endpoints

### Health Check
- `GET /health` - API health status

### API Version 1
Base URL: `/api/v1/internal`

(Feature endpoints will be added as features are implemented)

## Project Structure
```
src/
├── api/              # API controllers
├── routes/           # Route definitions
├── middleware/       # Express middleware
├── services/         # Business logic
├── utils/            # Utility functions
├── constants/        # Application constants
├── instances/        # Service instances
├── tests/            # Test utilities
└── server.ts         # Application entry point
```

## Development Guidelines
- Follow TypeScript strict mode
- Use path aliases (@/) for imports
- Implement proper error handling
- Write tests for business logic
- Document complex operations

## License
ISC
