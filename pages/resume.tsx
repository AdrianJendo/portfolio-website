"use client";
import { useEffect, useRef, useState } from "react";
import { NextPage } from "next/types";
import styles from "../styles/Resume.module.css";
import Image from "next/image";
import { pdfjs } from "react-pdf";
import { Document, Page } from "react-pdf";
import useWindowDimensions from "../hooks/useWindowDimensions";
import dynamic from "next/dynamic";

const Resume: NextPage = () => {
  pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
  const { width: screenWidth } = useWindowDimensions();
  const pdfRef = useRef<HTMLDivElement>(null);
  const [pdfWidth, setPdfWidth] = useState<number>();

  useEffect(() => {
    if (pdfRef && pdfRef.current) {
      setPdfWidth(pdfRef.current.scrollWidth); // 40px padding
    }
  }, [screenWidth]);

  return (
    <div className={styles.resumeContainer}>
      <h2 className={styles.resumeHeader}>Resume PDF</h2>
      <a
        className={styles.wrapperLink}
        href="/resume.pdf"
        download="Adrian Jendo Resume"
      >
        <div className={styles.downloadCard}>
          <Image src="/download.svg" alt="pdf" height="64" width="64" />
          <h4>Download File (pdf)</h4>
        </div>
      </a>
      <h2 className={styles.resumeHeader}>Preview</h2>
      <div className={styles.resume} ref={pdfRef}>
        <Document file="/resume.pdf">
          {pdfWidth && (
            <Page
              pageNumber={1}
              width={pdfWidth}
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          )}
        </Document>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Resume), {
  ssr: false,
});
