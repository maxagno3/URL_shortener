import React from "react";

const Input = ({ url, setUrl, handleSubmit }) => {
  return (
    <section className="w-4/6 p-4 my-4 mx-auto">
      <form className="w-full flex shadow-sm" onSubmit={handleSubmit}>
        <div className="w-full">
          <input
            type="text"
            className="bg-white appearance-none border-2 border-white w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            placeholder="https://www.facebook.com"
            required
            value={url}
            onChange={e => setUrl(e.target.value)}
          />
        </div>
        <div>
          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-2 cursor-pointer"
          >
            Create
          </button>
        </div>
      </form>
    </section>
  );
};

export default Input;
