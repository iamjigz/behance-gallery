import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppGlobals {
  readonly address: string = 'San Pablo, Laguna, PH';
  readonly mobile: string = '0926-011-3502';
  readonly email: string = 'jigzimon@gmail.com';

  readonly facebook: string = 'https://www.facebook.com/jigzimon';
  readonly instagram: string = 'https://www.instagram.com/jigzimon';
  readonly linkedin: string = 'https://www.linkedin.com/in/jigzimon/';

  readonly cors: string = 'https://cors-anywhere.herokuapp.com/';
  readonly base: string = `${this.cors}https://api.behance.net/v2`;
  readonly key: string = '2atf2MJlepuAnBFswi1wIXVSwcMiJr4p';
  readonly user_id: string = 'mattporteous';
}
