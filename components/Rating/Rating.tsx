import { RatingProps } from "./Rating.props"
import styles from "./Rating.module.css";
import cn from "classnames";
import { useEffect, useState, KeyboardEvent } from 'react';
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
                    onMouseLeave={() => changeDisplay(raiting)}
                    onClick={() => onClick(i + 1)}>
                    <StarIcon

                        tabIndex={isEditable ? 0 : -1}
                        onKeyDown={(e: KeyboardEvent<SVGElement>) => isEditable && handleSpace(i + 1, e)}
                    />
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

    const onClick = (i: number) => {
        if (!isEditable || !setRating) {
            return;
        };
        setRating(i);
    };

    const handleSpace = (i: number, e: KeyboardEvent<SVGElement>) => {
        if (e.code != 'Space' || !setRating) {
            return;
        };
        setRating(i);
    };

    return (
        <div {...props}>
            {raitingArray}
            {/* {raitingArray.map((r: JSX.Element, i: number) => <span key={i}>{r}</span>)} */}
        </div>
    );
}