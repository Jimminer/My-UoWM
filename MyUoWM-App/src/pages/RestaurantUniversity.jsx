import { Flex, Box, Text, Button, useColorModeValue, Table, Thead, Tbody, Tr, Th, Td, Stack, Heading } from "@chakra-ui/react";
import i18n from "../i18n";
import MealIcon from "../assets/icons/MealIcon";

const breakfastForAllDays = "...";

const lunchFirst = ["...", "...", "...", "...", "...", "...", "..."];
const lunchMain = ["...", "...", "...", "...", "...", "...", "..."];
const lunchSide = ["...", "...", "...", "...", "...", "...", "..."];
const lunchDessert = ["...", "...", "...", "...", "...", "...", "..."];

const dinnerFirst = ["...", "...", "...", "...", "...", "...", "..."];
const dinnerMain = ["...", "...", "...", "...", "...", "...", "..."];
const dinnerSide = ["...", "...", "...", "...", "...", "...", "..."];
const dinnerDessert = ["...", "...", "...", "...", "...", "...", "..."];

const breakfastTime = [800, 930];
const breakfastTimeStr = "08:00 – 09:30";

const lunchTime = [1200, 1530];
const lunchTimeStr = "12:00 – 15:30";

const dinnerTime = [1800, 2100];
const dinnerTimeStr = "18:00 – 21:00";

const date = new Date();
// const currentTime = date.getHours() * 100 + date.getMinutes();
const currentTime = 900;
// const day = date.getDay();
const day = 2;

const CustomTh = ({ children, dayCheck = "-1", width = "200", borderSize = "1"}) => {
    var highlight = false;
    var highlightBottom = false;

    if (dayCheck === "" || day == dayCheck) {
      highlight = true;
    }

    if (currentTime >= (breakfastTime[0] + (day == 6 || day == 0) ? 100 : 0) && currentTime <= breakfastTime[1]) {
      highlightBottom = true;
    }

    return (
        <Th
            bgColor={highlight ? useColorModeValue("#00ABC1", "#00ABC1") : useColorModeValue("#4b5154", "#4b5154")}
            color={highlight ? useColorModeValue("#f3f3f3", "#f3f3f3") : useColorModeValue("#00ABC1", "#00ABC1")}
            textAlign="center"
            borderRight={`${borderSize}px solid`}
            borderColor={useColorModeValue("#00ABC1", "#00ABC1")}
            borderBottomColor={highlight && highlightBottom ? useColorModeValue("#006c7a", "#006c7a") : useColorModeValue("#00ABC1", "#00ABC1")}
            height="40px"
            width={`${width}px`}
        >
            {children}
        </Th>
    );
};

const CustomTd = ({ children, dayCheck = "-1", timeCheck = "-1", colSpan = 1, rowSpan = 1, borderSize = "1", height = "40", fontWeight = "normal", bottomLast = false, rightLast = false }) => {
    // console.log("Current day: " + day + " Day check: " + dayCheck + " Current time: " + currentTime + " Time check: " + timeCheck);
    
    var highlight = false;

    if (dayCheck === "" || day == dayCheck) {
      if (currentTime >= (timeCheck[0] + (day == 6 || day == 0) ? 100 : 0) && currentTime <= timeCheck[1]) {
        highlight = true;
      }
    }

    return (
        <Td
            bgColor={highlight ? useColorModeValue("#00ABC1", "#00ABC1") : useColorModeValue("#5f666a", "#5f666a")}
            color={highlight ? useColorModeValue("#f3f3f3", "#f3f3f3") : useColorModeValue("#f3f3f3", "#f3f3f3")}
            textAlign="center"
            borderRight={`${!rightLast ? borderSize : 0}px solid`}
            borderBottomColor={highlight && !bottomLast ? useColorModeValue("#008ea1", "#008ea1") : useColorModeValue("#00ABC1", "#00ABC1")}
            borderRightColor={useColorModeValue("#00ABC1", "#00ABC1")}
            colSpan={colSpan}
            rowSpan={rowSpan}
            height={`${height}px`}
            fontWeight={fontWeight}
        >
            {children}
        </Td>
    );
}

const CustomMealTd = ({children, index = 0, timeCheck = "-1", bottomLast = false, rightLast = false }) => {
  return (
    <CustomTd dayCheck={(index + 1) % 7} timeCheck={timeCheck} bottomLast={bottomLast} rightLast={rightLast}>
      <Text whiteSpace="nowrap">{children}</Text>
    </CustomTd>
  );
}

