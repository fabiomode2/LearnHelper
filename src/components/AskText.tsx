interface Props {
    text: string
}

const AskText = ({text} : Props) => {
  return (
    <>

    <div>{text}</div>
    </>
  )
}

export default AskText