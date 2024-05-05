import '../Sprites/Sprites.css';
import './PrincipalType.css';

const PrincipalType = () => {
  return (
    <div className="principal_type">
      <div className="pokemon-table type--bicho"></div>
      <div className="pokemon-datos">
          <p className='title-eficaz'>Eficaz</p>
          <span className='pokemon-eficaz'> 
            <div className="pokemon-datos-img type--bicho"></div>
          </span>
          <p className='title-debil'>Debil</p>
          <span className='pokemon-debil'></span>
          <p className='title-vulnerable'>Eficaz</p>
          <span className='pokemon-vulnerable'></span>
          <p className='title-inmune'>Debil</p>
          <span className='pokemon-inmune'></span>
      
      {/*   
        <div>
          <p className='pokemon-title-type'>Eficaz</p>
          <span className='pokemon-vulnerable'></span>
        </div>
        <div>
          <p className='pokemon-title-type'>Eficaz</p>
          <span className='pokemon-inmune'></span>
        </div> */}

      </div>
    </div>
  );
};


export { PrincipalType };