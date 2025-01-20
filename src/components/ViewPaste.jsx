import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToPastes, updateToPastes } from "../features/pasteSlice";


const ViewPaste = () => {
  const {id} = useParams();

  const allPastes = useSelector((state)=>state.paste.pastes);

  const paste = allPastes.filter((p)=>p._id === id)[0]
  return (
    <div>
    <div className="flex flex-row place-content-between gap-7" >
     <input
       type="text"
       className="rounded-2xl w-[66%] mt-2 pl-4"
       placeholder="Enter your title"
       value={paste.content}
       disabled
       onChange={(e) => setTitle(e.target.value)}
     />
    

   
  
   </div>
   <div className="">
     <textarea  value = {paste.content} onChange={(e) => setValue(e.target.value)}
     disabled
     className = "mt-8 p-4 min-w-[500px] rounded-2xl" name="" id="" placeholder="Enter the content here" rows={20}></textarea>
   </div>
  </div>
  )
}

export default ViewPaste
