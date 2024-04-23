import Link from "next/link";
import { SIGN_UP_URL } from "./Urls";

type iSignUpBtn = {
  className?: string;
};
const SignUpBtn = ({ className }: iSignUpBtn) => {
  return (
    <Link
      href={SIGN_UP_URL}
      className={`my-4 py-4 px-8 uppercase text-sm inline-block bg-yellow-400 rounded-full text-blue-950 hover:brightness-95 ${
        className || ""
      }`}
    >
      Start Free
    </Link>
  );
};

export default SignUpBtn;
