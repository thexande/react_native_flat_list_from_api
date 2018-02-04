import React, { Component } from "react"
import { FlatList, List, View, Text, StyleSheet } from "react-native"
import {BoxShadow} from "react-native-shadow"

export default class HorizontalScroller extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: props.items
        }
    }

    render() {
        return (
        //   <List automaticallyAdjustContentInsets={false} containerStyle = {{marginTop: 0}} >
        //   </List>

       <View style={{flex: 1, height: 200}}> 
            <FlatList
                ListHeaderComponent={this.renderHeader}
                automaticallyAdjustContentInsets={false}
                data={this.state.items}
                keyExtractor = {(item, index) => index}
            //   ItemSeperatorComponent = {this.renderSeparator}

                renderItem = { this.renderItem }
                horizontal={true}
            />
       </View>
        )
    } 
    
    renderItem = ({ item }) => {
        return (
            <View style={{ flex: 1, backgroundColor: "white", width: 160}}>
                <TitleCard/>
            </View>
        )
    }
}

const shadowOpt = {
	width:100,
	height:100,
	color:"#000",
	border:2,
	radius:3,
	opacity:0.2,
	x:0,
	y:3,
	style:{marginVertical:5}
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 20,
        backgroundColor: "black",
        marginLeft: 12,
        marginRight: 12, 
        marginTop: 0,
        marginBottom: 12,
        flex: 1,
        shadowColor: "black",
        shadowRadius: 14,
        shadowOpacity: 0.6,
    }
})

class TitleCard extends Component {    
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View>
                <BoxShadow setting={shadowOpt}>
                    <View style={styles.card}></View>
                </BoxShadow>
            </View>
        )
    }
}