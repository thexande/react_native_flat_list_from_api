import React, { Component } from "react"
import { FlatList, List, View } from "react-native"

export default class HorizontalScroller extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: []
        }
    }

    render() {
        return (
        //   <List automaticallyAdjustContentInsets={false} containerStyle = {{marginTop: 0}} >
        //   </List>

       <View>
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
    
    renderItem() {
        return (
            <View style={{ width: 100, height: 100}}>
                <Text>text</Text>
            </View>
        )
    }
}