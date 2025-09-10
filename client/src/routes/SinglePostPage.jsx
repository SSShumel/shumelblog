import { Link } from "react-router-dom";
import { ImageKit as Image } from "../components/Image";
import { PostMenuActions } from "../components/PostMenuActions";
import { Search } from "../components/Search";
import { Comments } from "../components/Comments";

export const SinglePostPage = () => {
  return (
    <div className="flex flex-col gap-8 ">
      {/* detail  */}
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            voluptatibus aperiam ullam.
          </h1>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Written by</span>
            <Link className="text-blue-800">John Doe</Link>
            <span>on</span>
            <Link className="text-blue-800">Web Design</Link>
            <span>2 days ago</span>
          </div>
          <p className="text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse ab
            eligendi omnis odit itaque ea explicabo aliquam porro deleniti
            voluptas eum veniam, sapiente minus. Veniam, quia velit? Quae,
            placeat nobis?
          </p>
        </div>
        <div className="hidden lg:block w-2/5">
          <Image src="postImage.jpeg" w="600" className="rounded-2xl" />
        </div>
      </div>
      {/* content */}
      <div className="flex flex-col md:flex-row gap-12">
        {/* text  */}
        <div className="lg:text-lg flex flex-col gap-6 text-justify">
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea odit
            dolore quo, nulla, nihil at cupiditate voluptate doloribus molestiae
            sunt, ratione necessitatibus exercitationem deserunt nesciunt natus
            nam obcaecati! Impedit, dolore. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Quod sint libero, officiis deserunt
            doloremque, at necessitatibus qui, laudantium similique sit sequi
            quo perferendis cum itaque natus quia officia alias. Quia. Lorem
            ipsum dolor sit, amet consectetur adipisicing elit. Nam pariatur, ab
            perferendis provident exercitationem nihil accusamus. Architecto hic
            expedita laborum dolor est vero officiis ad, facilis possimus ea
            explicabo corporis.
          </p>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea odit
            dolore quo, nulla, nihil at cupiditate voluptate doloribus molestiae
            sunt, ratione necessitatibus exercitationem deserunt nesciunt natus
            nam obcaecati! Impedit, dolore.
          </p>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea odit
            dolore quo, nulla, nihil at cupiditate voluptate doloribus molestiae
            sunt, ratione necessitatibus exercitationem deserunt nesciunt natus
            nam obcaecati! Impedit, dolore. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Quod sint libero, officiis deserunt
            doloremque, at necessitatibus qui, laudantium similique sit sequi
            quo perferendis cum itaque natus quia officia alias. Quia. Lorem
            ipsum dolor sit, amet consectetur adipisicing elit. Nam pariatur, ab
            perferendis provident exercitationem nihil accusamus. Architecto hic
            expedita laborum dolor est vero officiis ad, facilis possimus ea
            explicabo corporis.
          </p>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea odit
            dolore quo, nulla, nihil at cupiditate voluptate doloribus molestiae
            sunt, ratione necessitatibus exercitationem deserunt nesciunt natus
            nam obcaecati! Impedit, dolore. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Quod sint libero, officiis deserunt
            doloremque, at necessitatibus qui, laudantium similique sit sequi
            quo perferendis cum itaque natus quia officia alias. Quia. Lorem
            ipsum dolor sit, amet consectetur adipisicing elit. Nam pariatur, ab
            perferendis provident exercitationem nihil accusamus. Architecto hic
            expedita laborum dolor est vero officiis ad, facilis possimus ea
            explicabo corporis.
          </p>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea odit
            dolore quo, nulla, nihil at cupiditate voluptate doloribus molestiae
            sunt, ratione necessitatibus exercitationem deserunt nesciunt natus
            nam obcaecati! Impedit, dolore.
          </p>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea odit
            dolore quo, nulla, nihil at cupiditate voluptate doloribus molestiae
            sunt, ratione necessitatibus exercitationem deserunt nesciunt natus
            nam obcaecati! Impedit, dolore. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Quod sint libero, officiis deserunt
            doloremque, at necessitatibus qui, laudantium similique sit sequi
            quo perferendis cum itaque natus quia officia alias. Quia. Lorem
            ipsum dolor sit, amet consectetur adipisicing elit. Nam pariatur, ab
            perferendis provident exercitationem nihil accusamus. Architecto hic
            expedita laborum dolor est vero officiis ad, facilis possimus ea
            explicabo corporis.
          </p>
        </div>
        {/* menu  */}
        <div className="px-4 h-max sticky top-8">
          <h1 className="mb-4 text-sm font-medium">Author</h1>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-8">
              <Image
                src="userImg.jpeg"
                className="w-12 h-12 rounded-full object-cover"
                w="48"
                h="48"
              />
              <Link className="text-blue-800">John Doe</Link>
            </div>
            <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur</p>
            <div className="flex gap-2">
              <Link>
                <Image src="/facebook.svg" />
              </Link>
              <Link>
                <Image src="/instagram.svg" />
              </Link>
            </div>
          </div>
          <PostMenuActions />
          <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
          <div className="flex flex-col gap-2 text-sm">
            <Link className="underline">All</Link>
            <Link to="/" className="underline">
              Web Design
            </Link>
            <Link to="/" className="underline">
              Development
            </Link>
            <Link to="/" className="underline">
              Databases
            </Link>
            <Link to="/" className="underline">
              Search Engines
            </Link>
            <Link to="/" className="underline">
              Marketing
            </Link>
          </div>
          <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
          <Search />
        </div>
      </div>
      <Comments/>
    </div>
  );
};
