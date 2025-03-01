import './theme/index.less'
import './theme/font.less'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Home } from '@/pages/Home'
import { ErrorBoundary } from 'react-error-boundary'
import { NotFound } from '@/pages/NotFound'
import { FallbackError } from './components/FallbackError'

const a = ''

function About() {
  return <>About</>
}

function Contact() {
  return <>Contact</>
}

function App() {
  return (
    <ErrorBoundary FallbackComponent={FallbackError}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  )
}

export default App
