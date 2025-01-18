import './App.css'
import MyComponent from './Components/MyComponent'

function App() {

  return (
    <div>
      {/* CSS Global */}
      <h1>React com CSS</h1>
      {/* CSS de Componente */}
      <MyComponent/>
      <p className="my-comp-paragraph">Este tbm é do componente</p>
      <p>Esse paragráfo é do App.js</p>
    </div>
  )
}

export default App  