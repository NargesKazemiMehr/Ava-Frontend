import { Tooltip } from "@material-ui/core";
import React from "react";
import SvgIcons from "../assets/img/SvgIcons2";

export function Modal({
  setShowModal,
  children,
  crudMode,
  handleUpdate,
  handleDelete,
  handleAdd,
  handleDialog,
}) {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-center p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="font-semibold">
                {crudMode === 2
                  ? "فرم ويرايش"
                  : crudMode === 1
                  ? "فرم ايجاد"
                  : crudMode === 3
                  ? "فرم حذف"
                  : "ارسال پيام"}
              </h3>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              <div className="my-4 text-slate-500 text-lg leading-relaxed">
                {children}
              </div>
            </div>
            {/*footer*/}
            <div className="flex gap-3 items-center justify-center p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="flex bg-emerald-500 text-white gap-2 background-transparent active:bg-emerald-600 font-bold  px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="submit"
                onClick={() =>
                  crudMode === 2
                    ? handleUpdate(true)
                    : crudMode === 1
                    ? handleAdd()
                    : crudMode === 3
                    ? handleDelete()
                    : handleDialog()
                }
              >
                {crudMode === 2 ? (
                  <SvgIcons name="Edit" className="" />
                ) : crudMode === 1 ? (
                  <SvgIcons name="Add" className="" />
                ) : crudMode === 3 ? (
                  <SvgIcons name="Delete" className="" />
                ) : (
                  <SvgIcons name="Send" className="" />
                )}
                {crudMode === 2
                  ? "ويرايش"
                  : crudMode === 1
                  ? "افزودن"
                  : crudMode === 3
                  ? "حذف"
                  : "بله"}
              </button>
              <button
                className="flex bg-gray-50 text-blue-900 gap-2 background-transparent font-bold  px-6 py-2 rounded shadow hover:shadow-lg outline-none  mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(false)}
              >
                <SvgIcons name="Cancel" className="" />
                {crudMode === 4 ? "خير" : "لغو"}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}
