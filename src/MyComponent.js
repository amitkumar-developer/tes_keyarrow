function MyComponent() {
    const person = {
      name: 'John Doe',
      age: 25,
      occupation: 'Engineer'
    };
    
    return (
      <div>
        <p>Name: {person.name}</p>
        <p>Age: {person.age}</p>
        <p>Occupation: {person.occupation}</p>
      </div>
    );
  }
export default MyComponent;  