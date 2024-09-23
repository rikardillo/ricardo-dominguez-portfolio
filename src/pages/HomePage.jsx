import { styles } from "../utils/styles";

export default function HomePage() {
  return (
    <div className="homepage flex h-full w-full grow flex-col items-center justify-center gap-8">
      <section className={styles.section}>
        <div className="max-w-[600px]">
          <h1 className="text-3xl font-bold uppercase text-amber-500">
            Web designer
          </h1>
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
        </div>
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
