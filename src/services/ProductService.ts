import config from "../../config";
import fetcher from "../utils/fetcher";

const baseUrl = `${config.ecotrackServiceUrl}/product`;

export class ProductService {
  static GET_PRODUCT_ANALYSIS = `${baseUrl}/analysis`;
  static GET_PRODUCT_ANALYSIS_V2 = `${baseUrl}/analysis/v2`;

  static async getProductAnalysis(payload: { imageSrc: string }) {
    return await fetcher({
      url: ProductService.GET_PRODUCT_ANALYSIS,
      params: payload,
    });
  }

  static async getProductAnalysisV2(payload: { imageSrc: string }) {
    return await fetcher({
      url: ProductService.GET_PRODUCT_ANALYSIS_V2,
      params: payload,
    });
  }
}
