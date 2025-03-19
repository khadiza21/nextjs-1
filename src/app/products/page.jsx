import dbConnect from '@/lib/dbConnect';
import { redirect } from 'next/navigation';
import React from 'react'
import { getProducts } from '../actions/products/getProducts';
// in next js every time data load from server, not cached in storage. for forcefully caching in storage fully  need to add {cache :"force-cache"}


// export const dynamic = "force-dynamic";//  ? use this instead {cache :"force-cache"}


export default async function ProductsPage() {
  //  const {NEXT_PUBLIC_SERVER_ADDRESS} = process.env;
  //  const res = await fetch(`${NEXT_PUBLIC_SERVER_ADDRESS}/api/items`
    //     ,{
    //     cache :"force-cache"
    // }
// )
   // const data = await res.json();

    // if(data.length> 3){
    //     redirect("/")
    // }

    const data = await getProducts();

  return (
    <div>
        <ul className="text-center mt-8">
            {
                data?.map ((singleProduct)=>{
                    return <li key={singleProduct._id}>{singleProduct?.productName}</li>
                })
            }
        </ul>
        {/* <p>{JSON.stringify(data)}</p> */}
    </div>
  )
}
