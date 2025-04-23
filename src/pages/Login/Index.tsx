import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import imgLogo from "../../assets/nord.png";

const Login = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-[#0f0f1a]">
      <div className="flex h-[80%] w-[80%] items-center justify-around rounded-2xl border border-neutral-800 bg-gradient-to-br from-purple-500 to-indigo-900 shadow-[0_0_30px_#a855f755]">
        <div className="flex h-full w-1/2 items-start border-r border-purple-500/20 px-10 py-6">
          <div className="h-20 w-20">
            <img
              src={imgLogo}
              alt="Logo"
              className="h-20 object-contain drop-shadow-[0_0_8px_#a855f7] filter"
            />
          </div>
        </div>

        <div className="flex h-[80%] w-1/2 flex-col items-center justify-between p-4">
          <div className="w-full max-w-md p-4">
            <h3 className="mb-4 text-center text-2xl font-semibold text-purple-400">
              Log in
            </h3>

            <form className="space-y-4">
              <Input
                placeholder="username"
                className="border border-purple-500/30 bg-[#1e1e2e] px-4 py-6 text-white placeholder:text-zinc-400 focus:ring-2 focus:ring-purple-500 focus:outline-none"
              />
              <Input
                placeholder="password"
                className="border border-purple-500/30 bg-[#1e1e2e] px-4 py-6 text-white placeholder:text-zinc-400 focus:ring-2 focus:ring-purple-500 focus:outline-none"
              />

              <p className="flex justify-end text-sm text-zinc-400">
                <span>Forgot your</span>
                <a
                  href="#"
                  className="ml-1 text-purple-300 hover:text-purple-500"
                >
                  password?
                </a>
              </p>

              <div className="flex justify-center">
                <Button className="w-full cursor-pointer rounded-md bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-6 text-lg text-white shadow-md transition-transform duration-200 hover:scale-105">
                  Login
                </Button>
              </div>
            </form>
          </div>

          <p className="mt-4 text-sm text-zinc-400">
            Don't have any account?{" "}
            <a href="#" className="text-purple-400 hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
