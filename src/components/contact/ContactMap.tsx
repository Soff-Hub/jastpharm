import React from 'react';

const ContactMap = () => {
    return (
        <>
            <div className="map-area mb-60">
                <div className="container">
                    <div className="map">
                    <iframe src="https://yandex.ru/map-widget/v1/-/CDrSmQ2T"></iframe>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactMap;