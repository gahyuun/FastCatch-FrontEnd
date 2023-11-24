import { Outlet } from "react-router-dom";
import { TermsAgreementProvider } from "./context/TermsAgreementContext";
import Header from "./components/Header";

export default function App() {
  return (
    <div>
      <TermsAgreementProvider>
        <Header />
        <Outlet />
      </TermsAgreementProvider>
    </div>
  );
}
