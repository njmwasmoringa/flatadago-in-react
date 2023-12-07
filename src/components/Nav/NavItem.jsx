export default function NavItem({ item, onSelectMovie, handleDelete }) {
    return (<li className="film item">
        <a href="#" onClick={() => onSelectMovie(item)}>
            <span onClick={() => onSelectMovie(item)}>{item.title}</span>
            <span>{item.capacity - item.tickets_sold}</span>
        </a>
        <button onClick={() => handleDelete(item)}>&times;</button>
    </li>)
}