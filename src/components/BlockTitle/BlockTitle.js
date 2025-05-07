import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import styles from './BlockTitle.module.scss';
import Typography from '../Typography/Typography';
const BlockTitle = ({ children, highlightedPhrase, className, style, }) => {
    // Если нет фразы (или даже одного слова) для выделения
    if (!highlightedPhrase) {
        return (_jsx(Typography, { variant: "h2", className: className, style: style, children: children }));
    }
    // Если есть фраза (или слово) для выделения
    const parts = children.split(new RegExp(`(${highlightedPhrase})`));
    return (_jsx(Typography, { variant: "h2", className: className, style: { display: 'inline-block', ...style }, children: parts.map((part, i) => part === highlightedPhrase ? (_jsx("span", { className: styles.highlighted, children: part }, i)) : (_jsx(React.Fragment, { children: part }, i))) }));
};
export default BlockTitle;
//# sourceMappingURL=BlockTitle.js.map