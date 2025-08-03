# Maintenance System

A web-based maintenance management system for tracking machine complaints and maintenance requests.

## Features
- Submit machine complaints
- Priority-based complaint management
- MongoDB database integration
- RESTful API

## Setup Instructions
1. Install dependencies: `npm install`
2. Set up environment variables in `backend/.env`
3. Start the backend: `cd backend && npm run dev`
4. Open `frontend/index.html` in a browser

## API Endpoints
- GET /api/complaints - Get all complaints
- POST /api/complaints - Create new complaint
- GET /api/complaints/:id - Get specific complaint
- PUT /api/complaints/:id - Update complaint
- DELETE /api/complaints/:id - Delete complaint 