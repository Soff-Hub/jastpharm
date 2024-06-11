"use client";
import React, { useCallback, useEffect } from "react";
import { StaticImageData } from "next/image";
import ApplicationForm from "./ApplicationForm";
import useResponsive from "@/hooks/use-responsive";
import { ProductType } from "../home/HomeProductArea";

// interface for selectImg

interface imgType {
    id: number;
    img: StaticImageData;

}

interface propsType {
    id: number;
    closeModal: () => void;
    data: ProductType
}

const ApplicationModal = ({ id, closeModal, data }: propsType) => {

    const { isMobile } = useResponsive()

    const handleEscKey = useCallback((event: any) => {
        if (event.key === 'Escape') {
            closeModal()
        }
    }, []);

    useEffect(() => {
        document.addEventListener('keydown', handleEscKey);

        return () => {
            document.removeEventListener('keydown', handleEscKey);
        };
    }, [handleEscKey]);

    const click = (e: any) => {
        if (e.target?.className === e.currentTarget?.className) {
            closeModal()
        }
    }



    return (
        <>
            <div onClick={click} className={`product-details-area pro-top-thamb pro-bottom-thamb application-div  ${isMobile ? 'pt-100' : 'pt-100'}`}>
                <div className={`product-details-content-2 pt-3`}>
                    <span className="d-block text-center">
                        <i className="fa-solid fa-rectangle-xmark" style={{ cursor: 'pointer' }} onClick={closeModal} ></i>
                        <span style={{ cursor: 'pointer' }} onClick={closeModal}> / ESC</span>
                    </span>
                    <ApplicationForm closeModal={closeModal} data={data} />
                </div>
            </div>
        </>
    );
};

export default ApplicationModal;
