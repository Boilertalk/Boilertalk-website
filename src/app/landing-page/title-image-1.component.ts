import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-title-image-1',
    template: `
        <picture>
            <source [attr.defaultImage]="defaultImage" [attr.lazyLoad]="imageswebp" type="image/webp">
            <source [attr.defaultImage]="defaultImage" [attr.lazyLoad]="imagesjpeg" type="image/jpeg">
            <img [defaultImage]="defaultImage"
                 [lazyLoad]="imagejpg"
                 [offset]="offset">
        </picture>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TitleImage1Component {
    defaultImage = 'assets/images/title2lowres.webp';
    imagejpg = 'assets/images/title2.jpeg';
    imageswebp = `assets/images/title21x.webp 1076w,
     assets/images/title2.webp 1980w`;
    imagesjpeg = `assets/images/title21x.jpeg 1076w,
      assets/images/title2.jpeg 1980w`;
    offset = 100;
}
