// loop with break statements
// loop with continue statements

// for(let i=0;i<10;i++)
// {
//     console.log(`outer loop ${i}`);
//     for(let j=0;j<5;j++)
//     {
//         if(i==30)
//             {
//                 break ;
//             }
//             console.log(`inner loop ${j}`);
            
        
//     }
    
// }


//  demo:for(let i=0;i<10;i++)
//     {
//         console.log(`outer loop ${i}`);
//         for(let j=0;j<5;j++)
//         {
//             if(i==30)
//                 {
//                     continue demo ;
//                 }
//                 console.log(`inner loop ${j}`);
                
            
//         }
        
//     }



// javascript map Object

{
    let map=new Map()
    console.log(map);

    map.set("key1",1)
    console.log(map);
    
    map.set("key2",2)
    console.log(map);

    let Get=map.get("key2")
    console.log(Get);

    let has1=map.has('key1')
    console.log(has1);

    map.set("key3",3)
    console.log(map);

    map.delete("key2")
    console.log(map);

    // map.clear()
    // console.log(map);
    

    let entires1 =map.entries()
    console.log(entires1);

    let value1=map.values()
    console.log(value1);

    let key1=map.keys()
    console.log(key1);

    map.forEach((key,value)=>{
    return console.log(`${key}=${value}`);
})

    let data=map[Symbol.iterator]()

    for(const item  of data)
    {
        console.log(item);
        
    }
    
}
    

