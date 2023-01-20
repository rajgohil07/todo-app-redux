import { Provider } from "react-redux";
import { ParentComponent } from "./Components/ParentComponent/ParentComponent";
import { store } from "./ReduxStore/ReduxStore";

export const App = () => {
  return (
    <Provider store={store}>
      <ParentComponent />
    </Provider>
  );
};
