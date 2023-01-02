import constants from "../../constants";

const addCourseType = (courseType) => {
	return {
		type: constants.ACTION.ADD_COURSE_TYPE,
		payload: {
			courseTypeId: Math.random().toString(36).substring(2, 7),
			typeName: courseType.typeName,
		},
	};
};

const editCourseType = (courseType) => ({
	type: constants.ACTION.EDIT_COURSE_TYPE,
	payload: courseType,
});

const deleteCourseType = (id) => ({
	type: constants.ACTION.DELETE_COURSE_TYPE,
	payload: id,
});

export { addCourseType, editCourseType, deleteCourseType };
