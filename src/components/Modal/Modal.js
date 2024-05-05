import { useEffect } from 'react';
import '../Sprites/Sprites.css';
import './Modal.css';


const Modal = ({ updateSelectedType, pokemon, stateModal, updateStateModal, updateActiveTypeRelations }) => {

  function pokemonTypesList() {
    //console.log(pokemon.data.pokemon);
    return pokemon.data.pokemon.map(poke =>
      <div className={`pokemon-table type--${ poke.tipo }`} key={poke.tipo} onClick={() => { selectPokemonType(poke) }}></div>
    );
  }

  function selectPokemonType(poke) {
    updateSelectedType(poke.tipo);
    updateStateModal('');
    updateActiveTypeRelations(poke);
  }

  useEffect(() => {
    //pokemonTypesList();
  }, []);

  return (
    <div className={`modal ${ stateModal }`}>
      <div className="modal-content">
        <h1>Selecciona un tipo de Pokemon</h1>
        <div className="options">
          {pokemonTypesList()}
        </div>
      </div>
    </div>
  );
};

export { Modal };