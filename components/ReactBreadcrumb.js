import React from "react";
import { Breadcrumb } from "react-bootstrap";

export const ReactBreadcrumb = (Props) => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="/main">صفحه اصلی</Breadcrumb.Item>

      {Props.pro === "Email" ? (
        <Breadcrumb.Item active href="/Email">
          ايميل
        </Breadcrumb.Item>
      ) : Props.pro === "SMS" ? (
        <Breadcrumb.Item active href="/SMS">
          پيامك
        </Breadcrumb.Item>
      ) : Props.pro === "Soroush" ? (
        <Breadcrumb.Item active href="/Soroush">
          سروش
        </Breadcrumb.Item>
      ) : (
        ""
      )}
    </Breadcrumb>
  );
};
