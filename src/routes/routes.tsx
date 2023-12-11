import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "../compoment/navbar/nav";


const routes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default routes