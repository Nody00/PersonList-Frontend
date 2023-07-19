import { List, ListItem, Text } from "@chakra-ui/react";
import UsersItem from "./UsersItem";
import { useSelector, useDispatch } from "react-redux";
import { getUserData } from "../features/users/usersSlice";
import { useEffect } from "react";
const UsersList = () => {
  const userData = useSelector((state) => state.users.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserData());
  }, []);

  return (
    <List
      w={"100%"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      gap={5}
    >
      {userData.length === 0 && (
        <Text>No users entries,feel free to add one</Text>
      )}

      {userData.map((user) => (
        <ListItem w={"100%"} key={user._id}>
          <UsersItem
            firstName={user.firstName}
            lastName={user.lastName}
            address={user.address}
            phone={user.phone}
            city={user.city}
            _id={user._id}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default UsersList;
