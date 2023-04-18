import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject, catchError, map, Observable, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = 'http://localhost:3000/login';
  private registerUrl = 'http://localhost:3000/register';


  private currentUserSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient) {

  }

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  logout() {
    // Remove the user object from the BehaviorSubject
    this.currentUserSubject.next(null);
  }

  isAuthenticated(): boolean {
    // Check if the user object in the BehaviorSubject exists
    return !!this.currentUserSubject.value;
  }

  login(credentials: { username: string, password: string }): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post(this.loginUrl, JSON.stringify({username : credentials.username, password : credentials.password}), {headers}).pipe(
      catchError(error => {
        let errorMsg: string = '';
        if (error.error instanceof ErrorEvent) {
          errorMsg = `Error: ${error.error.message}`;
        } else {
          errorMsg = this.getServerErrorMessage(error);
        }
        return throwError(() => errorMsg);
      }),
      map(user => {
        // If login is successful, save the user object to the BehaviorSubject
        this.currentUserSubject.next(user);
        return user;
      })
    );
  }


  private getServerErrorMessage(error: HttpErrorResponse): string {
    switch (error.status) {
      case 401:
        return 'Hibás felhasználónév vagy jelszó';
      case 404: {
        return `Not Found: ${error.message}`;
      }
      case 403: {
        return `Access Denied: ${error.message}`;
      }
      case 500: {
        return `Internal Server Error: ${error.message}`;
      }
      default: {
        console.log(error)
        return `Unknown Server Error: ${error.message}`;
      }

    }
  }


}
