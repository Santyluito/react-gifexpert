import { usefetchGifts } from "../hooks/usefetchGifts";
import {GifItem} from "./GifItem";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = usefetchGifts(category);

  return (
    <>
      <h3>{category}</h3>
      {
        isLoading && (<h2>cargando...</h2>)
      }
      
      <div className="card-grid">
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};

