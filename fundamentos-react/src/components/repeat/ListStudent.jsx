import React from 'react';
import arrayStudents from "./../../data/student"


export default props => {

    const lis = arrayStudents.map(student => {
        return (
            <li key={student.id}>

                {student.id} - {student.name} - {student.note}

            </li>
        );
    })

    return (
        <div>
            <ul style={{ listStyle: "none" }}>
                {lis}
            </ul>
        </div>
    );
}