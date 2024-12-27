import {
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Image,
  Img,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import MisakiHeader from "../header/MisakiHeader";

interface ChronicleProps {
  chronicleData: any;
  img: string;
}

const ChronicleCards = ({ chronicleData, img }: ChronicleProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <VStack>
        <Img
          src={`assets/img/chronicles/thumb/${img}.png`}
          _hover={{
            transform: "scale(1.10)",
            transition: "transform 0.3s",
          }}
          onClick={() => setIsDrawerOpen(true)}
        />
      </VStack>
      <Drawer
        isOpen={isDrawerOpen}
        placement="top"
        onClose={() => setIsDrawerOpen(false)}
        size="full"
        trapFocus={false}
      >
        <DrawerOverlay onClick={() => setIsDrawerOpen(false)} />
        <DrawerContent
          maxW="390px"
          p={0}
          bg="white"
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          bgImage="url('assets/img/webbg/section4.jpg')"
          bgSize="cover"
          bgPosition="center"
        >
          <DrawerCloseButton color={"gray"} />
          <Stack maxW="393px" padding={"40px"} gap={"24px"} overflowY={"auto"}>
            {/* <MisakiHeader
              title={chronicleData ? chronicleData.title : "No Title"}
              theme="light"
            /> */}

            <Image
              // px={"40px"}
              src={`assets/img/chronicles/featured/${chronicleData.id}`}
              alt={chronicleData ? chronicleData.title : "nnonne"}
              maxH="95vh"
              minW="80vw"
              objectFit="contain"
              onClick={() => setIsDrawerOpen(false)}
              pb={"20px"}
            />
            <VStack alignItems={"center"}>
              <Text
                textAlign={"center"}
                fontSize="10px"
                color="#3285C7"
                mixBlendMode="luminosity"
                letterSpacing="2px"
              >
                {chronicleData ? chronicleData.subtitle : ""}
              </Text>
              <Text
                textAlign={"center"}
                fontSize="20px"
                color="black"
                letterSpacing="2px"
                textTransform={"uppercase"}
              >
                {chronicleData ? chronicleData.title : ""}
              </Text>
            </VStack>
            {chronicleData.desc !== "" ? (
              chronicleData.desc.map((paragraph: any, index: any) => (
                <Text
                  textAlign={"justify"}
                  fontSize={"14px"}
                  color="#3285C7"
                  mixBlendMode="luminosity"
                  key={index}
                >
                  {paragraph.para}
                </Text>
              ))
            ) : (
              <Text
                textAlign={"justify"}
                fontSize={"14px"}
                color="#3285C7"
                mixBlendMode="luminosity"
              >
                Taburan bintang di langit Kyoto tampak sangat indah di malam
                perayaan Tsukimi. Itu adalah malam istimewa bagi Shira, ulang
                tahunnya yang ke-18. Shira dan kakaknya, Misaki, memutuskan
                untuk merayakannya dengan cara yang unik, di bawah sinar bulan
                yang purnama, menghadiri festival Tsukimi di kuil terpencil di
                Arashiyama. Sejak pagi, mereka menjelajahi keindahan Arashiyama.
                Pertama, mereka berjalan-jalan di Sagano Bamboo Forest, di mana
                tiupan angin pelan mengisi telinga mereka dengan suara gemuruh
                batang bambu yang bergetar. Shira, mengenakan yukata putih yang
                cocok dengan kulitnya yang seputih salju, terlihat seperti dewi
                dalam hutan bambu. Misaki, yang memilih yukata kuning,
                menyesuaikan diri dengan bunga matahari kesukaannya. Rambut
                coklat keemasan yang terurai di bahunya menambah pesona pada
                penampilannya.
              </Text>
            )}
          </Stack>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default ChronicleCards;
