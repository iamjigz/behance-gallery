import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppGlobals } from './app.globals';

export class User {
  // public id?: number;
  // public url?: string;
  // public username?: string;
  // public first_name?: string;
  // public last_name?: string;
  // public location?: string;
  // public country?: string;
  // public image?: string;
  // public fields?: string[];
  // public occupation?: string;
}

export class Project {
  modules: any;
}

const httpHeader = new HttpHeaders()
  .set('Content-Type', 'text/json')
  .append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS')
  .append('Access-Control-Allow-Origin', '*')
  .append(
    'Access-Control-Allow-Headers',
    'Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Request-Method'
  );

@Injectable({
  providedIn: 'root'
})
export class BehanceService {
  public user: User;

  constructor(private http: HttpClient, public globals: AppGlobals) {}

  private get(endPoint: string): Observable<any> {
    return this.http.get(this.createUrl(endPoint), {
      headers: httpHeader,
      responseType: 'json'
    });
  }

  private createUrl(endPoint): string {
    let url = this.globals.base + endPoint;
    if (!endPoint.startsWith('/')) {
      url = this.globals.base + '/' + endPoint;
    }
    return `${url}?client_id=${this.globals.key}`;
  }

  public setUser() {
    return this.globals.user_id;
  }

  public getUser(): Observable<any> {
    return this.get(`/users/${this.globals.user_id}`);
  }

  public getProjects(): Observable<any> {
    return this.get(`/users/${this.globals.user_id}/projects`);
  }

  public getProject(id: number | string) {
    return this.get(`/projects/${id}`);
  }
}
