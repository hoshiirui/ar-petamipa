import MisakiHeader from "@/components/header/MisakiHeader";
import { Box, Flex, Text, Stack, Img, VStack, HStack } from "@chakra-ui/react";
import birthdayWishes from "../data/wish.json";
import Head from "next/head";
import ChronicleCards from "@/components/cards/ChronicleCards";

import chronicle from "../data/chronicle.json";
// import { useEffect, useState } from "react";

export default function Home() {
  // const [audio] = useState(new Audio("/assets/adohimawari.mp3"));

  // const handlePlay = () => {
  //   audio.play();
  // };

  // const handlePause = () => {
  //   audio.pause();
  //   audio.currentTime = 0;
  // };

  return (
    <Box maxW="393px" m={"auto"} pos={"relative"}>
      <Head>
        <title>{"Chaca's Birthday Card"}</title>
      </Head>
      <Flex
        justifyContent={"center"}
        alignItems={"start"}
        bgImage="url('assets/img/webbg/hero.jpg')" // Replace with your image path
        bgSize="cover"
        bgPosition="center"
        minH={"100vh"}
      >
        <Stack pt={"130px"} gap={"0px"}>
          <Box
            fontSize="sm"
            fontWeight="regular"
            as="h1"
            textAlign="center"
            letterSpacing="2px"
            color="#3285C7"
            mixBlendMode="luminosity"
          >
            <Text display="inline">お誕生日おめでとう, </Text>
            <Text display="inline" fontWeight="bold">
              チャチャ!
            </Text>
          </Box>
          <Box
            fontSize={"3xl"}
            fontWeight={"bold"}
            as="h1"
            textAlign={"center"}
          >
            <Text display="inline-block" color={"#56A7EA"}>
              Happy Birthday,
            </Text>
            <Text display="block" color={"#3285C7"}>
              Chaca!
            </Text>
            {/* <button onClick={handlePlay}>Play</button>
            <button onClick={handlePause}>Pause</button> */}
          </Box>
        </Stack>
      </Flex>
      <Flex
        py={"40px"}
        bgImage="url('assets/img/webbg/section1.png')" // Replace with your image path
        minH={"100vh"}
        bgSize="cover"
        bgPosition="center"
        mt={"-150px"}
        direction={"column"}
        pos={"relative"}
      >
        <MisakiHeader theme="light" title="BIRTHDAY WISH" />
        <Stack
          gap="20px"
          px={"44px"}
          py={"40px"}
          fontSize={"16px"}
          textAlign={"justify"}
        >
          <Text fontWeight={"bold"} color={"#3285C7"}>
            Hi Chaca!
          </Text>
          <Text>I want to wish you the happiest birthday 🌻</Text>
          <Text>
            Just like a{" "}
            <Text as="span" fontWeight="bold" color="#C7B832">
              daylight
            </Text>{" "}
            in a dark cave, you bring warmth and radiance for the people closest
            to you. Every step, every action, every gesture you made, convinces
            me that you are the{" "}
            <Text as="span" fontWeight="bold" color="#E55E81">
              prettiest creation
            </Text>{" "}
            of the Almighty.
          </Text>
          <Text>
            I hope in this very special day of yours, may your day be filled
            with joy, laughter, and all the things that bring a gorgeous smile
            to your face. As for me, you deserve all the happiness in the world.
            May all your dreams come true in the most beautiful way.
          </Text>
        </Stack>
      </Flex>
      <Flex
        bgImage="url('assets/img/webbg/section2_1.jpg')"
        minH={"2100px"}
        bgSize="cover"
        bgPosition="center"
        mt={"-150px"}
        direction={"column"}
        zIndex={"-1"}
        py={"180px"}
      >
        <MisakiHeader theme="dark" title="LETTER FOR YOU" />
        <Stack gap="32px" px={"44px"} py={"24px"} fontSize={"16px"}>
          <Text textAlign={"center"} fontSize={"16px"} color={"white"}>
            Like a{" "}
            <Text as="span" fontWeight="bold" color="#3285C7">
              magical spell
            </Text>
            , just by thinking of you, I think tomorrow will{" "}
            <Text as="span" fontWeight="bold" color="#C7B832">
              shine.
            </Text>
          </Text>
          <Img src="assets/img/other/letter-1.jpg" />
          <Stack gap={"16px"}>
            <Text
              textAlign={"justify"}
              fontSize={"14px"}
              color={"#A4C8E5"}
              fontWeight={"bold"}
            >
              Oh hi again, Chaca!
            </Text>
            <Text textAlign={"justify"} fontSize={"14px"} color={"white"}>
              I hope this letter finds you in good spirits. I&apos;ve been
              meaning to share some of my thoughts with you—things that have
              lately been lingering in my mind.
            </Text>
            <Text textAlign={"justify"} fontSize={"14px"} color={"white"}>
              To you, who is more{" "}
              <Text as="span" fontWeight="bold" color="#E9C9D1  ">
                gorgeous
              </Text>{" "}
              than the thousand stars, who is more radiant than the sun, who is
              more{" "}
              <Text as="span" fontWeight="bold" color="#E9C9D1  ">
                beautiful
              </Text>{" "}
              than the whole world, yet who is just an{" "}
              <Text as="span" fontWeight="bold" color="#E9C9D1  ">
                ordinary girl
              </Text>
              .
            </Text>
            <Text textAlign={"justify"} fontSize={"14px"} color={"white"}>
              Is it you? weave the rainwater above my head into{" "}
              <Text as="span" fontWeight="bold" color="#A4C8E5">
                blue eaves
              </Text>
              .
            </Text>
            <Text textAlign={"justify"} fontSize={"14px"} color={"white"}>
              Is it you?{" "}
              <Text as="span" fontWeight="bold" color="#DDD8AD">
                sprinkle the moonlight
              </Text>
              , drive away the nightmare.
            </Text>
            <Text
              textAlign={"justify"}
              fontSize={"14px"}
              color={"white"}
              fontWeight={"bold"}
            >
              “Surely, it is you!”
            </Text>
            <Text textAlign={"justify"} fontSize={"14px"} color={"white"}>
              Ever since I heard your name, I felt this strange pull towards
              you, like we were meant to be. We almost missed each other a few
              times, but fate brought us together during the &apos;colorful
              odyssey&apos; project, my first with complete strangers.
            </Text>{" "}
            <Text textAlign={"justify"} fontSize={"14px"} color={"white"}>
              {" "}
              I didn&apos;t realize it at the time, but I started craving your
              company. You always knew how to make me laugh and feel so good
              about myself. You&apos;d get excited about my ideas, and I felt
              like I could be completely myself around you.
            </Text>
            <Text textAlign={"justify"} fontSize={"14px"} color={"white"}>
              The best part is, you always seem to appear when I need you most.
              When I&apos;m feeling down or lost, you&apos;re like my own
              personal moon, always watching over me. And you always know how to
              lift me back up, so I can face the world again.
            </Text>
            <Text textAlign={"justify"} fontSize={"14px"} color={"white"}>
              Because of you, I&apos;m now enjoying every step of my journey, no
              matter where it leads. Your presence has already brought a new
              kind of light into my life,{" "}
              <Text as="span" fontWeight="bold" color="#E9C9D1">
                the greatest gift
              </Text>{" "}
              fate has bestowed upon me, and for that, I&apos;m grateful.
            </Text>
            <Text textAlign={"justify"} fontSize={"14px"} color={"white"}>
              Looking forward to more interactions, more conversations, and
              perhaps, more moments.
            </Text>
            <Text textAlign={"justify"} fontSize={"14px"} color={"white"}>
              Take care,{" "}
              <Text as="span" fontWeight="bold" color="#A4C8E5">
                Chaca
              </Text>
              .
            </Text>
          </Stack>
        </Stack>
      </Flex>
      <Flex
        py={"56px"}
        bgImage="url('assets/img/webbg/section3.png')" // Replace with your image path
        minH={"120vh"}
        bgSize="cover"
        bgPosition="center"
        mt={"-56px"}
        direction={"column"}
        pos={"relative"}
        px={"44px"}
      >
        <MisakiHeader theme="dark" title="OUR CHRONICLE" />
        <Text textAlign={"center"} py="16px" fontSize={"12px"} color={"white"}>
          Interact with the picture thumbnail to view the picture’s story!
        </Text>
        <HStack gap={"-2px"}>
          <VStack gap={"32px"}>
            <ChronicleCards img="tsy001" chronicleData={chronicle[0]} />
            <ChronicleCards img="tsy011" chronicleData={chronicle[10]} />
            <ChronicleCards img="tsy003" chronicleData={chronicle[2]} />
            <ChronicleCards img="tsy013" chronicleData={chronicle[12]} />
          </VStack>
          <VStack gap={"32px"}>
            <ChronicleCards img="tsy004" chronicleData={chronicle[3]} />
            <ChronicleCards img="tsy005" chronicleData={chronicle[4]} />
            <ChronicleCards img="tsy006" chronicleData={chronicle[5]} />
            <ChronicleCards img="tsy007" chronicleData={chronicle[6]} />
            <ChronicleCards img="tsy012" chronicleData={chronicle[11]} />
          </VStack>
          <VStack gap={"32px"}>
            <ChronicleCards img="tsy008" chronicleData={chronicle[7]} />
            <ChronicleCards img="tsy009" chronicleData={chronicle[8]} />
            <ChronicleCards img="tsy010" chronicleData={chronicle[9]} />
            <ChronicleCards img="tsy014" chronicleData={chronicle[13]} />
          </VStack>
        </HStack>
      </Flex>
      <Flex
        bgImage="url('assets/img/webbg/section4.jpg')"
        minH={"120vh"}
        bgSize="cover"
        bgPosition="center"
        mt={"-150px"}
        direction={"column"}
        zIndex={"-1"}
        pt={"180px"}
      >
        <MisakiHeader theme="light" title="GIFT FOR YOU" />
        <Stack gap="32px" px={"44px"} py={"24px"} fontSize={"16px"}>
          <Text textAlign={"justify"} fontSize={"14px"}>
            At last, I want to say thank you. For every impact you gave on my
            life, for everything you have done to become yourself now, also for
            reading this imperfect long messages... 🌻
          </Text>
          <Text textAlign={"justify"} fontSize={"14px"}>
            I have also prepared some things for this special day. I think it
            will arrive late but anyway... hope you like it 😊
          </Text>
          <HStack
            justifyContent={"center"}
            alignItems={"flex-start"}
            gap={"20px"}
          >
            {/* <VStack
              gap={"18px"}
              _hover={{
                transform: "scale(1.10)",
                transition: "transform 0.3s",
              }}
            >
              <Img src="assets/img/gift/myfuturesunflower.jpg" />
              <VStack alignItems={"flex-start"} gap={"2px"}>
                <Text fontSize="10px" color={"#84847C"}>
                  해바라기처럼 밝은 미소
                </Text>
                <Text fontSize="16px" fontWeight={"bold"}>
                  Some Merchandise
                </Text>
                <Text fontSize="10px" color={"#84847C"}>
                  It all started with a dream, and yet becoming a dream yet to
                  be dreamed.
                </Text>
              </VStack>
            </VStack> */}
            <VStack
              gap={"18px"}
              _hover={{
                transform: "scale(1.10)",
                transition: "transform 0.3s",
              }}
            >
              <Img src="assets/img/gift/one.jpg" />
            </VStack>
            <VStack
              gap={"18px"}
              _hover={{
                transform: "scale(1.10)",
                transition: "transform 0.3s",
              }}
            >
              <Img src="assets/img/gift/two.jpg" />
            </VStack>
          </HStack>
        </Stack>
        <Text textAlign={"center"} pt={"112px"}>
          {" "}
          Warm regards,{" "}
          <Text as={"span"} fontWeight={"bold"}>
            <br></br>
            Rangga Permana
          </Text>
        </Text>
      </Flex>
      <Flex
        py={"56px"}
        bgImage="url('assets/img/webbg/footer.png')" // Replace with your image path
        minH={"15vh"}
        bgSize="cover"
        bgPosition="center"
        mt={"-56px"}
        direction={"column"}
        pos={"relative"}
        px={"44px"}
      ></Flex>
    </Box>
  );
}
