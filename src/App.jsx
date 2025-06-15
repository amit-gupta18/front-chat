import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import toast, { ToastBar, Toaster } from 'react-hot-toast'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <div className='dark:bg-red-400 dark:text-white bg-green-500 text-black'>This is App . jsx </div>
        <button onClick={() => toast.success('this is a toast message!')} className='bg-blue-500 text-white p-2 rounded-lg m-2'>
          Click to Toast
        </button>
      </div>
    </>
  )
}

export default App
