import 'dotenv/config';
import mongoose from 'mongoose';

// mongodb://root:example@localhost:27017/glassesStore?authSource=admin
const connectToDatabase = (
  mongoDatabaseURI = process.env.MONGO_URI
    || 'mongodb://localhost:27017/?readPreference=primary&ssl=false',
) => mongoose.connect(mongoDatabaseURI);

export default connectToDatabase;