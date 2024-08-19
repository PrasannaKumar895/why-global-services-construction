import React from 'react';

const Pagination = ({ onPageChange, totalItems, currentPage, pageSize }) => {
    const totalPages = Math.ceil(totalItems / pageSize);

    const renderPagination = () => {
        return Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNumber => (
            <li key={pageNumber} className={pageNumber === currentPage ? ' rounded-md' : ''}>
                <button
                    className="inline-block px-3 py-1 border border-orange-600 rounded-md hover:bg-orange-600 hover:text-white"
                    onClick={() => onPageChange(pageNumber)}
                >
                    {pageNumber}
                </button>
            </li>
        ));
    };

    return (
        <ul className="flex lg:ml-72  items-center justify-center my-8  gap-4">
            <li>
                <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}
                    className='bg-orange-600 py-1 px-3 rounded-md text-white'>
                    Previous
                </button>
            </li>
            {renderPagination()}
            <li>
                <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages} 
                     className='bg-orange-600 py-1 px-3 rounded-md text-white'>
                    Next
                </button>
            </li>
        </ul>
    );
};

export default Pagination;