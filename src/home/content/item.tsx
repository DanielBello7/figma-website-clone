import classNames from "classnames";
import * as React from "react";

type ItemProps = {
  price: number
  img: string
  alt: string
  newItem: boolean
  title: string
  id: number
}

export default function Item(props: ItemProps) {
  const [show, setShow] = React.useState(false);
  const { id, alt, img, newItem, price, title, } = props;

  const cn = classNames("w-full border relative flex mb-10 flex-col cursor-pointer", {
    "col-span-2": id === 7 || id === 9 || id === 18 || id === 19
  });

  const lg = classNames("w-full bg-red", {
    "absolute bottom-0": id === 9 || id === 19
  });

  return (
    <div className={cn} key={id}>
      <div className={lg}>
        <img onMouseLeave={() => setShow(false)} onMouseEnter={() => setShow(true)}
          className={"w-full"}
          src={show ? alt : img}
        />
        <div className="w-full flex justify-between text-xl mt-3">
          <div>
            {newItem && <p>New!</p>}
            <p className="font-bold">{title}</p>
          </div>
          <p>${price}</p>
        </div>
      </div>
    </div>
  )
}

