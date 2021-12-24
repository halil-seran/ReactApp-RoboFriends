import React from "react";
import Card from '../components/Card';

const CardList = ({ robots }) => {
    // if (true) {
    //     throw new Error('No!');
    // }
    return (
        <div>
            {
                robots.map((user, i) => {
                    return (
                        <Card
                            key={i}
                            id={robots[i].id}
                            name={robots[i].name}
                            email={robots[i].email}
                        />
                    )
                })
            }
        </div>
    );
}

export default CardList;