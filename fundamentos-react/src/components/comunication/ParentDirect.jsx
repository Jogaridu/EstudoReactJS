import React from 'react';
import ChildDirect from "./ChildDirect";

export default props => {
    return (<>
        <ChildDirect text="FILHO #1" number={15} bool={true} />
        <ChildDirect text="FILHO #1" number={20} bool={false} />
    </>
    );
};
