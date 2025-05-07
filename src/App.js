import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import './App.css';
import { mockProjectsCards } from './assets/mockProjectCards/index';
import { ProjectSlider } from './features/Projects/Projects';
import BlockClients from './features/BlockClients/BlockClients';
import Philosophy from '@/features/Philosophy/Philosophy';
function App() {
    return (_jsxs(_Fragment, { children: [_jsx(Philosophy, {}), _jsx(BlockClients, {}), _jsx(ProjectSlider, { projects: mockProjectsCards })] }));
}
export default App;
//# sourceMappingURL=App.js.map