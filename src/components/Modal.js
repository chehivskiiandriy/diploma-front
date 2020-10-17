import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTransition, animated } from 'react-spring';
import classNames from 'classnames';

import PortalModal from './PortalModal';
import Icon from './Icon';
import deleteSvg from '../assets/icons/delete.svg';

const Modal = ({
  isOpen, size, closeHandler, withCloseButton, children,
}) => {
  useEffect(() => {
    const handleKeydown = event => {
      if (event.keyCode === 27) {
        closeHandler();
      }
    };

    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [closeHandler]);

  const wrapperTransition = useTransition(isOpen, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const transition = useTransition(isOpen, null, {
    from: { transform: 'translateY(100px)' },
    enter: { transform: 'translateY(0)' },
    leave: { transform: 'translateY(100px)' },
  });

  return (
    <PortalModal>
      {wrapperTransition.map(wrapper => (
        wrapper.item && (
          <animated.div key={wrapper.key} className="modal-wrapper" style={wrapper.props}>
            <div className="modal-backdrop" onClick={closeHandler} />
            {transition.map(({ item, key, props: transitionStyles }) => (
              item && (
                <animated.div
                  key={key}
                  className={classNames('modal-container', { [`modal-container--${size}`]: size })}
                  style={transitionStyles}
                >
                  {children}
                  {withCloseButton && (
                    <div className="modal-close" onClick={closeHandler}>
                      <Icon id={deleteSvg.id} />
                    </div>
                  )}
                </animated.div>
              )
            ))}
          </animated.div>
        )
      ))}
    </PortalModal>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  size: PropTypes.string,
  closeHandler: PropTypes.func.isRequired,
  withCloseButton: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

Modal.defaultProps = {
  size: '',
  withCloseButton: false,
};

export default Modal;
