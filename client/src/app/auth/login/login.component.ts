import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { SnakBarService } from '../../services/snackbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private snakBarService: SnakBarService
  ) {
    if (this.authService.isLogged.value) {
      this.router.navigate(['/dashboard'])
    }
  }

  ngOnInit() {
    this.loginForm = this._formBuilder.group({
      strategy: 'local',
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  submitLoginForm() {
    this.authService.login(this.loginForm.value).subscribe(res => {
      if (res.accessToken) {
        localStorage.setItem('auth-token', res.accessToken)
        localStorage.setItem('user-details', JSON.stringify(res.user))
        this.router.navigate(['/dashboard']);
      }
    }, err => {
      this.snakBarService.error(err.message);
    });
  }

  goToSignUp() {
    this.router.navigate(['/register']);
  }

}
