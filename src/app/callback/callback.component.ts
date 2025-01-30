import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-callback',
  imports: [],
  templateUrl: './callback.component.html',
  styleUrl: './callback.component.scss'
})
export class CallbackComponent  implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router,
    private readonly authService: AuthService) {}

  public ngOnInit():void {
      const token = this.route.snapshot.queryParamMap.get('token');
      // Handle token
      // ...
      console.log(token);
      console.log('is loggd in: ', this.authService.isLoggedIn());
      console.log('access token: ', this.authService.getAccessToken());
      this.authService.name.then((n: any) => {
        console.log('name: ', n);
      })
  }
}