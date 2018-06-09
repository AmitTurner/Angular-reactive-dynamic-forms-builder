import {
  Injectable
} from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse
} from '@angular/common/http';
import {
  Observable,
  observable
} from 'rxjs';
import {
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';
import {
  map,
  catchError
} from 'rxjs/operators';

import {
  Form
} from './models';

@Injectable()
export class FormsService {
  result: any;
  constructor(private http: HttpClient) {}

  addForm(data) {
    const uri = 'http://localhost:4000/forms/add';
    const obj = data;
    this.http.post(uri, obj)
      .subscribe(res => console.log('Done'));
  }

  deleteForm(id) {
    // console.log('starting to delete form');
    const uri = 'http://localhost:4000/forms/delete/' + id;
    return this.http.get(uri).pipe(map(res => {
      return res;
    }));
  }


  getForms() {
    const uri = 'http://localhost:4000/forms';
    return this
      .http
      .get(uri).pipe(
        map(res => {
          return res;
        }));
  }

  getForm(id): Observable < Form > {
    const uri = 'http://localhost:4000/forms/' + id;
    return this.http
      .get(uri).pipe(
        map(item => item as Form));
  }

  submitForm(id, data) {
    const uri = 'http://localhost:4000/forms/submit/' + id;
    const obj = data;
    this.http.post(uri, obj)
      .subscribe(res => console.log('Done'));
  }

  errorHandler(error: any): void {
    console.log(error);
  }
}