export default function RestaurantUniversity() {
  return (
    <Flex
      w="100vw"
      overflowX="hidden"
      flexDirection="column"
      alignItems="center"
    >
      {/* Wrapper Container */}
      <Flex
        textAlign="center"
        flexDirection={{ base: "column", lg: "row" }}
        columnGap={"3rem"}
        alignItems="center"
        justifyContent="center"
        width="100%"
        paddingX="16px"
      >
        {/* Gray Container */}
        <Box
          border="2px"
          borderRadius="1rem"
          borderColor={useColorModeValue("#00ABC1", "#00ABC1")}
          bg={useColorModeValue("#666f73", "#9e9e9e")}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          py="1rem"
          px="0.75rem"
          width={{ base: "100%", lg: "80%" }}  
          maxWidth="100%"  
          boxSizing="border-box"
          overflowX="hidden"  
        >
          {/* Table Info Header */}
          <Flex flexDirection="row" alignItems="center">
            <Text 
              fontSize={{ base: "lg", lg: "1xl" }}
              ml="1rem"
              as="span"
              fontWeight="bold"
              color={useColorModeValue("#f3f3f3", "#f3f3f3")}
            >
              {i18n.t("RestaurantInfo")}
            </Text>
          </Flex>

          {/* Meals Table */}
          <Box
            mt="2rem"
            w="100%"
            p={0}
            borderWidth="1px"
            borderRadius="lg"
            overflow="auto"
            borderColor={useColorModeValue("black", "black")}
          >
            <Table variant="simple" size="sm">
              <Thead>
                <Tr>
                  <CustomTh borderSize="0"></CustomTh>
                  <CustomTh></CustomTh>
                  <CustomTh dayCheck="1">{i18n.t("monday")}</CustomTh>
                  <CustomTh dayCheck="2">{i18n.t("tuesday")}</CustomTh>
                  <CustomTh dayCheck="3">{i18n.t("wednesday")}</CustomTh>
                  <CustomTh dayCheck="4">{i18n.t("thursday")}</CustomTh>
                  <CustomTh dayCheck="5">{i18n.t("friday")}</CustomTh>
                  <CustomTh dayCheck="6">{i18n.t("saturday")}</CustomTh>
                  <CustomTh dayCheck="0" borderSize="0">{i18n.t("sunday")}</CustomTh>
                </Tr>
              </Thead>

              <Tbody>
                <Tr>
                  <CustomTd colSpan={2} fontWeight="bold">
                    <Text marginBottom="5px">{i18n.t("breakfast")}</Text>
                    <Text whiteSpace="nowrap">{breakfastTimeStr}</Text>
                  </CustomTd>
                  <CustomTd colSpan={7} borderSize="0" dayCheck="" timeCheck={breakfastTime} bottomLast={true}>{breakfastForAllDays}</CustomTd>
                </Tr>

                <Tr> <CustomTd colSpan={9} borderSize="0"></CustomTd> </Tr>

                <Tr>
                  <CustomTd rowSpan={4} fontWeight="bold">
                    <Text marginBottom="5px">{i18n.t("lunch")}</Text>
                    <Text whiteSpace="nowrap">{lunchTimeStr}</Text>
                  </CustomTd>
                  <CustomTd fontWeight="bold"><Text whiteSpace="nowrap">{i18n.t("firstDish")}</Text></CustomTd>
                  {lunchFirst.map((item, index) => (
                    <CustomMealTd key={index} index={index} timeCheck={lunchTime} rightLast={index == lunchFirst.length-1}>{item}</CustomMealTd>
                  ))}
                </Tr>

                <Tr>
                  <CustomTd fontWeight="bold"><Text whiteSpace="nowrap">{i18n.t("mainDish")}</Text></CustomTd>
                  
                  {lunchMain.map((item, index) => (
                    <CustomMealTd key={index} index={index} timeCheck={lunchTime} rightLast={index == lunchMain.length-1}>{item}</CustomMealTd>
                  ))}
                </Tr>

                <Tr>
                  <CustomTd fontWeight="bold"><Text whiteSpace="nowrap">{i18n.t("sideDish")}</Text></CustomTd>
                  {lunchSide.map((item, index) => (
                    <CustomMealTd key={index} index={index} timeCheck={lunchTime} rightLast={index == lunchSide.length-1}>{item}</CustomMealTd>
                  ))}
                </Tr>

                <Tr>
                  <CustomTd fontWeight="bold">{i18n.t("dessert")}</CustomTd>
                  {lunchDessert.map((item, index) => (
                    <CustomMealTd key={index} index={index} timeCheck={lunchTime} bottomLast={true} rightLast={index == lunchDessert.length-1}>{item}</CustomMealTd>
                  ))}
                </Tr>

                <Tr> <CustomTd colSpan={9} borderSize="0"></CustomTd> </Tr>

                <Tr>
                  <CustomTd rowSpan={4} fontWeight="bold">
                    <Text marginBottom="5px">{i18n.t("dinner")}</Text>
                    <Text whiteSpace="nowrap">{dinnerTimeStr}</Text>
                  </CustomTd>
                  <CustomTd fontWeight="bold"><Text whiteSpace="nowrap">{i18n.t("firstDish")}</Text></CustomTd>
                  {dinnerFirst.map((item, index) => (
                    <CustomMealTd key={index} index={index} timeCheck={dinnerTime} rightLast={index == dinnerFirst.length-1}>{item}</CustomMealTd>
                  ))}
                </Tr>

                <Tr>
                  <CustomTd fontWeight="bold"><Text whiteSpace="nowrap">{i18n.t("mainDish")}</Text></CustomTd>
                  {dinnerMain.map((item, index) => (
                    <CustomMealTd key={index} index={index} timeCheck={dinnerTime} rightLast={index == dinnerMain.length-1}>{item}</CustomMealTd>
                  ))}
                </Tr>

                <Tr>
                  <CustomTd fontWeight="bold"><Text whiteSpace="nowrap">{i18n.t("sideDish")}</Text></CustomTd>
                  {dinnerSide.map((item, index) => (
                    <CustomMealTd key={index} index={index} timeCheck={dinnerTime} rightLast={index == dinnerSide.length-1}>{item}</CustomMealTd>
                  ))}
                </Tr>

                <Tr>
                  <CustomTd fontWeight="bold">{i18n.t("dessert")}</CustomTd>
                  {dinnerDessert.map((item, index) => (
                    <CustomMealTd key={index} index={index} timeCheck={dinnerTime} bottomLast={true} rightLast={index == dinnerDessert.length-1}>{item}</CustomMealTd>
                  ))}
                </Tr>

              </Tbody>
            </Table>
          </Box>
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
          window.open("https://www.uowm.gr/epikairotita/sitisi/enimerosi-gia-tin-leitoyrgia-ton-estiatorion-toy-panepistimioy-dytikis-makedonias-2024/");
        }}
        justifyContent="center"
        mt="2rem"
      >
        {i18n.t("restaurantPage")}
      </Button>
    </Flex>
  );
}
