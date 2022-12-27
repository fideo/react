
export const Character = ({isLoading, imageUrl, fullName, title}) => {
  
    return (
    <blockquote className="blockquote text-end">
      <img src={imageUrl} />
      <h3 className="mb-1">{fullName}</h3>
      <footer className="blockquote-footer pt-2">{title}</footer>
    </blockquote>
    )

}
