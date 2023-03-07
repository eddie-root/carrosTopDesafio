import ProductImg from 'assets/images/car-card1.png';
import './styles.css';

const ProductCard = () => {

    return (
        <>
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
        </>
    );
}

export default ProductCard;