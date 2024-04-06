import Wheel from "../components/wheel";
import SpinForm from "../components/spinForm";
export default function Home() {
  return (
    <>
      <div className="flex bg-cyan-50">
        <div className="flex-none">
          <SpinForm />
        </div>
        <div className="flex-auto">
          <Wheel />
        </div>
      </div>
    </>
  );
}
