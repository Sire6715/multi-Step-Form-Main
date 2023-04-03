import React from "react";
import {
  Box,
  Button,
  Flex,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import sideBarDesk from "../assets/images/bg-sidebar-desktop.svg";

const Sidebar = (): JSX.Element => {
  return (
    <Flex
      flexDirection="column"
      gap="5"
      pl={6}
      pt={9}
      bgImage={sideBarDesk}
      bgRepeat="no-repeat"
      bgSize="cover"
      borderRadius={14}
    >
      <Box display="flex" alignContent="center" gap={6} px={6} py={6}>
        <Button
          display="flex"
          borderRadius="50%"
          border="solid 1px"
          borderColor="hsl(0, 0%, 100%)"
          colorScheme="hsl(213, 96%, 18%)"
        >
          1
        </Button>
        <UnorderedList listStyleType="none">
          <ListItem>
            <Text textTransform="uppercase">step 1</Text>
          </ListItem>
          <ListItem>
            <Text
              as="h1"
              textTransform="uppercase"
              fontWeight={700}
              color="hsl(0, 0%, 100%)"
            >
              your info
            </Text>
          </ListItem>
        </UnorderedList>
      </Box>

      <Box display="flex" alignContent="center" gap={6} px={6} py={6}>
        <Button
          display="flex"
          borderRadius="50%"
          border="solid 1px"
          borderColor="hsl(0, 0%, 100%)"
          colorScheme="hsl(213, 96%, 18%)"
        >
          2
        </Button>
        <UnorderedList listStyleType="none">
          <ListItem>
            <Text textTransform="uppercase">step 2</Text>
          </ListItem>
          <ListItem>
            <Text
              as="h1"
              textTransform="uppercase"
              fontWeight={600}
              color="hsl(0, 0%, 100%)"
            >
              select plan
            </Text>
          </ListItem>
        </UnorderedList>
      </Box>

      <Box display="flex" alignContent="center" gap={6} px={6} py={6}>
        <Button
          display="flex"
          borderRadius="50%"
          border="solid 1px"
          borderColor="hsl(0, 0%, 100%)"
          colorScheme="hsl(213, 96%, 18%)"
        >
          3
        </Button>
        <UnorderedList listStyleType="none">
          <ListItem>
            <Text textTransform="uppercase">step 3</Text>
          </ListItem>
          <ListItem>
            <Text
              textTransform="uppercase"
              fontWeight={600}
              color="hsl(0, 0%, 100%)"
            >
              add-ons
            </Text>
          </ListItem>
        </UnorderedList>
      </Box>

      <Box display="flex" alignContent="center" gap={6} px={6} py={6}>
        <Button
          display="flex"
          borderRadius="50%"
          border="solid 1px"
          borderColor="hsl(0, 0%, 100%)"
          colorScheme="hsl(213, 96%, 18%)"
        >
          4
        </Button>
        <UnorderedList listStyleType="none">
          <ListItem>
            <Text textTransform="uppercase">step 4</Text>
          </ListItem>
          <ListItem>
            <Text
              textTransform="uppercase"
              fontWeight={600}
              color="hsl(0, 0%, 100%)"
            >
              summary
            </Text>
          </ListItem>
        </UnorderedList>
      </Box>
    </Flex>
  );
};

export default Sidebar;
