import { RatingProps } from "./Rating.props"
import styles from "./Rating.module.css";
import cn from "classnames";
import { useEffect, useState } from 'react';
import StarIcon from './Star.svg';


export const Rating = ({ isEditable = false, raiting, setRating, ...props }: RatingProps): JSX.Element => {
    const [raitingArray, setRaitingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(() => {
        constructRaiting(raiting);
    }, [raiting]);

    const constructRaiting = (currentRaitng: number) => {
        const updatedArray = raitingArray.map((r: JSX.Element, i: number) => {
            return (
                <span key={i} className={cn(styles.star, {
                    [styles.filled]: i < currentRaitng,
                    [styles.editable]: isEditable
                })}
                    onMouseEnter={() => changeDisplay(i + 1)}
                    onMouseLeave={() => constructRaiting(raiting)}
                >
                    <StarIcon />
                </span>
            );
        });
        setRaitingArray(updatedArray);
    };

    const changeDisplay = (i: number) => {
        if (!isEditable) {
            return;
        };
        constructRaiting(i);
    };

    return (
        <div {...props}>
            {raitingArray}
        </div>
    );
}