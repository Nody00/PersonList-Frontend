import { Flex, Text, Input, Button } from "@chakra-ui/react";
import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendUserData } from "../features/users/usersSlice";
const UsersForm = () => {
  const dispatch = useDispatch();

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const cityRef = useRef();
  const addressRef = useRef();
  const phoneRef = useRef();

  function submitHandler() {
    const firstNameValue = firstNameRef.current.value;
    const lastNameValue = lastNameRef.current.value;
    const cityValue = cityRef.current.value;
    const addressValue = addressRef.current.value;
    const phoneValue = phoneRef.current.value;

    if (
      firstNameValue.length === 0 ||
      lastNameValue.length === 0 ||
      cityValue.length === 0 ||
      addressValue.length === 0 ||
      phoneValue.length === 0
    ) {
      alert("All fields must be filled!");
      return;
    }

    const newUser = {
      firstName: firstNameValue,
      lastName: lastNameValue,
      city: cityValue,
      address: addressValue,
      phone: phoneValue,
    };

    dispatch(sendUserData(newUser));
    firstNameRef.current.value = "";
    lastNameRef.current.value = "";
    cityRef.current.value = "";
    addressRef.current.value = "";
    phoneRef.current.value = "";
  }

  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      gap={2}
      padding={4}
      borderRadius={"9px"}
      boxShadow={"0px 0px 10px 0px rgba(0,0,0,0.3)"}
      w={"100%"}
    >
      <Flex
        direction={"column"}
        gap={2}
        alignItems={"flex-start"}
        justifyContent={"center"}
      >
        <Text>First Name</Text>
        <Input size={"sm"} ref={firstNameRef} />
      </Flex>

      <Flex
        direction={"column"}
        gap={2}
        alignItems={"flex-start"}
        justifyContent={"center"}
      >
        <Text>Last Name</Text>
        <Input size={"sm"} ref={lastNameRef} />
      </Flex>

      <Flex
        direction={"column"}
        gap={2}
        alignItems={"flex-start"}
        justifyContent={"center"}
      >
        <Text>Address</Text>
        <Input size={"sm"} ref={addressRef} />
      </Flex>

      <Flex
        direction={"column"}
        gap={2}
        alignItems={"flex-start"}
        justifyContent={"center"}
      >
        <Text>City</Text>
        <Input size={"sm"} ref={cityRef} />
      </Flex>

      <Flex
        direction={"column"}
        gap={2}
        alignItems={"flex-start"}
        justifyContent={"center"}
      >
        <Text>Phone</Text>
        <Input size={"sm"} ref={phoneRef} type="number" />
      </Flex>

      <Flex
        direction={"column"}
        gap={2}
        alignItems={"center"}
        justifyContent={"flex-end"}
      >
        <Text color={"transparent"}>Button</Text>
        <Button size={"sm"} colorScheme="blue" onClick={submitHandler}>
          Insert
        </Button>
      </Flex>
    </Flex>
  );
};

export default UsersForm;
