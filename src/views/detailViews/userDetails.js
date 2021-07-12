import React from 'react';
import { Link } from 'react-router-dom'
import {
  Box,
  Flex,
  Text,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button
} from '@chakra-ui/react';
//Store
import {connect} from 'react-redux';

//UI components
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import theme from '../../components/styles/theme'
import Avatar from '../../components/User/Avatar'



const mapStateToProps = (state) => {
	return {
		users: state.homepage.users,
	};
};


export const PeopleDetails = ({users, match, abs = 'undefined'}) => {
  const userId = match.params.id
  // -1 because redux store starts from 0 whereas the random user is 1 indexed
  const user = users[userId-1];

  return(
    <>
    <Header page="people"/>
    {
      user ? <>
      <Box m="16px">
      <Breadcrumb spacing="8px">
        <BreadcrumbItem>
          <Link to="/"><BreadcrumbLink href="#">Homepage</BreadcrumbLink></Link>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="#">{user.name.first}</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </Box>
    <Box margin={["20px auto", "100px auto"]} width={["fit-content","fit-content", "600px"]} position="relative" p="8px" textAlign="center" border={"1px solid "+theme.colors.brand.primary} borderRadius={theme.radii.lg}>
      <Flex textAlign="left" flexDir={["column", "column", "row"]}>
        <Box my="auto">
          <Avatar radius="10px" src={user.picture.large} avatarSize="300px"/>
        </Box>
        <Flex ml="16px" flexDirection="column">
          <Box py="4px">
            <Text fontWeight="bold"> Firstname: &nbsp;</Text>
            <Text> {user.name.first}</Text>
          </Box>
          <Box>
            <Text fontWeight="bold"> Lastname: &nbsp;</Text>
            <Text> {user.name.last}</Text>
          </Box>
          <Box>
            <Text fontWeight="bold"> Phone number: &nbsp;</Text>
            <Text> {user.phone}</Text>
          </Box>
          <Box>
            <Text fontWeight="bold"> Age: &nbsp;</Text>
            <Text> {user.dob.age}</Text>
          </Box>
          <Box>
            <Text fontWeight="bold"> Email: &nbsp;</Text>
            <Text> {user.email}</Text>
          </Box>
          <Box>
            <Text fontWeight="bold"> Gender: &nbsp;</Text>
            <Text> {user.gender}</Text>
          </Box>
        </Flex>
        </Flex>
      </Box>
      </>: 
      <Box m="16px">
        <Text my="8px">Oops! something went wrong.</Text>
        <Link to="/">
        <Button>Go Back to Homepage</Button>
        </Link>
      </Box>}
    <Footer/>
    </>
  )
}

export default connect(mapStateToProps)(PeopleDetails);