import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { UiTestComponent } from "./components/ui-test/ui-test.component";
import { FinancialToolsComponent } from "./components/products/financial-tools/financial-tools.component";
import { RankingComponent } from "./components/products/ranking/ranking.component";
import { MarketToolsComponent } from "./components/products/market-tools/market-tools.component";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full",
  },
  {
    path: "app-component",
    component: AppComponent,
  },
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: 'ui-test',
    component: UiTestComponent
  },
  {
    path: 'financial-tools',
    component: FinancialToolsComponent
  },
  {
    path: 'ranking-tools',
    component: RankingComponent
  },
  {
    path:'market-tools',
    component: MarketToolsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
