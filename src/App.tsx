import { useState } from "react";

const App = () => {
  const [count, setcount] = useState(0);
  const InFun = () => {
     setcount(count + 1)
  } 
  const DeFun = () => {
    if (count<=0) {
       setcount(count);
    }else{
       setcount(count - 1)
     }
  } 
  return (
    <div className="flex justify-center items-center h-screen flex-col bg-[#0c010c] gap-2">
      <div className="bg-[#5f1f5f96] w-20 text-center text-white p-2 rounded-sm text-xl border border-[#ffffff65]">
        {count}
      </div>
      <div className="flex gap-3">
        <button onClick={InFun} className="bg-[#1f235f96] text-center text-white p-2 rounded-sm text-xl border border-[#ffffff65]">Increment</button>
        <button onClick={DeFun} className="bg-[#5f231f96]  text-center text-white p-2 rounded-sm text-xl border border-[#ffffff65]">Decrement</button>
      </div>
    </div>
  );
};

export default App;
