import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, SignInPage, SignUpPage, Pacients, PacientsList } from "../pages";
import { AuthLayout, MainLayout, FormLayout } from "../layouts";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/signin" element={<SignInPage />} />          
        </Route>
        <Route element={<FormLayout />}>          
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/pacients" element={<Pacients />} />
          <Route path="/pacientslist" element={<PacientsList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}