import React from "react";
import { onChangeFile, onChangeText } from "../../utils/eventHandlers";

const useAddCourseType = () => {
	const [typeName, setTypeName] = React.useState("");
	const [isDisable, setIsDisable] = React.useState(true);

	const getter = { typeName, isDisable };
	const setter = {
		typeName: onChangeText(setTypeName),
	};

	React.useEffect(() => {
		typeName ? setIsDisable(false) : setIsDisable(true);
	}, [typeName]);

	return {
		getter,
		setter,
	};
};

export default useAddCourseType;
