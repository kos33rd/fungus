import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FungusAppComponent }   from './app.component';
import {MaterialModule} from "@angular/material";
import {DemoPageComponent, DialogContent} from "./pages/demo/demo.component";
@NgModule({
    imports: [
        BrowserModule,
        MaterialModule.forRoot(),
    ],
    declarations: [FungusAppComponent, DialogContent, DemoPageComponent],
    entryComponents: [DialogContent],
    bootstrap: [FungusAppComponent],
})
export class AppModule { }
