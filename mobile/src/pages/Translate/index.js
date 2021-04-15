import React from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import styles from './styles';

function Translate() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.text}>
          O coronavírus é uma família de vírus que causa infecções respiratórias e provoca a doença chamada COVID-19, que foi identificada no ano passado em Wuhan, China. No dia 11 de março de 2020, essa doença foi classificada como PANDEMIA pela Organização Mundial da Saúde (OMS).
          Isso quer dizer que ela se espalhou por uma grande região do mundo, infectando milhares de pessoas e acabou chegando aqui na região Amazônica também. Por isso, temos que nos cuidar e evitar que essa doença se espalhe no Rio Negro.
      </Text>
        <View style={styles.languages}>
          <Text style={styles.languageCurrent} >Português</Text>
          <Text style={styles.languageCurrent} >para</Text>
          <Picker
            selectedValue='Selecione uma lingua'
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
          >
            <Picker.Item label="Baniwa" value="baniwa" />
          </Picker>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Toque aqui para traduzir"
        />
      </View>
    </ScrollView>
  )
}

export default Translate;