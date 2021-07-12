import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router";
import {
  Box,
  Grid,
  Flex,
  Text,
} from '@chakra-ui/react'
//API
import { getAllUsers } from '../api/users/usersApi'
import { connect } from 'react-redux';
import { setLoading, setUsers } from '../store';


//UI components
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button/Button"
import Avatar from '../components/User/Avatar'
import theme from '../components/styles/theme'


const mapStateToProps = (state) => {
	return {
		ui: state.ui,
		users: state.homepage.users,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
    setUsers: (users) => dispatch(setUsers(users)),
    setLoading: (state) => dispatch(setLoading(state))
	};
};

export const Homepage = ({users, setUsers, setLoading}) => {
  const history = useHistory();
  const [page, setPage] = useState(1);
  const [showMore, setShowMore]  = useState(false)


useEffect(() => {
    if(users.length === 0 || showMore) {
      setPage(page+1)
      setLoading(true)
      getAllUsers(page).then(res => {
        setUsers(users.concat(res))
        setLoading(false)
        setShowMore(false)
      })  
    }
}, [showMore]);

  return(
    <>
    <Header  page="movies"/>
    <Box margin={["30px 20px 100px", "30px 20px 100px", "50px 50px 100px"]}>
      <Grid
        templateColumns="repeat( auto-fit, minmax(300px, 1fr))"
        columnGap="16px"
        rowGap="40px"
        alignItems="center"
        row={'281px'}
      >
      {users.length > 0 &&  users.map((user, i) => (
          <Box cursor="pointer" onClick={() => history.push(`/user/${i+1}`)} key={i} position="relative" p="8px" textAlign="center" border={"1px solid "+theme.colors.brand.primary} borderRadius={theme.radii.lg}>
            <Box position="absolute" top="-20px" left="calc(50% - 26px)">
              <Avatar src={user.picture.thumbnail}/>
            </Box>
            <Flex mt="30px" justifyContent="center" borderBottom={"1px solid "+theme.colors.gray[300]}>
              {/* <Text fontWeight="bold">Name: </Text> */}
              <Text> {user.name.title} {user.name.first} {user.name.last}</Text>
            </Flex>
            <Flex mt="16px" justifyContent="center">
              <Text fontWeight="bold">From: &nbsp;</Text>
              <Text>{user.location.city}, {user.location.country}</Text>
            </Flex>
          </Box>
          ))}
      </Grid>
      <Flex my="32px" justifyContent="center">
        <Button buttonType="secondary" onClick={() => setShowMore(true)}>Show more</Button>
      </Flex>
    </Box>
    <Footer/>
    </>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
