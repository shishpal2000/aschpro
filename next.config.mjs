import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    // Optional: Resolve custom paths (if needed)
    config.resolve.alias["@"] = path.resolve(__dirname, "src");

    return config;
  },
};

export default nextConfig;
