export default function Order() {

  return (

    <div className="orderPage">


      <h1>
        Order Your Coffee
      </h1>


      <div className="orderForm">


        <input 
          type="text"
          placeholder="Your Name"
        />


        <input 
          type="number"
          placeholder="Mobile Number"
        />


        <input 
          type="text"
          placeholder="Coffee Name"
        />


        <input 
          type="number"
          placeholder="Quantity"
        />


        <textarea
          placeholder="Your Address"
        ></textarea>


        <button>
          Place Order
        </button>


      </div>


    </div>

  )

}