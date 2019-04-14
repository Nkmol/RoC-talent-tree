import { Component, QueryList, ViewChildren, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { NgxSmartModalService } from 'ngx-smart-modal';

import { TalentComponent } from '@src/talent-list/talent/talent.component';
import { TalentsService } from '@src/talent-list/talent/talents.service';
import { TalentArrayType, TalentModel } from '@src/talent-list/talent/talent.model';
import { talentListBuilder } from '@src/talent-list/talent-list.builder';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-talent-list',
  templateUrl: './talent-list.component.html',
  styleUrls: ['./talent-list.component.scss'],
})
export class TalentListComponent implements OnInit {
  @ViewChildren(TalentComponent) contentChildren!: QueryList<TalentComponent>;
  public talents: BehaviorSubject<TalentArrayType>;

  get shareableLink(): string {
    return window.location.origin + this.location.prepareExternalUrl(`?q=${talentListBuilder.toLevelString(this.talents.value)}`);
  }

  constructor(
    private talentsService: TalentsService,
    public ngxSmartModalService: NgxSmartModalService,
    private location: Location,
    private route: ActivatedRoute
  ) { }
  
  ngOnInit(): void {
    this.talents = this.talentsService.talents;
    this.talentsService.loadTalents();
    this.loadQueryParameters();
  }

  private loadQueryParameters(): void {
    // Check if QueryList needs to generate levels
    const query = this.route.snapshot.queryParamMap.get('q');
    if (query) {
      const talentWithLevels = talentListBuilder.fromLevelString(query, this.talents.value);
      this.talentsService.talents.next(talentWithLevels);
    }
  }

  reset() {
    this.contentChildren.forEach((child) => child.reset());
  }

  get totalPoints(): number {
    let result = 0;
    if (this.contentChildren) {
      result = this.contentChildren.reduce((acc, child) => acc + child.talent.level, 0);
    }

    return result;
  }
}
