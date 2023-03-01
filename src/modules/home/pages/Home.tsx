import React, { FC } from 'react';
import Layout from "@/common/components/layout/Layout";
import Banner from "@/modules/home/banner/Banner";
import {Movie} from "@/@types/typings";

interface IHomeProps {
  netflixOriginals: Movie[]
}

const Home: FC<IHomeProps> = ({netflixOriginals}) => {

  return (
    <Layout title='Home' description='Home page description'>
      <Banner netflixOriginals={netflixOriginals} />
    </Layout>
  );
};

export default Home;
