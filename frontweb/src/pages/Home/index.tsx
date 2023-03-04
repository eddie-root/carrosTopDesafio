import './styles.css';
import { ReactComponent as MainImage } from 'assets/images/car-header1.svg';

const Home = () => {
  return (

    <div className="home-container">
      <div className="base-card home-card">
        <div className='home-content-container'>
          <h2>O carro perfeito para você</h2>
          <p>Conheça nossos carros e dê mais um passo na realização do seu sonho</p>
        </div>
        <div className='home-image-content'>
          <MainImage />
        </div>
      </div>
      <div className="home-button-container">
        <button>VER CATÁLOGO</button>
        <p>Comece agora a navegar</p>
      </div>

    </div>

  );
};

export default Home;
