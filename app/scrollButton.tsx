"use client";

export default function ScrollButton() {
  const handleScroll = () => {
    const id = document.getElementById("projects")!;
    id.scrollIntoView();
  };

  return (
    <button
      onClick={handleScroll}
      className="rounded-md border-2 border-stone-300 px-3 py-1 text-xl transition-all ease-in-out hover:border-transparent hover:bg-white hover:text-black"
    >
      My Work
    </button>
  );
}
