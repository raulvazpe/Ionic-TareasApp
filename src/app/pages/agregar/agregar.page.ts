import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TareasService } from '../../services/tareas.service';
import { Lista } from '../../models/lista-model';
import { ListaItem } from '../../models/lista-item.model';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {
lista:Lista
nombreItem='';
tareaservice:any;

  constructor(tareaservice:TareasService,
              route:ActivatedRoute) { 
           this.tareaservice=tareaservice;
            const id = route.snapshot.paramMap.get('id'); //recogemos el id de la url ( le indicamos el parametro que le hemos puesto en rutas)
            console.log(id);
            this.lista = tareaservice.obtenerInfoLista(id);
            console.log(this.lista)
           
              }

  ngOnInit() {
  }

  agregarItem(){
     if(this.nombreItem.length===0){
       return
     }

     const nuevoItem = new ListaItem(this.nombreItem);
     this.lista.items.push(nuevoItem);
     this.nombreItem='';
    this.tareaservice.setStoradge();
  }

}
