import Homepage from "./Home/Homepage";
import "bootstrap/dist/css/bootstrap.min.css"
import {Route,BrowserRouter,Routes} from "react-router-dom";
import Services_page from "./Services/Services_Page";
import Contact from "./Contact/Contactus"
import Quote from "./GetQuote/Quotefinal"
import Testimonial from "./TestimonialPage/Testimonial";

function App() {
  return (
    <><BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/services" element={<Services_page />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/testimonials" element={<Testimonial />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
