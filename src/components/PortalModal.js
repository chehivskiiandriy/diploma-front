import { useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const modalRoot = document.getElementById('modal-root');

const PortalModal = ({ children }) => {
  const node = useMemo(() => document.createElement('div'), []);

  useEffect(() => {
    if (modalRoot && node) {
      modalRoot.appendChild(node);
    }
    return () => {
      if (modalRoot && node) {
        modalRoot.removeChild(node);
      }
    };
  }, [node]);

  return node ? createPortal(children, node) : null;
};

PortalModal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default PortalModal;
