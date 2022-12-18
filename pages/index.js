import Head from "next/head";

import Image from "next/image";

import { Box, Heading, Text, Center, HStack } from "@chakra-ui/react";

export default function Home() {
  return (
    <div className="background" color="#CCCFDC">
      <Head>
        <title>Blog Spark | Home</title>
      </Head>
      <Center>
        <HStack>
          <Heading
            color="#CCCFDC"
            mx={[5, 10]}
            px={[3, 8]}
            mt={[5, 10]}
            textAlign="center"
            fontFamily="quicksand"
            fontWeight="bold"
          >
            Welcome to{" "}
            <Box fontFamily="Pacifico" fontSize={[30, 50]} color="#ECECED">
              Blog SPARK
            </Box>
          </Heading>
        </HStack>
      </Center>
      <Text
        color="#282a29"
        textAlign="justify"
        fontSize={[12, 20]}
        mx={[5, 10]}
        pt={[5, 30]}
        px={[3, 8]}
      >
        Donec ut sagittis turpis. Ut pharetra nunc eget lorem lacinia, eu
        faucibus ligula finibus. Aliquam vehicula erat ac ipsum placerat
        venenatis. Donec iaculis dolor et felis blandit varius. Integer laoreet
        ex vel lectus tincidunt varius. Morbi vel porttitor ante. Integer
        sollicitudin, tellus sit amet iaculis ornare, orci urna efficitur enim,
        a varius lectus ligula quis augue. Vestibulum nec auctor odio.
        <br />
        <br />
        Aliquam nec sollicitudin lorem. Nullam aliquam faucibus accumsan. Nam
        fringilla lacus id velit placerat sodales. Nam ornare suscipit quam id
        laoreet. In posuere vulputate orci eu lacinia. Praesent ac turpis
        posuere, viverra nulla non, imperdiet est. Donec consequat feugiat
        tellus, ut aliquam orci ultricies ac. Suspendisse id quam velit.
        Maecenas in neque in turpis vehicula condimentum at ac dolor. Nulla
        imperdiet vel mauris ut congue. Proin tristique venenatis mauris vitae
        viverra. Ut nec nibh id velit molestie ornare. Sed rutrum accumsan
        risus, a pulvinar tellus dictum ut. Cras vitae metus eget odio ornare
        sodales.
      </Text>
    </div>
  );
}
