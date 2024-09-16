import { useNavigate } from "react-router-dom";

const CalltoAction = () => {
  const navigate = useNavigate()
  const handleRegister = () =>{
    navigate("/register")
  }
  return (
    <div 
      className="bg-primary text-neutral-content py-16 text-center"
    >
      <h2 className="text-4xl font-bold mb-6">Ready to Find Your Next Home?</h2>
      
      <div className="flex justify-center gap-4">
        <button className="btn btn-secondary text-lg px-6 py-3">
          Search Properties
        </button>
        <button 
        onClick={handleRegister}
        className="btn btn-accent text-lg px-6 py-3">
          Sign Up Now
        </button>
      </div>
    </div>
  );
}

export default CalltoAction;
