import { motion, spring } from 'framer-motion';
import { useState } from 'react';
import ArsBadge from '../Images/arsenal_logo_PNG1.png'

function Arsenal() {
    const [isOpen, setIsOpen] = useState(false);

    return(
        <div className="animation">
            <motion.div transition={{layout: {duration: 1, type: spring}}} Layout onClick={() => setIsOpen(!isOpen)} className="team-page">
                <motion.h2 layout="position">Arsenal</motion.h2>
                <motion.img layout="position" className="arsenal-badge"src={ArsBadge}></motion.img>
                {isOpen && (
                    <motion.div className="expand">
                        <ul className="team-stats">
                            <li>Games Played: 38</li>
                            <li>Wins: 22</li>
                            <li>Draws: 3</li>
                            <li>Losses: 13</li>
                            <li>Goals For: 61</li>
                            <li>Goals Against: 48</li>
                            <li>Clean Sheets: 13</li>
                        </ul>
                    </motion.div>
                )}
            </motion.div>
        </div>
    )
}

export default Arsenal;


// return (
//     <div>
//         <div className="team-page">
//             <h1>Arsenal FC</h1>
//             <img className="arsenal-badge" src={ArsBadge} alt="Arsenal Badge"></img>
//         </div>
//         <div>
//             <ul className="team-stats">
//                 <li>Games Played: 38</li>
//                 <li>Wins: 22</li>
//                 <li>Draws: 3</li>
//                 <li>Losses: 13</li>
//                 <li>Goals For: 61</li>
//                 <li>Goals Against: 48</li>
//                 <li>Clean Sheets: 13</li>
//             </ul>
//         </div>
//     </div>
//   );