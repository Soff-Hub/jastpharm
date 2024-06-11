'use client'

import BlogCard, { BlogType } from '@/sheardComponent/BlogCard';
import Breadcrumb from '@/sheardComponent/Breadcrumb';
import BlogPagination from '@/utils/BlogPagination';
import Preloader from '@/utils/Preloader';
import api from '@/utils/api';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const BlogMain = () => {
    const { t } = useTranslation()

    const [data, setData] = useState<BlogType[]>([])

    const getData = async () => {
        const resp = await api.get(`common/blogs/`)

        setData(resp.data);
    }

    useEffect(() => {
        getData()
    }, [])

    return data.length ? (
        <>
            <Breadcrumb pageTitle={t('Blog')} />
            <div className="blog-area pt-20">
                <div className="container">
                    <div className="row align-items-stretch">
                        <BlogCard data={data} />
                    </div>
                </div>
            </div>
            <BlogPagination />
        </>
    ) : data?.length === 0 ? <div className='mx-auto py-4 d-flex flex-column gap-4 px-3' style={{ maxWidth: '1000px', minHeight: '400px', textAlign: 'center' }}>
        <h1>{t("Ma'lumot topilmadi")}</h1>
    </div> : <Preloader />
};

export default BlogMain;