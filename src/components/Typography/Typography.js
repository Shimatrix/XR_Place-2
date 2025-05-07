import { jsx as _jsx } from "react/jsx-runtime";
import styles from './Typography.module.scss';
const Typography = ({ variant, children, className = '', style }) => {
    const tagMap = {
        h1: 'h1',
        h2: 'h2',
        h3: 'h3',
        h4: 'h4',
        p: 'p',
        span: 'span',
    };
    const Tag = tagMap[variant];
    return (_jsx(Tag, { className: `${styles[variant]} ${className}`, style: style, children: children }));
};
export default Typography;
//# sourceMappingURL=Typography.js.map