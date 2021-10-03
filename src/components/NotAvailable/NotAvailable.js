import './NotAvailable.css'
import React from 'react';

const NotAvailable = () => {
    return (
        <div>
            <div>
                <h1 className="text-center py-2">Opps! Page Not Found</h1>
            </div>
            <div>
                <img className="img-size" src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEFmupcWqhgg-1tB1ftDWQV3R2R9fAWmi8YA&usqp=CAU'} alt="" />
            </div>

        </div>
    );
};

export default NotAvailable;