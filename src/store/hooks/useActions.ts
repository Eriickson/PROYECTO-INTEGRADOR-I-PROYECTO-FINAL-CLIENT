import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreator from "../actions";

/*eslint-disable @typescript-eslint/explicit-module-boundary-types*/
function useActions() {
  const dispatch = useDispatch();

  return bindActionCreators(actionCreator, dispatch);
}

export { useActions };
