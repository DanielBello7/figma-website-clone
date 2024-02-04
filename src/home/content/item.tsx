import classNames from "classnames";

type ItemProps = {
  price: number
  img: string
  alt: string
  newItem: boolean
  title: string
  id: number
}

export default function Item(props: ItemProps) {
  const { id, alt, img, newItem, price, title, } = props;

  const cn = classNames("font-white-medium w-full border relative flex mb-10 flex-col cursor-pointer", {
    "col-span-2": id === 7 || id === 9 || id === 18 || id === 19
  });

  const lg = classNames("w-full bg-red", {
    "md:absolute md:bottom-0": id === 9 || id === 19
  });

  return (
    <div className={cn} key={id}>
      <div className={lg}>
        <div className="relative">
          <img
            className={"w-full h-auto absolute top-0 left-0 transition-opacity scale-[1.01] duration-[0.3s] hover:opacity-[0]"}
            src={img}
          />
          <img
            className={"w-full h-auto transition-opacity duration-[0.3s]"}
            src={alt}
          />
        </div>
        <div className="w-full flex justify-between text-xl mt-3">
          <div>
            {newItem && <p className="font-white-light">New!</p>}
            <p className="font-bold">{title}</p>
          </div>
          <p className="font-white-light">${price}</p>
        </div>
      </div>
    </div>
  )
}

