import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CoreModule} from '@core/core.module';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';


@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, CoreModule, AppRoutingModule, BrowserAnimationsModule],
	bootstrap: [AppComponent]
})
export class AppModule {
}
