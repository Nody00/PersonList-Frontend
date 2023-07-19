import { Flex } from "@chakra-ui/react";
import UsersForm from "./components/UsersForm";
import UsersList from "./components/UsersList";
function App() {
  return (
    <>
      <Flex
        maxW={"1100px"}
        mt={10}
        mr="auto"
        ml="auto"
        alignItems={"center"}
        justifyContent={"center"}
        direction={"column"}
        gap={10}
      >
        {/* the form */}
        <UsersForm />

        {/* the list */}
        <UsersList />
      </Flex>
    </>
  );
}

export default App;
