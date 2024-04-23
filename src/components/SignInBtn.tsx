import Link from "next/link";
import { SIGN_IN_URL } from "./Urls";

type iSignInBtn = {
  className?: string;
};
const SignInBtn = ({ className }: iSignInBtn) => {
  return (
    <Link
      href={SIGN_IN_URL}
      className={`my-4 py-4 px-8 uppercase text-sm inline-block bg-blue-500 rounded-full text-white hover:brightness-95 ${
        className || ""
      }`}
    >
      Login
    </Link>
  );
};

export default SignInBtn;
