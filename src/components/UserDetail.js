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
                detail: user.name.first
                // detial: `${user.name.title} ${user.name.first} ${user.name.last}`,
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
          <List automaticallyAdjustContentInsets={false} containerStyle = {{flex: 1, marginTop: 0}} >
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
            <UserDetailTableCell item={item} />
        )
    }

    renderHeader = () => {
        return (
            <UserDetailHeader item={this.props.user}/>
        )
    }
}

class UserDetailTableCell extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View>
                <View style={{flexDirection: "row", paddingLeft: 12, paddingRight: 12, paddingTop: 12, paddingBottom: 12}}>
                    <View style={{flex: 1}}>
                        <Text style={{textAlign: "left"}}>{`${this.props.item.title}`}</Text>
                    </View>
                    <View style={{flex: 1}}>
                        <Text style={{textAlign: "right"}}>{`${this.props.item.detail}`}</Text>
                    </View>
                </View>
            </View>
        )
    }
}