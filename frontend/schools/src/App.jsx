import { useNavigate } from "react-router-dom";

  

export default function App() {
  const navigate = useNavigate();
  return (
    <>
    <section className="h-screen w-screen bg-[#FDBE5D] flex-col">
      <h1 className="text-center text-[30px] bg-white h-200px md:text-[40px]">Schools</h1>
      <div className="flex w-[100%] h-screen justify-around items-center">
             <button
        onClick={() => navigate("/addschool")}
        className="px-8 py-6  bg-blue-500 text-white rounded sm: px-2 py-2"
      >
        Add School
      </button>
      
        <button
        onClick={() => navigate("/showschool")}
        className="px-8 py-6 bg-blue-500 text-white rounded sm: px-2 py-2"
      >
        Show School
      </button>
    
      </div>
    </section>
    </>
  )
}