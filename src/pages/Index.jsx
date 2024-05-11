import { Box, Container, Flex, Heading, Text, VStack, Button, Link, FormControl, FormLabel, Input, Textarea, useToast } from "@chakra-ui/react";
import { FaPhone, FaEnvelope, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Simulate sending email
    toast({
      title: "Request Submitted.",
      description: "We've received your service request and will contact you soon!",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  return (
    <Box>
      <Flex as="header" position="fixed" top="0" w="full" bg="white" zIndex="banner" boxShadow="sm" p={4} justifyContent="space-between" alignItems="center">
        <Box>
          <Text fontSize="2xl" fontWeight="bold" color="brand.700">AquaFix</Text>
        </Box>
        <Flex alignItems="center">
          <Link p={2} href="#services" mr={2}>Services</Link>
          <Link p={2} href="#testimonials" mr={2}>Testimonials</Link>
          <Link p={2} href="#contact" mr={2}>Contact</Link>
          <Button colorScheme="blue" href="#contact">Book Service</Button>
        </Flex>
      </Flex>
      <Container maxW="container.xl" pt="100px">
        <VStack spacing={10} align="stretch">
          <Box id="services">
            <Heading mb={4}>Our Services</Heading>
            <Text>Explore our comprehensive pool repair and maintenance services. Click on each service to see more details including pricing, duration, and equipment used.</Text>
            {/* Details would be expandable components */}
          </Box>
          <Box id="testimonials">
            <Heading mb={4}>Customer Testimonials</Heading>
            <Text>Read what our customers say about our exceptional service.</Text>
            {/* Carousel of testimonials */}
          </Box>
          <Box as="form" id="contact" onSubmit={handleSubmit}>
            <Heading mb={4}>Request a Service</Heading>
            <FormControl isRequired>
              <FormLabel>Name</FormLabel>
              <Input placeholder="Your Name" />
            </FormControl>
            <FormControl mt={4} isRequired>
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="name@example.com" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Pool Type</FormLabel>
              <Input placeholder="Type of your pool" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Pool Size</FormLabel>
              <Input placeholder="Size of your pool" />
            </FormControl>
            <FormControl mt={4} isRequired>
              <FormLabel>Desired Service</FormLabel>
              <Textarea placeholder="Describe the service you need" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Preferred Date/Time</FormLabel>
              <Input type="datetime-local" />
            </FormControl>
            <Button mt={4} colorScheme="blue" type="submit">Submit Request</Button>
          </Box>
        </VStack>
      </Container>
      <Box as="footer" bg="gray.100" color="black" p={4}>
        <Flex justifyContent="space-between" alignItems="center">
          <Text>&copy; 2023 AquaFix. All rights reserved.</Text>
          <Flex>
            <Link href="#" p={2}><FaPhone /></Link>
            <Link href="#" p={2}><FaEnvelope /></Link>
            <Link href="#" p={2}><FaInstagram /></Link>
            <Link href="#" p={2}><FaFacebook /></Link>
            <Link href="#" p={2}><FaTwitter /></Link>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default Index;