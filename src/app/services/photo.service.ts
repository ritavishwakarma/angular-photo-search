import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable, throwError } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Authorization':'563492ad6f91700001000001a44546bcb1fb4512a6053065855ef3b4'
  })
}
@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient) { }

  getData(search): Observable<any>{
    console.log(search)
    const url="https://api.pexels.com/v1/search?query="+search+"&per_page=20"

    return this.http.get<any>(url,httpOptions)
                    .pipe(catchError(this.handleError))
  }
  handleError(error){
    return throwError(error.message || "server error")
  }
  
}
