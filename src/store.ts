import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { rootReducer, RootState } from "./store/reducer";
import { generateRandomString } from "./util/react/generateRandomIndex";

export const initialState: RootState = {
  tasks: [
    {
      title: "Сверстать сайт",
      tomato: 1,
      id: generateRandomString(),
      done: false
    },
    {
      title: "Aдаптив",
      tomato: 1,
      id: generateRandomString(),
      done: false
    },
  ],
};

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
