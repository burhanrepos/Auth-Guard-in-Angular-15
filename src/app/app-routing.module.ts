import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClilistComponent } from './components/clilist/clilist.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TermComponent } from './components/term/term.component';
import { UserlistComponent } from './components/userlist/userlist.component';
import { ViewNameComponent } from './components/view-name/view-name.component';
import { ViewComponent } from './components/view/view.component';
import { AuthGuard } from './guard/auth.guard';
import { ChildGuard } from './guard/child.guard';
import { LazyauthGuard } from './guard/lazyauth.guard';
import { ResolveGuard } from './guard/resolve.guard';
import { TermGuard } from './guard/term.guard';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path: "view",
    component: ViewComponent,
    children: [
      {
        path: "",
        canActivateChild:[ChildGuard],
        children: [
          {
            path: "user",
            component: UserlistComponent
          },
          {
            path: "client",
            component: ClilistComponent
          }
        ]
      }
    ]
  },
  {
    path: "getName",
    canActivate:[AuthGuard],
    resolve:{
      data:ResolveGuard
    },
    component: ViewNameComponent
  },
  {
    path: "profile",
    canActivate:[AuthGuard],
    component: ProfileComponent,
  },
  {
    path: "term",
    canActivate:[AuthGuard],
    canDeactivate:[TermGuard],
    component: TermComponent,
  },
  {
    path: "about",
    canActivate:[AuthGuard],
    canLoad:[LazyauthGuard],
    loadChildren: () => import("./components/about/about.module").then(m => m.AboutModule)
  },
  {
    path: "contact",
    loadChildren: () => import("./components/contact/contact.module").then(m => m.ContactModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
