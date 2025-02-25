import { useState } from "react";

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div
      className="h-[500px] flex items-center justify-center bg-cover bg-fixed"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1217&q=80')`,
      }}
    >
      <div className="w-full max-w-2xl bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Some Common Question</h2>
        {/* Accordion Item 1 */}
        <div className="border-b border-gray-200">
          <button
            onClick={() => toggleAccordion(1)}
            className="w-full flex justify-between items-center py-4 text-gray-800 hover:text-indigo-600 transition-colors"
          >
            <span className="text-lg font-medium">
              What is Material Tailwind?
            </span>
            <span
              className={`transform transition-transform duration-300 ${
                openIndex === 1 ? "rotate-180" : ""
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === 1 ? "max-h-[200px]" : "max-h-0"
            }`}
          >
            <div className="pb-4 text-gray-600">
              Material Tailwind is a framework that enhances Tailwind CSS with
              additional styles and components.
            </div>
          </div>
        </div>

        {/* Accordion Item 2 */}
        <div className="border-b border-gray-200">
          <button
            onClick={() => toggleAccordion(2)}
            className="w-full flex justify-between items-center py-4 text-gray-800 hover:text-indigo-600 transition-colors"
          >
            <span className="text-lg font-medium">
              How to use Material Tailwind?
            </span>
            <span
              className={`transform transition-transform duration-300 ${
                openIndex === 2 ? "rotate-180" : ""
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === 2 ? "max-h-[200px]" : "max-h-0"
            }`}
          >
            <div className="pb-4 text-gray-600">
              You can use Material Tailwind by importing its components into
              your Tailwind CSS project.
            </div>
          </div>
        </div>

        {/* Accordion Item 3 */}
        <div className="border-b border-gray-200">
          <button
            onClick={() => toggleAccordion(3)}
            className="w-full flex justify-between items-center py-4 text-gray-800 hover:text-indigo-600 transition-colors"
          >
            <span className="text-lg font-medium">
              What can I do with Material Tailwind?
            </span>
            <span
              className={`transform transition-transform duration-300 ${
                openIndex === 3 ? "rotate-180" : ""
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === 3 ? "max-h-[200px]" : "max-h-0"
            }`}
          >
            <div className="pb-4 text-gray-600">
              Material Tailwind allows you to quickly build modern, responsive
              websites with a focus on design.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;