import { TagProps } from "./Tag.props"
import styles from "./Tag.module.css";
import cn from "classnames";


export const Tag = ({ size = 'small', color = 'ghost', href, className, children, ...props }: TagProps): JSX.Element => {
    return <div className={cn(styles.tag, className, {
        [styles.small]: size == 'small',
        [styles.medium]: size == 'medium',
        [styles.ghost]: color == 'ghost',
        [styles.gray]: color == 'gray',
        [styles.green]: color == 'green',
        [styles.red]: color == 'red',
        [styles.primary]: color == 'primary',
    })} {...props}
    >
        {children}
        {href &&
            <a href={href} />
        }
    </div>
}