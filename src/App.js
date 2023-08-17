import { Provider, useDispatch, useSelector } from 'react-redux';
import './App.css';
import 스토어 from './스토어';
import { 더하기, 빼기 } from './슬라이스';



// const 초기상태값 = { 값: 0 };
// const 리듀서 = (상태 = 초기상태값, 매개변수) => {
//   if (매개변수.type === '더하기') {
//     return { ...상태, 값: 상태.값 + 매개변수.더할값 };
//   }
//   return 상태;
// }

// const 스토어 = createStore(리듀서);

// function Counter() {
//   const 디스패치 = useDispatch();
//   const 보이는숫자 = useSelector(상태 => 상태.값);
//   return (
//     <div>
//       <button onClick={() => 디스패치({ type: '더하기', 더할값: 55 })}>+</button>{보이는숫자}
//     </div>
//   )
// }
//
// function App() {
//   return (
//     <Provider store={스토어}>
//       <div>
//         <Counter />
//       </div>
//     </Provider>
//   );
// }





function Counter() {
  const 디스패치 = useDispatch();
  const 보이는숫자 = useSelector(상태=>상태.카운터.값);
  return (
    <div>
      <div>{보이는숫자}</div>
      <button onClick={()=>디스패치(빼기(678))}>-</button>
      <button onClick={()=>디스패치(더하기(678))}>+</button>
      {/* <button onClick={()=>디스패치({type:'카운터슬라이스/빼기',payload:456})}>-</button>
      <button onClick={()=>디스패치({type:'카운터슬라이스/더하기',payload:678})}>+</button> */}
    </div>
  )
}

function App() {
  return (
    <Provider store={스토어}>
      <div>
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
