import logo from "./assets/lws-logo-en.svg";

export default function Header() {
  return (
    <>
      <nav className="!bg-[#191D26] py-6 md:py-8  top-0 z-50 w-full">
        <div className="container mx-auto flex items-center justify-between gap-x-6">
          <a href="">
            <img src={logo} className="" alt="" />
          </a>
        </div>
      </nav>
    </>
  );
}
