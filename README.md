# TipMate - Tip Calculator App

## Overview
TipMate is a modern web application for calculating tips and managing bill history.

## Technologies
- Next.js 15
- React 19
- MongoDB
- Tailwind CSS
- TypeScript

## Local Development
1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Set up environment variables:
   - Create a `.env.local` file
   - Add `MONGODB_URI=your_mongodb_connection_string`

4. Run the development server:
   ```
   npm run dev
   ```

## Deployment
### Render Deployment
1. Fork the repository
2. Create a new Web Service on Render
3. Connect to your GitHub repository
4. Set the following environment variables:
   - `MONGODB_URI`: Your MongoDB connection string
5. Choose Node.js 20.x as the runtime
6. Set build command: `npm install && npm run build`
7. Set start command: `npm run start`

## Troubleshooting
- Ensure Node.js version 20.x or higher
- Verify MongoDB connection string
- Check network and firewall settings
