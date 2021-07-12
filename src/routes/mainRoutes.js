import Homepage from '../views/homepage';
import UserDetails from '../views/detailViews/userDetails';

// Defining all the possible routes for our application
var mainRoutes = [
  { path: `/`, name: "Homepage", component: Homepage },
  { path: `/user/:id`, name: "User Details", component: UserDetails },
];
export default mainRoutes;
