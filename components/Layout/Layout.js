import Footer from "../Footer";

const Layout = ({ children, global, pageContext }) => {
  const { footer } = global;

  return (
    <>
      <main>{children}</main>
      <Footer data={footer} />
    </>
  );
};

export default Layout;
