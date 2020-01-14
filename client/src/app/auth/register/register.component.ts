import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { SnakBarService } from '../../services/snackbar.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
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
    this.registerForm = this._formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  submitRegisterForm() {

    this.authService.register(this.registerForm.value).subscribe(res => {
      this.snakBarService.success('Congratulations!!!, Your account is registered successfully');
      setTimeout(() => { this.router.navigate(['/login']); }, 2000);
    }, err => {
      this.snakBarService.error(err.message);
    });
  }

  goToLogin() {
    this.router.navigate(['/']);
  }

}
