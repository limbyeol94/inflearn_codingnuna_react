import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode> // - 2번씩 호출되게 함 (많은 요소의 확인)
  <AppClass /> // Class 컴포넌트 사용
  // <App /> // Function 컴포넌트 사용
  // </StrictMode>,
)
