import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Provider, useDispatch, useSelector} from 'react-redux'
import PlainCard from './components/PlainCard'
import {Card} from 'antd'

function App() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  return (
    <>
      <PlainCard></PlainCard>
      <Card title='Antd Card' style={{width: 300}}>
        <p>Content</p>
        <p>Content...</p>
      </Card>
    </>
  )
}

export default App
