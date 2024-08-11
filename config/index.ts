import localConfig from "./local.json";
import developmentConfig from "./development.json";
import productionConfig from "./production.json";
import commonConfig from "./common.json";

interface EnvironmentConfig {
  ecotrackServiceUrl: string;
}

interface CommonConfig {}

let environmentConfig: EnvironmentConfig = productionConfig;

let config: EnvironmentConfig & CommonConfig = {
  ...commonConfig,
  ...environmentConfig,
};

export default config;
