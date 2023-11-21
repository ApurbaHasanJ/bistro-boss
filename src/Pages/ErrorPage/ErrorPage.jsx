import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="h-screen my-container">
            <img className="h-[80%] mx-auto" src="https://i.postimg.cc/Pr13PQ5W/404.gif" alt="Page not found" />
            <div className="flex justify-center">
                <Link to="/" type="button" className="  border-none bg-gradient-to-r from-[#835D23] hover:from-[#a57224] hover:to-[#d28209] to-[#c87f12] flex justify-center items-center gap-3 p-4 px-5 text-white bg-[#d1a054b3] hover:bg-[#ec9f2db3]">
                    <span className="text-xl font-semibold">Back To Home</span>
                    <AiFillHome  className="text-xl"/>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;