import { useEffect, useState } from 'react';
import { Image as AntImage } from 'antd';
import type { ImageProps as AntImageProps } from 'antd/es/image';
import imgDefault from '@/assets/images/common/img-defaull.jpg';
import './image.scss';

interface ImageProps extends Omit<AntImageProps, 'rootClassName'> {
  src: string;
  alt: string;
  width?: string | number;
  height?: string | number;
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  className?: string;
  fallback?: string;
  preview?: boolean | AntImageProps['preview'];
  placeholder?: React.ReactNode | boolean;
  style?: React.CSSProperties;
  onError?: () => void;
  rounded?: boolean; // Add rounded prop for circular images
}

const Image = ({
  src,
  alt,
  width,
  height,
  objectFit = 'cover',
  className = '',
  fallback,
  preview = false,
  placeholder = true,
  style,
  onError,
  rounded = false,
  ...rest
}: ImageProps) => {
  const [imgSrc, setImgSrc] = useState<string>(src || imgDefault);
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    if (src && src.trim() !== '' && src !== imgSrc && !hasError) {
      setImgSrc(src);
      setHasError(false);
    } else if (!src || src.trim() === '') {
      setImgSrc(imgDefault);
      setHasError(false);
    }
  }, [src, imgSrc, hasError]);

  const handleError = () => {
    setHasError(true);
    setImgSrc(fallback || imgDefault);
    onError?.();
  };

  const imageStyle: React.CSSProperties = {
    objectFit,
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height,
    borderRadius: rounded ? '50%' : undefined,
    ...style,
  };

  const imageClasses = [
    'common-image',
    objectFit ? `common-image-${objectFit}` : '',
    rounded ? 'rounded-image' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const previewConfig =
    typeof preview === 'boolean'
      ? preview
        ? {
            maskClassName: rounded ? 'rounded-preview' : '',
            imageRender: (originalNode: React.ReactElement) => (
              <div>{originalNode}</div>
            ),
          }
        : false
      : {
          ...preview,
          maskClassName:
            `${preview?.maskClassName || ''} ${rounded ? 'rounded-preview' : ''}`.trim(),
          imageRender:
            preview?.imageRender ||
            ((originalNode: React.ReactElement) => <div>{originalNode}</div>),
        };

  return (
    <AntImage
      src={imgSrc}
      alt={alt}
      fallback={fallback || imgDefault}
      preview={src ? previewConfig : false}
      placeholder={placeholder}
      style={imageStyle}
      className={imageClasses}
      onError={handleError}
      {...rest}
    />
  );
};

export { Image };
