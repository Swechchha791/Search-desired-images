function ImageShow({ image }) {
  return (
    <div style={{ padding: "2rem 0" }}>
      <img src={image.urls.small} alt={image.alt_description} />
    </div>
  );
}
export default ImageShow;
