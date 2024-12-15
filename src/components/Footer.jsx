export default function Footer(props) {
  const { handleToggle, showslide, data } = props;
  return (
    <div className="foot">
      <div>
        <h1>APOD PROJECT</h1>
        <h2>{data?.title}</h2>
      </div>

      <button onClick={handleToggle}>
        <i className="fa-solid fa-circle-info"></i>
      </button>
    </div>
  );
}
