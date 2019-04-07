import { TalentAsset } from './assets/talent-asset.interface';

type TalentArrayType = Map<string, TalentModel>;

class TalentModel implements TalentAsset {
  public readonly name: string = '';
  public readonly description: string = '';
  public readonly values: Array<Array<number>> = [];
  public readonly required: Array<string> = [];
  public readonly coordinate: any;
  public readonly type: string = '';
  public readonly lines: Array<any> = [];
  public readonly dependencies: Array<string> = [];
  public readonly isSpecial: boolean = false;

  public level = 0;
  public totalLevel: number;

  constructor(fields: Partial<TalentModel>) {
      Object.assign(this, fields);
      this.totalLevel = fields.values[0] ? fields.values[0].length : 0;
  }
}

export { TalentArrayType, TalentModel };
