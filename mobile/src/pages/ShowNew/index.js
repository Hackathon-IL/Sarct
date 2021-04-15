import React from 'react';

import {
  Container,
  Image,
  NewContainer,
  DateTime,
  Title,
  TextContainer,
  Text,
  TranslateContainer,
} from './styles';
import BackgroundNew from '../../assets/Coronavirus.png';

export default function ShowNew() {
  return (
    <Container>
      <Image source={BackgroundNew} />
      <NewContainer>
        <TextContainer>
          <DateTime>14/04/2021 23:18</DateTime>
          <Title>Coronavírus (COVID-19) Tome cuidado, parente!</Title>
          <Text>    O coronavírus é uma família de vírus que causa infecções respiratórias e provoca a doença chamada COVID-19, que foi identificada no ano passado em Wuhan, China. No dia 11 de março de 2020,
          essa doença foi classificada como PANDEMIA pela Organização, Mundial da Saúde (OMS). Isso quer dizer que ela se espalhou por uma grande região do mundo, infectando milhares de pessoas e acabou
          chegando aqui na região Amazônica também. Por isso, temos que nos cuidar e evitar que essa doença se espalhe no Rio Negro.</Text>
          <Text>    Atualmente, a transmissão ocorre principalmente de uma pessoa para outra. É como uma gripe, o contágio acontece da mesma forma - através de gotículas que entram em contato com a boca,
          nariz e olhos, entrando no sistema respiratório. Os sintomas podem aparecer entre 1 e 12 dias após a exposição ao vírus.</Text>
          <Text>    Caso sinta febre e tosse, fique em casa por pelo menos 14 dias para não transmitir a doença. E não compartilhe utensílios e nem tenha contato físico com amigos e familiares. Caso sinta
          dificuldades para respirar, procure o hospital ou unidade básica de saúde mais próxima de sua casa. Procure os serviços de saúde somente se você faz algum tratamento que não pode ser interrompido,
          ou se estiver realmente com uma doença grave. Os hospitais e unidades básicas de saúde são os lugares mais propícios para adquirir qualquer doença contagiosa, inclusive o coronavírus.</Text>
        </TextContainer>
      </NewContainer>
    </Container>
  );
}