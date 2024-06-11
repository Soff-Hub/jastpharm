import React, { useEffect, useState } from 'react';
import ServiceItem from './ServiceItem';
import api from '@/utils/api';
import Preloader from '@/utils/Preloader';
import { useTranslation } from 'react-i18next';

export interface ServiceItemType {
    id: number
    title: string
    order: number
}

const ServiceList = () => {

    const [data, setData] = useState<{ id: number, title: string, order: number }[] | any>(null)
    const { t } = useTranslation()

    const getData = async () => {
        const resp = await api.get(`common/services/`)

        setData(resp.data)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        data && data?.length > 0 ? <div className='mx-auto py-4 d-flex flex-column gap-4 px-3' style={{ maxWidth: '1000px' }}>
            {
                data.map((el: any, i: number) => <ServiceItem data={el} key={i} />)
            }
        </div> : data?.length === 0 ? <div className='mx-auto py-4 d-flex flex-column gap-4 px-3' style={{ maxWidth: '1000px', minHeight: '400px', textAlign: 'center' }}>
            <h1>{t("Ma'lumot topilmadi")}</h1>
        </div> : <Preloader />
    );
}

export default ServiceList;
