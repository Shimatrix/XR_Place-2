import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import styles from './philosophy.module.scss';
import { BlockLabel } from '@/components/BlockLabel/BlockLabel';
import BlockTitle from '@/components/BlockTitle/BlockTitle';
import Typography from '@/components/Typography/Typography';
import illustration from '@/assets/img/xrp2.png';
const Philosophy = () => {
    const labelText = 'Наша философия';
    const titleTextPartOne = 'надёжный партнёр';
    const highlightedPhrase = 'успех';
    const descriptionText = 'Мы предлагаем уникальный виджет для создания виртуальных туров, которые позволяют вашим клиентам исследовать объекты недвижимости в интерактивном формате.';
    // определяем, мобильная ли сейчас ширина
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const mq = window.matchMedia('(max-width: 768px)');
        const onChange = (e) => setIsMobile(e.matches);
        setIsMobile(mq.matches);
        mq.addEventListener('change', onChange);
        return () => mq.removeEventListener('change', onChange);
    }, []);
    return (_jsx("div", { className: styles.blockContainer, children: _jsxs("div", { className: styles.blockContent, children: [_jsxs("div", { className: styles.headerGroup, children: [_jsx(BlockLabel, { className: styles.label, children: labelText }), _jsxs("div", { className: styles.titleGroup, children: [_jsx(BlockTitle, { className: styles.titlePart, children: titleTextPartOne }), _jsx(BlockTitle, { className: styles.titlePart, highlightedPhrase: highlightedPhrase, children: "\u0443\u0441\u043F\u0435\u0445 \u0431\u0438\u0437\u043D\u0435\u0441\u0430" })] })] }), _jsxs("div", { className: styles.mediaContainer, children: [_jsx("div", { className: styles.imageWrapper, children: _jsx("img", { src: illustration, width: 399, height: 247, alt: "\u0418\u043B\u043B\u044E\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u043E\u0431\u044A\u0435\u043A\u0442\u0430" }) }), _jsx("div", { className: styles.descriptionWrapper, children: _jsx(Typography, { variant: "p", className: styles.description, children: descriptionText }) }), isMobile ? (_jsxs("div", { className: styles.combinedSubtitle, children: [_jsxs(Typography, { variant: "h3", className: styles.subtitleLine, children: ["\u041F\u0440\u0435\u043E\u0431\u0440\u0430\u0437\u0443\u0439\u0442\u0435 \u0441\u0432\u043E\u044E", _jsx("br", {}), "\u0440\u0435\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C"] }), _jsxs(Typography, { variant: "h3", className: styles.subtitleLine, children: ["\u0421 \u0438\u043D\u0442\u0435\u0440\u0430\u043A\u0442\u0438\u0432\u043D\u044B\u043C\u0438", _jsx("br", {}), "\u0412\u0438\u0440\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u043C\u0438 3d \u0422\u0443\u0440\u0430\u043C\u0438"] })] })) : (_jsxs(_Fragment, { children: [_jsx("div", { className: styles.subtitleGroup, children: _jsxs(Typography, { variant: "h3", className: styles.subtitleFirst, children: ["\u041F\u0420\u0415\u041E\u0411\u0420\u0410\u0417\u0423\u0419\u0422\u0415 \u0421\u0412\u041E\u0401", _jsx("br", {}), "\u041F\u0420\u0415\u0414\u0421\u0422\u0410\u0412\u041B\u0415\u041D\u0418\u0415 \u041E \u041F\u041E\u041A\u0423\u041F\u041A\u0415 \u041D\u0415\u0414\u0412\u0418\u0416\u0418\u041C\u041E\u0421\u0422\u0418"] }) }), _jsxs("div", { className: styles.subtitleGroupTwo, children: [_jsx(Typography, { variant: "h3", className: styles.subtitleSecond, children: "\u0421 \u0418\u041D\u0422\u0415\u0420\u0410\u041A\u0422\u0418\u0412\u041D\u042B\u041C\u0418 \u0412\u0418\u0420\u0422\u0423\u0410\u041B\u042C\u041D\u042B\u041C\u0418" }), _jsx(Typography, { variant: "h3", className: styles.subtitleThird, children: "3D \u0422\u0423\u0420\u0410\u041C\u0418" })] })] })), _jsx("div", { className: styles.dotsPattern })] })] }) }));
};
export default Philosophy;
//# sourceMappingURL=Philosophy.js.map