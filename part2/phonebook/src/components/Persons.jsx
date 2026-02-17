const Persons = ({ persons, deletePerson }) => {
  return (
    <div>
      {persons.map(person => (
        <p key={person.id}>
          <strong>{person.name}</strong> | {person.number} | {person.place}
          <button onClick={() => deletePerson(person.id, person.name)}>
            delete
          </button>
        </p>
      ))}
    </div>
  )
}

export default Persons
