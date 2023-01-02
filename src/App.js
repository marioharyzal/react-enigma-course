import React from "react";
import "./App.css";
import { AddCourse, CourseList, TypeList, AddCourseType } from "./pages";
import NavBar from "./components/Navbar/index";
import constants from "./constants/index";
import store from "./store/store";
import { Provider } from "react-redux";
import EditCourse from "./pages/EditCourse";
import EditCourseType from "./pages/EditCourseType";
import { Route, Routes } from "react-router-dom";

function App() {
	const menu = [
		{ name: "Course List", path: constants.ROUTES.COURSE_LIST },
		{ name: "Course Type", path: constants.ROUTES.COURSE_TYPE },
	];

	return (
		<Provider store={store}>
			<NavBar menu={menu} />
			<Routes>
				<Route path={constants.ROUTES.COURSE_LIST} element={<CourseList />} index={true} />
				<Route path={constants.ROUTES.ADD_COURSE} element={<AddCourse />} />
				<Route path={`${constants.ROUTES.EDIT_COURSE}/:courseId?`} element={<EditCourse />} />
				<Route path={constants.ROUTES.COURSE_TYPE} element={<TypeList />} index={true} />
				<Route path={constants.ROUTES.ADD_COURSE_TYPE} element={<AddCourseType />} />
				<Route path={`${constants.ROUTES.EDIT_COURSE_TYPE}/:courseTypeId?`} element={<EditCourseType />} />
				<Route path={"*"} element={<h3>Page Not Found!</h3>} />
			</Routes>
		</Provider>
	);
}

export default App;
