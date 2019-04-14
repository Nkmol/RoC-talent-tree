interface TalentAsset {
  name: string;
  description: string;
  values: Array<Array<number>>;
}

interface TalentAssetCoordinates {
  coordinates: { left: string; top: string };
}

/**
 * Relative to the talent-image
 */
interface Line {
  left: string; // Top left
  top: string; // Top left middle of line
  width: string; // TODO: change naming to "length"
  transform: string;
  dependencies?: string;
}
type TalentAssetWithCSS = TalentAsset & TalentAssetCoordinates & { lines: Array<Line> };

export { TalentAssetWithCSS, TalentAsset };
