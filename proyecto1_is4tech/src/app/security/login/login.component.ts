import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  user: any;
  loggedIn: any;
  socialAuthService: any;

  constructor(private authService: SocialAuthService, private router: Router) { }

  ngOnInit():void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);

      if (this.loggedIn) {
        this.router.navigate(['/dogs']);
      } else {
        this.router.navigate(['/login']);
      }
    });
  }

}
