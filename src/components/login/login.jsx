import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  Heading,
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
  const isLoggedIn = useSelector((state) => state.counter.isLogin);
  const dispatch = useDispatch();
  const [isUserNotExist, setIsUserNotExist] = useState(false);

  let userNameInput = "";
  let userPasswordInput = "";

  const onButtonClickSignin = async () => {
    const data = await fetch(`${urlApi}userData.json`).then((res) => {
      return res.json();
    });

    const userExists = data.some(
      (item) =>
        item.email === userNameInput && item.password === userPasswordInput
    );
    userExists ? dispatch(loginUser()) : setIsUserNotExist(true);
  };

  const renderLoginMessage = () => {
    if (isUserNotExist) return "User does not exist. Please try again.";
  };

  return (
    <Container
      maxW="lg"
      py={{ base: "12", md: "24" }}
      px={{ base: "0", sm: "8" }}
      mx="auto"
    >
      <Stack spacing="8">
        <Stack spacing="6">
          <Box maxWidth="container.sm" mx="auto">
            <Image src={Logo} alt="Instagram Logo" />
          </Box>

          <Stack spacing={{ base: "2", md: "3" }} textAlign="center">
            <Heading size={{ base: "xs", md: "sm" }}>
              Log in to your account
            </Heading>
            <FormControl>
              <Input
                type="email"
                placeholder="Phone number, username, or e-mail"
                onInput={(e) => (userNameInput = e.target.value)}
              />
              <Input
                type="password"
                placeholder="Password"
                onInput={(e) => (userPasswordInput = e.target.value)}
              />
            </FormControl>
            <Button
              colorScheme="twitter"
              variant="solid"
              size="sm"
              onClick={onButtonClickSignin}
            >
              Log In
            </Button>
            <Text>{renderLoginMessage()}</Text>
            <Divider />
            <Text textStyle="sm" whiteSpace="nowrap" color="fg.muted">
              OR
            </Text>
            <Divider />
          </Stack>
        </Stack>
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
