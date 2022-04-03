import { Component, OnInit } from '@angular/core';
import { Egreso } from '../egreso/egreso.model';
import { EgresoService } from '../egreso/egresoService.service';
import { Ingreso } from '../ingreso/ingreso.model';
import { IngresoService } from '../ingreso/ingresoService.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent{

  tipo:string = "I";
  descripcionInput:string;
  valorInput:number;

  constructor(private ingresoService:IngresoService, private egresoService:EgresoService){ }

  tipoOperacion(evento:any):void{
    this.tipo = evento.target.value;
  }

  agregar():void{
    if(this.tipo === "I"){
      this.ingresoService.agregarIngreso(new Ingreso(this.descripcionInput,this.valorInput));
    }
    else{
      this.egresoService.agregarEgreso(new Egreso(this.descripcionInput,this.valorInput));
    }
  }

}
