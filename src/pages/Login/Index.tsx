import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import imgLogo from "../../assets/nord.png";
import Wave from "./components/Wave";
import { ThemeToggle } from "@/components/mode-toggle";

const Login = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-white dark:bg-[#0f0f1a]">
      <div className="flex h-[80%] w-[80%] items-center justify-around rounded-2xl border dark:border dark:border-neutral-800 dark:bg-gradient-to-br dark:from-purple-500 dark:to-indigo-900 dark:shadow-[0_0_30px_#a855f755]">
        <div className="flex h-full w-1/2 flex-col justify-between border-r dark:border-r-2 dark:border-purple-500/50 dark:shadow">
          <div className="mt-3 ml-6 h-20 w-20">
            <img
              src={imgLogo}
              alt="Logo"
              className="h-full object-contain filter dark:drop-shadow-[0_0_8px_#a855f7]"
            />
          </div>

          <div className="w-full">
            <Wave />
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
                type="text"
                className="border border-purple-500/30 px-4 py-6 text-white placeholder:text-zinc-400 focus:ring-2 focus:ring-purple-500 focus:outline-none dark:bg-[#1e1e2e]"
              />
              <Input
                placeholder="password"
                type="password"
                className="border border-purple-500/30 px-4 py-6 text-white placeholder:text-zinc-400 focus:ring-2 focus:ring-purple-500 focus:outline-none dark:bg-[#1e1e2e]"
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
                <Button
                  type="button"
                  className="w-full cursor-pointer rounded-md bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-6 text-lg text-white shadow-md transition-transform duration-200 hover:scale-105"
                >
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

        <div className="mb-auto ml-auto p-6">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default Login;
