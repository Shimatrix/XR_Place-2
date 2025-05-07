import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './BlockClients.module.scss';
import { BlockLabel } from '@/components/BlockLabel/BlockLabel';
import BlockTitle from '@/components/BlockTitle/BlockTitle';
import Typography from '@/components/Typography/Typography';
const BlockClients = () => {
    const labelText = 'Сотрудничество';
    const titleTextPartOne = 'клиенты';
    const titleTextPartTwo = 'нам доверяют';
    const highlightedPhrase = 'доверяют';
    const descriptionText = 'Наши клиенты — это часть нашей команды. С нами вы всегда можете рассчитывать на поддержку \nи экспертизу, ведь мы стремимся к тому, чтобы наше партнёрство не оставило вас равнодушными';
    return (_jsx("div", { className: styles.blockContainer, children: _jsxs("div", { className: styles.blockContent, children: [_jsxs("div", { className: styles.headerGroup, children: [_jsx(BlockLabel, { className: styles.label, children: labelText }), _jsxs("div", { className: styles.titleGroup, children: [_jsx(BlockTitle, { className: styles.titlePart, children: titleTextPartOne }), _jsx(BlockTitle, { className: styles.titlePart, highlightedPhrase: highlightedPhrase, children: titleTextPartTwo })] })] }), _jsx("div", { className: styles.descriptionWrapper, children: _jsx(Typography, { variant: "p", className: styles.description, children: descriptionText }) }), _jsx("div", { className: styles.clientBlockCards })] }) }));
};
export default BlockClients;
//# sourceMappingURL=BlockClients.js.map