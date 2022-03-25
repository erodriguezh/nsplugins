import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptQrGenerator } from '@demo/shared';
import { } from '@erodr/nativescript-qr-generator';

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

}