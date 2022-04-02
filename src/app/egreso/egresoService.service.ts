import { Egreso } from "./egreso.model";

export class EgresoService{

    private egresos:Egreso[] = [
        new Egreso("alquiler",900),
        new Egreso("verduleria",200)
    ];
    
    getEgresos():Egreso[]{
        return this.egresos;
    }
}