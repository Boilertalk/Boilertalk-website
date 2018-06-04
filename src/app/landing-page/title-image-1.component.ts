import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-title-image-1',
    template: `
        <img
        [defaultImage]="defaultImage"
        [lazyLoad]="images"
        [offset]="offset"
        [useSrcset]="true">
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TitleImage1Component {
    defaultImage = 'assets/images/title2.webp';
    images = `assets/images/title2.webp 1x,
     assets/images/title2.webp 2x`;
    offset = 100;
}
