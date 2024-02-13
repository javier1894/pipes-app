import { Component } from '@angular/core';
import { rejects } from 'assert';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css',
})
export class UncommonPageComponent {
  // i18n Select
  public name: string = 'Javier';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeClient(): void {
    this.name = 'Sara';
    this.gender = 'female';
  }

  // i18n Plural
  public clients: string[] = [
    'María',
    'Pedro',
    'Javier',
    'Sara',
    'Laura',
    'Paco',
    'Nacho',
  ];
  public clientsMap = {
    '=0': 'no tenemos clientes esperando',
    '=1': 'tenemos 1 cliente esperando',
    other: 'tenemos # clientes esperando',
  };

  deleteClient(): void {
    this.clients.shift();
  }

  // KeyValue Pipe
  public person = {
    name: 'Javier',
    age: 29,
    address: 'Málaga, España',
  };

  // Async Pipe
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap((value) => console.log('tap', value))
  );
  public promiseValue: Promise<string> = new Promise((resolve, rejects) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa');
    }, 3500);
  });
}
