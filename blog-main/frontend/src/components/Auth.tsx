import { Link } from "react-router-dom"

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
  return (
    <div className="h-screen flex justify-center flex-col">
      <div className="flex justify-center">
        <div>
          <div className="text-3xl font-extrabold">Create an account</div>
          <div className="text-slate-600 font-light mt-1">
            Already have an account?
            <Link className="underline" to={"/signin"}>
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}