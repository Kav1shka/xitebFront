import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import footer from '../views/Footer'
import LogisticsServices from '../views/LogisticsServices'
import views from '../views/Stats Section'
// import Category from './views/Category'
// import Electronics from './views/Electronics'
// import Fashion from './views/Fashion'
// import Vehicle from './views/Vehicle'

function App() {
  
  return (
    <>
      <Routes>
      <Route path="/" element = {<footer/>}/>
      <Route path="/" element = {<LogisticsServices/>}/>
      <Route path="/" element = {<views/>}/>
      {/* <Route path="/user/register" element = {<Register/>}/>
      <Route path='/user/login' element = {<Login/>}/>
      <Route path='/user/login/Category' element = {<Category/>}/>
      <Route path="/Category/Electronics" element = {<Electronics/>}/>
      <Route path='/Category/Fashion' element = {<Fashion/>}/>
      <Route path='/Category/Vehicle' element = {<Vehicle/>}/> */}
      </Routes>
    </>
  )
}

export default App
