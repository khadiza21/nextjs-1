import Link from "next/link";
import style from "./post.module.css"
// https://ui.shadcn.com/docs/installation (shadcn/ui is a set of beautifully-designed, accessible components and a code distribution platform. Works with your favorite frameworks and AI models. Open Source. Open Code. This is not a component library. It is how you build your component library. )
export const getPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await res.json();
    return data;
}

export default async function Posts() {

    const posts = await getPosts();
    return (
        <div className="gap-8 grid grid-cols-3 m-5 ">
            {
                posts.map((singlePost) => {
                    return (
                        <div className="testing-purpose-css-class p-3 border-2 border-slate-300" key={singlePost.id}>
                            <p className={`text-2xl font-bold ${style["post-title"]}`}>{singlePost.title}</p>
                            <p className="semibold">{singlePost.body}</p>
                         <button className="bg-green-300 p-2 rounded my-2">
                         <Link href={`/posts/${singlePost.id}`}> Details</Link>
                         </button>
                        </div>
                    )
                })
            }
        </div>
    )
}
