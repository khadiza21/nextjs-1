import React from 'react'
//  step by step routing : dynamic routes (https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes)

// example route: http://localhost:3000/contact/jeon/sjeo
export default async function ContactSlugPage({ params }) {
    const p = await params;
    console.log(p);
    return (
        <div>ContactSlugPage</div>
    )
}
