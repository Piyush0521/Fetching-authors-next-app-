import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,Input, Box, Textarea
  } from '@chakra-ui/react'
  const NewBlog = () => {
    return ( 
        <div className='background'>
        <Box mx={[8, "8rem"]} color="#CCCFDC">
        <FormControl isRequired pt={[6,12]}>
  <FormLabel>Blog Title</FormLabel>
  <Input placeholder='Blog Title' />
</FormControl>
<FormControl isRequired mt={[3,6]}>
  <FormLabel>Blog Snippet</FormLabel>
  <Input placeholder='Blog Snippet' />
</FormControl>
<FormControl isRequired py={[3,6]}>
  <FormLabel>Blog Content</FormLabel>
  <Textarea placeholder='Type Here...'></Textarea>
  
</FormControl>
        </Box></div>
     );
}
 
export default NewBlog;