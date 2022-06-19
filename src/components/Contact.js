// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';
import "./Contact.css";

const Contact = ({ data }) => {
    return (
        <div className="Contact">
            <div className="Img">
                <img src={data.photo} alt={data.name} />
            </div>
            <div className="Detail">
                <h2>{data.name}</h2>
                <p>{data.phone}</p>
                <p>{data.email}</p>
            </div>
        </div>
    )
}

export default Contact;