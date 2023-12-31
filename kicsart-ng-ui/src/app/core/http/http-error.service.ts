import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HttpErrorService {
  private _errorMessage: string = '';
  errorMessageSubject: Subject<string> = new Subject();
  constructor() {}

  get errorMessage() {
    return this._errorMessage;
  }
  set errorMessage(value) {
    this._errorMessage = value;
    this.errorMessageSubject.next(value);
  }
  setErrorMessage(errMessage: string) {
    this.errorMessage = errMessage;
  }
}
