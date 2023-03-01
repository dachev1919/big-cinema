import React, { FC } from 'react';
import {Movie} from "@/@types/typings";
import Image from "next/image";
import styles from './Thumbnail.module.scss';
import {thumbUrl} from "@/constants/movie-url";

interface IThumbnailProps {
  // When using firebase
  // movie: Movie | DocumentData
  movie: Movie;
}


const Thumbnail: FC<IThumbnailProps> = ({movie}) => {
  return (
    <div className={styles.thumbnail}>
      <Image src={`${thumbUrl}${movie.backdrop_path || movie.poster_path}`} width={260} height={144} alt='film thumbnail'/>
    </div>
  );
};

export default Thumbnail;
