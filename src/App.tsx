import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Blog.tsx'
import Blog from "./Blog.tsx";
import Profile from "./Profile.tsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Blog />
        <Profile />
    </>
  )
}

export default App
