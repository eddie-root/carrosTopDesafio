
import ProductCard from 'components/ProductCard';
import Searchbar from 'components/Searchbar';
import './styles.css';

const Catalog = () => {
  return (
    <div className='container my-4'>
      <Searchbar />
      <div className='row'>
        <div className='col-sm-6 col-md-6 col-lg-4'>
          <ProductCard />
        </div>
        <div className='col-sm-6 col-md-6 col-lg-4'>
          <ProductCard />
        </div>
        <div className='col-sm-6 col-md-6 col-lg-4'>
          <ProductCard />
        </div>
        <div className='col-sm-6 col-md-6 col-lg-4'>
          <ProductCard />
        </div>
        <div className='col-sm-6 col-md-6 col-lg-4'>
          <ProductCard />
        </div>
        <div className='col-sm-6 col-md-6 col-lg-4'>
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default Catalog;
