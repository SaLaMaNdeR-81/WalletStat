import { NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutContent } from './Layout/Content/Content.Layout';
import { LayoutFooter } from './Layout/Footer/Footer.Layout';
import { LayoutHeader } from './Layout/Header/Header.Layout';
import { PageHome } from './Page/Home/Home.Page';
import { PageList } from './Page/List/List.Page';

@NgModule({
  declarations: [
    AppComponent,
    LayoutHeader,
    LayoutContent,
    LayoutFooter,
    PageHome,
    PageList,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
