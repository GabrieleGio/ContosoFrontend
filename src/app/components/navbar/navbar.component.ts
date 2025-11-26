import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { DialogModule } from 'primeng/dialog';
import { RouterModule } from '@angular/router';
//import { LoginComponent } from "../login/login.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MenubarModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    AvatarModule,
    BadgeModule,
    DialogModule,
    RouterModule
    //LoginComponent,
],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
  
})
export class NavbarComponent {
  items: any[] = [];
  //username: string | null = localStorage.getItem('username') ?? '';
  username: string | null = null;
  
  email: string = '';
  password: string = '';

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('ruolo');
    //this.username = null;
  }
}
