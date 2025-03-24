import MaxWidthWrapper from "./layout/MaxWidthWrapper";
import qus from '/public/fpl-update/qus.jpg'
import Image from "next/image"


const WhyFpl = () => {
  return (
    <section className="py-10">
      <MaxWidthWrapper>
     <div className= "flex flex-col md:flex-row gap-4 justify-center items-center">
        <div className="basis-full md:basis-[35%]">
          <Image src={qus} alt="img" width={500} height={300} className="h-[300px] object-contain"/>
        </div >
        <div className="shadow-md p-5 rounded-md basis-full md:basis-[65%]">
          <h1 className="text-2xl md:text-4xl font-semibold ">WHY FLOOR PLANNER LTD !</h1>
          <p className="text-base font-medium mt-4">

We provide clients with space that reflects their brand's image, through an efficient work process that is delivered on time and within budget. With more than 10 years of cumulative experience in the field, Floor Planner Limited is proud to bring its professional approach and exceptional service to the market. We aim to have long-term relationships with clients and therefore never compromise on professionalism, time, and quality.</p>
        </div>

     </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default WhyFpl;
