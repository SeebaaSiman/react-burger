import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";

const Home = lazy(() => import("../../views/Home"));
const Menu = lazy(() => import("../../views/Menu"));
const Product = lazy(() => import("../../views/Product"));
const Login = lazy(() => import("../../views/Login"));
const Dashboard = lazy(() => import("../../views/admin/Dashboard"));
const NotFound = lazy(() => import("../../views/NotFound"));
const Payment = lazy(() => import("../../views/Payment"));
const LayoutAdmin = lazy(() => import("../../views/admin/LayoutAdmin"));
const Customers = lazy(() => import("../../views/admin/Customers"));
const AdminProducts = lazy(() => import("../../views/admin/AdminProducts"));
const AddProducts = lazy(() => import("../../views/admin/AddProducts"));
const Settings = lazy(() => import("../../views/admin/Settings"));
const ToastContainer = lazy(() => import("../../components/toast/ToastContainer"));
const ProtectedRoute = lazy(() => import("./ProtectedRoute"));
const Loader = lazy(() => import("../../components/loader/Loader"));

export default function AppRoutes() {
  return (
    <Suspense fallback={<Loader />}>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/product/:id' element={<Product />} />
          <Route path='/login' element={<Login />} />

          <Route element={<ProtectedRoute />}>
            <Route path='/payment' element={<Payment />} />

            <Route path='/admin' element={<LayoutAdmin />}>
              <Route index element={<Dashboard />} />
              <Route path='customers' element={<Customers />} />
              <Route path='admin-products' element={<AdminProducts />} />
              <Route path='admin-products/:id' element={<Product />} />
              <Route path='add-products' element={<AddProducts />} />
              <Route path='settings' element={<Settings />} />
            </Route>
          </Route>

          <Route path='*' element={<NotFound />} />
        </Routes>
        <ToastContainer />
      </Router>
    </Suspense>
  );
}
