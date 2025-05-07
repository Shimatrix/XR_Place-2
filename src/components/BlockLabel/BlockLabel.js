import { jsx as _jsx } from "react/jsx-runtime";
import styles from './BlockLabel.module.scss';
export const BlockLabel = ({ children, className = '' }) => {
    return _jsx("span", { className: `${styles.blockLabel} ${className}`, children: children });
};
//# sourceMappingURL=BlockLabel.js.map