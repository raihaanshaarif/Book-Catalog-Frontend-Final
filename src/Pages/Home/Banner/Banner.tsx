import slide1 from "./../../../assets/9.png"

const Banner = () => {
    return (
        <div className="container mx-auto mt-20 min-h-[420px]">
            <div className="flex justify-center items-center">
                <div>
                    <h2 className="font-bold"> The Best Online Book Shop</h2>
                    <p>Boighor specifically created for authors and writes to present and sell their
                     books online Soufflé tart sweet. </p>
                     <button>More Books</button>
                </div>
                <div>
                    <img src={slide1} alt="..."  />

                </div>
            </div>
        </div>
    );
};

export default Banner;