import React from 'react';
import FamilyMember from "./FamilyMember";
// import { Container } from './styles';

export default props => {

    return (
        <div>
            <FamilyMember name="Jorge" surname="Ricci" />
            <FamilyMember name="Gabriel" surname="Dutra" {...props} />
            <FamilyMember name="Jorge" surname="Ricci" {...props} />
        </div>
    );
}