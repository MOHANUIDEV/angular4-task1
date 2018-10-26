import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DataSoreService {
  dataStoreSubject = new Subject<any>();
  constructor() {}
  setItem(data) {
    this.dataStoreSubject.next(data);
  }
  getItem() {
    return this.dataStoreSubject.asObservable();
  }
}
