import React from "react";
import { Avatar, Box, Flex, Text} from "@chakra-ui/react";

function Landing() {
    return (
        <Box className="light-box-container" >
            <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                <Box w={{base:"50%", md:"100%"}}>
                    <Text fontSize="2xl">Hi, I'm</Text>
                    <Text fontSize="4xl">Rajasri Janaki Raman</Text>
                    <Text fontSize="2xl">Front end developer</Text>
                </Box>
                <Box className="dark-box-container" w={{base:"50%", md:"100%"}}>
                    <Avatar width="200px" height="200px" />
                </Box>
            </Flex>
        </Box>
    );
}

export default Landing;