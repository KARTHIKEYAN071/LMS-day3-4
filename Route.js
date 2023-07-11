import { Route, Routes } from 'react-router-dom'
import MyApp from './App'
import SignUp from './SignUp'
import std from './std/student'
import Std from './std/student'
// import App from './next'
// import Update from './update'
// import Delete from './Delete'



function Routing() {
  return (
    <>
    <Routes>
    {/* <Route path="/" element={<Std/>}/> */}
    <Route path="/" element={<MyApp/>}/>
    {/* <Route path="/delete" element={<Delete/>}/>
    <Route path="/Login" element={<MyApp/>}/>
    <Route path="/Update" element={<Update/>}/>
    <Route path="/Update" element={<Update/>}/> */}
    <Route path="/SignUp" element={<SignUp/>}/>
    </Routes>
    </>
  )
}

export default Routing