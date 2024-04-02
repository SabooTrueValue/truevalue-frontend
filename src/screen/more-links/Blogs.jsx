import React, { useState } from "react";
import { Helmet } from "react-helmet";

 const blogData = [
  {
    img: "https://sabootruevalue.in/assets/img/Buy-and-Sell-Maruti-Suzuki-Preowned-Cars.png",
    title:
      "7 Joys Of Life You'll Relate To If You Have Recently Upgraded From A Bike To A Pre-Owned Car",
    subTitle:
      "We know owning a car has been like a dream come true for you. And, it has taken quite some time to get this desire of yours to materialise. While we can totally understand the spring in your stride & the change in outlook of others towards you after you got this prized possession, here are the 7 joys you'll definitely relate to if you have recently upgraded from a bike to a pre-owned car.",

    data: [
      {
        heading: "The joy of traveling with your family",
        content:
          "No more choosing a person who will tag along with you or taking multiple trips on bike to make your family come for shopping. Now, you and your family can make yourself comfortable in the car & enjoy the feeling of being together. Whether it's a trip to relative's home or ice cream runs at night, the family can strengthen the bond with each other by being together in the car.",
      },
      {
        heading: "A sense of pride",
        content:
          "Owning a car will definitely swell your chest in pride in. The neighbours, your friends & other members of the society are going to look up to you for inspiration to be successful. As car is a status symbol, the sense of pride of having it parked besides your home inspiring awe from the passer by matches no other feeling. Congratulations, you have arrived in life.",
      },
      {
        heading: "The joy of feeling fresh",
        content:
          "Gone are the days when you used to feel dead tired & energy drained on reaching your destination due to travelling several kms on a bike encountering smoke & dust from the nearby vehicles. The new car will keep you safeguarded from all the dust & pollution & you'll feel daisy fresh when you reach your destination.",
      },
      {
        heading: "The joy of being weather proof",
        content:
          "We know you can totally relate to those drenched days during rains when you wished that you had a car rather than a bike. Well, happy days are here. You no longer have to think 10 times before venturing out of home whether it's the dreaded monsoon, spine chilling winters or sweltering heat. Rain sensing wipers & AC in the car will keep your life sorted. Hence, no need to postpone/cancel your plans on the basis of weather condition. We know your parents are going to love it.",
      },
      {
        heading: "The joy of carrying the world with you",
        content:
          "Say goodbye to the days when you had to take an auto or a bus because your bike didn't have enough space to keep other belongings like luggage. Your car can not only accommodate your laptop bag, toys for kids, gifts for festivals, food items for a picnic but also large suitcases for the days when you are going out of city. Now, you can even go to railway station/airport to pick your relatives with pride. You are about to enter the world of comfort.",
      },
      {
        heading: "The joy of being secure",
        content:
          "We can't help but make you go down the memory lane to the days when your wife/mom used to wonder if it's safe to wear that jewellery being on a bike. Or the days when you used to evaluate if you should keep your expensive items in that bike storage compartment. Well, no need to lose your sleep over it now. We don't need to put more emphasis on your own safety in case of an accident (God forbid). A car is much more secure than a bike & you'll very soon realize how upgrading yourself to a preowned car has turned out to be a smart decision for you.",
      },
      {
        heading: "The joy of being entertained",
        content: `Your distance to your workplace is going to feel a lot less when you travel while humming to your favourite songs in the car. Imagine the joy of listening to your own playlist on your way back home after a long tiring day at office. Absolute bliss. Even navigation becomes a breeze now to reach your destination in the shortest possible time. Yeah, none of it was possible on a bike , but thatâ€™s what we call progress in life. Congratulations once again on getting this four wheeler into your life & we hope that it helps you to create newer fond memories with your friends & the family.
        
        Its this Maruti Suzuki True Valueâ€™s commitment to transparency, quality & a consumer centric approach that makes it an obvious choice when it comes to buying a pre-owned car.`,
      },
    ],
  },
  {
    img: "https://sabootruevalue.in/assets/img/Used-Car-Buying-Factors.png",
    title: "5 Factors To Consider Before You Buy A Pre-Owned Car",
    subTitle: `With new car launches becoming frequent, an increasing number of car owners are selling their old models and switching over to newer ones. This has in turn increased the sheer variety of vehicles available in the pre-owned space thereby making investing into a used car a sensible option.
A consumer is generally skeptical about purchase of a pre-owned car & hence needs to consider the following 5 factors:-`,

    data: [
      {
        heading: "Budget",
        content: `This factor has become less complicated thanks to lucrative used car loans available from almost all leading banks. It's easy to get a loan on a pre-owned for up to 5 years and hence you can stretch your budget for a car from a higher segment.
Either which way, setting a budget right into your mind is the first essential factor that needs to be taken into consideration in this journey towards purchasing a used car. A budget of INR 4-6 lakh is more than ample for you to own a hatchback, compact SUV, a compact sedan and even a 3-5 year old car from a higher segment.`,
      },
      {
        heading: "Type of Vehicle",
        content: `You need to spend some time asking yourself the kind of car you want to own and drive. The parameters are numerous - from body type (Hatchback, Sedan, SUV etc.) to fuel type (petrol, diesel, CNG) and even type of usage - personal, family, adventure trips or work. These parameters will further help you narrow down your options, hence making your decision making quicker.`,
      },
      {
        heading: "Age of Vehicle",
        content: `Once you have the budget and kind of vehicle in mind, another important factor to consider is how old is the pre-owned car as it can have a bearing on the segment of car you choose. For example in a budget of INR 3-5 lakh, you can easily pick a 2-3 year old hatchback & even a 4-5 year old sedan in a good condition. However, be careful of diesel cars as going forward a few metro cities might ban the use of diesel powered cars older than 10 years. This ruling is already in place in Delhi and hence stays away from diesel cars that are nearing 10 years of age as selling these cars few years down the line will be a tough job.`,
      },
      {
        heading: "OEM or Direct Purchase",
        content: `Almost every used car for sale in the market belongs to an individual and most of these sellers do try to strike a deal directly with buyers. The main benefit of such a transaction is that you, as a buyer, end up saving money as no middle agent or a third party is involved. However, one is not sure about the quality of car or genuineness of the seller.`,
      },
      {
        heading: "Hassle-Free Documentation",
        content: `Unlike a new car purchase where getting all the required documents is a piece of cake, one need to be extra cautious in the case of the pre-owned car. Essential documents include RC transfer, change of name on the insurance, owner's manual and even the duplicate key. You also need the make sure that the car wasn't hypothecated to a bank and the same should be sorted by the seller before handing over the money. And, if you want a hassle free experience, you should choose market leaders like Maruti Suzuki True Value which not only has Dedicated Relationship Officers to handhold you throughout the process, but also makes you feel like a privileged guest during post purchase documentation.`,
      },
    ],
  },
  {
    img: "https://sabootruevalue.in/assets/img/MKaruti-Suzuku-TrueValue-Advantages.png",
    title:
      "What Makes Maruti SuzukiÂ True Value A Trusted Name In The Pre-Owned Car Market?",
    subTitle: `You might be surprised to know that for every 100 new cars sold in India, more than 125 used cars exchange hands # . The pre-owned car space has been growing by leaps & bounds and the consumer today is no longer shy or skeptical of buying a pre- owned car. Well, definitely some credit for this change of behavior goes to OEM's ( like Maruti Suzuki, Hyundai, Honda, Tata, Mahindra & more) who have redefined car quality standards in the Indian market & of course players like Maruti Suzuki True Value, which has been putting its heart & soul to organize the unorganized preowned cars market since 2001. It has recently revolutionized the pre-owned car purchase experience through amazing new True Value showrooms across various Indian cities. Here's a peek into what makes Maruti Suzuki True Value a trusted name in the pre-owned car market:-`,

    data: [
      {
        heading: "What you see online is what you get offline",
        content: `A consumer can not only check out the range of cars available at Maruti Suzuki True Value showroom sitting in the comfort of home (through the website/App), he can also book a test drive of the same. Unlike other cases where the car online may not be same as the actual car, Maruti Suzuki True Value stands tall on its promise of being trustworthy in this scenario. The actual car in a Maruti Suzuki True Value showroom is exactly the same as that on the website. This convenience & transparency in today's era by Maruti Suzuki True Value makes it a preferred choice for the consumer to buy a pre-owned car.`,
      },
      {
        heading: "Verified Car History",
        content: `Each car at Maruti Suzuki True Value showroom goes through an entire process of verifying the distance travelled, number of previous owners & service history based on the services done at authorized service center. This in turn means that user is assured about odometer reading, number of times the car exchanged hands and quality of the car. The OEM expertise of Maruti Suzuki is rubbed off to True Value & the professionalism reflected by True Value makes the consumer more confident about the choice of a pre-owned vehicle.`,
      },
      {
        heading: "True Value Certified cars with 376 quality checks & Warranty",
        content: `Along with the verification of car history, the used cars go through a stringent 2 step process of certification - digital evaluation through 376 quality checkpoints like examining its engine, suspension, interior, exterior, electrical parts & several other aspects. Only when a car passes the Maruti Suzuki standards, it's called as True Value Certified. Every car here goes into refurbishing mode however minor the requirement is & only Maruti Suzuki Genuine Parts are used. No wonder, all True Value Certified cars come with a warranty of up to 1 year for added peace of mind along with 3 free services post the purchase. Maruti Suzuki True Value thus ensures that consumers find a used car highly reliable, thus earning their trust & confidence.`,
      },
      {
        heading: "Dedicated Relationship Officer",
        content: `Every customer who walks in to any True Value showroom across India is given a warm welcome by an allocated dedicated relationship officer who acts as facilitator throughout the purchase process. This makes the entire journey personalized & seamless as the same relationship officer handholds the consumer on every step across multiple touch points of car selection - test drive, loan approval & post purchase documentation. Maruti Suzuki True Value thereby makes the experience of pre-owned car buying as convenient & awesome as buying a new car.`,
      },
      {
        heading: "Simple Hassle-free Post purchase Documentation",
        content: `The usual post purchase pain point of the consumer is also efficiently dealt with at Maruti Suzuki True Value showrooms. Everything from RC transfer to insurance is facilitated by a dedicated relationship officer that makes the post purchase experience simple & hassle free. No running around after the previous owner, no follow ups & no headache makes a pre-owned car purchase an easy exercise for the consumer at Maruti Suzuki True Value.
It's this Maruti Suzuki True Value's commitment to transparency, quality & a consumer centric approach that makes it an obvious choice when it comes to buying a pre-owned car.

`,
      },
    ],
  },
  {
    img: "https://sabootruevalue.in/assets/img/Get-Quality-Preowned-Cars-from-Maruti-Suzuki.png",
    title: "5 Used Car Financing Options To Help You Own Your Dream Car Today",
    subTitle: `Used cars are now more popular than ever before in India. A steady stream of car owners upgrading to larger, more expensive cars means that there are a lot of interesting, well maintained vehicles landing into the used car market. While zeroing in on their dream car in the pre-owned market, one of the biggest challenges faced by buyers is the lack of convenient finance options. We've put together various ways in which your used car purchase can be financed. You may be pleasantly surprised!`,

    data: [
      {
        heading: "Pre-owned car loan from a bank",
        content:
          "In case you thought banks sanction loans only on brand new cars, you are wrong. With growing demand of preowned cars and in turn the need for finance options, almost all leading banks now provide loans on pre-owned cars too. Getting approvals for a used car loan is hassle free these days and you do get to enjoy all the benefits including flexible repayment tenure of upto 7 years, increasingly lower rate of interests and availability of upto 80-85% of the value of the car as loan amount. Further, certified cars like those of Maruti Suzuki True Value enjoy an ever better, i.e., lower rate of interest. And of course, similar to new car loans, you can apply for pre-closure if you want to sell the car back or have enough funds in hand.",
      },
      {
        heading: "Credit cards",
        content:
          "A lot of used cars are affordable enough for your credit card to handle the purchase. Yes, a lot of used car dealers in the organized segments allow customers to swipe credit cards for purchasing cars. Entry level used cars such as Maruti Suzuki Alto selling for under Rs. 2 lakhs is not uncommon. So, if you have a credit card with a credit limit between Rs. 2-3 lakhs, you can easily drive home an entry-level used car by simply swiping your credit card. You can then convert the purchase amount into EMIs for upto 24 months. There's a downside to this though. Your credit limit effectively is blocked until you repay the EMIs. Personal loan Have a good credit history? Well, you can then opt for the 3 second loan that many leading banks such as HDFC and ICICI now offer. Such '3 second' personal loan offers involve no paperwork and are disbursed after an online application process that takes less than 5 minutes. After filling in the application, the loan will be disbursed to your bank account in seconds. Purchasing your used car with this money is yet another option. However, you may have to shell out higher interest rates for such loans.",
      },
      {
        heading: "Crowdfund it",
        content:
          "The great thing about India is the support system of family and friends. If you don't have a credit card nor a bank willing to lend you money through a personal loan, you can always bank on your family and friends to help you out for your car purchase. Assuming that you need a loan of about Rs. 200,000, splitting this amount into 20 pieces and getting Rs. 10,000 each from a bunch of friends can help you bridge the gap and drive home that car you've always wanted. You can then repay each friend Rs. 10,000 every month and get done with the crowdfund repayment in 20 months. Almost like an EMI? Well, it is.",
      },
      {
        heading: "Fixed deposits as Collaterals",
        content:
          "Well no, we're not asking you to break the fixed deposit. Rather, why not used the FD to instead act as collateral against a car loan? Many banks and non-banking financial companies (NBFC) give out loans against fixed deposits. You could take this option to borrow money in order to finance a pre-owned car, and then repay the loan over a longer period of time. Of course, you're risking your savings using this approach.",
      },
      {
        heading: "Maruti Suzuki True Value Financing Options",
        content:
          "If you don't want to get into any hassle of going to banks or asking your friends, Maruti Suzuki's True Value showrooms can be your one stop solution for your used car related finance needs. Yes, they not only house your pre-owned dream car but also assist you with best loan options through a tie up with more than 37 finance partners (private and public sector banks, & NBFC's). Since, certified used cars at True Value have the lowest bank interest rates and additional promotional offers, the whole process of getting your car financed seems like a breeze here",
      },
    ],
  },
];

