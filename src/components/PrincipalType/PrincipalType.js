import '../Sprites/Sprites.css';

const PrincipalType = ({ selectedType, updateStateModal, activeTypeRelations }) => {
  function openModal() {
    updateStateModal('open');
  }

  return (
    <>
      <div className="principal_type">
        <div className={`pokemon-table type--${selectedType}`} onClick={() => { openModal() }}></div>
        <div className="tabla-relacion">
          <p>Tipo</p>
          <p>{ activeTypeRelations.tipo }</p>
          <p>Eficaz</p>
          <ul>
            {
              activeTypeRelations.relacion[0].eficaz.map(type => {
                return <li key={type}><div className={`pokemon-table type--${type}`}></div></li>
              })
            }
          </ul>
        </div>
      </div>
    </>
  );
};

export { PrincipalType };