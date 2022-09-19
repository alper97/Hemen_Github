import Header from "../home/Header";
import Slider from "../home/Slider";
import Section1 from "../home/Section1";
import Section2 from "../home/Section2";
import Section3 from "../home/Section3";
import Section4 from "../home/Section4";
import Section5 from "../home/Section5";
import Section6 from "../home/Section6";
import Section7 from "../home/Section7";
import Footer from "../home/Footer";
import Search from "../category/Search";

function HomePage() {
  return (
    <div>
        <Header/>
        <Slider/>
        <Search/>
        <Section1/>
        <Section2/>
        <Section3/>
        <Section4/>
        <Section5/>
        <Section6/>
        <Section7/>
        <Footer/>
    </div>
  )
}

export default HomePage