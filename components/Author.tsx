
const Author = ({
  children, currAuthor, id
}: Readonly<{
  children?: React.ReactNode;
  currAuthor: string;
  id?: string;
}>) => {
  return (
    <div id={id} className="flex w-full text-sm font-roboto justify-end p-2 pt-0">
       - {currAuthor}
    </div>
  )
}

export default Author