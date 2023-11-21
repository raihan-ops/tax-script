import Image from 'next/image'
import styles from './page.module.css'
import ProductCard from "@/components/Common/productCard";
import {promises as fs} from 'fs';

// export const getData = async () => {
//   const res = await fetch("http://localhost:5000/watches", {
//     cache: "force-cache",
//   });
//   const data = await res.json();
//
//   return data;
// };

export async function getLocalData() {
    const file = await fs.readFile(process.cwd() + '/src/app/db.json', 'utf8');
    return JSON.parse(file)
}


export default async function Home() {
    const data = await getLocalData()
    return (
        <div>
            <h1> Test Script Page</h1>
            <p>Here Is The List of Card</p>

           <div className={styles.flexBox}>
               {
                   data?.watches?.map((product) =>
                       <ProductCard key={product.id} data={product}/>
                   )
               }
           </div>
        </div>
    )
}
