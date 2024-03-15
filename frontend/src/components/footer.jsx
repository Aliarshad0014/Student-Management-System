import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-center items-center text-gray-300">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} The Millennium Universal College . All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;


// Smooth scroll footer

// import React, { useState, useEffect } from 'react';

// const Footer = () => {
//   const [showFooter, setShowFooter] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//       const scrollHeight = document.documentElement.scrollHeight;
//       const clientHeight = document.documentElement.clientHeight;

//       // Check if user has scrolled to the bottom
//       if (scrollTop + clientHeight >= scrollHeight - 20) {
//         setShowFooter(true);
//       } else {
//         setShowFooter(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const footerStyle = {
//     position: 'fixed',
//     bottom: '0',
//     left: '0',
//     right: '0',
//     backgroundColor: '#333',
//     padding: '20px',
//     zIndex: '20',
//     opacity: showFooter ? '1' : '0',
//     transition: 'opacity 0.5s ease'
//   };

//   return (
//     <footer style={footerStyle}>
//       <div className="container mx-auto flex justify-center items-center text-gray-300">
//         <p className="text-sm">
//           &copy; {new Date().getFullYear()} The Millennium Universal College. All rights reserved.
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
