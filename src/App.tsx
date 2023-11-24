import { Outlet } from "react-router-dom";
import { TermsAgreementProvider } from "./context/TermsAgreementContext";
import Header from "./components/commonHeader/CommonHeader";

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
