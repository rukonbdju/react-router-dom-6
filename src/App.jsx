import "./App.css";
import {
  Link,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import Home from "./Home/Home";
import Blogs from "./Blogs/Blogs";
import Login from "./Login/Login";
import About from "./About/About";
import HomeLayout from "./Layout/HomeLayout/HomeLayout";
import DashboardLayout from "./Layout/DashboardLayout/DashboardLayout";
import Users from "./Users/Users";
import Products from "./Products/Products";
import Orders from "./Orders/Orders";
import User from "./User/User";
import ProductDetails from "./ProductDetails/ProductDetails";
import ProductLayout from "./Layout/ProductLayout/ProductLayout";
import Phones from "./Phones/Phones";
import Phone from "./Phones/Phone";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Register from "./Register/Register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeLayout></HomeLayout>}>
          <Route index element={<Home></Home>}></Route>
          <Route path="/blogs" element={<Blogs></Blogs>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <DashboardLayout></DashboardLayout>
              </PrivateRoute>
            }
          >
            <Route index element={<Users></Users>}></Route>
            <Route path="users" element={<Users></Users>}></Route>
            <Route path="orders" element={<Orders></Orders>}></Route>
          </Route>
          <Route path="/products" element={<Products></Products>}></Route>
          <Route
            path="products/:id"
            element={<ProductDetails></ProductDetails>}
          ></Route>
          <Route path="users/:user" element={<User></User>}></Route>
          <Route path="/phones" element={<ProductLayout></ProductLayout>}>
            <Route index element={<Phones></Phones>}></Route>
            <Route path="/phones/:model" element={<Phone></Phone>}></Route>
            <Route
              path="*"
              element={
                <div>
                  This is 404<Link to="/">Go to home</Link>
                </div>
              }
            />
          </Route>
        </Route>
        <Route
          path="*"
          element={
            <h1>
              No match<Link to="/">Go to home</Link>
            </h1>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
