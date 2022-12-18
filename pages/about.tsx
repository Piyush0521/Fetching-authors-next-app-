import Head from 'next/head'
import { Box, Heading, Text } from '@chakra-ui/react'
const About = () => {
    return ( 
        <div className='background' color="#CCCFDC">
      <Head>
        <title>Blog Spark | About</title>
      
       
      </Head>
      <Box textAlign="justify" fontFamily="Quicksand" fontSize={[12,20]} mx={[5, 10]} pt={[5,30]} px={[3,8]} color="#CCCFDC">
      <Heading  fontFamily="Quicksand">About</Heading>
        <Text pt={[5,30]}  >metus maximus. Duis cursus iaculis ligula, ac facilisis sem ultrices at. Phasellus a tincidunt lectus. Donec congue accumsan est vitae molestie. Proin euismod dui quis lorem tincidunt lobortis. Sed nulla dui, rutrum vitae fringilla eu, aliquet eu elit. Pellentesque et porttitor ante.
<br/>
<br/>
Donec ut sagittis turpis. Ut pharetra nunc eget lorem lacinia, eu faucibus ligula finibus. Aliquam vehicula erat ac ipsum placerat venenatis. Donec iaculis dolor et felis blandit varius. Integer laoreet ex vel lectus tincidunt varius. Morbi vel porttitor ante. Integer sollicitudin, tellus sit amet iaculis ornare, orci urna efficitur enim, a varius lectus ligula quis augue. Vestibulum nec auctor odio.
<br/><br/>
Aliquam nec sollicitudin lorem. Nullam aliquam faucibus accumsan. Nam fringilla lacus id velit placerat sodales. Nam ornare suscipit quam id laoreet. In posuere vulputate orci eu lacinia. Praesent ac turpis posuere, viverra nulla non, imperdiet est. Donec consequat feugiat tellus, ut aliquam orci ultricies ac. Suspendisse id quam velit. Maecenas in neque in turpis vehicula condimentum at ac dolor.

Nulla imperdiet vel mauris ut congue. Proin tristique venenatis mauris vitae viverra. Ut nec nibh id velit molestie ornare. Sed rutrum accumsan risus, a pulvinar tellus dictum ut. Cras vitae metus eget odio ornare sodales. 
</Text></Box>
        </div>
     );
}
 
export default About;