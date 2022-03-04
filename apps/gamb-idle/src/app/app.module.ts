import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
// eslint-disable-next-line import/no-unresolved
import { PhaserSingletonService } from '@spectacle-development/gamb-idle/phaser/singleton';
import { ServicesModule } from '@spectacle-development/services';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './home/home.page';
import { ShopPageComponent } from './shop/shop.component';

@NgModule({
    declarations: [AppComponent, ShopPageComponent, HomePageComponent],
    entryComponents: [],
    imports: [BrowserModule, IonicModule.forRoot(), ServicesModule, PhaserSingletonService.forRoot(), AppRoutingModule],
    providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
    bootstrap: [AppComponent],
})
export class AppModule {}
