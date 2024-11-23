
import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Login from './pages/login/Login';
import RecuperacaoSenha from './components/FormRecuperacaoSenha';
import CadastroLocador from './pages/cadastroLocador';
import CadastroEmbarcacoes from './components/FormCadastroEmbarcacao';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import CompletarCadastro from './components/FormCompletarCadastro';


function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/complete" element={<CompletarCadastro />} />
          <Route path="/recuperacaoSenha" element={<RecuperacaoSenha />} />
          
          <Route path="/cadastroLocador" element={<CadastroLocador />} />
          <Route element={<ProtectedRoute />}>
          <Route path="/cadastroEmbarcacoes" element={<CadastroEmbarcacoes />} />
          </Route>


          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );

}

export default App