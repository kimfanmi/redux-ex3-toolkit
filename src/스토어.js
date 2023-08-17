import { configureStore } from "@reduxjs/toolkit";
import 스슬 from "./슬라이스";


const 스토어 = configureStore({
  reducer: {
    카운터: 스슬.reducer
  }
});

export default 스토어;