import { Link } from "react-router-dom";
import { ImageKit as Image } from "./Image";

export const Post = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-8 ">
      {/* Image */}
      <div className="md:hidden xl:block xl:w-1/3">
        <Image
          src="postImage.jpeg"
          className="rounded-2xl object-cover"
          w="735"
        />
      </div>
      {/* details */}
      <div className="flex flex-col gap-4 xl:w-2/3">
        <Link to="/test" className="text-4xl font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem illo minima blanditiis ad.
        </Link>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span>Written by</span>
          <Link className="text-blue-800">John Doe</Link>
          <span>on</span>
          <Link className="text-blue-800">Web Design</Link>
          <span>2 days ago</span>
        </div>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus maiores
          laudantium a sint corporis dolore temporibus architecto quas libero.
          Molestiae tenetur perferendis rerum recusandae possimus sapiente
          exercitationem corrupti amet et.
        </p>
        <Link to="/test" className="text-blue-800 underline text-sm">
          Read More
        </Link>
      </div>
    </div>
  );
};
