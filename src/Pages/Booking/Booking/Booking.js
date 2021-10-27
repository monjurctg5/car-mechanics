import React from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const {bookingId} = useParams()
    return (
        <div>
            <h1>{bookingId} No <span className="text-warning">Room</span>  is booking</h1>
            
        </div>
    );
};

export default Booking;