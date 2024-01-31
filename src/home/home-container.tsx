import * as React from "react";
import classNames from "classnames";

type HomeContainerProps = {
  children?: React.ReactNode
  sectionStyle?: string
  containerStyle?: string
}

export default function HomeContainer(props: HomeContainerProps) {
  const { children, containerStyle, sectionStyle } = props;
  const sectionCn = classNames("w-full flex flex-col items-center border", sectionStyle);
  const containerCn = classNames("container border", containerStyle);
  return (
    <section className={sectionCn}>
      <div className={containerCn}>
        {children}
      </div>
    </section>
  )
}

