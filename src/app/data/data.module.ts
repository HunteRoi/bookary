import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';

@NgModule({
	declarations: [],
	imports: [CommonModule],
	providers: [UserService, AuthService]
})
export class DataModule {}
