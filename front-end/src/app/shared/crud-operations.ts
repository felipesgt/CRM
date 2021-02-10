import { Observable } from 'rxjs';

export interface CrudOperations<T, ID> {
  save(record: T): Observable<T>;
  read(): Observable<T[]>;
  readById(id: ID): Observable<T>;
  update(record: T, id: ID): Observable<T>;
  delete(record: ID): Observable<T>;
}
