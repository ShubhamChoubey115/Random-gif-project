import Random from "./components/Random";
import Tag from "./components/Tag"

export default function App() {

  return <div className="w-full h-screen items-center overflow-x-hidden flex flex-col background">
    
    <h1 className="bg-white w-11/12 text-center rounded-md mt-[40px]
     px-10 py-2 text-3xl font-bold">RANDOM GIFS</h1>
    
      
    <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">
      <Random/>
      <Tag/>
    </div>
  </div>;
}

// isme axios se api call hua hai,isme json mai convert nahi karna hota direct output ata hai
