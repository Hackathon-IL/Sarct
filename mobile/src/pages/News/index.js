import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import BackgroundNew from '../../assets/Coronavirus.png';

function News() {
  const { navigate } = useNavigation();

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.border}>
        <Picker
          selectedValue='Selecione uma lingua'
          style={styles.picker}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="Português" value="pt" />
          <Picker.Item label="sateré-mawé" value=" sateré-mawé" />
          <Picker.Item label="nheengatu" value="nheengatu" />
        </Picker>
      </View>

      <TouchableOpacity onPress={() => navigate('ShowNews')} style={styles.card}>
        <View style={styles.tittle}>
          <View style={styles.detail} />
          <Text style={styles.tittleText}>Coronavírus (COVID-19) Tome cuidado, parente!</Text>
        </View>
        <Text style={styles.hour}>13/04/2021 19:44</Text>
        <View style={styles.new}>
          <Text style={styles.text}>O coronavírus é uma família
          de vírus que causa infecções
          respiratórias e provoca a
          doença chamada COVID-19,
          que foi identif...</Text>
          <Image style={styles.image} source={BackgroundNew} />
        </View >
        <View style={styles.line} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigate('ShowNews')} style={styles.card}>
        <View style={styles.tittle}>
          <View style={styles.detail} />
          <Text style={styles.tittleText}>Cartilha de informe ao covid</Text>
        </View>
        <Text style={styles.hour}>13/04/2021 19:44</Text>
        <View style={styles.new}>
          <Text style={styles.text}>"lorem ipsum dolor sit amet consectetur adipiscing elit sagittis velit torquent class ornare lobortis litora a duis lectus congue porttitor</Text>
          <Image style={styles.image} source={BackgroundNew} />
        </View >
        <View style={styles.line} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigate('ShowNews')} style={styles.card}>
        <View style={styles.tittle}>
          <View style={styles.detail} />
          <Text style={styles.tittleText}>Cartilha de informe ao covid</Text>
        </View>
        <Text style={styles.hour}>13/04/2021 19:44</Text>
        <View style={styles.new}>
          <Text style={styles.text}>"lorem ipsum dolor sit amet consectetur adipiscing elit sagittis velit torquent class ornare lobortis litora a duis lectus congue porttitor</Text>
          <Image style={styles.image} source={BackgroundNew} />
        </View >
        <View style={styles.line} />
      </TouchableOpacity>
    </ScrollView>
  )
}

export default News;