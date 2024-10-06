// models/UserSchema.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name'],
  },
  email: {
    type: String,
    required: [true, 'Please provide an email'],
    unique: true,
  },
});

// Compile the schema into a model
const User = mongoose.models.User || mongoose.model('User', userSchema);

// Export the model
export default User;
