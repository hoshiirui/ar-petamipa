import { Flex, Img, Stack, Text } from "@chakra-ui/react";
import React from "react";

interface Props {
  title: string;
  theme: "dark" | "light";
}

const MisakiHeader = ({ title, theme }: Props) => {
  return (
    <Stack align={"center"} width="full" h={"fit-content"} spacing={"1px"}>
      <Text
        textTransform={"uppercase"}
        color={theme == "light" ? "#3285C7" : "#FFFFFF"}
        fontSize={"lg"}
        letterSpacing={"1px"}
        textShadow={"0px 0px 6.808021545410156px #FFF"}
      >
        {title}
      </Text>
      <Img
        src={
          theme == "light"
            ? "assets/img/other/headerLineLight.png"
            : "assets/img/other/headerLineDark.png"
        }
      />
    </Stack>
  );
};

export default MisakiHeader;
