import Modal from "./components/modal/Modal"
import useFetchData from "./hooks/useFetchData"


function App() {
 const  {data, isFetching, error} = useFetchData('https://gutendex.com/bookss')

 if (isFetching) {
  return <div className="mx-[30%] my-[15%] text-3xl">Loading...</div>;
}

if (error) {
  return <div className="backdrop-blur-3xl"><h1>Hello</h1><Modal open={error} /></div>;
}
console.log(data.count);

  return (
    <>
     
     <div className="mx-[20%] my-[5%] text-3xl">
      <h1 style={{color:'black',fontSize:'50px'}}>Data</h1>
      {data.results.map((book) => (
            <div key={book.id} className="py-[20px]">
              <h2>{book.title}</h2>
              <p>Authors: {book.authors.map(author => author.name).join(', ')}</p>
              <p>Download Count: {book.download_count}</p>
              
            </div>
          ))}
      {console.log(data.results)}
    </div>
   
       
    </>
  )
}

export default App
