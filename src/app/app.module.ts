import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AudioComponent } from './audio/audio.component';
import { PeripheralsComponent } from './peripherals/peripherals.component';
import { LedTvComponent } from './led-tv/led-tv.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { SmartHomeComponent } from './smart-home/smart-home.component';
import { ProjectorsComponent } from './projectors/projectors.component';
import { SurviellenceComponent } from './surviellence/surviellence.component';
import { ShopComponent } from './shop/shop.component';
import { SupportComponent } from './support/support.component';

@NgModule({
  declarations: [
    AppComponent,
    AudioComponent,
    PeripheralsComponent,
    LedTvComponent,
    AccessoriesComponent,
    SmartHomeComponent,
    ProjectorsComponent,
    SurviellenceComponent,
    ShopComponent,
    SupportComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
