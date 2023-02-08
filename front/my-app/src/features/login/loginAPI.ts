import ICred from "../../models/Cred";
import axios from "axios";
export function login(cred:ICred) {
  return new Promise<{ data: any }>((resolve) =>
  axios.post("/login/",cred).then(res => resolve({ data: res.data }))
  );
}
