import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessoriesComponent } from './accessories/accessories.component';
import { AudioComponent } from './audio/audio.component';
import { LedTvComponent } from './led-tv/led-tv.component';
import { PeripheralsComponent } from './peripherals/peripherals.component';
import { ProjectorsComponent } from './projectors/projectors.component';
import { ShopComponent } from './shop/shop.component';
import { SmartHomeComponent } from './smart-home/smart-home.component';
import { SupportComponent } from './support/support.component';
import { SurviellenceComponent } from './surviellence/surviellence.component';

const routes: Routes = [

  {
    path: '', component:AudioComponent, pathMatch: "full",
  },

  {
    path: 'peripherals',component:PeripheralsComponent,
  },

{
  path: 'accessories', component:AccessoriesComponent,
},

{
  path: 'shop', component:ShopComponent,
},

{
  path: 'support', component:SupportComponent,
},

{
  path: 'projectors', component:ProjectorsComponent,
},

{
  path: 'led-tv', component:LedTvComponent,
},

{
  path: 'smart-home', component:SmartHomeComponent,
},

{
  path:'surveillance', component:SurviellenceComponent,
}

];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
