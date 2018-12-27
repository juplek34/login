import React, {Component} from 'react';
import { Text, View, Image, Switch } from 'react-native';
import { Content, ListItem, List, Body, Left, Button, Thumbnail } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import { Col, Row, Grid } from "react-native-easy-grid";



export default class Sidebar extends Component{
    state={
        switchValue: true
    };
    _handleToggleSwitch=()=> this.setState(state=>({

    }));
    render(){
        uri = 'https://www.clipartmax.com/png/small/15-153139_big-image-login-icon-with-transparent-background.png';
        return(
            <Content style={{backgroundColor:'#ffffff', width: 200}}>
                <View style={{ height: 150, backgroundColor: '#b5b5b5', alignItems:'center', justifyContent:'center'}}>
                <Grid>
                    <Col>
                        <Row style={{height: 80, width: 75}}>
                            <Thumbnail large source={{uri: uri}} style={{ height: 50, width: 50, alignSelf:'center'}}/>
                        </Row>
                        <Row style={{height: 20, width: 75}}>
                            <Text style={{fontWeight:'bold', color:'black', fontSize: 12 }}>Notification</Text>
                        </Row>
                        <Row style={{height: 20, width: 75}}>
                            <Text style={{fontWeight:'bold', color:'black', fontSize: 12 }}>Night Mode</Text>
                        </Row>
                    </Col>
                    <Col>
                        <Row style={{height: 80, width: 75}}>
                        <Button style={{marginTop:25, height: 30, width: 70, marginRight:5}} onPress={() => this.props.navigation.navigate('Login')}>
                            <Text>Login</Text>
                        </Button>
                        </Row>
                        <Row style={{height: 20, width: 75}}>
                            <Switch 
                            onValueChange={this._handleToggleSwitch}
                            value={this.state.switchValue}
                            />
                        </Row>
                        <Row style={{height: 20, width: 75}}>
                        <Switch 
                            onValueChange={this._handleToggleSwitch}
                            value={this.state.switchValue}
                            />
                        </Row>
                    </Col>
                </Grid>
                </View>
                <List>
                <ListItem style={{height:30, borderBottomColor:'transparent'}}>
                    <Icon size={15} name="md-home" style={{marginRight:10 }}/>
                    <Body>
                        <Text style={{fontWeight:'bold', color:'black', fontSize: 12 }}>Home</Text>
                    </Body>
                </ListItem>
                <ListItem style={{height:30, borderBottomColor:'transparent'}}>
                    <Icon size={15} name="md-heart" style={{marginRight:10 }}/> 
                    <Body>
                        <Text style={{fontWeight:'bold', color:'black', fontSize: 12 }} onPress={() => this.props.navigation.navigate('Populer')}>Populer</Text>
                    </Body>
                </ListItem>
                <ListItem style={{height:30, borderBottomColor:'transparent'}}>
                    <Icon size={15} name="md-time" style={{marginRight:10}}/>
                    <Body>
                        <Text style={{fontWeight:'bold', color:'black', fontSize: 12 }} onPress={() => this.props.navigation.navigate('Terbaru')}>Terbaru</Text>
                    </Body>
                </ListItem>
                <ListItem style={{height:30, borderBottomColor:'transparent'}}>
                    <Icon size={15} name="md-bookmarks" style={{marginRight:10}}/>
                    <Body>
                        <Text style={{fontWeight:'bold', color:'black', fontSize: 12 }}>Bookmarks</Text>
                    </Body>
                </ListItem>
                <ListItem style={{height:30}}>
                    <Icon size={15} name="md-checkmark-circle" style={{marginRight:10}}/>
                    <Body>
                        <Text style={{fontWeight:'bold', color:'black',fontSize: 12 }}>Topik Pilihan</Text>
                    </Body>
                </ListItem>
                </List>
                <List>
                <ListItem style={{height:30, borderBottomColor:'transparent'}}>
                    <Icon size={15} name="md-book" style={{marginRight:10 }}/>
                    <Body>
                        <Text style={{fontWeight:'bold', color:'black', fontSize: 12 }}>News</Text>
                    </Body>
                </ListItem>
                <ListItem style={{height:30, borderBottomColor:'transparent'}}>
                        <Text style={{width:20}}></Text>
                    <Body>
                        <Text style={{fontWeight:'bold', color:'black', fontSize: 12 }}>Nasional</Text>
                    </Body>
                </ListItem>
                <ListItem style={{height:30, borderBottomColor:'transparent'}}>
                        <Text style={{width:20}}></Text>
                    <Body>
                        <Text style={{fontWeight:'bold', color:'black', fontSize: 12 }}>Regional</Text>
                    </Body>
                </ListItem>
                <ListItem style={{height:30, borderBottomColor:'transparent',marginLeft:20}}>
                        <Text style={{width:20}}></Text>
                    <Body>
                        <Text style={{fontWeight:'bold', color:'black', fontSize: 12 }}>Megapolitan</Text>
                    </Body>
                </ListItem>
                <ListItem style={{height:30}}>
                        <Text style={{width:20}}></Text>
                    <Body>
                        <Text style={{fontWeight:'bold', color:'black',fontSize: 12 }}>Internasional</Text>
                    </Body>
                </ListItem>
                </List>
                <List>
                <ListItem style={{height:30, borderBottomColor:'transparent'}}>
                    <Icon size={15} name="md-snow" style={{marginRight:10 }}/>
                    <Body>
                        <Text style={{fontWeight:'bold', color:'black', fontSize: 12 }}>Sains</Text>
                    </Body>
                </ListItem>
                <ListItem style={{height:30, borderBottomColor:'transparent'}}>
                    <Icon size={15} name="md-egg" style={{marginRight:10}}/>   
                    <Body>
                        <Text style={{fontWeight:'bold', color:'black', fontSize: 12 }}>Ekonomi</Text>
                    </Body>
                </ListItem>
                <ListItem style={{height:30, borderBottomColor:'transparent'}}>
                    <Icon size={15} name="md-baseball" style={{marginRight:10}}/>
                    <Body>
                        <Text style={{fontWeight:'bold', color:'black', fontSize: 12 }}>Bola</Text>
                    </Body>
                </ListItem>
                <ListItem style={{height:30, borderBottomColor:'transparent'}}>
                    <Icon size={15} name="md-git-branch" style={{marginRight:10}}/>
                    <Body>
                        <Text style={{fontWeight:'bold', color:'black', fontSize: 12 }}>Tekno</Text>
                    </Body>
                </ListItem>
                <ListItem style={{height:30, borderBottomColor:'transparent'}}>
                    <Icon size={15} name="md-medal" style={{marginRight:10}}/>
                    <Body>
                        <Text style={{fontWeight:'bold', color:'black',fontSize: 12 }}>Entertaimen</Text>
                    </Body>
                </ListItem>
                <ListItem style={{height:30, borderBottomColor:'transparent'}}>
                    <Icon size={15} name="md-build" style={{marginRight:10}}/>
                    <Body>
                        <Text style={{fontWeight:'bold', color:'black',fontSize: 12 }}>Otomitif</Text>
                    </Body>
                </ListItem>
                <ListItem style={{height:30, borderBottomColor:'transparent'}}>
                    <Icon size={15} name="md-transgender" style={{marginRight:10}}/>
                    <Body>
                        <Text style={{fontWeight:'bold', color:'black',fontSize: 12 }}>Lifestyle</Text>
                    </Body>
                </ListItem>
                <ListItem style={{height:30, borderBottomColor:'transparent'}}>
                    <Icon size={15} name="md-business" style={{marginRight:10}}/>
                    <Body>
                        <Text style={{fontWeight:'bold', color:'black',fontSize: 12 }}>Properti</Text>
                    </Body>
                </ListItem>
                <ListItem style={{height:30, borderBottomColor:'transparent'}}>
                    <Icon size={15} name="md-briefcase" style={{marginRight:10}}/>
                    <Body>
                        <Text style={{fontWeight:'bold', color:'black',fontSize: 12 }}>Travel</Text>
                    </Body>
                </ListItem>
                <ListItem style={{height:30}}>
                    <Icon size={15} name="md-school" style={{marginRight:10}}/>
                    <Body>
                        <Text style={{fontWeight:'bold', color:'black',fontSize: 12 }}>Edukasi</Text>
                    </Body>
                </ListItem>
                </List>
            </Content>
        )
    }
}
