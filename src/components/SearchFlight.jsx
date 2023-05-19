import React, { useState, useEffect } from "react";
import axios from "axios";
import FlightResults from "./FlightResults";

const SearchFlight = () => {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSourceChange = (e) => {
    setSource(e.target.value);
  };

  const handleDestinationChange = (e) => {
    setDestination(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setResults({});
    console.log(date);
    axios
      .post("https://flight-price-api-ed5f.onrender.com/api/v1/flight/price", {
        source: source,
        destination: destination,
        date: new Date(date),
      })
      .then((response) => {
        setResults(response.data.flightData);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  };

  useEffect(() => {
    if (results.length > 0) {
      setLoading(false);
    }
  }, [results]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className='form-group mt-1'>
          <label htmlFor='source'>Source:</label>
          <input
            type='text'
            id='source'
            className='form-control'
            value={source}
            onChange={handleSourceChange}
          />
        </div>
        <div className='form-group mt-1'>
          <label htmlFor='destination'>Destination:</label>
          <input
            type='text'
            id='destination'
            className='form-control'
            value={destination}
            onChange={handleDestinationChange}
          />
        </div>
        <div className='form-group mt-1'>
          <label htmlFor='date'>Date:</label>
          <input
            type='date'
            id='date'
            className='form-control'
            value={date}
            onChange={handleDateChange}
          />
        </div>
        <button type='submit' className='btn btn-primary mt-2'>
          Search
        </button>

        {loading && (
          <div className='text-center mt-3'>
            <div className='spinner-border' role='status'>
              <span className='visually-hidden'>Loading...</span>
            </div>
          </div>
        )}
      </form>

      {!loading && Object.keys(results).length > 0 && (
        <FlightResults results={results} />
      )}
    </>
  );
};

export default SearchFlight;
