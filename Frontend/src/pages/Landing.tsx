import CalltoAction from "../components/CalltoAction"
import FeaturedListings from "../components/FeaturedListings"
import Hero from "../components/Hero"
import HowitWorks from "../components/HowitWorks"
import Testimonials from "../components/Testimonials"
import WhyChoose from "../components/WhyChoose"

const Landing = () => {
  return (
    <div>
      <Hero />
      <FeaturedListings />
      <HowitWorks />
      <Testimonials />
      <WhyChoose />
      <CalltoAction />
      
    </div>
  )
}

export default Landing
