import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-title-image-2',
    template: `
        <img
        [defaultImage]="defaultImage"
        [lazyLoad]="images"
        [offset]="offset"
        [useSrcset]="true">
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TitleImage2Component {
    defaultImage = 'assets/images/title31x.jpg';
    images = `assets/images/title31x.webp 1x,
     assets/images/title3.webp 2x`;
    offset = 100;
}
