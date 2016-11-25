import React from "react";
import {
	Image,
	Text,
	View
} from "react-native";

import styles from "./styles";
import images from "../../config/images";

export default class Home extends React.Component {
	render() {
		return (
			<View style={ styles.container }>
				<Image
					style={ styles.logo }
					source={ images.logo }
				/>
				<Text style={ styles.title }>
					Xtan Remote
				</Text>
			</View>
		);
	}
}