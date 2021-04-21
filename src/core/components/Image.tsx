import React from "react";
import ProgressiveImage from "react-progressive-graceful-image";

// Styles and Icons
import styled from "@emotion/styled";
const ContainerImage = styled.div`
  position: relative;
  img {
    width: 100%;
    user-select: none;
    transition: 500ms;
  }
`;

interface ImageProps {
  src: string;
  resolution?: string;
  className?: string;
}

export const Image: React.FC<ImageProps> = ({ resolution, src, className }) => {
  return (
    <ContainerImage>
      <ProgressiveImage
        src={`${src}`.replace(/resolution/g, resolution || "x250")}
        placeholder={`${src}`.replace(/resolution/g, "x100")}
      >
        {(src: string, loading: boolean) => {
          return (
            <div className="overflow-hidden">
              <img
                className={`w-full ${className}`}
                style={{
                  filter: loading ? "blur(20px)" : "blur(0)",
                }}
                src={src}
                alt="an alternative text"
              />
              <div className="absolute top-0 bottom-0 left-0 right-0"></div>
            </div>
          );
        }}
      </ProgressiveImage>
    </ContainerImage>
  );
};
