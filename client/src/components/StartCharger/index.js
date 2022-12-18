import React, { useState } from 'react';
import MySurvey from '../surveyDisplay/surveyone';


const StartCharger = ({ chargerId, portId, maxCurrent }) => {
    const [goSurvey, setGoSurvey] = useState(false);
    const triggerSurvey = () => {
        setGoSurvey(true)
    }

return (
    <div>
        <button className="btn btn-lg btn-charging m-2" onClick={triggerSurvey}>Set Charging Mode</button> 
        {
        goSurvey ? (
            <div>
                <MySurvey chargerId={chargerId} portId={portId} maxCurrent={maxCurrent}/>
            </div>
        ) :
        ''
        }
        

    </div>
    
)

//   if (!comments.length) {
//     return <h3>No Comments Yet</h3>;
//   }

//   return (
//     <>
//       <h3
//         className="p-5 display-inline-block"
//         style={{ borderBottom: '1px dotted #1a1a1a' }}
//       >
//         Comments
//       </h3>
//       <div className="flex-row my-4">
//         {comments &&
//           comments.map((comment) => (
//             <div key={comment._id} className="col-12 mb-3 pb-3">
//               <div className="p-3 bg-dark text-light">
//                 <h5 className="card-header">
//                   {comment.commentAuthor} commented{' '}
//                   <span style={{ fontSize: '0.825rem' }}>
//                     on {comment.createdAt}
//                   </span>
//                 </h5>
//                 <p className="card-body">{comment.commentText}</p>
//               </div>
//             </div>
//           ))}
//       </div>
//     </>
//   );
};

export default StartCharger;
