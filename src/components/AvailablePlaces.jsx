import Places from './Places.jsx';
import {useState, useEffect} from 'react'


export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  // useEffect(() => {
  //   //this would be a get request
  // //fetch returns a promise
  // fetch('http://localhost:3000/places').then((response)=>{
  //   return response.json();
  // }).then((resData) => {
  //   setAvailablePlaces(resData.places);
  // })
  // },[]);

  // async, await alternative
  useEffect(() => {
    setIsFetching(true);
    async function fetchPlaces(){
      const response= await fetch('http://localhost:3000/places');
      const responseData= await response.json();
      setAvailablePlaces(responseData.places);
      setIsFetching(false);
    }

    fetchPlaces();
  },[]);

  


  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Fetching place data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
