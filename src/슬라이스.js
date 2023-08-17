import { createSlice } from "@reduxjs/toolkit";


const 카운터슬라이스 = createSlice({
  name: '카운터슬라이스',
  initialState: { 값: 0 },
  reducers: {
    더하기: (상태, 매개변수) => {
      상태.값 = 상태.값 + 매개변수.payload;
    },
    빼기: (상태, 매개변수) => {
      상태.값 = 상태.값 - 매개변수.payload;
    }
  }
});

export default 카운터슬라이스;
export const {더하기, 빼기} = 카운터슬라이스.actions;