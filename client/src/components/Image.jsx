import { Image } from "@imagekit/react";

export const ImageKit = ({ src, className, w, h, alt}) => {
  return (
    <Image
      urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
      src={src}
      className={className}
      style={{ borderRadius: 5 }}
      lqip={{ active: true, quality: 20 }}
      loading="lazy"
      alt={alt}
      width={w}
      height={h}
      transformation={[
        {
          width: w,
          height: h,
        }
      ]}
    />
  );
};
