import { StyleSheet } from "react-native";
import { colors } from "../../config/styles";

export default StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: colors.white
	},
	logo: {
		width: 125,
		height: 125,
		resizeMode: "contain"
	},
	title: {
		fontSize: 20,
		textAlign: "center",
		fontWeight: "400"
	}
});