import '../Sprites/Sprites.css';
import './PrincipalType.css';

const PrincipalType = ({ selectedType, updateStateModal, activeTypeRelations }) => {
  function openModal() {
    updateStateModal('open');
  }

  return (
    <div className="principal_type">
        <div className={`pokemon-table type--${selectedType}`} onClick={() => { openModal() }}></div>
        <div className="tabla-relacion">
          <p className='title-tabla title--eficaz permanent-marker-regular' >Eficaz</p>
          <span className='pokemon-type-background pokemon-eficaz'>
            {
              activeTypeRelations.relacion[0].eficaz.map(type => {
                return <div key={type} className={`pokemon-img pokemon-table type--${type}`} ></div>
              })
            }
          </span>
          <p className='title-tabla title--debil permanent-marker-regular' >Debil</p>
          <span className='pokemon-type-background pokemon-debil'>
            {
              activeTypeRelations.relacion[0].debil.map(type => {
                return <div key={type} className={`pokemon-img pokemon-table type--${type}`} ></div>
              })
            }
          </span>
          <p className='title-tabla title--vulnerable permanent-marker-regular' >Vulnerable</p>
          <span className='pokemon-type-background pokemon-vulnerable'>
            {
              activeTypeRelations.relacion[0].vulnerable.map(type => {
                return <div key={type} className={`pokemon-img pokemon-table type--${type}`} ></div>
              })
            }
          </span>
          <p className='title-tabla title--inmune permanent-marker-regular' >Inmune</p>
          <span className='pokemon-type-background pokemon-inmune'>
            {
              activeTypeRelations.relacion[0].inmune.map(type => {
                return <div key={type} className={`pokemon-img pokemon-table type--${type}`} ></div>
              })
            }
          </span>

        </div>
      
  
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
  );
};


export { PrincipalType };