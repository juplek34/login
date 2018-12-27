import React from 'react';
import { View, TouchableHighlight } from 'react-native';
import { Button, Thumbnail, Text, Item, Input, Card, CardItem, Content } from 'native-base';

export default class Login extends React.Component {
  render() {
    const uri = 'https://www.seuramonews.com/wp-content/uploads/2018/12/fff-3.png';
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#000000' }}>
        <Thumbnail style= {{ width: 330, alignSelf:'center' }} large squae source={{uri: uri}}/>
        <Card style= {{height:280, borderRadius:10, backgroundColor: '#8e949e'}} >
        <Content padder>
        <View style={{flexDirection: 'row'}}><Text style={{fontSize:30}}>Sign In</Text></View>
        <CardItem style={{width:280, marginTop:20, borderRadius: 10, height: 50}}>
          <Input placeholder='Username'/>
        </CardItem>
        <CardItem style={{width:280, marginTop:20, borderRadius: 10, height: 50}}>
          <Input secureTextEntry placeholder='Kata Sandi'/>
        </CardItem>
        <Button style={{marginTop:20, marginLeft:40, marginRight:40, borderRadius:10}} block onPress={() => this.props.navigation.navigate('Home')}>
          <Text>Login</Text>
        </Button>
        </Content>
       </Card>
          <View style={{flexDirection: 'row'}}><Text style= {{color:'#fff'}}>Don't have an account? </Text><TouchableHighlight block onPress={() => this.props.navigation.navigate('Register')}><Text style={{color:'#fff'}}>sign up now.</Text></TouchableHighlight></View>
      </View>
    );
  }
}