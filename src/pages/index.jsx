import ImageCarousel from 'components/ImageCarousel.jsx'
import ContactBox from 'components/ContactBox.jsx'
import Image from 'next/image'

const sliderImages = [
  {name: "img1", src:"/Company Images/AC-Unit.jpg"},
  {name: "img2", src:"/Company Images/BasementUnit2.png"},
  {name: "img3", src:"/Company Images/BasementUnit1.png"},
  {name: "img4", src:"/Company Images/Closet-AC.jpg"},
  {name: "img5", src:"/Company Images/Humidifier1.jpg"},
  {name: "img6", src:"/Company Images/Humidifier2.jpg"}
]

export default function Home() {
  return (
    <>
    <main id="home">
      <div id="wrapper">
        <div className="FlexContainer">
          <div id="sliderDiv">
            <ImageCarousel slides={sliderImages}/>  
          </div>
          <div className="paragraphContainer">
              <h1>We are pros!</h1>
              <p className="paragraph">
              AP Pro Inc is a proud Chicago-based HVAC buisness with over 20 years of experience.
              Whether it be air conditioning untis, boilers, furnaces, or any other type of equipment 
              from a variety of carriers - AP Pro Inc has got you covered. With over 1000 jobs done -
              AP Pro Inc. is not afraid to tackle the ins and outs of any HVAC problem. 
              </p>
          </div>
        </div>
        <div id="ContactBoxContainer">
          <ContactBox />
        </div>
      </div>
    </main>
    </>
  )
}
