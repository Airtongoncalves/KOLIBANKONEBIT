import React, { useState } from 'react';
import { Container, DefaultText, Logo, RowContainer, UserPhotoContainer, UserPhotoImage } from './styled';
import {Ionicons,MaterialIcons} from '@expo/vector-icons';
import { View } from 'react-native';

const MoneyBalance = () => {

  const [seeMoney,setSeeMoney] = useState(false);

  const handleToggleSeeMoney = () => {
    setSeeMoney(!seeMoney);
  }

  return (
    <Container>
        <View>
          <DefaultText>Saldo Atual</DefaultText>
          {
            !seeMoney ? (
              <RowContainer>
                <DefaultText>***</DefaultText>
                <Ionicons 
                  name="eye-off-outline" 
                  size={40} 
                  color="#e53d41"
                  style={{  marginLeft: 10 }}
                  onPress={handleToggleSeeMoney}
                />
              </RowContainer>
            ) :(
              <RowContainer>
              <DefaultText>R$ 1250.00</DefaultText>
              <Ionicons 
                  name="eye-off-outline" 
                  size={40} 
                  color="#e53d41"
                  style={{  marginLeft: 10 }}
                  onPress={handleToggleSeeMoney}
                />
              </RowContainer>
            )
          }
        </View>
        <RowContainer>
          <DefaultText>Ver Detalhes</DefaultText>
          <MaterialIcons 
                  name="keyboard-arrow-right" 
                  size={22} 
                  color="#e53d41"
                  style={{  marginLeft: 2 }}
                  onPress={()=> {}}
                />
        </RowContainer>
      
    </Container>
  );
  }
export default MoneyBalance;