export default function Home() {
  return (
    <section className="container mx-auto p-8 flex justify-center items-center flex-col gap-20">
      <div className="flex justify-center items-center gap-10 pt-10">
        <div>
          <h1 className="text-8xl font-bold">
            Hello... <span className="font-bold">👋</span>
          </h1>
          <p className=" text-black/70 my-8 text-5xl font-bold">
            Welcome to my portfolio
          </p>
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/21050507/pexels-photo-21050507/free-photo-of-a-woman-with-an-umbrella-and-a-black-bag.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            className="h-[300px] w-[500px] object-cover shadow-lg rounded-md"
          />
        </div>
      </div>
    </section>
  );
}
