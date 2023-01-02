import React from "react";

import { StyledListGroup } from "./styles";
import CourseItem from "./components/CourseItem";
import withPaginationList from "../../hoc/withPaginationList";
import { connect, useDispatch } from "react-redux";
import constants from "../../constants";
import { deleteCourse } from "../../store/actions/courseAction";

const List = ({ data }) => {
	const dispatch = useDispatch();

	const onDelete = (id) => () => {
		const isConfirm = window.confirm("Are you sure to delete this course ?");
		if (isConfirm) {
			dispatch(deleteCourse(id));
		}
	};

	return (
		<StyledListGroup>
			{data?.map((item) => (
				<CourseItem data={item} params={item.courseId} key={item?.courseId} onDelete={onDelete(item.courseId)} />
			))}
		</StyledListGroup>
	);
};

const mapStateToProps = (state) => {
	return {
		listData: state.courses.courseList,
	};
};

export default connect(mapStateToProps)(
	withPaginationList(List, {
		label: "Add Course",
		navAdd: constants.ROUTES.ADD_COURSE,
	})
);
