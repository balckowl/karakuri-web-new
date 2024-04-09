import Image from "next/image";
import { motion } from "framer-motion";

const PartSendingText = ({ textList, textIndex }: { textList: string[] | undefined, textIndex: number }) => {
  return (
    <div className="absolute z-[1500] size-full p-[16px] text-xl text-white">
      {/* 話し手のテキスト */}
      {textList?.[0] && textList[1] &&
        <div className="flex justify-between gap-4">
          <div>
            <motion.div
              animate={{ opacity: [0, 1] }}
              transition={textIndex === 0 ? { delay: 1, duration: 0.5 } : { duration: 0.3 }}
              className="mb-2">{textList[0]=="you" ? "あなた" : textList[0]} :
            </motion.div>

            <div className="flex flex-wrap">
              {textList[1].split("").map((word: string, index: number) => (
                <motion.div
                  animate={{ opacity: [0, 1] }}
                  transition={textIndex !== 0 ? { duration: 0.2, delay: 0.5 + index * 0.05 } : { duration: 0.5, delay: 1.5 + index * 0.05 }}
                  key={index}
                >
                  {word}
                </motion.div>
              ))}
              {/* call-to-next */}
              <motion.div
                animate={{ opacity: [0, 1] }}
                transition={{ duration: 1, delay: 1.5 }}
                className="absolute bottom-[12px]"
              >
                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  ▽
                </motion.div>
              </motion.div>
            </div>
          </div>
          {/* 話し手の画像 */}
          <motion.div
            animate={textIndex === 0 && { opacity: [0, 1] }}
            transition={{ duration: .5, delay: 1 }}
            style={{ flexShrink: 0 }}
          >
            {textList[0] === "k-15" &&
              <Image src="/images/login/karakuri-web_login_1.png" alt="main" className="size-[168px] object-fill" width="2000" height="2000" />
            }
          </motion.div>
        </div>
      }
    </div>
  );
};

export default PartSendingText;
