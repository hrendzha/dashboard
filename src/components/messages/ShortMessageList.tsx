import ShortMessageListItem from './ShortMessageListItem'

interface IShortMessageList {}

export default function ShortMessageList(props: IShortMessageList) {
  const data = [1, 2, 3, 4, 5]
  return (
    <>
      {data.map((_, index) => <ShortMessageListItem key={`ShortMessageListItem_${index}`} />)}
    </>
  )
}
