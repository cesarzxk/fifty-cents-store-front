import { Box, Center, Image } from "@chakra-ui/react";

import Vector from "./Vector.svg";
import { motion } from "framer-motion";

export function Loading() {
  return (
    <Center w="100%" flex={6}>
      <Box
        as={motion.div}
        data-testid="container"
        maxW={{ base: "99% ", sm: "23rem", md: "13rem" }}
        borderWidth="1px"
        borderRadius="100%"
        overflow="hidden"
        animate={{
          scale: [0.7, 1, 1, 0.7, 0.7],
          rotate: [0, 0, 270, 270, 0],
          transition: {
            duration: 3,
            ease: "easeInOut",
            repeatType: "loop",
            repeat: Infinity,
          },
        }}
      >
        <Image src={Vector} />
      </Box>
    </Center>
  );
}
