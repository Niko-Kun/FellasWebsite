function Button({ label, onClick }) {
    return (
      <button className="ios-button" onClick={onClick}>
        {label}
      </button>
    );
  }
  
  export default Button;