[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/uses-css.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/uses-git.svg)](https://forthebadge.com)

# ABOUT PACKAGE

This is a react modal component able to appear under certain actions. You'll have 2 elements: a hook useModal and Modal component. The component cover up the full screen. You can polulate this element with a content you want.

## 1. Install

```
 npm i darde_p14_modal_lib
```

## 2. Usage

### 2.1 Prerequisites

-   [React (**version 17.0.1)] the component is not compatible with react version 18.

### 2.2 how to use the component

A. You have to import the component into the page you have to implement this element.

```
import { Modal, useModal } from 'darde_p14_modal_lib';

```

B. Then you destructure and implement the state of Modal component into a react function

```
    const { isModalOpened: MyVariableName, toggle: MyFunctionName } =
        useModal();

```

In this example MyVariableName, MyFunctionName are the names of variable and function you choice.

C. Then you declare the modal component into your react component

```
<Modal
  isModalOpened={MyVariableName}
  hide={MyFunctionName}
  title="My text"
>
<MyReactComponent>
</Modal>
```

D. You have to implement the toggle function for display the modal element where you whant to use it.

```
<button onClick={()=> MyFunctionName}>

```

or

```
function handelSubmit = () => {
    .....
    MyFunctionName()
}
```

### 2.3 CSS

The style of each modal element can be modified using following class selectors:

```
modalBackground
modalContainer
titleCloseBtn
wrapperBtn
modal-close-button
title-modal
modal-body
```

You can also copy/past the following default style in your css

```
.modalBackground {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modalContainer {
    width: 350px;
    height: 100px;
    border-radius: 10px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 25px;
    position: relative;
}

.modalContainer .title-modal {
    display: inline-block;
    text-align: center;
    margin-top: 10px;
}
.modalContainer .title-modal h4 {
    font-size: 25px;
}

.titleCloseBtn {
    position: absolute;
    top: -15px;
    right: -15px;
}
.titleCloseBtn .wrapperBtn {
    border-radius: 50%;
    width: 30px;
    height: 30px;
    background: crimson;
    display: flex;
    justify-content: center;
    align-items: center;
}
.titleCloseBtn button {
    background-color: transparent;
    border: none;
    font-size: 25px;
    cursor: pointer;
    color: white;
}

```
