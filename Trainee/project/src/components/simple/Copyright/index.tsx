import React from "react";
import Link from "next/link";

const Copyright = () => {
	const year: number = new Date().getFullYear();

	return (
		<div className="copyright bg-bg-3 d-flex justify-content-center gap-2">
			<div>{year}</div>
			<div>All Rights Reserved.</div>
			<div>
				<Link href="https://github.com/firebenderyt123" target="_blank">
					FirebenderYT
				</Link>
			</div>
		</div>
	);
};

export default Copyright;
