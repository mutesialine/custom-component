import Button from "./components/ui/Button";

const App = () => {
  const buttonId = [1,2,3];
  return (
    <div className="w-full h-screen flex justify-center items-center bg-blue-100">
      <div className="space-x-4">
        {buttonId.map((value, key) => (
          <Button element={value} key={key} />
        ))}
      </div>
    </div>
  );
}
export default App
