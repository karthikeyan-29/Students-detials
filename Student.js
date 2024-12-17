import React from 'react';
import {Text, View} from 'react-native';

const Cat = props => {
  return (
    <View>
    
      <Text>-->Hello, I am {props.name}. Iam from {props.college}, My Register number is {props.number}</Text>
    
    </View>
  );
};

const Cafe = () => {
  return (
    <View>
    <Text>THE ABOVE STUDENTS ARE SELECTED FOR FINALS : </Text>
      <Cat name="Tommy "
      number="45"
      college="SRM"
      />
      <Cat name="Arthur" 
      number="46"
      college="VTMT" />
      <Cat name="Ada " 
      number="47" 
      college="VIT" />
      
    </View>
  );
};




export default Cafe;
