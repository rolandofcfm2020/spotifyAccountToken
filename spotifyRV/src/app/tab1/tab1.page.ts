import { Component } from '@angular/core';
import {AccountService } from '../account.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public accountService: AccountService) {

  }
  accesToken: string;
  clientId: string;
  clientSecret: string;

  getToken(){
    alert("Voy por el token");
    this.accountService.getSpotifyToken(this.clientId, this.clientSecret).then(response=> {
           return response.json();
    }).then(r=> {
      this.accesToken = r.access_token;
      console.log(r.access_token);
    });
    }

}
