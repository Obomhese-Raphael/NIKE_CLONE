import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Top from './Components/Top/Top'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Footer from './Components/Footer/Footer'
import Signup from './Components/Pages/Signup/Signup'
import ShopCategory from './Pages/ShopCategory'
import women_banner from "../src/Components/assets/women_banner (3).jpg"
import kids_banner from "./Components/assets/kids_heading.jpeg"
import Mens from './Pages/Mens'
import Women from './Pages/Women'
import Kids from './Pages/Kids'
import MenRow from './Components/MenRow/MenRow'
import WomenRow from './Components/WomenRow/WomenRow'
import KidsRow from './Components/KidsRow/KidsRow'
import "../src/App.css"
import New from './Pages/New'
import Cart from './Pages/Cart'
import Product from './Pages/Product'

const App = () => {
  return (
    <div>
      <Router>
        <Top />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route
            path="/mens"
            element={
              <ShopCategory
                page={<Mens />}
                banner="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_1192,c_limit/94c1b0a2-13df-45f1-823e-cf82df0d0afe/men-s-shoes-clothing-accessories.png"
                footer_row={<MenRow />}
                category="mens"
              />
            }
          />
          <Route
            path="/womens"
            element={
              <ShopCategory
                page={<Women />}
                banner={women_banner}
                footer_row={<WomenRow />}
                category="womens"
              />
            }
          />
          <Route
            path="/kids"
            element={
              <ShopCategory
                page={<Kids />}
                banner={kids_banner}
                footer_row={<KidsRow />}
                category="kids"
              />
            }
          />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product /> } />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App

