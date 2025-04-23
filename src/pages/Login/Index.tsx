import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import imgLogo from "../../assets/nord.png";

const Login = () => {
  return (
    <div className="relative flex h-screen items-center justify-center border">
      <div className="flex h-[80%] w-[80%] items-center justify-around rounded-lg border border-neutral-200 shadow">
        <div className="h-full w-1/2 border-r border-neutral-200 px-10 py-6">
          <div className="h-20 w-20">
            <img
              src={imgLogo}
              alt="..."
              className="h-20 cursor-pointer object-contain"
            />
          </div>
        </div>

        <div className="flex h-[80%] w-1/2 flex-col items-center justify-between p-2">
          <div className="p-3">
            <h3 className="mb-4 text-center text-2xl font-semibold text-purple-500">
              Log in
            </h3>

            <form className="w-md space-y-4">
              <Input placeholder="username" className="py-6 shadow" />
              <Input placeholder="password" className="py-6 shadow" />

              <p className="flex justify-end text-sm text-neutral-400">
                <span>forgot your</span>
                {"    "}
                <a href="#" className="ml-1 text-neutral-700">
                  password?
                </a>
              </p>

              <div className="flex justify-center">
                <Button className="w-50 cursor-pointer bg-purple-500 p-5 text-lg text-white hover:bg-purple-400">
                  Login
                </Button>
              </div>
            </form>
          </div>

          <p className="mt-4 text-base text-neutral-400">
            Don't have any account ?{" "}
            <a href="#" className="text-purple-500">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
