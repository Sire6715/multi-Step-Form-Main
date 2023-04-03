import React from "react";
import {
  Box,
  Flex,
  Text,
  FormControl,
  Input,
  FormErrorMessage,
  FormHelperText,
  HStack,
  FormLabel,
  VStack,
  Button,
} from "@chakra-ui/react";

export const Form = (): JSX.Element => {
  return (
    <Box
      overflowY="scroll"
      as="form"
      display="flex"
      flexDirection="row"
      justifyContent="center"
      alignContent="center"
      sx={{
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      <Box w="65%" m="auto">
        <Box textAlign="start" mb="2rem">
          <Text
            as="h1"
            fontSize="5xl"
            fontWeight="800"
            color="hsl(213, 96%, 18%)"
          >
            Personal info
          </Text>
          <Text
            as="p"
            color="hsl(231, 11%, 63%)"
            fontWeight="500"
            fontSize="22px"
          >
            Please provide your name,email address, and phone number.
          </Text>
        </Box>

        <VStack spacing="2rem">
          <FormControl>
            <FormLabel
              as="h1"
              fontWeight="800"
              color="hsl(213, 96%, 18%)"
              fontSize="2xl"
            >
              Name
            </FormLabel>
            <Input
              type="text"
              py="1.8rem"
              fontWeight="800"
              fontSize="2xl"
              color="hsl(213, 96%, 18%)"
              placeholder="e.g. Stephen King"
              _placeholder={{ opacity: 1, color: "gray.500" }}
            ></Input>
          </FormControl>

          <FormControl>
            <FormLabel
              as="h1"
              fontWeight="800"
              color="hsl(213, 96%, 18%)"
              fontSize="2xl"
            >
              Email Address
            </FormLabel>
            <Input
              type="email"
              py="1.8rem"
              fontSize="2xl"
              fontWeight="800"
              color="hsl(213, 96%, 18%)"
              placeholder="e.g. StephenKing@lorem.com"
              _placeholder={{ opacity: 1, color: "gray.500" }}
            ></Input>
          </FormControl>

          <FormControl>
            <FormLabel
              as="h1"
              fontWeight="800"
              color="hsl(213, 96%, 18%)"
              fontSize="2xl"
            >
              Phone Number
            </FormLabel>
            <FormErrorMessage>This field is required</FormErrorMessage>
            <Input
              type="number"
              py="1.8rem"
              fontWeight="800"
              color="hsl(213, 96%, 18%)"
              placeholder="+1 234 567 890"
              _placeholder={{ opacity: 1, color: "gray.500" }}
            ></Input>
          </FormControl>
        </VStack>

        <Flex justifyContent="end">
          <Button
            py="2rem"
            px="5rem"
            color="hsl(0, 0%, 100%)"
            backgroundColor="hsl(213, 96%, 18%)"
            mt="8rem"
            fontSize="2xl"
          >
            Next Step
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};
