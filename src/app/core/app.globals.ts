import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppGlobals {
  readonly address: string = 'San Pablo, Laguna, PH';
  readonly mobile: string = '0909-897-3945';
  readonly email: string = 'gdelosreyes.bos@gmail.com';

  readonly facebook: string = 'https://www.facebook.com/gardelore';
  readonly instagram: string = 'https://www.instagram.com/gardelore.44';
  readonly behance: string = 'https://www.behance.net/gdelosreye2dd8';

  readonly cors: string = 'https://cors-anywhere.herokuapp.com/';
  readonly base: string = `${this.cors}https://api.behance.net/v2`;
  readonly key: string = '2atf2MJlepuAnBFswi1wIXVSwcMiJr4p';
  readonly user_id: string = 'mattporteous';
}
