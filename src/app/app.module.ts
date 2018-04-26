import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatTableModule} from '@angular/material/table';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { ButtonsCheckboxComponent } from './buttons-checkbox/buttons-checkbox.component';
import { HttpClientModule } from '@angular/common/http';
import { ConfigService } from './config/config.service';
import { CryptoComponent } from './crypto/crypto.component';
import { MatSortModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';

const config: SocketIoConfig = { url: 'https://coincap.io', options: {} };


@NgModule({
  declarations: [
    AppComponent,
    CryptoComponent
    // ButtonsCheckboxComponent
  ],
  // imports: [BrowserModule, FormsModule, ReactiveFormsModule, NgbModule.forRoot()],
  imports: [
    BrowserModule,
    MatTableModule,
    MatSortModule,
    BrowserAnimationsModule,
    SocketIoModule.forRoot(config),
    HttpClientModule // Импортируем модуль
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
