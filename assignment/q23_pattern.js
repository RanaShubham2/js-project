
function pa1(){
    for(let i=0;i<=4;i++){
  let patt= ''
  for(let j=0;j<=4-i;j++){
       patt = patt+ j 
  }
  console.log(patt);
  
}
}
// pa1()
function pa2(){
for(let i=0;i<=4;i++){
  let patt= ''
  for(let j=0;j<=i;j++){
       patt = patt+'* '
  }
  console.log(patt);
}
}
// pa2()

function pa3(){
    for(let i=0;i<=4;i++){
  let patt= ''
  for(let j=0;j<=i;j++){
       patt = patt+ j 
  }
  console.log(patt);
}
}

pa3()

function pa4(){
   let  n=5
    for(let i=1;i<=n;i++){
        let patt=''

        for(let j=1;j<=n-1;j++){
          patt +=' '
        }
        for(let k=1;k<=2*i-1;k++){
            patt = patt+'* '
        }
        console.log(patt);
        
    }
}
pa4()
