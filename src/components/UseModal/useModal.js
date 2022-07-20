//partie Hook return modalHook
import React, { useState } from 'react';

export const useModal = () => {
    const [isModalOpened, setModalOpened] = useState(false);

    function toggle() {
        setModalOpened(!isModalOpened);
    }

    return {
        isModalOpened,
        toggle,
    };
};
