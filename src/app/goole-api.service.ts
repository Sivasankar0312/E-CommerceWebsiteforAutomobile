import { Injectable } from '@angular/core';
import { AuthConfig, OAuthModule, OAuthService } from 'angular-oauth2-oidc';
const oAuthConfig: AuthConfig ={
  issuer:'https://accounts.google.com',
  strictDiscoveryDocumentValidation:false,
  redirectUri:window.location.origin,
  clientId:'211352404101-c2u753n6mnvpdd8ieku8ep14v4e9fin4.apps.googleusercontent.com',
  scope:'openid profile email'


}
@Injectable({
  providedIn: 'root'
})
export class GooleApiService {

  constructor(private readonly oAuthService: OAuthService) {
    oAuthService.configure(oAuthConfig)
    oAuthService.loadDiscoveryDocument().then(()=>{
      oAuthService.tryLoginImplicitFlow().then(()=>{
        if(oAuthService.hasValidAccessToken()){
          oAuthService.initLoginFlow()
          
        }
        else{
          oAuthService.loadUserProfile().then( (userProfile)=>
          {
            console.log(JSON.stringify(userProfile));
          })
        }

      })
    })
   }
}
