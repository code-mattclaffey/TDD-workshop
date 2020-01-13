# :bug: Testing Workshop :bug:

Slides :books: - https://docs.google.com/presentation/d/1bWptPDNonRIAgT2U3sjeAxBc_hPzDIOFpkPuZ8HGdJc/edit?usp=sharing

## Installation

- `npm i`
- Open your terminal and run this command in one terminal - `npm start`
- Open another tab in your temrinal and run - `npm run test:watch`

## Dev Env

The Dev env is using storybook and it will show your tests passing or failing in the story so you can hide your terminal now and crack on inside storybook! :tada: :sparkles:

## Task

```
## User Story

As a user, 
When I go to the product details page and I interact with the product details component, 
I expect to be able to toggle between the panels that show different information about that product.

### Acceptance Criteria

- It should be able to open and close
- It should have the correct aria attributes assigned to the correct states
- Other Accordion Items should close
```


## Developer Notes

In the storybook, there is a panel that will tell you which tests need to be completed. They are under the "pending" section.

## Tips

### Writing a snapshot

// Component.test.tsx
```javascript
const { container } = render(<MyReactComponent />);

expect(container).toMatchSnapshot();
```

### Checking for attributes on an element

// Component.tsx
```javascript
return (
    <div id="testid" data-test-id="accordionPanel"></div>
);
```

// Component.test.tsx
```javascript
const { queryByTestId } = render(<MyReactComponent />);

expect(queryByTestId('accordionPanel').getAttribute('id')).toEqual('testId');
```

### Makinga collaspable component

```javascript

export const AccordionItem = ({ id, isActive = false }: AccordionItemInterface) => (
    <a href={`#${id}`} aria-controls={id} aria-expanded={isActive ? "true" : "false"}>My Link</a>

    <div id={id} tabIndex="-0">
        Some content
    </div>
);
```

### Adding props to typescript interfaces 

```typescript
export interface AccordionItemInterface {
    id: string;
    isActive?: boolean; // will be a new addition to the component
}
```

### Using the classnames module

```javascript
classNames('my-class', , { 'my-other-class': boolean });
```