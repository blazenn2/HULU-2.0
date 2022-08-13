import Thumbnail from "./Thumbnail";

const Results = ({ results }) => {
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-4 gap-y-6">
            {results.data.results.map((val, i) => <Thumbnail key={i} data={val} />)}
        </div>
    )
}

export default Results
