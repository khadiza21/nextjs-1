const fetchSingleMeal = async (id) => {
    try {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)

        const data = await res.json();
        return data.meals;
    } catch (error) {
        console.log(error);
        return [];
    }
}

export async function generateMetadata({ params }) {
    const { id } = await params
    const [singleMeal] = await fetchSingleMeal(id)

    return {
        title: singleMeal.strMeal,
        description: singleMeal.strInstructions
    }
}


export default async function SingleMealPage({ params }) {

    const p = await params;
    const [singleMeal] = await fetchSingleMeal(p?.id)

    return (
        <div className="container mx-auto">
         

           <div className="p-5 rounded shadow m-3 border-5 flex items-center justify-center gap-4 flex-col" key={singleMeal?.idMeal}>
 
                <p className="text-3xl font-bold text-red-600">{singleMeal?.strMeal}</p>
                <p className="text-2xl font-bold text-green-600">{singleMeal?.strCategory}</p>
                <p className="text-xl font-bold text-slate-600">{singleMeal?.strInstructions}</p>

            </div> 

        </div>
    )
}
