const buttonStyle = {
  padding: "10px",
  margin: "10px",
  borderRadius: "5px",
  minWidth: "200px"
};

const ButtonComponent = ({ text, onclick }) => {
  return (
    <button style={buttonStyle} onClick={onclick}>
      {text}
    </button>
  );
};

export default ButtonComponent;
