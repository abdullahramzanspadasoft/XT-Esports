// import ChevronDownIcon from "@/icons/ChevronDownIcon";
// import RightArrowIcon from "@/icons/RightArrowIcon";

// function GameCard() {
//   const rows = [1297, 1871, 2445, 3019];
//   const lefts = [180, 574, 970, 1364];
//   const images: { top: number; left: number; src: string }[] = [];
//   rows.forEach((row) => {
//     lefts.forEach((left) => {
//       images.push({ top: row, left, src: "/Image/games/games-grid-card-thumbnail.png" });
//     });
//   });

//   return (
//     <>
//       <div>
//         <div
//           className="absolute w-[443px] h-[80px] top-[1136px] left-[171px]
//   rounded-[17px] bg-[#000B15] gap-[40px] flex items-center px-6"
//         >
//           <svg
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M23.56 21.4452L18.9149 16.7981C22.3906 12.1533 21.4429 5.57034 16.7981 2.09462C12.1533 -1.3811 5.57034 -0.433388 2.09462 4.21139C-1.3811 8.85616 -0.433388 15.4392 4.21139 18.9149C7.94245 21.7069 13.067 21.7069 16.7981 18.9149L21.4452 23.562C22.0292 24.146 22.976 24.146 23.56 23.562C24.144 22.978 24.144 22.0312 23.56 21.4472L23.56 21.4452ZM10.5435 18.0179C6.41542 18.0179 3.06901 14.6715 3.06901 10.5435C3.06901 6.41542 6.41542 3.06901 10.5435 3.06901C14.6715 3.06901 18.0179 6.41542 18.0179 10.5435C18.0136 14.6697 14.6697 18.0136 10.5435 18.0179Z"
//               fill="#008FFF"
//             />
//           </svg>

//           <input
//             type="text"
//             placeholder="Search games"
//             className="bg-transparent outline-none w-full
//     font-[Poppins] text-[22px] text-white placeholder:text-[#FFFFFF33]"
//           />
//         </div>

//         <div
//           className="absolute w-[218px] h-[80px] top-[1136px] left-[630px]
//             rounded-[17px] bg-[#000B15] opacity-100"
//         ></div>
//         <div
//           className="absolute w-[104px] h-[33px] top-[1164px] left-[658px]
//   flex items-center gap-2 justify-between
//   font-[Poppins] font-normal text-[22.03px]
//   leading-[100%] tracking-[0%] text-[#FFFFFF33]"
//         >
//           <span>Category</span>

//           <ChevronDownIcon className="flex-shrink-0 ml-8" />
//         </div>
//         <div
//           className="absolute w-[218px] h-[80px] top-[1136px] left-[866px]
//             rounded-[17px] bg-[#0184E9] opacity-100"
//         ></div>
//         <button
//           className="absolute w-[46px] h-[33px] top-[1160px] left-[952px]
//             font-[Poppins] font-normal text-[22.03px]
//             leading-[100%] tracking-[0%] opacity-100 text-[#011425]"
//         >
//           Find
//         </button>
//         {images.map((img, index) => (
//           <img
//             key={index}
//             src={img.src}
//             alt="Game Card"
//             className="w-[366px] h-[550px] absolute rounded-[31px] opacity-100 object-cover"
//             style={{ top: `${img.top}px`, left: `${img.left}px` }}
//           />
//         ))}

//         <div className="w-[56px] h-[56px] absolute top-[3714px] left-[744px] opacity-100 rounded-[7px] border border-[#0074F4] bg-[#011324]"></div>
//         <h1 className="w-[8px] h-[33px] absolute top-[3728px] left-[768px] opacity-100 text-white text-[22.03px] font-[Poppins] font-normal leading-[33px]">
//           1
//         </h1>
//         <div className="w-[56px] h-[56px] absolute top-[3714px] left-[804px] opacity-100 rounded-[7px] bg-[#011324]"></div>
//         <h1 className="w-[13px] h-[33px] absolute top-[3728px] left-[825px] opacity-100 text-white text-[22.03px] font-[Poppins] font-normal leading-[33px] tracking-normal">
//           2
//         </h1>
//         <div className="w-[56px] h-[56px] absolute top-[3714px] left-[864px] opacity-100 rounded-[7px] bg-[#011324]"></div>
//         <h1 className="w-[13px] h-[33px] absolute top-[3728px] left-[885px] opacity-100 text-white text-[22.03px] font-[Poppins] font-normal leading-[33px] tracking-normal">
//           3
//         </h1>
//         <div className="w-[16px] h-[16px] absolute top-[3734px] left-[926px] opacity-100 rounded-[7px] bg-[#011324] rotate-180"></div>
//         <div className="w-[16px] h-[16px] absolute top-[3734px] left-[944px] opacity-100 rounded-[7px] bg-[#011324] rotate-180"></div>
//         <div className="w-[16px] h-[16px] absolute top-[3734px] left-[962px] opacity-100 rounded-[7px] bg-[#011324] rotate-180"></div>
//         <div className="w-[16px] h-[16px] absolute top-[3734px] left-[980px] opacity-100 rounded-[7px] bg-[#011324] rotate-180"></div>
//         <div className="w-[16px] h-[16px] absolute top-[3734px] left-[998px] opacity-100 rounded-[7px] bg-[#011324] rotate-180"></div>
//         <div className="w-[56px] h-[56px] absolute top-[3714px] left-[1020px] opacity-100 rounded-[7px] bg-[#011324]"></div>
//         <h1 className="w-[40px] h-[33px] absolute top-[3728px] left-[1028px] opacity-100 text-white text-[22.03px] font-[Poppins] font-normal leading-[33px] tracking-normal">
//           533
//         </h1>
//         <div className="w-[56px] h-[56px] absolute top-[3714px] left-[1080px] opacity-100 rounded-[7px] bg-[#011324]"></div>
//         <div className="w-[24px] h-[24px] absolute top-[3730px] left-[1097px] opacity-100">
//           <RightArrowIcon />
//         </div>
//       </div>
//     </>
//   );
// }

// export default GameCard;
