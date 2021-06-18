import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TareasService } from '../../services/tareas.service';
import { AlertController } from '@ionic/angular'
import { Lista } from '../../models/lista-model';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {

tareasService:any;


  constructor( tareasService:TareasService,
              private router:Router,
              private alertctrl: AlertController) {
    this.tareasService=tareasService;
    console.log(this.tareasService)

      //this.listas=tareasService.listas;
 }

async nuevaTarea(){
  console.log('Nueva tarea');
  // this.router.navigateByUrl('/tabs/tab1/agregar')

  const alert = await this.alertctrl.create({
    header: 'Nueva lista',
    inputs:[{
              name:'titulo',
              type:'text',
              placeholder:'Nombre de la lista'
            }
          ],

    buttons: [{
                text:'Cancelar',
                role:'cancel',
                handler:()=>{
                    console.log('cancelar')
                }
              },
                {
                  text:'Crear',
                  handler:(datos)=>{
                    let titulo:string;
                    titulo=datos.titulo
                     if(titulo.length===0){
                       return
                     }else{ 
                       

                      let idLista:number = this.tareasService.crearLista(titulo);
    
                        this.router.navigateByUrl(`/tabs/tab1/agregar/${idLista}`);
                        this.tareasService.setStoradge();
                     }
                    
                  }
                }

            ]

  });
  await alert.present();


}

verLista(id:number){
  console.log(id);
  //this.router.navigate(['/agregar',id])
  this.router.navigateByUrl(`/tabs/tab1/agregar/${id}`);
 
  
}





}