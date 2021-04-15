import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Container = styled.View`
  padding-top: ${Constants.statusBarHeight}px;
  padding-right: 20px;
  padding-left: 20px;
  height: 80px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const Title = styled.Text`
  font-size: 26px;
  font-weight: 700;
  margin: 0 auto;
`;
