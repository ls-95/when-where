import "./Images.css";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

function Image({ images, index }) {
  const currentImage = images[index];

  const altText = currentImage.className
    ? `${currentImage.name} in ${currentImage.city}, ${currentImage.country}, ${currentImage.year}`
    : `${currentImage.address} in ${currentImage.city}, ${currentImage.country}, ${currentImage.year}`;

  return (
    <>
      <TransformWrapper minScale={1} limitToBounds={true}>
        <TransformComponent>
          <img className="game-img" src={images[index].image} alt={altText} />
        </TransformComponent>
      </TransformWrapper>
    </>
  );
}

export default Image;
