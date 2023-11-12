import { NextPageContext } from "next";
import React from "react";
import { FallbackProps } from "react-error-boundary";

interface ErrorProps extends Omit<FallbackProps, "resetErrorBoundary"> {
  statusCode?: number;
}

function CustomErrorPage({ error, statusCode }: ErrorProps) {
  return <div> {error} </div>;
}

CustomErrorPage.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default CustomErrorPage;
