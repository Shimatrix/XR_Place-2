import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import './App.css';
import { HowItWorksBlock } from './features/HowItWorks/HowItWorks';
import { mockProjectsCards } from './assets/mockProjectCards/index';
import { ProjectSlider } from './features/Projects/Projects';
import { BrowserRouter } from 'react-router-dom';
//<ProjectSlider projects={mockProjectsCards} />
function App() {
    return (_jsxs(_Fragment, { children: [_jsx(ProjectSlider, { projects: mockProjectsCards }), _jsx(BrowserRouter, { children: _jsx(HowItWorksBlock, { openModal: () => { }, closeModal: () => { } }) })] }));
}
export default App;
//# sourceMappingURL=App.js.map