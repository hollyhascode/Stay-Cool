import ImageCarousel from 'components/ImageCarousel.jsx'
import ContactBox from 'components/ContactBox.jsx'

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
                Lorem ipsum dolor sit amet. Ut voluptatem optio 33 voluptatem animi ut soluta error qui quasi commodi! 
                Cum consequatur laudantium aut laborum illum ad omnis nobis eum fuga magni est commodi officia! 
                Qui asperiores explicabo non galisum reprehenderit aut dolor dicta est ipsa fuga aut maiores nihil. 
                Ab eaque beatae et explicabo corrupti qui animi laborum. 
                Lorem ipsum dolor sit amet. Ut voluptatem optio 33 voluptatem animi ut soluta error qui quasi commodi! 
                Cum consequatur laudantium aut laborum illum ad omnis nobis eum fuga magni est commodi officia! 
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
