import { Heading, Text, HStack, Box } from "@chakra-ui/react";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/");
  const data = await res.json();
  const details = data.map((singleAuthor) => {
    return {
      params: { id: singleAuthor.id.toString() },
    };
  });
  return {
    paths: details,
    fallback: false,
  };
};

export const getStaticProps = async (users) => {
  const id = users.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();

  return {
    props: { author: data },
  };
};
const Details = ({ author }) => {
  return (
    <div className="background">
      <Box mx={[5, 10]} pt={[6, 10]} px={[3, 8]}>
        <Heading color="#ECECED" fontFamily="Pacifico">
          {author.name}
        </Heading>
        <Box color="#CCCFDC" fontFamily="quicksand">
          <HStack mt={[3, 5]}>
            <Text fontWeight="extrabold">Name:</Text>
            <Text>{author.email}</Text>
          </HStack>
          <HStack mt={[1, 2]}>
            <Text fontWeight="bold">Address Line 1:</Text>
            <Text>{author.address.street}</Text>
          </HStack>
          <HStack mt={[1, 2]}>
            <Text fontWeight="bold">Address Line 2:</Text>
            <Text>{author.address.city}</Text>
          </HStack>
        </Box>
      </Box>
    </div>
  );
};

export default Details;
