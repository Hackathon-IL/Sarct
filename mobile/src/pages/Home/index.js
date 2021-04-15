import React from 'react';

import { Container, Item } from './styles';
import bombeiro from '../../assets/bo.jpg';
import medico from '../../assets/doutor.jpg';
import police from '../../assets/police.jpg';
import banco from '../../assets/banco.png';
import internado from '../../assets/internado.jpg';
import familia from '../../assets/familia.png';
function Home() {

  const data = [
    {
      image: medico,
      name: 'medico'
    },
    {
      image: bombeiro,
      name: 'bombeiro'
    },
    {
      image: police,
      name: 'police'
    },
    {
      image: banco,
      name: 'banco'
    },
    {
      image: internado,
      name: 'internado'
    },
    {
      image: familia,
      name: 'familia'
    },


  ]
  return <Container
    data={data}
    numColumns={2}
    flexBasis={0}
    keyExtractor={item => item.name}
    renderItem={({ item }) => (
      <Item source={item.image} />
    )}
  />;
}

export default Home;