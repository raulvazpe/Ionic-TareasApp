import { Injectable } from '@angular/core';
import { Lista } from '../models/lista-model';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

listas:Lista[]=[];
nombreItem=''
  constructor() {

     // const tarea1= new Lista('Ejercicios Gym');
    // const tarea2= new Lista('Cursos para estudiar');
    // const tarea3= new Lista('Lenguajes de programacion');
    // this.listas.push(tarea1,tarea2,tarea3);
    // console.log('funciona');
    // console.log(this.listas);
    //Lo ponemos en el constructor, ya que sera lo primero que queremos que cargue
    this.getStoradge();
    
   }

   crearLista(titulo:string){
    const nuevaLista= new Lista(titulo);
    this.listas.push(nuevaLista);
    //Lo metemos dentro de la funcion, porque queremos que primero almacene las listas creadas, y luego guarde el storadge con las listas nuevas
    this.setStoradge();

   }



   //GUARDAR
   setStoradge(){
    localStorage.setItem('datos',JSON.stringify(this.listas))
   }




   //CARGAR
   getStoradge(){
     this.listas =JSON.parse(localStorage.getItem('datos'));
   }


   

  //Obtener el array a traves del ID
  obtenerInfoLista(id:number|string){
      id=Number(id)
     return this.listas.find(datos=> datos.id===id);
      
  }
}
