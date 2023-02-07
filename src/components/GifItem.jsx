export const GifItem = ({ title, url }) => {
  return (
    <div className="card">
      <img src={url.url} />
      <p>{title}</p>
    </div>
  );
};

