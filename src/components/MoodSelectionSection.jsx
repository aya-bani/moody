import { useState } from "react";
import Lottie from "lottie-react";
import happyAnimation from '../assets/animations/happy_3d.json';
import sadAnimation from '../assets/animations/sad_3d.json';
import thankfullAnimation from '../assets/animations/thankfull_3d.json';
import angryAnimation from '../assets/animations/angry_3d.json';
import lovingAnimation from '../assets/animations/loving_3d.json';

const MoodSelectionSection = ({ setSelectedMood }) => {
  const [localMood, setLocalMood] = useState(null);

  const moods = [
    { name: 'Happy', animation: happyAnimation },
    { name: 'Sad', animation: sadAnimation },
    { name: 'Thankful', animation: thankfullAnimation },
    { name: 'Angry', animation: angryAnimation },
    { name: 'Loving', animation: lovingAnimation },
  ];

  return (
    <div className="w-full bg-[#F9F9F9] py-10 flex flex-col items-center">
      <p className="text-3xl text-center mb-10 font-semibold" style={{ color: "#572907" }}>
        How are you feeling today?
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {moods.map((mood, index) => (
          <div
            key={index}
            className={`flex flex-col items-center transition-transform duration-300 transform hover:scale-105 ${
              localMood === mood.name ? "scale-105" : ""
            }`}
          >
            <div className="relative w-40 h-40">
              <Lottie animationData={mood.animation} style={{ width: "100%", height: "100%" }} />
            </div>
            <button
              onClick={() => {
                setLocalMood(mood.name);
                setSelectedMood(mood.name);
              }}
              className={`mt-4 text-lg font-medium rounded-full transition-colors duration-300  ${
                localMood === mood.name ? "bg-[#da8810] text-white" : "text-[#da8810]"
              }`}
              style={{
                backgroundColor: localMood === mood.name ? "#da8810" : "white",
                border: "1px solid #da8810",
                width: "8vw",
                minWidth: "100px",
                padding: "0.5rem 1rem",
              }}
            >
              {mood.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MoodSelectionSection;
