import { BACKEND_URL } from "@/constants";

class HealthCheckService {
  async health() {
    try {
      const res = await fetch(BACKEND_URL, {
        method: "GET",
        cache: "no-store",
      });

      if (res.ok) {
        return await res.text();
      }

      return "Not Alive";
    } catch (error) {
      return "Not Alive";
    }
  }
}

const healthCheckService = new HealthCheckService();
export default healthCheckService;
