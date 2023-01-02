import React from "react";
import typeList from "../../fixtures/courseType.json";
import withPaginationList from "../../hoc/withPaginationList";
import { StyledListGroup } from "./styles";
import TypeItem from "./components/TypeItem";
import { connect, useDispatch } from "react-redux";
import { deleteCourseType } from "../../store/actions/courseTypeAction";
import constants from "../../constants";
import { useNavigate } from "react-router-dom";

const List = ({ data }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const onNavigateEdit = (courseTypeId) => () => {
		navigate(`${constants.ROUTES.EDIT_COURSE_TYPE}/${courseTypeId}`);
	};

	const onDelete = (courseTypeId) => () => {
		const isConfirm = window.confirm("Are you sure to delete this course type?");
		if (isConfirm) dispatch(deleteCourseType(courseTypeId));
	};

	return (
		<StyledListGroup>
			{data?.map((item) => (
				<TypeItem
					data={item}
					key={item.courseTypeId}
					onNavigateEdit={onNavigateEdit(item.courseTypeId)}
					onDelete={onDelete(item.courseTypeId)}
				/>
			))}
		</StyledListGroup>
	);
};

const mapStateToProps = (state) => {
	return {
		listData: state.courseTypes.courseTypeList,
	};
};

export default connect(mapStateToProps)(
	withPaginationList(List, {
		listData: typeList,
		label: "Add course Type",
		navAdd: constants.ROUTES.ADD_COURSE_TYPE,
	})
);
