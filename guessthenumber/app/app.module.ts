import { NgModule }  from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {GuessTheNumberComponent} from './guess-the-number.component';

@NgModule ({
    imports: [BrowserModule], 
    declarations: [GuessTheNumberComponent],
    bootstrap: [GuessTheNumberComponent]
})
export class AppModule{}

// An angular component needs to be contained within an ANgular Module. This is that module. 
