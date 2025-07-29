import { registerUser, loginUser } from '../services/authService.js';

export async function register(req, res) {
  const result = await registerUser(req.body);
  res.json(result);
}

export async function login(req, res) {
  const result = await loginUser(req.body);
  res.json(result);
}

