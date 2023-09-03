import React, { useEffect, Fragment, useState } from "react";

import {
  useTable,
  useSortBy,
  useRowSelect,
  useFilters,
  useGlobalFilter,
  useExpanded,
  usePagination,
  HeaderCellSelect,
  CellSelect,
} from "react-table";
// import { useSelector, useDispatch } from "react-redux";
import { Table, Row, Col, Button, Input } from "reactstrap";
// import excel from "../../img/excel.svg";
import ReactTooltip from "react-tooltip";
import { CSVLink } from "react-csv";
import { useDispatch, useSelector } from "react-redux";
import * as types from "../state-management/actions/actionTypes";
import { GlobalFilter, DefaultFilterForColumn } from "./Filter";
import SvgIcons from "../assets/img/SvgIcons2";
import {
  Checkbox,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

const ReactTable = ({
  setRowSelection,
  showPagination,
  showCheckbox,
  columns,
  data,
  renderRowSubComponent,
  getRowProps,
  totalCount,
  reportFileName,
  reportData,
  excelHeader,
}) => {
  const [selection, setSelection] = React.useState(false);

  const pageSize = useSelector((state) => state.UserInfoReducer?.pageSize);
  const dispatch = useDispatch();
  const IndeterminateCheckbox = React.forwardRef(
    //This is the function for the checkboxes in page select
    ({ indeterminate, ...rest }, ref) => {
      const defaultRef = React.useRef();
      const resolvedRef = ref || defaultRef;

      React.useEffect(() => {
        resolvedRef.current.indeterminate = indeterminate;
      }, [resolvedRef, indeterminate]);

      return (
        <>
          <input
            type="checkbox"
            ref={resolvedRef}
            {...rest}
            onClick={(e) => handleClick(e)}
          />
        </>
      );
    }
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    visibleColumns,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    setFilter,
    selectedFlatRows,
    state,
    setGlobalFilter,
    preGlobalFilteredRows,
    state: { pageIndex, selectedRowIds },
  } = useTable(
    {
      columns,
      data,
      initialState: {
        pageIndex: 0,
        pageSize: showPagination ? pageSize : "500",
        hiddenColumns: [""],
      },
      useRowSelect,
      defaultColumn: { Filter: DefaultFilterForColumn },
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    useExpanded,
    usePagination,
    useRowSelect,
    (hooks) => {
      setRowSelection
        ? selection &&
          hooks.visibleColumns.push((columns) => [
            // Let's make a column for selection
            {
              id: "selection",
              width: "30px",
              // The header can use the table's getToggleAllRowsSelectedProps method
              // to render a checkbox
              Header: ({ getToggleAllPageRowsSelectedProps }) => (
                <div>
                  <IndeterminateCheckbox
                    {...getToggleAllPageRowsSelectedProps()}
                  />
                </div>
              ),
              // The cell can use the individual row's getToggleRowSelectedProps method
              // to the render a checkbox
              Cell: ({ row }) => (
                <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
              ),
            },
            ...columns,
          ])
        : showCheckbox &&
          hooks.visibleColumns.push((columns) => [
            // Let's make a column for selection
            {
              id: "selection",
              width: "30px",
              // The header can use the table's getToggleAllRowsSelectedProps method
              // to render a checkbox
              Header: ({ getToggleAllPageRowsSelectedProps }) => (
                <div>
                  <IndeterminateCheckbox
                    {...getToggleAllPageRowsSelectedProps()}
                  />
                </div>
              ),
              // The cell can use the individual row's getToggleRowSelectedProps method
              // to the render a checkbox
              Cell: ({ row }) => (
                <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
              ),
            },
            ...columns,
          ]);
    }
  );
  useEffect(() => {
    //setRowSelection(Object.keys(selectedRowIds));
    showCheckbox &&
      dispatch({
        type: types.sendMessage_To,
        payload: data.filter((ss, index) =>
          Object.keys(selectedRowIds).some((dd) => dd == index)
        ),
      });
  }, [showCheckbox, selectedRowIds]);
  useEffect(() => {
    showPagination ? setPageSize(Number(pageSize)) : setPageSize(500);
  }, [pageSize]);

  const generateSortingIndicator = (column) => {
    return column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : "";
  };
  const onChangeInSelect = (event) => {
    dispatch({
      type: types.set_PageSize,
      payload: Number(event.target.value),
    });
  };
  const columnSort = columns.slice(0);
  //const mainHeaderGroups = [...headerGroups];
  //mainHeaderGroups[0].headers.pop(0);
  const onChangeInInput = (event) => {
    const page = event.target.value ? Number(event.target.value) - 1 : 0;
    gotoPage(page);
  };
  // const handleFilterChange = (e) => {
  //   const value = e.target.value || undefined;
  //   setFilter("firstName", "lastName", value);
  //   // setFilter("lastName", value);
  //   setFilterInput(value);
  // };

  const handleClick = (row) => {
    // if (
    //   selectedRow.find((item) => {
    //     return item.id === row.id;
    //   }) === undefined
    // ) {
    //   SetSelectedRow((prev) => [...prev, row]);
    // } else {
    //   const arr = selectedRow.filter((item) => item.id !== row.id);
    //   SetSelectedRow(arr);
    // }
  };
  const handleCheckBox = () => {
    setSelection(!selection);
  };
  return (
    <Fragment>
      <div className="flex">
        {setRowSelection && (
          <div className="flex-2">
            <ListItem
              secondaryAction={
                <Checkbox
                  edge="end"
                  onChange={handleCheckBox}
                  checked={selection}
                  inputProps={{
                    "aria-labelledby": `checkbox-list-secondary-label-0`,
                  }}
                  defaultChecked
                  disablePadding
                />
              }
              sx={{
                paddingRight: 0,
              }}
            >
              <ListItemButton>
                <ListItemText
                  id={`checkbox-list-secondary-label-0`}
                  primary="انتخاب افراد در گروه"
                  sx={{
                    textAlign: "right",
                  }}
                />
              </ListItemButton>
            </ListItem>
          </div>
        )}
        <div className="flex-1">
          <GlobalFilter
            preGlobalFilteredRows={preGlobalFilteredRows}
            globalFilter={state.globalFilter}
            setGlobalFilter={setGlobalFilter}
          />
        </div>
      </div>

      {/* <input
        className="my-3 w-96 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500}}"
        value={filterInput}
        onChange={handleFilterChange}
        placeholder={"جستجو"}
      /> */}
      <ReactTooltip />
      {reportData && (
        <div
          dir="ltr"
          style={{ marginTop: "-15px", backgroundColor: "transparent" }}
        >
          <div
            className=" mt-3 btnSendToExcel  mx-3 "
            style={{ backgroundColor: "transparent" }}
          >
            <CSVLink
              data={reportData}
              headers={excelHeader}
              filename={reportFileName}
            >
              <img
                data-tip="خروجی به اکسل"
                alt="خروجی به اکسل"
                // src={excel}
                style={{ height: "40px" }}
              ></img>
            </CSVLink>
          </div>
        </div>
      )}
      <Table bordered hover {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps({
                    style: {
                      minWidth: column.minWidth,
                      width: column.width,
                      backgroundColor: column.backgroundColor,
                    },
                  })}
                >
                  <div {...column.getSortByToggleProps()}>
                    {column.render("Header")}
                    {generateSortingIndicator(columnSort)}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} id="selectedItems">
          {page.map((row) => {
            prepareRow(row);
            return (
              <Fragment key={row.getRowProps().key}>
                <tr
                  {...row.getRowProps(getRowProps(row))}
                  // onClick={handleClick(row)}
                >
                  {row.cells.map((cell) => {
                    return (
                      <td
                        style={
                          cell.column.id == "detail"
                            ? { textAlign: "left", padding: "4px" }
                            : {
                                padding: "4px",
                                maxWidth: "200px",
                                width: "80px",
                                overflowX: "auto",
                              }
                        }
                        {...cell.getCellProps()}
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
                {row.isExpanded && (
                  <tr>
                    <td colSpan={visibleColumns.length}>
                      {renderRowSubComponent(row)}
                    </td>
                  </tr>
                )}
              </Fragment>
            );
          })}
        </tbody>
      </Table>

      {showPagination && (
        <Row className="div_pagination">
          <Col md={2}>
            <Button
              className="btnRight_pagination mr-2"
              color="secondary"
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
            >
              <SvgIcons name="Forward" className={""} />
            </Button>
            <Button
              className="btnleft_pagination"
              color="secondary"
              onClick={nextPage}
              disabled={!canNextPage}
            >
              <SvgIcons name="Next" className={""} />
            </Button>
          </Col>
          {setRowSelection
            ? selection && (
                <Col md={2}>
                  تعداد سطر هاي انتخاب شده :
                  <strong>{Object.keys(selectedRowIds).length}</strong>
                </Col>
              )
            : showCheckbox && (
                <Col md={2}>
                  تعداد سطر هاي انتخاب شده :
                  <strong>{Object.keys(selectedRowIds).length}</strong>
                </Col>
              )}
          <Col md={2}>
            صفحه{" "}
            <strong>
              {pageIndex + 1} از {pageOptions.length}
            </strong>
            <Row style={{ display: "block" }}>
              {" "}
              تعداد کل ردیف ها : <strong>{totalCount}</strong>{" "}
            </Row>
          </Col>

          <Col md={2} sm={3} xs={3}>
            <Input
              type="number"
              className="pagination-number"
              min={1}
              max={pageOptions.length}
              defaultValue={pageIndex + 1}
              onChange={onChangeInInput}
            />
          </Col>
          <Col md={2} sm={3} xs={3}>
            <Input
              id="1"
              type="select"
              className="pagination-Level form-control"
              value={pageSize}
              onChange={onChangeInSelect}
            >
              {[5, 10, 20, 30, 40, 50].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  تعداد سطر {pageSize}
                </option>
              ))}
            </Input>
          </Col>
          <Col md={2}>
            <Button
              className="btnRight_pagination mr-2"
              color="secondary"
              onClick={previousPage}
              disabled={!canPreviousPage}
            >
              <SvgIcons name="Previous" className={""} />
            </Button>
            <Button
              className="btnleft_pagination"
              color="secondary"
              onClick={() => gotoPage(0)}
              disabled={!canPreviousPage}
            >
              <SvgIcons name="Backward" className={""} />
            </Button>
          </Col>
        </Row>
      )}
    </Fragment>
  );
};

export default ReactTable;
