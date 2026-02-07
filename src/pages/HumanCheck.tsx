import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: 'What do you call a bear with no teeth?',
    options: ['A grizzly', 'A gummy bear', 'A toothless bear', 'A friendly bear'],
    correct: 1,
    explanation: 'A GUMMY BEAR! Classic riddle.',
  },
  {
    id: 2,
    question: 'What color is the sky on a clear day?',
    options: ['Blue', 'Green', 'Red', 'Purple'],
    correct: 0,
    explanation: 'Blue! Though technically, the sky scatters blue light more than other colors.',
  },
  {
    id: 3,
    question: 'How many legs does a spider have?',
    options: ['6', '8', '10', '12'],
    correct: 1,
    explanation: 'Spiders have 8 legs, which is why they\'re arachnids!',
  },
  {
    id: 4,
    question: 'What\'s the capital of France?',
    options: ['London', 'Paris', 'Berlin', 'Amsterdam'],
    correct: 1,
    explanation: 'Paris, the City of Light!',
  },
  {
    id: 5,
    question: 'Which planet is closest to the Sun?',
    options: ['Venus', 'Mercury', 'Earth', 'Mars'],
    correct: 1,
    explanation: 'Mercury! It\'s the smallest planet and closest to the Sun.',
  },
];

export function HumanCheck() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState<number[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const current = questions[currentIndex];
  const isAnswered = answered.includes(currentIndex);
  const quizComplete = answered.length === questions.length;

  const handleAnswer = (optionIndex: number) => {
    if (isAnswered) return;

    setSelectedAnswer(optionIndex);
    setShowExplanation(true);
    setAnswered([...answered, currentIndex]);

    if (optionIndex === current.correct) {
      setScore((prev) => prev + 1);
    }
  };

  const nextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    }
  };

  const restartQuiz = () => {
    setCurrentIndex(0);
    setScore(0);
    setAnswered([]);
    setSelectedAnswer(null);
    setShowExplanation(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-900 to-blue-900 text-white p-8">
      <Link to="/" className="text-blue-300 hover:underline mb-8 inline-block">
        ← Back to Home
      </Link>

      <div className="max-w-2xl mx-auto">
        <h1 className="text-5xl font-bold mb-2 text-center">Human Verification</h1>
        <p className="text-center text-lg text-gray-300 mb-8">Prove you're human by answering these questions</p>

        {!quizComplete ? (
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-black/30 rounded-lg p-6 mb-6 border border-cyan-500">
              <div className="flex justify-between items-center mb-4">
                <div className="text-sm text-gray-400">Question {currentIndex + 1} of {questions.length}</div>
                <div className="text-sm text-cyan-400 font-bold">Score: {score}</div>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-cyan-500 h-2 rounded-full transition-all"
                  style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
                ></div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-900 to-cyan-900 rounded-lg p-8 mb-6 border border-cyan-400">
              <h2 className="text-2xl font-bold mb-6">{current.question}</h2>

              <div className="space-y-3">
                {current.options.map((option, idx) => (
                  <motion.button
                    key={idx}
                    onClick={() => handleAnswer(idx)}
                    disabled={isAnswered}
                    whileHover={!isAnswered ? { scale: 1.02 } : {}}
                    whileTap={!isAnswered ? { scale: 0.98 } : {}}
                    className={`w-full p-4 rounded-lg text-left transition font-medium ${
                      selectedAnswer === idx
                        ? idx === current.correct
                          ? 'bg-green-600 border-2 border-green-400'
                          : 'bg-red-600 border-2 border-red-400'
                        : isAnswered && idx === current.correct
                        ? 'bg-green-600 border-2 border-green-400'
                        : 'bg-blue-700 hover:bg-blue-600 border-2 border-blue-500'
                    }`}
                  >
                    {option}
                  </motion.button>
                ))}
              </div>

              {showExplanation && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 p-4 bg-black/40 rounded-lg border border-cyan-400"
                >
                  <p className="text-gray-300">{current.explanation}</p>
                </motion.div>
              )}
            </div>

            {isAnswered && currentIndex < questions.length - 1 && (
              <motion.button
                onClick={nextQuestion}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-cyan-600 hover:bg-cyan-700 px-8 py-3 rounded-lg font-bold transition"
              >
                Next Question
              </motion.button>
            )}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gradient-to-br from-green-900 to-cyan-900 rounded-lg p-8 text-center border border-green-500"
          >
            <div className="text-6xl mb-4">🎉</div>
            <h2 className="text-3xl font-bold mb-4">Quiz Complete!</h2>
            <p className="text-2xl font-bold text-green-300 mb-6">
              You got {score} out of {questions.length} correct!
            </p>
            <p className="text-lg text-gray-300 mb-8">
              {score === questions.length
                ? 'Perfect! You\'re definitely human!'
                : score >= questions.length * 0.8
                ? 'Great job! You passed!'
                : 'Good effort! Try again?'}
            </p>
            <motion.button
              onClick={restartQuiz}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-600 hover:bg-green-700 px-8 py-3 rounded-lg font-bold transition"
            >
              Restart Quiz
            </motion.button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
