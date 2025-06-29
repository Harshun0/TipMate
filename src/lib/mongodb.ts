import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || '';

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

interface MongoConnection {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

// Use a global variable to preserve the connection across hot reloads
const globalAny: any = global;
const cached: MongoConnection = globalAny.mongoose || { conn: null, promise: null };

if (!globalAny.mongoose) {
  globalAny.mongoose = cached;
}

async function connectMongoDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      // Ensure these options are compatible with your MongoDB setup
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    };

    try {
      cached.promise = mongoose.connect(MONGODB_URI, opts);
    } catch (e) {
      cached.promise = null;
      throw e;
    }
  }

  try {
    cached.conn = await cached.promise;
    return cached.conn;
  } catch (e) {
    cached.promise = null;
    throw e;
  }
}

export default connectMongoDB; 