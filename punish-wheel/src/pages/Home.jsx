import Wheel from "../components/wheel";
import SpinForm from "../components/spinForm";
export default function Home() {
  return (
    <>
      <div className="flex bg-cyan-50">
        <div classname="flex-none">
          <SpinForm />
        </div>
        <div className="flex-auto">
          <Wheel />
        </div>
      </div>
    </>
  );
}
