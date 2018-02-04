import React, { Component } from "react"
import { FlatList, List, View, Text, StyleSheet, Image, TouchableHighlight } from "react-native"
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
                renderItem = { this.renderItem }
                horizontal={true}
            />
       </View>
        )
    } 
    
    renderItem = ({ item }) => {
        return (
                <TitleCard/>
        )
    }
}


const styles = StyleSheet.create({
    card: {
        flex: 1,
        width: 140
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
    },
    largeIcon: {
        position: "absolute",
        marginTop: 20,
        marginLeft: 70,
        height: 100,
        width: 100,
        transform: [{ rotate: '320deg'}],
        opacity: 0.7
    },
    viewButton: {
        position: "absolute",
        bottom: 12,
        right: 12,
    }
})

class TitleCard extends Component {    
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.card}>
                <ElevatedView style={styles.elevated} elevation={5}>
                    <View style={styles.cardContainer}>
                        <FastImage Transforms resizeMode="contain" style={styles.largeIcon} source={{uri:"https://bitcoin.org/img/icons/opengraph.png"}}/>
                        <FastImage resizeMode="contain" style={styles.icon} source={{uri:"https://bitcoin.org/img/icons/opengraph.png"}}/>          
                        <View style={styles.infoStack}>
                            <Text style={styles.symbol}>BTC</Text>
                            <Text>Bitcoin</Text>
                            <Text>$6,000</Text>
                        </View>                           
                    </View>
                    <View style={styles.viewButton}><ViewButton title={"VIEW"}/></View>
                </ElevatedView>
            </View>
        )
    }
}


const viewButtonStyle = StyleSheet.create({
    text: {
        color: "white",
        textAlign: "center",
        color: "#006FFF",
        fontWeight: "900",
        fontSize: 12,
    },
    button: {
        backgroundColor: "#D4D4D4",
        width: 42,
        height: 24,  
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        borderRadius: 12,
        overflow: "hidden"

        // padding: 6,
        // alignItems: "center"
    }
})

class ViewButton extends Component { 
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={viewButtonStyle.container}>
                <TouchableHighlight  onPress={() => {alert('onPress')}} style={viewButtonStyle.button}>
                    <View style={viewButtonStyle.container}>
                        <Text style={viewButtonStyle.text}>{this.props.title}</Text>
                    </View>
                </TouchableHighlight>
            </View>
        )
    }
}