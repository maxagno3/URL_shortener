import axios from "axios";

const list = () => axios.get("/url");

const create = payload => axios.post("/url", payload);

const update = ({ id, payload }) => axios.patch(`/url/${id}`, payload);

const show = ({ id }) => axios.get(`/url/${id}`);

const urlApi = {
  create,
  list,
  update,
  show,
};

export default urlApi;
