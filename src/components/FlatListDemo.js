import React, { Component } from "react"
import { View, Text, FlatList, RefreshControl } from "react-native"
import { List, ListItem, SearchBar } from "react-native-elements"
import  HorizontalScroller  from "./HorizontalScroller"

class FlatListDemo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: false,
      data: [],
      filteredData: [],
      page: 1,
      seed: 1,
      error: null,
      refreshing: false,
    }
  }

  componentDidMount() {
    this.makeRemoteRequest()
  }

  makeRemoteRequest = () => {
    const { page, seed } = this.state
    const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`
    this.setState({ loading: true })
    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: page === 1 ? res.results : [...this.state.data, ...res.results],
          error: res.error || null,
          loading: false,
          refreshing: false
        })

        this.setState(prev => {data: prev.data.push({sectionType: "horizontal"})})


      })
      .catch(error => {
        this.setState({ error, loading: false })
      })
  }

  

render() {
  return (
    <List automaticallyAdjustContentInsets={false} containerStyle = {{marginTop: 0}} >
      <FlatList
      refreshControl={
        <RefreshControl
          refreshing={this.state.refreshing}
          onRefresh={this._onRefresh.bind(this)}
        />
      }
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

  renderHeader = () => {
    return (
      <View>
        <Text></Text>
      </View>
    )
  }

  _onRefresh() {
    this.setState({refreshing: true})
    this.makeRemoteRequest()
  }

  renderItem = ({ item }) => {
    if (item.sectionType == "horizontal") {
      return  (
        <HorizontalScroller style={{flex: 1, height: 200, backgroundColor: "green"}}/>
      )
    } else {
      return  (
        <ListItem
          roundAvatar
          keyExtractor = {(item, index) => index}
          title = {`${item.name.first} ${item.name.last}`}
          subtitle = {item.email}
          avatar = {{ uri: item.picture.thumbnail }}
          containerStyle = {{ borderTopWidth: 0 }}
          onPress = { () => {
            this._didSelectItem(item)  
          }}
          ListHeaderComponent={this.renderHeader}
        />
      )
    }
  }



  renderHeader = () => {
    return <SearchBar  
      platform="android"
      placeholder="Type Here..." 
      onChangeText={this._searchTextChanged}
      />
  }

  _searchTextChanged = (text) => {
    this.setState(previousState => {
      filteredData: previousState.data.filter(item => item.name.first.indexOf(text))
    })
  }

  _didSelectItem(item) {
    this.props.navigator.push({
      screen: 'api_test.userDetail', // unique ID registered with Navigation.registerScreen
      title: `${item.name.first} ${item.name.last}`, // navigation bar title of the pushed screen (optional)
      // titleImage: require('../../img/my_image.png'), // iOS only. navigation bar title image instead of the title text of the pushed screen (optional)
      passProps: {item}, // Object that will be passed as props to the pushed screen (optional)
      animated: true, // does the push have transition animation or does it happen immediately (optional)
      // animationType: '', // 'fade' (for both) / 'slide-horizontal' (for android) does the push have different transition animation (optional)
      // backButtonTitle: undefined, // override the back button title (optional)
      // backButtonHidden: false, // hide the back button altogether (optional)
      // navigatorStyle: {}, // override the navigator style for the pushed screen (optional)
      // navigatorButtons: {}, // override the nav buttons for the pushed screen (optional)
      // // enable peek and pop - commited screen will have `isPreview` prop set as true.
      // previewView: undefined, // react ref or node id (optional)
      // previewHeight: undefined, // set preview height, defaults to full height (optional)
      // previewCommit: true, // commit to push preview controller to the navigation stack (optional)
      // previewActions: [{ // action presses can be detected with the `PreviewActionPress` event on the commited screen.
      //   id: '', // action id (required)
      //   title: '', // action title (required)
      //   style: undefined, // 'selected' or 'destructive' (optional)
      //   actions: [], // list of sub-actions
      // }],
    })
  }

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "14%"
        }}
      />
    )
  }
}

export default FlatListDemo