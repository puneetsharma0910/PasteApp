import React, { useState } from "react";
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToPastes, updateToPastes } from "../features/pasteSlice";


const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [searchParams, setsearchParams] = useSearchParams()
  const pasteId = searchParams.get('pasteId')
  const dispatch = useDispatch()
  function createPaste(){
    const paste = {
      title : title,
      content : value,
      _id : pasteId || Date.now().toString(36), createdAt: new Date().toISOString(),

    }
    if (pasteId){
      // already there
      dispatch(updateToPastes(paste));
      
    }
    else {
        dispatch(addToPastes(paste))
    }

    // after creation
    setValue("");
    setTitle('');
    setsearchParams({});
  }
  return (
   <div>
     <div className="flex flex-row place-content-between gap-7" >
      <input
        type="text"
        className="rounded-2xl w-[66%] mt-2 pl-4"
        placeholder="Enter your title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={createPaste} className="p-2 rounded-2xl mt-2">
        {
        pasteId ? "Update paste" : "Create My paste"
        }
      </button>

    
   
    </div>
    <div className="">
      <textarea  value = {value} onChange={(e) => setValue(e.target.value)}
      className = "mt-8 p-4 min-w-[500px] rounded-2xl" name="" id="" placeholder="Enter the content here" rows={20}></textarea>
    </div>
   </div>
    
  );
};

export default Home;
