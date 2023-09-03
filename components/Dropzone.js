import React, { useEffect, useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useDispatch, useSelector } from "react-redux";
import * as types from "../state-management/actions/actionTypes";

export const Dropzone = (props) => {
  let err_filecount = false;
  let err = false;
  const [file, setFile] = useState([]);

  const dispatch = useDispatch();
  const { sendMessageAttachment } = useSelector(
    (state) => state.SendMessageReducer
  );
  const onDrop = useCallback((acceptedFiles) => {
    var yy = [];
    acceptedFiles.forEach((item) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        yy.push(item);
        //setFile((prevState) => [...prevState, file]);
        //setFile(file);
      };
      reader.readAsArrayBuffer(item);
    });
    setFile(yy);
  }, []);
  const { fileRejections, acceptedFiles, getRootProps, getInputProps } =
    useDropzone({
      accept: props.accept,
      maxLength: props.maxLength,
      maxFiles: props.maxFiles,
      multiple: props.multiple,
      validator: NameValidator,
      onDrop,
    });

  const files =
    sendMessageAttachment.length > 0
      ? file.map((file) => (
          <div
            className="row p-2 border-bottom "
            style={{ "align-items": "center" }}
            key={file.path}
          >
            <div className="col-9 " dir="ltr">
              {file.path} -- {file.size} bytes
            </div>
            {/* <div className="col-2">
            <Tooltip title="حذف از لیست ضمائم" placement="bottom">
                <button onClick={() => handleDelete(file)}>
                  <SvgIcons
                    name="Delete"
                    className=" justify-center"
                    //onClick={handleDelete(item.domainID)}
                  />
                </button>
              </Tooltip> 
            </div>*/}
          </div>
        ))
      : acceptedFiles.map((file) => (
          <div
            className="row p-2 border-bottom "
            style={{ "align-items": "center" }}
            key={file.path}
          >
            <div className="col-9 " dir="ltr">
              {file.path} -- {file.size} bytes
            </div>
            {/* <div className="col-2">
                <Tooltip title="حذف از لیست ضمائم" placement="bottom">
                  <button onClick={() => handleDelete(file)}>
                    <SvgIcons
                      name="Delete"
                      className=" justify-center"
                      //onClick={handleDelete(item.domainID)}
                    />
                  </button>
                </Tooltip>
              </div> */}
          </div>
        ));

  const fileRejectionItems = fileRejections.map(({ file, errors }) => (
    <div
      className="row p-2 border-bottom "
      style={{ "align-items": "center" }}
      key={file.path}
    >
      <div className="col-9 " dir="ltr">
        {file.path} -- {file.size} bytes
        {errors.map((e) =>
          e.message !== "Too many files"
            ? () => {
                err = true;
                return (
                  <span className="text-danger" key={e.code}>
                    {e.message}
                  </span>
                );
              }
            : () => {
                err_filecount = true;
                return <span className="text-danger" key={e.code}></span>;
              }
        )}
      </div>

      {/* <div className="col-2">
<Tooltip title="حذف از لیست ضمائم" placement="bottom">
<button onClick={() => handleDelete(file)}>
  <SvgIcons
    name="Delete"
    className=" justify-center"
    //onClick={handleDelete(item.domainID)}
  />
</button>
</Tooltip>
</div> */}
    </div>
  ));
  useEffect(() => {
    if (file.length > 0) {
      console.log("D0", file.length);

      dispatch({
        type: types.sendMessage_Attachment,
        payload: file,
      });
      dispatch({
        type: types.has_Error,
        payload: false,
      });
    }
  }, [acceptedFiles]);
  useEffect(() => {
    //if (err_filecount || err) {
    if (fileRejectionItems.length > 0) {
      err_filecount = true;
      console.log("D1");
      dispatch({
        type: types.has_Error,
        payload: true,
      });
    }
  }, [fileRejectionItems]);
  useEffect(() => {
    if (sendMessageAttachment.length > 0) {
      setFile(sendMessageAttachment);
    }
  }, [sendMessageAttachment]);
  function NameValidator(file) {
    if (file.name.length > props.maxLength) {
      return {
        code: "خطا: تعداد فايل هاي مجاز در عنوان فايل ",
        message: `خطا:عنوان فايل بزرگتر از ${props.maxLength}  كاراكتر`,
      };
    }
    return null;
  }
  const handleDelete = (file1) => {
    const newFiles = [...file];
    newFiles.splice(newFiles.indexOf(file1), 1);

    setFile(newFiles);
  };
  return (
    <>
      {console.log("err_filecount", err_filecount, "err", err)}
      <section className="dropzone-container border-top-0">
        <div {...getRootProps({ className: "dropzone" })}>
          <input {...getInputProps()} />
          <span>
            با كليك و يا با كشيدن و رها كردن فايل ها در اين بخش مي توانيد فايل
            را اضافه كنيد
          </span>
        </div>
        {files?.length > 0 && (
          <>
            <h5 className="m-2">ضمائم :</h5>
            <aside className="">
              <div
                className=" mt-1 border border-muted text-left bg-light overflow-y-scroll overflow-x-hidden "
                style={{ maxHeight: "65px" }}
              >
                {files?.length > 0 && files}
                {fileRejectionItems.length > 0 && fileRejectionItems}
              </div>
            </aside>
          </>
        )}
      </section>

      {/* <ul dir="ltr">{fileRejectionItems}</ul> */}
      {err_filecount && (
        <ul>
          <li className="text-danger" key="خطا: تعداد فايل هاي بارگذاري شده ">
            خطا: تعداد فايل هاي بارگذاري شده بيش از حد مجاز -تنها مجاز به
            بارگذاري {props.maxFiles} فايل ميباشيد
          </li>
        </ul>
      )}
      {err && (
        <ul>
          <li className="text-danger" key="خطا: تعداد فايل هاي بارگذاري شده ">
            خطا: تعداد فايل ه -تنها مجاز به بارگذاري {props.maxFiles} فايل
            ميباشيد
          </li>
        </ul>
      )}
    </>
  );
};
