export const Button = ({ type }: { type: "signup" | "signin" }) => {
  return (
    <button
      type="button"
      className="w-full text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-40 py-3 text-center me-2 mb-2 mt-10"
    >
      {type === "signin" ? "SIGN IN" : "SIGN UP"}
    </button>
  )
}
