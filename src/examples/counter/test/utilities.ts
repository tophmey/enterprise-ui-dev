import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event';

const renderComponent = (ui: React.ReactElement, options?: any) => {
    const user = userEvent.setup();
    const result = render(ui, options);
    return {
        ...result,
        user,
    }
}

export { renderComponent };

/**
 * For a complete example, see: test/utilities.ts
 */
