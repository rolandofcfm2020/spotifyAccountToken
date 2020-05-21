import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  
  constructor() { }

  getSpotifyToken (clientId: string, clientSecret: string) {
    
    var clientAuthorization = clientId + ':' + clientSecret
    //this line convert credentials to base 64 for authorize
    var clientHash = btoa(clientAuthorization);
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Basic "+ clientHash);
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    
    var urlencoded = new URLSearchParams();
    urlencoded.append("grant_type", "client_credentials");
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
    };
    
    return fetch("https://accounts.spotify.com/api/token", requestOptions);


  }
}
