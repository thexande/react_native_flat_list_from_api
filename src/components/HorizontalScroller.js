import React, { Component } from "react"
import { FlatList, List, View, Text, StyleSheet, Image } from "react-native"
import ElevatedView from 'fiber-react-native-elevated-view'
import FastImage from 'react-native-fast-image'

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
        marginLeft: 6,
        marginRight:6, 
        marginTop: 6,
        marginBottom: 12,
        borderRadius: 20,
    },
    symbol: {
        color: "black",
        fontWeight: "900",
        fontSize: 24
    },
    infoStack: {
        marginTop: 24,
        marginLeft: 12,
        flexDirection: "column",
        backgroundColor: "transparent"
    },
    icon: {
        marginTop: 12,
        marginLeft: 12,
        height: 40,
        width: 40
    },
    cardContainer: {
        overflow: "hidden",
        // marginRight: 12
        flex: 1,
        margin: 0
    },
    largeIcon: {
        position: "absolute",
        marginTop: 30,
        marginLeft: 70,
        height: 100,
        width: 100,
        transform: [{ rotate: '320deg'}],
        opacity: 0.7
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
                    <View style={styles.cardContainer}>
                        <FastImage Transforms resizeMode="contain" style={styles.largeIcon} source={{uri:"https://bitcoin.org/img/icons/opengraph.png"}}/>
                        <FastImage resizeMode="contain" style={styles.icon} source={{uri:"https://bitcoin.org/img/icons/opengraph.png"}}/>          
                        <View style={styles.infoStack}>
                            <Text style={styles.symbol}>BTC</Text>
                            <Text>Bitcoin</Text>
                            <Text>$6,000</Text>
                        </View>   
                    </View>
                </ElevatedView>
            </View>
        )
    }
}