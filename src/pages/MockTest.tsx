import React, { useState, useEffect } from 'react';

interface Question {
  question: string;
  options: string[];
  correct: string;
  sign?: string;
}

interface TestResult {
  question: string;
  selected: string | null;
  correct: string;
  isCorrect: boolean;
}

const mockTests: Question[][] = [
  [
    { question: "What is the speed limit in a residential area?", options: ["30 km/h", "50 km/h", "60 km/h", "80 km/h"], correct: "50 km/h" },
    { question: "What does a red traffic light mean?", options: ["Go", "Slow Down", "Stop", "Yield"], correct: "Stop" },
    { question: "Who has the right of way at an uncontrolled intersection?", options: ["The fastest vehicle", "The vehicle on the left", "The vehicle on the right", "Pedestrians only"], correct: "The vehicle on the right" },
    { question: "What should you do before changing lanes?", options: ["Signal and check mirrors", "Just signal", "Honk and move", "Speed up"], correct: "Signal and check mirrors" },
    { question: "When can you overtake a vehicle on the right?", options: ["In a one-way street", "Never", "On any road", "When the vehicle is turning left"], correct: "In a one-way street" },
    { question: "What should you do when approaching a school zone?", options: ["Increase speed", "Honk", "Slow down and watch for children", "Ignore signs"], correct: "Slow down and watch for children" },
    { question: "What does a flashing red light mean?", options: ["Stop and proceed when safe", "Go quickly", "Yield", "Ignore"], correct: "Stop and proceed when safe" },
    { question: "How often should you check your blind spots?", options: ["Every 5 seconds", "Before changing lanes", "Never", "Once per minute"], correct: "Before changing lanes" },
    { question: "What should you do if you hear an emergency vehicle siren?", options: ["Speed up", "Pull over to the right", "Ignore", "Honk back"], correct: "Pull over to the right" },
    { question: "How can you prevent drowsy driving?", options: ["Drink coffee", "Take regular breaks", "Turn up the radio", "Drive faster"], correct: "Take regular breaks" }
  ],
  [
    { question: "What does this sign mean?", options: ["Right hand curve", "Left reverse bend", "Right reverse bend", "Hair pin bend right"], correct: "Right hand curve", sign: "rightcurve.jpg" },
    { question: "When should you use high beam headlights?", options: ["In fog", "At night on an empty road", "In heavy traffic", "Never"], correct: "At night on an empty road" },
    { question: "What should you do at a pedestrian crossing?", options: ["Speed up", "Honk and pass", "Stop for pedestrians", "Ignore"], correct: "Stop for pedestrians" },
    { question: "What is the main purpose of ABS (Anti-lock Braking System)?", options: ["Increase speed", "Prevent skidding", "Reduce fuel consumption", "Make turns smoother"], correct: "Prevent skidding" },
    { question: "What should you do if your car starts hydroplaning?", options: ["Brake hard", "Steer sharply", "Ease off the gas and steer straight", "Speed up"], correct: "Ease off the gas and steer straight" },
    { question: "How should you approach a sharp curve?", options: ["Accelerate", "Slow down before entering", "Honk and go", "Close your eyes"], correct: "Slow down before entering" },
    { question: "What should you do in case of a tire blowout?", options: ["Brake immediately", "Grip the steering wheel firmly and slow down gradually", "Honk and stop", "Turn sharply"], correct: "Grip the steering wheel firmly and slow down gradually" },
    { question: "What should you do if you miss your exit on a highway?", options: ["Reverse back", "Take the next exit", "Stop immediately", "Make a U-turn"], correct: "Take the next exit" },
    { question: "What is tailgating?", options: ["Following another vehicle too closely", "Overtaking recklessly", "Driving in the middle lane", "Driving slowly"], correct: "Following another vehicle too closely" },
    { question: "What does a flashing yellow traffic light mean?", options: ["Stop", "Proceed with caution", "Speed up", "No entry"], correct: "Proceed with caution" },
  ],
  [
    { question: "What should you do if your brakes fail?", options: ["Turn off the engine", "Pull the handbrake slowly", "Jump out", "Press the horn"], correct: "Pull the handbrake slowly" },
    { question: "What does a no-entry sign mean?", options: ["Do not enter", "One-way street", "Pedestrian zone", "No honking"], correct: "Do not enter" },
    { question: "What is the main purpose of ABS (Anti-lock Braking System)?", options: ["Increase speed", "Prevent skidding", "Reduce fuel consumption", "Make turns smoother"], correct: "Prevent skidding" },
    { question: "What should you do if your car starts hydroplaning?", options: ["Brake hard", "Steer sharply", "Ease off the gas and steer straight", "Speed up"], correct: "Ease off the gas and steer straight" },
    { question: "How should you approach a sharp curve?", options: ["Accelerate", "Slow down before entering", "Honk and go", "Close your eyes"], correct: "Slow down before entering" },
    { question: "What should you do in case of a tire blowout?", options: ["Brake immediately", "Grip the steering wheel firmly and slow down gradually", "Honk and stop", "Turn sharply"], correct: "Grip the steering wheel firmly and slow down gradually" },
    { question: "What should you do if you miss your exit on a highway?", options: ["Reverse back", "Take the next exit", "Stop immediately", "Make a U-turn"], correct: "Take the next exit" },
    { question: "What is tailgating?", options: ["Following another vehicle too closely", "Overtaking recklessly", "Driving in the middle lane", "Driving slowly"], correct: "Following another vehicle too closely" },
    { question: "What does a flashing yellow traffic light mean?", options: ["Stop", "Proceed with caution", "Speed up", "No entry"], correct: "Proceed with caution" },
    { question: "How often should you check your mirrors while driving?", options: ["Every 5 seconds", "Every 10-15 seconds", "Once a minute", "Never"], correct: "Every 10-15 seconds" }
  ],
  [
    { question: "What does a solid white line on the road mean?", options: ["No lane changing", "You can overtake", "Pedestrian zone", "Parking allowed"], correct: "No lane changing" },
    { question: "What is the minimum safe following distance?", options: ["1 second", "2 seconds", "3 seconds", "5 seconds"], correct: "3 seconds" },
    { question: "Who has the right of way at an uncontrolled intersection?", options: ["The fastest vehicle", "The vehicle on the left", "The vehicle on the right", "Pedestrians only"], correct: "The vehicle on the right" },
    { question: "What should you do before changing lanes?", options: ["Signal and check mirrors", "Just signal", "Honk and move", "Speed up"], correct: "Signal and check mirrors" },
    { question: "When can you overtake a vehicle on the right?", options: ["In a one-way street", "Never", "On any road", "When the vehicle is turning left"], correct: "In a one-way street" },
    { question: "What should you do when approaching a school zone?", options: ["Increase speed", "Honk", "Slow down and watch for children", "Ignore signs"], correct: "Slow down and watch for children" },
    { question: "What does a flashing red light mean?", options: ["Stop and proceed when safe", "Go quickly", "Yield", "Ignore"], correct: "Stop and proceed when safe" },
    { question: "How often should you check your blind spots?", options: ["Every 5 seconds", "Before changing lanes", "Never", "Once per minute"], correct: "Before changing lanes" },
    { question: "What should you do if you hear an emergency vehicle siren?", options: ["Speed up", "Pull over to the right", "Ignore", "Honk back"], correct: "Pull over to the right" },
    { question: "How can you prevent drowsy driving?", options: ["Drink coffee", "Take regular breaks", "Turn up the radio", "Drive faster"], correct: "Take regular breaks" }
  ],
];

  const MockTest: React.FC = () => {
  const [currentTest, setCurrentTest] = useState(() => mockTests[Math.floor(Math.random() * mockTests.length)]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10 * 60); // 10 minutes in seconds
  const [carPosition, setCarPosition] = useState(5);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [results, setResults] = useState<TestResult[]>([]);
  const [showScore, setShowScore] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setShowScore(true); // Auto-submit when time runs out
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleAnswerSelect = (answer: string) => {
    
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    const isCorrect = selectedAnswer === currentTest[currentQuestion].correct;
    setResults((prev) => [
      ...prev,
      {
        question: currentTest[currentQuestion].question,
        selected: selectedAnswer,
        correct: currentTest[currentQuestion].correct,
        isCorrect,
      },
    ]);
    const newPosition = ((currentQuestion + 1) / currentTest.length) * 100;
    setCarPosition(newPosition);
    if (currentQuestion < currentTest.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
    setSelectedAnswer(null);
  };

  const handleSubmit = () => {
    const isCorrect = selectedAnswer === currentTest[currentQuestion].correct;
    setResults((prev) => [
      ...prev,
      {
        question: currentTest[currentQuestion].question,
        selected: selectedAnswer,
        correct: currentTest[currentQuestion].correct,
        isCorrect,
      },
    ]);
    setShowScore(true);
  };

  const progress = ((currentQuestion + 1) / currentTest.length) * 100;
  const score = results.filter((result) => result.isCorrect).length;
  const totalQuestions = results.length;
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-24">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full "style={{ maxWidth: '1400px' }}>
        <div className="text-center text-blue-800 font-serif font-bold tracking-wide pl-8 md:pl-8 mb-8">KANDIVALI MOTOR TRAINING SCHOOL</div>
        <div className="flex items-center justify-between mb-4 mt-2">
          <video
            src="animationcar1.webm" // Replace with your .webm file URL
            autoPlay
            loop
            muted
            className="transition-all duration-500"
            style={{ position: 'relative', left: `${carPosition}%`, maxWidth: '150px', maxHeight: '150px' }} // Increased size
          />
          <div className="flex-1 h-2 bg-gray-300 mx-2 rounded-full overflow-hidden">
            <div className="h-full bg-blue-500" style={{ width: `${progress}%` }}></div>
          </div>
          <div className="bg-purple-200 text-purple-800 px-3 py-1 rounded-full">
            Question {currentQuestion + 1}/{currentTest.length}
          </div>
          <div className="text-red-500 font-bold ml-2">{`${minutes}:${seconds < 10 ? '0' + seconds : seconds}`}</div>
        </div>
        {!showScore && currentQuestion < currentTest.length && (
          <>
            <div className="text-lg font-semibold mb-4">
              {currentTest[currentQuestion].question}
              {currentTest[currentQuestion].sign && (
                <img src={currentTest[currentQuestion].sign} alt="Sign" className="mt-2 mx-auto" style={{ maxWidth: '100px' }} />
              )}
            </div>
            <div className="space-y-3">
              {currentTest[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  className={`w-full py-2 px-4 bg-white focus:outline-2 focus:outline-offset-2 focus:outline-gray-500 active:bg-gray-700 border-2 border-gray-300 rounded-lg hover:bg-gray-100 text-left transition-colors ${
                    selectedAnswer === option ? 'bg-gray border-blue-500' : ''
                  }`}
                  onClick={() => handleAnswerSelect(option)}
                >
                  {String.fromCharCode(65 + index)}) {option}
                </button>
              ))}
            </div>
            <div className="mt-4 flex justify-end space-x-2">
              {currentQuestion < currentTest.length - 1 ? (
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 disabled:bg-blue-300"
                  onClick={handleNextQuestion}
                  disabled={selectedAnswer === null}
                >
                  Next
                </button>
              ) : (
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 disabled:bg-green-300"
                  onClick={handleSubmit}
                  disabled={selectedAnswer === null}
                >
                  Submit
                </button>
              )}
            </div>
          </>
        )}
        {showScore && (
          <div className="mt-4">
            <h2 className="text-xl font-bold mb-2">Test Results</h2>
            <p className="mb-4"><strong>Score: {score} out of {totalQuestions}</strong></p>
            {results.map((result, index) => (
              <div key={index} className="mb-2 p-2 border rounded">
                <p><strong>Question:</strong> {result.question}</p>
                <p><strong>Your Answer:</strong> {result.selected || 'Not answered'}</p>
                <p><strong>Correct Answer:</strong> {result.correct}</p>
                <p className={result.isCorrect ? 'text-green-500' : 'text-red-500'}>
                  <strong>Result:</strong> {result.isCorrect ? 'Correct' : 'Wrong'}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MockTest;