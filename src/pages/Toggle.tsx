import { useState } from "react"

const Toggle = () => {

    const [tog, setTog] = useState(false)

    const toggleHandler = () =>{
        if(tog===true){
            setTog(false)
        }else(
            setTog(true)
        )
    }

  return (
    <div className={`flex justify-center items-center h-screen w-full ${tog===true?"bg-blue-950":"bg-purple-950"}  text-white`}>
            <button onClick={toggleHandler} className="p-3 bg-amber-700 text-teal-900 border border-amber-500 text-2xl">Toggle Button</button>
    </div>
  )
}

export default Toggle