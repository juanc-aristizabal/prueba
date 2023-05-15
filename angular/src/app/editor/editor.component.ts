import { Component,ViewChild, ElementRef,OnDestroy } from '@angular/core';
import { ApiService } from '../service/api.service';
import { EditService } from '../service/edit.service';
import { Subscription } from 'rxjs';
import { stuff } from '../stuff';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})


export class EditorComponent implements OnDestroy{

 

  public active: string = 'none';
  private activeSubscription!: Subscription;

  @ViewChild('container') container!:   ElementRef;
  @ViewChild('id')               id!:   ElementRef;
  @ViewChild('name')           name!:   ElementRef;
  @ViewChild('state')         state!:   ElementRef;
  @ViewChild('quantity')   quantity!:   ElementRef;
  
  Stuff: stuff = {
                  id:       0,
                  name:    '',
                  state:   '',
                  quantity: 0
                };


  constructor(private apiService:ApiService,public editService:EditService){
    
    this.activeSubscription = this.editService.activeChanged.subscribe((active) => {
                                                                                    this.active = active;
                                                                                   });
  }
 
  close(){
    this.editService.cerrar();
    this.container.nativeElement.top = 0;

    // this.metodo.GET_all()
  }
  
  async save(){
    
    if(this.id.nativeElement.value=="") {alert("numero de ID no identificado..."); return; }
    
    this.Stuff.id       = this.id.nativeElement.value;
    this.Stuff.name     = this.name.nativeElement.value;
    this.Stuff.state    = this.state.nativeElement.value;
    this.Stuff.quantity = this.quantity.nativeElement.value;
 

   let send =await this.apiService.update("http://127.0.0.1:3333/stuff/",this.Stuff).subscribe()
    // let send = await this.apiService.update("http://127.0.0.1:3333/stuff/",this.Stuff);
     if(send) {console.log('listo mijo....'); console.log(send);}

  }


  ngOnDestroy() {
    this.activeSubscription.unsubscribe();
  }

}
