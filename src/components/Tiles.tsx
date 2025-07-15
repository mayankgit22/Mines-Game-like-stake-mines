import React, { useEffect ,useState} from 'react'
import { useHomeContext } from './Context';
function Tiles({noOfMines}:{noOfMines:number}) {
  const {betOn,mines,setBetOn,setMultiplier}=useHomeContext();
    const arr=[["true","false","true"],["true","false","false"],["true","false","true"],["true","false","true"],["true","false","true"]];
    const [values,setValues]=useState<string[]>([]);
const [revealed,setRevealed]=useState<boolean[]>([]);
const [diamondCount,setDiamondCount]=useState<number>(1);
const [popUp,setPopUp]=useState<boolean>(false);
    useEffect(() => {
const randomArr:number[][]=[];
while(randomArr.length<arr.length){
    const temp:number[]=[];
    while(temp.length<3){
        
        const num=Math.floor(Math.random()*3);
       if(!temp.includes(num)){
        temp.push(num)
           
       }
    }
    randomArr.push(temp);
}
// console.log(randomArr)
const tempvalues:string[]=[]
let breakPoint=0;
let flag=false;
for(let i=0;i<arr.length;i++){

  for(let j=0;j<3;j++){


    
 const value=arr[i][randomArr[i][j]];
 if(value=='false')breakPoint++;
 if(breakPoint>noOfMines)flag=true;

 if(flag) tempvalues.push("true")
  else tempvalues.push(value)
  }

    
}
  setValues(tempvalues)
  setRevealed(Array(tempvalues.length).fill(false));
    
},[mines,setBetOn])
  const check = (index: number, value: string) => {
    
    if(!betOn){alert("Please place your bet first");
    return;
    }
  setRevealed(prev => {
    const updated = [...prev];
    updated[index] = true;
    return updated;
  });
  if(value === "true") {
    setDiamondCount(prev => prev + 1);
setMultiplier(diamondCount*(diamondCount*mines/15));
    console.log(diamondCount)
  }

  setTimeout(() => {
    if (value === "false") {
      // setBetOn(false);\
      setTimeout(() => {
        
        setPopUp(true)
      },1000)
      // alert("You lose! Please try again");?
      setRevealed(Array(values.length).fill(true));
    }
  }, 400);
};
  return (<>{popUp ? <div className='  w-60 h-36 md:w-96 md:h-96 bg-black/10 z-50 flex justify-center items-center absolute'>
     { betOn&&<button onClick={()=>window.location.reload()} className= 'bg-red-400 w-[50%] rounded-3xl cursor-pointer h-12  md:h-[12%]'>Play Again</button>}</div>:

    <div className='grid grid-cols-3 gap-3 relative'>
  {values.map((value, index) => (
    <div onClick={() => check(index,value)} key={index} className=' h-full text-4xl relative border-2 rounded-md border-white/20 bg-green-900 z-50' >

      <div
        // onClick={() => check(value)}
        key={index}
   
        className='border-1 flex justify-center items-center w-full rounded-md h-full  md:h-20 pb-1 -z-1 border-green-400'
      > {value === "true" ? "💎" : "💣"}</div>
      {!revealed[index] && <div className='absolute top-0 inset-0 transition-opacity rounded-md  w-full h-full bg-green-600 hover:bg-green-400 z-10'></div>}
    </div>
  ))}
</div>}
</>
  )
}

export default Tiles
