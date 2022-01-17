import React, { useEffect, useState } from 'react';
import Coupons from './Coupons';
import styled from 'styled-components';

const App = () => {

    const [search, setSearch] = useState('');

    const [query, setQuery] = useState('Pay');

    const [coupons , setCoupons] = useState([]);

    const getCoupons = async () => {

        // using Spring Boot 
        // const response = await fetch(`http://localhost:8080/searchcoupon/${query}`);
        
        // using Lovely Express Server
        // const response = await fetch(`http://localhost:555/api/s/${query}`);
        
        
        const response = await fetch(`http://localhost:5555/${query}`);

        const data = await response.json();
        setCoupons(data);
        // console.log(data);
    }

    const updateSearch = e => {
        setSearch(e.target.value)
        // console.log(e.target.value)
        // console.log(search)
    };
    
    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        //it will make it to empty string again
        setSearch('');
    }

    useEffect(() => {
        getCoupons();
    }, [query])

    return (
        <div>
            <Wrapper>
            <form className="search-form" onSubmit={getSearch} title="search-bar">
                <input className="search-bar" type="text" value={search} onChange={updateSearch} />
                <button className="btn search-button" type="submit">
                Search
                </button>
            </form>
            </Wrapper>
        <div title="coupons">

            {coupons.map(data => ( 
            <Coupons
                key = {data.id}
                title = {data.title}
                from = {data.from}
                offer = {data.offer}
                line1 = {data.line1}
                line2 = {data.line2}
                line3 = {data.line3}
                storurl = {data.storurl}
                couponcode = {data.couponcode}
                imgurl = {data.imgurl}
            />
            ))}
        </div>
        </div>
    )
}

const Wrapper = styled.section`
* {
    margin: 0;
    padding: 0;
  }

.search-form {
    min-height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    
  }
  .search-bar {
    width: 50%;
    border: none;
    padding: 10px;
    background-color: #f1f1f1;
  }
  
  .search-button {
    // background: #01ca70;
    background: #ccc;
    border: none;
    padding: 10px 20px;
    color: white;
  }`

export default App
