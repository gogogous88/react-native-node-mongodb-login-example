import axios from "axios";
export const register = async (email, password, name, role, callback) => {
  try {
    const result = await axios.post("http://localhost:3000/api/auth/register", {
      email,
      password,
      name,
      role
    });

    const { data } = result;
    callback(null, data); //what if empty string.
  } catch (err) {
    //what if no connection or type is not right
    callback(err);
  }
};

export const login = async (email, password, callback) => {
  try {
    const result = await axios.post("http://localhost:3000/api/auth/login", {
      email,
      password
    });
    const { data } = result;
    callback(null, data);
  } catch (err) {
    callback(err);
  }
};
