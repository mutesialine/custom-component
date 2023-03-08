const Button = ({element}) => {
  const message = (event) =>{
  event.preventDefault();
    alert('Button' + element)
  } 
  return (
      <button className="text-xl py-2 px-3 border bg-gray-300 rounded-lg" onClick={message}>
        Button{element}
      </button>
  );
};

export default Button;
