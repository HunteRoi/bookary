import { UserResolver } from './resolvers/user.resolver';
import { UserProfilePageComponent } from './pages/user-profile-page/user-profile-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { BookResolver } from './resolvers/book.resolver';
import { BookDetailsPageComponent } from './pages/book-details-page/book-details-page.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoanDetailsResolver } from './resolvers/loan-details.resolver';

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
    runGuardsAndResolvers: 'always',
  },
  {
    path: 'details',
    component: BookDetailsPageComponent,
    data: { title: 'Scan for Book Details' },
    canActivate: [AuthGuard],
    runGuardsAndResolvers: 'always',
  },
  {
    path: 'details/:id',
    component: BookDetailsPageComponent,
    data: { title: 'Book Details' },
    canActivate: [AuthGuard],
    runGuardsAndResolvers: 'always',
    resolve: {
      book: BookResolver,
      loanDetails: LoanDetailsResolver
    }
  },
  {
    path: 'users/:id',
    component: UserProfilePageComponent,
    data: { title: 'User Profile' },
    canActivate: [AuthGuard],
    runGuardsAndResolvers: 'always',
    resolve: {
      user: UserResolver
    }
  },
  {
    path: '**',
    component: NotFoundPageComponent,
    data: { title: 'Not Found' },
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
