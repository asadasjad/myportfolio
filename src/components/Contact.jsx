import { useState } from "react";
import Stepper, { Step } from "./Stepper";

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");

  return (
    <div className="p-8 flex justify-center">
      {/* Button to trigger the stepper */}
      <button
        className="  bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 active:scale-95 transition-transform  duration-150"
        onClick={() => setIsOpen(true)}
      >
        Say Hello
      </button>

      {/* Stepper rendered only when isOpen is true */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50  flex items-center justify-center z-50">
          <div className=" text-black p-6 rounded shadow-lg w-96 max-w-full">
          <div className="relative"><button
          onClick={() => setIsOpen(false)}
          className='absolute top-2 focus:outline-none bg-transparent z-[900] right-4 text-black hover:text-gray-800 text-2xl cursor-pointer '
        >
          x
        </button></div>
            <Stepper
              initialStep={1}
              onStepChange={(step) => console.log(step)}
              onFinalStepCompleted={() => console.log("All steps completed!")}
              backButtonText="Previous"
              nextButtonText="Next"
            >
              
              <Step>
                <h2>Welcome to the React Bits stepper!</h2>
                <p>Check out the next step!</p>
              </Step>
              <Step>
                <h2>Step 2</h2>
                <img
                  style={{
                    height: "100px",
                    width: "100%",
                    objectFit: "cover",
                    objectPosition: "center -70px",
                    borderRadius: "15px",
                    marginTop: "1em",
                  }}
                  src="https://www.purrfectcatgifts.co.uk/cdn/shop/collections/Funny_Cat_Cards_640x640.png?v=1663150894"
                />
                <p>Custom step content!</p>
              </Step>
              <Step >
                <h2>How about an input?</h2>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name?"
                  className="border focus:outline-none  border-gray-300 p-2 rounded w-full"
                />
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name?"
                  className="border focus:outline-none  border-gray-300 p-2 rounded w-full"
                />
              </Step>
              <Step>
                <h2>Final Step</h2>
                <p>You made it!</p>
                
              </Step>
            </Stepper>
          </div>
        </div>
      )}
    </div>
  );
}
