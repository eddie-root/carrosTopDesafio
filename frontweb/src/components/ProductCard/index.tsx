import ProductImg from 'assets/images/car-card1.png';
import './styles.css';

const ProductCard = () => {

    return (
        <>
            <div className='product-container'>
                <div className='car-busca-container'>
                    <div>
                        <div className="input-group">
                            <input type="search" className="form-control rounded" placeholder="Digite sua busca" aria-label="Search" aria-describedby="search-addon" />
                            <button type="button" className="btn btn-primary">BUSCAR</button>
                        </div>
                    </div>
                </div>
                <div className='card-top-content'>
                    <img src={ProductImg} alt="Audi Supra TT" />
                    <div className='card-text-content'>
                        Audi Supra TT
                    </div>
                    <div className='card-details-content'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, nisi
                    </div>
                    <button className='button-compra'>
                        COMPRA
                    </button>
                </div>
            </div>
        </>
    );
}

export default ProductCard;