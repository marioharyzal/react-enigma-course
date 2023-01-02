import React from "react";
import constants from "../../constants/index";
import { FormInput, StyledContainer } from "../../components";
import { Button, ButtonGroup, Form } from "react-bootstrap";
import { getCourseTypeById } from "../../services/courseApi";
import { connect } from "react-redux";
import { editCourseType } from "../../store/actions/courseTypeAction";
import { useNavigate, useParams } from "react-router-dom";

const initialData = {
	typeName: "",
};

const EditCourseType = ({ editCourseType }) => {
	const [data, setData] = React.useState(initialData);
	const navigate = useNavigate();
	const params = useParams();

	React.useEffect(() => {
		const courseType = getCourseTypeById(params?.courseTypeId);
		setData(courseType);
	}, [params?.courseTypeId]);

	const handleChange = (name) => (e) => {
		setData((prevData) => ({
			...prevData,
			[name]: e.target.value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const payload = {
			courseTypeId: params.id,
			...data,
		};

		editCourseType(payload);
		navigate(constants.ROUTES.COURSE_TYPE);
	};

	const handleCancel = (e) => {
		e.preventDefault();
		navigate(constants.ROUTES.COURSE_TYPE);
	};

	return (
		<StyledContainer>
			<Form>
				<FormInput
					label={"Course Type"}
					type={"text"}
					placeholder={"Enter course type"}
					value={data.typeName}
					onChange={handleChange("typeName")}
				/>
				<ButtonGroup>
					<Button onClick={handleSubmit} variant={"success"}>
						Update
					</Button>
					<Button onClick={handleCancel} variant={"danger"}>
						Cancel
					</Button>
				</ButtonGroup>
			</Form>
		</StyledContainer>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		editCourseType: (data) => dispatch(editCourseType(data)),
	};
};

export default connect(null, mapDispatchToProps)(EditCourseType);
