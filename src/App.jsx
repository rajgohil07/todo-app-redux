import { Provider } from "react-redux";
import { ParentComponent } from "./Components/ParentComponent/ParentComponent";
import { store } from "./ReduxStore/ReduxStore";
import { baseURL } from "./Config/BaseURLConfig";

export const App = () => {
  console.log("baseURL :>> ", baseURL);
  return (
    <Provider store={store}>
      <ParentComponent />
    </Provider>
  );
};
