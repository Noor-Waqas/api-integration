import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "../compoment/navbar/nav";
import PostApi from "../post/postApi";
import Featch from "../compoment/about/about";
import Delete from "../compoment/deleteApi";


const routes = () => {
  return (
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path="/post" element={<PostApi />}/>
        <Route path="/fetch" element={<Featch />}/>
        <Route path="/delete" element={<Delete />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default routes