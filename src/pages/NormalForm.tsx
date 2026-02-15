import { useState } from "react";

function NormalForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div  className="flex w-full h-screen justify-center items-center flex-col gap-2">
    <form onSubmit={handleSubmit} className="bg-purple-900 text-white p-3 flex gap-2 border-amber-300 rounded-2xl">
      <label>Name :</label>
      <input className="outline-none border-white" onChange={(e) => setEmail(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
    </div>
  );
}

export default NormalForm