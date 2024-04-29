import slide1 from "./../../../assets/Untitled-1.png";

const Banner = () => {
  return (
    <div className="container mx-auto mt-24 md:mt-28 lg:mt-[150px] min-h-[420px]">
      <div className="md:flex justify-center items-center ">
        <div>
          <h2 className="max-w-2xl font-extrabold  md:text-5xl lg:text-6xl lg:mr-[6.5rem] ">
            {" "}
            The Best <br />
            Online Book Shop
          </h2>
          <p className="mt-5 font-light ">
            Boighor specifically created for authors and writes to present and{" "}
            <br />
            sell their books online Soufflé tart sweet.{" "}
          </p>
          <button className="btn mt-5 bg-blue-600 text-white  font-semibold  py-3 px-9 rounded duration-500 md:static hover:bg-blue-500">
            Show Books
          </button>
        </div>
        <div className="hidden  justify-center md:flex ">
          <img className="lg:w-3/5 " src={slide1} alt="..." />
        </div>
      </div>
    </div>
  );
};

export default Banner;
