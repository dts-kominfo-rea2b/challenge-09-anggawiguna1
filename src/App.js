import './App.css';
import Contact from './components/Contact';
import Header from './components/Header';

// Uncomment untuk memuat daftar kontak
import contacts from './data/contacts.json';

const App = () => {
  // Masukkan Header dan Contact ke dalam div App
  return (
    <div className="App">
      <div className='Container'>
        <Header/>
        {contacts.map((data,index) => {
          return <Contact key={index} data={data}/>
        })}
      </div>
    </div>
  );
}

export default App;
