import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/* Логика выбора slider/grid по кол-ву проектов */
import { useState } from 'react';
import { ProjectCard } from './ProjectCard';
import styles from './Projects.module.scss';
export const ProjectSlider = ({ projects }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const isGridMode = projects.length >= 4;
    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    };
    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
    };
    return (_jsxs("div", { className: `${styles.wrapper} ${isGridMode ? styles.gridMode : ''}`, children: [_jsxs("div", { className: styles.header, children: [_jsx("div", { className: styles.decoration, children: "\u0421\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u0447\u0435\u0441\u0442\u0432\u043E" }), _jsxs("h2", { className: styles.heading, children: ["\u0420\u0435\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u043D\u043D\u044B\u0435 ", _jsx("span", { className: styles.accent, children: "\u043F\u0440\u043E\u0435\u043A\u0442\u044B" })] }), isGridMode ? (_jsxs("a", { href: "", className: styles.viewAllButton, children: ["\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0432\u0441\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u044B", ' ', _jsx("svg", { width: "15", height: "15", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: _jsx("path", { d: "M1 14 14 1m0 0H1m13 0v13", stroke: "#4D4D4D" }) })] })) : (_jsxs("div", { className: styles.navButtons, children: [_jsx("button", { onClick: handlePrev, className: styles.arrowLeft }), _jsx("button", { onClick: handleNext, className: styles.arrowRight })] }))] }), isGridMode ? (_jsx("div", { className: styles.grid, children: projects.map((project, i) => (_jsx(ProjectCard, { title: project.title, description: project.description, img: project.img, className: styles.card }, i))) })) : (_jsx("div", { className: styles.slider, children: _jsx("div", { className: styles.track, style: {
                        transform: `translateX(-${currentIndex * 60}%)`,
                    }, children: projects.map((project, i) => (_jsx(ProjectCard, { title: project.title, description: project.description, img: project.img, className: styles.card }, i))) }) }))] }));
};
//# sourceMappingURL=Projects.js.map