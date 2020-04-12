import React,{useState,useEffect} from "react";
import ImageCards from "./components/ImageCards";
import ImageSearch from "./components/ImageSearch";

function App() {
  const [image,setImage]=useState([])
  const [isLoading,setIsLoading] = useState(true)
  const [term,setTerm] = useState('yellow+flower')

  useEffect(()=>{
    fetch(`https://pixabay.com/api/?key=${process.env.
    REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
      .then(response=>response.json())
      .then(data=>{
        setImage(data.hits)
        setIsLoading(false)
      })
      .catch(err=>console.log(err));
  }, [term])
  return (
    <div className="container mx-auto">
      <ImageSearch searchText={(text)=>setTerm(text)}/>
      {!isLoading && image.length===0 && <h1 className="text-6xl text center mx-auto mt-32">not found...</h1>}
      {isLoading?<h1 className="text-6xl text center mx-auto mt-32">loading...</h1>:
      <div className="grid grid-cols-4 gap-4">
        {image.map(image=>(
          <ImageCards key={image.id} image={image}/>
        ))}
      </div>}
    </div>
  );
}

export default App;
