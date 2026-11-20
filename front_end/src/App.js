import Header from './layout/Header';
import Footer from './layout/Footer';
import Main from './components/Main/Main';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Main />
      </main>
      <Footer />
    </div>
  );
}

export default App;