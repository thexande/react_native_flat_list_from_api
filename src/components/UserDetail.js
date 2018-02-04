import React, { Component } from "react"
import { FlatList, View, Text, ScrollView } from "react-native"
import { List, Avatar } from 'react-native-elements'
import  UserDetailHeader  from "./UserDetailHeader"


export default class UserDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userData: this._makeUserInfo(props.item)
        }
    }

    _makeUserInfo(user) {
        return [
            {
                title: "Name",
                detial: `${user.name.title} ${user.name.first} ${user.name.last}`,
            }, 
            {
                title: "Gender",
                detail: user.gender,
                
            },
            {
                title: "Email Address",
                detail: user.email
            }
        ]
    }

    render() {
        return (
            <UserDetailInfoList user={this.props.item} data={this.state.userData}/>

            // <ScrollView style={{backgroundColor: "white", flex: 1, flexDirection: "column"}}>
            //     {/* <UserDetailHeader item={this.props.item}/> */}
            // </ScrollView>
        )
    }
}


class UserDetailInfoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: this.props.data
        }
    }

    render() {
        return (
          <List automaticallyAdjustContentInsets={false} containerStyle = {{marginTop: 0}} >
            <FlatList
              ListHeaderComponent={this.renderHeader}
              automaticallyAdjustContentInsets={false}
              data={this.state.data}
              keyExtractor = {(item, index) => index}
              ItemSeperatorComponent = {this.renderSeparator}
      
              renderItem = { this.renderItem }
            />
          </List>
        )
    }

    renderItem = ({item}) => {
        return(
            <View>
                <Text>{`${item.title} ${item.detail}`}</Text>
            </View>
        )
    }

    renderHeader = () => {
        return (
            <UserDetailHeader item={this.props.user}/>
        )
    }
}