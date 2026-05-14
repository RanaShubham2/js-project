
// Q19. Implement a simple scope chain demo: outer function, inner function, innermost function — each
// accessing variables from outer scopes.

function outer(){
    let a='i am outer'

    function inner(){
        let b='i am a inner function'

         function innermost(){
        let c= 'i am innermost'
        console.log(a);
        console.log(b);
        console.log(c);      
        
    }
    innermost()
    }
   inner()  
}
outer()
