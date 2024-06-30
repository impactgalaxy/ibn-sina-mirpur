import axios from "axios";

export default async function FetchApi() {
  const resp = await axios.get("http://localhost:3000/api/doctors");
  return resp.data;
}
