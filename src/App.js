import { React } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./assets/styles/globalStyle";
import { UserContextProvider } from "./context/UserContext";
import DepositPage from './pages/DepositPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage'
import WalletPage from './pages/WalletPage';
import DrawPage from './pages/DrawPage'
function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <UserContextProvider>
          <Routes>
            <Route path='/' element={<SignInPage />} />
            <Route path='/sign-up' element={<SignUpPage />} />
            <Route path='/wallet' element={<WalletPage />} />
            <Route path='/deposit' element={<DepositPage />} />
            <Route path='/draw' element={<DrawPage />} />
          </Routes>
        </UserContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
