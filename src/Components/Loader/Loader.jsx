import { Dna } from "react-loader-spinner";
import "./Loader.css";

export const Loader = () => {
  return (
    <div className="spinnerWrapper">
      <Dna
        visible={true}
        height="210"
        width="210"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </div>
  );
};
