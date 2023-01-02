import React from "react";

import typeList from "../../fixtures/courseType.json";
import withPaginationList from "../../hoc/withPaginationList";

import { StyledListGroup } from "./styles";
import TypeItem from "./components/TypeItem";
import { connect, useDispatch } from "react-redux";
import { deleteCourseType } from "../../store/actions/courseTypeAction";

const List = ({ data }) => {
	const dispatch = useDispatch();

	const onDelete = (id) => () => {
		const isConfirm = window.confirm("Are you sure to delete this course type?");
		if (isConfirm) dispatch(deleteCourseType(id));
	};

	return (
		<StyledListGroup>
			{data?.map((item) => (
				<TypeItem data={item} key={item.courseTypeId} params={item.courseTypeId} onDelete={onDelete(item.courseTypeId)} />
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
		navAdd: "/add-course-type",
	})
);
