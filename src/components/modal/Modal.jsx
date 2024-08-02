import { createPortal } from "react-dom";

export default function Modal({open}) {

  
  return createPortal(
    <dialog className="mx-[30%] my-[15%]  backdrop-blur-3xl" open={open}>
      <h1 className="text-6xl">Error</h1>
      <button className="text-2xl text-white bg-slate-600" >Cancel</button>
    </dialog>,
    document.getElementById("modal")
  );
}
