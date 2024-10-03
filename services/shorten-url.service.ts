import { BACKEND_URL } from "@/constants";

type ShortenUrlBody = {
  source: string;
  customPath?: string;
  expireAfter?: number;
};

class ShortenUrlService {
  async shortenUrl({ source, customPath, expireAfter }: ShortenUrlBody) {
    try {
      const res = await fetch(`${BACKEND_URL}/shorten-url`, {
        method: "POST",
        body: JSON.stringify({ source, customPath, expireAfter }),
      });

      return res;
    } catch (error) {
      return error;
    }
  }
}

const shortenUrlService = new ShortenUrlService();
export default shortenUrlService;
