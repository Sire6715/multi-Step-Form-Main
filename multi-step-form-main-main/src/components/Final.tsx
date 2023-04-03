import { Box, Text, Image } from "@chakra-ui/react";
import React from "react";
import thanks from "../assets/images/icon-thank-you.svg";

const Final = (): JSX.Element => {
  return (
    <Box
      overflowY="scroll"
      as="form"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      gap="2.5rem"
      alignItems="center"
      w="65%"
      m="auto"
      sx={{
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      <Image src={thanks} alt="thanks" w="100px" />
      <Box textAlign="start" mb="2rem">
        <Text
          as="h1"
          fontSize="5xl"
          fontWeight="800"
          color="hsl(213, 96%, 18%)"
          display="flex"
          alignSelf="center"
          justifyContent="center"
        >
          Thank you!
        </Text>
        <Text
          as="p"
          color="hsl(231, 11%, 63%)"
          fontSize="20px"
          textAlign="center"
          fontWeight="600"
        >
          Thanks for confirming your subscription!We hope you have fun using the
          platform.If you ever need support, please feel free to email us
          support@loregaming.com
        </Text>
      </Box>
    </Box>
  );
};

export default Final;
