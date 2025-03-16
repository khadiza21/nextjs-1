

// https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#when-to-use-server-and-client-components

import Link from "next/link";
import MealSearchInput from "./components/MealSearchInput";
import Image from "next/image";
import { Roboto} from "next/font/google";

export const metadata = {
    title: "All Meals",
    description: "Meals loaded from MealDB API",
};

const roboto = Roboto ({
  weight:["400","700"],
  subsets:["latin"]
})
export default async function MealPage({ searchParams }) {

    const query = await searchParams;

    const fetchMeals = async () => {
        try {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query.search}`)
            const data = await res.json();
            //  setMeals(data?.meals || ['p', '9'])
            return data.meals;
        } catch (error) {
            console.log(error);
            return [];
        }
    }


    const meals = await fetchMeals()

    return (
        <div>
            <div className="flex justify-center  my-5">
                <MealSearchInput />
            </div>
            <div className="grid grid-cols-2 gap-4 container mx-auto">
                {
                    meals?.map((singleMeal) => {
                        return (
                            <div className={`${roboto.className} p-3 rounded shadow m-3 border-5 flex items-center justify-center gap-4 flex-col`} key={singleMeal?.idMeal}>
                                <Image src={singleMeal?.strMealThumb} alt={singleMeal?.strMeal} width={641} height={641} />
                                <p className="text-3xl font-bold text-red-600">{singleMeal?.strMeal}</p>
                                <p className="text-2xl font-bold text-green-600">{singleMeal?.strCategory}</p>
                                <p className="text-xl font-bold text-slate-600">{singleMeal?.strInstructions}</p>
                                <Link className="py-3 px-2 pointer rounded border-1 border-red-700" href={`/meals/${singleMeal?.idMeal}`} >Details</Link>

                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
