import './App.css'
import Button from './components/Button'
import Card from './components/Card'
import Card02 from './components/Card02'
import Saludo from './components/Saludo'

function App() {
  return (
    <main>
      <h1>Clase Live</h1>
      <Button texto={'texto por medio de props'} numero={100}/>
      <Card>
        <h2>Titulo desde children</h2>
      </Card>
      <Saludo nombre={'Juan'}>
        <>Hello</>
      </Saludo>
      <Card02 textoBoton={'texto01'}>
        <p>Contenido del Card 1</p>
      </Card02>
      <Card02 textoBoton={'texto02'}>
        <p>Contenido del Card 1</p>
      </Card02>
    </main>
  )
}

export default App
