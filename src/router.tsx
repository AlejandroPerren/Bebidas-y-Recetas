import { BrowserRouter, Route, Routes } from "react-router-dom"
import { IndexPage } from "./pages/IndexPage"
import { FavoritePage } from "./pages/FavoritePage"
import { Layout } from "./layouts/Layout"


export const AppRouter = () => {

  return (
    <BrowserRouter>
    <Routes>
        <Route element={<Layout/>}>       
        <Route path="/" element={<IndexPage/>} index />
        <Route path="/favoritos" element={<FavoritePage/>} />
        </Route>
 
    </Routes>
    </BrowserRouter>    

  )
}
