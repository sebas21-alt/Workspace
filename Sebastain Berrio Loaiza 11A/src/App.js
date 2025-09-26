import logo from './logo.svg';
import  './App.css';
import Footer from './Footer';
import Lista from './Lista';


function App() {
  let estudiantes = [
    { nombre: "Peranito", apellido: "Perez" },
    { nombre: "fulanito", apellido: "de tal" },
    { nombre: "manganito", apellido: "rodriguez" },
  ];
  return (
    <div className="App">
     <Lista listaestudiantes={estudiantes}/>
     <Footer/>
    </div>
  );
}

export default App;
