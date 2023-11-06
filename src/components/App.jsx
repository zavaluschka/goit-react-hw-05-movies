import { Routes, Route, NavLink } from "react-router-dom";
// import styled from "styled-components";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
// import NotFound from "./pages/NotFound";

// const StyledLink = styled(NavLink)`
//   color: black;

//   &.active {
//     color: orange;
//   }
// `;

export const App = () => {
  return (
    <div>
    <header>
       <nav>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
</header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        {/* <Route path="*" element={<NotFound />} /> */}

      </Routes>
    </div>
  );
};
