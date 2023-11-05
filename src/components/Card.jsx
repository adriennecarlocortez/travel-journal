import React from "react";

function Card(props) {
    return (
        <section className="card">
            <img src={`/images/${props.img}`} className="card--img" />
            <div className="card--info" >
                <div className="card--loc">
                    <img src="/location-dot.svg" className="card--pin"/>
                    <span className="card--location">{props.location}</span>
                    <a href={props.maps} className="card--maps">View on Google Maps</a>
                </div>
                <p className="card--title">{props.title}</p>
                <p className="card--date">{props.date}</p>
                <p className="card--desc">{props.desc}</p>
            </div>
            
        </section>
    )
}
export default Card