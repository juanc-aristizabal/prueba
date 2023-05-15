import { Injectable,Inject,ElementRef} from '@angular/core';
import { stuff } from '../stuff';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditService {
  
  Stuff: stuff = {
                   id:       0,
                   name:    '',
                   state:   '',
                   quantity: 0
                 };

  public active: string = 'none';
  public activeChanged: Subject<string> = new Subject<string>();


  load(elemento:stuff){    
    this.Stuff = elemento
  }

  public abrir(){
      this.active = 'block';
      this.activeChanged.next('block');
  }

  public cerrar(){
    this.active = 'none';
    this.activeChanged.next('none');    
  }

}
