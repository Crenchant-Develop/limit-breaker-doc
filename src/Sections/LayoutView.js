import "../App.css";

//사용법 <LayoutView title = "제목" content = "내용" />
function LayoutView(props) {
  return (
    <div className="layoutView">
      <div className="title"> {props.title} </div>
      <div className="content">{props.content}</div>
    </div>
  );
}

export default LayoutView;