import axios, { CanceledError } from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "a9378f52521e44e390f1aeed9e244d1b",
    
  },
});
export { CanceledError };
