import React from 'react'
import Tiles from './Tiles'
import {useState} from 'react'
import {  HomeContext } from './Context';

 export default function Home() {

  const [betValue,setBetvalue]=React.useState<number>(0);
  const [multiplier,setMultiplier]=React.useState<number>(0);
  const [walletAmount,setWalletAmount]=React.useState<number>(0);
  const [betOn,setBetOn]=React.useState<boolean|undefined>(false);
      const [mines,setMines]=useState<number>(1);
  
  const makeBetHalf=()=>{
    const half=betValue/2;
    setBetvalue(half)
  }
const cashOut=()=>{
  // alert('dd')
  setBetOn(true);
}
  const makeBetDouble=()=>{
    const double=betValue*2;;
    setBetvalue(double)
  }
  return (
    <>
    <HomeContext.Provider value={{betValue,setBetvalue,multiplier,setMultiplier,walletAmount,setWalletAmount,betOn,setBetOn,mines,setMines,cashOut}}>
    <h2 className='bg-white w-20 h-10 text-black text-md text-lg  flex justify-center items-center text-center top-6 left-36 md:top-1 md:left-96 md:ml-96 absolute'>{walletAmount}</h2>
    <div className='grid grid-cols-1  md:grid-cols-2 w-screen m-0 py-12 px-8 gap-2 h-[95vh]'>
      <div className=' flex col-span-1 justify-center items-center '> <div className='w-[60%] h-[80%] md:h-full  bg-black/10 gap-4 flex flex-col p-4'>
      <div className='w-full h-[10%] flex   '>  <input type="number" value={betValue>0?betValue:""} onChange={(e)=>setBetvalue(Number(e.target.value))} className='w-full p-4  rounded-md text-white text-md bg-blue-900/50' placeholder='00.00'  />
      
      { !betOn&&<div className='flex mb-1 flex-col gap-1 p-0.5 m-0.5'><button onClick={makeBetHalf} className='justify-center items-center flex  text-black p-2 cursor-pointer rounded-sm w-[100%] h-[50%] bg-white'>1/2x</button>
      <button onClick={makeBetDouble} className=' cursor-pointer rounded-sm justify-center items-center flex text-black w-[100%] h-[50%] bg-white p-2'>2x</button></div>}
      </div>
      <label htmlFor="noOfMines">Please enter the number of mines between 1 to 6</label>
       <input className='bg-black/50 border-1 border-white/40' type="number" name="noOfMines" id="NnoOfMines"  value={mines>0 && mines<6?mines:""} onChange={(e)=>setMines(Number(e.target.value))}/>

        <button onClick={cashOut}  className='w-full h-[10%] rounded-md bg-green-500  hover:bg-green-700 cursor-pointer'>{betValue>0&&

        betOn?'Cash Out':'Place Bet'  
}</button>
        <label htmlFor="profitShow">Total Profit:({(multiplier).toFixed(2)}x)</label>
        <input type="text" name='profitShow' readOnly  value={(betValue*multiplier).toFixed(2)} placeholder='00.00' className='w-full rounded-md  p-4  h-[10%] bg-blue-900/30' />
         
        </div>
      </div> 
      <div className='bg-white/10  w-[90%] col-span-1 px-4 flex justify-center items-center'> <div className='w-full  h-[95%] justify-center bg-black/20 gap-4 flex flex-col p-4'>
       
       <Tiles noOfMines={mines}/>
   

        </div></div>
    </div>
    </HomeContext.Provider></>
  )
}

//  Home
