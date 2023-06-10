import { Input, InputPassword, Button } from "@/components/ui";

function LoginPage() {
  return (
    <div className="w-full h-96 flex flex-col items-center justify-center">
      <div className="max-w-md">
        <div className="mb-8 text-center">
          <h1 className="text-3xl mb-1 font-bold">Welcome back</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit,
            saepe.
          </p>
        </div>
        <form className="flex flex-col gap-2">
          <Input
            type="email"
            id="email"
            placeholder="Enter your email"
            label="Email"
          />
          <InputPassword
            id="password"
            placeholder="Enter your password"
            label="Password"
          />
          <Button className="mt-8">Sign In</Button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
