import FoodCard from '../../../components/FoodCard/FoodCard'





// TODO: implement pagination here on thei page
const OrderTab = ({ items }) => {
  return (
    <div className="grid md:grid-cols-3 gap-10">
                        {
                            items.map(item => <FoodCard
                                key={item._id}
                                item={item}
                            ></FoodCard>)
                        }
                    </div>
  )
}

export default OrderTab