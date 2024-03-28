import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertasService {

  private alertSource = new Subject<any>();
  alert$ = this.alertSource.asObservable();

  private alertSource2 = new Subject<any>();
  alerta$ = this.alertSource2.asObservable();

  private alertSource3 = new Subject<any>();
  alerta3$ = this.alertSource3.asObservable();

  constructor() { }

  showAlert({ message, time = 5000 }: { message: string, time?: number }) {
    this.alertSource.next({ message, time });
  }

  showAlert2({ message2, time2 = 5000 }: { message2: string, time2?: number }) {
    this.alertSource2.next({ message2, time2 });
  }

  showAlert3({ message3, time3 = 5000 }: { message3: string, time3?: number }) {
    this.alertSource3.next({ message3, time3 });
  }
}
