export interface IGetCroppedImg {
  src: string;
  pixelCrop: IArea;
  rotation?: number;
}
export interface IArea {
  x: number;
  y: number;
  width: number;
  height: number;
}
export interface IFileAccepted {
  id: string;
  croppedArea: IArea;
  src: string;
  croppedImageSrc: string;
  file: File;
  rotation?: number;
  isCover?: boolean;
}
