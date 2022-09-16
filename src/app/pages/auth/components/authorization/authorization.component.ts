import { ToastService } from './../../../../shared/components/toast/toast.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { StorageService } from 'src/app/shared/services/storage.service';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss'],
})
export class AuthorizationComponent implements OnInit {
  form: FormGroup = {} as FormGroup;
  constructor(
    private fb: FormBuilder,
    private readonly router: Router,
    private readonly authService: AuthService,
    private readonly storageService: StorageService,
    private readonly toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.form = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm
          ),
        ],
      ],
    });
  }

  submit() {
    this.authService
      .login(this.form.getRawValue())
      .pipe(catchError((err) => throwError(() => `Authorization error ${err}`)))
      .subscribe((res) => {
        this.authService.loggedIn();
        this.toastService.showToast('Hello');
        this.toastService.showToast(
          'Hi, you logged in. Select your movie and watch for free!'
        );
        this.storageService.setValue('accessToken', res.accessToken);
        this.router.navigate(['/movies']);
      });
  }
}
