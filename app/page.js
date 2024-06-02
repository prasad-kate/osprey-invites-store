"use client";

import CustomText from "@/components/Accordions/CustomText";
import DigitalIllustration from "@/components/Accordions/DigitalIllustration";
import InputExampleDetails from "@/components/Accordions/InputsExample";
import OrderDetails from "@/components/Accordions/OrderDetails";
import Personalization from "@/components/Accordions/Personalization";
import ProductDetails from "@/components/Accordions/ProductDetails";
import WeddingCrest from "@/components/Accordions/WeddingCrest";
import CartSection from "@/components/AddToCart/CartSection";
import Carousel from "@/components/Carousel";
import ToggleButtons from "@/components/ToggleButtons";
import store from "../store/store";
import { Provider } from "react-redux";

function Home() {
  return (
    <Provider store={store}>
      <main className="relative mb-[150px] grid grid-cols-1 md:grid-cols-2 ">
        <div className="">
          {/* carousel part */}
          <Carousel />
        </div>

        <div className="custom-scrollbar md:overflow-y-auto md:h-[800px] md:px-3 md:pb-6 md:relative">
          {/* qty section */}
          <ToggleButtons />

          {/* accordions */}
          <Personalization />
          <WeddingCrest />
          <CustomText />
          <DigitalIllustration />

          <hr className="m-6" />

          {/*summary accordions */}
          <ProductDetails />
          <OrderDetails />
          <InputExampleDetails />
          <InputExampleDetails />

          {/* cart section*/}
          <CartSection />
        </div>
      </main>
    </Provider>
  );
}

export default Home;
