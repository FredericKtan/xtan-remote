import React from "react";

import Home from "../routes/Home";

export const routes = {
	getHomeRoute() {
		return {
			renderScene(navigator) {
				return (
					<Home navigator={ navigator } />
				);
			},
			getTitle() {
				return "Home";
			},
			showNavigationBar: true
		};
	}
}

export default routes;