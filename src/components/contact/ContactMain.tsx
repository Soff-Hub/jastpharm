import Breadcrumb from '@/sheardComponent/Breadcrumb';
import React from 'react';
import ContactMap from './ContactMap';
import ContactContent from './ContactContent';

const ContactMain = () => {
    return (
        <>
            <Breadcrumb pageTitle='Kontakt' />
            <ContactMap />
            <ContactContent />
        </>
    );
};

export default ContactMain;