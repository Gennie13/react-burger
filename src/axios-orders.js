import axios from "axios";

const instance = axios.create({
    baseURL: "https://burger-react-e5e9b-default-rtdb.asia-southeast1.firebasedatabase.app/"
});

export default instance;