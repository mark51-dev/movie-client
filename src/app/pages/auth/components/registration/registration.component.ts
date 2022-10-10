import { StorageAbstractClass } from 'src/app/shared/utils/StorageService.abstraction';
import { ToastService } from './../../../../shared/components/toast/toast.service';
import { StorageService } from '../../../../shared/services/storage.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, of, throwError } from 'rxjs';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  form: FormGroup = {} as FormGroup;
  constructor(
    private fb: FormBuilder,
    private readonly router: Router,
    private readonly authService: AuthService,
    private readonly storageService: StorageAbstractClass,
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

  required(controlName: string) {
    return (
      this.form.get(controlName)?.hasError('required') &&
      this.form.get(controlName)?.touched
    );
  }

  checkPassword(controlName: string) {
    return this.form.get(controlName)?.hasError('pattern');
  }

  submit() {
    if (this.form.valid) {
      this.authService
        .registration(this.form.getRawValue())
        .pipe(
          catchError((err) => {
            this.toastService.showToast(
              'Registration error! Account already exists!',
              'error'
            );
            return throwError(() => `Registration error ${err}`);
          })
        )
        .subscribe((res) => {
          this.toastService.showToast('Your account created!');
          this.storageService.setValue('accessToken', res.accessToken);
          this.router.navigate(['/movies']);
        });
    }
  }
}
