const Button = ({element}) => {
  const Message = (event) =>{
  event.preventDefault();
    alert('Button' + element)
  } 
  return (
      <button className="text-xl py-2 px-3 border bg-gray-300 rounded-lg" onClick={Message}>
        Button{element}
      </button>
  );
};

export default Button;
