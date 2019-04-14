import { Injectable } from '@angular/core';
import { TalentArrayType, TalentModel } from '@src/talent-list/talent/talent.model';

import { talentAttackAssetWithCSS } from './assets/talent-attack';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TalentsService {
  public talents = new BehaviorSubject<TalentArrayType>(new Map());

  constructor() {}

  public loadTalents(): void {
    const result: TalentArrayType = new Map();
    talentAttackAssetWithCSS.forEach((entity) => {
      const talent = new TalentModel(entity);
      result.set(talent.name, talent);
    });
    this.talents.next(result);
  }
}
