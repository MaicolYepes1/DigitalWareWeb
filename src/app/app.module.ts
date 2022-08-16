import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IndexModule } from 'src/app/index/index.module';
import { SharedModule } from 'src/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    IndexModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
