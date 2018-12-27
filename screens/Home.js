import React, { Component } from "react";
import { Text,Container, Header, Title, Button, Icon, Left, Right, Body, Thumbnail, Drawer } from "native-base";
import SideBar from '../component/Sidebar';

export default class Home extends Component {
  closeDrawer() {
    this._drawer._root.close()
  };

  openDrawer() {
    this._drawer._root.open()
  };

  uri = 'https://www.seuramonews.com/wp-content/uploads/2018/12/fff-3.png';
  render() {
    return (
      <Drawer
      ref={(ref) => { this._drawer = ref; }}
      content={<SideBar navigator={this._navigator} />}
      onClose={() => this.closeDrawer()} >

      <Container>
        <Header style={{backgroundColor:'#0f0f0f'}}>
          <Left style={{flex: 1}}>
            <Button transparent onPress={()=> this.openDrawer()}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body style={{flex: 1}}>
            <Thumbnail style= {{ width: 150, alignSelf:'center', height: 35 }} large squae source={{uri: this.uri}}/>
          </Body>
          <Right style={{flex: 1}}>
            <Button transparent>
              <Icon name="search" />
            </Button>
          </Right>
        </Header>
      </Container>
      <Container>
        <Text>maniakbula</Text>
      </Container>
      </Drawer>
    );
  }
}