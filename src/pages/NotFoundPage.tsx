
interface INotFoundPage { }

export default function NotFoundPage(props: INotFoundPage) {
  return (
    <div className="not-found">
      <h2>Page not found</h2>
      <div className="cols cols-3 gap-32">
        <div className="col col-1">
          <div className="in-col">
            1111
          </div>
        </div>
        <div className="col col-2">
          <div className="in-col">
            2222
          </div>
        </div>
        <div className="col col-3">
          <div className="in-col">
            3333
          </div>
        </div>
      </div>
    </div>
  )
}
