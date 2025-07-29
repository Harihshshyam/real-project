import User from '../models/User.js';

export async function registerUser(data) {
  const user = await User.create(data);
  return { userId: user._id, message: 'Registered successfully' };
}

export async function loginUser(data) {
  const user = await User.findOne({ email: data.email });
  if (!user) throw new Error('User not found');
  return { userId: user._id, email: user.email };
}

