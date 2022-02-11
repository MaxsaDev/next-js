import { FC } from 'react';
import { IH } from './H.props'



const H:FC<IH> = ({tag, text}) => {
  const Tag:any = tag || 'h1';
  return <Tag>{text}</Tag>;
};

export default H;

