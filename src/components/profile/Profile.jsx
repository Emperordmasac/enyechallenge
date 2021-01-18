import React, { useState } from 'react'
import Pagination from "react-js-pagination";

import "./Profile.css"

const Profile = (props) => {
    const { profileLists } = props;
    
    
            console.log("bossNew: ",props)
            const profilePerPage = 20;
            const [activePage, setCurrentPage] = useState(1)

    if (!profileLists || profileLists.length === 0 ) return <p className="loading">There seems to be no data here</p>;



            //logic for displaying cirrent profiles 
        const indexOfLastProfile = activePage * profilePerPage;
        const indexOfFirstProfile = indexOfLastProfile - profilePerPage;
        const currentProfile = profileLists.records.profiles.slice( indexOfFirstProfile, indexOfLastProfile )

        const renderProfile = currentProfile.map((profileList) => {
            return (
                <div key={profileList.UserName} className="card-container">
                <h2>FirtstName: {profileList.FirstName}</h2>
                <h3>LasrName: {profileList.LastName}</h3>
                <h4>UserName: {profileList.UserName}</h4>
                <h5>Email: {profileList.Email}</h5>
                <h6>Credit Card No.: {profileList.CreditCardNumber}</h6>
                <p>Gender: {profileList.Gender}</p>
                <span>Domain Name: {profileList.DomainName}</span>
                <span>PhoneNumber: {profileList.PhoneNumber}</span>
                <span>Mac Adress: {profileList.MacAdress}</span>
                <span>URL: {profileList.URL}</span>
                <span>PamentMethod: {profileList.PaymentMethod}</span>
                <span>Credit Card Type: {profileList.CreditCardType}</span>
                <span>Location: {profileList.Latitude},{profileList.Longitude}</span>
                <span>Last Login: {profileList.LastLogin}</span>

          </div>

            )
        })
        const handlePageChange = ( pageNumber ) => {
            console.log( `active page is ${ pageNumber }` );
            setCurrentPage( pageNumber )
         };

         return (
            <div>
                <div className="pagination">
                  <Pagination
                     activePage={ activePage }
                     itemsCountPerPage={ 20 }
                     totalItemsCount={ profileLists.records.profiles.length }
                     pageRangeDisplayed={ 5 }
                     onChange={ handlePageChange }
                  />
               </div>
               <div className="result">
                  { renderProfile }
               </div>
               <div className="pagination">
                  <Pagination
                     activePage={ activePage }
                     itemsCountPerPage={ 20 }
                     totalItemsCount={ profileLists.records.profiles.length }
                     pageRangeDisplayed={ 5 }
                     onChange={ handlePageChange }
                  />
               </div>
            </div>
         )

}

export default Profile;

// const Profile = (props) => {
//     const { profileLists } = props;
    
    
//             console.log("boss: ",props)

//     if (!profileLists || profileLists.length === 0 ) return <p>There seems to be no data here</p>;
//     return ( 
//         <>
//             { profileLists.records.profiles.slice(0, 2).map((profileList) => {
//                 return (
//                         <div key={profileList.UserName} className="card-container">
//                             <h2>FirtstName: {profileList.FirstName}</h2>
//                             <h3>LasrName: {profileList.LastName}</h3>
//                             <h4>UserName: {profileList.UserName}</h4>
//                             <h5>Email: {profileList.Email}</h5>
//                             <h6>Credit Card No.: {profileList.CreditCardNumber}</h6>
//                             <p>Gender: {profileList.Gender}</p>
//                             <span>Domain Name: {profileList.DomainName}</span>
//                             <span>PhoneNumber: {profileList.PhoneNumber}</span>
//                             <span>Mac Adress: {profileList.MacAdress}</span>
//                             <span>URL: {profileList.URL}</span>
//                             <span>PamentMethod: {profileList.PaymentMethod}</span>
//                             <span>Credit Card Type: {profileList.CreditCardType}</span>
//                             <span>Location: {profileList.Latitude},{profileList.Longitude}</span>
//                             <span>Last Login: {profileList.LastLogin}</span>

//                       </div>

//                         // <Card profileList={profileList} />



//                 )
//             }) }

//         </>

//      )

// }

// export default Profile