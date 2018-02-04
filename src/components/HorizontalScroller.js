import React, { Component } from "react"
import { FlatList, List, View, Text, StyleSheet } from "react-native"
import ElevatedView from 'react-native-elevated-view'

export default class HorizontalScroller extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: props.items
        }
    }

    render() {
        return (
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


const styles = StyleSheet.create({
    card: {
        borderRadius: 20,
        backgroundColor: "white",
        // width: 148,
        // height: 188,
        flex: 1,
        shadowColor: "black",
        shadowRadius: 14,
        shadowOpacity: 0.6,
    },
    elevated: {
        flex: 1,
        marginLeft: 12,
        marginRight: 12, 
        marginTop: 6,
        marginBottom: 12,
        borderRadius: 20
    }
})

class TitleCard extends Component {    
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.card}>
                <ElevatedView style={styles.elevated} elevation={6}/>
            </View>
        )
    }
}