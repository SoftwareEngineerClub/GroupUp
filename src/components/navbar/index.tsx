import Image from "next/image";
import Link from "next/link";

export const Navbar = (): JSX.Element => {
  return (
    <section className="h-fit w-full ">
      <div className="mx-16 flex justify-between pt-[15px]">
        {/* logo placeholder */}
        <Link className="text-[40px]" href="/">
          Group up
        </Link>

        {/* search box container */}
        <div className="flex items-center">
          <input
            className="mr-[9px] h-[38px] w-[465px] rounded-[5px] pl-[15px]"
            type="text"
            placeholder="Search"
          />
          <button className="flex h-[38px] w-[45px] items-center justify-center rounded-[5px] bg-white">
            <Image
              src="/search-icon.png"
              alt="search icon"
              width={28}
              height={28}
            />
          </button>
        </div>

        {/* Link container */}
        <div className="flex items-center">
          <Link className="mr-[15px]" href="/">
            About
          </Link>
          <Link className="mr-[15px]" href="/">
            Communities
          </Link>
          <Link className="mr-[20px]" href="/">
            Profile
          </Link>

          {/* button for light/dark mode */}
          <button className=" flex h-[38px] w-[45px] items-center justify-center rounded-[5px] border-[1px] border-black bg-white">
            <Image
              src="/darkModeIcon.png"
              alt="dark mode icon"
              width={26}
              height={26}
            />
          </button>
        </div>
      </div>
    </section>
  );
};
