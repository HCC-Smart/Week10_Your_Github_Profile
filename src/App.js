import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

import MyProfile from './components/MyProfile';

function App() {
  const [profile, setProfile] = useState({});
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);

  useEffect(() => {
    const gitData = async () => {
      try {
        const profileData = await axios.get(
          'https://api.github.com/users/HCC-Smart'
        );
        const followersData = await axios.get(
          'https://api.github.com/users/HCC-Smart/followers'
        );
        const followingData = await axios.get(
          'https://api.github.com/users/HCC-Smart/following'
        );

        setProfile(profileData.data);
        setFollowers(followersData.data);
        setFollowing(followingData.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    gitData();
  }, []);

  return (
    <Router>
      <div className="bg-white md:mx-auto rounded shadow-xl w-full md:w-1/2 overflow-hidden">
        <div className="h-[140px] bg-gradient-to-r from-cyan-500 to-blue-500"></div>
        <MyProfile profile={profile} followers={followers} following={following} />
      </div>
    </Router>
  );
}

export default App;
