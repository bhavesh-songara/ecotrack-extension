import { useEffect, useMemo, useState } from "react";
import { ProductService } from "../services/ProductService";

export enum AppStatusEnum {
  Default = "default",
  Analyzing = "analyzing",
  Analyzed = "analyzed",
}

const useApp = () => {
  const [analyzedData, setAnalyzedData] = useState<any>();
  const [status, setStatus] = useState<AppStatusEnum>(AppStatusEnum.Default);
  const [imageData, setImageData] = useState<any>(null);

  const handleUploadImage = async (imageData: any) => {
    const { data, error } = await ProductService.getProductAnalysisV2({
      imageSrc: imageData.srcUrl,
    });
    if (error) {
      return;
    }
    setAnalyzedData(data);
    setStatus(AppStatusEnum.Analyzed);
  };

  const handleAddMessageListener = () => {
    chrome.runtime.onMessage.addListener((message) => {
      if (message.action === "upload_image") {
        setImageData(message.info);
        setStatus(AppStatusEnum.Analyzing);
        handleUploadImage(message.info);
      }
    });
  };

  useEffect(() => {
    handleAddMessageListener();

    return () => {
      chrome.runtime.onMessage.removeListener(() => {});
    };
  }, []);

  return {
    status,
    imageData,
    analyzedData,
  };
};

export default useApp;
