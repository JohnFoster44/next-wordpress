const Image = ({ children, width = '100%', height = 'auto', src, alt, srcSet, sizes, dangerouslySetInnerHTML }) => {
  return (
    <figure>
      <div>
        <img width={width} height={height} src={src} alt={alt || ''} srcSet={srcSet} sizes={sizes} />
      </div>
      {children && <figcaption>{children}</figcaption>}
      {dangerouslySetInnerHTML && (
        <figcaption
          dangerouslySetInnerHTML={{
            __html: dangerouslySetInnerHTML,
          }}
        />
      )}
    </figure>
  );
};

export default Image;
