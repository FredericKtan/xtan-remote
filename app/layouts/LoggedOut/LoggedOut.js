import React from "react";
import ExNavigator from "@exponent/react-native-navigator";
import TabNavigator from "react-native-tab-navigator";
import Routes from "../../config/routes";

export default class LoggedOut extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			selectedTab: "Home"
		};
	}
	
	render() {
		const route = Routes.getHomeRoute();

		return (
			<ExNavigator
				initialRoute={ route }
				style={ { flex: 1 } }
				showNavigationBar={ route.showNavigationBar }
			/>
		);
	}
}