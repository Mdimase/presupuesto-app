import { Egreso } from "./egreso.model";

export class EgresoService{

    private egresos:Egreso[] = [
        new Egreso("alquiler",800),
        new Egreso("verduleria",200)
    ];
    
    getEgresos():Egreso[]{
        return this.egresos;
    }

    getEgresoTotal():number{
        let suma:number = 0;
        for(let egreso of this.egresos){
          suma += egreso.valor;
        }
        return suma;
    }

    eliminarEgreso(egreso:Egreso):void{
      const indice:number = this.egresos.indexOf(egreso);
      this.egresos.splice(indice,1);
    }

    agregarEgreso(egreso:Egreso):void{
      this.egresos.push(egreso);
    }
}