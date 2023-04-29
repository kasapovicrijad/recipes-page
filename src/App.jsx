import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import Recipes from "./pages/Recipes";
import About from "./pages/About";
import RecipeForm from "./pages/RecipeForm";

import { Router , Route, Routes} from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/recipes" element={<Recipes/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/recipeform" element={<RecipeForm/>}/>

        </Routes>
      </div>
    
    </div>
  );
}

export default App;
