import { BACKEND_URL } from "@/constants";

class HealthCheckService {
  async health() {
    try {
      const res = await fetch(BACKEND_URL, {
        method: "GET",
        cache: "no-store",
      });
      return await res.text();
    } catch (error) {
      return error;
    }
  }
}

const healthCheckService = new HealthCheckService();
export default healthCheckService;
