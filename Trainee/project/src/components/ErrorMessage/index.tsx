import React from "react";
import { Image } from "@components/ui";
import "./styles.scss";

import error from "@images/error.webp";

const ErrorMessage = () => {
	return (
		<div className="error">
			<Image src={error} alt="error" />
		</div>
	);
};

export default ErrorMessage;
