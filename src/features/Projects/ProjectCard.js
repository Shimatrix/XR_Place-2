import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './ProjectCard.module.scss';
export const ProjectCard = ({ title, description, img, className = '', }) => {
    return (_jsxs("div", { className: `${styles.card} ${className}`, children: [_jsx("div", { className: styles.imageContainer, children: _jsx("img", { src: img, alt: title, className: styles.image }) }), _jsxs("div", { className: styles.content, children: [_jsx("h3", { className: styles.title, children: title }), _jsx("p", { className: styles.description, children: description })] })] }));
};
//# sourceMappingURL=ProjectCard.js.map