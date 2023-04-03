import React from "react";
import {
  Box,
  HStack,
  Text,
  Image,
  VStack,
  Flex,
  Button,
} from "@chakra-ui/react";
import arcade from "../assets/images/icon-arcade.svg";
import advanced from "../assets/images/icon-advanced.svg";
import pro from "../assets/images/icon-pro.svg";

function Plan(): JSX.Element {
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="center"
      alignContent="center"
    >
      <VStack
        w="80%"
        h="80%"
        m="auto"
        justifyContent="space-between"
        alignContent="flex-start"
      >
        <Box>
          <Text
            as="h1"
            fontSize="5xl"
            fontWeight="800"
            color="hsl(213, 96%, 18%)"
          >
            Select your plan
          </Text>
          <Text
            as="p"
            color="hsl(231, 11%, 63%)"
            fontWeight="600"
            fontSize="20px"
          >
            you have the option of monthly or yearly billing
          </Text>
        </Box>

        <HStack w="	75%" h="33%" justifyContent="space-between" mt="4rem">
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            border="1px solid"
            borderColor="hsl(229, 24%, 87%)"
            w="32%"
            h="100%"
            py="1.5rem"
            px="1rem"
            borderRadius="15px"
          >
            <Image boxSize="41px" src={arcade} alt="arcade" />
            <VStack alignItems="flex-start">
              <Text
                as="p"
                fontWeight={600}
                color="hsl(213, 96%, 18%)"
                fontSize="1.5rem"
              >
                Arcade
              </Text>
              <Text as="p" fontWeight={600} color="hsl(231, 11%, 63%)">
                $9/mo
              </Text>
              {/* Yearly */}
              <Text as="p" fontWeight={600} color="hsl(231, 11%, 63%)">
                $90/yr
              </Text>
              <Text fontWeight={600} color="hsl(213, 96%, 18%)">
                2 months free
              </Text>
            </VStack>
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            border="1px solid"
            borderColor="hsl(229, 24%, 87%)"
            w="32%"
            h="100%"
            py="1.5rem"
            px="1rem"
            borderRadius="15px"
          >
            <Image boxSize="41px" src={advanced} alt="advanced" />
            <VStack alignItems="flex-start">
              <Text
                as="p"
                fontWeight={600}
                color="hsl(213, 96%, 18%)"
                fontSize="1.5rem"
              >
                Advanced
              </Text>
              <Text as="p" fontWeight={600} color="hsl(231, 11%, 63%)">
                $12/mo
              </Text>
              {/* Yearly*/}
              <Text as="p" fontWeight={600} color="hsl(231, 11%, 63%)">
                $120/yr
              </Text>
              <Text fontWeight={600} color="hsl(213, 96%, 18%)">
                2 months free
              </Text>
            </VStack>
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            border="1px solid"
            borderColor="hsl(229, 24%, 87%)"
            w="32%"
            h="100%"
            py="1.5rem"
            px="1rem"
            borderRadius="15px"
          >
            <Image boxSize="41px" objectFit="cover" src={pro} alt="pro" />
            <VStack alignItems="flex-start">
              <Text
                as="p"
                fontWeight={600}
                color="hsl(213, 96%, 18%)"
                fontSize="1.5rem"
              >
                Pro
              </Text>
              <Text as="p" fontWeight={600} color="hsl(231, 11%, 63%)">
                $15/mo
              </Text>
              {/* yearly */}
              <Text as="p" fontWeight={600} color="hsl(231, 11%, 63%)">
                $150/yr
              </Text>
              <Text fontWeight={600} color="hsl(213, 96%, 18%)">
                2 months free
              </Text>
            </VStack>
          </Box>
        </HStack>
        {/* toggler */}

        <HStack
          justifyContent="center"
          py="1rem"
          my="4rem"
          borderRadius={8}
          w="75%"
          backgroundColor="hsl(229, 24%, 87%)"
        >
          <Text fontWeight={600}>Monthly</Text>
          <Text as="span"></Text>
          <Text fontWeight={600}>Yearly</Text>
        </HStack>

        <HStack
          my="5rem"
          color="hsl(231, 11%, 63%)"
          justifyContent="space-between"
          w="75%"
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
      </VStack>
    </Box>
  );
}

export default Plan;
