import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Mastra storage adapters wrap native (.node) addons. Let Next require them
  // at runtime instead of bundling them, so the bundler never tries to resolve
  // platform-specific bindings (e.g. @duckdb/node-bindings-win32-x64) it can't find.
  serverExternalPackages: ["@mastra/duckdb", "@mastra/libsql"],
};

export default nextConfig;
