import { coffeeMenu } from "../../data";


export default async function CoffeeDetail({ params }) {

  const { id } = await params;


  const coffee = coffeeMenu.find(
    (item) => item.id == id
  );


  if (!coffee) {
    return <h1>Coffee not found</h1>
  }


  return (

    <div className="detailPage">


      <img
        className="detailImg"
        src={coffee.image}
        alt={coffee.name}
      />


      <div className="detailText">


        <h1>
          {coffee.name}
        </h1>


        <h2>
          ₹{coffee.price}
        </h2>


        <h3>
          {coffee.offer}
        </h3>


        <p>
          {coffee.details}
        </p>


        <button>
          Order Now
        </button>


      </div>


    </div>

  )

}