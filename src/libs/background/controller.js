import axios from "axios";
export default () => {
  //   const a = await axios.get("https://naver.com");
  const b = fetch("https://naver.com").then((data) => console.log(data));
  console.log("controller import success...");
};
