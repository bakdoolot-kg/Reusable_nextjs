export default function Container({ children }) {
  return (
    <div 
      className="container m-auto 2xl:px-32 xl:px-32 lg:px-16 md:px-0 sm:px-0 xs:px-0
      transition duration-[500ms] ease-linear">
      {children}
    </div>
  );
}
