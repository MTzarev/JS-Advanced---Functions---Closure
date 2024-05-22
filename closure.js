function A(){
    let myLetA = 5;
    console.log(`inside A`, myLetA);
    
    function B(){
        let myLetB = 3;
        console.log(`inside A`, myLetB, myLetA);
    }
    B();
}
A();