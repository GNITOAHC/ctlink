import { BACKEND_URL } from "@/constants";

type RegisterBody = { mail: string };

type VerifyBody = {
  mail: string;
  otp: string;
  username: string;
};

class AuthService {
  async register(body: RegisterBody) {
    try {
      const res = await fetch(`${BACKEND_URL}/register`, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
      });

      return await res.text();
    } catch (error) {
      return error;
    }
  }

  async verify(body: VerifyBody) {
    try {
      const res = await fetch(`${BACKEND_URL}/register/verify`, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
      });

      return await res.text();
    } catch (error) {
      return error;
    }
  }
}

const authService = new AuthService();
export default authService;
