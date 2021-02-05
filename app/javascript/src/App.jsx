import React, { useEffect, useState } from "react";
import urlApi from "./apis/urls";
import Input from "./components/Input";
import UrlTable from "./components/UrlTable";

const App = () => {
  const [url, setUrl] = useState("");
  const [showUrl, setShowUrl] = useState([]);

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      await urlApi.create({ url: { url } });
      window.location.href = "/";
      setUrl("");
    } catch (error) {
      console.log(error);
    }
  };

  const updateCount = async id => {
    try {
      await urlApi.show({ id });
      window.location.href = "/";
      setUrl("");
    } catch (error) {
      console.log(error);
    }
  };

  const handlePinned = async (id, url, pinned) => {
    try {
      await urlApi.update({
        id,
        payload: { url: { url, pinned } },
      });
      window.location.href = "/";
    } catch (error) {
      console.log(error);
    }
  };

  const fetchUrl = async () => {
    try {
      const urls = await urlApi.list();
      setShowUrl(urls.data.url);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUrl();
  }, []);

  return (
    <>
      <Input handleSubmit={handleSubmit} url={url} setUrl={setUrl} />
      <UrlTable
        showUrl={showUrl}
        handlePinned={handlePinned}
        updateCount={updateCount}
      />
    </>
  );
};

export default App;
