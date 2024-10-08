import { Hono } from "hono";
import {
  Register,
  verifyUser,
  resendVerificationToken,
  loginUser,
  resetPassword,
  setPassword,
} from "./auth.controller";

export const authRoutes = new Hono();

authRoutes.post("register", Register);

authRoutes.post("verify-user", verifyUser);

authRoutes.post("resend-verification", resendVerificationToken);

authRoutes.post("/login", loginUser);

authRoutes.post("/reset-password", resetPassword);

authRoutes.post("/set-password", setPassword);
