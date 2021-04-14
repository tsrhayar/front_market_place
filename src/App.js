import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./Components/Home";
import Login from "./Components/Login";
import Registre from "./Components/Registre";
import Admin from "./Components/Admin/Admin";
import NavBar from "./Components/NavBar";
import Todos from "./Components/Todos";

import SuperAdmin from "./Components/SuperAdmin/SuperAdmin";

import GestionAdmin from "./Components/SuperAdmin/GestionAdmin";
import AddAdmin from "./Components/SuperAdmin/AddAdmin";
import ActiveAdmin from "./Components/SuperAdmin/ActiveAdmin";
import BlockAdmin from "./Components/SuperAdmin/BlockAdmin";
import DeleteAdmin from "./Components/SuperAdmin/DeleteAdmin";

import GestionLivreur from "./Components/SuperAdmin/GestionLivreur";
import AddLivreur from "./Components/SuperAdmin/AddLivreur";
import ActiveLivreur from "./Components/SuperAdmin/ActiveLivreur";
import BlockLivreur from "./Components/SuperAdmin/BlockLivreur";
import DeleteLivreur from "./Components/SuperAdmin/DeleteLivreur";

import Seller from "./Components/Seller/Seller";

import AddProduct from "./Components/Products/AddProduct";
import EditProduct from "./Components/Products/EditProduct";
import ProductPage from "./Components/Products/ProductPage";
import DeleteProduct from "./Components/Products/DeleteProduct";

import FilterByPriceLTH from "./Components/Filtre/FilterByPriceLTH";
import FilterByPriceHTL from "./Components/Filtre/FiltreByPriceHTL";

import Card from "./Components/Products/Card";
import AddToCard from "./Components/Products/AddToCard";
import DeleteFromCard from "./Components/Products/DeleteFromCard";

import PrivateRoute from "./hocs/PrivateRoute";
import UnPrivateRoute from "./hocs/UnPrivateRoute";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <div className="container">
          <Route exact path="/" component={Home} />
          <Route exact path="/productpage" component={ProductPage} />
          <Route exact path="/bypricelth" component={FilterByPriceLTH} />
          <Route exact path="/bypricehtl" component={FilterByPriceHTL} />

          <UnPrivateRoute exact path="/login" component={Login} />
          <UnPrivateRoute exact path="/registre" component={Registre} />
          <PrivateRoute path="/todos" roles={["superadmin", "admin", "seller"]} component={Todos} />
          <PrivateRoute path="/admin" roles={["superadmin", "admin"]} component={Admin} />
          <PrivateRoute path="/superadmin" roles={["superadmin"]} component={SuperAdmin} />
          <PrivateRoute path="/seller" roles={["superadmin", "seller"]} component={Seller} />

          <PrivateRoute path="/gestionadmin" roles={["superadmin"]} component={GestionAdmin} />
          <PrivateRoute path="/addadmin" roles={["superadmin"]} component={AddAdmin} />
          <PrivateRoute path="/activeadmin/:id" roles={["superadmin"]} component={ActiveAdmin} />
          <PrivateRoute path="/blockadmin/:id" roles={["superadmin"]} component={BlockAdmin} />
          <PrivateRoute path="/deleteadmin/:id" roles={["superadmin"]} component={DeleteAdmin} />

          <PrivateRoute exact roles={["user"]} path="/card" component={Card} />
          <PrivateRoute exact roles={["user"]} path="/addtopannier/:id" component={AddToCard} />

          <PrivateRoute path="/gestionlivreur" roles={["superadmin"]} component={GestionLivreur} />
          <PrivateRoute path="/addlivreur" roles={["superadmin"]} component={AddLivreur} />
          <PrivateRoute
            path="/activelivreur/:id"
            roles={["superadmin"]}
            component={ActiveLivreur}
          />
          <PrivateRoute path="/blocklivreur/:id" roles={["superadmin"]} component={BlockLivreur} />
          <PrivateRoute
            path="/deletelivreur/:id"
            roles={["superadmin"]}
            component={DeleteLivreur}
          />

          <PrivateRoute
            path="/addproduct"
            roles={["superadmin", "admin", "seller"]}
            component={AddProduct}
          />

          <PrivateRoute
            path="/editproduct/:id"
            roles={["superadmin", "admin", "seller"]}
            component={EditProduct}
          />

          <PrivateRoute path="/deletefrompannier/:id" roles={["user"]} component={DeleteFromCard} />
          <PrivateRoute path="/deleteproduct/:id" roles={["seller"]} component={DeleteProduct} />
        </div>
      </Router>
    </div>
  );
}

export default App;
