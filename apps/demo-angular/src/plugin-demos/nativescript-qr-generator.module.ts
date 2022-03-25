import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptQrGeneratorComponent } from './nativescript-qr-generator.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptQrGeneratorComponent }])],
  declarations: [NativescriptQrGeneratorComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class NativescriptQrGeneratorModule {}
