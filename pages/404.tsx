import type {StrykerPage} from "../types";
import {FC} from "react";

const NotFound: StrykerPage = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="bg-background-light w-4/5 lg:w-1/2 max-w-xl rounded-xl border border-foreground-alt-500 shadow p-6 md:p-12">
        <div className="flex justify-center mt-2">
          <div className="w-3/5 lg:w-1/2 min-h-[200px]">
            <img src="/animations/404.gif" />
          </div>
        </div>
        <div className="w-full text-center mb-8">
          <p className="break-normal font-bold text-foreground-alt-200">{"Page Not Found"}</p>
        </div>
        <div className="w-full text-center mb-8">
          <p className="break-normal text-foreground-alt-200">
            {"Please check your URL or head back to the home page."}
          </p>
        </div>
      </div>
    </div>
  );
};

const PageTitle: FC = () => {
  return (
    <>
      <h1 className="font-title font-medium text-2xl sm:text-3xl pt-2">404 Error</h1>
      <h2 className="font-body font-normal text-foreground-alt-200 text-sm sm:text-base leading-4 sm:leading-6 mt-1">
        Page Not Found
      </h2>
    </>
  );
};

NotFound.PageTitle = PageTitle;

export default NotFound;
