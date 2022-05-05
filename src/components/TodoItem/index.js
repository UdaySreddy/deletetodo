import './index.css'

const TodoItem = props => {
  const {userList, deleteTodo} = props
  const {title, id} = userList
  const ondelete = () => {
    deleteTodo(id)
  }
  return (
    <li className="listelement">
      <p>{title}</p>
      <button type="button" onClick={ondelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
