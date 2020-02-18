export interface Factura{
    id?: string;
    nombres?: string;
    apellidos?: string;
    cedula?:string;
    ciudad?:string;
    provincia?:string;
    direccion?:string;
    subtotal?:number;
    costo_envio?:number;
    total?:number;
    tipo_pago?:string;
}