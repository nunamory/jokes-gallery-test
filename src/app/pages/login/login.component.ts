import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators} from '@angular/forms';
import { users } from '../../../users/users';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    constructor(private router: Router) {}

    username = new FormControl('', [Validators.required, Validators.email]);
    password = new FormControl('', [Validators.required]);

    login() {
        if (!this.username.value || !this.password.value) {
            alert('Must provide username and password!');
            console.error('Must provide username and password!');
            return;
        }
        if (!this.checkAuth()) {
            this.username.setValue('');
            this.password.setValue('');
            alert('Check auth failed!');
            console.error('Check auth failed!');
            return;
        }
    }

    checkAuth() {
        for (let u of users) {
            if (u.usernsme === this.username.value) {
                if (u.password !== this.password.value) {
                    console.error('Wrong password!')
                    this.password.setValue('');
                    return false;
                } else {
                    this.router.navigate(['/table'])
                    console.log('Logged in!');
                    return true;
                }
            }
        }
        return false;
    }
}
