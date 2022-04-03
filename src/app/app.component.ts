import { Component } from '@angular/core';
import { Egreso } from './egreso/egreso.model';
import { EgresoService } from './egreso/egresoService.service';
import { Ingreso } from './ingreso/ingreso.model';
import { IngresoService } from './ingreso/ingresoService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  ingresos:Ingreso[] = [];
  egresos:Egreso[] = [];

  constructor(private ingresoService:IngresoService,private egresoService:EgresoService){
    this.egresos = this.egresoService.getEgresos();
    this.ingresos = ingresoService.getIngresos();
  }

  getIngresoTotal():number{
    return this.ingresoService.getIngresoTotal();
  }

  getEgresoTotal():number{
    return this.egresoService.getEgresoTotal();
  }

  getPorcentajeTotal():number{
    return this.getEgresoTotal() / this.getIngresoTotal();
  }

  getPresupuestoTotal():number{
    return this.getIngresoTotal() - this.getEgresoTotal();
  }

}
