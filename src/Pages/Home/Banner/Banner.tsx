import slide1 from "./../../../assets/Untitled-1.png"

const Banner = () => {
    return (
        <div className="container mx-auto mt-20 min-h-[420px]">
            <div className="md:flex justify-center items-center ">
                <div>
                    <h2 className="font-bold md:text-6xl w-96"> The Best Online Book Shop</h2>
                    <p className="mt-6 font-light md:w-6/12">Boighor specifically created for authors and writes to present and sell their
                     books online Soufflé tart sweet. </p>
                     
                     
                     <a href="#_" className="mt-6 box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none">
                        <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                        <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                        <span className="relative z-20 flex items-center text-sm">
                        <svg className="relative w-5 h-5 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        Show More
                        </span>
                    </a>
                     
                </div>
                <div className=" md:w-4/12  ">
                    <img src={slide1} alt="..."  />

                </div>
            </div>
        </div>
    );
};

export default Banner;