import React from 'react';
import styled from 'styled-components'

const Coupons = ({title,from,imgurl,offer,line1,line2,line3,storurl,couponcode}) => {
    return (
    <Wrapper>
        {/* <div>
            <h1>{title}</h1>
            <h3>{from} </h3>
            <img src={imgurl} alt="imgurl"/>
            <h4>{offer}</h4>
            <ul>
                <li>{line1}</li>
                <li>{line2}</li>
                <li>{line3}</li>
            </ul>
            <a href={storurl} target="_blank">
                <button>{from}</button>
            </a>
            <h2>{couponcode}</h2>
        </div> */}
    

        <div className="coupon" title="test-coupon">
            <img src={imgurl} title="test-coupon-img"/>
            <div className="img_container" title="test-coupon-title">
                <h2>{title}</h2>
            </div>
            
            <div className="container" title="test-coupon-container">
                {/* <h2><b>20% OFF YOUR PURCHASE</b></h2>
                <p>Lorem ipsum..</p> */}
                <h3 title="test-coupon-offer">{offer}</h3>
                <ul>
                    <li>{line1}</li>
                    <li>{line2}</li>
                    <li>{line3}</li>
                </ul>
            </div>
            <div className="container">
                <a href={storurl} target="_blank">
                    <button>Goto {from}</button>
                </a>
                <h3><span className="promo" title="test-coupon-code">{couponcode}</span></h3>
                <p className="expire">Expires: May 05, 2021</p>
            </div>
        </div>
    </Wrapper>
    )
}

const Wrapper = styled.div`
img{
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 60%;
}
button{
    width: fit-content;
    height: 20px;
}
// div{
//     // display: flex;
//     justify-content: space-evenly;
//     // flex-direction : column;
// }
.coupon {
    text-align:center;
    border: 5px solid #bbb; /* Dotted border */
    width: 80%;
    border-radius: 15px; /* Rounded border */
    margin: 0 auto; /* Center the coupon */
    max-width: 600px;
    margin-bottom:50px;
}
.img_container{
    text-align:center;
}
.container {
    padding: 2px 16px;
    // background-color: #f1f1f1;
    h3{
        margin: 15px 0 10px 0;
    }
    ul{
        list-style:none;
        margin: 5px 0 5px 0;
    }
}
  
.promo {
    background: #ccc;
    padding: 3px;
}
  
.expire {
    color: red;
}

button{
    color:black;
    border:none;
}
`

export default Coupons
