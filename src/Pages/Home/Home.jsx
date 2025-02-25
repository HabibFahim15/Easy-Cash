import Banner from "../../components/Banner/Banner";
import Accordion from "../../components/Home/Accordion";

const Home = () => {
  return (
    <div>
      <Banner />
      <section>
        <h2 className="text-4xl text-center font-bold">Our Services</h2>
        <p className="text-center my-1">There so meny services we have for you. You can choose one of them.</p>

        <div className="md:flex md:justify-between items-center my-4 md:my-16">
          <div className="order-1 md:order-2">
            <img
              className="w-full h-auto md:w-[650px] md:h-[500px]"
              src="https://static.vecteezy.com/system/resources/previews/003/175/730/non_2x/online-mobile-banking-vector.jpg"
              alt="Online Banking"
            />
          </div>

          <div className="order-2 md:order-1 mt-4 md:mt-0">
            <h1 className="text-2xl font-bold">Bank to Easy-Cash</h1>
            <p className="my-4">
              You can transfer money from your bank to Easy-Cash. <br />
              You can also transfer money from Easy-Cash to your bank. <br />
              You will get a bonus for bank to Easy-Cash.
            </p>
            <a
              href="/"
              className="relative inline-flex items-center px-8 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50"
            >
              <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
              <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </span>
              <span className="relative">See more</span>
            </a>
          </div>
        </div>


        <div className="md:flex md:justify-between items-center my-4 md:my-16">
        <div >
            <img
              className="w-full h-auto md:w-[650px] md:h-[500px]"
              src="https://static.vecteezy.com/system/resources/previews/003/175/730/non_2x/online-mobile-banking-vector.jpg"
              alt="Online Banking"
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold mt-4">Card to Easy-Cash</h1>
            <p className="my-4">
              Insufficient balance? <br />
              You can transfer money from your credit card to Easy-Cash. <br />
              You will get a bonus for card to Easy-Cash.
            </p>
            <a
              href="/"
              className="relative inline-flex items-center px-8 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50"
            >
              <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
              <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </span>
              <span className="relative">See more</span>
            </a>
          </div>
          
        </div>
      </section>
      <Accordion />
    </div>
  );
};

export default Home;