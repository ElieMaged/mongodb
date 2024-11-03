import Image from "next/image";

export default function Home() {
  return (
  <>
  <form action="/quotes">
  <div className="flex flex-row space-x-6 justify-center items-center mt-40	text-white">
      <label htmlFor="char">Character</label>
<input className='text-black' type="text" name='char'/>
      <label htmlFor="char">Quote</label>
<input className='text-black' type="text" name='quote'/>
    </div>
    <span className='flex flex-row justify-center  mt-10'>
    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Submit</button>
    </span>
  </form>

    </>
  );
}
