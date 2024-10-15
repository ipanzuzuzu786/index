import React, {useState, useEffect, useRef} from "react";

function AllUse() {
 const inputRef = useRef(null)

 useEffect(() => {
     console.log("Use Effect called")
     console.log(inputRef)
 })

 function handleClick() {
     inputRef.current.focus();
 }
 return (
     <div>
         
         <button onClick={handleClick}>Increment</button>
         <input ref={inputRef} />
     </div>
 )

}
export default AllUse