export const Blogs = () => {
  const [selected, setSelected] = useState(0);
  return (
    <div>
      <Helmet>
        <title>Your Guide to TrueValue Car Buying</title>
        <meta
          name="title"
          content="Your Guide to TrueValue Car Buying"
        />
        <meta
          name="description"
          content="Discover the ultimate car buying experience with TrueValue. From trusted inspections to unbeatable deals, explore our blog for expert tips, customer stories, and everything you need to know before buying your next car."
        />
        <meta
          name="keywords"
          content="Saboo TrueValue, car buying, used cars, pre-owned vehicles, car inspections, unbeatable deals, expert tips, customer stories, car shopping guide
"
        />
      </Helmet>
      <img
        src={require("../../assets/other/blogs_banners.jpg")}
        alt="Blogs banner"
      />
      {/* <div className="container py-3 mx-auto">
        <Link to="HOME" className="font-medium ">
          Home{" "}
        </Link>{" "}
        | <span className="text-gray-500">Blogs</span>
      </div> */}
      <div className="bg-[#f2f2f2] py-10">
        <div className="container p-4 px-2 pt-10 pb-6 mx-auto bg-white lg:px-4">
          {/* <div className="pt-2 pb-4 text-5xl font-medium uppercase text-primary lg:pt-3 md:text-center">
            NEWS & Social Media Articles
          </div> */}

          <h1 className="mt-4 mb-8 text-3xl font-bold text-center lg:text-4xl text-primary lg:whitespace-nowrap">
            NEWS & Social Media Articles
          </h1>
          <h5 className="mb-3 text-xl lg:mb-8 md:text-center">
            Stay up to date with the latest activity from your favorite Saboo
            True Value!
          </h5>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-5">
            <div className="col-span-1 lg:col-span-3">
              <div className="mb-4 text-xl font-medium sm:text-2xl lg:text-3xl lg:mb-6">
                {/* Maruti Suzuki Jimny hits Hyderabad roads */}
                {blogData[selected].title}
              </div>

              <img
                src={blogData[selected].img}
                alt={blogData[selected].title}
                className="object-cover overflow-hidden bg-black rounded-lg "
              />
              <div className="my-3 lg:px-4 lg:text-lg">
                {blogData[selected].subTitle}
              </div>
              <div className="my-4 text-justify lg:text-lg lg:px-4">
                {blogData[selected].data.map((x, i) => (
                  <div key={i} className="mb-4">
                    <div className="pt-4 pb-2 text-xl font-bold text-primary lg:text-2xl">
                      {i + 1}. {x.heading}
                    </div>
                    <div className="text-lg">{x.content}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-span-1 px-2 pb-2 overflow-x-hidden lg:col-span-2">
              <div className="sticky top-0">
                <div className="mb-2 text-lg border-b ">All News</div>
                {blogData.map((x, i) => (
                  <div
                    key={i}
                    className={`flex flex-row gap-4 py-1 border-b cursor-pointer group hover:shadow-lg shadow-gray-500 lg:px-2 hover:rounded-lg ${
                      selected === i ? " border border-primary rounded-lg" : ""
                    }`}
                    onClick={() => setSelected(i)}
                  >
                    <img
                      src={x.img}
                      alt={x.title}
                      className="h-24 overflow-hidden duration-500 rounded-lg brightness-110 lg:h-28 lg:w-1/3 group-hover:scale-95"
                    />

                    <div className="flex flex-col justify-around w-2/3 gap-4 duration-500">
                      <div className="pb-2">{x.title}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
