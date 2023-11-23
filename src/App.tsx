import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { TermsAgreementProvider } from "context/TermsAgreementContext";

export default function App() {
  return (
    <div>
      <TermsAgreementProvider>
        <Header></Header>
        <Outlet />
      </TermsAgreementProvider>
    </div>
  );
}
