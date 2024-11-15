import Image from "next/image";
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://Harambessj:Harambe100@quotes.vuxgr.mongodb.net/?retryWrites=true&w=majority&appName=quotes";



const client = new MongoClient(uri, {
  serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
})


const db = client.db('got-quotes')

const quotesCollection = db.collection('quotes')

const quotty = quotesCollection.find().sort().toArray()

console.log(quotty)

export default function Home() {

  return (
  <>
  <ul>
    <li>
      {5}
    </li>
  </ul>
  <form action="/quotes" method='GET'>
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
