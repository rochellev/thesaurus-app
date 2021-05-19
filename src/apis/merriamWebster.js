import axios from "axios";

export default axios.create({
  baseURL: "https://www.dictionaryapi.com/api/v3/references/thesaurus/json/"
});
