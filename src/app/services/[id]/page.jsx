
import NotFoundPage404 from '@/app/not.found';
import React from 'react'

export default function ({ params }) {

    const id = params?.id;

    const data = [
        {
            "_id": "65eab4f5f1a2c3d4e5f67890",
            "__dirname": "/services/web-development",
            "service_name": "Web Development",
            "service_description": "Professional web development services using modern technologies like React, Node.js, and MongoDB.",
            "service_image": "/1.jpeg"
        },
        {
            "_id": "65eab4f6f1a2c3d4e5f67891",
            "__dirname": "/services/ui-ux-design",
            "service_name": "UI/UX Design",
            "service_description": "Creating user-friendly interfaces with a focus on aesthetics and usability.",
            "service_image": "/2.jpg"
        },
        {
            "_id": "65eab4f7f1a2c3d4e5f67892",
            "__dirname": "/services/seo-optimization",
            "service_name": "SEO Optimization",
            "service_description": "Enhancing website visibility on search engines through optimization techniques.",
            "service_image": "/2.webp"
        },
        {
            "_id": "65eab4f8f1a2c3d4e5f67893",
            "__dirname": "/services/mobile-app-development",
            "service_name": "Mobile App Development",
            "service_description": "Building high-performance mobile applications for iOS and Android platforms.",
            "service_image": "/4.jpg"
        },
        {
            "_id": "65eab4f9f1a2c3d4e5f67894",
            "__dirname": "/services/cloud-hosting",
            "service_name": "Cloud Hosting",
            "service_description": "Providing secure and scalable cloud hosting solutions.",
            "service_image": "/5.jpg"
        }
    ]

    const singleData = data.find(d => d._id == id)
    if (singleData){
      return (
        <div>
            <h1>Service Details page</h1>
            <p>ID: {id}</p>

            <p> {singleData.service_name}</p>
            <img className='w-75 my-5 rounded shadow' src={singleData.service_image} alt={singleData.service_name} />
            <p>{singleData.service_description}</p>


        </div>
    )    
    }else{
        return <>
        <NotFoundPage404></NotFoundPage404>
        </>
    }
  
}
