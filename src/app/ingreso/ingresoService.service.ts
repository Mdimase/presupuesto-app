import { Ingreso } from "./ingreso.model";

export class IngresoService{
    
    private ingresos:Ingreso[] = [
        new Ingreso("Salario",4000),
        new Ingreso("venta de empanadas",500)
    ];
        
    getIngresos():Ingreso[]{
        return this.ingresos;
    }
}