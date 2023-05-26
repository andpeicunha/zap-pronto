import React, { useEffect, useState, ChangeEvent } from "react";
import DataGrid, { textEditor, Column } from "react-data-grid";
import { read, utils, WorkSheet, writeFile } from "xlsx";
import mongoose from "mongoose";

import "react-data-grid/lib/styles.css";

type DataSet = { [index: string]: WorkSheet };
type Row = any[];
type AOAColumn = Column<Row>;
type RowCol = { rows: Row[]; columns: AOAColumn[] };

const url = "mongodb://localhost:27017/sheetjs";
const db_name = "sheetjs";

const getRowsCols = (data: DataSet, sheetName: string): RowCol => ({
  rows: utils.sheet_to_json<Row>(data[sheetName], { header: 1 }),

  columns: Array.from(
    {
      length: utils.decode_range(data[sheetName]["!ref"] || "A1").e.c + 1,
    },
    (_, i) => ({ key: String(i), name: utils.encode_col(i), editor: textEditor })
  ),
});

export function SheetJs() {
  const [rows, setRows] = useState<Row[]>([]); // data rows
  const [columns, setColumns] = useState<AOAColumn[]>([]); // columns
  const [workBook, setWorkBook] = useState<DataSet>({} as DataSet); // workbook
  const [sheets, setSheets] = useState<string[]>([]); // list of sheet names
  const [current, setCurrent] = useState<string>(""); // selected sheet

  /* this method handles refreshing the state with new workbook data */
  async function handleAB(file: ArrayBuffer): Promise<void> {
    const data = read(file);

    setWorkBook(data.Sheets);
    setSheets(data.SheetNames);

    /* select the first worksheet */
    const name = data.SheetNames[0];
    const { rows: new_rows, columns: new_columns } = getRowsCols(data.Sheets, name);

    console.log("Rows:", new_rows);

    setRows(new_rows);
    setColumns(new_columns);
    setCurrent(name);
  }

  /* called when file input element is used to select a new file */
  async function handleFile(ev: ChangeEvent<HTMLInputElement>): Promise<void> {
    const file = await ev.target.files?.[0]?.arrayBuffer();
    if (file) await handleAB(file);
  }

  return (
    <>
      <input type="file" onChange={handleFile} />
      {sheets.length > 0 && (
        <>
          <DataGrid columns={columns} rows={rows} onRowsChange={setRows} />
        </>
      )}
    </>
  );
}
