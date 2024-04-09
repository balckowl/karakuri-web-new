import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const ProbClearAlert = () => {
  // テキスト
  const probClearText = "鍵が開く音がした";
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (

    <AnimatePresence>
      {isVisible && (
        <motion.div
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 0.5, delay: 0.5 }}
          exit={{ opacity: [1, 0] }}
          className="absolute bottom-[50px] left-0 w-full"
        >
          <div className="relative z-[1000] mx-auto h-[200px] w-4/5 text-xl text-white">
            <div className="absolute z-[1100] flex p-[16px]">
              {probClearText.split("").map((word: string, index: number) => (
                <motion.div
                  animate={{ opacity: [0, 1] }}
                  transition={{ duration: 0.5, delay: 1.5 + index * 0.05 }}
                  key={index}
                >
                  {word}
                </motion.div>
              ))}
            </div>
            {/* テキストの背景 */}
            <div className="absolute z-[900] mx-auto size-full rounded-md bg-black outline outline-[10px] outline-gray-500"></div>
          </div>
        </motion.div>
      )}

    </AnimatePresence>

  );
};

export default ProbClearAlert;
