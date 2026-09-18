import { HAJOLISTA } from './adat'
import './App.css'
import Hajok from './component/Hajok'

function App() {
 

  return (
    <> {/* Fragment */}
      <header>
        <h1>React</h1>
      </header>
      <article>
        <Hajok lista={HAJOLISTA}/>
      </article>
      <footer>
        <p>Bernáth Milán</p>
      </footer>
    </>
      
  )
}

export default App
