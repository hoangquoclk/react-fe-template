import './theme/index.less'
import './theme/font.less'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Home } from '@/pages/Home'
import { NotFound } from '@/pages/NotFound'

function About() {
  return <>About</>
}

function Contact() {
  return <>Contact</>
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
