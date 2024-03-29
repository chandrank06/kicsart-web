import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  private _loading: boolean = false;
  loadingStatus: Subject<boolean> = new Subject();
  constructor() {}
  get loading(): boolean {
    return this._loading;
  }
  set loading(value) {
    this._loading = value;
    this.loadingStatus.next(value);
  }
  startLoading() {
    this.loading = true;
  }
  stopLoading() {
    this.loading = false;
  }
}
