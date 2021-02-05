import React from "react";
import SingleUrl from "./SingleUrl";

const UrlTable = ({ showUrl, handlePinned, updateCount }) => {
  return (
    <section className="my-4 w-4/6 p-4 my-0 mx-auto">
      <div>
        <ul className="border shadow-sm">
          <li className="flex items-center justify-between bg-purple-600 mb-px p-4 text-white text-xl">
            <p className="w-2/5 flex justify-center">Original</p>
            <p className="w-2/5 flex justify-center">Shortened</p>
          </li>
          {showUrl?.map(url => {
            return (
              <SingleUrl
                url={url}
                key={url.id}
                handlePinned={handlePinned}
                updateCount={updateCount}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default UrlTable;
