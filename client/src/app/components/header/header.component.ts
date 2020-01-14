import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router,
    private authService: AuthService) { }

  ngOnInit() {
  }

  logout() {
    localStorage.clear();
    this.authService.isLogged.next(false)
    this.router.navigate(['/'])
  }

}
