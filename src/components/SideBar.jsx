export default function SideBar(props) {
  const { handleToggle, data } = props;
  return (
    <div className="sidebar">
      <div className="bgoverlay"></div>
      <div className="sidebarContent">
        <h2>{data?.title}</h2>

        <div className="descriptionContainer">
          <p className="date">{data?.date}</p>
          <p className="explain">{data?.explanation}</p>
        </div>

        <button onClick={handleToggle}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}
