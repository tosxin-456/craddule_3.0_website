// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/home";
import About from "./pages/about";
import Features from "./pages/features";
import Pricing from "./pages/pricing";
import TermsAndConditions from "./pages/terms";
import PrivacyPolicy from "./privacy";
import UserTickets from "./pages/user tickets";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
        </Route>
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/tickets/:ticketRef" element={<UserTickets />} />
      </Routes>
    </BrowserRouter>
  );
}
