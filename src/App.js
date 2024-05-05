// import logo from './logo.svg';
import { useState } from 'react';
import { PrincipalType } from './components/PrincipalType/PrincipalType';
import { Modal } from './components/Modal/Modal';
import pokemon from './resource/pokemon.json';
import './App.css';

function App() {
  const [selectedType, setSelectedType] = useState('acero');
  const [stateModal, setStateModal] = useState('');
  const [activeTypeRelations, setActiveTypeRelations] = useState(pokemon.data.pokemon[0]);

  const updateSelectedType = (type) => {
    setSelectedType(type);
  }

  const updateStateModal = (state) => {
    setStateModal(state);
  }

  const updateActiveTypeRelations = (pokemon) => {
    let newPokemon = activeTypeRelations;
    newPokemon = pokemon;
    setActiveTypeRelations(newPokemon);
    console.log(newPokemon);
  }

  return (
    <div className="App">
      <Modal
        updateSelectedType={updateSelectedType}
        pokemon={pokemon}
        stateModal={stateModal}
        updateStateModal={updateStateModal}
        updateActiveTypeRelations={updateActiveTypeRelations} />
      <PrincipalType selectedType={selectedType} updateStateModal={updateStateModal} activeTypeRelations={activeTypeRelations} />
    </div>
  );
}

export default App;
