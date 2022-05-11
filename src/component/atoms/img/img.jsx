import { useEffect, useRef, useState } from "react";
import "./img.scss";

const Img = (props) => {
  const {
    type = "image/svg",
    src,
    alt,
    loading = "lazy",
    width,
    height = "auto",
    ratio = "1/1",
    decoding = "async",
    classes,
    fit = "cover",
    onClick,
  } = props;

  // constants
  const [isDataImg, setIsDataImg] = useState({
    visible: false,
    loaded: false,
  });
  const skeletonHeight = height === "auto" ? width : height;
  // ref element
  const imgRef = useRef();

  // actions
  const onIntersect = ([{ isIntersecting }], observerElement) => {
    if (isIntersecting) {
      setIsDataImg({
        ...isDataImg,
        visible: true,
      });
      imgRef && observerElement.unobserve(imgRef.current);
    }
  };
  const onLoad = () =>
    setIsDataImg({
      ...isDataImg,
      loaded: true,
    });

  useEffect(() => {
    const observer = new IntersectionObserver(onIntersect, {
      rootMargin: "0px",
      threshold: "0",
    });

    const current = imgRef.current;
    observer.observe(current);

    return () => {
      observer.unobserve(current);
    };
  }, []);

  if (!src) return null;

  return (
    <picture
      ref={imgRef}
      className={`a-img ${classes || ""}`}
      style={{ width: `${width}px` }}
      onClick={() => onClick && onClick()}
    >
      <source
        sizes={`(max-width: ${width}px) 100vw, ${width}px`}
        srcSet={src}
        type={type}
      />
      {!isDataImg.loaded && (
        <div
          className="a-img__skeleton"
          style={{
            width: width ? `${width}px` : "100%",
            height: `${skeletonHeight || 100}px`,
          }}
        />
      )}
      {isDataImg.visible && (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={loading}
          decoding={decoding}
          onLoad={onLoad}
          style={{
            width: `${width}px`,
            maxWidth: `${width}px`,
            aspectRatio: ratio,
            objectFit: fit,
          }}
        />
      )}
    </picture>
  );
};

export default Img;
