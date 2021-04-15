import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { Container, Title } from './styles';


function Header({ scene }) {
  const route = useRoute();
  const { goBack } = useNavigation();
  const title = scene?.descriptor?.options?.title;

  function Previous() {
    return (
      <Container>
        <MaterialIcons
          onPress={goBack}
          name="keyboard-arrow-left"
          size={40}
          color="black"
        />
        <Title>{title}</Title>
      </Container>
    )
  }

  return title === 'Notícias'
    ? (
      <Container>
        <Title>{title}</Title>
      </Container>
    )
    : <Previous />;
};

export default Header;