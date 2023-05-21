// import { legacy_createStore as createStore } from "redux";
// import rootred from "./redux/reducers/main";
// const store = createStore(
// rootred
// );
// export default store;

import { configureStore } from "@reduxjs/toolkit";
import rootred from "./redux/reducers/main";

const store = configureStore({
    reducer: { rootred }
})
export default store;