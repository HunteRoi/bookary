import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { HttpClientModule } from '@angular/common/http';
import { BarcodeScannerLivestreamModule } from 'ngx-barcode-scanner';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AuthGuard } from './guards/auth.guard';
import { AdminPageComponent } from './containers/admin-page/admin-page.component';
import { BookDetailsPageComponent } from './containers/book-details-page/book-details-page.component';
import { HomePageComponent } from './containers/home-page/home-page.component';
import { NotFoundPageComponent } from './containers/not-found-page/not-found-page.component';
import { UserProfilePageComponent } from './containers/user-profile-page/user-profile-page.component';
import { HeaderComponent } from './containers/header/header.component';
import { FooterComponent } from './containers/footer/footer.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { BookFormComponent } from './components/book-form/book-form.component';
import { CodeScannerComponent } from './components/code-scanner/code-scanner.component';
import { LoanDetailsComponent } from './components/loan-details/loan-details.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminPageComponent,
    BookDetailsPageComponent,
    HomePageComponent,
    NotFoundPageComponent,
    UserProfilePageComponent,
    HeaderComponent,
    FooterComponent,
    UserCardComponent,
    BookFormComponent,
    CodeScannerComponent,
    LoanDetailsComponent,
    BookDetailsComponent,
    UserDetailsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
    FlexLayoutModule,
    BarcodeScannerLivestreamModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,

    // Angular Material
    MatSidenavModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [
    Title,
    AuthGuard,
    {
      provide: MAT_DATE_LOCALE,
      useValue: 'fr-BE',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
