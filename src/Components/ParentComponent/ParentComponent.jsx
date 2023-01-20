import { Routes, Route } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";
import { baseURL } from "../../Config/BaseURLConfig";
import { Home } from "../Home/Home";
import { Analytics } from "../Analytics/Analytics";
import { PageNotFound } from "../PageNotFound/PageNotFound";
import { Loader } from "../Loader/Loader";
import { useSelector } from "react-redux";

export const ParentComponent = () => {
  const isLoading = useSelector((state) => state.todo.isLoading);

  return (
    <>
      {isLoading && <Loader />}
      <Routes>
        <Route path={`${baseURL}/`} element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path={`${baseURL}analytics`} element={<Analytics />} />
        </Route>
        <Route path={`*`} element={<PageNotFound />} />
      </Routes>
    </>
  );
};
