let monto: number = 2500;
let catindad: number = 0;
let montoConDescuento: number = 0;

let descuento: number = 0;
let precioTotal: number = 0;
precioTotal = monto * cantidad;
if (precioTotal>=1000) { descuento = (precioTotal*10)/100:}
montoConDescuento = precioTotal - descuento;


console.log ("por gastar mas de 1000 tiene un 10% descuento ");
console.log ("El monto a pagar es: " + montoConDescuento);
}
else
{
console.log("no tiene descuento . el monto a pagar es:" + precioTotal);

}