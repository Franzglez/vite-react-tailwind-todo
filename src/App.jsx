import CrossIcon from "./components/CrossIcon";
import MoonIcon from "./components/MoonIcon";


const App = () => {
  return (
    <div
      className="min-h-screen bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] 
    bg-contain bg-no-repeat ">
      <header className="container mx-aut px-4 pt-8">
        <div className="flex justify-between">
          <h1 className="uppercase text-white text-3xl font-semibold tracking-[0.3em]">
            TODO
          </h1>
          <button>
            <MoonIcon className="fill-red-400" />
          </button>
        </div>
        <form className="mt-8 flex items-center gap-4 rounded-md bg-white overflow-hidden py-4 px-4">
          <span className="inline-block h-5 w-5 rounded-full border-2"> </span>
          <input 
          className="w-full outline-none text-gray-400"
          type="text" 
          placeholder="Create a new todo.." />
        </form>
      </header>

      {/* [&>article]p-4 selecciona todos los articles y le da un pading x, y de 4.*/}
      <main className="container mx-aut mt-8 [&>article]p-4">
        <div className="rounded-md bg-white px-4">

        <article className="flex gap-4 border-b border-b-gray-400">
          <button className="inline-block h-5 w-5 rounded-full border-2 flex-none"></button>
          <p className=" text-gray-600">
            Complete online JavasCript curse in bluuweb
            </p>
          <button className="flex-none">
            <CrossIcon />
            </button>
        </article>
        <article className="flex gap-4 border-b border-b-gray-400">
          <button className="inline-block h-5 w-5 rounded-full border-2 flex-none"></button>
          <p className=" text-gray-600">
            Complete online JavasCript curse in bluuweb
            </p>
          <button className="flex-none">
            <CrossIcon />
            </button>
        </article>
        <article className="flex gap-4 border-b border-b-gray-400">
          <button className="inline-block h-5 w-5 rounded-full border-2 flex-none"></button>
          <p className=" text-gray-600">
            Complete online JavasCript curse in bluuweb
            </p>
          <button className="flex-none">
            <CrossIcon />
            </button>
        </article>
       

        </div>

        <section className="flex justify-between py-4 px-4">
          <span className="text-gray-400">5 items left</span>
          <button className="text-gray-400">Clear Completed</button>
        </section>
      </main>

      <section className="container mx-auto mt-8 px-4">
        <div className="flex justify-center gap-4 rounded-md bg-white p-4">
        <button className="text-blue-600">All</button>
        <button className="hover:text-blue-600">Active</button>
        <button className="hover:text-blue-600">Completed</button>
        </div>
      </section>

      <p className="text-center mt-8">Drag and drop to reorder list</p>
    </div>
  );
};

export default App;
