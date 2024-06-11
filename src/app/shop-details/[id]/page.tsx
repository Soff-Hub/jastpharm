"use client"

import ShopDetailsMain from '@/components/shop-details/ShopDetailsMain';
import Wrapper from '@/layout/DefaultWrapper';
import Preloader from '@/utils/Preloader';
import api from '@/utils/api';
import React, { useEffect, useState } from 'react';

const ShopDetailsPage = ({ params }: { params: { id: string } }) => {
    const id = params.id

    const [data, setData] = useState<any>({})

    const getData = async () => {
        const resp = await api.get(`common/products/${id}/`)

        setData({ ...resp.data, product_gallery: [{ image: resp.data?.poster }, ...resp.data?.product_gallery] });
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            {data?.id ? <Wrapper>
                <main>
                    <ShopDetailsMain data={data} />
                </main>
            </Wrapper> : <Preloader />}
        </>
    );
};

export default ShopDetailsPage;