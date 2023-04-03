import React from "react";
import { Box, HStack, Text, VStack, Button } from "@chakra-ui/react";

const Summary = (): JSX.Element => {
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
            Finishing up
          </Text>
          <Text
            as="p"
            color="hsl(231, 11%, 63%)"
            fontWeight="500"
            fontSize="22px"
          >
            Double-check everything looks OK before confirming
          </Text>
        </Box>
        {/* monthly */}
        {/* <VStack
          gap="1rem"
          backgroundColor="hsl(229, 24%, 87%)"
          p="1rem"
          borderRadius="8px"
        >
          <Box
            borderBlockEnd="1px solid"
            borderColor="hsl(231, 11%, 63%)"
            w="100%"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            pb="2rem"
          >
            <Box>
              <Text as="p" fontWeight="800" color="hsl(213, 96%, 18%)">
                Arcade(Monthly)
              </Text>
              <Text textDecor="underline">Change</Text>
            </Box>
            <Box as="p" fontWeight="800" color="hsl(213, 96%, 18%)">
              9$/mo
            </Box>
          </Box>

          <Box w="100%" display="flex" justifyContent="space-between">
            <Text as="p" color="hsl(231, 11%, 63%)">
              Online service
            </Text>
            <Text fontWeight={600}>+1$/mo</Text>
          </Box>
          <Box w="100%" display="flex" justifyContent="space-between">
            <Text as="p" color="hsl(231, 11%, 63%)">
              Larger storage
            </Text>
            <Text fontWeight={600}>+2$/mo</Text>
          </Box>
        </VStack>

        <Box
          w="100%"
          as="div"
          display="flex"
          justifyContent="space-between"
          mt="3rem"
        >
          <Text as="p" color="hsl(231, 11%, 63%)">
            Total (per month)
          </Text>
          <Text fontWeight={600} color="hsl(243, 100%, 62%)">
            $+12/mo
          </Text>
        </Box> */}

        {/* Annually */}
        <VStack
          gap="1rem"
          backgroundColor="hsl(229, 24%, 87%)"
          p="1rem"
          borderRadius="8px"
        >
          <Box
            borderBlockEnd="1px solid"
            borderColor="hsl(231, 11%, 63%)"
            w="100%"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            pb="2rem"
          >
            <Box>
              <Text as="p" fontWeight="800" color="hsl(213, 96%, 18%)">
                Arcade(Yearly)
              </Text>
              <Text textDecor="underline">Change</Text>
            </Box>
            <Box as="p" fontWeight="800" color="hsl(213, 96%, 18%)">
              90$/yr
            </Box>
          </Box>

          <Box w="100%" display="flex" justifyContent="space-between">
            <Text as="p" color="hsl(231, 11%, 63%)">
              Online service
            </Text>
            <Text fontWeight={600}>+10$/yr</Text>
          </Box>
          <Box w="100%" display="flex" justifyContent="space-between">
            <Text as="p" color="hsl(231, 11%, 63%)">
              Larger storage
            </Text>
            <Text fontWeight={600}>+20$/yr</Text>
          </Box>
        </VStack>

        <Box
          w="100%"
          as="div"
          display="flex"
          justifyContent="space-between"
          mt="3rem"
        >
          <Text as="p" color="hsl(231, 11%, 63%)">
            Total (per Year)
          </Text>
          <Text fontWeight={600} color="hsl(243, 100%, 62%)">
            $+120/yr
          </Text>
        </Box>

        {/* /Annually */}
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
            backgroundColor="hsl(243, 100%, 62%)"
            fontSize="2xl"
          >
            Confirm
          </Button>
        </HStack>
      </Box>
    </Box>
  );
};

export default Summary;
