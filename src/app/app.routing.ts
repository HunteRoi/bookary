import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';
import { LoanDetailsResolver } from './data/resolvers/loan-details.resolver';
import { UserResolver } from './data/resolvers/user.resolver';
import { BookResolver } from './data/resolvers/book.resolver';
import { UserProfilePageComponent } from './containers/user-profile-page/user-profile-page.component';
import { NotFoundPageComponent } from './containers/not-found-page/not-found-page.component';
import { BookDetailsPageComponent } from './containers/book-details-page/book-details-page.component';
import { AdminPageComponent } from './containers/admin-page/admin-page.component';
import { HomePageComponent } from './containers/home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    data: { title: 'Home' },
    pathMatch: 'full',
  },
  {
    path: 'admin',
    component: AdminPageComponent,
    data: { title: 'Administration' },
    canActivate: [AuthGuard],
  },
  {
    path: 'books',
    component: BookDetailsPageComponent,
    data: { title: 'Scan for Book Details' },
    canActivate: [AuthGuard],
  },
  {
    path: 'books/:id',
    component: BookDetailsPageComponent,
    data: { title: 'Book Details' },
    canActivate: [AuthGuard],
    resolve: {
      book: BookResolver,
      loanDetails: LoanDetailsResolver,
    }
  },
  {
    path: 'users/:id',
    component: UserProfilePageComponent,
    data: { title: 'User Profile' },
    canActivate: [AuthGuard],
    resolve: {
      user: UserResolver,
    },
  },
  {
    path: '**',
    component: NotFoundPageComponent,
    data: { title: 'Not Found' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload', enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
