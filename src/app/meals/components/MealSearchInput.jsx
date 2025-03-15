"use client"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function MealSearchInput() {

    const [search, setSearch] = useState("")
    const router = useRouter();
    const pathname = usePathname()


    useEffect(() => {
        const searchQuery  = {search}
        const urlQueryParam = new URLSearchParams(searchQuery)
        const url = `${pathname}?${urlQueryParam}`;
        router.push(url)

    }, [search])

    return (
        <div>
            <input
                placeholder="Search meals..."
                className="text-black bg-white p-2 border rounded-md outline-none focus:ring-2 focus:ring-green-600"
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
        </div>
    )

}
