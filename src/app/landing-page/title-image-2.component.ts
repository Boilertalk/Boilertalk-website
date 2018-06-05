import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-title-image-2',
    template: `
        <picture>
            <source [attr.defaultImage]="defaultImage" [attr.lazyLoad]="imageswebp" type="image/webp">
            <source [attr.defaultImage]="defaultImage" [attr.lazyLoad]="imagesjpg" type="image/jpeg">
            <img [defaultImage]="defaultImage"
                 [lazyLoad]="imagejpg"
                 [offset]="offset">
        </picture>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TitleImage2Component {
    defaultImage = 'assets/images/title3lowres.jpg';
    imagejpg = 'assets/images/title3.jpg'
    imageswebp = `assets/images/title31x.jpg 972w,
     assets/images/title3.webp 1980w`;
    imagesjpg = `assets/images/title31x.jpg 972w,
     assets/images/title3.jpg 1980w`;
    offset = 100;
}
