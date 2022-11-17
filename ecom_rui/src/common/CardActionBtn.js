import { Button } from "react-bootstrap";

const CardActionBtn = ({ btnInfo, btnCallBack }) => {
  return (
    <Button
      variant={`${btnInfo.isRemoveActionBtn ? "danger" : "success"}`}
      className={`card-action-btn ${btnInfo.className} `}
      onClick={btnCallBack}
      disabled={btnInfo.isDisabled}
    >
      {btnInfo.title}{" "}
      {btnInfo.isRemoveActionBtn ? (
        <i className="fa fa-times fa-lg"></i>
      ) : btnInfo.isDisabled ? (
        <i className="fa fa-check-square fa-lg"></i>
      ) : (
        ""
      )}
    </Button>
  );
};
export default CardActionBtn;
