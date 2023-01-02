import React from "react";
import { onChangeText } from "../../utils/eventHandlers";

const useLogin = () => {
	const [username, setUsername] = React.useState("");
	const [password, setPassword] = React.useState("");

	const getter = { username, password };
	const setter = {
		username: onChangeText(setUsername),
		password: onChangeText(setPassword),
	};
	return { getter, setter };
};

export default useLogin;
