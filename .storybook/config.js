import { configure } from '@storybook/react';
import { addParameters, addDecorator } from '@storybook/react';
import {
    DocsPage,
    DocsContainer,
} from '@storybook/addon-docs/blocks';
import { withA11y } from '@storybook/addon-a11y';
import './storybook.css';

addDecorator(withA11y);

addParameters({
    docs: {
        container: DocsContainer,
        page: DocsPage,
    },
});

configure(
    require.context('../src/components', true, /\.stories\.tsx$/),
    module,
);
