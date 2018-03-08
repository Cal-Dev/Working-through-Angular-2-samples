import { platformBrowserDynamic }    
from '@angular/platform-browser-dynamic'; 
import { AppModule } from './app.module'; 
const platform = platformBrowserDynamic(); 
platform.bootstrapModule(AppModule); 

// top most import is for browser based applications 
// Note there may be a different one for Mobile apps/ React ???
//  then we import the app module previously defined 
//  then bootstrap our app.

