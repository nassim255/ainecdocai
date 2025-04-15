import React from "react";

function Registration() {
    const handleSubmit = (e) => {
        e.preventDefault();
        const url =
          "https://script.google.com/macros/s/AKfycbwulHB_ORUqckCTFxifKUeEKZWLswVINRHwz5a3BhoUp_B3WH9tH8a1yPmd92mJnXqckA/exec";
        fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: `Name=${e.target.name.value}&Email=${e.target.email.value}&Phone=${e.target.phone.value}
          &Team=${e.target.team.value}&Member1=${e.target.member1.value}&Member2=${e.target.member2.value}&Member3=${e.target.member3.value}&Member4=${e.target.member4.value}`,
        })
          .then((res) => res.text())
          .then((data) => {
            console.log(data);
            alert(data);
          })
          .catch((error) => console.log(error));
      };
    
    return (
        <>
          <div className="my-16 mx-auto max-w-xl sm:max-w-5xl px-10 py-16">
              <form onSubmit={handleSubmit} className="relative overflow-y-auto h-[500px] flex flex-col mx-auto max-w-xl px-6 py-6 sm:w-[380px] sm:px-6 sm:py-6 md:w-full md:px-8 md:py-10 rounded-xl shadow-2xl bg-custom-gradient">
                {/* <button
                  type="button"
                  className="absolute top-4 right-6 text-gray-500 hover:text-gray-700"
                  aria-label="Close"
                >
                  X
                </button> */}
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-xs font-bold text-black bg-custom-gradient"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="shadow-sm bg-gray-50 border-[4px] box-border  border-sky-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none placeholder:text-gray-400 placeholder:font-medium"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-xs font-bold text-black "
                  >
                    Your Email{" "}
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="shadow-sm bg-gray-50 border-[4px] box-border  border-sky-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none placeholder:text-gray-400 placeholder:font-medium"
                    placeholder="name@example.com"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="phone"
                    className="block mb-2 text-xs font-bold text-black "
                  >
                    Phone Number
                  </label>
                  <input
                    type="phone"
                    name="phone"
                    className="shadow-sm bg-gray-50 border-[4px] box-border  border-sky-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none placeholder:text-gray-400 placeholder:font-medium"
                    placeholder="+213xxxxxxxxx"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="team"
                    className="block mb-2 text-xs font-bold text-black "
                  >
                    Team Name
                  </label>
                  <input
                    type="text"
                    name="team"
                    className="shadow-sm bg-gray-50 border-[4px] box-border  border-sky-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  block w-full p-2.5 outline-none placeholder:text-gray-400 placeholder:font-medium"
                    placeholder="Team name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="team"
                    className="block mb-2 text-xs font-bold text-black "
                  >
                    Team Members(1-5 max)
                  </label>
                  <input
                    type="text"
                    name="member1"
                    className="shadow-sm bg-gray-50 border-[4px] box-border  border-sky-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  block w-full p-2.5 outline-none placeholder:text-gray-400 placeholder:font-medium"
                    placeholder="Member 1"
                    
                  />
                  <input
                    type="text"
                    name="member2"
                    className="shadow-sm bg-gray-50 border-[4px] box-border  border-sky-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  block w-full p-2.5 outline-none placeholder:text-gray-400 placeholder:font-medium"
                    placeholder="Member 2"
                    
                  />
                  <input
                    type="text"
                    name="member3"
                    className="shadow-sm bg-gray-50 border-[4px] box-border  border-sky-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  block w-full p-2.5 outline-none placeholder:text-gray-400 placeholder:font-medium"
                    placeholder="Member 3"
                    
                  />
                  <input
                    type="text"
                    name="member4"
                    className="shadow-sm bg-gray-50 border-[4px] box-border  border-sky-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  block w-full p-2.5 outline-none placeholder:text-gray-400 placeholder:font-medium"
                    placeholder="Member 4"
                    
                  />
                  
                </div>
                <div className="flex flex-col space-x-12 mb-4 pt-2">
                  <div className="block  text-sm font-medium text-transparent bg-custom-gradient">
                    In case you can't travel at the end of the event, can yo stay in the residence ?
                  </div>
                  
                  
                </div>
              
                <div className="flex justify-center items-center mb-4">
                  <button
                    type="submit"
                    className="text-white transition duration-300 bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2 text-center "
                  >
                    Register
                  </button>
              
                </div>
              </form>
          </div>
        </>
      );
}

export default Registration;
