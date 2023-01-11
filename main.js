let a=[1,2,3,4,5];
let b=[1,2,3,4];

for(let i=0; i<a.length; i++){
    if(a[i]!=b[i]){
        console.log(a[i] ,"bu eded ferqlidir")
    }else{
        console.log(a[i] && b[i], "bu ededler hem a da hem de bda var");
    }
}




