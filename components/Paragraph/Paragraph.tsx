import { PProps } from "./Paragraph.props"
import styles from "./Paragraph.module.css";
import cn from "classnames";


export const P = ({ size = 'medium', className, children, ...props }: PProps): JSX.Element => {
    return <p className={cn(styles.paragraph, className, {
        [styles.small]: size == 'small',
        [styles.medium]: size == 'medium',
        [styles.large]: size == 'large'
    })} {...props}>
        {children}
    </p>
}