// inizio esercizio

// inizializzazione
// indico il ciclo:  su  tutti i numeri  che sono inferiori o uguali a 100 il ciclo si ripete, finchè la condizione resta vera;
// ogni volta che il cico si ripete la variabile incrementa di uno.
for(let i= 1; i <=100; i++){
    
    // indico che i multipli di 3 e di 5 devono essere visualizzati come fizzbuzz
    if(i % 3 ==0 && i % 5 == 0){
        console.log("FizzBuzz");
        
    }
    else if(i % 3 == 0){
    console.log("Fizz");
    // indico che i multipli di tre vengano denominati fizz
        
    }
    else if(i % 5 == 0){

    console.log("Buzz");
     // indico che i multipli di tre vengano denominati buzz
    }
    else{
        console.log(i);
       }
}