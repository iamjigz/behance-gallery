import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class Core {
  public navigate(url: string) {
    window.open(url, '_blank');
  }
}
