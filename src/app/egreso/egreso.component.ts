import { Component, Input, OnInit } from '@angular/core';
import { Egreso } from './egreso.model';
import { EgresoService } from './egresoService.service';

@Component({
  selector: 'app-egreso',
  templateUrl: './egreso.component.html',
  styleUrls: ['./egreso.component.css']
})
export class EgresoComponent{

  @Input() ingresoTotal:number;
  egresos:Egreso[] = [];

  constructor(private egresoService:EgresoService){
    this.egresos = this.egresoService.getEgresos();
  }

  eliminarEgreso(egreso:Egreso):void{
    this.egresoService.eliminarEgreso(egreso);
  }

  getPorcentaje(egreso:Egreso):number{
    return egreso.valor / this.ingresoTotal;
  }

}
