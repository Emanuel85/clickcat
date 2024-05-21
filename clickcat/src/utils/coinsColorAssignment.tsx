import { Typography } from "@material-tailwind/react";


export default function coinsColorAssignment(toolTipID:string,toolTipTotalProbability:string) {
  switch(toolTipID) {
    case 'miau':
      return(
        < Typography  color="white" className="font-extrabold opacity-80 text-blue-500" >
   				{toolTipTotalProbability}
 				</Typography>
      );
		case 'moon':
			return(
				< Typography  color="white" className="font-extrabold opacity-80 text-violet-500" >
						{toolTipTotalProbability}
					</Typography>
			);
			case 'michi':
				return(
					< Typography  color="white" className="font-extrabold opacity-80 text-pink-600" >
							{toolTipTotalProbability}
						</Typography>
				);
			case 'michiMoon':
				return(
				<>
       		< Typography
         		color="white"
         		className="font-extrabold opacity-80 text-violet-500"
       		>
         		{toolTipTotalProbability.slice(0, 14)}
       		</Typography>
       		< Typography
         		color="white"
         		className="font-extrabold opacity-80 text-blue-500 pl-1"
       		>
         		{toolTipTotalProbability.slice(14)}
       		</Typography>
     	</>
				)
		  default:				
    }
}




// toolTipID === 'Michicoin' ?
// < Typography
//   color="white"
//   className="font-extrabold opacity-80 text-blue-500"
// >
//   {toolTipTotalProbability}
// </Typography>
// :
// toolTipID === 'Mooncat' ?
//   < Typography
//     color="white"
//     className="font-extrabold opacity-80 text-violet-500"
//   >
//     {toolTipTotalProbability}
//   </Typography>
//   :
//   toolTipID === 'Miaustar' ?
//     < Typography
//       color="white"
//       className="font-extrabold opacity-80 text-pink-600"
//     >
//       {toolTipTotalProbability}
//     </Typography> :
    
//     //separa Mooncat 34.60% Michicoin 14.60%. en Mooncat 34.60% y Michicoin 14.60% para asignar su color
//     <>
//       < Typography
//         color="white"
//         className="font-extrabold opacity-80 text-violet-500"
//       >
//         {toolTipTotalProbability.slice(0, 14)}
//       </Typography>
//       < Typography
//         color="white"
//         className="font-extrabold opacity-80 text-blue-500 pl-1"
//       >
//         {toolTipTotalProbability.slice(14)}
//       </Typography>
//     </>