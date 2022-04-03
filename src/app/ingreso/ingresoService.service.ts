import { Ingreso } from "./ingreso.model";

export class IngresoService{
    
    private ingresos:Ingreso[] = [
        new Ingreso("Salario",4000),
        new Ingreso("venta de empanadas",500)
    ];
        
    getIngresos():Ingreso[]{
        return this.ingresos;
    }

    getIngresoTotal():number{
        let suma:number = 0;
        for(let ingreso of this.ingresos){
          suma += ingreso.valor;
        }
        return suma;
    }

    eliminarIngreso(ingreso:Ingreso):void{
      const indice:number = this.ingresos.indexOf(ingreso);
      this.ingresos.splice(indice,1);
    }
}