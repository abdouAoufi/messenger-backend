import { getio } from "../../config/socket.js";
const users = [{ name: "Abdou" }];

const handleAuth = () => {
  const Socket = getio();

  //
  Socket.on("connection", (socket) => {
    console.log("_connected_");
    socket.emit("usersList", users);
    socket.on("login", (usr) => {
      let user = JSON.parse(usr);
      addUser(user);
    });
  });
};

const addUser = (user) => {
  //   users.forEach((usr) => {
  //     if (usr.name === user.name) {
  //       return console.log("User already connected ");
  //     }
  //     users.push(user);
  //   });
  let result = users.find((usr) => {
    return user.name === usr.name;
  });
  console.log(result);
};
export default handleAuth;
