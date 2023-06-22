import { Fragment } from "react";
import {
  CardWrapper,
  CardImage,
  CardTextWrapper,
} from "./CardStyles";
import Image from "next/image";
type CardType = {
  title: string;
  date: number;
  imgUrl: string;
  price: number;
  // color: string;
};
export const Card = ({ title, date, imgUrl, price }: CardType) => {
  return (
    <Fragment>
      <CardWrapper>
        <CardImage>
          <Image src={imgUrl} alt={imgUrl} width={225} height={200}  />
        </CardImage>
        <CardTextWrapper>
          <div>{title}</div>
          <div>${price}</div>
        </CardTextWrapper>
      </CardWrapper>
    </Fragment>
  );
};
