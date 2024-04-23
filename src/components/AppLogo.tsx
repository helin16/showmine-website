import Image from "next/image";

type iAppLogo = {
  width?: number;
  height?: number;
  style?: any;
  className?: string;
};
const AppLogo = ({ width, height, style, className, ...props }: iAppLogo) => {
  return (
    <Image
      className={className}
      alt={`${process.env.NEXT_PUBLIC_APP_NAME || ""} Logo`}
      width={width || 200}
      height={height || 70}
      style={style}
      priority
      {...props}
      src={"/images/logo.png"}
    />
  );
};

export default AppLogo;
