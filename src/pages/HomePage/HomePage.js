import React, {useEffect} from 'react';
import Layout from "../../components/layout/Layout";
import SwiperComponents from "../../components/swiper/SwiperComponents";
import './style.scss'

import SwiperMovie from "../../components/swwiperMovie/SwiperMovie";

const HomePage = () => {


    return (
        <Layout>
            <SwiperComponents/>
            <section className={'main'}>
                <div className="wrapper">
                    <SwiperMovie/>
                    <SwiperMovie/>
                    <SwiperMovie/>
                    <SwiperMovie/>
                    <SwiperMovie/>
                    <SwiperMovie/>
                </div>
            </section>
        </Layout>
    );
};

export default HomePage;