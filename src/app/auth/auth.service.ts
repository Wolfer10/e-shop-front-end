import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject, catchError, map, Observable, of, Subject, throwError} from 'rxjs';
import {User} from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = 'http://localhost:3000/login';
  private logoutUrl = 'http://localhost:3000/logout';
  private usersUrl = 'http://localhost:3000/register/';
  private userNameUrl = 'http://localhost:3000/users/name';


   user = new BehaviorSubject<String | null>(localStorage.getItem('user'));


  constructor(private http: HttpClient) {}

  public register(user: User) : Observable<any> {
    return this.http.post(this.usersUrl, user).pipe(
      this.getCatchError.call(this, this.handleErrorMessage)
    )
  }

  public get isLoggedIn(): boolean {
    return localStorage.getItem('user') !== null;
  }

  public get isAdmin(): boolean {
    return localStorage.getItem('accessLevel') === null ? false : Number.parseInt(localStorage.getItem('accessLevel')!) === 3;
  }

  logout() {
    this.http.post(this.logoutUrl, {});
    localStorage.removeItem('user');
    this.user.next(null);
  }

  private getCatchError(handleErrorMessage: Function) {
    return catchError(error => {
      console.error('Error in login request:', error);
      let errorMsg: string = '';
      if (error.error instanceof ErrorEvent) {
        errorMsg = `Error: ${error.error.message}`;
      } else {
        errorMsg = handleErrorMessage(error);
      }
      return throwError(() => errorMsg);
    });
  }

  login(credentials: { username: string, password: string }): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'responseType': 'text'
    });

    return this.http.post(this.loginUrl, JSON.stringify({username : credentials.username, password : credentials.password}), {headers}).pipe(
      this.getCatchError.call(this, this.handleErrorMessage),
      map(any => {
        localStorage.setItem('user', credentials.username);
        this.user.next(credentials.username);
        let user: User;
        this.getUserByName(credentials.username).subscribe(value => {
            user = value
            localStorage.setItem('accessLevel', String(user.accessLevel));
          }
        )
      })
    );
  }

  public getUserByName(userName: String) : Observable<User> {
    console.log("Getting user by name: ", userName);

    return this.http.post<object>(this.userNameUrl, {name: userName} ).pipe(
      catchError((error: any) => {
        console.log("Error:", error);
        if (error instanceof HttpErrorResponse && error.status === 404) {
          return of(null);
        } else {
          return throwError(error);
        }
      }),
      map(data => {
        // @ts-ignore
        return {username: data['username'] as String, password: data['password'] as String,
          // @ts-ignore
          accessLevel: data['accessLevel'] as Number,
          // @ts-ignore
          birthdate: data['birthdate'] as Date} as User})
    )
  }


  private handleErrorMessage(error: HttpErrorResponse): string {
    switch (error.status) {
      case 400:
        return 'Username already taken'
      case 401:
        return 'Wrong credentials!';
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
