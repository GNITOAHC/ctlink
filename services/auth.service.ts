import { BACKEND_URL } from "@/constants";

type SendOTPBody = { mail: string };

type VerifyLoginBody = {
  mail: string;
  otp: string;
};

type VerifyRegisterBody = VerifyLoginBody & {
  username: string;
};

type VerifyBody = VerifyLoginBody | VerifyRegisterBody;

type DeleteBody = { mail: string };

class AuthService {
  async sendOTP(body: SendOTPBody, pathname: string) {
    try {
      const res = await fetch(`${BACKEND_URL}/${pathname}`, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      });

      return res;
    } catch (error) {
      return error;
    }
  }

  async verifyOTP(body: VerifyBody, pathname: string) {
    try {
      const res = await fetch(`${BACKEND_URL}/${pathname}/verify`, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      });

      return res;
    } catch (error) {
      return error;
    }
  }

  async register(body: SendOTPBody) {
    return await this.sendOTP(body, "register");
  }

  async login(body: SendOTPBody) {
    return await this.sendOTP(body, "login");
  }

  async verifyRegister(body: VerifyRegisterBody) {
    return await this.verifyOTP(body, "register");
  }

  async verifyLogin(body: VerifyLoginBody) {
    return await this.verifyOTP(body, "login");
  }

  async delete(body: DeleteBody) {
    try {
      const res = await fetch(`${BACKEND_URL}/test-delete`, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      });

      return res;
    } catch (error) {
      return error;
    }
  }
}

const authService = new AuthService();
export default authService;
