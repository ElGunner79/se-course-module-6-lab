import './App.css'
import Calculator from './components/Calculator';
import BigCats from './components/BigCats';
import Emoji from './components/Emoji';
import Greeting from './components/Greeting';


function App() {

  return (
    <>
      <Greeting name="Richard">
        <div>Welcome to Saturday Lab 6.</div>
      </Greeting>
      <br></br>
      <Emoji />
      <br></br>
      <BigCats />
      <br></br>
      <Calculator />
    </>
  )
}

export default App
