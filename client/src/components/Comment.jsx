import { ImageKit as Image } from "./Image";

export const Comment = () => {
  return (
    <div className="p-4 bg-slate-50 rounded-xl mb-8">
      <div className="flex items-center gap-4">
        <Image
          src="userImg.jpeg"
          className="w-10 h-10 rounded-full object-cover"
          w="40"
        />
        <span className="font-medium">Valera Shumel</span>
        <span className="text-sm text-gray-500">2 days ago</span>
      </div>
      <div className="mt-8">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet,
          deleniti. Ipsum repellat similique reiciendis esse laudantium
          accusamus cumque, neque sed voluptatibus accusantium voluptate dicta
          recusandae tempora dolores, nisi magni! Commodi?
        </p>
      </div>
    </div>
  );
};
