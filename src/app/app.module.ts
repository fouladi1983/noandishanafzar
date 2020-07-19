import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppComponent } from '@src/app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {Ng2PageScrollModule} from 'ng2-page-scroll';
import { MaterialModule } from '@src/app/material/material.module';
import { HomeComponent } from '@src/app/components/home/home.component';
import { UiTestComponent } from '@src/app/components/ui-test/ui-test.component';
import { RankingComponent } from '@src/app/components/products/ranking/ranking.component';
import { FinancialToolsComponent } from '@src/app/components/products/financial-tools/financial-tools.component';
import { MarketToolsComponent } from '@src/app/components/products/market-tools/market-tools.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UiTestComponent,
    RankingComponent,
    FinancialToolsComponent,
    MarketToolsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    Ng2PageScrollModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
