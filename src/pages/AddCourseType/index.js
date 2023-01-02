import React from "react";
import { Form, Button, ButtonGroup } from "react-bootstrap";
import { connect } from "react-redux";
import { FormInput, StyledContainer } from "../../components";
import { addCourseType } from "../../store/actions/courseTypeAction";

import { StyledTitle } from "./styles";
import useAddCourseType from "./useAddCourseType";

const FORM_LIST = [{ id: "typeName", label: "Type name", type: "text", placeholder: "Enter course title" }];

const AddCourseType = ({ onNavigate, addCourseType }) => {
	const { getter, setter } = useAddCourseType();

	const handleSubmit = () => {
		addCourseType(getter);

		onNavigate("/course-type");
	};

	return (
		<StyledContainer>
			<StyledTitle>Add Course Type</StyledTitle>
			<Form>
				{FORM_LIST.map((item) => (
					<FormInput
						label={item.label}
						type={item.type}
						value={getter[item.id]}
						onChange={setter[item.id]}
						placeholder={item.placeholder}
						key={item.id}
					/>
				))}
				<ButtonGroup>
					<Button variant="success" onClick={handleSubmit} disabled={getter.isDisable}>
						Submit
					</Button>
					<Button variant="secondary" onClick={() => onNavigate("/course-type")}>
						Cancel
					</Button>
				</ButtonGroup>
			</Form>
		</StyledContainer>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		addCourseType: (data) => dispatch(addCourseType(data)),
	};
};

export default connect(null, mapDispatchToProps)(AddCourseType);
