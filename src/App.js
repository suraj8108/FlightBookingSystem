import logo from './logo.svg';
import './App.css';
import HomePage from './Component/Homepage/Homepage';
import Login from './Component/Login/login';
import Register from './Component/Login/Register';
import Search from './Component/Search/Search';
import SearchResult from './Component/Search/SearchResult';
import Seat from './Component/CheckIn/Seat';
import { useEffect, useState } from 'react';
import CheckInPage from './Component/CheckIn/CheckInPage';
import Passenger from './Component/CheckIn/Passenger';
import TermsAndConditions from './Component/CheckIn/TermsAndConditions';
import {useNavigate} from "react-router-dom"
import CheckInComplete from './Component/CheckIn/CheckInComplete';
import BoardingPass from './Component/CheckIn/BoardingPass';
import BookingComplete from './Component/Booking/BookingComplete';
import FlightTickets from './Component/Booking/FlightTickets';

function App() {

  const [seatsBooked , setSeatsBooked]= useState([1,2,3,4,7,97,24,65, 81, 82,84,85,86,87,88,89,90,170])
  const [passengers , setPassengers]=useState(3)
  const [passengerList, setPassengerList]=useState([
    {
      firstName:"anand",
      lastName:"vijay",
      gender:"Male",
      seat:"",
    },
    {
      firstName:"Suraj",
      lastName:"Yadav",
      gender:"Male",
      seat:"",
    },
    {
      firstName:"Pooja",
      lastName:"Mahabare",
      gender:"Female",
      seat:"",
    }
  ])
  const [type , setType]=useState("business")

  const CheckinHandler=(passengerlist)=>{
    
     setPassengerList(passengerlist)
  }

  const SearchHandler=()=>{

  }

  const SearchResultHandler=()=>{

  }

  const BookingHandler=()=>{

  }

  const PaymentHandler=()=>{}

  

  return (
    // <Seat seatsBooked={seatsBooked} passengers={passengers} type={type}/>
    
    // <Search/>
    //<HomePage/>
    //<CheckInPage seatsBooked={seatsBooked} passengers={passengers} passengerList={passengerList} type={type} checkIn={CheckinHandler}/>
    // <Passenger/>
    // <TermsAndConditions/>
    //<CheckInComplete />
    <BookingComplete/>
    //<FlightTickets/>
    //<BoardingPass/>
  );
}

export default App;
