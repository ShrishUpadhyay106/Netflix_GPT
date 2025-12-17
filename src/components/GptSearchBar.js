import { useSelector } from "react-redux";
import lang from "../utils/langauagesConstants";

const GptSearchBar = () =>{
    const langKey = useSelector(strore=>(strore?.config?.lang||"en"))
    return(

        <div className="relative flex justify-center pt-[10%] ">
            <form className="w-1/2 bg-black grid grid-cols-12">
                <input className = "p-4 m-4 col-span-9" type="text" placeholder={lang[langKey]?.gptSearchPlaceHolder}/>
                <button className="p-2 m-4 col-span-3 bg-red-700 text-white rounded-lg font-bold">{lang[langKey]?.search}</button>
            </form>
        </div>
    );
};
export default GptSearchBar;