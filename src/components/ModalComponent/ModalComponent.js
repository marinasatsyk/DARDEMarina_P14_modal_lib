import React from 'react';
import ReactDOM from 'react-dom';
import '../../styles.css';

export const Modal = ({ isModalOpened, hide, title, ...props }) =>
    isModalOpened
        ? ReactDOM.createPortal(
              <>
                  <div className="modalBackground">
                      <div className="modalContainer">
                          <div className="titleCloseBtn">
                              <div className="wrapperBtn">
                                  <button
                                      className="modal-close-button"
                                      onClick={hide}
                                  >
                                      <span>&times;</span>
                                  </button>
                              </div>
                          </div>
                          <div className="title-modal">
                              <h4>{title}</h4>
                          </div>
                          <div className="modal-body">{props.children}</div>
                      </div>
                  </div>
              </>,
              document.body
          )
        : null;
