import store from "../store/store";

export const getCourseById = (id) => {
	const courseList = store.getState().courses?.courseList;

	return courseList.filter((course) => {
		return course.courseId === id;
	})?.[0];
};

export const getCourseTypeById = (id) => {
	const courseTypeList = store.getState().courseTypes.courseTypeList;

	return courseTypeList.filter((courseType) => courseType.courseTypeId === id)?.[0];
};
