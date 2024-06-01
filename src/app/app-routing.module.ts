import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHome } from './Page/Home/Home.Page';
import { PageList } from './Page/List/List.Page';

const routes: Routes = [
  { path: '', component: PageHome },
  { path: 'home', component: PageHome },
  { path: 'list', component: PageList },
  { path: 'Canvas', component: PageHome },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
