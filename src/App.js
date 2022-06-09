import { Container } from "@mui/material";
import { Box } from "@mui/system";
import { Route, Routes } from "react-router";
import { NavLink } from "react-router-dom";
import DragNDrop from "./pages/dragNdrop/DragNDrop";
import Drag from "./pages/drop zone/Drag";
import Editor from "./pages/editor/Editor";
import FireBaseForm from "./pages/firebase form/FireBaseForm";
import UserForm from "./pages/form/UserForm";
import Home from "./pages/home/Home";
import ImagePage from "./pages/image/ImagePage";
import SelectionList from "./pages/selection/SelectionList";
import SignIn from "./pages/signin/SignIn";
import SignUp from "./pages/signup/SignUp";
import UserTable from "./pages/tables/UserTable";
import Titles from "./pages/titles/Titles";
import "./App.css";

const CustomLink = ({ to, name }) => (
  <Box>
    <NavLink
      to={to}
      className={({ isActive }) => "nav-link" + (isActive ? " activeNav" : ``)}
    >
      {name}
    </NavLink>
  </Box>
);

function App() {
  return (
    <Container>
      <section className="navlinks">
        <CustomLink to={"/"} name="home" />
        <CustomLink to={"/usertable"} name="usertable" />
        <CustomLink to={"/dragzone"} name="dragzone" />
        <CustomLink to={"/dragndrop"} name="dragndrop" />
        <CustomLink to={"/userform"} name="userform" />
        <CustomLink to={"/firebaseform"} name="firebaseform" />
        <CustomLink to={"/editor"} name="editor" />
        <CustomLink to={"/imagepage"} name="imagepage" />
        <CustomLink to={"/selectionlist"} name="selectionlist" />
        <CustomLink to={"/signin"} name="signin" />
        <CustomLink to={"/signup"} name="signup" />
        <CustomLink to={"/titles"} name="titles" />
      </section>
      <section>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />}>
            <Route path="usertable" element={<UserTable />} />
            <Route path="dragzone" element={<Drag />} />
            <Route path="dragndrop" element={<DragNDrop />} />
            <Route path="userform" element={<UserForm />} />
            <Route path="firebaseform" element={<FireBaseForm />} />
            <Route path="editor" element={<Editor />} />
            <Route path="imagepage" element={<ImagePage />} />
            <Route path="selectionlist" element={<SelectionList />} />
            <Route path="signin" element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="titles" element={<Titles />} />
          </Route>
          <Route path="*" element={<h1>Page Not Found....</h1>} />
        </Routes>
      </section>
    </Container>
  );
}

export default App;
