let x=0;
let z=0;
labelBucle:while(true){
    console.log("Bucle Externo :" + x);
    x=x+1;
    z=1;
    while(true){
        console.log("Bucle Interno :" + z);
        z=z+1;
        if(z===3 && x===3){
            console.log('Salir Bucle labelBucle');
            break labelBucle;
        }else if(z===3){
            break;
        }
    }
}