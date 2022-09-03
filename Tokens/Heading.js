const H1 = ({ children }) => {
  return (
    <h1 className="text-5xl font-extrabold dark:text-white">{children}</h1>
  );
};
const H2 = ({ children }) => {
  return (
    <h2 className="text-4xl font-extrabold dark:text-white">{children}</h2>
  );
};
const H3 = ({ children, style }) => {
  return (
    <h3 className={`text-3xl font-extrabold dark:text-white ${style}`}>
      {children}
    </h3>
  );
};
const H4 = ({ children }) => {
  return (
    <h4 className="text-2xl font-extrabold dark:text-white">{children}</h4>
  );
};
const H5 = ({ children }) => {
  return <h5 className="text-xl font-extrabold dark:text-white">{children}</h5>;
};
const H6 = ({ children }) => {
  return <h6 className="text-lg font-extrabold dark:text-white">{children}</h6>;
};

export { H1, H2, H3, H4, H5, H6 };
