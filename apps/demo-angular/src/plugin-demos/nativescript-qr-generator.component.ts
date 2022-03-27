import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptQrGenerator } from '@demo/shared';
import { Image, ImageSource } from "@nativescript/core";
import { QrGenerator } from '@erodr/nativescript-qr-generator';

@Component({
	selector: 'demo-nativescript-qr-generator',
	templateUrl: 'nativescript-qr-generator.component.html',
})
export class NativescriptQrGeneratorComponent {

  demoShared: DemoSharedNativescriptQrGenerator;

	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedNativescriptQrGenerator();
  }

  onImageLoadedBasic(args) {
    const image = args.object as Image;
    const result = new QrGenerator().generate('Hello World');
    image.imageSource = new ImageSource(result);
  }

  onImageLoadedColors(args) {
      const image = args.object as Image;
      const result = new QrGenerator().generate('Hello World with colors', { color: '#4183d7', backgroundColor: '#67809f' });
      image.imageSource = new ImageSource(result);
  }

  onImageLoadedColorsSize(args) {
      const image = args.object as Image;
      const result = new QrGenerator().generate('Hello World with colors and custom size', { size: { width: 100, height: 100 }, color: '#fbd90e', backgroundColor: '#0d0c0c' });
      image.imageSource = new ImageSource(result);
  }

}
