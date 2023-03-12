import React from "react";
import { Image } from "@components/ui";

import error from "@images/error.webp";

const ErrorMessage = () => {
	return (
		<div className="error">
			<Image src={error.src} alt="error" />
		</div>
	);
};

export default ErrorMessage;
