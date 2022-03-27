import { EventData, Page, ImageSource, Image } from '@nativescript/core';
import { DemoSharedNativescriptQrGenerator } from '@demo/shared';
import { QrGenerator } from 'nativescript-qr-generator';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptQrGenerator {

  onImageLoadedBasic(args) {
    const image = args.object as Image;
    const result = new QrGenerator().generate(`Hello World`, {
      logo: {
        path: "~/assets/fb.png",
        ratio: {
          w: 50, h: 50
        }
      }
    });
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
