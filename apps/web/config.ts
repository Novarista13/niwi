const config = {
  appName: "Niwi Starter",
  domainName: "niwi.github.io",
  defaultUserImage: "/images/auth/profile.png",
  authRoute: {
    loginUrl: "/auth/login",
    callback: "/dashboard",
  },
  minorFeatures: ["auth", "blog"],
  seeders: ["user", "blog"],
};

export default config;

export type ConfigType = typeof config;
