
import React from 'react';
import FacebookPageFeed from '../components/FacebookPageFeed';
import Introduction from '../components/introduction';
import Pitch from '../components/Pitch';
const Home = () => {
  return (

    <div>
        {/* <Home></Home> */}
        <FacebookPageFeed/>
        <Introduction/>
        <Pitch/>
      {/* You can add more components or sections */}
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
