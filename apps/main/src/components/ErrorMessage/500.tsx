import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";
import { HOME_URL } from "@/config/config";
import "./index.less";
import React from 'react';

const NotNetwork = () => {
	const navigate = useNavigate();
	const goHome = () => {
		navigate(HOME_URL);
	};
	return (
		<Result
			status="500"
			title="500"
			subTitle="Sorry, something went wrong."
			extra={
				<Button type="primary" onClick={goHome}>
					Back Home
				</Button>
			}
		/>
	);
};

export default NotNetwork;
