
import { Component,OnInit,ViewChild, ElementRef,Inject } from '@angular/core';
import { stuff } from '../stuff';

import { ApiService } from '../service/api.service';
import { EditService } from '../service/edit.service';


@Component({
    selector: 'app-bucles',
    templateUrl: './bucles.component.html',
    styleUrls: ['./bucles.component.css']
})


export class BuclesComponent implements OnInit{

  constructor(
              private apiService:ApiService,
              public editService:EditService,
             ){}

  @ViewChild('box')      box!:       ElementRef;
  @ViewChild('ID')       ID!:        ElementRef;
  @ViewChild('Name')     Name!:      ElementRef;
  @ViewChild('State')    State!:     ElementRef;
  @ViewChild('btn_save') Btn_save!:  ElementRef;


  bd:stuff[] = [];
  nuevoStuff: stuff = {id: 0,name: '',state: '',quantity: 0};

  ngOnInit(): void { 
    this.GET_all(); 
  }


  ngAfterViewInit() {
  
  }


  GET_all(){

    this.apiService.get("http://127.0.0.1:3333/getall/").subscribe(data=>{
       console.log(data.length);
       this.bd = data.slice();
     })

  }

  //------------------------------------------------------------------------

  save(){
   
    //corrobora input 
    let name = this.Name.nativeElement.value.trim();
    let state=this.State.nativeElement.value;

    if(name=="")                        {alert('Campo vacio, inserte nombre del elemento'); return;}
    if(this.findbyname(name)!=undefined){alert('Ya existe elemento en la base de datos'); return;}


    if(state=='Dropdown'){
                          alert('Por favor seleccione estado del elemento...'); 
                          return;
                        }
    //crea un id unico
    let newId = Math.max(...this.bd.map(item => item.id)) + 1;
    if(newId==-Infinity) newId = 1; 
    
    // crea objeto a enviar 
    this.nuevoStuff = {
                        id:                                newId,
                        name:                               name,
                        state:    this.State.nativeElement.value,
                        quantity:                              0
                      };
    
    this.apiService.sendData("http://127.0.0.1:3333/stuff",this.nuevoStuff).subscribe(data=>{
       this.bd.push(this.nuevoStuff);
       alert('registro guardado con exito');
       console.log(data);
     })

  }

  findbyname(nombre: string): stuff | undefined {
    return this.bd.find(elemento => elemento.name === nombre);
  }

  find(){
    let text = this.box.nativeElement.value.trim();
    let results = this.bd.filter(item => {
      if(item.name === text)  return true
      else                     return false
      
    });

    console.log(results);
    alert(results.length + 'elementos encontrados...') 
  }
  //------------------------------------------------------------------------

  agregarElemento(){

    let size = this.bd.length + 1;
    const nuevoElemento: stuff = {
                                   id:    this.bd.length + 1,
                                   name:    'nuevo elemento',
                                   state:              'new',
                                   quantity:                1
                                 };
    this.bd.push(nuevoElemento);

  }
  
  state(item: stuff){
    const index = this.bd.indexOf(item);
    console.log('Se hizo clic en estado fila ' + index);
  }

  delete(item: stuff){

    const index = this.bd.indexOf(item);

    if(!confirm("¿Estás seguro de que deseas eliminar el elemento "+ this.bd[index].name))  return;
    
    this.apiService.delete("http://127.0.0.1:3333/stuff/",this.bd[index].id).subscribe(data=>{
      
        console.log('-----------------');
        console.log(data);
        // this.GET_all(); 
      
     })    

     this.GET_all(); 

  }

  mto(item: stuff){
    const index = this.bd.indexOf(item);
    console.log('Se hizo clic en mto ' + index);
  }

  select(item: stuff){

    const index = this.bd.indexOf(item); 
    this.editService.load(this.bd[index]);
    this.editService.abrir();

  }

}
