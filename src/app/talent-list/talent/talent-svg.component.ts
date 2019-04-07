import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-talent-svg',
    templateUrl: 'talent-svg.component.html'
})
export class TalentSVGComponent {
    public imagePath = '';

    @Input()
    set image(image: string) {
        this.imagePath = `talent-list/talent/assets/images/${image.toLocaleLowerCase()}.png`;
    }

    constructor() { }
}
