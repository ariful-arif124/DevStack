
import { Suspense, useState } from 'react'
import Bannar from './Bannar'
import NavBar from './NavBar'
import type { TechType } from './Types/TechnologyType';
import { toast } from 'react-toastify/unstyled';
import Technology from './Components/Technologies/Technology';


const TechFetch = async (): Promise<TechType[]> => {
  const res = await fetch("/data.json");
   if (!res.ok) {
       toast.error("Failed to fetch technologies");
    }

  const data = res.json();
  return data;
};


function App() {

  
  const [TechPromise] = useState(() => TechFetch());

  return (
    <>
      <NavBar/>
      <Bannar/>
      <Suspense fallback={<h2>Loading....</h2>}>
          
          <Technology TechPromise={TechPromise}></Technology>

        </Suspense>

        {/* <Footer></Footer> */}
    
    </>
  )
}

export default App
