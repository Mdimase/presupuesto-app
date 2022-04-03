import { Component, OnInit } from '@angular/core';
import { Ingreso } from './ingreso.model';
import { IngresoService } from './ingresoService.service';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent{

  ingresos:Ingreso[];

  constructor(private ingresoService:IngresoService){
    this.ingresos = this.ingresoService.getIngresos();
  }

  eliminarRegistro(ingreso:Ingreso):void{
    this.ingresoService.eliminarIngreso(ingreso);
  }

}
