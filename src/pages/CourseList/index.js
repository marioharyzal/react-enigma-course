import React from "react";

import { StyledListGroup } from "./styles";
import CourseItem from "./components/CourseItem";
import withPaginationList from "../../hoc/withPaginationList";
import { connect, useDispatch } from "react-redux";
import constants from "../../constants";
import { deleteCourse } from "../../store/actions/courseAction";
import { useNavigate } from "react-router-dom";

const List = ({ data }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const onDelete = (courseId) => () => {
		const isConfirm = window.confirm("Are you sure to delete this course ?");
		if (isConfirm) {
			dispatch(deleteCourse(courseId));
		}
	};

	const onNavigateEdit = (courseId) => () => {
		navigate(`${constants.ROUTES.EDIT_COURSE}/${courseId}`);
	};

	return (
		<StyledListGroup>
			{data?.map((item) => (
				<CourseItem
					data={item}
					onNavigateEdit={onNavigateEdit(item.courseId)}
					key={item?.courseId}
					onDelete={onDelete(item.courseId)}
				/>
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
