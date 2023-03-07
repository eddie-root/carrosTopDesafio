import './styles.css';

const Searchbar = () => {
    return (
        <div className='car-busca-container'>
            <div className="input-group">
                <input type="search" className="form-control rounded" placeholder="Digite sua busca" aria-label="Search" aria-describedby="search-addon" />
                <button type="button" className="btn btn-primary">BUSCAR</button>
            </div>
        </div>
    );
}

export default Searchbar;