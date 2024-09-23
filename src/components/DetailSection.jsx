export default function DetailSection({ children, title }) {
  return (
    <section className="flex flex-col justify-center">
      <h2 className="text-2xl font-extrabold uppercase text-amber-500">
        {title}
      </h2>
      <div className="flex flex-col gap-4 font-light">{children}</div>
    </section>
  );
}
