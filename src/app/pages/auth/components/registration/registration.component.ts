import { AuthService } from './../../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { of, catchError } from 'rxjs';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  form: FormGroup = {} as FormGroup;
  constructor(
    private fb: FormBuilder,
    private readonly http: HttpClient,
    private readonly router: Router,
    private readonly authService: AuthService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.form = this.fb.group(
      {
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
      },
      {
        updateOn: 'blur',
      }
    );
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

  submit(e: Event) {
    if (this.form.valid) {
      this.http
        .post(
          `http://localhost:3000/api/auth/registration`,
          this.form.getRawValue(),
          {
            withCredentials: true,
          }
        )
        .pipe(
          catchError((err) => {
            console.log(err);
            return of([]);
          })
        )
        .subscribe((res) => {
          console.log(res);
          // @ts-ignore
          this.authService.setValue('accessToken', res.accessToken);
          this.router.navigate(['/movies']);
        });
    }
  }
}
