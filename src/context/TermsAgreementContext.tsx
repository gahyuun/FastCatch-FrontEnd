import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

const initialState: TermsAgreementContextProps = {
  isAllCheck: false,
  setIsAllCheck: () => {},
};

export const TermsAgreementContext =
  createContext<TermsAgreementContextProps>(initialState);

export function TermsAgreementProvider({
  children,
}: TermsAgreementProviderProps) {
  const [isAllCheck, setIsAllCheck] = useState(false);

  return (
    <TermsAgreementContext.Provider value={{ isAllCheck, setIsAllCheck }}>
      {children}
    </TermsAgreementContext.Provider>
  );
}

interface TermsAgreementContextProps {
  isAllCheck: boolean;
  setIsAllCheck: Dispatch<SetStateAction<boolean>>;
}

interface TermsAgreementProviderProps {
  children: ReactNode;
}
