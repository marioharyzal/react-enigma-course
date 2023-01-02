import React from "react";
import constants from "../../constants/index";
import { FormInput, StyledContainer } from "../../components";
import { Button, ButtonGroup, Form } from "react-bootstrap";
import { getCourseById } from "../../services/courseApi";
import { editCourse } from "../../store/actions/courseAction";
import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const initialData = {
	title: "",
	description: "",
	courseInfo: {
		duration: "",
		level: "",
	},
	courseType: {
		courseTypeId: "",
	},
};

const EditCourse = ({ editCourse }) => {
	const [data, setData] = React.useState(initialData);
	const navigate = useNavigate();
	const params = useParams();

	React.useEffect(() => {
		const course = getCourseById(params?.courseId);
		setData(course);
	}, [params?.courseId]);

	const handleChange = (name) => (e) => {
		setData((prevData) => ({
			...prevData,
			courseInfo: {
				duration: name === "duration" ? e.target.value : data?.courseInfo?.duration,
				level: name === "level" ? e.target.value : data?.courseInfo?.level,
			},
			courseType: {
				courseTypeId: name === "courseTypeId" ? e.target.value : data?.courseType?.courseTypeId,
			},
			title: name === "title" ? e.target.value : data?.title,
			description: name === "description" ? e.target.value : data?.description,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const payload = {
			courseId: params.courseId,
			...data,
		};

		delete payload.file;
		delete payload.typeId;

		editCourse(payload);
		navigate(constants.ROUTES.COURSE_LIST);
	};

	const handleCancel = (e) => {
		e.preventDefault();
		navigate(constants.ROUTES.COURSE_LIST);
	};

	return (
		<StyledContainer>
			<Form>
				<FormInput label={"Title"} type={"text"} placeholder={"Enter title"} value={data.title} onChange={handleChange("title")} />
				<FormInput
					label={"Description"}
					type={"textarea"}
					placeholder={"Enter description"}
					value={data.description}
					onChange={handleChange("description")}
				/>
				<FormInput
					label={"Course Type id"}
					type={"text"}
					placeholder={"Enter course type"}
					value={data?.courseType?.courseTypeId}
					onChange={handleChange("courseTypeId")}
					disabled={true}
				/>
				<FormInput label={"Course Material"} type={"file"} id={"file"} disabled={true} />
				<FormInput
					label={"Duration"}
					type={"text"}
					placeholder={"Enter duration"}
					value={data?.courseInfo?.duration}
					onChange={handleChange("duration")}
				/>
				<FormInput
					label={"Level"}
					type={"text"}
					placeholder={"Enter level"}
					value={data?.courseInfo?.level}
					onChange={handleChange("level")}
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
		editCourse: (data) => dispatch(editCourse(data)),
	};
};

export default connect(null, mapDispatchToProps)(EditCourse);
