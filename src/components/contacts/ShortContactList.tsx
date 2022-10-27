import ShortContactsListItem from './ShortContactListItem';

interface IShortContactsList { }

export default function ShortContactList(props: IShortContactsList) {
  const data = [1, 2, 3, 4, 5];
  return (
    <>
      {data.map((_, index) => <ShortContactsListItem
        key={`ShortContactListItem_${index}`}
        name="Samantha William"
        position="Marketing Manager"
      />)}
    </>
  )
}
