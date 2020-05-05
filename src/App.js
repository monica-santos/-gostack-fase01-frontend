import React from 'react'
import Header from './components/Header'
import './App.css'
export default function App() {
  const projects = ['Desenvolvimento de app', 'Front-end web']
  return (
    <>
      <Header title='Projects' />
      <ul>
        {projects.map((project, i) => (
          <li key={i}>{project}</li>
        ))}
      </ul>
    </>
  )
}
