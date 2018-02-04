import React, { Component } from "react"
import { View, Text } from 'react-native'
import { Avatar } from 'react-native-elements'

export default class UserDetailHeader extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View>
                <View style={{justifyContent: "center", paddingTop: 20, flex: 1, flexDirection:"row"}} content>
                    <Avatar large rounded source={{uri: this.props.item.picture.large }} ></Avatar>
                </View> 
                <View style={{justifyContent: "center", flex: 1, flexDirection: "row"}}>
                    <Text style={{fontSize: 36, color: "black"}}>{`${this.props.item.name.first} ${this.props.item.name.last}`}</Text>
                </View>
            </View>
        )
    }
}