export default function login() {

    return (
      <main className="flex h-screen w-screen justify-center items-center">
        <section className="w-[28em] h-[55%] bg-white rounded-lg shadow-2xl">
            <article className="w-full h-[30%] flex flex-col justify-center items-center">
                <h1 className="text-2xl text-center mb-[.5em]">Sign In</h1>
                <p className="text-gray-500 text-sm">Use your email and password to sign in</p>
            </article>
            <article className="bg-slate-50 w-full h-[70%]">
                <form className="w-full h-full flex flex-col justify-around items-center">
                    <input type="text" placeholder="Email" className="w-[80%] h-[2.5em] border-2 border-transparent rounded-md p-[10px] focus:outline-none focus:border-gray-300"/>
                    <input type="password" placeholder="Password" className="w-[80%] h-[2.5em] border-2 border-transparent rounded-md p-[10px] focus:outline-none focus:border-gray-300"/>
                    <button className="w-[80%] h-[2.5em] bg-blue-950 text-white rounded-md">Sign In</button>
                </form>
            </article>
        </section>
      </main>
    );
  }