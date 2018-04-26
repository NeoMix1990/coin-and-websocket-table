import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';


import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CryptoComponent } from './app/crypto/crypto.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule
  ],
  declarations: [CryptoComponent],
  bootstrap: [CryptoComponent],
  providers: []
})
export class DemoMaterialModule {}


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
