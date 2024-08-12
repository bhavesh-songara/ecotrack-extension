import { AnalyzedPanel } from "./components/AnalyzedPanel";
import { AnalyzingPanel } from "./components/AnalyzingPanel";
import { DefaultPanel } from "./components/DefaultPanel";
import { DotLoader } from "./components/DotLoader";
import { Header } from "./components/Header";
import useApp, { AppStatusEnum } from "./hooks/useApp";

import { AnalyzedPanelV2 } from "./components/AnalyzedPanelV2";

function App() {
  const { status, imageData, analyzedData } = useApp();

  return (
    <div>
      {status === AppStatusEnum.Default && <DefaultPanel />}

      {status === AppStatusEnum.Analyzing && (
        <AnalyzingPanel srcUrl={imageData?.srcUrl} />
      )}

      {status === AppStatusEnum.Analyzed && (
        <AnalyzedPanelV2 data={analyzedData} imageSrc={imageData?.srcUrl} />
      )}
    </div>
  );
}

export default App;
