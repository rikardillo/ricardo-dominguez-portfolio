import { styles } from "../utils/styles";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HomePage() {
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 200], [1, 0]);

  return (
    <div className="homepage flex w-full grow flex-col items-center justify-center gap-8">
      <section className={styles.section}>
        <motion.header
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ staggerChildren: 0.3, duration: 0.3 }}
          className="max-w-[600px]"
        >
          <motion.h1
            style={{opacity: headerOpacity}}
            className="text-3xl font-bold uppercase text-amber-500"
          >
            Web designer
          </motion.h1>
          <h3 className="font-light uppercase tracking-[6px]">
            born in the caribbean
          </h3>
          <h1 className="text-[2rem] font-light">
            <p>
              I believe deeply in{" "}
              <strong className="font-bold text-amber-500">creating</strong>{" "}
              beauty
            </p>
            <p>
              and <strong className="font-bold text-amber-500">sharing</strong>{" "}
              it as much as possible
            </p>
            <p></p>
          </h1>
        </motion.header>
      </section>

      <section className={`${styles.section} bg-white/20`}>
        <div className="max-w-[600px]">
          <p className="font-extralight">
            My freetime is full of art, guitar playing and a whole lot of
            nature. Whether it's rock-climbing, freediving or just walking
            barefoot in the beach or the woods, all things nature move my
            spirit.
          </p>
        </div>
      </section>
    </div>
  );
}
