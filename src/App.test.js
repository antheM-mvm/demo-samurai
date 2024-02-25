import { render, screen } from '@testing-library/react';
import { createRoot } from "react-dom/client";
import SamuraiJSApp from "./App";
import {act} from "react-dom/test-utils";

// test('testing', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

it('renders without crashing', () => {
  act(() => {
    const div = document.createElement('div');
    const root = createRoot(div);
    root.render(<SamuraiJSApp />);
    root.unmount();
  })
});
