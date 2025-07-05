import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Concepts from './pages/Concepts';
import Projects from './pages/Projects';
import Team from './pages/Team';
import Partnerships from './pages/Partnerships';
import Contact from './pages/Contact';
import { Toaster } from '@/components/ui/toaster';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/conceitos" element={<Concepts />} />
          <Route path="/projetos" element={<Projects />} />
          <Route path="/equipe" element={<Team />} />
          <Route path="/parcerias" element={<Partnerships />} />
          <Route path="/contato" element={<Contact />} />
        </Routes>
      </Layout>
      <Toaster />
    </Router>
  );
}

export default App;