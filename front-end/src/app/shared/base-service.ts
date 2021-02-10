import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { CrudOperations } from './crud-operations';

export class BaseService<T, ID> implements CrudOperations<T, ID>{

  constructor(protected http: HttpClient, protected baseUrl: string) {
  }

  save(record: T): Observable<T> {
    return this.http.post<T>(this.baseUrl, record).pipe( 
      map(response =>  response),
       catchError(error => {
          return throwError(error.error)
    })
   )
  }


  read(): Observable<T[]> {
    return this.http.get<T[]>(this.baseUrl).pipe( 
      map(response =>  response),
       catchError(error => {
          return throwError(error.error)
    })
   )
  } 

  readById(id: ID): Observable<T> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<T>(url).pipe( 
      map(response =>  response),
       catchError(error => {
          return throwError(error.error)
    })
   )
  }

  update(record: T, id: ID): Observable<T> {
    return this.http.put<T>(this.baseUrl + '/' + id, record).pipe( 
      map(response =>  response),
       catchError(error => {
          return throwError(error.error)
    })
   )
  }

  delete(record: ID): Observable<T> {
    return this.http.delete<T>(this.baseUrl + '/' + record).pipe( 
      map(response =>  response),
       catchError(error => {
          return throwError(error.error)
    })
   )
  }


}
