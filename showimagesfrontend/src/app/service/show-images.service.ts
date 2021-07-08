
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

const BACKEND_SERVICE_BASE_PATH = '/api/v1';

export abstract class ShowImagesService {

  constructor(protected http: HttpClient) {
  }

  protected get<T>(path: string, params?: HttpParams): Observable<T> {
    return this.http.get<T>(BACKEND_SERVICE_BASE_PATH + path, {params});
  }

}
