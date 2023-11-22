import Image from 'next/image'
import RecipeIngIcon from './ReciptIngIcon'
export default function RecipeCard(){
    return(
        <div className="relative flex justify-between align-middle m-5 text-white rounded-2xl bg-red-500 max-w-md ">
            <div className="m-5">
                <div className="rounded-full overflow-hidden h-24 w-24 bg-white mx-1">
                    <Image src="" alt="Some image" />
                </div>
                <h4 className="m-2">Rating: 4.8</h4>
            </div>
            <div className='m-5'>
                <h1 className='text-3xl font-bold'>Dish Name</h1>
                <p>Dish Description</p>
                
            </div>
            <div className='absolute flex flex-row-reverse bottom-5 right-5'>
                <RecipeIngIcon icon = "./"/>
                <RecipeIngIcon/>
                <RecipeIngIcon/>
                <RecipeIngIcon/>
                <RecipeIngIcon/>
            </div>
        </div>
    )
}