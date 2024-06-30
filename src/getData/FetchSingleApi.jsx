import axios from "axios";

export default async function FetchSingleApi(id) {
  const resp = await axios.get(`http://localhost:3000/api/doctor/${id}`);
  return resp.data;
}
