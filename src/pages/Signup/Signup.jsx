import SignupLeftSide from "../../components/SignupLeftSide/SignupLeftSide";
import SignupRightSide from "../../components/SignupRightSide/SignupRightSide";

export default function Signup() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <main className="flex-1 grid lg:grid-cols-2">
          <SignupLeftSide />
          <SignupRightSide />
        </main>
      </div>
    </>
  );
}
