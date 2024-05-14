"use client"
import {  idType } from '@/interFace/interFace';
import Breadcrumb from '@/sheardComponent/Breadcrumb';
import React from 'react';
import ShopDetailsContent from './ShopDetailsContent';

const ShopDetailsMain = ({id}:idType) => {
    return (
        <>
            <Breadcrumb pageTitle='Mahsulot nomi'/>
            <ShopDetailsContent id={id}/>
        </>
    );
};

export default ShopDetailsMain;