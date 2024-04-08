import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Img,
  Input,
  Link,
  Stack,
  Text,
  Image,
} from "@chakra-ui/react";
import Logo from "./instagram_logo.png";
import { loginUser } from "../../redux/counter/counterSlice";
import { useDispatch, useSelector } from "react-redux";
import { urlApi } from "../../database/database";

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
    console.log(userExist);
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
            <Input
              type="text"
              placeholder="Phone number, username, or e-mail"
            />
            <Input type="password" placeholder="Password" />
            <Button colorScheme="twitter" variant="solid" size="sm">
              Log In
            </Button>
            <HStack>
              <Divider />
              <Text textStyle="sm" whiteSpace="nowrap" color="fg.muted">
                OR
              </Text>
              <Divider />
            </HStack>
            <Button variant="text" size="sm">
              {/* TODO: Facebook logo */}
              Log In with Facebook
            </Button>
            <Button variant="text" size="sm">
              Forgot password?
            </Button>
            <Text color="fg.muted">
              You can also{" "}
              <Link href="https://help.instagram.com/contact/406206379945942/?locale=en_US&Defamation_CF_redirect=%7B%22URLs1%22%3A%22%22%2C%22gb_country%22%3A%22Germany%22%7D&Erasure_Redirect=%7B%22erasure_cf_redirect%22%3A%22%7B%5C%22Jurisdiction%5C%22%3A%5C%22Germany%5C%22%2C%5C%22URLs%5C%22%3A%5C%22%5C%22%7D%22%2C%22ipr_cf_redirect%22%3A%22%7B%5C%22content_url%5C%22%3A%5C%22%5C%22%2C%5C%22crtformredirect%5C%22%3A%5C%22%7B%5C%5C%5C%22content_url%5C%5C%5C%22%3A%5C%5C%5C%22%5C%5C%5C%22%2C%5C%5C%5C%22crtformredirect%5C%5C%5C%22%3A%5C%5C%5C%22%7B%5C%5C%5C%5C%5C%5C%5C%22content_url%5C%5C%5C%5C%5C%5C%5C%22%3A%5C%5C%5C%5C%5C%5C%5C%22%5C%5C%5C%5C%5C%5C%5C%22%2C%5C%5C%5C%5C%5C%5C%5C%22whatcountry%5C%5C%5C%5C%5C%5C%5C%22%3A%5C%5C%5C%5C%5C%5C%5C%22Germany%5C%5C%5C%5C%5C%5C%5C%22%7D%5C%5C%5C%22%2C%5C%5C%5C%22whatcountry%5C%5C%5C%22%3A%5C%5C%5C%22Germany%5C%5C%5C%22%7D%5C%22%7D%22%7D&French_IG_LRRP_redirect=%7B%22URLs1%22%3A%22%22%7D&IP_CF_redirect=%7B%22submit_copyright_report%22%3A%22%7B%5C%22content_urls%5C%22%3A%5C%22%5C%22%7D%22%2C%22submit_tm_report%22%3A%22%7B%5C%22content_urls%5C%22%3A%5C%22%5C%22%2C%5C%22counterfeitredirect%5C%22%3A%5C%22%7B%5C%5C%5C%22content_urls%5C%5C%5C%22%3A%5C%5C%5C%22%5C%5C%5C%22%7D%5C%22%7D%22%7D&LOBComment3=&URLs1=&gb_country=Germany">
                report content you believe is unlawful
              </Link>{" "}
              in your country without logging in.
            </Text>
            <Text color="fg.muted">
              Don't have an account? <Link href="#">Sign up</Link>
            </Text>
            <Text>Get the app.</Text>
          </Stack>
        </Stack>

        <Flex justify="center" alignItems="center" gap="2">
          <Link
            href="https://apps.apple.com/us/app/instagram/id389801252"
            isExternal
          >
            <Image
              src="https://static.cdninstagram.com/rsrc.php/v3/yt/r/Yfc020c87j0.png"
              alt="Download from App Store"
            />
          </Link>
          <Link
            href="https://play.google.com/store/apps/details?id=com.instagram.android&hl=en"
            isExternal
            mr={4}
          >
            <Image
              src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png"
              alt="Download from Google Play"
            />
          </Link>
        </Flex>

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
            </HStack>
            <Stack spacing="6">
              <Button>Sign in</Button>
              {/* <OAuthButtonGroup /> */}
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
}
