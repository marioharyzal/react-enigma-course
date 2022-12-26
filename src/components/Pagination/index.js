import React from 'react';
import {Pagination as BoostrapPagination} from "react-bootstrap";

import {StyledPagination} from "./styles";

const Pagination = ({ totalPage, page, onChangePage }) => {
    const paginationItems = Array(totalPage).fill(0);
    return (
        <StyledPagination>
            { paginationItems.map((item, index) => {
                const isActive = page === index + 1;
                return  (
                    <BoostrapPagination.Item
                        key={index}
                        active={isActive}
                        onClick={!isActive ? () => onChangePage(index + 1) : () => {}}
                    >
                        {index + 1}
                    </BoostrapPagination.Item>
                )
            })}
        </StyledPagination>
    )
};

export default Pagination;
