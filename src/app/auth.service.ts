import { Injectable } from '@angular/core';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private oauthService: OAuthService) {}

  authConfig: AuthConfig = {
    responseType: 'code',
    scope: 'openid profile email',
    oidc: true,
    requestAccessToken: true,
    showDebugInformation: true,
    strictDiscoveryDocumentValidation: false,
    useSilentRefresh: true,
    
    issuer: 'https://4678272.app.netsuite.com', // NetSuite OIDC issuer URL
    //tokenEndpoint: 'https://4678272.suitetalk.api.netsuite.com/services/rest/auth/oauth2/v1/token', // Token endpoint from NetSuite
    //userinfoEndpoint: 'https://4678272.suitetalk.api.netsuite.com/services/rest/auth/oauth2/v1/userinfo', // Userinfo endpoint from NetSuite
    clientId: '7a0a3c441c3cf1ff3898e6b92de44e00ae386952880cb21c0249d93e6b718540',
    redirectUri: 'https://pevgeniev.github.io/netsuite/callback', // Callback URL after authentication
  };

  initAuth() {
    this.oauthService.configure(this.authConfig);
    this.oauthService.setupAutomaticSilentRefresh();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

  login() {
    this.initAuth();
    this.oauthService.initCodeFlow();
  }

  logout() {
    this.oauthService.logOut();
  }

  isLoggedIn(): Observable<boolean> {
    return of(this.oauthService.hasValidIdToken());
  }

  getAccessToken(): string {
    const accessToken = this.oauthService.getAccessToken();
    return accessToken;
  }

  public get name() {
    let claims = this.oauthService.getIdentityClaims();
    if (!claims) return null;
    return claims['name'];
  }
}
