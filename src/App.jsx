
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './shered/Navbar'
import Footer from './shered/Footer'
import ServiceSection from './pages/homePage/ServiceSection'
import { useState } from 'react'

function App() {
  const [number,setNumber] = useState(0)
  const [array,setArray]=useState([])
  const calculate=(data)=>{
     setNumber(number=>number+1)
     if(data){
      setArray(prevArray=>[...prevArray,data])
     }
    }
    console.log(array)
  return (
    <div className='h-[100%] '>
      <div className='pt-1 lg:-mt-0'>
      <Navbar number={number}/>
      </div>
      <div className='h-[60%] lg:w-[80%] lg:mx-auto mt-2 lg:pt-8'>
      <Outlet context={{number,array,calculate}}/>
      </div>
      <ServiceSection/>
      <Footer/>
    </div>
  )
}

export default App
