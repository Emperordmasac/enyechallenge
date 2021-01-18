import './App.css';

import Profile from "./components/profile/Profile";
import withProfileLoading from "./components/profile/withProfileLoading"
import SearchBox from './components/searchBox/SearchBox';


import { useEffect, useState } from "react"

function App() {

  const ProfileLoading = withProfileLoading(Profile)

  const [appState, setAppState] = useState({
    loading: false,
    profileLists: []
  })

  useEffect(() => {
    setAppState({ loading: true })
    fetch('http://api.enye.tech/v1/challenge/records')
      .then((response) => response.json())
      .then((profile) => {
        setAppState({ loading: false, profileLists: profile })
      })

  }, []);


  return (
    <div className="App">

      <div>
        <h1 className="head">Profiles Of Employees in Enye Tech</h1>
        {
          console.log("data :", appState.profileLists)
        }
      </div>
      <div className="search">
        <SearchBox
          placeholder='search the records'

        />
      </div>
      <div className="container">
        <ProfileLoading isLoading={appState.loading} profileLists={appState.profileLists} />
      </div>
    </div>
  );
}

export default App;
