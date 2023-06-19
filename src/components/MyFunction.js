import { useState } from "react";


let My=()=>{
    const [s,setS]=useState(90);

    return <h3>s value is {s}</h3>
}

export const My1=()=>{

    const [a,setA]=useState(200);

    let inc=()=>{
        setA(a+10);
    }

    return( <>
        <h2>a value is {a}</h2>
        <button onClick={inc}>Make inc a</button>
        </>
    )
    
}

function MyFunction(){

    var [x,setX]=useState(60);

    function dic(){
        setX(x-20);
    }


    return(
        <> <button onClick={dic}>dicuss Value</button>
        <h1>we are learn react js {x} <My /></h1>
        </>
    )
}

export default MyFunction;