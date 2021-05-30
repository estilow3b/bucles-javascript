var Paises=[];

Paises.push('Peru');
Paises.push('Colombia');
Paises.push('Chile');
Paises.push('Brasil');
   
for(item in Paises){   
    //Obtener el indice 
    console.log(item);
    
    //Obtener el valor de la lista 
    //según el su indice
    console.log(Paises[item]);    
}