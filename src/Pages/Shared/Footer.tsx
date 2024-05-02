import { HiBookOpen } from "react-icons/hi";

const Footer = () => {
  return (
    <div className="mt-[100px]">
      <footer className="mx-auto w-full max-w-container px-4 sm:px-6 lg:px-8">
        <div className="border-t border-slate-900/5 py-10">
          <div className="flex justify-center">
            <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
              <HiBookOpen className="w-7 h-7 " />
              <span className="text-blue-600">Book Catalog</span>
            </div>
          </div>
          <p className="mt-5 text-center text-sm leading-6 text-slate-500">
            © 2024 Book Labs Inc. All rights reserved.
          </p>
          <div className="mt-8 flex items-center justify-center space-x-4 text-sm font-semibold leading-6 text-slate-700">
            <a href="/privacy-policy">Privacy policy</a>
            <div className="h-4 w-px bg-slate-500/20"></div>
            <a href="/changelog">Changelog</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
