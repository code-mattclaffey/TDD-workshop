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

1. Write a snapshot test around the current accordion that is in place. This will be your "golden master" version. We will be updating this as we go along. To update a snapshot it is `npm run jest -- -u`.

2. Write a test around the open and close functionality. Remember to write the test to fail and then pass it onto the next person to make the test pass. *Tip*: Use utility class `u-visually-hidden` to show and hide the panel. (This will break your snapshot, so remember to update it ;))

### Bonus Task

Awesome! Hopefully you have written an event driven test on the component and you have written and you have snapshot tests in place! Legend! Let's try and make this component a little more accessble now. Now based on what you have learnt in the last two tasks try and make this component more accessible.

3a. The AccordionTab component needs to have a unique identifier which will determine which panel it will show or hide so we need to give it a prop. Write a test around added this prop in and check if it has the aria-expanded attribute, aria-controls attribute and the href attribute.
    - test case one to check that the aria-expanded is set to false when the tab is not active.
    - test case two to check that aria-expanded is set to true when the tab is active.
    - test case three is to check if all the attributes exist on the element via a snapshot or checking the attributes.

3b. The AccordionPanel will need an id attribute added to the div and a tabindex attribute assigned to it.
    - test case one you can check if tabIndex is -1 when the tab panel is inactive.
    - text case two you can check if the tabindex is 0 when the tab panel is active.
    - test case three you can check if the attributes exist via a snapshot or check if attributes exist on the element.

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