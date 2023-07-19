import { Flex, Text, Input, Button } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteUserData, updateUserData } from "../features/users/usersSlice";
import { useRef } from "react";
const UsersItem = (props) => {
  const dispatch = useDispatch();

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const addressRef = useRef();
  const cityRef = useRef();
  const phoneRef = useRef();

  const [editMode, setEditMode] = useState(false);

  function deleteHandler() {
    dispatch(deleteUserData(props._id));
  }

  function submitHandler() {
    const firstNameValue =
      firstNameRef.current.value.length === 0
        ? props.firstName
        : firstNameRef.current.value;

    const lastNameValue =
      lastNameRef.current.value.length === 0
        ? props.lastName
        : lastNameRef.current.value;

    const cityValue =
      cityRef.current.value.length === 0 ? props.city : cityRef.current.value;

    const addressValue =
      addressRef.current.value.length === 0
        ? props.address
        : addressRef.current.value;

    const phoneValue =
      phoneRef.current.value.length === 0
        ? props.phone
        : phoneRef.current.value;

    const updatedUser = {
      firstName: firstNameValue,
      lastName: lastNameValue,
      city: cityValue,
      address: addressValue,
      phone: phoneValue,
      _id: props._id,
    };

    dispatch(updateUserData(updatedUser));
    setEditMode(false);
  }

  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      gap={2}
      w={"100%"}
      padding={2}
      borderRadius={"9px"}
      boxShadow={"0px 0px 10px 0px rgba(0,0,0,0.3)"}
    >
      <Flex
        direction={"column"}
        gap={2}
        alignItems={"flex-start"}
        justifyContent={"center"}
        w={"100%"}
        p={2}
      >
        {!editMode && <Text>{props.firstName}</Text>}
        {editMode && (
          <Input size={"sm"} placeholder={props.firstName} ref={firstNameRef} />
        )}
      </Flex>

      <Flex
        direction={"column"}
        gap={2}
        alignItems={"flex-start"}
        justifyContent={"center"}
        w={"100%"}
        p={2}
      >
        {!editMode && <Text>{props.lastName}</Text>}
        {editMode && (
          <Input size={"sm"} placeholder={props.lastName} ref={lastNameRef} />
        )}
      </Flex>

      <Flex
        direction={"column"}
        gap={2}
        alignItems={"flex-start"}
        justifyContent={"center"}
        w={"100%"}
        p={2}
      >
        {!editMode && <Text>{props.address}</Text>}
        {editMode && (
          <Input size={"sm"} placeholder={props.address} ref={addressRef} />
        )}
      </Flex>

      <Flex
        direction={"column"}
        gap={2}
        alignItems={"flex-start"}
        justifyContent={"center"}
        w={"100%"}
        p={2}
      >
        {!editMode && <Text>{props.city}</Text>}
        {editMode && (
          <Input size={"sm"} placeholder={props.city} ref={cityRef} />
        )}
      </Flex>

      <Flex
        direction={"column"}
        gap={2}
        alignItems={"flex-start"}
        justifyContent={"center"}
        w={"100%"}
        p={2}
      >
        {!editMode && <Text>{props.phone}</Text>}
        {editMode && (
          <Input size={"sm"} placeholder={props.phone} ref={phoneRef} />
        )}
      </Flex>

      <Flex
        gap={2}
        alignItems={"center"}
        justifyContent={"center"}
        direction={"column"}
        w={"100%"}
        p={2}
      >
        {!editMode && (
          <Button size={"sm"} colorScheme="red" w="50%" onClick={deleteHandler}>
            Delete
          </Button>
        )}
        {!editMode && (
          <Button
            size={"sm"}
            colorScheme="green"
            w="50%"
            onClick={() => {
              setEditMode(true);
            }}
          >
            Edit
          </Button>
        )}
        {editMode && (
          <Button
            size={"sm"}
            colorScheme="green"
            w="50%"
            onClick={submitHandler}
          >
            Submit
          </Button>
        )}
        {editMode && (
          <Button
            size={"sm"}
            colorScheme="gray"
            w="50%"
            onClick={() => {
              setEditMode(false);
            }}
          >
            Cancel
          </Button>
        )}
      </Flex>
    </Flex>
  );
};

export default UsersItem;
