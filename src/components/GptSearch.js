import { BG_IMG } from "../utils/constants";
import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () =>{
    return(

        <div>
            <div className="absolute  -z-20">
             <img src={BG_IMG} />
            </div>
            
            <GptMovieSuggestion/>
            <GptSearchBar/>
        </div>
    );
};
export default GptSearch;