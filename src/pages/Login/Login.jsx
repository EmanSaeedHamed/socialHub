import LoginRightSide from "../../components/LoginRightSide/LoginRightSide";
import SignupLeftSide from "../../components/SignupLeftSide/SignupLeftSide";
export default function Login(){
    return(
       <>
             <div className="min-h-screen flex flex-col">
               <main className="flex-1 grid lg:grid-cols-2">
                 <SignupLeftSide />
                 <LoginRightSide />
               </main>
             </div>
           </>
    )
}