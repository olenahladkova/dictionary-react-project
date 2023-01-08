import './App.css';
import Dictionary from './Dictionary'

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className='text-center'>
          <h1>Definition Dictionary</h1>
          <hr />
          <h3>What word are we looking for?</h3>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className='text-center'><a href='https://github.com/olenahladkova/dictionary-react-project'>GitHub Repository</a></footer>
      </div>
    </div>
  );
}

export default App;
