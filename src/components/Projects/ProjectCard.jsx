import { GoArrowUpRight } from "react-icons/go";
import { IoInformationCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function ProjectCard({ title, link, img, icons, to }) {
  return (
    <div className="flex h-full flex-col gap-8 overflow-scroll rounded-lg">
      <div className="project-card flex flex-col gap-4">
        <div>
          <h2 className="flex items-center gap-4 text-[1.2rem] font-bold uppercase text-amber-500">
            <p>{title}</p>
            {icons.map((Icon, index) => (
              <div key={index}>{Icon}</div>
            ))}
          </h2>
          <div className="flex gap-4 text-xs font-light uppercase">
            <Link
              to={`/work/${to}`}
              className="flex items-center gap-2 transition-all duration-300 hover:font-bold hover:text-amber-500"
            >
              project details <IoInformationCircleOutline />
            </Link>
            <a
              href={link}
              className="flex items-center gap-2 transition-all duration-300 hover:font-bold hover:text-amber-500"
            >
              Visit Website <GoArrowUpRight />
            </a>
          </div>
        </div>
        <img src={img} alt={title} className="rounded-md" />
      </div>
    </div>
  );
}
