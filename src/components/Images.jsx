import "./Images.css";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

function Image({ images, index }) {
  return (
    <>
      <TransformWrapper minScale={1} limitToBounds={true}>
        <TransformComponent>
          <img className="game-img" src={images[index].image} alt="" />
        </TransformComponent>
      </TransformWrapper>
    </>
  );
}

export default Image;
