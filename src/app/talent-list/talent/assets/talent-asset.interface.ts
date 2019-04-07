interface TalentAsset {
  name: string;
  description: string;
  values: Array<Array<number>>;
}

interface TalentAssetCoordinates {
  coordinates: { left: string; top: string };
}
interface Line {
  left: string;
  top: string;
  width: string;
  transform: string;
  dependencies?: string;
}
type TalentAssetWithCSS = TalentAsset & TalentAssetCoordinates & { lines: Array<Line> };

export { TalentAssetWithCSS, TalentAsset };
