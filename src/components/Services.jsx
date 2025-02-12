import { TbTruckDelivery } from "react-icons/tb";
import { RiCustomerServiceLine, RiShieldCheckLine } from "react-icons/ri";

export default function Services() {
  return (
    <section className="w-full px-[5%] my-20">
      <div className="flex w-full items-center justify-center gap-[3rem] flex-wrap">
        <div className="flex flex-col items-center justify-center gap-4 w-max">
          <div className="w-24 h-24 rounded-full flex items-center justify-center bg-secondary">
            <TbTruckDelivery className="w-3/4 h-3/4 bg-black rounded-full text-primary text-white p-2 border-8 border-gray-400" />
          </div>
          <h3 className="text-lg font-bold ">FREE AND FAST DELIVERY</h3>
          <p className="text-[14px]">Free delivery for all orders over $140</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 w-max">
          <div className="w-24 h-24 rounded-full flex items-center justify-center bg-secondary">
            <RiCustomerServiceLine className="w-3/4 h-3/4 bg-black rounded-full text-white text-primary p-2 border-8 border-gray-400" />
          </div>
          <h3 className="text-lg font-bold ">24/7 CUSTOMER SERVICE</h3>
          <p className="text-[14px]">Friendly 24/7 customer support</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 w-max">
          <div className="w-24 h-24 rounded-full flex items-center justify-center bg-secondary">
            <RiShieldCheckLine className="w-3/4 h-3/4 bg-black text-white rounded-full text-primary p-2 border-8 border-gray-400" />
          </div>
          <h3 className="text-lg font-bold ">MONEY BACK GUARANTEE</h3>
          <p className="text-[14px]">We return money within 30 days</p>
        </div>
      </div>
    </section>
  );
}
