import react,{ useState, useEffect } from 'react';

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setStudents(data))
      .catch((error) => console.error("Error fetching students:", error));
  }, []);

  return (
    <div style={{ padding: "20px",fontFamily: "Arial, " }}>
      <h2>std list</h2>
      {student.map((student) => (
        <p key={student.id}>
          {student.name} - {student.email}
        </p>
      ))}
    </div>
  );
}

export default App;