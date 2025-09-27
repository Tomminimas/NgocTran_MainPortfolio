export const Section = ({ id, children, className = "" }: any) => (
  <section id={id} className={`section ${className}`}>{children}</section>
);
export const Container = ({ children, className = "" }: any) => (
  <div className={`container ${className}`}>{children}</div>
);
export const Card = ({ children, className = "" }: any) => (
  <div className={`card ${className}`}>{children}</div>
);