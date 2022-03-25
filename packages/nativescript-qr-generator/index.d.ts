import { QROptions } from './common';

export declare class QrGenerator {
  // define your typings manually
  // or..
  // take the ios or android .d.ts files and copy/paste them here
  generate (value: string, options?: QROptions): UIImage;
}
