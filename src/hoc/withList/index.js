import React from "react";
import {Button} from "react-bootstrap";
import {StyledContainer} from "../../components";
import {StyledText} from "./styles";
import Pagination from "../../components/Pagination";

const Empty = () => (
    <StyledText>Data Kosong...</StyledText>
)

export default (ListComponent, listData) => {
    return () => {
        const [data, setData] = React.useState(listData);
        const [page, setPage] = React.useState(1);

        return (
            <>
                <StyledContainer>
                    <Button variant="success">Add Data</Button>
                    {data?.data?.length > 0 ? <ListComponent data={data?.data} /> : <Empty />}
                </StyledContainer>
                <Pagination
                    totalPage={data?.pagination?.totalPage}
                    onChangePage={setPage}
                    page={page}
                />
            </>
        )
    }
}
