const { env } = process;

export const BACKEND_URL =
  env.NODE_ENV === "production" && env.BACKEND_URL
    ? env.BACKEND_URL
    : "http://localhost:8080";
