import { useState } from "react"
import { Link } from "react-router-dom"
import { SignupInput } from "@100xdevs/medium-common"
import { Button } from "./Button"
import { GoogleButton } from "./GoogleButton"

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const [postInputs, setPostInputs] = useState<SignupInput>({
    name: "",
    username: "",
    password: "",
  })

  return (
    <div className="h-screen flex justify-center flex-col">
      <div className="flex justify-center">
        <div>
          <div className="px-20">
            <div className="text-3xl font-extrabold">Create an account</div>
            <div className="text-slate-600 font-light mt-1">
              Already have an account?
              <Link className="underline pl-1" to={"/signin"}>
                Login
              </Link>
            </div>
          </div>

          <div>
            <LabelledInput
              label="Name"
              placeholder="Ayush Ray"
              onChange={(e) => {
                setPostInputs({
                  ...postInputs,
                  name: e.target.value,
                })
              }}
            />
            <LabelledInput
              label="Username"
              placeholder="ayushrau@gmail.com"
              onChange={(e) => {
                setPostInputs({
                  ...postInputs,
                  username: e.target.value,
                })
              }}
            />
            <LabelledInput
              label="Password"
              placeholder="*********"
              type={"password"}
              onChange={(e) => {
                setPostInputs({
                  ...postInputs,
                  password: e.target.value,
                })
              }}
            />
          </div>
          <Button />
          <GoogleButton />
        </div>
      </div>
    </div>
  )
}

interface LabelledInputTypes {
  label: string
  placeholder: string
  onChange: (e: any) => void
  type?: string
}

export const LabelledInput = ({
  label,
  placeholder,
  onChange,
}: LabelledInputTypes) => {
  return (
    <div>
      <div className="pt-5">
        <label className="block mb-2 text-m font-medium text-gray-900 dark:text-white">
          {label}
        </label>
        <input
          onChange={onChange}
          type="text"
          id="first_name"
          className="bg-gray-50 py-4 border border-gray-300 text-gray-900 text-m rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={placeholder}
          required
        />
      </div>
    </div>
  )
}
