import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Heading,
} from "@chakra-ui/react";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/");
  const data = await res.json();
  return {
    props: { authors: data },
  };
};

const Authors = ({ authors }) => {
  return (
    <div className="background">
      <Heading
        color="#ECECED"
        pt={[3, 5]}
        mx={[5, 10]}
        px={[3, 5]}
        fontFamily="Quicksand"
      >
        Our Top Authors
      </Heading>
      {authors.map((author) => (
        <Link href={"/authors/" + author.id} key={author.id}>
          <Card
            mt={[3, 5]}
            mx={[5, 10]}
            background="#CCCFDC"
            _hover={{
              borderStart: "6px solid #70727b",
              borderStartRadius: "0",
            }}
          >
            <CardBody>
              <Text fontFamily="Quicksand" fontWeight="bold">
                {author.name}
              </Text>
            </CardBody>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default Authors;
