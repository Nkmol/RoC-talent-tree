import { Component, Input, OnInit } from '@angular/core';
import { TalentModel } from '@src/talent-list/talent/talent.model';
import { TalentsService } from './talents.service';

@Component({
  selector: 'app-talent',
  templateUrl: './talent.component.html',
  styleUrls: ['./talent.component.scss'],
})
export class TalentComponent implements OnInit {
  // Data model
  @Input() talent: TalentModel;

  dependencies: Array<TalentModel> = [];
  dependencyNames: Array<string> = [];

  constructor(private talentsService: TalentsService) {}

  ngOnInit() {
    // Transform the index of the linked talent to an actual talent model
    this.talent.dependencies.forEach((dependency, i) => {
      const talent = this.talentsService.talents.value.get(dependency);
      if (talent) {
        this.dependencies[i] = talent;
      }
    });
  }

  upgrade() {
    if (!this.canUpgrade()) {
      return;
    }

    this.talent.level += 1;
  }

  canUpgrade(): boolean {
    const newValue = this.talent.level + 1;
    return newValue <= this.talent.totalLevel && this.resolvedDependencies();
  }

  resolvedDependencies(): boolean {
    const result = this.dependencies.filter((dep) => dep.level !== dep.totalLevel).length === 0;

    // When its dependencies have been reset, also reset the parent level
    if (!result) {
      this.reset();
    }
    return result;
  }

  reset() {
    this.talent.level = 0;
  }
}
