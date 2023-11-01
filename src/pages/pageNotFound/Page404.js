import React from 'react';
import Layout from "../../components/layout/Layout";
import nutIcon from '../../components/assets/nutIcon.svg'
import './style.scss'

const Page404 = () => {
    return (
        <Layout>
            <section className="page-not-found">
                <h2>Извините на этой странице временно ведутся технические работы</h2>
                <img className={'nutIcon'} src={nutIcon} alt="nutIcon"/>
            </section>
        </Layout>
    );
};

export default Page404;