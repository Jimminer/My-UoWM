import { Flex, Box, Text, Button, useColorModeValue } from "@chakra-ui/react";
import i18n from "../i18n";
import { TimeIcon, PhoneIcon } from "@chakra-ui/icons";
import { LIBRARY_OPENING_HOURS, LIBRARY_PHONE_LIST } from "../assets/data/Library";
export default function RestaurantUniversity() {
  return (
    <Flex
      w="100vw"
      overflowX="hidden"
      flexDirection="column"
      alignItems="center"
    >
      {/* Wrapper container */}
      <Flex
        textAlign="center"
        flexDirection={{ base: "column", lg: "row" }}
        columnGap={"3rem"}
        alignItems="center"
        justifyContent={"center"}
        width={{ sm: "100%", lg: "fit-content" }}
        height={{ lg: "75vh" }}
        paddingX="16px"
      >
        {/* Ωράριο */}
        <Box
          border="2px"
          borderRadius="1rem"
          bg={useColorModeValue("#00ABC1", "#f3f3f3")}
          borderColor={useColorModeValue("#00ABC1", "#f3f3f3")}
          marginBottom={{ base: "1rem", lg: "0" }}
          marginTop="1rem"
          px="1.5rem"
          py="1.5rem"
          width="100%"
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          height={{ lg: "30%" }}
        >
          <Flex
            flexDirection={"column"}
            alignItems="flex-start"
            h="fit-content"
            fontFamily="Syne"
            w="1rem%"
            fontSize={{ base: "md", lg: "xl" }}
            color={useColorModeValue("#f3f3f3", "black")}
          >
            <Flex flexDirection={"row"} alignItems="center">
              <TimeIcon w={30} h={30} />
              <Text
                fontSize={{ base: "lg", lg: "2xl" }}
                ml="1rem"
                as="span"
                fontWeight={"bold"}
              >
                {i18n.t("orario")}
              </Text>
            </Flex>
            <Flex mt="1rem" flexDirection={"row"} alignItems="center">
              <Box mx="0.5rem">
                <Text as="span" fontWeight={"bold"}>
                  {i18n.t("defPar")}
                </Text>{" "}
                <br />
                {LIBRARY_OPENING_HOURS.on_weekdays.start}-
                {LIBRARY_OPENING_HOURS.on_weekdays.end}
              </Box>
              <Box mx="1rem">
                <Text as="span" fontWeight={"bold"}>
                  {i18n.t("on_weekend")}
                </Text>{" "}
                <br />
                {LIBRARY_OPENING_HOURS.on_weekend.start
                  ? `${LIBRARY_OPENING_HOURS.on_on_weekend.start}-${LIBRARY_OPENING_HOURS.on_on_weekend.end}`
                  : i18n.t("kleista")}
              </Box>
            </Flex>
          </Flex>
        </Box>
        {/* Επικοινωνία  */}
        <Box
          border="2px"
          borderRadius="1rem"
          borderColor={useColorModeValue("#00ABC1", "#f3f3f3")}
          bg={useColorModeValue("#00ABC1", "#f3f3f3")}
          marginBottom={{ base: "1rem", lg: "0" }}
          marginTop="1rem"
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          py="1rem"
          px="0.75rem"
          width="100%"
          height={{ lg: "30%" }}
        >
          <Flex
            mx="1rem"
            flexDirection={"column"}
            alignItems="flex-start"
            rowGap={"0.75rem"}
            justifyContent={"flex-start"}
            columnGap={"1rem"}
            color={useColorModeValue("#f3f3f3", "black")}
            fontFamily="Syne"
            w="100%"
            fontSize={{ base: "md", lg: "2xl" }}
          >
            <Flex flexDirection={"row"} alignItems="center">
              <PhoneIcon w={27} h={27} />
              <Text
                fontSize={{ base: "lg", lg: "2xl" }}
                ml="1rem"
                as="span"
                fontWeight={"bold"}
              >
                {i18n.t("epikoinonia")}
              </Text>
            </Flex>

            <Flex
              flexDirection={"row"}
              alignItems="center"
              justifyContent="space-between"
              w="100%"
              gap="2rem"
            >
              <Text>
                {LIBRARY_PHONE_LIST[0]} <br />
                <br />
                {LIBRARY_PHONE_LIST[1]}
              </Text>
            </Flex>
          </Flex>
        </Box>
      </Flex>
      <Button
        color={useColorModeValue("#00ABC1", "#f3f3f3")}
        variant="ghost"
        fontWeight="bold"
        fontFamily="Syne"
        fontSize={{ base: "lg", lg: "2xl" }}
        rightIcon={
          <Box ml="0.5rem">
            <svg
              width="15px"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.873535 9L8.91951 1"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                stroke={useColorModeValue("#00ABC1", "#f3f3f3")}
              />
              <path
                d="M0.873535 1H8.91951V9"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                stroke={useColorModeValue("#00ABC1", "#f3f3f3")}
              />
            </svg>
          </Box>
        }
        onClick={(e) => {
          window.open("https://library.uowm.gr/?page_id=854");
        }}
        justifyContent="center"
      >
        {i18n.t("istoselidaVivliothikis")}
      </Button>
    </Flex>
  );
}