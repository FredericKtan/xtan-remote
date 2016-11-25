import React from "react";
import Meteor from "react-native-meteor";
import {
	ListView,
	StyleSheet,
	Text,
	View,
} from 'react-native';

import settings from "./config/settings";
import LoggedOut from "./layouts/LoggedOut";
// Meteor.connect(settings.METEOR_URL);

export default class RNApp extends React.Component {
	render() {
		return (
			<LoggedOut />
		);
	}
	/*
	constructor(props) {
	    super(props);
	    ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
	    this.state = {
	      movies : ds.cloneWithRows([]),
	    }

	    this.getMoviesFromApiAsync = this.getMoviesFromApiAsync.bind(this);
	  }

	  componentWillMount() {
	    this.getMoviesFromApiAsync();
	  }
	getMoviesFromApiAsync() {
	    ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
	    // return fetch('https://facebook.github.io/react-native/movies.json')
	    return fetch('https://xtan-command-center.herokuapp.com/tasks')
	      .then((response) => response.json())
	      .then((responseJson) => {
	      	console.log(responseJson);
	        this.setState({movies:ds.cloneWithRows(responseJson.tasks)});
	      	console.log(this.state.movies);
	        return responseJson.tasks;
	      })
	      .catch((error) => {
	        console.error(error);
	      });
	  }

	render() {
		return (
			<View>
				<ListView
          dataSource={this.state.movies}
          renderRow={(rowData) => <Text>{`${rowData._id} ${rowData.text}`}</Text>}
        />
			</View>
		);
	}
	*/
}