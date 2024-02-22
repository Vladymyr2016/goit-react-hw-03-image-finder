import React from 'react';

const Modal = () => {
  return <div></div>;
};

export default Modal;

// import React from 'react';
// import s from './Modal.module.css';

// class Modal extends React.Component {
//   componentDidMount() {
//     document.body.style.overflowY = 'hidden';

//     console.log('Modal is Open');
//     document.addEventListener('keydown', this.handleKeyDown);

//     this.timeoutId = setTimeout(() => {
//       console.log('Hello');
//     }, 3000);

//     this.intervalId = setInterval(() => {
//       console.log(new Date().toLocaleTimeString());
//     }, 1000);
//   }
//   componentWillUnmount() {
//     // toast.info('Modal is closed')
//     document.body.style.overflowY = 'auto';

//     document.removeEventListener('keydown', this.handleKeyDown);
//     clearInterval(this.intervalId);
//     clearTimeout(this.timeoutId);
//   }

//   handleKeyDown = e => {
//     console.log(e.key);
//     if (e.key === 'Escape') {
//       this.props.closeModal();
//     }
//   };

//   handleBackdropClick = e => {
//     if (e.target === e.currentTarget) {
//       this.props.closeModal();
//     }
//   };

//   render() {
//     return (
//       <ModalWrapper onClick={this.handleBackdropClick}>
//         <ModalContent>
//           <>
//             <h1>Modal</h1>
//             <hr />
//           </>
//           <CloseButton onClick={this.props.closeModal}>×</CloseButton>
//           {this.props.children}
//         </ModalContent>
//       </ModalWrapper>
//     );
//   }
// }

// export default Modal;
