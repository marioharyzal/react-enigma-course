import React from "react";
import "./App.css";
import { AddCourse, CourseList, TypeList, AddCourseType } from "./pages";
import NavBar from "./components/Navbar/index";
import constants from "./constants/index";
import store from "./store/store";
import { Provider } from "react-redux";
import EditCourse from "./pages/EditCourse";
import EditCourseType from "./pages/EditCourseType";
import { Route, Routes, Outlet, Navigate } from "react-router-dom";
import Login from "./pages/Login";

const CourseWrapper = () => (
	<>
		<h3 style={{ textAlign: "center", margin: 20 }}>Course page</h3>
		<Outlet />
	</>
);

const TypeWrapper = () => (
	<>
		<h3 style={{ textAlign: "center", margin: 20 }}>Type page</h3>
		<Outlet />
	</>
);

const Dashboard = () => (
	<>
		<h3 style={{ textAlign: "center", margin: 20 }}>Dashboard</h3>
	</>
);

const ProtectedRoutes = ({ isLoggedIn, setIsLoggedIn }) => {
	const menu = [
		{ name: "Course List", path: constants.ROUTES.COURSE_LIST },
		{ name: "Course Type", path: constants.ROUTES.COURSE_TYPE },
	];
	if (!isLoggedIn) {
		return <Navigate to={constants.ROUTES.LOGIN} replace={true} />;
	}

	return (
		<>
			<NavBar menu={menu} setLoggedIn={setIsLoggedIn} />
			<Outlet />
		</>
	);
};

function App() {
	const [isLoggedIn, setIsLoggedIn] = React.useState(false);

	return (
		<Provider store={store}>
			<Routes>
				<Route path={constants.ROUTES.LOGIN} element={<Login setIsLoggedIn={setIsLoggedIn} />} index={true} />
				<Route
					path={constants.ROUTES.DASHBOARD}
					element={<ProtectedRoutes isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}
				>
					<Route path={constants.ROUTES.DASHBOARD} element={<Dashboard />} />
					<Route path={constants.ROUTES.COURSE_LIST} element={<CourseWrapper />}>
						<Route element={<CourseList />} index={true} />
						<Route path={constants.ROUTES.ADD_COURSE} element={<AddCourse />} />
						<Route path={`${constants.ROUTES.EDIT_COURSE}/:courseId?`} element={<EditCourse />} />
					</Route>
					<Route path={constants.ROUTES.COURSE_TYPE} element={<TypeWrapper />}>
						<Route element={<TypeList />} index={true} />
						<Route path={constants.ROUTES.ADD_COURSE_TYPE} element={<AddCourseType />} />
						<Route path={`${constants.ROUTES.EDIT_COURSE_TYPE}/:courseTypeId?`} element={<EditCourseType />} />
					</Route>
				</Route>
				<Route path={"*"} element={<h3>Page Not Found!</h3>} />
			</Routes>
		</Provider>
	);
}

export default App;
