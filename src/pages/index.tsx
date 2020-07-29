import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import SpellCard from '../components/SpellCard';
import spells from '../assets/data/5e-database/src/5e-SRD-Spells.json';

const spell_names : string[] = [
  'druidcraft',
  'message',
  'vicious-mockery',
  'mage-hand',
  'cure-wounds',
  'detect-magic',
  'tiny-hut',
  'identify',
  'thunderwave',
  'heat-metal',
  'healing-word',
  'shatter'
];

const SpellBook = styled.div`
  display: grid;
  grid-gap: 1px;
`;

const Home: FunctionComponent = () => (
  <SpellBook>
    {spell_names.map((s, i) => <SpellCard key={i} { ... spells.find(({ index }) => index === s) }/>)}
  </SpellBook>
);

export default Home;
