import { Center, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";


const NotFound = () => {
    return ( 
        <div className="background">
        <Center>
        <Heading mt={[5,10]}>Oooops...</Heading> </Center>
        <Center>
        <Text align="center" my={[3,8]} fontSize={[15,20]}>Page Not Found <br/> 
        <Text mt={[3,6]} fontWeight="bold" >
        <Link href={"/"}>Click here to go back to Homepage</Link></Text></Text>
        </Center>
        </div>
     );
}
 
export default NotFound;