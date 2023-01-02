import constants from "../../constants";

const addCourse = (course) => {
	return {
		type: constants.ACTION.ADD_COURSE,
		payload: {
			courseId: Math.random().toString(36).substring(2, 7),
			title: course.title,
			description: course.description,
			courseInfo: {
				duration: course.duration,
				level: course.level,
			},
			courseType: {
				courseTypeId: course.typeId,
			},
		},
	};
};

const editCourse = (course) => ({
	type: constants.ACTION.EDIT_COURSE,
	payload: course,
});

const deleteCourse = (id) => ({
	type: constants.ACTION.DELETE_COURSE,
	payload: id,
});

export { addCourse, editCourse, deleteCourse };
