import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  Image,
  Card,
  CardBody,
} from "@chakra-ui/react";
import Logo from "./instagram_logo.png";
import { loginUser } from "../../redux/counter/counterSlice";
import { useDispatch, useSelector } from "react-redux";
import { urlApi } from "../../database/database";
import { Link } from "react-router-dom";

export default function Login() {
  const isLogin = useSelector((state) => state.counter.isLogin);
  const dispatch = useDispatch();
  const [isUserNotExist, setIsUserNotExist] = useState(false);

  let userNameInput = "";

  const onButtonClickSignin = async () => {
    const data = await fetch(`${urlApi}userData.json`).then((res) => {
      return res.json();
    });
    let userExist = data.filter((item) => item.email === userNameInput);
    if (userExist.length === 1) {
      return dispatch(loginUser());
    } else {
      setIsUserNotExist(true);
    }
  };

  const renderLoginMessage = () => {
    if (isUserNotExist) return <p>User not exist!</p>;
  };

  return (
    <Container
      maxW="lg"
      py={{ base: "12", md: "24" }}
      px={{ base: "0", sm: "8" }}
    >
      <Stack spacing="8">
        <Stack spacing="6">
          <Box boxSize="sm">
            <Image src={Logo} alt="Instagram Logo" />
          </Box>
          <Stack spacing={{ base: "2", md: "3" }} textAlign="center">
            <Heading size={{ base: "xs", md: "sm" }}>
              Log in to your account
            </Heading>
            <Text color="fg.muted">
              Don't have an account? <Link href="#">Sign up</Link>
            </Text>
          </Stack>
        </Stack>
        <Box
          py={{ base: "0", sm: "8" }}
          px={{ base: "4", sm: "10" }}
          bg={{ base: "transparent", sm: "bg.surface" }}
          boxShadow={{ base: "none", sm: "md" }}
          borderRadius={{ base: "none", sm: "xl" }}
        >
          <Stack spacing="6">
            <Stack spacing="5">
              <FormControl>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input
                  id="email"
                  type="email"
                  onInput={(e) => (userNameInput = e.target.value)}
                />
              </FormControl>
              {renderLoginMessage()}
            </Stack>
            <HStack justify="space-between">
              <Checkbox defaultChecked>Remember me</Checkbox>
              <Button variant="text" size="sm">
                Forgot password?
              </Button>
            </HStack>
            <Stack spacing="6">
              <Button onClick={onButtonClickSignin}>Sign in</Button>
              <HStack>
                <Divider />
                <Text textStyle="sm" whiteSpace="nowrap" color="fg.muted">
                  or continue with
                </Text>
                <Divider />
              </HStack>
            </Stack>
          </Stack>
        </Box>
      </Stack>
      <Stack mt="4">
        <Card>
          <CardBody>
            <Text>
              Don't have an account?
              <Link to="/register">
                <Button colorScheme="blue" variant="link" ms="1">
                  Sign up
                </Button>
              </Link>
            </Text>
          </CardBody>
        </Card>
      </Stack>
    </Container>
  );
}
