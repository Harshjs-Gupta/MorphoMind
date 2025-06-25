import Link from "next/link";

export default function Login() {
  return (
    <main className="min-h-screen py-10 flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-md w-full space-y-8 relative">
        <div className="text-center">
          <Link
            href="/"
            className="text-4xl font-bold gradient-text inline-block mb-2"
          >
            MorphoMind
          </Link>
          <h2 className="text-3xl font-bold text-white mt-8 mb-2">
            Welcome back
          </h2>
          <p className="text-gray-400 text-lg">
            Sign in to your account to continue
          </p>
        </div>

        <div className="glass-card p-8">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="input-field"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="input-field"
                placeholder="Enter your password"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-700 bg-gray-800 text-purple-500 focus:ring-purple-500"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-300"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="text-purple-500 hover:text-purple-400 transition-colors"
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button type="submit" className="btn-primary w-full text-lg py-3">
                Sign in
              </button>
            </div>
          </form>
        </div>

        <div className="text-center">
          <p className="text-gray-400">
            Don't have an account?{" "}
            <Link
              href="/signup"
              className="text-purple-500 hover:text-purple-400 transition-colors"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
