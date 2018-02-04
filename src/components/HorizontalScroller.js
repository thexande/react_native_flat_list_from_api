import React, { Component } from "react"
import { FlatList, List, View, Text, StyleSheet, Image } from "react-native"
import ElevatedView from 'fiber-react-native-elevated-view'

export default class HorizontalScroller extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: props.items
        }
    }

    render() {
        return (
       <View style={{flex: 1, height: 180}}> 
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
        flex: 1,
    },
    elevated: {
        flex: 1,
        shadowColor: "black",
        shadowRadius: 14,
        marginLeft: 12,
        marginRight: 12, 
        marginTop: 6,
        marginBottom: 12,
        borderRadius: 20
    },
    symbol: {
        color: "black",
        fontWeight: "900",
        fontSize: 24
    },
    infoStack: {
        marginTop: 82,
        marginLeft: 12,
        flexDirection: "column"
    }
})

class TitleCard extends Component {    
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.card}>
                <ElevatedView style={styles.elevated} elevation={6}>

                    <View style={styles.infoStack}>
                        <Text style={styles.symbol}>BTC</Text>
                        <Text>Bitcoin</Text>
                        <Text>$6,000</Text>
                    </View>   
                </ElevatedView>
            </View>
        )
    }
}