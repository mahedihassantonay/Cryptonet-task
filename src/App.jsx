import React from 'react';
import Header from './components/Header';
import UserCard from './components/UserCard';
import DisplayCard from './components/DisplayCard';


const App = () => {
  return (
    <div className='container mx-auto'>
      <Header />
     {/* <UserCard /> */}
     <DisplayCard />
    </div>
  );
};

export default App;