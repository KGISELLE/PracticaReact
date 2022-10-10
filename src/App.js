import logo from './logo.svg';
import lago from './assets/img/lago.jpg';
import mountain from './assets/img/mountain.jpg';
import playa from './assets/img/playa.jpg';

import './App.css';

function App() {
  return (
    <>
      <div className="logo-wrap">
        <img className="logo-img" src={logo} alt=""></img>
      </div>
      <h1 id="text-title">Bienvenido!!!</h1>
      <nav className="menu-wrap">
        <ul>
          <li>Home</li>
          <li>Contacto</li>
          <li>Acerca de</li>
          <li>Servicios</li>
          <li>Personal</li>
        </ul>
      </nav>
      <section>
        <div className="card-wrap">
          <div className="card">
            <div className='img-wrap'>
            <img src={mountain}></img>
            </div>
            <h2>Montañas</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div className="card">
            <div className='img-wrap'>
              <img src={lago}></img>
            </div>
            <h2>Lagos</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div className="card">
            <div className='img-wrap'>
              <img src={playa}></img>
            </div>
            <h2>Playas</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
