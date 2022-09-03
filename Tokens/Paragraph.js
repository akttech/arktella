const style = {
  default: `text-base font-normal dark:text-white tracking-wider`,
  size: {
    xs: `text-xs`,
    sm: `text-sm `,
    md: `text-md `,
    lg: `text-lg bg-red-500`,
  },
};

const textSize = {
  xsmall: "xsmall",
  small: "small",
  medium: "medium",
  large: "large",
};

// check the size of the button
const checkSize = (size) => {
  return textSize.xsmall === size
    ? style.size.xs
    : textSize.small === size
    ? style.size.sm
    : textSize.medium === size
    ? style.size.md
    : textSize.large === size
    ? style.size.lg
    : "";
};

const Paragraph = ({ children, size }) => {
  return <p className={`${style.default} ${checkSize(size)} `}>{children}</p>;
};

const ParagraphCenter = ({ children, size }) => {
  return (
    <p className={`${style.default} text-center ${checkSize(size)}`}>
      {children}
    </p>
  );
};

const ParagraphRight = ({ children, size }) => {
  return (
    <p className={` text-right ${style.default} ${checkSize(size)}`}>
      {children}
    </p>
  );
};

export { Paragraph, ParagraphCenter, ParagraphRight };
