import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { YepDemoAppSharedModule } from 'app/shared/shared.module';
import { YepDemoAppCoreModule } from 'app/core/core.module';
import { YepDemoAppAppRoutingModule } from './app-routing.module';
import { YepDemoAppHomeModule } from './home/home.module';
import { YepDemoAppEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    YepDemoAppSharedModule,
    YepDemoAppCoreModule,
    YepDemoAppHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    YepDemoAppEntityModule,
    YepDemoAppAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent],
})
export class YepDemoAppAppModule {}
