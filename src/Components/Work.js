import React from 'react'
import PickMeals from "../Assets/pick-meals-image.png"
import ChooseMeals from "../Assets/choose-image.png"
import DeliveryMeals from "../Assets/delivery-image.png"

const Work = () => {
    const workInfoData = [
        {
            image:PickMeals, 
            title:"pick Meals",
            text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum."
        },
        {
            image:ChooseMeals, 
            title:"Choose How Often",
            text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et."
        },
        {
            image:DeliveryMeals, 
            title:"fast deliveries",
            text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis."
        },
    ]
  return (
    <div className="work-section-wrapper">
        <div className="work-section-top" >
            <p className="primary-subheading">Work</p>
        </div>
    </div>
  )
}

export default Work