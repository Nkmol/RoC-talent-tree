import { TalentAsset } from './assets/talent-asset.interface';

export type TalentArrayType = Map<string, TalentModel>;

export class TalentModel implements TalentAsset {
    constructor(
        public readonly name: string = '', 
        public readonly description: string = '',
        public readonly values: Array<Array<number>> = [],
        public readonly required: Array<string> = [],
        public readonly coordinate: any = {},
        public readonly type: string = 'Buff',
        public level: number = 0,
        public totalLevel: number = 0,
        public readonly lines: Array<any> = [],
        public readonly dependencies: Array<string> = [],
        public readonly isSpecial: boolean = false
    ) {
    }
}

