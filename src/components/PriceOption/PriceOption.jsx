import Feature from "../Feature/Feature";


const PriceOption = ({option}) => {
    const {name,price,features}= option;
    return (
        <div className="bg-orange-600 flex flex-col  text-white py-3">

                <div className="text-center"> 
                        <span className="text-5xl  font-bold">{price}</span>
                        <span>/month</span>
                        <h1 className="text-3xl font-bold">{name}</h1>
                </div>

                <div className="mt-3 flex-grow">
                    {
                        features.map((feature, idx) => <Feature key={idx} feature={feature}></Feature> )
                    }
                </div>

                <button className="w-full bg-orange-400 hover:bg-orange-700 p-2 rounded">Add</button>
            
        </div>
    );
};

export default PriceOption;