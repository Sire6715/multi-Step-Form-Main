import React from "react";
import {
  chakra,
  Box,
  Text,
  HStack,
  Textarea,
  VStack,
  Checkbox,
  Button,
} from "@chakra-ui/react";

export const Addons = (): JSX.Element => {
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
      <Box w="65%" mt="3rem">
        <Box textAlign="start" mb="2rem">
          <Text
            as="h1"
            fontSize="5xl"
            fontWeight="800"
            color="hsl(213, 96%, 18%)"
          >
            Pick add-ons
          </Text>
          <Text
            as="p"
            color="hsl(231, 11%, 63%)"
            fontWeight="500"
            fontSize="22px"
          >
            Add-ons help expand your gaming experience
          </Text>
        </Box>

        <VStack w="100%" gap="1rem">
          <Box
            display="flex"
            gap="1rem"
            w="100%"
            justifyContent="flex-start"
            border="1px solid"
            borderColor="hsl(243, 100%, 62%)"
            py="1rem"
            px="2rem"
            borderRadius="8px"
            alignItems="center"
          >
            <Checkbox
              colorScheme="hsl(213, 96%, 18%)"
              defaultChecked
            ></Checkbox>
            <VStack alignItems="flex-start" mr="auto">
              <Text
                as="p"
                fontWeight={600}
                color="hsl(213, 96%, 18%)"
                fontSize="1rem"
              >
                Online service
              </Text>
              <Text
                as="p"
                fontWeight={600}
                color="hsl(231, 11%, 63%)"
                fontSize=".9rem"
              >
                Access to multiplayer games
              </Text>
            </VStack>
            <Text color="hsl(243, 100%, 62%)" fontSize=".9rem" fontWeight={600}>
              +$1/mo
            </Text>
            <Text color="hsl(243, 100%, 62%)" fontSize=".9rem" fontWeight={600}>
              +$10/yr
            </Text>
          </Box>

          <Box
            display="flex"
            gap="1rem"
            w="100%"
            justifyContent="flex-start"
            border="1px solid"
            borderColor="hsl(243, 100%, 62%)"
            py="1rem"
            px="2rem"
            borderRadius="8px"
            alignItems="center"
          >
            <Checkbox
              colorScheme="hsl(213, 96%, 18%)"
              defaultChecked
            ></Checkbox>
            <VStack alignItems="flex-start" mr="auto">
              <Text
                as="p"
                fontWeight={600}
                color="hsl(213, 96%, 18%)"
                fontSize="1rem"
              >
                Larger storage
              </Text>
              <Text
                as="p"
                fontWeight={600}
                color="hsl(231, 11%, 63%)"
                fontSize=".9rem"
              >
                Extra 1TB of cloud storage
              </Text>
            </VStack>
            <Text color="hsl(243, 100%, 62%)" fontSize=".9rem" fontWeight={600}>
              +$2/mo
            </Text>
            <Text color="hsl(243, 100%, 62%)" fontSize=".9rem" fontWeight={600}>
              +$20/yr
            </Text>
          </Box>

          <Box
            display="flex"
            gap="1rem"
            w="100%"
            justifyContent="flex-start"
            border="1px solid"
            borderColor="hsl(243, 100%, 62%)"
            py="1rem"
            px="2rem"
            borderRadius="8px"
            alignItems="center"
          >
            <Box>
              <Checkbox
                colorScheme="hsl(213, 96%, 18%)"
                defaultChecked
              ></Checkbox>
            </Box>
            <VStack alignItems="flex-start" mr="auto">
              <Text
                as="p"
                fontWeight={600}
                color="hsl(213, 96%, 18%)"
                fontSize="1rem"
              >
                Customizable profile
              </Text>
              <Text
                as="p"
                fontWeight={600}
                color="hsl(231, 11%, 63%)"
                fontSize=".9rem"
              >
                Custom theme on your profile
              </Text>
            </VStack>
            <Text color="hsl(243, 100%, 62%)" fontSize=".9rem" fontWeight={600}>
              +$2/mo
            </Text>
            <Text color="hsl(243, 100%, 62%)" fontSize=".9rem" fontWeight={600}>
              +$20/yr
            </Text>
          </Box>
        </VStack>

        <HStack
            mt="8rem"
            lineHeight="3rem"
            color="hsl(231, 11%, 63%)"
            justifyContent="space-between"
            w="100%"
          >
            <Text
              fontSize="2xl"
              color="hsl(231, 11%, 63%)"
              fontWeight={600}
              cursor="pointer"
            >
              Go Back
            </Text>

            <Button
              py="2rem"
              px="5rem"
              color="hsl(0, 0%, 100%)"
              backgroundColor="hsl(213, 96%, 18%)"
              fontSize="2xl"
            >
              Next Step
            </Button>
          </HStack>
      </Box>
    </Box>
  );
};
