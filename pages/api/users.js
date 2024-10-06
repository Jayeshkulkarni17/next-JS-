// pages/api/users.js
import dbConnect from "../../lib/mongodb";
import User from "../../models/UserSchema"; // Ensure this is importing the model

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "POST":
      try {
        const user = await User.create(req.body); // Use the User model to create a new user
        res.status(201).json({ success: true, data: user });
      } catch (error) {
        console.error(error); // Log error for debugging
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    default:
      res.setHeader('Allow', ['POST']);
      res.status(405).json({ success: false, message: `Method ${method} Not Allowed` });
      break;
  }
}