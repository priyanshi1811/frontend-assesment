import React, { useState } from "react";
import mapbg from "../assets/18591063.png";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();

    if (isValid) {
      // Handle form submission
    }
  };

  return (
    <div
      className="md:flex flex-col bg-[#000] font-syne text-white md:w-full"
      style={{ backgroundImage: `url(${mapbg})` }}
    >
      <div className="md:flex m-10 justify-around md:w-full">
        <div className="text-[#626262]">
          <p className="text-[26px] font-600 font-syne">Newslleter</p>
          <p className="text-[18px] font-sans">
            Get news about articles and updates <br /> in your inbox.
          </p>
        </div>
        <div className="md:mr-20">
          <form className="md:w-full">
            <div className="mb-4 md:w-full">
              <input
                className={`font-sans border-b bg-transparent sm:w-72 w-[75%] sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 px-2 focus:outline-none" ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
                type="text"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />

              {errors.name && (
                <p className="font-sans text-red-500 text-xs mt-1">
                  {errors.name}
                </p>
              )}
            </div>
            <div className="mb-4">
              <input
                className={`font-sans border-b bg-transparent sm:w-72 w-[75%] sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 px-2 focus:outline-none" ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <p className="font-sans text-red-500 text-xs mt-1">
                  {errors.email}
                </p>
              )}
            </div>
            <div className="mb-6">
              <input
               className={`font-sans border-b bg-transparent sm:w-72 w-[75%] sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 px-2 focus:outline-none" ${
                  errors.message ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
              {errors.message && (
                <p className="font-sans text-red-500 text-xs mt-1">
                  {errors.message}
                </p>
              )}
            </div>
            <div className="text-center">
              <button
                className="font-sans font absolute text-[16px] md:w-[10%] md:h-[23%] w-[20%] h-[11%] text-[#F07E15] border-[#F07E15] border font-bold py-2 px-4 rounded-full focus:outline-none hover:bg-white-600"
                type="submit"
                onClick={handleSubmit}
              >
                SEND
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="flex flex-col md:ml-20 m-10 mb-0 text-[#fff] md:text-[120px] text-[55px] font-syne font-[800] ">
        <p>
          GET <br /> IN TOUCH
        </p>
      </div>
    </div>
  );
};

export default Contact;
