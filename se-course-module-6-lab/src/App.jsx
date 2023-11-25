import './App.css'
import Calculator from './components/Calculator';
import BigCats from './components/BigCats';
import Emoji from './components/Emoji';
import Greeting from './components/Greeting';
function App() {
  return (
    <>
      <h3>Lab 1</h3>
      <Greeting name="Richard">
        <div>Welcome to Saturday Lab 6.</div>
      </Greeting>
      <br />
      <h3>Lab 2</h3>
      <Emoji />
      <br />
      <h3>Lab 3/4/5</h3>
      <BigCats />
      <br />
      <h3>Lab 6</h3>
      <Calculator />
    </>
  )
}
export default App