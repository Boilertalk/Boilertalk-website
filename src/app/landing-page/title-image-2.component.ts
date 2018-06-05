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
    defaultImage = 'assets/images/title3lowres.jpg';
    images = `assets/images/title31x.jpg 972w,
     assets/images/title3.webp 1980w`;
    offset = 100;
}
