import itemsActions from "./itemsActions";
import selectionActions from "./selectionActions";

const useActions = (dispatch) => ({
  itemsActions: itemsActions(dispatch),
  selectionActions: selectionActions(dispatch),
});

export default useActions;
