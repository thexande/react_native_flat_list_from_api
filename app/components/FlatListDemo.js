import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import { List, ListItem } from "react-native-elements"

class FlatListDemo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      page: 1,
      seed: 1,
      error: null,
      refreshing: false,
    };
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    const { page, seed } = this.state;
    const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;
    this.setState({ loading: true });
    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: page === 1 ? res.results : [...this.state.data, ...res.results],
          error: res.error || null,
          loading: false,
          refreshing: false
        });
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  };

  

render() {
  return (
    <List automaticallyAdjustContentInsets={false} >
      <FlatList
        automaticallyAdjustContentInsets={false}
        data={this.state.data}
        keyExtractor = {(item, index) => index}
        ItemSeperatorComponent = {this.renderSeparator}

        renderItem = { this.renderItem }
      />
    </List>
  )
  }

  renderItem = ({ item }) => (
    <ListItem
      roundAvatar
      keyExtractor = {(item, index) => index}
      title = {`${item.name.first} ${item.name.last}`}
      subtitle = {item.email}
      avatar = {{ uri: item.picture.thumbnail }}
      containerStyle = {{ borderTopWidth: 0 }}
    />
  )

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
    );
  };
}

export default FlatListDemo;