import { NextPageContext } from "next";
import Image from "next/image";
import React from "react";
import { FallbackProps } from "react-error-boundary";

interface ErrorProps extends Omit<FallbackProps, "resetErrorBoundary"> {
  statusCode?: number;
  resetErrorBoundary: () => void;
}

function CustomErrorPage({
  error,
  resetErrorBoundary,
  statusCode
}: ErrorProps) {
  return (
    <div role="alert">
      <p className="text-center text-red-400 mt-7 mb-7">
        Something went wrong:
      </p>
      <pre className="font-bold text-center text-black">{error.message}</pre>
      <p className="text-center text-red-400 mt-7 mb-7">
        {statusCode
          ? `An error ${statusCode} occurred on server`
          : "An error occurred on client"}
      </p>

      <div className="flex justify-center">
        <Image
          src="/images/sad-face.svg"
          alt="error"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
}

CustomErrorPage.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default CustomErrorPage;
