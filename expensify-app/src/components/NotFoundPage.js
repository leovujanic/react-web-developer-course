import {Link} from "react-router-dom";
import React from "react";

const NotFoundPage = () => (
	<div>
		<p>
			404!
			<Link to="/">Go Home</Link>
		</p>
	</div>
);

export default NotFoundPage;